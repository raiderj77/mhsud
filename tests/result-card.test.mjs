import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  RESULT_CARD_MEANING_MIN_SIZE,
  RESULT_CARD_PRIVACY_LINE,
  RESULT_CARD_SCREENING_LINE,
  buildResultCardData,
  firstSentence,
  planResultCardMeaning,
} from "../src/lib/resultCard.mjs";
import { CUDITR_RANGES } from "../src/lib/cuditrScoring.mjs";
import { FTND_RANGES } from "../src/lib/ftndScoring.mjs";
import {
  AUD_CRITERIA_RANGES,
  INTERVIEW_LIMIT,
  getAudCriteriaRange,
} from "../src/lib/audCriteriaScoring.mjs";

const DATE = new Date(2026, 10, 26); // November 26, 2026 (local)

// The score/band/meaning triples below are the exact display values the
// named tool's results screen produces at each score. They are pinned here
// so the card can never drift from what the results screen itself shows.

const AUDITC = { toolName: "AUDIT-C Quick Alcohol Screen", toolPath: "/audit-c-alcohol-screen" };
const PHQ9 = { toolName: "PHQ-9 Depression Self-Check", toolPath: "/phq-9-depression-test" };
const K6 = { toolName: "K6 Psychological Distress Scale", toolPath: "/k6-distress-scale" };

test("AUDIT-C card at the screening threshold boundaries", () => {
  const below = buildResultCardData({
    ...AUDITC,
    score: "2 / 12",
    band: "Lower Risk (Below Threshold)",
    meaning: "Your responses fall below the commonly used screening threshold.",
    date: DATE,
  });
  assert.equal(below.score, "2 / 12");
  assert.equal(below.band, "Lower Risk (Below Threshold)");
  assert.equal(below.meaning, "Your responses fall below the commonly used screening threshold.");

  const at = buildResultCardData({
    ...AUDITC,
    score: "3 / 12",
    band: "At-Threshold (Consider Further Assessment)",
    meaning:
      "Your responses are at or near the screening threshold used in many clinical settings (3+ for women, 4+ for men).",
    date: DATE,
  });
  assert.equal(at.band, "At-Threshold (Consider Further Assessment)");

  const above = buildResultCardData({
    ...AUDITC,
    score: "5 / 12",
    band: "Above Threshold (Further Assessment Recommended)",
    meaning: "Your responses are above the screening threshold used in most clinical settings.",
    date: DATE,
  });
  assert.equal(above.band, "Above Threshold (Further Assessment Recommended)");

  for (const card of [below, at, above]) {
    assert.equal(card.brand, "MindCheck Tools");
    assert.equal(card.toolName, AUDITC.toolName);
    assert.equal(card.toolUrl, "https://mindchecktools.com/audit-c-alcohol-screen");
    assert.equal(
      card.inviteLine,
      "Try it yourself, free and private: https://mindchecktools.com/audit-c-alcohol-screen",
    );
    assert.equal(card.privacyLine, RESULT_CARD_PRIVACY_LINE);
    assert.equal(card.screeningLine, RESULT_CARD_SCREENING_LINE);
    assert.equal(card.dateLabel, "November 26, 2026");
    assert.equal(card.fileName, "audit-c-alcohol-screen-result-card.png");
  }
});

test("PHQ-9 card at the moderate and severe boundaries", () => {
  const mild = buildResultCardData({
    ...PHQ9,
    score: "9 / 27",
    band: "Mild",
    meaning: "Your responses suggest mild levels of depressive symptoms over the past two weeks.",
    date: DATE,
  });
  assert.equal(mild.band, "Mild");

  const moderate = buildResultCardData({
    ...PHQ9,
    score: "10 / 27",
    band: "Moderate",
    meaning: "Your responses suggest moderate levels of depressive symptoms over the past two weeks.",
    date: DATE,
  });
  assert.equal(moderate.band, "Moderate");
  assert.equal(moderate.toolUrl, "https://mindchecktools.com/phq-9-depression-test");

  const severe = buildResultCardData({
    ...PHQ9,
    score: "20 / 27",
    band: "Severe",
    meaning: "Your responses suggest severe levels of depressive symptoms over the past two weeks.",
    date: DATE,
  });
  assert.equal(severe.band, "Severe");
});

test("K6 card at the serious-distress cutoff", () => {
  const below = buildResultCardData({
    ...K6,
    score: "12 / 24",
    band: "Moderate Distress",
    meaning: "Your score suggests a moderate level of psychological distress over the past 30 days.",
    date: DATE,
  });
  assert.equal(below.band, "Moderate Distress");

  const at = buildResultCardData({
    ...K6,
    score: "13 / 24",
    band: "Serious Psychological Distress",
    meaning:
      "Your score of 13 or higher meets the threshold for serious psychological distress (SPD), the same cutoff used in national health surveys by SAMHSA and the CDC.",
    date: DATE,
  });
  assert.equal(at.band, "Serious Psychological Distress");
  assert.equal(at.toolUrl, "https://mindchecktools.com/k6-distress-scale");
});

test("the card canonicalizes the tool URL and never encodes result data", () => {
  const card = buildResultCardData({
    ...AUDITC,
    toolPath: "/audit-c-alcohol-screen?score=3#results",
    score: "3 / 12",
    band: "At-Threshold (Consider Further Assessment)",
    meaning: "Your responses are at or near the screening threshold.",
    date: DATE,
  });
  assert.equal(card.toolUrl, "https://mindchecktools.com/audit-c-alcohol-screen");
  assert.doesNotMatch(card.toolUrl, /score|band|meaning/);
  assert.doesNotMatch(card.inviteLine, /score=|band=/);
});

test("the builder refuses norm and crowd-comparison language", () => {
  const base = {
    ...AUDITC,
    score: "3 / 12",
    band: "At-Threshold (Consider Further Assessment)",
    meaning: "Your responses are at or near the screening threshold.",
    date: DATE,
  };
  assert.throws(
    () => buildResultCardData({ ...base, meaning: "You scored higher than average." }),
    /norm or crowd-comparison/,
  );
  assert.throws(
    () => buildResultCardData({ ...base, band: "82nd percentile" }),
    /norm or crowd-comparison/,
  );
  assert.throws(
    () => buildResultCardData({ ...base, meaning: "Most people score lower than this." }),
    /norm or crowd-comparison/,
  );
  assert.throws(
    () => buildResultCardData({ ...base, score: "3 / 12 (typical)" }),
    /norm or crowd-comparison/,
  );
});

test("the builder requires the full card and accepts a numeric score", () => {
  const base = {
    ...PHQ9,
    score: 10,
    band: "Moderate",
    meaning: "Your responses suggest moderate levels of depressive symptoms over the past two weeks.",
    date: DATE,
  };
  assert.equal(buildResultCardData(base).score, "10");
  assert.throws(() => buildResultCardData({ ...base, band: "" }), /non-empty band/);
  assert.throws(() => buildResultCardData({ ...base, meaning: " " }), /non-empty meaning/);
  assert.throws(() => buildResultCardData({ ...base, toolName: "" }), /non-empty tool name/);
  assert.throws(
    () => buildResultCardData({ ...base, toolPath: "https://example.com/phq-9" }),
    /canonical site path/,
  );
  assert.throws(() => buildResultCardData({ ...base, date: new Date("junk") }), /valid Date/);
});

test("firstSentence keeps one line of a band description", () => {
  assert.equal(
    firstSentence("Your responses fall below the threshold. In research, scores here are lower."),
    "Your responses fall below the threshold.",
  );
  assert.equal(firstSentence("One sentence only."), "One sentence only.");
  assert.equal(firstSentence("No terminator"), "No terminator");
});

// Wiring inventory: every interactive published screener on main renders
// the shared card with its own results values. Big Five is the deliberate
// exception: its result is a five-trait profile with no single score or
// band, so a one-score card would misrepresent it.
const wiredClients = [
  "alcohol-use-disorder-criteria/AUDCriteriaClient.tsx",
  "audit-alcohol-test/AUDITClient.tsx",
  "audit-c-alcohol-screen/AUDITCClient.tsx",
  "asrs-adhd-screening/ASRSClient.tsx",
  "ces-d-depression-scale/CesdClient.tsx",
  "cudit-r-cannabis-screening/CUDITRClient.tsx",
  "gad-7-anxiety-test/GAD7Client.tsx",
  "k6-distress-scale/K6Client.tsx",
  "nicotine-dependence-test/FTNDClient.tsx",
  "pc-ptsd-5-screening/PcPtsd5Client.tsx",
  "pcl-5-ptsd-screening/PCL5Client.tsx",
  "phq-4-anxiety-depression-screen/PHQ4Client.tsx",
  "phq-9-depression-test/PHQ9Client.tsx",
  "rosenberg-self-esteem-scale/RSESClient.tsx",
  "who-5-wellbeing-index/Who5Client.tsx",
];

test("every wired screener renders the shared card without answer data", async () => {
  for (const file of wiredClients) {
    const source = await readFile(new URL(`../src/app/${file}`, import.meta.url), "utf8");
    assert.match(source, /import \{ ResultCard \} from "@\/components\/ResultCard";/, file);
    const cardJsx = source.match(/<ResultCard[\s\S]*?\/>/)?.[0];
    assert.ok(cardJsx, `${file} must render <ResultCard />`);
    assert.doesNotMatch(
      cardJsx,
      /\b(?:answers|responses)\s*=/,
      `${file} must not pass answers or responses to the result card`,
    );
  }
});

test("Big Five remains a documented exception with no result card", async () => {
  const source = await readFile(
    new URL("../src/app/big-five-personality-test/BigFiveClient.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(source, /ResultCard/);
});

test("the card component never shares or uploads result data", async () => {
  const source = await readFile(
    new URL("../src/components/ResultCard.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(source, /navigator\.share|navigator\.clipboard|fetch\(|XMLHttpRequest|sendBeacon/);
  assert.match(source, /canvas\.toBlob/);
  assert.match(source, /URL\.createObjectURL/);
});

// The AUD criteria check counts criteria that only a clinician can confirm
// in an interview, so its card meaning must keep that limit. The band
// descriptions carry the limit as their second sentence (INTERVIEW_LIMIT);
// taking only the first sentence dropped it. The card meaning therefore
// leads with the limit's first sentence, followed by the results screen's
// own recognition-step sentence, both verbatim. Pinned for a low band and
// a high band.
const AUD = {
  toolName: "Alcohol Use Disorder Criteria Self-Check",
  toolPath: "/alcohol-use-disorder-criteria",
};
const AUD_CARD_MEANING =
  "These ranges apply only if a clinician confirms the criteria in a professional interview. Counting criteria at home is a recognition step.";
const CLINICIAN_QUALIFIER =
  "only if a clinician confirms the criteria in a professional interview";

test("AUD criteria card keeps the clinician-confirmation limit in its meaning", async () => {
  // The limit lives inside every range description in the scoring data.
  for (const range of AUD_CRITERIA_RANGES) {
    assert.ok(range.description.endsWith(INTERVIEW_LIMIT), range.key);
  }
  assert.equal(
    firstSentence(INTERVIEW_LIMIT),
    "These ranges apply only if a clinician confirms the criteria in a professional interview.",
  );

  // The client wires the card meaning from that limit (plus the results
  // screen's interview note), not from the band description's first
  // sentence alone.
  const source = await readFile(
    new URL(
      "../src/app/alcohol-use-disorder-criteria/AUDCriteriaClient.tsx",
      import.meta.url,
    ),
    "utf8",
  );
  const cardJsx = source.match(/<ResultCard[\s\S]*?\/>/)?.[0];
  assert.ok(cardJsx, "AUDCriteriaClient must render <ResultCard />");
  assert.match(cardJsx, /meaning=\{`[^`]*INTERVIEW_LIMIT/);
  assert.doesNotMatch(cardJsx, /meaning=\{firstSentence\(range\.description\)\}/);
  assert.ok(source.includes("Counting criteria at home is a recognition step."));

  // The built card carries the qualifier verbatim at a low and a high band.
  for (const [count, band] of [
    [1, "Below the Diagnostic Threshold"],
    [8, "Severe Range (6 or More Criteria)"],
  ]) {
    const range = getAudCriteriaRange(count);
    assert.equal(range?.level, band);
    const card = buildResultCardData({
      ...AUD,
      score: `${count} of 11`,
      band: range.level,
      meaning: AUD_CARD_MEANING,
      date: DATE,
    });
    assert.ok(card.meaning.includes(CLINICIAN_QUALIFIER), card.meaning);
    assert.equal(card.meaning, AUD_CARD_MEANING);
  }
});

test("the card carries the screening line on screen and in the PNG", async () => {
  assert.equal(RESULT_CARD_SCREENING_LINE, "This is a screening tool, not a diagnosis.");
  const card = buildResultCardData({
    ...AUDITC,
    score: "3 / 12",
    band: "At-Threshold (Consider Further Assessment)",
    meaning: "Your responses are at or near the screening threshold.",
    date: DATE,
  });
  assert.equal(card.screeningLine, RESULT_CARD_SCREENING_LINE);
  const source = await readFile(
    new URL("../src/components/ResultCard.tsx", import.meta.url),
    "utf8",
  );
  const uses = source.match(/card\.screeningLine/g) ?? [];
  assert.ok(
    uses.length >= 2,
    "the DOM card and the PNG renderer must both show the screening line",
  );
});

// ---------------------------------------------------------------------------
// PNG fit: no card meaning may ever truncate silently in the downloaded PNG.
//
// The renderer used to wrap the meaning at 42px with a hard 3-line cap and
// drop the overflow words without a trace (the PCL-5 Mild meaning lost its
// last word that way). The renderer now plans the meaning with
// planResultCardMeaning (fit-to-box). This test runs that planner over
// every wired tool's every band meaning, taken from the tools' real source
// data (the scoring modules for CUDIT-R, FTND and the AUD criteria check;
// the range/tier tables inside the client sources for the rest), and
// asserts each one fits untruncated.
//
// Node has no canvas, so the planner is fed a conservative per-character
// width model instead of canvas measureText. The model's factors were
// calibrated against real Chromium canvas measurements of every string
// below on 2026-11-26: the model never wrapped a meaning to fewer lines
// than Chromium did, so a fit under the model is a fit on device, where
// the component measures with the real font stack anyway.
// ---------------------------------------------------------------------------

function charWidthFactor(ch) {
  if (ch === " ") return 0.28;
  if ("ilj".includes(ch)) return 0.28;
  if ("tfr".includes(ch)) return 0.37;
  if ("mw".includes(ch)) return 0.9;
  if ("MW".includes(ch)) return 0.95;
  if (ch >= "A" && ch <= "Z") return 0.72;
  if (".,;:!?'’()-".includes(ch)) return 0.32;
  return 0.56; // lowercase, digits, everything else
}

const conservativeMeasure = (text, size) =>
  size * [...text].reduce((sum, ch) => sum + charWidthFactor(ch), 0);

const unquote = (raw) => JSON.parse(`"${raw}"`);

function arrayRegion(src, name, file) {
  const start = src.indexOf(`const ${name}`);
  assert.ok(start >= 0, `${file}: const ${name} not found`);
  const end = src.indexOf("\n];", start);
  assert.ok(end > start, `${file}: const ${name} end not found`);
  return src.slice(start, end);
}

function zipPairs(region, file) {
  const labels = [...region.matchAll(/(?:level|label):\s*"((?:[^"\\]|\\.)*)"/g)].map((m) =>
    unquote(m[1]),
  );
  const texts = [...region.matchAll(/(?:description|message):\s*"((?:[^"\\]|\\.)*)"/g)].map(
    (m) => unquote(m[1]),
  );
  assert.equal(
    texts.length,
    labels.length,
    `${file}: band label/text count mismatch (${labels.length} vs ${texts.length})`,
  );
  return labels.map((label, i) => ({ label, text: texts[i] }));
}

async function collectCardMeanings() {
  const meanings = [];
  const add = (tool, band, meaning) => meanings.push({ tool, band, meaning });

  for (const r of CUDITR_RANGES) add("CUDIT-R", r.level, firstSentence(r.description));
  for (const r of FTND_RANGES) add("FTND", r.level, firstSentence(r.description));
  for (const r of AUD_CRITERIA_RANGES)
    add("AUD criteria check", r.level, firstSentence(r.description));

  const tsxTables = [
    ["audit-alcohol-test/AUDITClient.tsx", "RANGES", "AUDIT", 4],
    ["audit-c-alcohol-screen/AUDITCClient.tsx", "RANGES", "AUDIT-C", 4],
    ["gad-7-anxiety-test/GAD7Client.tsx", "RANGES", "GAD-7", 4],
    ["pcl-5-ptsd-screening/PCL5Client.tsx", "RANGES", "PCL-5", 4],
    ["phq-9-depression-test/PHQ9Client.tsx", "RANGES", "PHQ-9", 5],
    ["ces-d-depression-scale/CesdClient.tsx", "RESULT_STATES", "CES-D", 2],
    ["rosenberg-self-esteem-scale/RSESClient.tsx", "TIERS", "Rosenberg", 3],
    ["who-5-wellbeing-index/Who5Client.tsx", "TIERS", "WHO-5", 4],
  ];
  for (const [file, arrayName, tool, expected] of tsxTables) {
    const src = await readFile(new URL(`../src/app/${file}`, import.meta.url), "utf8");
    const pairs = zipPairs(arrayRegion(src, arrayName, file), file);
    assert.equal(pairs.length, expected, `${file}: expected ${expected} bands`);
    for (const { label, text } of pairs) add(tool, label, firstSentence(text));
  }

  // K6: the SPD tier's card meaning is a literal in the ResultCard JSX;
  // the other tiers pass firstSentence(tier.message).
  {
    const file = "k6-distress-scale/K6Client.tsx";
    const src = await readFile(new URL(`../src/app/${file}`, import.meta.url), "utf8");
    const pairs = zipPairs(arrayRegion(src, "TIERS", file), file);
    assert.equal(pairs.length, 3, "K6: expected 3 tiers");
    const cardJsx = src.match(/<ResultCard[\s\S]*?\/>/)?.[0] ?? "";
    const spdLiteral = "Your score meets the threshold for serious psychological distress.";
    assert.ok(cardJsx.includes(spdLiteral), "K6: SPD card literal not found in ResultCard JSX");
    for (const { label, text } of pairs)
      add("K6", label, label === "Serious Psychological Distress" ? spdLiteral : firstSentence(text));
  }

  // ASRS and PC-PTSD-5: both card meanings are literals in the ResultCard JSX.
  for (const [file, tool] of [
    ["asrs-adhd-screening/ASRSClient.tsx", "ASRS"],
    ["pc-ptsd-5-screening/PcPtsd5Client.tsx", "PC-PTSD-5"],
  ]) {
    const src = await readFile(new URL(`../src/app/${file}`, import.meta.url), "utf8");
    const cardJsx = src.match(/<ResultCard[\s\S]*?\/>/)?.[0] ?? "";
    const meaningExpr = cardJsx.slice(cardJsx.indexOf("meaning="));
    const literals = [...meaningExpr.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => unquote(m[1]));
    assert.equal(literals.length, 2, `${file}: expected 2 card meaning literals`);
    for (const literal of literals) add(tool, literal.slice(0, 24), literal);
  }

  // PHQ-4: the CARD_MEANING_BY_LEVEL lookup (Moderate and Severe share one).
  {
    const file = "phq-4-anxiety-depression-screen/PHQ4Client.tsx";
    const src = await readFile(new URL(`../src/app/${file}`, import.meta.url), "utf8");
    const start = src.indexOf("CARD_MEANING_BY_LEVEL");
    assert.ok(start >= 0, "PHQ-4: CARD_MEANING_BY_LEVEL not found");
    const region = src.slice(start, src.indexOf("};", start));
    const values = new Set(
      [...region.matchAll(/\w+:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => unquote(m[1])),
    );
    assert.equal(values.size, 3, "PHQ-4: expected 3 distinct card meanings");
    for (const v of values) add("PHQ-4", v.slice(0, 24), v);
  }

  return meanings;
}

test("every wired tool's every band meaning fits the PNG untruncated", async () => {
  const meanings = await collectCardMeanings();
  assert.equal(meanings.length, 52, "expected 52 distinct card meanings across the 15 tools");
  for (const { tool, band, meaning } of meanings) {
    const plan = planResultCardMeaning(conservativeMeasure, meaning);
    assert.equal(
      plan.fits,
      true,
      `${tool} (${band}) meaning does not fit the PNG meaning block at any size: "${meaning}"`,
    );
    assert.ok(plan.size >= RESULT_CARD_MEANING_MIN_SIZE, `${tool} (${band}): size below minimum`);
    assert.deepEqual(
      plan.lines.join(" ").split(/\s+/),
      meaning.split(/\s+/),
      `${tool} (${band}): planned lines must contain every word of the meaning, in order`,
    );
  }
});

test("the K6 serious-distress tier sentence would also fit untruncated", async () => {
  // The K6 card currently shows a shorter substitute for this tier, but the
  // tier's own first sentence (159 chars) is exactly the shape that used to
  // clip. The fit-to-box renderer must handle it with room to spare.
  const src = await readFile(
    new URL("../src/app/k6-distress-scale/K6Client.tsx", import.meta.url),
    "utf8",
  );
  const pairs = zipPairs(arrayRegion(src, "TIERS", "K6Client.tsx"), "K6Client.tsx");
  const spd = pairs.find((p) => p.label === "Serious Psychological Distress");
  assert.ok(spd, "K6 SPD tier not found");
  const sentence = firstSentence(spd.text);
  assert.equal(sentence.length, 159);
  const plan = planResultCardMeaning(conservativeMeasure, sentence);
  assert.equal(plan.fits, true);
  assert.deepEqual(plan.lines.join(" ").split(/\s+/), sentence.split(/\s+/));
});

test("the planner never drops words, and reports an extreme string as not fitting", () => {
  const extreme = Array.from({ length: 90 }, (_, i) => `word${i}`).join(" ") + " end.";
  const plan = planResultCardMeaning(conservativeMeasure, extreme);
  assert.equal(plan.fits, false, "an extreme string must fail loudly, not clip silently");
  assert.deepEqual(
    plan.lines.join(" ").split(/\s+/),
    extreme.split(/\s+/),
    "even when it cannot fit, the plan must still contain every word",
  );
});

test("the PNG renderer plans the meaning with the fit-to-box planner", async () => {
  const source = await readFile(
    new URL("../src/components/ResultCard.tsx", import.meta.url),
    "utf8",
  );
  assert.match(source, /planResultCardMeaning/);
  assert.doesNotMatch(source, /wrapLines/, "the old capped wrap must be gone");
});
