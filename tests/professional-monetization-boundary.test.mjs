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
  assert.match(service, /Best fit—and when to choose someone else/i);
  assert.match(service, /This site does not collect payment/i);
  assert.match(service, /payment terms, and cancellation terms are confirmed in writing/i);
  assert.match(service, /Never email card or bank details/i);
  assert.doesNotMatch(service, /buy now|checkout|guaranteed|certified compliant/i);
  assert.doesNotMatch(service, /LimitedAvailability/);

  assert.match(sample, /Fictional sample/i);
  assert.match(sample, /invented/i);
  assert.match(sample, /no patient records[\s\S]*real client information/i);
  assert.match(sample, /Prioritized findings/i);
  assert.match(sample, /Release gate/i);
  assert.doesNotMatch(sample, /testimonial|case study/i);
});

test("the internal review runbook preserves the fixed no-health-data operating boundary", async () => {
  const runbook = await read("docs/professional-review-operations-runbook.md");

  assert.match(runbook, /public pages or a fictional, non-sensitive staging environment/i);
  assert.match(runbook, /Never request or accept patient records, assessment answers, scores, results, diagnoses/i);
  assert.match(runbook, /Inspect assessment entry states only/i);
  assert.match(runbook, /Do not reproduce restricted questionnaire items/i);
  assert.match(runbook, /No work begins until the written scope and owner-approved payment terms are accepted/i);
  assert.match(runbook, /Do not claim deletion, containment, confidentiality, or regulatory handling unless that action has been verified/i);
  assert.match(runbook, /does not authorize accepting payment or starting customer work/i);
  assert.doesNotMatch(runbook, /HIPAA[- ]compliant|guaranteed compliance|clinically safe|certified accessible/i);
});

test("the first-sale record requires hosted invoicing and preserves owner-side business gates", async () => {
  const record = await read("docs/professional-review-first-sale-readiness-2026-08-29.md");

  assert.match(record, /Do not build website checkout/i);
  assert.match(record, /written scope and customer terms/i);
  assert.match(record, /one-time hosted invoice/i);
  assert.match(record, /customer-controlled business folder or portal/i);
  assert.match(record, /Accept no more than one paid review at a time/i);
  assert.match(record, /must not accept payment or start customer work/i);
  assert.match(record, /not a determination for MindCheckTools/i);
  assert.doesNotMatch(record, /MindCheckTools (?:is|will be) (?:sales-tax exempt|insured|certified compliant)|guarantees (?:safety|compliance|results)/i);
});

test("the professional sales ledger contains business metrics and no health-data fields", async () => {
  const ledger = await read("docs/professional-review-business-ledger.csv");

  for (const field of [
    "inquiry_id",
    "qualification_status",
    "quoted_amount_usd",
    "payment_status",
    "paid_amount_usd",
    "active_delivery_hours",
    "repeat_work_requested",
  ]) assert.match(ledger, new RegExp(`(?:^|,)${field}(?:,|$)`));

  assert.doesNotMatch(ledger, /patient|answer|score|diagnos|crisis|symptom|email_address|user_id/i);
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
  const [about, contact, methodology, footer] = await Promise.all([
    read("src/app/about/page.tsx"),
    read("src/app/contact/page.tsx"),
    read("src/app/methodology/page.tsx"),
    read("src/components/Footer.tsx"),
  ]);

  for (const source of [about, contact, methodology]) assert.match(source, /for-professionals/);
  assert.match(footer, /for-professionals/i);
});

test("security.txt publishes a canonical, dated, web-only contact path", async () => {
  const security = await read("src/app/.well-known/security.txt/route.ts");

  assert.match(security, /Contact: \$\{SITE_URL\}\/contact/);
  assert.match(security, /Expires: 2027-08-06T00:00:00\.000Z/);
  assert.match(security, /Canonical: \$\{SITE_URL\}\/\.well-known\/security\.txt/);
  assert.doesNotMatch(security, /mailto:|tel:/i);
});
