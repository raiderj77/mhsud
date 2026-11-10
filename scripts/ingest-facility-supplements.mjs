#!/usr/bin/env node
/** Offline staging only. Never downloads, publishes, or overwrites the live dataset.
 * Usage: node scripts/ingest-facility-supplements.mjs manifest.json input.csv
 * See INDEXING-REPORT-RUN3.md for manifest and source-review requirements.
 */
import { createReadStream, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { pathToFileURL } from 'node:url';
import { normName, normPhone } from '../src/lib/facilitiesCore.mjs';

/** Streaming CSV reader with quoted newlines/escaped quotes and bounded rows. */
export async function* csvRows(path) {
  let row = [], field = '', quoted = false, pendingQuote = false;
  for await (const chunk of createReadStream(path, { encoding: 'utf8' })) {
    for (const ch of chunk) {
      if (pendingQuote) {
        pendingQuote = false;
        if (ch === '"') { field += '"'; continue; }
        quoted = false;
      } else if (quoted) {
        if (ch === '"') pendingQuote = true; else field += ch;
        if (field.length > 1000000) throw new Error('CSV field exceeds bound');
        continue;
      }
      if (ch === '"' && field === '') quoted = true;
      else if (ch === ',') { row.push(field); field = ''; }
      else if (ch === '\n') { row.push(field.replace(/\r$/, '')); yield row; row = []; field = ''; }
      else field += ch;
      if (field.length > 1000000 || row.length > 1000) throw new Error('CSV row exceeds bound');
    }
  }
  if (quoted && !pendingQuote) throw new Error('Unterminated CSV quote');
  if (field || row.length) { row.push(field.replace(/\r$/, '')); yield row; }
}

export function strongKeys(f) {
  const scope = [normName(f.name), normName(f.city), f.state?.toUpperCase()];
  if (scope.some(v => !v)) return [];
  const keys = [];
  if (f.street1 && f.zip) keys.push(JSON.stringify([...scope, 'address', normName(f.street1), f.zip.slice(0, 5)]));
  if (normPhone(f.phone)) keys.push(JSON.stringify([...scope, 'phone', normPhone(f.phone)]));
  return keys;
}

async function main() {
  const [manifestPath, input] = process.argv.slice(2);
  const m = JSON.parse(readFileSync(manifestPath, 'utf8'));
  // Review is explicit; no inferred terms, fabricated source rows or live fetch.
  if (!['nppes', 'license', 'certified'].includes(m.mode) || !/^[a-z0-9-]+$/.test(m.id) || !/^\d{4}-\d{2}-\d{2}$/.test(m.retrievedAt) || m.publicBulkReviewed !== true || !m.termsBasis || !m.reviewedBy || new URL(m.sourceUrl).protocol !== 'https:') throw new Error('Reviewed public-bulk manifest required');
  if (m.mode === 'nppes' && (!Array.isArray(m.sudTaxonomies) || !m.sudTaxonomies.length || !m.taxonomySourceUrl)) throw new Error('Reviewed SUD taxonomy scope required');
  const index = JSON.parse(readFileSync('src/data/facilities/index.json', 'utf8'));
  const facilities = index.states.flatMap(s => JSON.parse(readFileSync(`src/data/facilities/by-state/${s.code}.json`, 'utf8')));
  const lookup = new Map();
  for (const f of facilities) for (const k of strongKeys(f)) { if (!lookup.has(k)) lookup.set(k, []); lookup.get(k).push(f.path); }
  const matches = new Map(), providers = {}, records = [];
  let header, rows = 0, skipped = 0;
  for await (const cells of csvRows(input)) {
    if (!header) {
      header = cells.map(c => c.replace(/^\uFEFF/, ''));
      const required = m.mode === 'nppes' ? ['NPI', 'Entity Type Code', 'Provider Organization Name (Legal Business Name)', 'Provider Business Practice Location Address City Name', 'Provider Business Practice Location Address State Name', 'Provider First Line Business Practice Location Address', 'Provider Business Practice Location Address Postal Code', 'Provider Business Practice Location Address Telephone Number', 'Healthcare Provider Taxonomy Code_1', 'NPI Deactivation Date'] : m.mode === 'license' ? ['name', 'city', 'state', 'street1', 'zip', 'licenseNumber'] : ['name', 'city', 'state', 'certificationBody', 'certified', 'publicBusinessPhone'];
      if (required.some(key => !header.includes(key))) throw new Error('Required source columns missing; review schema');
      continue;
    }
    if (cells.length !== header.length) throw new Error('CSV column mismatch');
    const r = Object.fromEntries(header.map((key, i) => [key, cells[i].trim()])); rows++;
    if (m.mode === 'nppes') {
      if (r['NPI Deactivation Date']) { skipped++; continue; }
      const city = r['Provider Business Practice Location Address City Name'], state = r['Provider Business Practice Location Address State Name'];
      const street1 = r['Provider First Line Business Practice Location Address'], phone = r['Provider Business Practice Location Address Telephone Number'], zip = r['Provider Business Practice Location Address Postal Code'];
      if (r['Entity Type Code'] === '1') {
        if (Array.from({ length: 15 }, (_, i) => r[`Healthcare Provider Taxonomy Code_${i + 1}`]).some(t => m.sudTaxonomies.includes(t))) {
          const key = /^[A-Z]{2}$/.test(state) ? state : 'UNSPECIFIED';
          providers[key] ??= { count: 0, complete: 0 }; providers[key].count++;
          if (street1 && city && state && zip && normPhone(phone)) providers[key].complete++;
        }
        continue; // No individual names, addresses, phones or provider pages emitted.
      }
      if (r['Entity Type Code'] !== '2' || !/^\d{10}$/.test(r.NPI)) { skipped++; continue; }
      const f = { name: r['Provider Organization Name (Legal Business Name)'], city, state, street1, phone, zip };
      const candidates = new Set(strongKeys(f).flatMap(k => lookup.get(k) ?? []));
      // Multiple existing rows or multiple NPIs remain ambiguous, never auto-filled.
      for (const path of candidates) { if (!matches.has(path)) matches.set(path, new Set()); matches.get(path).add(r.NPI); if (candidates.size > 1) matches.get(path).add('AMBIGUOUS'); }
    } else {
      // Agency-specific headers must be mapped to this schema after actual source review.
      if (!r.name || !r.city || !/^[A-Z]{2}$/.test(r.state) || (m.mode === 'license' && !['TX','FL','NY','OH','PA','IL'].includes(r.state))) { skipped++; continue; }
      if (m.mode === 'certified') {
        if (!r.certificationBody || r.certified !== 'true') { skipped++; continue; }
        // Only public business contact: never copy home street addresses or resident data.
        records.push({ recordType: 'certified_home', name: r.name, city: r.city, state: r.state, certificationBody: r.certificationBody, phone: r.publicBusinessPhone || null, sourceUrl: m.sourceUrl });
      } else {
        if (!r.licenseNumber || !r.street1 || !r.zip) { skipped++; continue; }
        const candidates = new Set(strongKeys(r).flatMap(k => lookup.get(k) ?? []));
        records.push({ recordType: 'license_roster', name: r.name, street1: r.street1, city: r.city, state: r.state, zip: r.zip, licenseNumber: r.licenseNumber, statusOnFile: r.statusOnFile || null, candidatePaths: [...candidates], sourceUrl: m.sourceUrl });
      }
    }
  }
  const npiCandidates = [...matches].filter(([, ids]) => ids.size === 1).map(([path, ids]) => ({ path, nppesNpi: [...ids][0] }));
  const output = { source: { ...m, inputFile: basename(input), rows }, skipped, npiCandidates, ambiguousFacilities: [...matches.values()].filter(ids => ids.size > 1).length, matchRate: npiCandidates.length / facilities.length, individualProviderRecon: providers, records, status: 'STAGED_NOT_PUBLISHED' };
  const outDir = resolve('data-raw/supplements'); mkdirSync(outDir, { recursive: true });
  const target = resolve(outDir, `${m.id}.json`); writeFileSync(target, JSON.stringify(output, null, 2), { flag: 'wx' });
  console.log(JSON.stringify({ target, rows, stagedRecords: records.length, npiCandidates: npiCandidates.length, skipped }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
