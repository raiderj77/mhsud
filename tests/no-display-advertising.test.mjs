import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";
import nextConfig from "../next.config.mjs";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

async function sourceFiles(dir) {
  const entries = await readdir(new URL(`../${dir}`, import.meta.url), { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const file = `${dir}/${entry.name}`;
    return entry.isDirectory() ? sourceFiles(file) : /\.(tsx?|jsx?)$/.test(file) ? [file] : [];
  }))).flat();
}

test("application source contains no GA4 or display-ad runtime", async () => {
  for (const path of [
    "../src/components/AdSlot.tsx",
    "../src/components/ConsentAnalytics.tsx",
    "../src/lib/privacyConsent.ts",
    "../src/lib/privacySafeAcquisitionAnalytics.ts",
    "../public/ads.txt",
  ]) {
    await assert.rejects(access(new URL(path, import.meta.url)), { code: "ENOENT" });
  }

  const forbidden = /adsbygoogle|loadNonPersonalizedAds|ADS_READY_EVENT|google-adsense-account|googlesyndication|doubleclick|googleadservices|adservice\.google|fundingchoicesmessages|adtrafficquality|googletagmanager\.com\/gtag|NEXT_PUBLIC_(?:ADSENSE|GOOGLE_CERTIFIED_CMP)/i;
  for (const file of [...await sourceFiles("src"), "next.config.mjs", ".env.example"]) {
    const source = await read(file);
    assert.doesNotMatch(source, forbidden, file);
    assert.doesNotMatch(source, /\bG-[A-Z0-9]{10}\b/, file);
  }
});

test("CSP drops Google and ad origins while preserving security protections", async () => {
  const headers = (await nextConfig.headers()).find((entry) => entry.source === "/(.*)").headers;
  const csp = headers.find((header) => header.key === "Content-Security-Policy").value;
  for (const protection of [/frame-src 'none'/, /frame-ancestors 'none'/, /object-src 'none'/, /base-uri 'self'/, /form-action 'self'/]) {
    assert.match(csp, protection);
  }
  assert.doesNotMatch(csp, /google|googlesyndication|doubleclick|fundingchoices|adtrafficquality/i);
  assert.equal(headers.find((header) => header.key === "X-Frame-Options").value, "DENY");
});

test("public disclosures state no Google Analytics or display ads and preserve ordinary-data boundaries", async () => {
  for (const file of [
    "src/app/privacy/page.tsx",
    "src/app/cookies/page.tsx",
    "src/app/consumer-health-data-privacy/page.tsx",
    "src/app/terms/page.tsx",
    "src/app/page.tsx",
    "public/llms.txt",
    "public/llms-full.txt",
  ]) {
    const source = await read(file);
    assert.match(source, /does not (?:use Google Analytics|display ads)|Google Analytics (?:is not used|are absent)/i, file);
    assert.doesNotMatch(source, /Consent Mode v2|Google Analytics is available|Google Analytics choice/i, file);
    assert.doesNotMatch(source, /\bG-[A-Z0-9]{10}\b/, file);
  }
  const privacy = await read("src/app/privacy/page.tsx");
  for (const boundary of [/hosting/i, /Loops/, /Vercel/, /affiliate/i, /local/i, /Global Privacy Control/]) {
    assert.match(privacy, boundary);
  }
});

test("Vercel aggregate analytics stays allowlisted, URL-minimized, and GPC-blocked", async () => {
  const [component, policies] = await Promise.all([
    read("src/components/PrivacySafeAggregateAnalytics.tsx"),
    read("src/lib/routePolicies.ts"),
  ]);
  assert.match(component, /globalPrivacyControlIsActive/);
  assert.match(component, /url\.search = ""/);
  assert.match(component, /url\.hash = ""/);
  assert.match(component, /isPrivacySafeAggregateAnalyticsRoute/);
  assert.match(policies, /PRIVACY_SAFE_AGGREGATE_ANALYTICS_ROUTES/);
  assert.doesNotMatch(component, /gtag|Google Analytics|custom event/i);
});

test("active operating guidance keeps analytics and advertising boundaries explicit", async () => {
  const agents = await read("AGENTS.md");
  const bridge = await read("CLAUDE.md");
  assert.match(agents, /Do not run GA4 on MindCheckTools/);
  assert.match(agents, /Permanent no-display-ad rule/);
  assert.match(bridge, /AGENTS\.md.*single MindCheckTools source of truth/s);
  assert.match(bridge, /re-enable display advertising/);
});

test("review branch does not change main deployment behavior", async () => {
  const config = JSON.parse(await read("vercel.json"));
  assert.equal(config.redirects[0].destination, "https://mindchecktools.com/$1");
  assert.notEqual(config.git?.deploymentEnabled?.main, false);
});
