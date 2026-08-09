import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

async function source(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

test("trigger worksheet matches its search promise without creating a clinical result", async () => {
  const [page, client, prompts] = await Promise.all([
    source("src/app/trigger-identification-worksheet/page.tsx"),
    source("src/app/trigger-identification-worksheet/TriggerWorksheetClient.tsx"),
    source("src/lib/reflectionPrompts.ts"),
  ]);
  const routeSource = `${page}\n${client}`;

  assert.match(page, /Addiction Trigger Identification Worksheet \| Free Browser Tool/);
  assert.match(page, /<h1[\s\S]*Addiction Trigger Identification Worksheet/);
  assert.doesNotMatch(client, /<h1\b/);
  assert.match(routeSource, /not a relapse-risk assessment|not a clinical result/i);
  assert.match(routeSource, /not assessment scores, severity levels, or relapse-risk estimates/i);
  assert.match(client, /Your Worksheet Summary/);
  assert.doesNotMatch(routeSource, /personalized trigger profile|Your Trigger Profile|majority of relapse episodes|significantly less likely to relapse/i);
  assert.doesNotMatch(routeSource, /movement changes brain chemistry|brain has an internal clock|essential oil/i);
  assert.doesNotMatch(prompts, /foundational step in recovery because it allows you to prepare coping responses/i);
});

test("custom trigger entry is protected before input and the journey is not monetized", async () => {
  const client = await source("src/app/trigger-identification-worksheet/TriggerWorksheetClient.tsx");
  const privacyNotice = client.indexOf('id="trigger-entry-privacy"');
  const customField = client.indexOf('aria-label={`Custom ${cat.label} trigger`}');

  assert.ok(privacyNotice >= 0, "a just-in-time privacy notice is present");
  assert.ok(customField > privacyNotice, "privacy notice appears before custom-entry fields");
  assert.match(client, /fictional or de-identified phrase/i);
  assert.match(client, /autoComplete="off"/);
  assert.match(client, /spellCheck=\{false\}/);
  assert.match(client, /aria-describedby="trigger-entry-privacy"/);
  assert.match(client, /printSensitiveResults\(\)/);
  assert.match(client, /PRIVATE_SHARE_NOTICE/);
  assert.doesNotMatch(client, /AdSlot|googlesyndication|gtag\(/);
});

test("trigger worksheet retains reviewer, official sources, crisis actions, and accessible summary focus", async () => {
  const [page, client] = await Promise.all([
    source("src/app/trigger-identification-worksheet/page.tsx"),
    source("src/app/trigger-identification-worksheet/TriggerWorksheetClient.tsx"),
  ]);
  const routeSource = `${page}\n${client}`;

  assert.match(page, /<AuthorByline publishedDate="2025-01-01" modifiedDate="2026-08-09"/);
  assert.ok(page.indexOf("<AuthorByline") < page.indexOf("<TriggerWorksheetClient"));
  assert.match(routeSource, /rethinkingdrinking\.niaaa\.nih\.gov\/tools\/worksheets-more\/how-stop-alcohol-cravings/);
  assert.match(routeSource, /tel:18006624357/);
  assert.match(routeSource, /href="tel:988"/);
  assert.match(routeSource, /href="sms:988"/);
  assert.match(routeSource, /href="\/crisis-resources"/);
  assert.match(client, /ref=\{profileRef\} tabIndex=\{-1\}/);
  assert.match(client, /profileRef\.current\?\.focus\(\)/);
  assert.match(routeSource, /not intentionally sent to MindCheck Tools/i);
});
