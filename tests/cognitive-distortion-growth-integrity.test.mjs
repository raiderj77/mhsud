import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();

async function source(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

test("cognitive-distortion page matches its search promise without clinical overreach", async () => {
  const [page, client, prompts] = await Promise.all([
    source("src/app/cognitive-distortion-identifier/page.tsx"),
    source("src/app/cognitive-distortion-identifier/CognitiveDistortionClient.tsx"),
    source("src/lib/reflectionPrompts.ts"),
  ]);
  const routeSource = `${page}\n${client}`;

  assert.match(page, /Cognitive Distortion Identifier \| Free Browser-Local CBT Tool/);
  assert.match(page, /<h1[\s\S]*Cognitive Distortion Identifier and Reframing Tool/);
  assert.doesNotMatch(client, /<h1\b/);
  assert.match(routeSource, /16 common cognitive distortions|16 common thinking patterns/);
  assert.match(routeSource, /not a validated assessment|not a score/i);
  assert.match(routeSource, /does not use AI|not analyzed by AI/i);
  assert.match(client, /mode="exercise"/);
  assert.doesNotMatch(routeSource, /Most (negative )?thoughts involve|2-4 distortions/i);
  assert.doesNotMatch(routeSource, /one of the most evidence-based|significant reductions/i);
  assert.doesNotMatch(prompts, /changing them leads to significant improvements|before they spiral into strong negative emotions/i);
  assert.doesNotMatch(prompts, /How do these distorted thoughts affect|most frequent distorted thought/i);
});

test("cognitive-distortion free text is protected before entry and never monetized", async () => {
  const client = await source("src/app/cognitive-distortion-identifier/CognitiveDistortionClient.tsx");
  const privacyNotice = client.indexOf("Before you type");
  const thoughtField = client.indexOf('id="thought-input"');

  assert.ok(privacyNotice >= 0, "a just-in-time privacy notice is present");
  assert.ok(thoughtField > privacyNotice, "privacy notice appears before the free-text field");
  assert.match(client, /fictional or de-identified example/i);
  assert.match(client, /autoComplete="off"/);
  assert.match(client, /aria-describedby="thought-privacy-notice thought-input-guidance"/);
  assert.doesNotMatch(client, /AdSlot|googlesyndication|gtag\(/);
});

test("cognitive-distortion page retains trust, crisis, privacy, and primary-source signals", async () => {
  const [page, client] = await Promise.all([
    source("src/app/cognitive-distortion-identifier/page.tsx"),
    source("src/app/cognitive-distortion-identifier/CognitiveDistortionClient.tsx"),
  ]);
  const routeSource = `${page}\n${client}`;

  assert.match(page, /<ToolReviewerBio lastReviewed="August 2026"/);
  assert.ok(page.indexOf("<ToolReviewerBio") < page.indexOf("<CognitiveDistortionClient"));
  assert.match(routeSource, /988 Suicide & Crisis Lifeline/);
  assert.match(routeSource, /not therapy|not a substitute for professional mental health care/i);
  assert.match(routeSource, /processed locally and are not intentionally sent/i);
  assert.match(routeSource, /beckinstitute\.org\/about\/understanding-cbt/);
  assert.match(routeSource, /nhs\.uk\/every-mind-matters\/mental-wellbeing-tips\/self-help-cbt-techniques\/thought-record/);
});
