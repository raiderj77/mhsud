#!/usr/bin/env node
/**
 * API: node scripts/ingest-therapists.mjs [--out directory]
 * Reviewed CMS dissemination CSV: add --csv file --retrieved-at YYYY-MM-DD.
 * A capped or failed API query aborts before replacing the existing snapshot.
 */
import { mkdir, rename, rm, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parseArgs } from "node:util";
import { csvRows } from "./ingest-facility-supplements.mjs";
import { normalizeProvider, REGISTRY_URL, SPECIALTIES } from "../src/lib/therapistsCore.mjs";

const PAGE_SIZE = 200;
const MAX_SKIP = 1000;

export async function* registryRows(request = fetch) {
  for (const { query } of SPECIALTIES) {
    const seen = new Set();
    for (let skip = 0; skip <= MAX_SKIP; skip += PAGE_SIZE) {
      const params = new URLSearchParams({
        version: "2.1", enumeration_type: "NPI-1", taxonomy_description: query,
        state: "CA", limit: String(PAGE_SIZE), skip: String(skip),
      });
      const response = await request(`${REGISTRY_URL}/api/?${params}`, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`NPPES request failed for ${query} at skip ${skip}: HTTP ${response.status}`);
      const page = await response.json();
      const results = page?.results ?? (page?.result_count === 0 ? [] : null);
      if (!Array.isArray(results) || page.Errors || results.length > PAGE_SIZE ||
          (page.result_count !== undefined && page.result_count !== results.length)) {
        throw new Error(`Unexpected NPPES response for ${query} at skip ${skip}`);
      }
      for (const row of results) {
        const npi = String(row.number);
        if (seen.has(npi)) throw new Error(`NPPES pagination repeated an NPI for ${query}; use the reviewed CMS CSV`);
        seen.add(npi);
        yield { ...row, enumeration_type: row.enumeration_type ?? "NPI-1" };
      }
      if (results.length < PAGE_SIZE) break;
      if (skip === MAX_SKIP) throw new Error(`NPPES pagination ceiling reached for ${query}; use the reviewed CMS CSV`);
    }
  }
}

const COLUMNS = {
  number: "NPI",
  entity: "Entity Type Code",
  first: "Provider First Name",
  last: "Provider Last Name (Legal Name)",
  credential: "Provider Credential Text",
  city: "Provider Business Practice Location Address City Name",
  state: "Provider Business Practice Location Address State Name",
  deactivated: "NPI Deactivation Date",
  reactivated: "NPI Reactivation Date",
};
const SLOTS = Array.from({ length: 15 }, (_, i) => ({
  code: `Healthcare Provider Taxonomy Code_${i + 1}`,
  license: `Provider License Number_${i + 1}`,
  state: `Provider License Number State Code_${i + 1}`,
}));

export async function* disseminationRows(path) {
  let header;
  let positions;
  for await (const cells of csvRows(path)) {
    if (!header) {
      header = cells.map(value => value.replace(/^\uFEFF/, ""));
      positions = new Map(header.map((value, index) => [value, index]));
      if ([...Object.values(COLUMNS), ...SLOTS.flatMap(slot => Object.values(slot))].some(key => !positions.has(key))) {
        throw new Error("Required CMS dissemination CSV columns missing; review the exact source schema");
      }
      continue;
    }
    if (cells.length !== header.length) throw new Error("CMS dissemination CSV column count mismatch");
    const read = key => cells[positions.get(key)].trim();
    if (read(COLUMNS.entity) !== "1" || read(COLUMNS.state) !== "CA") continue;
    const deactivated = read(COLUMNS.deactivated);
    if (deactivated) {
      const reactivated = read(COLUMNS.reactivated);
      if (!reactivated || !(Date.parse(reactivated) > Date.parse(deactivated))) continue;
    }
    yield {
      number: read(COLUMNS.number),
      enumeration_type: "NPI-1",
      basic: { first_name: read(COLUMNS.first), last_name: read(COLUMNS.last), credential: read(COLUMNS.credential) },
      addresses: [{ address_purpose: "LOCATION", city: read(COLUMNS.city), state: read(COLUMNS.state) }],
      taxonomies: SLOTS.map(slot => ({ code: read(slot.code), license: read(slot.license), state: read(slot.state) })),
    };
  }
  if (!header) throw new Error("CMS dissemination CSV is empty");
}

export async function collectProviders(rows) {
  const byNpi = new Map();
  for await (const row of rows) {
    const provider = normalizeProvider(row);
    if (!provider) continue;
    const existing = byNpi.get(provider.npi);
    if (existing) {
      existing.specialties = SPECIALTIES.map(item => item.label)
        .filter(label => existing.specialties.includes(label) || provider.specialties.includes(label));
      existing.registryLicenseNumbers = [...new Set([...existing.registryLicenseNumbers, ...provider.registryLicenseNumbers])].sort();
    } else {
      byNpi.set(provider.npi, provider);
    }
  }
  return [...byNpi.values()].sort((a, b) => a.city.localeCompare(b.city) || a.name.localeCompare(b.name) || a.npi.localeCompare(b.npi));
}

async function main() {
  const { values } = parseArgs({ options: {
    out: { type: "string", default: fileURLToPath(new URL("../src/data/therapists", import.meta.url)) },
    csv: { type: "string" },
    "retrieved-at": { type: "string" },
  } });
  const date = values["retrieved-at"];
  if (values.csv && (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)))) {
    throw new Error("--csv requires --retrieved-at YYYY-MM-DD");
  }
  const providers = await collectProviders(values.csv ? disseminationRows(values.csv) : registryRows());
  if (providers.length === 0) throw new Error("Zero eligible providers; existing snapshot preserved");
  const folder = resolve(values.out, "by-state");
  await mkdir(folder, { recursive: true });
  const temporary = resolve(folder, `CA-${randomUUID()}.tmp`);
  try {
    await writeFile(temporary, JSON.stringify({
      generatedAt: date ?? new Date().toISOString().slice(0, 10),
      source: values.csv ? "nppes-dissemination" : "nppes-registry",
      providers,
    }), { flag: "wx" });
    await rename(temporary, resolve(folder, "CA.json"));
  } finally {
    await rm(temporary, { force: true });
  }
  console.log(`Wrote ${providers.length} California provider records to ${resolve(folder, "CA.json")}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
