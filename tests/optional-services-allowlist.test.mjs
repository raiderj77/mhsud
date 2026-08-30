import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("affiliate and email services use a homepage-only positive allowlist", async () => {
  const policies = await read("src/lib/routePolicies.ts");
  const allowlist = policies.match(
    /const OPTIONAL_SERVICE_ALLOWED_ROUTES = new Set\(\[([\s\S]*?)\]\)/,
  )?.[1] ?? "";
  const routes = [...allowlist.matchAll(/["']([^"']+)["']/g)].map((match) => match[1]);
  assert.deepEqual(routes, ["/"]);
  assert.match(policies, /export function isOptionalServicesAllowedRoute/);
});

test("affiliate, email, and aggregate navigation enforce their separate allowlists", async () => {
  const [therapy, email, lifecycle] = await Promise.all([
    read("src/components/TherapyCTA.tsx"),
    read("src/components/EmailCapture.tsx"),
    read("src/components/SensitiveRouteLifecycle.tsx"),
  ]);
  assert.match(therapy, /!isOptionalServicesAllowedRoute\(pathname\)/);
  assert.match(email, /!isOptionalServicesAllowedRoute\(pathname\)/);
  assert.match(lifecycle, /isPrivacySafeAggregateAnalyticsRoute/);
  assert.match(lifecycle, /forceCleanExcludedNavigation/);
  assert.match(lifecycle, /document\.addEventListener\("click", forceCleanExcludedNavigation, true\)/);
  assert.match(lifecycle, /window\.location\.assign\(destination\.href\)/);
  assert.doesNotMatch(lifecycle, /ConsentAnalytics|consented-google-analytics|trackPrivateToolLaunch|gtag/);
});
