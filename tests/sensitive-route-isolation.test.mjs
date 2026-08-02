import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

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

test("sensitive routes bypass tracking, advertising, affiliates, and assessment events", async () => {
  const [consent, ads, therapy, events] = await Promise.all([
    read("../src/components/ConsentAnalytics.tsx"),
    read("../src/components/AdSlot.tsx"),
    read("../src/components/TherapyCTA.tsx"),
    read("../src/lib/assessmentAnalytics.ts"),
  ]);
  assert.match(consent, /sensitive[\s\S]*analytics: false, advertising: false/);
  assert.match(consent, /removeOptionalServiceScripts/);
  assert.match(ads, /sensitive \|\| process\.env\.NEXT_PUBLIC_ADSENSE_ENABLED/);
  assert.match(therapy, /isSensitiveRoute\(pathname\)/);
  assert.match(events, /isSensitiveBrowserLocation\(\)/);
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
    assert.match(worker, new RegExp(`'${route}'`));
  }
  assert.match(worker, /const CACHE_VERSION = '1\.2\.0'/);
});

test("withdrawing optional consent reloads a clean document", async () => {
  const consent = await read("../src/components/ConsentAnalytics.tsx");
  assert.match(consent, /const previous = window\.__mindcheckConsent/);
  assert.match(consent, /previous\.analytics && !choice\.analytics/);
  assert.match(consent, /previous\.advertising && !choice\.advertising/);
  assert.match(consent, /if \(withdrewOptionalService\) window\.location\.reload\(\)/);
});

test("service worker never caches sensitive routes or optional Google services", async () => {
  const worker = await read("../public/service-worker.js");
  assert.match(worker, /isSensitivePath\(url\.pathname\)[\s\S]*NetworkOnly/);
  assert.match(worker, /request\.mode === 'navigate' && !isSensitivePath\(url\.pathname\)/);
  assert.doesNotMatch(worker, /mindcheck-analytics/);
  assert.doesNotMatch(worker, /GOOGLE ANALYTICS: Network-first/);
  assert.doesNotMatch(worker, /GOOGLE ADSENSE: Network-first/);
  assert.doesNotMatch(worker, /process\.env/);
});

test("service worker privacy updates bypass stale script caches and activate promptly", async () => {
  const [worker, layout, nextConfig] = await Promise.all([
    read("../public/service-worker.js"),
    read("../src/app/layout.tsx"),
    read("../next.config.mjs"),
  ]);
  assert.match(worker, /self\.addEventListener\('install', \(\) => self\.skipWaiting\(\)\)/);
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
  const [lifecycle, printing, css, phq, scoff] = await Promise.all([
    read("../src/components/SensitiveRouteLifecycle.tsx"),
    read("../src/lib/sensitivePrinting.ts"),
    read("../src/app/globals.css"),
    read("../src/app/phq-9-depression-test/PHQ9Client.tsx"),
    read("../src/app/scoff-eating-disorder-screening/SCOFFClient.tsx"),
  ]);
  assert.match(lifecycle, /event\.persisted/);
  assert.match(lifecycle, /window\.location\.reload\(\)/);
  assert.match(lifecycle, /window\.location\.replace\(pathname\)/);
  assert.match(lifecycle, /caches\.delete/);
  assert.match(lifecycle, /window\.history\.replaceState/);
  assert.match(printing, /window\.confirm/);
  assert.match(css, /data-sensitive-route="true".*print-approved/);
  assert.match(phq, /printSensitiveResults\(\)/);
  assert.match(scoff, /printSensitiveResults\(\)/);
  assert.doesNotMatch(phq, /Copy My Results|PHQ-9 Self-Check Results/);
  assert.doesNotMatch(scoff, /Copy My Results|SCOFF Eating Disorder Screening Results/);
});

test("screening consent has a stable accessible selector for synthetic monitoring", async () => {
  const gate = await read("../src/components/DisclaimerGate.tsx");
  assert.match(gate, /htmlFor="educational-use-consent"/);
  assert.match(gate, /id="educational-use-consent"/);
});
