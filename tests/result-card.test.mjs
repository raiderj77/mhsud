import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  RESULT_CARD_PRIVACY_LINE,
  RESULT_CARD_SCREENING_LINE,
  buildResultCardData,
  firstSentence,
} from "../src/lib/resultCard.mjs";
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
