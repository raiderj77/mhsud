import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import test from "node:test";
import ts from "typescript";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const functionSource = (source, name) => {
  const start = source.indexOf(`function ${name}(`);
  assert.ok(start >= 0);
  const end = source.indexOf("\n}", start);
  return ts.transpile(source.slice(start, end + 2));
};

test("Google analytics and consent runtimes remain absent", async () => {
  for (const path of [
    "../src/components/ConsentAnalytics.tsx",
    "../src/lib/privacyConsent.ts",
    "../src/lib/privacySafeAcquisitionAnalytics.ts",
  ]) {
    await assert.rejects(access(new URL(path, import.meta.url)), { code: "ENOENT" });
  }
  const layout = await read("src/app/layout.tsx");
  assert.doesNotMatch(layout, /ConsentAnalytics|gtag|googletagmanager|G-[A-Z0-9]{8,}/);
});

test("GPC and unknown browser state block aggregate analytics", async () => {
  const source = await read("src/components/PrivacySafeAggregateAnalytics.tsx");
  const implementation = functionSource(source, "globalPrivacyControlIsActive");
  for (const context of [{}, { navigator: { globalPrivacyControl: true }, document: { cookie: "" } }, { navigator: {}, document: { cookie: "empire_gpc=1" } }]) {
    assert.equal(runInNewContext(`${implementation}; globalPrivacyControlIsActive()`, context), true);
  }
  assert.match(source, /useState\(false\)/);
  assert.match(source, /if \(!privacyChecked/);
});

test("public-to-sensitive navigation disposes of the aggregate runtime", async () => {
  const source = await read("src/components/SensitiveRouteLifecycle.tsx");
  assert.match(source, /isPrivacySafeAggregateAnalyticsRoute\(pathname\)/);
  assert.match(source, /!aggregateAllowed && aggregateScriptLoaded/);
  assert.match(source, /aggregateScriptLoaded\.remove\(\)/);
  assert.match(source, /aggregateAllowed/);
  assert.match(source, /window\.location\.assign\(destination\.href\)/);
});

test("aggregate event filter strips URL details and rejects excluded routes and GPC", async () => {
  const source = await read("src/components/PrivacySafeAggregateAnalytics.tsx");
  const implementation = functionSource(source, "filterPrivacySafeAggregateEvent");
  const filter = (url, gpc = false) => runInNewContext(`${implementation}; filterPrivacySafeAggregateEvent(event)`, {
    URL, event: { type: "pageview", url },
    globalPrivacyControlIsActive: () => gpc,
    isPrivacySafeAggregateAnalyticsRoute: path => ["/", "/about"].includes(path),
  });
  assert.equal(filter("https://mindchecktools.com/about?utm_source=fixture#example").url, "https://mindchecktools.com/about");
  assert.equal(filter("https://mindchecktools.com/phq-9-depression-test"), null);
  assert.equal(filter("https://mindchecktools.com/about", true), null);
  assert.equal(filter("not a URL"), null);
});
