import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("professional pages use a no-health-data service boundary", async () => {
  const [service, checklist, sample] = await Promise.all([
    read("src/app/for-professionals/page.tsx"),
    read("src/app/for-professionals/screening-implementation-checklist/page.tsx"),
    read("src/app/for-professionals/sample-readiness-review/page.tsx"),
  ]);

  for (const source of [service, checklist, sample]) {
    assert.match(source, /patient records/i);
    assert.match(source, /assessment answers/i);
    assert.match(source, /scores/i);
    assert.match(source, /not (?:a )?legal/i);
    assert.doesNotMatch(source, /HIPAA[- ]compliant|guaranteed compliance|clinically safe/i);
    assert.doesNotMatch(source, /AdSlot|TherapyCTA|EmailCapture|gtag|googlesyndication/i);
  }
});

test("the founding review offer is bounded, priced, and honest", async () => {
  const [service, sample] = await Promise.all([
    read("src/app/for-professionals/page.tsx"),
    read("src/app/for-professionals/sample-readiness-review/page.tsx"),
  ]);

  assert.match(service, /Founding-client offer/i);
  assert.match(service, /\$495 fixed scope/);
  assert.match(service, /five business days/i);
  assert.match(service, /up to five public or fictional staging routes/i);
  assert.match(service, /one follow-up email/i);
  assert.match(service, /Organization and website URL/);
  assert.match(service, /your name and role/i);
  assert.match(service, /primary goal and desired timeline/i);
  assert.doesNotMatch(service, /buy now|checkout|guaranteed|certified compliant/i);

  assert.match(sample, /Fictional sample/i);
  assert.match(sample, /invented/i);
  assert.match(sample, /no patient records[\s\S]*real client information/i);
  assert.match(sample, /Prioritized findings/i);
  assert.match(sample, /Release gate/i);
  assert.doesNotMatch(sample, /testimonial|case study/i);
});

test("the free checklist cites primary sources and contains no instrument mechanics", async () => {
  const checklist = await read("src/app/for-professionals/screening-implementation-checklist/page.tsx");

  for (const source of [
    /ftc\.gov\/business-guidance\/resources\/mobile-health-app-developers-ftc-best-practices/,
    /ftc\.gov\/business-guidance\/resources\/complying-ftcs-health-breach-notification-rule-0/,
    /support\.google\.com\/publisherpolicies\/answer\/15101728/,
    /w3\.org\/TR\/WCAG22/,
    /csrc\.nist\.gov\/pubs\/sp\/800\/218\/final/,
    /988lifeline\.org\/get-help/,
    /samhsa\.gov\/resource\/ebp\/ready-set-go-review/,
  ]) assert.match(checklist, source);

  assert.match(checklist, /contains no instrument items/i);
  assert.doesNotMatch(checklist, /PHQ-9 item|GAD-7 item|DASS-21 item|reverse-scored item \d/i);
});

test("the public instrument-rights guide is source-linked and reproduces no instrument mechanics", async () => {
  const guide = await read("src/app/for-professionals/screening-instrument-rights-guide/page.tsx");

  for (const source of [
    /phqscreeners\.com\/select-screener/,
    /ptsd\.va\.gov\/professional\/assessment/,
    /who\.int\/publications/,
    /dass\.psy\.unsw\.edu\.au\/DASSFAQ\.htm/,
    /autismresearchcentre\.com\/tests/,
  ]) assert.match(guide, source);

  assert.match(guide, /not legal advice/i);
  assert.match(guide, /contains no instrument items/i);
  assert.match(guide, /patient records/i);
  assert.doesNotMatch(guide, /item\s*9\s*(?:asks|reads|says)|score\s*[>=]+\s*\d|reverse-scored item \d/i);
  assert.doesNotMatch(guide, /AdSlot|TherapyCTA|EmailCapture|gtag|googlesyndication/i);
});

test("professional discovery is limited to general trust and navigation surfaces", async () => {
  const [about, contact, methodology, footer, policies] = await Promise.all([
    read("src/app/about/page.tsx"),
    read("src/app/contact/page.tsx"),
    read("src/app/methodology/page.tsx"),
    read("src/components/Footer.tsx"),
    read("src/lib/routePolicies.ts"),
  ]);

  for (const source of [about, contact, methodology]) assert.match(source, /for-professionals/);
  assert.match(footer, /for-professionals/i);
  assert.match(policies, /const OPTIONAL_SERVICE_ALLOWED_ROUTES = new Set\(\["\/"\]\)/);
});

test("security.txt publishes a canonical, dated, web-only contact path", async () => {
  const security = await read("src/app/.well-known/security.txt/route.ts");

  assert.match(security, /Contact: \$\{SITE_URL\}\/contact/);
  assert.match(security, /Expires: 2027-08-06T00:00:00\.000Z/);
  assert.match(security, /Canonical: \$\{SITE_URL\}\/\.well-known\/security\.txt/);
  assert.doesNotMatch(security, /mailto:|tel:/i);
});
