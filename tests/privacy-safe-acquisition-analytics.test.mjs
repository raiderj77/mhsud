import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const helperUrl = new URL(
  "../src/lib/privacySafeAcquisitionAnalytics.ts",
  import.meta.url,
);
const gridUrl = new URL("../src/components/ToolGrid.tsx", import.meta.url);

test("homepage launch measurement is consented, aggregate, and topic-free", async () => {
  const helper = await readFile(helperUrl, "utf8");

  assert.match(helper, /window\.location\.pathname !== "\/"/);
  assert.match(helper, /getCurrentConsent\(\)\?\.analytics !== true/);
  assert.match(helper, /window\.gtag\?\.\("event", "private_tool_launch"\)/);
  assert.doesNotMatch(helper, /href|destination|tool_name|category|score|answer|result/i);
});

test("homepage tool cards call only the generic launch event", async () => {
  const grid = await readFile(gridUrl, "utf8");

  assert.match(grid, /onClick=\{trackPrivateToolLaunch\}/);
  assert.doesNotMatch(grid, /trackPrivateToolLaunch\([^)]/);
});
