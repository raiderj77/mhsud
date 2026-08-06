import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("DASS-21 remains an indexable information page without public administration or scoring", async () => {
  const [page, nextConfig, sitemap] = await Promise.all([
    read("src/app/dass-21-depression-anxiety-stress/page.tsx"),
    read("next.config.mjs"),
    read("src/app/sitemap.ts"),
  ]);

  await assert.rejects(
    read("src/app/dass-21-depression-anxiety-stress/DASS21Client.tsx"),
    (error) => error?.code === "ENOENT",
    "the former DASS questionnaire and scoring client must stay removed",
  );
  assert.doesNotMatch(page, /DASS21Client|toolPageJsonLd/);
  assert.match(page, /No questionnaire/);
  assert.match(page, /No scoring/);
  assert.match(page, /official UNSW DASS administration guidance/);
  assert.match(page, /https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/16004657\//);
  assert.match(page, /href: "\/phq-4-anxiety-depression-screen"/);
  assert.match(page, /href: "\/phq-9-depression-test"/);
  assert.match(page, /href: "\/gad-7-anxiety-test"/);
  assert.match(page, /not equivalent/i);
  assert.match(page, /not a diagnostic instrument|not provide a diagnosis/i);
  assert.match(page, /does not ask for symptoms, answers, or a score/i);
  assert.match(page, /href="tel:988"/);
  assert.match(page, /href="sms:988"/);
  assert.match(page, /<ToolReviewerBio lastReviewed="August 2, 2026"/);
  assert.doesNotMatch(page, /noindex|robots:\s*\{/i);

  assert.doesNotMatch(
    nextConfig,
    /\["\/dass-21-depression-anxiety-stress",\s*"/,
    "the canonical informational route must never become a redirect source",
  );
  assert.match(nextConfig, /\["\/dass-21-score-interpretation", "\/dass-21-depression-anxiety-stress"\]/);
  assert.match(nextConfig, /\["\/dass-21-vs-phq-9-and-gad-7", "\/dass-21-depression-anxiety-stress"\]/);
  assert.match(sitemap, /\$\{SITE_URL\}\/dass-21-depression-anxiety-stress/);
});

test("CES-D matches the public-domain SAMHSA form and avoids unsupported severity tiers", async () => {
  const source = await read("src/app/ces-d-depression-scale/CesdClient.tsx");

  assert.match(source, /I felt that people disliked me/);
  assert.match(source, /Occasionally or a moderate amount of the time/);
  assert.match(source, /const RESULT_STATES: ResultState\[\] = \[/);
  assert.match(source, /Below the traditional screening threshold/);
  assert.match(source, /At or above the traditional screening threshold/);
  assert.doesNotMatch(source, /label: "(?:Minimal|Mild|Moderate|Severe) Symptoms"/);
  assert.doesNotMatch(source, /range: "(?:16\\u201320|21\\u201330|31\\u201360)"/);
});
