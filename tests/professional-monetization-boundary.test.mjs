import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("professional pages use a no-health-data service boundary", async () => {
  const checklist = await read(
    "src/app/for-professionals/screening-implementation-checklist/page.tsx",
  );

  assert.match(checklist, /patient records/i);
  assert.match(checklist, /assessment answers/i);
  assert.match(checklist, /scores/i);
  assert.match(checklist, /not (?:a )?legal/i);
  assert.doesNotMatch(checklist, /HIPAA[- ]compliant|guaranteed compliance|clinically safe/i);
  assert.doesNotMatch(checklist, /AdSlot|TherapyCTA|EmailCapture|gtag|googlesyndication/i);
});

test("the killed readiness review routes are removed and redirect to therapist pricing", async () => {
  await assert.rejects(read("src/app/for-professionals/page.tsx"));
  await assert.rejects(read("src/app/for-professionals/sample-readiness-review/page.tsx"));

  const config = await read("next.config.mjs");
  assert.ok(
    config.includes('source: "/for-professionals", destination: "/therapists/pricing"'),
    "the /for-professionals redirect is missing",
  );
  assert.ok(
    config.includes(
      'source: "/for-professionals/sample-readiness-review", destination: "/therapists/pricing"',
    ),
    "the sample-readiness-review redirect is missing",
  );
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
