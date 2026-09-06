import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('axe and the browser runner resolve the same pinned Playwright API', async () => {
  const { devDependencies } = JSON.parse(await read('package.json'));
  assert.equal(devDependencies['playwright-core'], devDependencies['@playwright/test']);
});

test('the global banner separates treatment referral from crisis counseling', async () => {
  const source = await read('src/components/CrisisBanner.tsx');
  assert.match(source, /For U\.S\. treatment referral and information/);
  assert.match(source, /This is not crisis counseling/);
  assert.ok(source.includes('href="tel:+18006624357"'));
});

test('evidence directory preserves the study population and conditional reuse sources', async () => {
  const source = await read('src/app/clinical-evidence/page.tsx');
  assert.match(source, /2,149 patients from 15 U\.S\. primary-care clinics in the cited 2009 study/);
  assert.doesNotMatch(source, /WHO public domain|German general-population sample of 2,149/);
  for (const url of ['https://license.tov.med.nyu.edu/product/asrs6Qscreener', 'https://www.who.int/about/policies/publishing/copyright', 'https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01']) assert.ok(source.includes(url));
  assert.match(source, /rightsSources\.map/);
  assert.match(source, /source checking is not legal clearance/);
});

test('trust corrections never fabricate a new clinical review or imply free means noncommercial', async () => {
  const methodology = await read('src/app/methodology/page.tsx');
  assert.match(methodology, /Free access does not by itself mean\s+noncommercial use/);
  assert.doesNotMatch(methodology, /Items requiring a paid license are not hosted|reviewedBy:/);
  for (const path of ['src/app/methodology/page.tsx', 'src/app/clinical-evidence/page.tsx']) {
    const source = await read(path);
    assert.match(source, /Editorial corrections:/);
    assert.match(source, /not (?:a new clinical review|claim\s+a new clinical review)/);
    assert.match(source, /Jason Ramirez, CADC-II/);
    assert.match(source, /This is not crisis counseling/);
    for (const action of ['tel:988', 'sms:988', 'tel:911', 'tel:18006624357', '/crisis-resources']) assert.ok(source.includes(action));
  }
});
