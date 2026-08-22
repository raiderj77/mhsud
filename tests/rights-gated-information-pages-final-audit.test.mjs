import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) => readFile(path.join(root, relativePath), "utf8");
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const routes = [
  {
    route: "/dass-21-depression-anxiety-stress",
    citations: ["dass.psy.unsw.edu.au/DASSFAQ.htm", "pubmed.ncbi.nlm.nih.gov/16004657"],
  },
  {
    route: "/spin-social-anxiety-test",
    citations: ["apta.org/patient-care/evidence-based-practice-resources/test-measures/social-phobia-inventory-spin", "pubmed.ncbi.nlm.nih.gov/10827888"],
  },
  {
    route: "/ace-questionnaire",
    citations: ["cdc.gov/violenceprevention/aces/about.html", "pubmed.ncbi.nlm.nih.gov/9635069"],
  },
  {
    route: "/cage-aid-substance-abuse-screening",
    citations: ["hiv.uw.edu/page/substance-use/cage-aid", "pubmed.ncbi.nlm.nih.gov/7778330"],
  },
  {
    route: "/crafft-substance-screening",
    citations: ["crafft.org/get-the-crafft", "pubmed.ncbi.nlm.nih.gov/10357299"],
  },
  {
    route: "/scoff-eating-disorder-screening",
    citations: ["bmj.com/content/319/7223/1467", "bmj.com/about-bmj/resources-readers/permissions"],
  },
  {
    route: "/msi-bpd-screening",
    citations: ["pubmed.ncbi.nlm.nih.gov/14744082", "nimh.nih.gov/health/topics/borderline-personality-disorder"],
  },
  {
    route: "/aq-10-autism-screening",
    citations: ["autismresearchcentre.com/tests/autism-spectrum-quotient-10-items-aq-10-adult", "pubmed.ncbi.nlm.nih.gov/22265366"],
  },
  {
    route: "/attachment-style-quiz",
    citations: ["labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm", "doi.org/10.1037/0022-3514.78.2.350"],
  },
  {
    route: "/holmes-rahe-stress-inventory",
    shared: true,
    citations: ["pubmed.ncbi.nlm.nih.gov/6059863", "sciencedirect.com/science/article/pii/0022399967900104"],
  },
  {
    route: "/ucla-loneliness-scale",
    shared: true,
    citations: ["peplau.psych.ucla.edu/loneliness", "pubmed.ncbi.nlm.nih.gov/8576833"],
  },
  {
    route: "/brief-resilience-scale",
    shared: true,
    citations: ["pubmed.ncbi.nlm.nih.gov/18696313", "doi.org/10.1080/10705500802222972"],
  },
  {
    route: "/athens-insomnia-scale",
    shared: true,
    citations: ["pubmed.ncbi.nlm.nih.gov/11033374", "doi.org/10.1016/S0022-3999(00)00095-7"],
  },
  {
    route: "/who-assist-substance-screening",
    shared: true,
    citations: ["who.int/publications/i/item/978924159938-2", "who.int/about/policies/publishing/copyright"],
  },
];

const retiredClients = [
  "src/app/spin-social-anxiety-test/SpinClient.tsx",
  "src/app/ace-questionnaire/AceClient.tsx",
  "src/app/cage-aid-substance-abuse-screening/CAGEAIDClient.tsx",
  "src/app/crafft-substance-screening/CrafftClient.tsx",
  "src/app/scoff-eating-disorder-screening/SCOFFClient.tsx",
  "src/app/msi-bpd-screening/MSIBPDClient.tsx",
  "src/app/aq-10-autism-screening/AQ10Client.tsx",
  "src/app/attachment-style-quiz/AttachmentStyleClient.tsx",
  "src/app/holmes-rahe-stress-inventory/HolmesRaheClient.tsx",
  "src/app/ucla-loneliness-scale/UCLAClient.tsx",
  "src/app/brief-resilience-scale/BRSClient.tsx",
  "src/app/athens-insomnia-scale/AISClient.tsx",
  "src/app/who-assist-substance-screening/AssistClient.tsx",
];

test("all 14 canonical routes are source-level indexable information pages", async () => {
  const metadata = await read("src/lib/metadata.ts");

  assert.match(metadata, /robots:\s*\{[\s\S]*?index:\s*true[\s\S]*?follow:\s*true/);
  assert.match(metadata, /alternates:\s*\{\s*canonical:\s*path/);

  for (const entry of routes) {
    const source = await read(`src/app${entry.route}/page.tsx`);

    assert.match(source, new RegExp(`const PAGE_PATH = ["']${escapeRegExp(entry.route)}["']`));
    assert.match(source, /export default function/);
    assert.match(source, /createMetadata\(\{/);
    assert.match(source, /path: PAGE_PATH/);
    assert.match(source, /medicalWebPageJsonLd\(/);
    assert.match(source, /lastReviewed: "2026-08-02"/);
    assert.match(source, /<ToolReviewerBio lastReviewed="August 2, 2026"\s*\/>/);
    assert.doesNotMatch(source, /noindex|index:\s*false|follow:\s*false|redirect\(|permanentRedirect\(|notFound\(/i);
  }
});

test("all 14 routes contain the strict YMYL information-only safeguards", async () => {
  const shared = await read("src/app/_components/RightsBoundaryInformationPage.tsx");

  for (const entry of routes) {
    const source = await read(`src/app${entry.route}/page.tsx`);
    const renderedSource = entry.shared ? `${source}\n${shared}` : source;

    assert.match(source, /permission|licen[cs]e|copyright|rights holder|rights boundary|public-use boundary/i, `${entry.route}: rights boundary`);
    assert.match(source, /not diagnostic|not a diagnos|cannot diagnos|cannot identify autism|cannot establish a diagnos/i, `${entry.route}: non-diagnostic boundary`);
    assert.match(renderedSource, /non-equivalent|not equivalent|not interchangeable|different instruments|different purposes|different constructs|not .* replacements?|cannot reproduce, replace, or be compared/i, `${entry.route}: alternatives boundary`);
    assert.match(renderedSource, /href="\/privacy"/);
    assert.match(renderedSource, /href="\/crisis-resources"/);
    assert.match(renderedSource, /href="tel:988"/);
    assert.match(renderedSource, /href="sms:988"/);
    assert.match(renderedSource, /href="tel:911"/);
    assert.match(renderedSource, /Outside the United States, use local emergency or crisis services/);
    assert.match(renderedSource, /U\.S\..*international|international.*U\.S\./);
    assert.match(renderedSource, /No questionnaire/);
    assert.match(renderedSource, /No scoring/);

    for (const citation of entry.citations) {
      assert.match(source, new RegExp(escapeRegExp(citation)), `${entry.route}: missing ${citation}`);
    }
  }
});

test("all 14 routes exclude questionnaire and result mechanics", async () => {
  const forbiddenMechanics = /["']use client["']|useState\(|useReducer\(|<form\b|<input\b|<select\b|<textarea\b|<button\b|type=["'](?:radio|checkbox)["']|role=["']radio["']|onSubmit=|calculateScore|scoreAssessment|toolPageJsonLd|DisclaimerGate|sharePrivateToolLink|printSensitiveResults|score of \d|cutoff of \d|cut-off of \d|\d+\s*(?:or more|and above)\s*(?:is|indicates)|reverse[- ]scor|strongly (?:agree|disagree)|yes\/no format/i;

  for (const entry of routes) {
    const source = await read(`src/app${entry.route}/page.tsx`);
    assert.doesNotMatch(source, forbiddenMechanics, `${entry.route}: questionnaire or result mechanic found`);
  }

  for (const retiredClient of retiredClients) {
    await assert.rejects(
      access(path.join(root, retiredClient)),
      (error) => error?.code === "ENOENT",
      `${retiredClient} must remain removed`,
    );
  }
});

test("the shared reviewer surface publishes a bounded name and credential", async () => {
  const reviewer = await read("src/components/ToolReviewerBio.tsx");
  const author = await read("src/config/author.ts");

  assert.match(reviewer, /SITE_AUTHOR\.name/);
  assert.match(reviewer, /SITE_AUTHOR\.credential/);
  assert.match(reviewer, /href="\/about\/jason-ramirez"/);
  assert.match(reviewer, /within the reviewer&apos;s stated credential scope/);
  assert.match(reviewer, /it is not diagnosis or individual care/);
  assert.match(author, /name: "Jason Ramirez"/);
  assert.match(author, /credential: "CADC-II"/);
  assert.match(author, /Certified Alcohol and Drug Counselor Level II/);
  assert.match(author, /It is not presented here as a medical license|Professional Certification/);
});
