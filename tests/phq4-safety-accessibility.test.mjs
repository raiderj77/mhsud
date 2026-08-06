import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const clientUrl = new URL(
  "../src/app/phq-4-anxiety-depression-screen/PHQ4Client.tsx",
  import.meta.url,
);
const pageUrl = new URL(
  "../src/app/phq-4-anxiety-depression-screen/page.tsx",
  import.meta.url,
);

test("PHQ-4 choices expose complete keyboard radio behavior, 44px targets, and announced results", async () => {
  const source = await readFile(clientUrl, "utf8");

  assert.match(source, /role="radiogroup"/);
  assert.match(source, /role="radio"/);
  assert.match(source, /aria-checked=\{answers\[q\.id\] === opt\.value\}/);
  assert.match(source, /tabIndex=\{answers\[q\.id\] === opt\.value/);
  assert.match(source, /event\.key === "ArrowLeft"/);
  assert.match(source, /event\.key === "ArrowRight"/);
  assert.match(source, /event\.key === "Home"/);
  assert.match(source, /event\.key === "End"/);
  assert.match(source, /document\.getElementById\(`phq4-\$\{questionId\}-\$\{nextValue\}`\)\?\.focus\(\)/);
  assert.match(source, /min-h-11/);
  assert.match(source, /role="status" aria-live="polite"/);
});

test("PHQ-4 result language keeps screening thresholds non-diagnostic", async () => {
  const client = await readFile(clientUrl, "utf8");
  const page = await readFile(pageUrl, "utf8");
  const combined = `${client}\n${page}`;

  assert.match(combined, /published (?:screening )?threshold/i);
  assert.match(combined, /not a diagnosis/i);
  assert.doesNotMatch(combined, /suggests possible disorder/i);
  assert.doesNotMatch(combined, /No action needed/i);
});
