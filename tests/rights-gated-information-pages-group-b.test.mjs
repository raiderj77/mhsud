import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

const routes = [
  {
    route: "/scoff-eating-disorder-screening",
    page: "src/app/scoff-eating-disorder-screening/page.tsx",
    client: "src/app/scoff-eating-disorder-screening/SCOFFClient.tsx",
    clientName: "SCOFFClient",
    citations: [
      "bmj.com/content/319/7223/1467",
      "bmj.com/about-bmj/resources-readers/permissions",
      "nimh.nih.gov/health/topics/eating-disorders",
    ],
  },
  {
    route: "/msi-bpd-screening",
    page: "src/app/msi-bpd-screening/page.tsx",
    client: "src/app/msi-bpd-screening/MSIBPDClient.tsx",
    clientName: "MSIBPDClient",
    citations: [
      "pubmed.ncbi.nlm.nih.gov/14744082",
      "nimh.nih.gov/health/topics/borderline-personality-disorder",
    ],
  },
  {
    route: "/aq-10-autism-screening",
    page: "src/app/aq-10-autism-screening/page.tsx",
    client: "src/app/aq-10-autism-screening/AQ10Client.tsx",
    clientName: "AQ10Client",
    citations: [
      "autismresearchcentre.com/tests/autism-spectrum-quotient-10-items-aq-10-adult",
      "pubmed.ncbi.nlm.nih.gov/22265366",
      "nimh.nih.gov/health/topics/autism-spectrum-disorders-asd",
    ],
  },
  {
    route: "/attachment-style-quiz",
    page: "src/app/attachment-style-quiz/page.tsx",
    client: "src/app/attachment-style-quiz/AttachmentStyleClient.tsx",
    clientName: "AttachmentStyleClient",
    citations: [
      "labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm",
      "doi.org/10.1037/0022-3514.78.2.350",
    ],
  },
];

const retiredWrappers = [
  "src/app/eating-disorder-test-athletes/page.tsx",
  "src/app/bpd-test-for-women/page.tsx",
  "src/app/bpd-screening-for-young-adults/page.tsx",
  "src/app/attachment-style-test-for-couples/page.tsx",
];

async function isMissing(relativePath) {
  try {
    await access(path.join(root, relativePath));
    return false;
  } catch (error) {
    if (error?.code === "ENOENT") return true;
    throw error;
  }
}

test("group B canonical routes are server-rendered, indexable information pages", async () => {
  for (const entry of routes) {
    const source = await readFile(path.join(root, entry.page), "utf8");

    assert.match(source, new RegExp(`const PAGE_PATH = ["']${entry.route}["']`));
    assert.match(source, /path: PAGE_PATH/);
    assert.match(source, /createMetadata\(/);
    assert.match(source, /medicalWebPageJsonLd\(/);
    assert.match(source, /lastReviewed: "2026-08-02"/);
    assert.match(source, /<ToolReviewerBio lastReviewed="August 2, 2026"\s*\/>/);
    assert.match(source, /lastUpdated="2026-08-05"/);
    assert.match(source, /Educational information/);
    assert.match(source, /No questionnaire/);
    assert.match(source, /No scoring/);
    assert.doesNotMatch(source, /noindex|index:\s*false|follow:\s*false/i);
    assert.doesNotMatch(source, /["']use client["']|useState\(|<form\b|<input\b|<button\b|type="(?:radio|checkbox)"/);
    assert.doesNotMatch(source, new RegExp(entry.clientName));
    assert.doesNotMatch(source, /toolPageJsonLd|DisclaimerGate|sharePrivateToolLink|printSensitiveResults/);
  }
});

test("group B pages preserve rights, privacy, crisis, and non-equivalence safeguards", async () => {
  for (const entry of routes) {
    const source = await readFile(path.join(root, entry.page), "utf8");

    assert.match(source, /permission|licen[cs]e|rights holder/i, `${entry.route} lacks a rights boundary`);
    assert.match(source, /not (?:a |an )?(?:diagnosis|diagnostic)|cannot diagnose|cannot identify autism/i);
    assert.match(source, /non-equivalent|not equivalent|different purposes|different symptoms|different constructs|Neither/i);
    assert.match(source, /href="\/privacy"/);
    assert.match(source, /href="\/crisis-resources"/);
    assert.match(source, /href="tel:988"/);
    assert.match(source, /href="sms:988"/);
    assert.match(source, /href="tel:911"/);
    assert.match(source, /Outside the United States, use local emergency or crisis services/);
    assert.match(source, /U\.S\. and international crisis resources/);
    assert.match(source, /asks no .*questions|accepts no answers/i);

    for (const citation of entry.citations) {
      assert.match(source, new RegExp(citation.replaceAll(".", "\\.")));
    }
  }
});

test("group B pages do not expose instrument mechanics or protected clients", async () => {
  for (const entry of routes) {
    const source = await readFile(path.join(root, entry.page), "utf8");

    assert.equal(await isMissing(entry.client), true, `${entry.client} still exists`);
    assert.doesNotMatch(
      source,
      /score of \d|cutoff of \d|\d+\s*(?:or more|and above)\s*(?:is|indicates)|reverse[- ]scor|strongly (?:agree|disagree)|yes\/no format/i,
      `${entry.route} exposes scoring or response mechanics`,
    );
  }

  for (const wrapper of retiredWrappers) {
    assert.equal(await isMissing(wrapper), true, `${wrapper} still exists`);
  }
});
