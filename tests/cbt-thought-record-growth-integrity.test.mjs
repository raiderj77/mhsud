import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

async function source(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

test("CBT thought record matches its search promise without creating a clinical result", async () => {
  const [page, client, prompts] = await Promise.all([
    source("src/app/cbt-thought-record/page.tsx"),
    source("src/app/cbt-thought-record/ThoughtRecordClient.tsx"),
    source("src/lib/reflectionPrompts.ts"),
  ]);
  const routeSource = `${page}\n${client}`;

  assert.match(page, /CBT Thought Record Worksheet \| Free 7-Step Tool/);
  assert.match(page, /<h1[\s\S]*CBT Thought Record Worksheet/);
  assert.doesNotMatch(client, /<h1\b/);
  assert.match(routeSource, /independent educational implementation/i);
  assert.match(routeSource, /not a score, diagnosis, or clinical result/i);
  assert.match(routeSource, /does not analyze or score what you enter/i);
  assert.doesNotMatch(routeSource, /one of the most effective|significant reductions|most people see a noticeable decrease|at least one thought record per day/i);
  assert.doesNotMatch(prompts, /Many therapists recommend 1[–-]3 per week|process becomes more automatic/i);
});

test("sensitive thought-record entry is protected before input and storage is opt-in", async () => {
  const client = await source("src/app/cbt-thought-record/ThoughtRecordClient.tsx");
  const privacyNotice = client.indexOf('id="thought-record-entry-privacy"');
  const firstField = client.indexOf('aria-label="Situation"');

  assert.ok(privacyNotice >= 0, "a just-in-time privacy notice is present");
  assert.ok(firstField > privacyNotice, "privacy notice appears before the first free-text field");
  assert.match(client, /fictional or de-identified example/i);
  assert.match(client, /autoComplete="off"/);
  assert.match(client, /spellCheck=\{false\}/);
  assert.match(client, /aria-describedby="thought-record-entry-privacy"/);
  assert.match(client, /const \[saveToBrowser, setSaveToBrowser\] = useState\(false\)/);
  assert.match(client, /if \(saveToBrowser\) handleSaveRecord\(\)/);
  assert.match(client, /optional and off by default/i);
  assert.match(client, /mode="exercise"/);
  assert.match(client, /only when you opt in/i);
  assert.match(client, /printSensitiveResults\(\)/);
  assert.match(client, /min-h-\[44px\] px-6 py-2\.5 rounded-xl text-sm font-semibold/);
  assert.doesNotMatch(client, /AdSlot|googlesyndication|gtag\(/);
});

test("CBT thought record retains reviewer, primary sources, crisis actions, and summary focus", async () => {
  const [page, client] = await Promise.all([
    source("src/app/cbt-thought-record/page.tsx"),
    source("src/app/cbt-thought-record/ThoughtRecordClient.tsx"),
  ]);
  const routeSource = `${page}\n${client}`;

  assert.match(page, /<ToolReviewerBio lastReviewed="August 2, 2026"\s*\/>/);
  assert.ok(page.indexOf("<ToolReviewerBio") < page.indexOf("<ThoughtRecordClient"));
  assert.match(routeSource, /nhs\.uk\/every-mind-matters\/mental-wellbeing-tips\/self-help-cbt-techniques\/thought-record/);
  assert.match(routeSource, /beckinstitute\.org\/cbt-resources\/resources-for-professionals-and-students\/cbtresources/);
  assert.match(routeSource, /href="tel:988"/);
  assert.match(routeSource, /href="sms:988"/);
  assert.match(routeSource, /href="tel:911"/);
  assert.match(routeSource, /href="\/crisis-resources"/);
  assert.match(client, /ref=\{summaryRef\} tabIndex=\{-1\}/);
  assert.match(client, /summaryRef\.current\?\.focus\(\)/);
  assert.match(routeSource, /not intentionally sent to MindCheck Tools/i);
});
