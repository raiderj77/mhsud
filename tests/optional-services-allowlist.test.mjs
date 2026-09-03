import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("dormant therapy affiliate and email subscription services are removed", async () => {
  const policies = await read("src/lib/routePolicies.ts");
  const env = await read(".env.example");
  for (const path of [
    "../src/components/TherapyCTA.tsx",
    "../src/components/EmailCapture.tsx",
    "../src/app/api/subscribe/route.ts",
    "../src/lib/subscription.mjs",
  ]) {
    await assert.rejects(access(new URL(path, import.meta.url)), { code: "ENOENT" });
  }
  assert.doesNotMatch(policies, /OPTIONAL_SERVICE_ALLOWED_ROUTES|isOptionalServicesAllowedRoute/);
  assert.doesNotMatch(env, /NEXT_PUBLIC_THERAPY_AFFILIATE_URL|LOOPS_API_KEY/);
});

test("aggregate navigation keeps its independent positive allowlist", async () => {
  const lifecycle = await read("src/components/SensitiveRouteLifecycle.tsx");
  assert.match(lifecycle, /isPrivacySafeAggregateAnalyticsRoute/);
  assert.match(lifecycle, /forceCleanExcludedNavigation/);
  assert.match(lifecycle, /data-sdkn\^=/);
  assert.match(lifecycle, /document\.addEventListener\("click", forceCleanExcludedNavigation, true\)/);
  assert.match(lifecycle, /window\.location\.assign\(cleanInternalDestination\(destination\)\)/);
  assert.doesNotMatch(lifecycle, /ConsentAnalytics|consented-google-analytics|trackPrivateToolLaunch|gtag/);
});
