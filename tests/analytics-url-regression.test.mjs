import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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

test("GA page locations strip every query and fragment, including ordinary campaign text", async () => {
  const source = await read("src/components/ConsentAnalytics.tsx");
  const implementation = functionSource(source, "safePageLocation");
  for (const suffix of ["?utm_source=fixture&utm_campaign=example#section", "?unknown=fixture", "#example", ""]) {
    assert.equal(runInNewContext(`${implementation}; safePageLocation()`, {
      URL, window: { location: { href: `https://mindchecktools.com/${suffix}` } },
    }), "https://mindchecktools.com/");
  }
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

test("GA refuses decorated URLs and rechecks consent before initialization", async () => {
  const source = await read("src/components/ConsentAnalytics.tsx");
  const implementation = functionSource(source, "loadGoogleAnalytics");
  for (const [search, hash, gpc] of [["?utm_source=fixture", "", false], ["", "#fixture", false], ["", "", true]]) {
    // No DOM or gtag is provided: reaching script initialization would fail.
    runInNewContext(`${implementation}; loadGoogleAnalytics('/')`, {
      window: { location: { search, hash } }, globalPrivacyControlIsActive: () => gpc,
    });
  }
  assert.match(source, /window\.__mindcheckConsent\?\.analytics !== true/);
  assert.match(source, /send_page_view: false,[\s\S]*?page_location: safePageLocation\(\)/);
});

test("public-to-sensitive navigation also disposes of the aggregate runtime", async () => {
  const source = await read("src/components/SensitiveRouteLifecycle.tsx");
  assert.match(source, /isPrivacySafeAggregateAnalyticsRoute\(pathname\)/);
  assert.match(source, /!aggregateServicesAllowed && aggregateScriptLoaded/);
  assert.match(source, /aggregateScriptLoaded\.remove\(\)/);
  assert.match(source, /optionalServicesAllowed \|\| aggregateServicesAllowed/);
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
