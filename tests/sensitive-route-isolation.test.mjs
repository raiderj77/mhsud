import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

function setMembers(source, name) {
  const block = source.match(new RegExp(`const ${name} = new Set\\(\\[([\\s\\S]*?)\\]\\);`))?.[1] ?? "";
  return [...block.matchAll(/["']([^"']+)["']/g)].map((match) => match[1]).sort();
}

test("sensitive routes receive no-store and no-referrer response headers", async () => {
  const middleware = await read("../src/middleware.ts");
  assert.match(middleware, /isSensitiveRoute\(request\.nextUrl\.pathname\)/);
  for (const header of [
    "Cache-Control",
    "CDN-Cache-Control",
    "Vercel-CDN-Cache-Control",
    "Referrer-Policy",
    "X-Robots-Tag",
  ]) {
    assert.match(middleware, new RegExp(header));
  }
});

test("topical routes bypass tracking, advertising, affiliates, and assessment events", async () => {
  const [events, aggregate] = await Promise.all([
    read("../src/lib/assessmentAnalytics.ts"),
    read("../src/components/PrivacySafeAggregateAnalytics.tsx"),
  ]);
  await assert.rejects(access(new URL("../src/components/ConsentAnalytics.tsx", import.meta.url)), { code: "ENOENT" });
  await assert.rejects(access(new URL("../src/components/AdSlot.tsx", import.meta.url)), { code: "ENOENT" });
  await assert.rejects(access(new URL("../src/components/TherapyCTA.tsx", import.meta.url)), { code: "ENOENT" });
  await assert.rejects(access(new URL("../src/components/EmailCapture.tsx", import.meta.url)), { code: "ENOENT" });
  assert.match(events, /Compatibility no-op/);
  assert.doesNotMatch(events, /gtag|fetch\(|sendBeacon/);
  assert.match(aggregate, /isPrivacySafeAggregateAnalyticsRoute/);
  assert.match(aggregate, /globalPrivacyControlIsActive/);
});

test("interactive health tools without generic screening words stay sensitive", async () => {
  const [policies, worker] = await Promise.all([
    read("../src/lib/routePolicies.ts"),
    read("../public/service-worker.js"),
  ]);
  for (const route of [
    "attachment-style-quiz",
    "box-breathing-exercise",
    "cognitive-distortion-identifier",
    "coping-skills-randomizer",
    "crisis-resources",
    "dass-21-depression-anxiety-stress",
    "dbt-crisis-skills",
    "five-senses-grounding",
    "health-recovery-timeline",
    "relapse-prevention-plan",
    "treatment-cost-estimator",
    "trigger-identification-worksheet",
    "urge-surfing-timer",
    "values-card-sort",
    "withdrawal-timeline",
  ]) {
    assert.match(policies, new RegExp(`"${route}"`));
    assert.match(worker, new RegExp(`["']${route}["']`));
  }
  assert.deepEqual(
    setMembers(worker, "EXPLICIT_SENSITIVE_ROUTES"),
    setMembers(policies, "EXPLICIT_SENSITIVE_ROUTES"),
    "browser and service-worker sensitive-route sets must stay identical",
  );
  const policyPattern = policies.match(/const SENSITIVE_TOOL_SEGMENT\s*=\s*(\/[^\n]+\/i)/)?.[1];
  const workerPattern = worker.match(/const SENSITIVE_TOOL_SEGMENT\s*=\s*(\/[^\n]+\/i)/)?.[1];
  assert.equal(workerPattern, policyPattern, "sensitive slug patterns must stay identical");
  assert.match(worker, /const CACHE_VERSION = "3\.0\.0"/);
});

test("obsolete Google consent state cannot reactivate optional tracking", async () => {
  await assert.rejects(access(new URL("../src/components/ConsentAnalytics.tsx", import.meta.url)), { code: "ENOENT" });
  await assert.rejects(access(new URL("../src/lib/privacyConsent.ts", import.meta.url)), { code: "ENOENT" });
  const layout = await read("../src/app/layout.tsx");
  assert.doesNotMatch(layout, /ConsentAnalytics|googletagmanager|gtag|G-[A-Z0-9]{10}/);
});

test("service worker never caches sensitive routes or optional Google services", async () => {
  const worker = await read("../public/service-worker.js");
  assert.match(worker, /if \(url\.pathname\.startsWith\("\/api\/"\)\) \{[\s\S]*?fetch\(request, \{ cache: "no-store" \}\)[\s\S]*?return;[\s\S]*?\}/);
  assert.match(worker, /if \(isSensitivePath\(url\.pathname\)\) \{[\s\S]*?networkOnlySensitive\(request\)[\s\S]*?return;[\s\S]*?\}/);
  assert.match(worker, /isAggregateAnalyticsPath\(url\.pathname\)/);
  assert.match(worker, /fetch\(request, \{ cache: "no-store" \}\)/);
  assert.doesNotMatch(worker, /mindcheck-analytics/);
  assert.doesNotMatch(worker, /importScripts|storage\.googleapis\.com|googletagmanager|googlesyndication/i);
  assert.doesNotMatch(worker, /process\.env/);
  assert.match(worker, /const MAX_STATIC_ENTRIES = 120/);
  assert.match(worker, /const MAX_PAGE_ENTRIES = 60/);
  assert.match(worker, /await trimCache\(cache, MAX_STATIC_ENTRIES\)/);
  assert.match(worker, /await trimCache\(cache, MAX_PAGE_ENTRIES\)/);
});

test("service worker privacy updates bypass stale script caches and activate promptly", async () => {
  const [worker, layout, nextConfig] = await Promise.all([
    read("../public/service-worker.js"),
    read("../src/app/layout.tsx"),
    read("../next.config.mjs"),
  ]);
  assert.match(worker, /self\.addEventListener\("install", \(event\) => \{/);
  assert.match(worker, /event\.waitUntil\([\s\S]*self\.skipWaiting\(\)/);
  assert.match(layout, /register\('\/service-worker\.js', \{ updateViaCache: 'none' \}\)/);
  assert.match(nextConfig, /source: "\/service-worker\.js"[\s\S]*?"no-cache, no-store, must-revalidate"/);
  assert.match(nextConfig, /source: "\/service-worker\.js"[\s\S]*?"Vercel-CDN-Cache-Control"/);
  assert.ok(
    nextConfig.indexOf('source: "/service-worker.js"')
      > nextConfig.indexOf('value: "public, max-age=31536000, immutable"'),
    "service-worker cache overrides must follow the generic JavaScript cache rule",
  );
});

test("history restores reset state, result sharing is disabled, and printing requires a warning", async () => {
  const [lifecycle, printing, css, phq] = await Promise.all([
    read("../src/components/SensitiveRouteLifecycle.tsx"),
    read("../src/lib/sensitivePrinting.ts"),
    read("../src/app/globals.css"),
    read("../src/app/phq-9-depression-test/PHQ9Client.tsx"),
  ]);
  assert.match(lifecycle, /event\.persisted/);
  assert.match(lifecycle, /window\.location\.reload\(\)/);
  assert.match(lifecycle, /window\.location\.replace\(pathname\)/);
  assert.match(lifecycle, /caches\.delete/);
  assert.match(lifecycle, /window\.history\.replaceState/);
  assert.match(printing, /window\.confirm/);
  assert.match(css, /data-sensitive-route="true".*print-approved/);
  assert.match(phq, /printSensitiveResults\(\)/);
  assert.doesNotMatch(phq, /Copy My Results|PHQ-9 Self-Check Results/);
});

test("screening consent has a stable accessible selector for synthetic monitoring", async () => {
  const gate = await read("../src/components/DisclaimerGate.tsx");
  assert.match(gate, /htmlFor="educational-use-consent"/);
  assert.match(gate, /id="educational-use-consent"/);
});
