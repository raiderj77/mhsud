import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("work stress content uses relevant primary sources and no false study citation", async () => {
  const page = await read("src/app/work-stress-check/page.tsx");
  assert.match(page, /who\.int\/standards\/classifications\/frequently-asked-questions\/burn-out-an-occupational-phenomenon/);
  assert.match(page, /who\.int\/news-room\/fact-sheets\/detail\/mental-health-at-work/);
  assert.match(page, /cdc\.gov\/niosh\/stress\/about\/index\.html/);
  assert.doesNotMatch(page, /31693056|Gallup study|two-thirds of workers|23% reported/i);
  assert.match(page, /site-defined areas/i);
  assert.match(page, /not a validated model/i);
});

test("work stress total has no invented clinical bands or monetization surface", async () => {
  const client = await read("src/app/work-stress-check/WorkStressClient.tsx");
  assert.doesNotMatch(client, /const RANGES|Very High Stress|Moderate Stress|Lower Stress|burnout risk/i);
  assert.match(client, /no validated severity bands or clinical cutoff/i);
  assert.match(client, /No clinical band/);
  assert.doesNotMatch(client, /d\.pct\s*>=/);
  assert.doesNotMatch(client, /AdSlot|TherapyCTA|EmailCapture|affiliate|sponsor/i);
});
