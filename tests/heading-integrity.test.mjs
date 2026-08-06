import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("interactive local-storage tools render their H1 on the server", async () => {
  const pages = [
    ["src/app/daily-recovery-check-in/page.tsx", "Daily Recovery Check-In"],
    ["src/app/cbt-thought-record/page.tsx", "CBT Thought Record"],
    ["src/app/safety-plan/page.tsx", "Safety Plan"],
    ["src/app/worry-time-scheduler/page.tsx", "Worry Time Scheduler"],
  ];

  for (const [path, heading] of pages) {
    const source = await read(path);
    assert.match(source, /<h1\b/);
    assert.ok(source.includes(heading));
  }
});

test("embedded assessments do not introduce a second H1", async () => {
  const burnout = await read("src/app/burnout-assessment-tool/BurnoutClient.tsx");
  const compassion = await read("src/app/compassion-fatigue-test/page.tsx");
  const caregiver = await read("src/app/caregiver-burnout-assessment/page.tsx");
  const workStress = await read("src/app/work-stress-check/WorkStressClient.tsx");

  assert.match(burnout, /embedded \? \(/);
  assert.match(compassion, /<BurnoutClient faqData=\{FAQ_DATA\} embedded \/>/);
  assert.match(caregiver, /<BurnoutClient faqData=\{FAQ_DATA\} embedded \/>/);
  assert.doesNotMatch(workStress, /<h1\b/);
});

test("gated assessment entry pages expose one server H1 throughout the journey", async () => {
  const surfaces = [
    ["src/app/phq-4-anxiety-depression-screen/page.tsx", "src/app/phq-4-anxiety-depression-screen/PHQ4Client.tsx", "PHQ4Client"],
    ["src/app/ces-d-depression-scale/page.tsx", "src/app/ces-d-depression-scale/CesdClient.tsx", "CesdClient"],
    ["src/app/pc-ptsd-5-screening/page.tsx", "src/app/pc-ptsd-5-screening/PcPtsd5Client.tsx", "PcPtsd5Client"],
    ["src/app/rosenberg-self-esteem-scale/page.tsx", "src/app/rosenberg-self-esteem-scale/RSESClient.tsx", "RSESClient"],
    ["src/app/values-card-sort/page.tsx", "src/app/values-card-sort/ValuesCardSortClient.tsx", "ValuesCardSortClient"],
    ["src/app/k6-distress-scale/page.tsx", "src/app/k6-distress-scale/K6Client.tsx", "K6Client"],
    ["src/app/who-5-wellbeing-index/page.tsx", "src/app/who-5-wellbeing-index/Who5Client.tsx", "Who5Client"],
  ];

  for (const [pagePath, clientPath, clientName] of surfaces) {
    const [page, client] = await Promise.all([read(pagePath), read(clientPath)]);
    assert.equal((page.match(/<h1\b/g) ?? []).length, 1, `${pagePath} must render one H1 before the gate`);
    assert.equal((client.match(/<h1\b/g) ?? []).length, 0, `${clientPath} must not add a second H1 after entry`);
    const reviewerIndex = page.indexOf("<ToolReviewerBio");
    const clientIndex = page.indexOf(`<${clientName}`);
    assert.ok(reviewerIndex >= 0 && reviewerIndex < clientIndex, `${pagePath} must show the named reviewer before the gate`);
  }
});
