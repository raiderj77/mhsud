import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import {
  PRICING,
  computeFindings,
  evaluateSoberEligibility,
  evaluateSudEligibility,
} from "../src/lib/facilitiesCore.mjs";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");
const readJson = async (file) => JSON.parse(await read(file));

async function listFiles(dir, suffixes) {
  const out = [];
  for (const entry of await readdir(new URL(`../${dir}`, import.meta.url), { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) out.push(...(await listFiles(path, suffixes)));
    else if (suffixes.some((s) => entry.name.endsWith(s))) out.push(path);
  }
  return out;
}

const SURFACE_FILES = async () => [
  ...(await listFiles("src/app/facilities", [".tsx", ".ts"])),
  ...(await listFiles("src/app/sober-living", [".tsx", ".ts"])),
  "src/components/FacilityDirectory.tsx",
  "src/lib/facilitiesCore.mjs",
  "src/lib/facilities.ts",
];

// ---------------------------------------------------------------- data layer
test("directory data: totals are internally consistent and complete", async () => {
  const index = await readJson("src/data/facilities/index.json");
  assert.ok(index.totals.facilities >= 11000, `expected >=11000 facilities, got ${index.totals.facilities}`);
  let sum = 0;
  for (const state of index.states) {
    const rows = await readJson(`src/data/facilities/by-state/${state.code}.json`);
    assert.equal(rows.length, state.facilityCount, `${state.code} count mismatch`);
    sum += rows.length;
    const slugs = new Set();
    for (const f of rows) {
      assert.ok(f.name && f.city && f.state && f.zip, `facility missing core fields: ${JSON.stringify(f).slice(0, 120)}`);
      assert.equal(f.state, state.code);
      const scope = `${f.citySlug}|${f.slug}`;
      assert.ok(!slugs.has(scope), `duplicate slug in ${state.code}: ${scope}`);
      slugs.add(scope);
      assert.equal(f.path, `/facilities/${f.state.toLowerCase()}/${f.citySlug}/${f.slug}`);
      assert.equal(f.nppesNpi, null, "NPPES must stay stubbed (null) in v1 — no fabricated matches");
    }
  }
  assert.equal(sum, index.totals.facilities);
});

test("directory data: CA license matches exist and SAMHSA decoding is real", async () => {
  const index = await readJson("src/data/facilities/index.json");
  assert.ok(index.totals.caLicenseMatched >= 400, `CA matches: ${index.totals.caLicenseMatched}`);
  assert.equal(index.totals.caLicenseRecords, index.sources.find((s) => s.id === "ca-dhcs").rows);
  const nppes = index.sources.find((s) => s.id === "nppes");
  assert.equal(nppes.status, "not-ingested-v1");

  const al = await readJson("src/data/facilities/by-state/AL.json");
  const shelby = al.find((f) => f.name === "Shelby County Treatment Center");
  assert.ok(shelby, "known SAMHSA facility must be present");
  assert.ok(shelby.settings.includes("Outpatient"), "service-code decoding must produce settings");
  assert.ok(shelby.payment.includes("Medicaid"), "PAY code MD must decode to Medicaid");
  assert.equal(shelby.website, null, "directory Excel has no website field — must stay null, never invented");
});

// -------------------------------------------------------------- no-PII build
test("no-PII: directory surface forms use only allowlisted business fields", async () => {
  const ALLOWED_FIELD_NAMES = new Set([
    "facilityName", "facilityState", "facilityCity", "segment",
    "operatorName", "operatorRole", "workEmail", "workPhone",
    "facilityPath", "licenseNumber", "narrCertified", "affiliateName",
  ]);
  const files = await SURFACE_FILES();
  let formCount = 0;
  for (const file of files) {
    const src = await read(file);
    const names = [...src.matchAll(/name="([^"]+)"/g)].map((m) => m[1]);
    for (const n of names) {
      assert.ok(ALLOWED_FIELD_NAMES.has(n), `${file}: form field "${n}" is not on the business-only allowlist`);
    }
    formCount += (src.match(/<form/g) ?? []).length;
    assert.doesNotMatch(
      src,
      /patient|dateOfBirth|date of birth|social security|\bssn\b|insurance (member|policy) (id|number)|home address/i,
      `${file}: consumer-PII concept present in the directory surface`,
    );
  }
  assert.equal(formCount, 2, "exactly two forms may exist: the free check and the operator claim");
});

test("no-PII: display pages have direct contact links and no forms or relay endpoints", async () => {
  const facilityPage = await read("src/app/facilities/[state]/[city]/[slug]/page.tsx");
  assert.match(facilityPage, /href=\{`tel:/, "facility page must link the provider's own phone directly");
  assert.doesNotMatch(facilityPage, /<form|<input|<textarea|<select/, "facility page must not collect anything");
  for (const page of [
    "src/app/facilities/page.tsx",
    "src/app/facilities/[state]/page.tsx",
    "src/app/facilities/[state]/[city]/page.tsx",
    "src/app/facilities/report/[state]/[city]/[slug]/page.tsx",
    "src/app/facilities/pricing/page.tsx",
    "src/app/sober-living/page.tsx",
  ]) {
    const src = await read(page);
    assert.doesNotMatch(src, /<form|<input|<textarea/, `${page} must not contain a form`);
  }
  const claimRoute = await read("src/app/facilities/api/claim/route.ts");
  assert.match(claimRoute, /ALLOWED_FIELDS/, "claim endpoint must enforce its field allowlist");
});

// ------------------------------------------------------------- barred copy
test("guardrails: no barred sales copy anywhere in the new surface", async () => {
  const files = await SURFACE_FILES();
  for (const file of files) {
    const src = await read(file);
    assert.doesNotMatch(src, /55\.6|56\s?%/, `${file}: the JAMA therapist-directory figure is barred in this segment`);
    assert.doesNotMatch(src, /per[- ]lead|per[- ]admission|pay per/i, `${file}: volume-based pricing language is barred (EKRA flat-fee rule)`);
    assert.doesNotMatch(src, /\badmissions\b|\bcensus\b/i, `${file}: volume-outcome copy is barred`);
    assert.doesNotMatch(src, /CADC|Jason Ramirez/, `${file}: no owner byline or credential on directory pages`);
    assert.doesNotMatch(src, /buy\.stripe\.com|checkout\.stripe\.com/, `${file}: no live checkout links while Stripe products are gated`);
  }
});

test("guardrails: flat-fee and verify-status-not-quality language is present", async () => {
  const pricing = await read("src/app/facilities/pricing/page.tsx");
  assert.match(pricing, /flat fee/i);
  assert.match(pricing, /never changes a program(?:&rsquo;|['’])s position/);
  assert.match(pricing, /do not evaluate quality of\s+care/i);
  const hub = await read("src/app/facilities/page.tsx");
  assert.match(hub, /does not take\s+messages, bookings, or personal\s+information|does not take\s+messages/);
});

// ------------------------------------------------------------------- pricing
test("pricing matches the locked spec numbers", () => {
  assert.deepEqual(PRICING, {
    sud: { sprint: 99, careMonthly: 49, extraSprint: 49, extraCareMonthly: 25 },
    sober: { sprint: 49, careMonthly: 29, extraSprint: 25, extraCareMonthly: 15 },
  });
});

test("checkout is env-gated off by construction", async () => {
  const ui = await read("src/components/FacilityDirectory.tsx");
  assert.match(ui, /NEXT_PUBLIC_FACILITY_SERVICES_ORDER_URL/);
  assert.match(ui, /checkout not open yet/i);
  const env = await read(".env.example");
  assert.match(env, /NEXT_PUBLIC_FACILITY_SERVICES_ORDER_URL=/);
});

// ----------------------------------------------------------------- findings
const baseFacility = {
  name: "Example Recovery Center",
  street1: "100 Main Street",
  city: "Fresno",
  state: "CA",
  stateName: "California",
  zip: "93710",
  phone: "559-555-0100",
  website: null,
  license: null,
};

test("findings: phone mismatch and expired license are detected from held data", () => {
  const f = {
    ...baseFacility,
    license: {
      applicationType: "Licensed",
      programCode: "RES",
      licenseExpiration: "2025-01-31",
      rosterFacilityName: "Example Recovery Center",
      legalEntityName: "Example Recovery Center Inc",
      rosterPhone: "559-555-0199",
      rosterStreet1: "100 Main Street",
    },
  };
  const findings = computeFindings(f, { retrievedAt: "2026-11-01" });
  const ids = findings.map((x) => x.id);
  assert.ok(ids.includes("phone-mismatch"));
  assert.ok(ids.includes("license-expiration-past"));
  assert.ok(ids.includes("license-match"));
  for (const x of findings) assert.ok(["mismatch", "gap", "note"].includes(x.kind));
});

test("findings: missing phone and unmatched CA roster are gaps, not accusations", () => {
  const findings = computeFindings({ ...baseFacility, phone: null }, { retrievedAt: "2026-11-01" });
  const ids = findings.map((x) => x.id);
  assert.ok(ids.includes("no-phone"));
  const roster = findings.find((x) => x.id === "roster-no-match");
  assert.ok(roster);
  assert.match(roster.detail, /not, by itself, proof/);
});

test("findings: non-CA facilities get the roster-not-integrated note", () => {
  const findings = computeFindings(
    { ...baseFacility, state: "TX", stateName: "Texas", city: "Austin" },
    { retrievedAt: "2026-11-01" },
  );
  assert.ok(findings.some((x) => x.id === "roster-not-integrated"));
});

// --------------------------------------------------------------- eligibility
test("eligibility: SUD license match rules", () => {
  const licensed = {
    ...baseFacility,
    license: { applicationType: "Licensed", programCode: "RES", licenseExpiration: "2027-06-30" },
  };
  assert.equal(evaluateSudEligibility({ facility: licensed, today: "2026-11-01" }).status, "eligible");

  const expired = {
    ...baseFacility,
    license: { applicationType: "Licensed", programCode: "RES", licenseExpiration: "2025-06-30" },
  };
  assert.equal(evaluateSudEligibility({ facility: expired, today: "2026-11-01" }).status, "manual-review");

  assert.equal(evaluateSudEligibility({ facility: baseFacility, today: "2026-11-01" }).status, "not-eligible");

  const byNumber = evaluateSudEligibility({
    facility: baseFacility,
    licenseNumber: "010001DN",
    caLicenses: [{ applicationNumber: "010001DN", facilityName: "Cherry Hill", applicationType: "Licensed" }],
    today: "2026-11-01",
  });
  assert.equal(byNumber.status, "eligible");

  const tx = { ...baseFacility, state: "TX", stateName: "Texas" };
  assert.equal(evaluateSudEligibility({ facility: tx, today: "2026-11-01" }).status, "manual-review");
});

test("eligibility: sober living requires NARR-affiliate certification", () => {
  assert.equal(
    evaluateSoberEligibility({ narrCertified: true, affiliateName: "CCAPP" }).status,
    "manual-review",
  );
  assert.equal(evaluateSoberEligibility({ narrCertified: false }).status, "not-eligible");
  assert.equal(
    evaluateSoberEligibility({ narrCertified: true, affiliateName: "" }).status,
    "not-eligible",
  );
});
