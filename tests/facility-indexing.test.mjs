import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { facilityPolicies, directoryPaths } from '../src/lib/facilityIndexing.mjs';
const read = p => JSON.parse(readFileSync(p, 'utf8'));
const idx = read('src/data/facilities/index.json');
const all = idx.states.flatMap(s => read(`src/data/facilities/by-state/${s.code}.json`));
const base = { name: 'Fictional Recovery LLC', city: 'Example City', state: 'CA', zip: '90000', street1: '100 Fictional Street', phone: '555-0100', careTypes: ['Example'], settings: [], slug: 'b', path: '/b' };
test('location scope, transitive OR clustering, completeness primary and slug ties', () => {
  const rows = [base, { ...base, slug: 'a', path: '/a', phone: '555-0101', settings: ['Example'] }, { ...base, slug: 'c', path: '/c', street1: '200 Fictional Street', phone: '555-0101' }, { ...base, city: 'Other City', path: '/other' }];
  const policies = facilityPolicies(rows);
  assert.equal(policies.get('/b').canonical, '/a');
  assert.equal(policies.get('/c').canonical, '/a');
  assert.equal(policies.get('/other').primary, true);
  assert.equal(facilityPolicies([{ ...base, slug: 'a', path: '/a' }, base]).get('/b').canonical, '/a');
  assert.equal(facilityPolicies([{ ...base, zip: '' }]).get('/b').index, false);
  assert.equal(facilityPolicies([{ ...base, careTypes: [] }]).get('/b').index, false);
});
test('settled baked-data counts and every emitted facility canonical agree', () => {
  const policies = facilityPolicies(all), values = [...policies.values()];
  assert.equal(values.filter(p => p.primary && p.clusterSize > 1).length, 554);
  assert.equal(values.filter(p => !p.primary).length, 808);
  assert.equal(values.filter(p => p.index).length, 11382);
  assert.equal(values.filter(p => p.primary && !p.complete).length, 10);
  for (const [path, p] of policies) { assert.equal(policies.get(p.canonical).primary, true); if (p.index) assert.equal(p.canonical, path); }
});
test('wave 1 threshold and complete directory URL allowlist', () => {
  const paths = directoryPaths(idx, all);
  assert.equal(directoryPaths(idx, []).length, 1237);
  assert.equal(paths.length, 12619);
  assert.equal(new Set(paths).size, paths.length);
  assert.ok(paths.length < 45000);
  assert.ok(!paths.some(p => /\/(check|claim|report|api)(\/|$)/.test(p)));
  for (const s of idx.states) for (const c of s.cities) assert.equal(paths.includes(`/facilities/${s.code.toLowerCase()}/${c.slug}`), c.count >= 3);
});

test('offline supplement CSV preserves quoted fields and strong keys stay location scoped', async () => {
  const { mkdtemp, writeFile, rm } = await import('node:fs/promises');
  const { tmpdir } = await import('node:os');
  const { join } = await import('node:path');
  const { csvRows, strongKeys } = await import('../scripts/ingest-facility-supplements.mjs');
  const dir = await mkdtemp(join(tmpdir(), 'fictional-facility-csv-'));
  try {
    const path = join(dir, 'fictional.csv');
    await writeFile(path, 'name,city\r\n"Fictional, \"\"Example\"\"","Example\nCity"\r\n');
    const rows = []; for await (const row of csvRows(path)) rows.push(row);
    assert.deepEqual(rows, [['name', 'city'], ['Fictional, "Example"', 'Example\nCity']]);
    assert.equal(strongKeys({ ...base, name: '' }).length, 0);
    const first = strongKeys(base);
    assert.ok(strongKeys({ ...base, city: 'Other City' }).every(key => !first.includes(key)));
    await writeFile(path, '"unclosed');
    await assert.rejects(async () => { for await (const row of csvRows(path)) void row; }, /Unterminated/);
  } finally { await rm(dir, { recursive: true, force: true }); }
});
