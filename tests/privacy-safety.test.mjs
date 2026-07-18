import assert from "node:assert/strict";
import { existsSync } from "node:fs";
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
  assert.match(component, /referrerPolicy:\s*"no-referrer"/);
  assert.match(route, /origin !== new URL\(req\.url\)\.origin/);
  assert.match(route, /fetchSite && fetchSite !== "same-origin"/);
  assert.ok(
    route.indexOf("parseSubscriptionBody(rawBody)") < route.indexOf("if (!LOOPS_KEY)"),
    "request validation must run before provider configuration checks",
  );
});

test("browser-local health records are disclosed where they are stored", async () => {
  const privacy = await readFile(new URL("../src/app/privacy/page.tsx", import.meta.url), "utf8");
  const cookies = await readFile(new URL("../src/app/cookies/page.tsx", import.meta.url), "utf8");
  const terms = await readFile(new URL("../src/app/terms/page.tsx", import.meta.url), "utf8");
  const notice = await readFile(new URL("../src/components/LocalStorageNotice.tsx", import.meta.url), "utf8");
  const pages = await Promise.all([
    "safety-plan",
    "cbt-thought-record",
    "worry-time-scheduler",
    "daily-recovery-check-in",
    "sobriety-calculator",
  ].map((slug) => readFile(new URL(`../src/app/${slug}/page.tsx`, import.meta.url), "utf8")));

  assert.match(privacy, /Browser-local entries are not intentionally transmitted/);
  assert.match(privacy, /Vercel hosts MindCheck Tools/);
  assert.match(cookies, /mct-safety-plan/);
  assert.match(terms, /locally saved journal, plan, check-in, or sobriety data/);
  assert.match(notice, /anyone with access to this browser profile/i);
  for (const page of pages) assert.match(page, /LocalStorageNotice/);
});

test("unused public indexing proxy and false search action stay removed", async () => {
  const metadata = await readFile(new URL("../src/lib/metadata.ts", import.meta.url), "utf8");
  assert.equal(existsSync(new URL("../src/app/api/indexnow/route.ts", import.meta.url)), false);
  assert.doesNotMatch(metadata, /SearchAction|search_term_string/);
});

test("clinical schema names the documented reviewer on maintained tools", async () => {
  const gad = await readFile(new URL("../src/app/gad-7-anxiety-test/page.tsx", import.meta.url), "utf8");
  const phq = await readFile(new URL("../src/app/phq-9-depression-test/page.tsx", import.meta.url), "utf8");
  for (const page of [gad, phq]) {
    assert.doesNotMatch(page, /reviewedBy: \{ "@type": "Organization", "name": "Your Friendly Developer LLC"/);
    assert.match(page, /reviewedBy: \{ "@type": "Person", "name": "Jason Ramirez"/);
  }
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
  const nextConfig = await readFile(new URL("../next.config.mjs", import.meta.url), "utf8");
  assert.match(layout, /'analytics_storage': 'denied'/);
  assert.match(layout, /NEXT_PUBLIC_ADSENSE_ENABLED === "true"/);
  assert.match(layout, /data-cookieconsent="statistics"/);
  assert.match(layout, /data-cookieconsent="marketing"/);
  assert.doesNotMatch(layout, /clarity\.ms|microsoft-clarity/i);
  assert.doesNotMatch(layout, /data-georegions/);
  assert.doesNotMatch(layout, /rel="preconnect" href="https:\/\/www\.googletagmanager\.com"/);
  assert.doesNotMatch(layout, /13971731025ec697-s\.p\.woff2/);
  assert.ok(
    layout.indexOf("{adsenseEnabled && (") < layout.indexOf('rel="preconnect" href="https://pagead2.googlesyndication.com"'),
    "advertising resource hints must stay behind the AdSense production flag",
  );
  assert.doesNotMatch(nextConfig, /unsafe-eval/);
});

test("assessment funnel events require statistics consent and contain no health data", async () => {
  const analytics = await readFile(
    new URL("../src/lib/assessmentAnalytics.ts", import.meta.url),
    "utf8",
  );
  assert.match(analytics, /Cookiebot\?\.consent\?\.statistics !== true/);
  assert.match(analytics, /"assessment_started" \| "assessment_completed"/);
  assert.match(analytics, /gtag\?\.\("event", eventName\)/);
  assert.doesNotMatch(analytics, /answers|score|severity|email|pathname|page_path/i);

  for (const path of [
    "../src/app/mental-load-calculator/MentalLoadClient.tsx",
    "../src/app/phq-9-depression-test/PHQ9Client.tsx",
    "../src/app/gad-7-anxiety-test/GAD7Client.tsx",
  ]) {
    const source = await readFile(new URL(path, import.meta.url), "utf8");
    assert.match(source, /trackAssessmentEvent\("assessment_started"\)/);
    assert.match(source, /trackAssessmentEvent\("assessment_completed"\)/);
  }
});

test("the previously missing result pages offer local browser printing", async () => {
  for (const path of [
    "../src/app/phq-4-anxiety-depression-screen/PHQ4Client.tsx",
    "../src/app/work-stress-check/WorkStressClient.tsx",
  ]) {
    const source = await readFile(new URL(path, import.meta.url), "utf8");
    assert.match(source, /window\.print\(\)/);
    assert.match(source, /Print Results/);
    assert.match(source, /id="printable-results"/);
  }
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
