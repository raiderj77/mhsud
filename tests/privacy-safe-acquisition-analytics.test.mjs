import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("obsolete GA acquisition event is removed", async () => {
  await assert.rejects(
    access(new URL("../src/lib/privacySafeAcquisitionAnalytics.ts", import.meta.url)),
    { code: "ENOENT" },
  );
  const grid = await readFile(new URL("../src/components/ToolGrid.tsx", import.meta.url), "utf8");
  const lifecycle = await readFile(new URL("../src/components/SensitiveRouteLifecycle.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(grid, /data-private-tool-launch|trackPrivateToolLaunch/);
  assert.doesNotMatch(lifecycle, /private_tool_launch|trackPrivateToolLaunch|gtag/);
});

test("clean navigation to excluded routes remains enforced", async () => {
  const lifecycle = await readFile(
    new URL("../src/components/SensitiveRouteLifecycle.tsx", import.meta.url),
    "utf8",
  );
  assert.match(lifecycle, /isPrivacySafeAggregateAnalyticsRoute\(destination\.pathname\)/);
  assert.match(lifecycle, /event\.preventDefault\(\)/);
  assert.match(lifecycle, /window\.location\.assign\(destination\.href\)/);
});
