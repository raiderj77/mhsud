import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import {
  buildEmailProviderPayload,
  MAX_SUBSCRIPTION_BODY_BYTES,
  parseSubscriptionBody,
} from "../src/lib/subscription.mjs";

test("subscription requires explicit consent", () => {
  assert.equal(parseSubscriptionBody(JSON.stringify({ email: "person@example.com" })).ok, false);
});

test("subscription rejects malformed email, honeypot, and oversized bodies", () => {
  assert.equal(parseSubscriptionBody(JSON.stringify({ email: "bad", consent: true })).ok, false);
  assert.equal(
    parseSubscriptionBody(
      JSON.stringify({ email: "person@example.com", consent: true, website: "spam" }),
    ).ok,
    false,
  );
  assert.equal(parseSubscriptionBody("x".repeat(MAX_SUBSCRIPTION_BODY_BYTES + 1)).status, 413);
});

test("provider receives email only, never screener or health context", () => {
  const payload = buildEmailProviderPayload("person@example.com");
  assert.deepEqual(payload, { email: "person@example.com", subscribed: true });
  assert.equal("source" in payload, false);
  assert.equal("userGroup" in payload, false);
  assert.equal("score" in payload, false);
});

test("affiliate links suppress referrer data and disclose the relationship", async () => {
  const component = await readFile(new URL("../src/components/TherapyCTA.tsx", import.meta.url), "utf8");
  assert.match(component, /referrerPolicy="no-referrer"/);
  assert.match(component, /noreferrer/);
  assert.match(component, /Affiliate Disclosure/);
  assert.match(component, /answers and score are not sent/);
});

test("newsletter form does not collect the screener name", async () => {
  const component = await readFile(new URL("../src/components/EmailCapture.tsx", import.meta.url), "utf8");
  const route = await readFile(new URL("../src/app/api/subscribe/route.ts", import.meta.url), "utf8");
  assert.doesNotMatch(component, /toolName|source:/);
  assert.doesNotMatch(route, /toolName|userGroup|body\.source/);
  assert.ok(
    route.indexOf("parseSubscriptionBody(rawBody)") < route.indexOf("if (!LOOPS_KEY)"),
    "request validation must run before provider configuration checks",
  );
});

test("youth substance screener contains no affiliate therapy promotion", async () => {
  const crafft = await readFile(
    new URL("../src/app/crafft-substance-screening/CrafftClient.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(crafft, /TherapyCTA|THERAPY_AFFILIATE_URL/);
  assert.match(crafft, /Crisis Resources/);
});

test("tracking and advertising require consent and Clarity is absent", async () => {
  const layout = await readFile(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /'analytics_storage': 'denied'/);
  assert.match(layout, /NEXT_PUBLIC_ADSENSE_ENABLED === "true"/);
  assert.match(layout, /data-cookieconsent="statistics"/);
  assert.match(layout, /data-cookieconsent="marketing"/);
  assert.doesNotMatch(layout, /clarity\.ms|microsoft-clarity/i);
  assert.doesNotMatch(layout, /data-georegions/);
});

test("scaled content stays quarantined from search and internal discovery", async () => {
  const nextConfig = await readFile(new URL("../next.config.mjs", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
  const homepage = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");

  assert.match(nextConfig, /source: "\/blog\/:path\*", destination: "\/screening-tools"/);
  assert.match(nextConfig, /"\/depression-test-for-teens", "\/phq-9-depression-test"/);
  assert.doesNotMatch(sitemap, /BLOG_POSTS/);
  assert.match(sitemap, /QUARANTINED_PATHS/);
  assert.match(homepage, /targetedScreenings=\{\[\]\}/);
});

test("every MindCheck ad is non-personalized", async () => {
  const adSlot = await readFile(new URL("../src/components/AdSlot.tsx", import.meta.url), "utf8");
  assert.match(adSlot, /data-npa="1"/);
  assert.doesNotMatch(adSlot, /npa \? \{ "data-npa"/);
});
