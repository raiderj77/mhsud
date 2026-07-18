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
