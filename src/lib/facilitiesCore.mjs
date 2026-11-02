/**
 * facilitiesCore.mjs — pure logic for the facilities directory & listing
 * service (MindCheckTools /facilities). No I/O, no framework imports: this
 * module is exercised directly by tests/ghost-listing-directory.test.mjs.
 *
 * Hard rules encoded here (spec: ghost-listing-directory-spec-2026-11-01.md):
 * - Flat fees only. Nothing in this module prices by lead, call, referral,
 *   or outcome volume, and no copy string produced here promises volume.
 * - Findings are computed ONLY from data we actually hold (SAMHSA directory
 *   record + CA DHCS roster record). Checks we cannot run in v1 (for example
 *   live Google Business Profile lookups) are never claimed.
 * - Paid-tier eligibility verifies legal status (license match for SUD
 *   programs, NARR-affiliate certification for sober living). It never
 *   evaluates clinical quality.
 */

export const PRICING = {
  sud: { sprint: 99, careMonthly: 49, extraSprint: 49, extraCareMonthly: 25 },
  sober: { sprint: 49, careMonthly: 29, extraSprint: 25, extraCareMonthly: 15 },
};

export const SOURCES = {
  samhsa: {
    label: "SAMHSA National Directory of Drug and Alcohol Use Treatment Facilities, 2024 edition",
    vintageNote:
      "Facility-reported survey data (N-SUMHSS). SAMHSA refreshes this directory once a year.",
  },
  caDhcs: {
    label: "California DHCS SUD Recovery Treatment Facilities roster",
    vintageNote: "State licensing roster published by DHCS via the CA CHHS Open Data Portal.",
  },
};

export function normName(text) {
  return (text ?? "")
    .toUpperCase()
    .replace(/[^A-Z0-9 ]+/g, " ")
    .replace(/\b(INC|LLC|LTD|CORP|CORPORATION|COMPANY|CO|THE)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Split a phone string into its base number and optional extension.
 * Source data writes extensions inline ("907-562-4155 x143", "ext. 42",
 * "extension 42"). The extension must never be glued onto the base
 * number: digits stripped naively produce a longer, wrong number
 * ("9075624155143") that a tel: link would dial as-is.
 */
export function splitPhoneExtension(text) {
  const raw = (text ?? "").trim();
  const m = /^(.*?)[\s,;]*(?:x|ext\.?|extension)\s*(\d+)\s*$/i.exec(raw);
  if (m) return { base: m[1].trim(), extension: m[2] };
  return { base: raw, extension: null };
}

export function normPhone(text) {
  const digits = splitPhoneExtension(text).base.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
}

/** Digits for a tel: href — the base number only, extension never appended. */
export function telDigits(text) {
  return splitPhoneExtension(text).base.replace(/\D/g, "");
}

function streetNumber(text) {
  const m = /^\s*(\d+)/.exec(text ?? "");
  return m ? m[1] : null;
}

/**
 * Compute the free-check findings for one facility from the data we hold.
 * @param {object} facility normalized facility record (see ingest output)
 * @param {{retrievedAt: string}} ctx ISO date the sources were retrieved
 * @returns {Array<{id:string, kind:"mismatch"|"gap"|"note", title:string, detail:string, fix:string}>}
 */
export function computeFindings(facility, ctx) {
  const findings = [];
  const retrievedAt = ctx.retrievedAt;

  findings.push({
    id: "federal-vintage",
    kind: "note",
    title: "Federal directory data is refreshed once a year",
    detail:
      `This record comes from the ${SOURCES.samhsa.label} (retrieved ${retrievedAt}). ` +
      SOURCES.samhsa.vintageNote +
      " If the program moved, changed its phone number, or changed services since the survey, the version referral sources see is out of date — and nobody notifies the program.",
    fix: "A Listing Sprint files corrections through SAMHSA's written update channels and keeps the filed dates on record.",
  });

  if (!facility.phone) {
    findings.push({
      id: "no-phone",
      kind: "gap",
      title: "No phone number in the federal directory record",
      detail:
        "The SAMHSA directory record for this program carries no phone number. People in crisis search by phone first; a missing number is a dead end.",
      fix: "Confirm the current intake number and file it with SAMHSA through the written correction channel.",
    });
  }

  if (!facility.website) {
    findings.push({
      id: "no-website-in-record",
      kind: "note",
      title: "No website address in the federal directory record",
      detail:
        "The federal directory record for this program carries no website address, so this page cannot link to the program's site. (The directory data itself has no website field; the program's own site may still exist.)",
      fix: "A Listing Sprint confirms the program's website and records it on the claimed page here.",
    });
  }

  if (facility.state === "CA") {
    const lic = facility.license;
    if (!lic) {
      findings.push({
        id: "roster-no-match",
        kind: "gap",
        title: "No matching record found in the California licensing roster",
        detail:
          `We could not match this program to a record in the ${SOURCES.caDhcs.label} (retrieved ${retrievedAt}) by facility name and location. ` +
          "This can mean the program is licensed under a different legal name, is certified by another body, or is missing from the roster extract we hold. It is not, by itself, proof that a program is unlicensed.",
        fix: "A Listing Sprint starts with manual license verification against DHCS records before any listing work is sold.",
      });
    } else {
      findings.push({
        id: "license-match",
        kind: "note",
        title: "California license record matched",
        detail:
          `Matched to the DHCS roster as "${lic.rosterFacilityName}" (${lic.applicationType}, program code ${lic.programCode}` +
          (lic.licenseExpiration ? `, expiration on file ${lic.licenseExpiration}` : "") +
          `). This verifies a legal-status record exists; it says nothing about quality of care.`,
        fix: "No action needed for the match itself. Directory Care re-checks the roster each month for changes.",
      });
      if (lic.licenseExpiration && lic.licenseExpiration < retrievedAt) {
        findings.push({
          id: "license-expiration-past",
          kind: "mismatch",
          title: "Roster expiration date on file is in the past",
          detail:
            `The DHCS roster record matched to this program shows an expiration date of ${lic.licenseExpiration}, before the roster retrieval date of ${retrievedAt}. ` +
            "If the license was renewed, the roster extract and every listing built from it are carrying a stale date. If it was not renewed, the program should not be listed as currently licensed.",
          fix: "Verify current status directly with DHCS. If renewed, a Listing Sprint prepares the correction packet for the record holder to file.",
        });
      }
      if (facility.phone && lic.rosterPhone && normPhone(facility.phone) !== normPhone(lic.rosterPhone)) {
        findings.push({
          id: "phone-mismatch",
          kind: "mismatch",
          title: "Phone number differs between the federal directory and the state roster",
          detail:
            `SAMHSA directory: ${facility.phone}. CA DHCS roster: ${lic.rosterPhone}. One of these reaches the wrong desk — or nobody.`,
          fix: "Confirm which number is the live intake line, then file the correction with the source that is wrong.",
        });
      }
      const a = streetNumber(facility.street1);
      const b = streetNumber(lic.rosterStreet1);
      if (a && b && a !== b) {
        findings.push({
          id: "address-mismatch",
          kind: "mismatch",
          title: "Street address differs between the federal directory and the state roster",
          detail:
            `SAMHSA directory: ${facility.street1}. CA DHCS roster: ${lic.rosterStreet1}. A moved program with a stale address sends people to the wrong building.`,
          fix: "Confirm the current street address and file the correction with the source that is wrong.",
        });
      }
    }
  } else {
    findings.push({
      id: "roster-not-integrated",
      kind: "note",
      title: `${facility.stateName ?? facility.state} licensing roster is not yet integrated`,
      detail:
        "This check compares the federal directory record against the data sources we hold. State licensing rosters are integrated state by state; California is integrated today. " +
        "A Listing Sprint for a program in this state includes manual license verification against the state roster before any listing work begins.",
      fix: "Manual verification is part of the Sprint intake for states whose rosters are not yet integrated.",
    });
  }

  return findings;
}

/**
 * Paid-tier eligibility for an SUD program claim.
 * @param {{facility?: object|null, licenseNumber?: string, caLicenses?: object[], today: string}} args
 * @returns {{status:"eligible"|"manual-review"|"not-eligible", reasons:string[]}}
 */
export function evaluateSudEligibility({ facility = null, licenseNumber = "", caLicenses = [], today }) {
  const reasons = [];
  if (facility?.license) {
    if (facility.license.licenseExpiration && facility.license.licenseExpiration < today) {
      reasons.push(
        `A DHCS roster record matches this facility, but its expiration on file (${facility.license.licenseExpiration}) is in the past. Current status must be confirmed with DHCS before paid services can begin.`,
      );
      return { status: "manual-review", reasons };
    }
    reasons.push(
      `State roster license match found (CA DHCS, ${facility.license.applicationType}, program code ${facility.license.programCode}). Paid tiers require a verified license match; this facility has one.`,
    );
    return { status: "eligible", reasons };
  }
  const wanted = (licenseNumber ?? "").replace(/[\s-]/g, "").toUpperCase();
  if (wanted) {
    const hit = caLicenses.find(
      (l) => (l.applicationNumber ?? "").replace(/[\s-]/g, "").toUpperCase() === wanted,
    );
    if (hit) {
      if (hit.licenseExpiration && hit.licenseExpiration < today) {
        reasons.push(
          `The license/application number matched a CA DHCS roster record for "${hit.facilityName}" (${hit.applicationType}), but its expiration on file (${hit.licenseExpiration}) is in the past. Current status must be confirmed with DHCS before paid services can begin.`,
        );
        return { status: "manual-review", reasons };
      }
      reasons.push(
        `License/application number matched a CA DHCS roster record for "${hit.facilityName}" (${hit.applicationType}). Eligibility is confirmed once the claim identity check passes.`,
      );
      return { status: "eligible", reasons };
    }
    reasons.push(
      "No CA DHCS roster record matches the license/application number provided, in the roster data we hold. Paid tiers cannot start until a license match is verified.",
    );
    return { status: "not-eligible", reasons };
  }
  if (!facility || facility.state === "CA") {
    reasons.push(
      "No license match was found for this facility in the CA DHCS roster data we hold. Paid tiers require a verified license match; the free listing check and a manual verification request stay available.",
    );
    return { status: "not-eligible", reasons };
  }
  reasons.push(
    `The ${facility.state} licensing roster is not yet integrated, so the license match is verified manually before any paid service begins.`,
  );
  return { status: "manual-review", reasons };
}

/**
 * Paid-tier eligibility for a sober living home claim.
 * @param {{narrCertified?: boolean, affiliateName?: string}} args
 * @returns {{status:"eligible"|"manual-review"|"not-eligible", reasons:string[]}}
 */
export function evaluateSoberEligibility({ narrCertified = false, affiliateName = "" }) {
  if (narrCertified && affiliateName.trim()) {
    return {
      status: "manual-review",
      reasons: [
        `Certification through ${affiliateName.trim()} was declared on the claim. It is verified against the affiliate's own registry before paid services begin; the claim is not approved on declaration alone.`,
      ],
    };
  }
  return {
    status: "not-eligible",
    reasons: [
      "Paid tiers for sober living homes require current certification through a NARR state affiliate (for example CCAPP in California, GARR in Georgia, NCARR in North Carolina). An uncertified home may hold a free operator-listed page, clearly marked \"certification not verified,\" but cannot buy listing services.",
    ],
  };
}

/**
 * Attach CA DHCS license records to CA facilities (ingest-time matching,
 * also re-runnable against the baked data store).
 *
 * A license match is a legal-status assertion about one specific
 * location, so the bar is corroboration, not resemblance: normalized
 * name and ZIP must agree AND the location must be corroborated by
 * street number — or, when either side has no street number, by the
 * base phone number. More than one distinct corroborating roster record
 * is ambiguity and resolves to NO match: a wrong-location match
 * presented as verified is worse than no match at all.
 *
 * @param {object[]} facilities normalized facility records (mutated: .license)
 * @param {object[]} licenses CA DHCS roster records (loadDhcs shape)
 * @returns {number} how many facilities got a license attached
 */
export function attachCaLicenses(facilities, licenses) {
  let matched = 0;
  for (const f of facilities) {
    f.license = null;
    if (f.state !== "CA") continue;
    const key = normName(f.name);
    if (!key) continue;
    const zip = (f.zip ?? "").slice(0, 5);
    const candidates = licenses.filter(
      (l) =>
        (l.zip ?? "").slice(0, 5) === zip &&
        (normName(l.facilityName) === key || normName(l.legalEntityName) === key),
    );
    if (!candidates.length) continue;
    const distinct = (list) => {
      const seen = new Map();
      for (const l of list) seen.set(`${l.applicationNumber ?? ""}|${l.programCode ?? ""}`, l);
      return [...seen.values()];
    };
    const fStreet = streetNumber(f.street1);
    const streetOk = distinct(
      candidates.filter(
        (l) => fStreet && streetNumber(l.street1) && streetNumber(l.street1) === fStreet,
      ),
    );
    let chosen = null;
    let basis = null;
    if (streetOk.length === 1) {
      chosen = streetOk[0];
      basis = "name + ZIP + street number";
    } else if (streetOk.length === 0) {
      const fPhone = normPhone(f.phone);
      const phoneOk = distinct(
        candidates.filter((l) => fPhone && l.phone && normPhone(l.phone) === fPhone),
      );
      if (phoneOk.length === 1) {
        chosen = phoneOk[0];
        basis = "name + ZIP + phone";
      }
    }
    if (!chosen) continue;
    f.license = {
      applicationType: chosen.applicationType,
      programCode: chosen.programCode,
      licenseExpiration: chosen.licenseExpiration,
      treatmentCapacity: chosen.treatmentCapacity,
      rosterFacilityName: chosen.facilityName,
      legalEntityName: chosen.legalEntityName,
      rosterPhone: chosen.phone,
      rosterStreet1: chosen.street1,
      matchBasis: basis,
    };
    matched++;
  }
  return matched;
}

// ------------------------------------------------------------ work email
// The claim route originally validated the work email with
// /^[^\s@]+@[^\s@]+\.[^\s@]+$/. That pattern backtracks quadratically on
// malformed dot-heavy domains (CodeQL js/polynomial-redos), and the route
// imposed no length bound, so a large crafted body could stall the
// endpoint. This structural check accepts exactly the same strings as the
// old pattern -- no whitespace, exactly one "@", a non-empty local part,
// and a domain dot with at least one character on each side of it -- in
// linear time, and rejects anything over the RFC 5321 254-character path
// maximum before doing any scanning.
export const MAX_WORK_EMAIL_LENGTH = 254;

export function isValidWorkEmail(email) {
  if (typeof email !== "string") return false;
  if (email.length === 0 || email.length > MAX_WORK_EMAIL_LENGTH) return false;
  if (/\s/.test(email)) return false;
  const at = email.indexOf("@");
  if (at <= 0 || at !== email.lastIndexOf("@")) return false;
  const domain = email.slice(at + 1);
  // A dot strictly inside the domain -- at least one character on each
  // side of it -- is exactly what the old pattern's [^\s@]+\.[^\s@]+
  // required.
  return domain.slice(1, -1).includes(".");
}
