import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("cookie-free aggregate analytics is fail-closed and strips URL detail", async () => {
  const [component, routes, layout, packageJson] = await Promise.all([
    read("../src/components/PrivacySafeAggregateAnalytics.tsx"),
    read("../src/lib/routePolicies.ts"),
    read("../src/app/layout.tsx"),
    read("../package.json"),
  ]);

  assert.match(packageJson, /"@vercel\/analytics": "\^2\.0\.1"/);
  assert.match(layout, /<PrivacySafeAggregateAnalytics \/>/);
  assert.match(component, /isPrivacySafeAggregateAnalyticsRoute\(url\.pathname\)/);
  assert.match(component, /url\.search = ""/);
  assert.match(component, /url\.hash = ""/);
  assert.match(component, /globalPrivacyControlIsActive\(\)/);
  assert.match(component, /return null/);
  assert.match(component, /<Analytics beforeSend=\{filterPrivacySafeAggregateEvent\} \/>/);

  assert.match(routes, /PRIVACY_SAFE_AGGREGATE_ANALYTICS_ROUTES/);
  assert.match(routes, /"\/for-professionals\/screening-implementation-checklist"/);
  assert.match(routes, /"\/recommended-reading"/);
  assert.doesNotMatch(
    routes.match(/const PRIVACY_SAFE_AGGREGATE_ANALYTICS_ROUTES[\s\S]*?\n\]\);/)?.[0] ?? "",
    /phq|gad|audit|assessment|screening-tools|crisis-resources|mental-load|\/blog\//i,
  );
});

test("privacy notices describe the aggregate measurement boundary", async () => {
  const [privacy, cookies, healthNotice, terms] = await Promise.all([
    read("../src/app/privacy/page.tsx"),
    read("../src/app/cookies/page.tsx"),
    read("../src/app/consumer-health-data-privacy/page.tsx"),
    read("../src/app/terms/page.tsx"),
  ]);

  for (const source of [privacy, cookies, healthNotice, terms]) {
    assert.match(source, /Vercel Web Analytics/);
    assert.match(source, /cookie-free/i);
    assert.match(source, /Global Privacy Control/i);
  }

  assert.match(privacy, /hash that resets after 24 hours/);
  assert.match(cookies, /query strings and fragments/i);
  assert.match(healthNotice, /do not send Web\s+Analytics events/);
  assert.match(terms, /positive allowlist/);
});
