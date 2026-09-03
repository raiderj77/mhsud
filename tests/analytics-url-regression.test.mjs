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
  assert.match(source, /script\[data-sdkn\^=\\?"@vercel\/analytics\\?"\]/);
  assert.match(source, /querySelectorAll<HTMLScriptElement>/);
  assert.match(source, /scripts\.forEach\(\(script\) => script\.remove\(\)\)/);
  assert.match(source, /previousAggregateAllowed\.current/);
  assert.match(source, /previouslyAggregateAllowed === true \|\| aggregateScriptRemoved/);
  assert.match(source, /requiresCleanDocument\(aggregateAllowed, previouslyAggregateAllowed, aggregateScriptRemoved\)/);
  assert.match(source, /window\.location\.replace\(pathname\)/);
  assert.match(source, /destination\.search = ""/);
  assert.match(source, /destination\.hash = ""/);
  assert.match(source, /window\.location\.assign\(cleanInternalDestination\(destination\)\)/);
});

test("hashed Vercel loader removal and clean-document decisions are executable", async () => {
  const source = await read("src/components/SensitiveRouteLifecycle.tsx");
  const removeImplementation = functionSource(source, "removeVercelAnalyticsScripts");
  const decisionImplementation = functionSource(source, "requiresCleanDocument");
  const cleanDestinationImplementation = functionSource(source, "cleanInternalDestination");
  const removed = [];
  const selectors = [];
  const removeResult = runInNewContext(
    `${removeImplementation}; removeVercelAnalyticsScripts()`,
    {
      VERCEL_ANALYTICS_SCRIPT_SELECTOR: 'script[data-sdkn^="@vercel/analytics"]',
      document: {
        querySelectorAll(selector) {
          selectors.push(selector);
          return [{ remove: () => removed.push("first") }, { remove: () => removed.push("second") }];
        },
      },
    },
  );
  assert.equal(removeResult, true);
  assert.deepEqual(selectors, ['script[data-sdkn^="@vercel/analytics"]']);
  assert.deepEqual(removed, ["first", "second"]);

  const decide = (allowed, previouslyAllowed, scriptRemoved) => runInNewContext(
    `${decisionImplementation}; requiresCleanDocument(${JSON.stringify(allowed)}, ${JSON.stringify(previouslyAllowed)}, ${JSON.stringify(scriptRemoved)})`,
  );
  assert.equal(decide(false, true, false), true, "programmatic transitions from allowlisted pages reload");
  assert.equal(decide(false, null, true), true, "a stray aggregate script on direct entry reloads");
  assert.equal(decide(false, null, false), false, "a clean direct entry does not loop");
  assert.equal(decide(true, true, true), false, "an allowlisted route remains eligible");

  assert.equal(
    runInNewContext(
      `${cleanDestinationImplementation}; cleanInternalDestination(destination)`,
      { URL, destination: new URL("https://mindchecktools.com/phq-9-depression-test?score=fixture#result") },
    ),
    "https://mindchecktools.com/phq-9-depression-test",
  );
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
