import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

const informationalRoutes = [
  {
    route: "/spin-social-anxiety-test",
    page: "src/app/spin-social-anxiety-test/page.tsx",
    client: "src/app/spin-social-anxiety-test/SpinClient.tsx",
    rightsSource: /apta\.org\/patient-care\/evidence-based-practice-resources\/test-measures\/social-phobia-inventory-spin/,
    evidenceSource: /pubmed\.ncbi\.nlm\.nih\.gov\/10827888/,
  },
  {
    route: "/ace-questionnaire",
    page: "src/app/ace-questionnaire/page.tsx",
    client: "src/app/ace-questionnaire/AceClient.tsx",
    rightsSource: /cdc\.gov\/violenceprevention\/aces\/about\.html/,
    evidenceSource: /pubmed\.ncbi\.nlm\.nih\.gov\/9635069/,
  },
  {
    route: "/cage-aid-substance-abuse-screening",
    page: "src/app/cage-aid-substance-abuse-screening/page.tsx",
    client: "src/app/cage-aid-substance-abuse-screening/CAGEAIDClient.tsx",
    rightsSource: /hiv\.uw\.edu\/page\/substance-use\/cage-aid/,
    evidenceSource: /pubmed\.ncbi\.nlm\.nih\.gov\/7778330/,
  },
  {
    route: "/crafft-substance-screening",
    page: "src/app/crafft-substance-screening/page.tsx",
    client: "src/app/crafft-substance-screening/CrafftClient.tsx",
    rightsSource: /crafft\.org\/get-the-crafft/,
    evidenceSource: /pubmed\.ncbi\.nlm\.nih\.gov\/10357299/,
  },
];

test("group A routes remain indexable server-rendered information pages", async () => {
  for (const entry of informationalRoutes) {
    const source = await read(entry.page);

    assert.match(source, new RegExp(`const PAGE_PATH = "${entry.route}"`));
    assert.match(source, /createMetadata\(\{[\s\S]*?path: PAGE_PATH/);
    assert.match(source, /medicalWebPageJsonLd/);
    assert.match(source, /lastReviewed: "2026-08-02"/);
    assert.match(source, /<ToolReviewerBio lastReviewed="August 2, 2026" \/>/);
    assert.match(source, /<AnswerBlock/);
    assert.match(source, /No questionnaire/);
    assert.match(source, /No-input privacy boundary/);
    assert.match(source, /href="\/privacy"/);
    assert.match(source, /href="\/crisis-resources"/);
    assert.match(source, /988/);
    assert.match(source, /not (?:a|an) diagnos/i);
    assert.match(source, /non-equivalent|not equivalent|different instruments|not .* replacement/i);
    assert.match(source, entry.rightsSource);
    assert.match(source, entry.evidenceSource);

    assert.doesNotMatch(source, /^"use client"/m);
    assert.doesNotMatch(source, /Client["']|useState|useReducer|<form|<input|type="radio"/);
    assert.doesNotMatch(source, /ScoreInterpretationLayout|scoreRanges|totalScore|const QUESTIONS|responseOptions/);
    assert.doesNotMatch(source, /robots:\s*\{[^}]*index:\s*false|noindex/i);
  }
});

test("group A questionnaire clients and wrapper page implementations are removed", () => {
  for (const { client } of informationalRoutes) {
    assert.equal(existsSync(new URL(`../${client}`, import.meta.url)), false, client);
  }

  for (const page of [
    "src/app/social-anxiety-test-college/page.tsx",
    "src/app/substance-abuse-test-parents/page.tsx",
    "src/app/drug-screening-teens/page.tsx",
    "src/app/ace-score-interpretation/page.tsx",
  ]) {
    assert.equal(existsSync(new URL(`../${page}`, import.meta.url)), false, page);
  }
});

test("group A legacy URLs use exact permanent canonical redirects", async () => {
  const config = await read("next.config.mjs");
  for (const [source, destination] of [
    ["/social-anxiety-test-college", "/spin-social-anxiety-test"],
    ["/substance-abuse-test-parents", "/cage-aid-substance-abuse-screening"],
    ["/drug-screening-teens", "/crafft-substance-screening"],
    ["/ace-score-interpretation", "/ace-questionnaire"],
  ]) {
    assert.ok(
      config.includes(`["${source}", "${destination}"]`),
      `missing permanent redirect ${source} -> ${destination}`,
    );
  }
  assert.match(config, /permanent: true/);
});
