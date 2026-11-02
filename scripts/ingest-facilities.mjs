#!/usr/bin/env node
/**
 * ingest-facilities.mjs — build the facilities directory data store.
 *
 * Sources (both public, bulk, no key):
 *   1. SAMHSA National Directory of Drug and Alcohol Use Treatment Facilities
 *      (Excel). Edition downloaded below; facility data is self-reported to
 *      the N-SUMHSS survey and refreshed annually — vintage is preserved in
 *      the output metadata and shown on every generated page.
 *   2. California DHCS "SUD Recovery Treatment Facilities" roster (CSV via
 *      the CA CHHS Open Data Portal / DHCS ArcGIS download service).
 * NPPES is intentionally NOT ingested in v1 (see meta.nppes note in the
 * output): the store carries the cross-reference fields as null rather than
 * fabricating matches.
 *
 * Usage:
 *   node scripts/ingest-facilities.mjs [--samhsa file.xlsx] [--dhcs file.csv]
 *                                      [--out src/data/facilities]
 * Missing inputs are downloaded into data-raw/ (gitignored).
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readXlsx } from "./lib/xlsx-lite.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SAMHSA_URL =
  "https://www.samhsa.gov/data/sites/default/files/reports/rpt53015/National%20Directory%20SU%202024_Final.xlsx";
const SAMHSA_EDITION = "2024";
const DHCS_URL =
  "https://gis.dhcs.ca.gov/api/download/v1/items/63459617d2604decab840bd2ca047ee2/csv?layers=0";

const args = process.argv.slice(2);
function argValue(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : null;
}
const outDir = resolve(ROOT, argValue("--out") ?? "src/data/facilities");
const rawDir = resolve(ROOT, "data-raw");
const retrievedAt = new Date().toISOString().slice(0, 10);

function ensureInput(flag, filename, url) {
  const given = argValue(flag);
  if (given) return resolve(given);
  const path = resolve(rawDir, filename);
  if (!existsSync(path)) {
    mkdirSync(rawDir, { recursive: true });
    console.log(`Downloading ${url}`);
    execFileSync("curl", ["-sL", "-m", "300", "-o", path, url], { stdio: "inherit" });
  }
  return path;
}

// ---------------------------------------------------------------- utilities
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function normName(text) {
  return (text ?? "")
    .toUpperCase()
    .replace(/[^A-Z0-9 ]+/g, " ")
    .replace(/\b(INC|LLC|LTD|CORP|CORPORATION|COMPANY|CO|THE)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  const src = text.replace(/^﻿/, "");
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (inQuotes) {
      if (ch === '"') {
        if (src[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && src[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
    } else field += ch;
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", DC: "District of Columbia",
  FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois",
  IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana",
  ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan", MN: "Minnesota",
  MS: "Mississippi", MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada",
  NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma",
  OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin",
  WY: "Wyoming", PR: "Puerto Rico", GU: "Guam", VI: "U.S. Virgin Islands",
  AS: "American Samoa", MP: "Northern Mariana Islands", FM: "Micronesia",
  MH: "Marshall Islands", PW: "Palau",
};

// Code groups decoded from the workbook's own Service Code Reference sheet.
// Service codes are unique across categories in this workbook (verified at
// ingest: a collision aborts the run), so token-set decoding is exact.
const DECODE_GROUPS = {
  careTypes: ["TC"],
  settings: ["SET"],
  payment: ["PAY", "PYAS"],
  groupsServed: ["SG"],
  languages: ["SL", "OL"],
  agesServed: ["AGE"],
  ownership: ["FOP"],
};

// ------------------------------------------------------------------- SAMHSA
function loadSamhsa(path) {
  const sheets = readXlsx(readFileSync(path));
  const names = Object.keys(sheets);
  const mainRows = sheets[names[0]];
  const keyRows = sheets[names[1]];
  const header = mainRows[0];
  const col = Object.fromEntries(header.map((h, i) => [h, i]));

  const codeInfo = new Map(); // code -> { category, label }
  for (const r of keyRows.slice(1)) {
    const [catCode, , code, label] = r;
    if (!code) continue;
    if (codeInfo.has(code) && codeInfo.get(code).category !== catCode) {
      throw new Error(`Service code collision across categories: ${code}`);
    }
    codeInfo.set(code, { category: catCode, label: (label ?? "").trim() });
  }
  const groupCodes = {};
  for (const [group, cats] of Object.entries(DECODE_GROUPS)) {
    groupCodes[group] = new Map();
    for (const [code, info] of codeInfo) {
      if (cats.includes(info.category)) groupCodes[group].set(code, info.label);
    }
  }
  const decode = (tokens, group) =>
    tokens.filter((t) => groupCodes[group].has(t)).map((t) => groupCodes[group].get(t));

  const facilities = [];
  for (const r of mainRows.slice(1)) {
    const name = (r[col.name1] ?? "").trim();
    if (!name) continue;
    const state = (r[col.state] ?? "").trim().toUpperCase();
    const city = (r[col.city] ?? "").trim();
    const tokens = (r[col.service_code_info] ?? "").split(/\s+/).filter(Boolean);
    facilities.push({
      name,
      dba: (r[col.name2] ?? "").trim() || null,
      street1: (r[col.street1] ?? "").trim(),
      street2: (r[col.street2] ?? "").trim() || null,
      city,
      citySlug: slugify(city),
      state,
      stateName: STATE_NAMES[state] ?? state,
      zip: (r[col.zip] ?? "").trim(),
      phone: (r[col.phone] ?? "").trim() || null,
      intakePhone: (r[col.intake1] ?? "").trim() || (r[col.intake1a] ?? "").trim() || null,
      website: null, // the directory Excel carries no website field; never invent one
      careTypes: decode(tokens, "careTypes"),
      settings: decode(tokens, "settings"),
      payment: decode(tokens, "payment"),
      groupsServed: decode(tokens, "groupsServed"),
      languages: decode(tokens, "languages"),
      agesServed: decode(tokens, "agesServed"),
      ownership: decode(tokens, "ownership")[0] ?? null,
      nppesNpi: null, // cross-reference stub: NPPES not ingested in v1
    });
  }
  return facilities;
}

// --------------------------------------------------------------------- DHCS
function loadDhcs(path) {
  const rows = parseCsv(readFileSync(path, "utf8"));
  const header = rows[0].map((h) => h.trim());
  const col = Object.fromEntries(header.map((h, i) => [h, i]));
  const records = [];
  for (const r of rows.slice(1)) {
    const facilityName = (r[col.Facility_Name] ?? "").trim();
    if (!facilityName) continue;
    const expRaw = (r[col.Lic_Expiration_Date] ?? "").trim();
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(expRaw);
    const expiration = m
      ? `${m[3]}-${m[1].padStart(2, "0")}-${m[2].padStart(2, "0")}`
      : null;
    records.push({
      applicationNumber: (r[col.Application_Number] ?? "").trim(),
      legalEntityName: (r[col.Legal_Entity_Name] ?? "").trim(),
      facilityName,
      street1: (r[col.Facility_Address1] ?? "").trim(),
      city: (r[col.Facility_City] ?? "").trim(),
      zip: (r[col.Facility_Zip] ?? "").trim().slice(0, 5),
      phone: (r[col.Facility_Phone] ?? "").trim() || null,
      applicationType: (r[col.Type_of_Application] ?? "").trim(), // Licensed | Certified
      programCode: (r[col.Program_Code] ?? "").trim(),
      treatmentCapacity: Number(r[col.Treatment_Capacity]) || null,
      licenseExpiration: expiration,
      targetPopulation: (r[col.Target_Population] ?? "").trim() || null,
      county: (r[col.CountyName] ?? "").trim(),
    });
  }
  return records;
}

function matchLicenses(facilities, licenses) {
  const byNameZip = new Map();
  const byNameCity = new Map();
  for (const lic of licenses) {
    for (const nm of [lic.facilityName, lic.legalEntityName]) {
      const key = normName(nm);
      if (!key) continue;
      if (!byNameZip.has(`${key}|${lic.zip}`)) byNameZip.set(`${key}|${lic.zip}`, lic);
      const cityKey = `${key}|${lic.city.toUpperCase()}`;
      if (!byNameCity.has(cityKey)) byNameCity.set(cityKey, lic);
    }
  }
  let matched = 0;
  for (const f of facilities) {
    if (f.state !== "CA") {
      f.license = null;
      continue;
    }
    const key = normName(f.name);
    const lic =
      byNameZip.get(`${key}|${f.zip.slice(0, 5)}`) ??
      byNameCity.get(`${key}|${f.city.toUpperCase()}`) ??
      null;
    f.license = lic
      ? {
          applicationType: lic.applicationType,
          programCode: lic.programCode,
          licenseExpiration: lic.licenseExpiration,
          treatmentCapacity: lic.treatmentCapacity,
          rosterFacilityName: lic.facilityName,
          legalEntityName: lic.legalEntityName,
          rosterPhone: lic.phone,
          rosterStreet1: lic.street1,
          matchBasis: "name + ZIP" ,
        }
      : null;
    if (lic) matched++;
  }
  return matched;
}

// ---------------------------------------------------------------------- main
function main() {
  const samhsaPath = ensureInput("--samhsa", "samhsa-national-directory-2024.xlsx", SAMHSA_URL);
  const dhcsPath = ensureInput("--dhcs", "ca-dhcs-sud-facilities.csv", DHCS_URL);

  const facilities = loadSamhsa(samhsaPath);
  const licenses = loadDhcs(dhcsPath);
  const caMatched = matchLicenses(facilities, licenses);

  // Slugs, unique within state+city.
  const used = new Map();
  for (const f of facilities) {
    const base = slugify(f.name) || "facility";
    const scope = `${f.state}|${f.citySlug}`;
    const seen = used.get(scope) ?? new Set();
    let slug = base;
    let n = 2;
    while (seen.has(slug)) slug = `${base}-${n++}`;
    seen.add(slug);
    used.set(scope, seen);
    f.slug = slug;
    f.path = `/facilities/${f.state.toLowerCase()}/${f.citySlug}/${slug}`;
  }

  const byState = new Map();
  for (const f of facilities) {
    if (!byState.has(f.state)) byState.set(f.state, []);
    byState.get(f.state).push(f);
  }

  mkdirSync(resolve(outDir, "by-state"), { recursive: true });
  const stateSummaries = [];
  for (const [code, list] of [...byState.entries()].sort()) {
    list.sort((a, b) => a.city.localeCompare(b.city) || a.name.localeCompare(b.name));
    writeFileSync(resolve(outDir, "by-state", `${code}.json`), JSON.stringify(list));
    const cities = new Map();
    for (const f of list) {
      const c = cities.get(f.citySlug) ?? { name: f.city, slug: f.citySlug, count: 0 };
      c.count++;
      cities.set(f.citySlug, c);
    }
    stateSummaries.push({
      code,
      name: STATE_NAMES[code] ?? code,
      facilityCount: list.length,
      cities: [...cities.values()].sort((a, b) => a.name.localeCompare(b.name)),
    });
  }

  writeFileSync(
    resolve(outDir, "ca-licenses.json"),
    JSON.stringify(
      licenses.map((l) => ({ ...l, normFacilityName: normName(l.facilityName), normLegalName: normName(l.legalEntityName) })),
    ),
  );

  const meta = {
    generatedAt: retrievedAt,
    sources: [
      {
        id: "samhsa",
        label: `SAMHSA National Directory of Drug and Alcohol Use Treatment Facilities, ${SAMHSA_EDITION} edition`,
        note: "Facility-reported survey data (N-SUMHSS); SAMHSA refreshes the directory annually.",
        retrievedAt,
        rows: facilities.length,
      },
      {
        id: "ca-dhcs",
        label: "California DHCS SUD Recovery Treatment Facilities roster",
        note: "State licensing roster (Licensed/Certified facilities), published by DHCS via the CA CHHS Open Data Portal.",
        retrievedAt,
        rows: licenses.length,
      },
      {
        id: "nppes",
        label: "NPPES (National Plan and Provider Enumeration System)",
        status: "not-ingested-v1",
        note: "Cross-reference fields are carried as null in v1. NPPES bulk ingestion is stubbed, not faked: no NPI values are published until the bulk file is actually processed.",
        retrievedAt: null,
        rows: 0,
      },
    ],
    totals: {
      facilities: facilities.length,
      states: stateSummaries.length,
      caFacilities: byState.get("CA")?.length ?? 0,
      caLicenseMatched: caMatched,
      caLicenseRecords: licenses.length,
    },
    states: stateSummaries,
  };
  writeFileSync(resolve(outDir, "index.json"), JSON.stringify(meta, null, 2));

  console.log(
    `Ingest complete: ${facilities.length} SAMHSA facilities across ${stateSummaries.length} states; ` +
      `${licenses.length} CA DHCS records; ${caMatched} CA license matches.`,
  );
}

main();
