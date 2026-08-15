import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const helperUrl = new URL(
  "../src/lib/privacySafeAcquisitionAnalytics.ts",
  import.meta.url,
);
const gridUrl = new URL("../src/components/ToolGrid.tsx", import.meta.url);
const lifecycleUrl = new URL(
  "../src/components/SensitiveRouteLifecycle.tsx",
  import.meta.url,
);

test("homepage launch measurement is consented, aggregate, and topic-free", async () => {
  const helper = await readFile(helperUrl, "utf8");

  assert.match(helper, /window\.location\.pathname !== "\/"/);
  assert.match(helper, /getCurrentConsent\(\)\?\.analytics !== true/);
  assert.match(helper, /window\.gtag\?\.\("event", "private_tool_launch", \{/);
  assert.match(helper, /transport_type: "beacon"/);
  assert.doesNotMatch(helper, /href|destination|tool_name|category|score|answer|result/i);
});

test("homepage tool cards are measured before the privacy-safe hard navigation", async () => {
  const [grid, lifecycle] = await Promise.all([
    readFile(gridUrl, "utf8"),
    readFile(lifecycleUrl, "utf8"),
  ]);

  assert.equal((grid.match(/data-private-tool-launch="true"/g) ?? []).length, 2);
  assert.doesNotMatch(grid, /onClick=\{trackPrivateToolLaunch\}/);
  assert.match(lifecycle, /anchor\.dataset\.privateToolLaunch === "true"/);
  assert.match(lifecycle, /trackPrivateToolLaunch\(\)/);
  assert.ok(
    lifecycle.indexOf("trackPrivateToolLaunch();")
      < lifecycle.indexOf("window.location.assign(destination.href)"),
    "the aggregate event must be queued before the clean navigation",
  );
});
