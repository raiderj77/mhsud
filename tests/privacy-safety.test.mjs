import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  buildEmailProviderPayload,
  MAX_SUBSCRIPTION_BODY_BYTES,
  parseSubscriptionBody,
} from "../src/lib/subscription.mjs";

async function readSourceTree(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await readSourceTree(entryPath));
    } else if (/\.(?:ts|tsx|mjs)$/.test(entry.name)) {
      files.push({ path: entryPath, source: await readFile(entryPath, "utf8") });
    }
  }
  return files;
}

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
  assert.match(component, /url\.protocol === "https:"/);
});

test("newsletter form does not collect the screener name", async () => {
  const component = await readFile(new URL("../src/components/EmailCapture.tsx", import.meta.url), "utf8");
  const route = await readFile(new URL("../src/app/api/subscribe/route.ts", import.meta.url), "utf8");
  assert.doesNotMatch(component, /toolName|source:/);
  assert.doesNotMatch(route, /toolName|userGroup|body\.source/);
  assert.match(component, /referrerPolicy:\s*"no-referrer"/);
  assert.match(component, /!isOptionalServicesAllowedRoute\(pathname\)\) return null/);
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

test("consumer-health-data notice discloses limited request data and service providers", async () => {
  const notice = await readFile(
    new URL("../src/app/consumer-health-data-privacy/page.tsx", import.meta.url),
    "utf8",
  );
  const privacy = await readFile(new URL("../src/app/privacy/page.tsx", import.meta.url), "utf8");
  for (const required of [
    /Website request data/,
    /Consented public-page analytics/,
    /Resource-email subscription/,
    /Vercel/,
    /Google Analytics/,
    /Loops/,
    /Consumer Health Data Request/,
  ]) assert.match(notice, required);
  assert.match(notice, /do not sell consumer health data/i);
  assert.match(notice, /Questionnaire answers, scores[\s\S]*are not collected/);
  assert.match(privacy, /requested health-topic path can appear in ordinary hosting data/);
  assert.doesNotMatch(privacy, /MindCheck Tools does not collect, store, or share health data/);
  assert.match(privacy, /MODPA took effect October 1, 2025/);
});

test("unused public indexing proxy and false search action stay removed", async () => {
  const metadata = await readFile(new URL("../src/lib/metadata.ts", import.meta.url), "utf8");
  assert.equal(existsSync(new URL("../src/app/api/indexnow/route.ts", import.meta.url)), false);
  assert.doesNotMatch(metadata, /SearchAction|search_term_string/);
});

test("publisher and named reviewer identities remain separate, public, and private by scope", async () => {
  const metadata = await readFile(new URL("../src/lib/metadata.ts", import.meta.url), "utf8");
  const author = await readFile(new URL("../src/config/author.ts", import.meta.url), "utf8");
  const profile = await readFile(new URL("../src/app/about/jason-ramirez/page.tsx", import.meta.url), "utf8");
  const appSources = await readSourceTree(fileURLToPath(new URL("../src/app/", import.meta.url)));

  assert.match(author, /name: "Jason Ramirez"/);
  assert.match(author, /credentialFull: "Certified Alcohol and Drug Counselor Level II \(CADC-II\)"/);
  assert.match(author, /hasCredential:/);
  assert.match(author, /credentialRegistryUrl:/);
  const sameAs = author.match(/sameAs:\s*\[([\s\S]*?)\]/)?.[1] ?? "";
  assert.doesNotMatch(sameAs, /credentialRegistryUrl/);

  assert.match(metadata, /authors: \[\{ name: SITE_NAME, url: SITE_URL \}\]/);
  assert.match(metadata, /creator: SITE_NAME/);
  assert.doesNotMatch(metadata, /authors: \[\{ name: SITE_AUTHOR\.name \}\]/);
  assert.ok((metadata.match(/reviewedBy: AUTHOR_SCHEMA/g) ?? []).length >= 3);

  assert.match(profile, /Jason Ramirez, CADC-II/);
  assert.match(profile, /Certified Alcohol and Drug Counselor Level II \(CADC-II\)/);
  assert.match(profile, /CCAPP SUD Credential Registry/);

  const privateIdentity = /Your Friendly Developer|Prunedale|Salinas|PostalAddress|recovering addict|storage shed/i;
  const obsoleteCredential = /Certified (?:Drug and Alcohol Counselor|Alcohol and Drug Counselor II)/;
  for (const { path, source } of appSources) {
    assert.doesNotMatch(source, /reviewedBy:\s*\{\s*"@type":\s*"Organization"/, path);
    assert.doesNotMatch(source, /reviewedBy: \{ "@type": "Person", "name": "Jason Ramirez"/, path);
    assert.doesNotMatch(source, privateIdentity, path);
    assert.doesNotMatch(source, obsoleteCredential, path);
  }
});

test("the youth CRAFFT information page contains no affiliate or assessment flow", async () => {
  const crafft = await readFile(
    new URL("../src/app/crafft-substance-screening/page.tsx", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(crafft, /TherapyCTA|THERAPY_AFFILIATE_URL|CrafftClient/);
  assert.doesNotMatch(crafft, /<form|<input|type="radio"/);
  assert.match(crafft, /written-approval requirement/i);
  assert.match(crafft, /View crisis resources/);
});

test("tracking and advertising require consent and Clarity is absent", async () => {
  const layout = await readFile(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
  const consentAnalytics = await readFile(
    new URL("../src/components/ConsentAnalytics.tsx", import.meta.url),
    "utf8",
  );
  const adSlot = await readFile(new URL("../src/components/AdSlot.tsx", import.meta.url), "utf8");
  const nextConfig = await readFile(new URL("../next.config.mjs", import.meta.url), "utf8");
  assert.match(layout, /'analytics_storage': 'denied'/);
  assert.match(layout, /NEXT_PUBLIC_ADSENSE_ENABLED === "true"/);
  assert.match(layout, /NEXT_PUBLIC_GOOGLE_CERTIFIED_CMP_READY === "true"/);
  assert.match(layout, /NEXT_PUBLIC_ADSENSE_STRICT_CSP_READY === "true"/);
  assert.match(layout, /<ConsentAnalytics adsenseEnabled=\{adsenseEnabled\} \/>/);
  assert.doesNotMatch(layout, /googletagmanager\.com\/gtag\/js/);
  assert.doesNotMatch(layout, /Cookiebot|consent\.cookiebot|data-cookieconsent/i);
  assert.match(consentAnalytics, /CONSENT_STORAGE_KEY/);
  assert.match(consentAnalytics, /analytics: false, advertising: false/);
  assert.match(consentAnalytics, /analytics_storage: consent\.analytics \? "granted" : "denied"/);
  assert.match(consentAnalytics, /ad_storage: consent\.advertising \? "granted" : "denied"/);
  assert.match(consentAnalytics, /ad_user_data: "denied"/);
  assert.match(consentAnalytics, /ad_personalization: "denied"/);
  assert.match(consentAnalytics, /document\.createElement\("script"\)/);
  assert.match(consentAnalytics, /globalPrivacyControlIsActive/);
  assert.match(consentAnalytics, /G-XKHQN1NJ2Z/);
  assert.match(consentAnalytics, /SAFE_CAMPAIGN_KEYS/);
  assert.match(consentAnalytics, /page_path: pathname/);
  assert.match(consentAnalytics, /version !== 2/);
  assert.match(consentAnalytics, /topic-neutral homepage/);
  assert.match(consentAnalytics, /health-topic paths are excluded/);
  assert.match(consentAnalytics, /Consumer Health Data Privacy Notice/);
  assert.match(consentAnalytics, /consented-google-adsense/);
  assert.match(consentAnalytics, /queue\.requestNonPersonalizedAds = 1/);
  assert.match(consentAnalytics, /if \(effectiveChoice\.advertising\) loadNonPersonalizedAds\(\)/);
  assert.match(adSlot, /getCurrentConsent\(\)\?\.advertising !== true/);
  assert.match(adSlot, /NEXT_PUBLIC_GOOGLE_CERTIFIED_CMP_READY === "true"/);
  assert.match(adSlot, /NEXT_PUBLIC_ADSENSE_STRICT_CSP_READY === "true"/);
  assert.match(adSlot, /!adSlot\) return null/);
  assert.match(adSlot, /adsbygoogle\.requestNonPersonalizedAds = 1/);
  assert.match(adSlot, /!routeAllowed \|\| !runtimeEnabled \|\| !allowed \|\| !adSlot/);
  assert.match(adSlot, /data-npa="1"/);
  assert.doesNotMatch(layout, /clarity\.ms|microsoft-clarity/i);
  assert.doesNotMatch(layout, /data-georegions/);
  assert.doesNotMatch(layout, /rel="preconnect" href="https:\/\/www\.googletagmanager\.com"/);
  assert.doesNotMatch(layout, /rel="preconnect" href="https:\/\/pagead2\.googlesyndication\.com"/);
  assert.doesNotMatch(layout, /13971731025ec697-s\.p\.woff2/);
  assert.doesNotMatch(nextConfig, /consent\.cookiebot|consentcdn\.cookiebot/i);
  assert.doesNotMatch(nextConfig, /unsafe-eval/);
  for (const directive of [
    /X-Frame-Options", value: "DENY/,
    /frame-ancestors 'none'/,
    /object-src 'none'/,
    /base-uri 'self'/,
    /form-action 'self'/,
    /worker-src 'self'/,
  ]) assert.match(nextConfig, directive);
  assert.match(nextConfig, /source: "\/api\/:path\*"[\s\S]*?private, no-store/);
});

test("assessment funnel events require analytics consent and contain no health data", async () => {
  const analytics = await readFile(
    new URL("../src/lib/assessmentAnalytics.ts", import.meta.url),
    "utf8",
  );
  assert.match(analytics, /getCurrentConsent\(\)\?\.analytics !== true/);
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
  const attachmentPage = await readFile(new URL("../src/app/attachment-style-quiz/page.tsx", import.meta.url), "utf8");
  const attachmentGuide = await readFile(new URL("../src/app/blog/attachment-styles-guide/page.tsx", import.meta.url), "utf8");
  const screeningTools = await readFile(new URL("../src/app/screening-tools/page.tsx", import.meta.url), "utf8");
  const llms = await readFile(new URL("../public/llms.txt", import.meta.url), "utf8");
  const llmsFull = await readFile(new URL("../public/llms-full.txt", import.meta.url), "utf8");
  const llmsFullRoute = await readFile(new URL("../src/app/llms-full.txt/route.ts", import.meta.url), "utf8");

  assert.match(nextConfig, /source: "\/blog\/:path\*", destination: "\/screening-tools"/);
  assert.match(nextConfig, /"\/depression-test-for-teens", "\/phq-9-depression-test"/);
  assert.doesNotMatch(sitemap, /BLOG_POSTS/);
  assert.match(sitemap, /QUARANTINED_PATHS/);
  assert.match(homepage, /targetedScreenings=\{\[\]\}/);
  for (const source of [attachmentPage, attachmentGuide, screeningTools, llms, llmsFull, llmsFullRoute]) {
    assert.doesNotMatch(source, /attachment-style-test-for-couples/);
  }
});

test("AI discovery files use maintained canonical URLs and scoped clinical claims", async () => {
  const [sitemap, llms, llmsFull, llmsFullRoute, navbar] = await Promise.all([
    readFile(new URL("../src/app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../public/llms.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/llms-full.txt", import.meta.url), "utf8"),
    readFile(new URL("../src/app/llms-full.txt/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../src/components/Navbar.tsx", import.meta.url), "utf8"),
  ]);

  const quarantineBlock = sitemap.match(/const QUARANTINED_PATHS = new Set\(\[([\s\S]*?)\]\);/)?.[1] ?? "";
  const quarantined = new Set(
    [...quarantineBlock.matchAll(/"(\/[^\"]+)"/g)].map((match) => match[1]),
  );
  const maintained = new Set(["/"]);
  for (const match of sitemap.matchAll(/url:\s*`\$\{SITE_URL\}([^`]+)`/g)) {
    const path = match[1].replace(/\/$/, "") || "/";
    if (!quarantined.has(path)) maintained.add(path);
  }

  for (const [name, content] of [["llms.txt", llms], ["llms-full.txt", llmsFull]]) {
    const siteUrls = [...content.matchAll(/https:\/\/mindchecktools\.com(?:\/[^)\s\]]*)?/g)].map((match) => match[0]);
    assert.ok(siteUrls.length > 0, `${name} has no site URLs`);
    for (const rawUrl of siteUrls) {
      const path = new URL(rawUrl).pathname.replace(/\/$/, "") || "/";
      assert.equal(maintained.has(path), true, `${name} contains noncanonical URL ${rawUrl}`);
      assert.equal(path === "/blog" || path.startsWith("/blog/"), false, `${name} exposes quarantined blog URL ${rawUrl}`);
    }
    assert.doesNotMatch(content, /all tools[^\n.]*clinically validated/i);
  }

  assert.match(llms, /Some pages implement published instruments/);
  assert.match(llms, /rights-limited instruments remain public as educational information without questionnaire administration or scoring/);
  assert.match(llmsFull, /Other tools are educational or self-reflection resources/);
  assert.match(llmsFullRoute, /readFileSync/);
  assert.match(llmsFullRoute, /public[\s\S]*llms-full\.txt/);
  assert.doesNotMatch(llmsFullRoute, /https:\/\/mindchecktools\.com/);
  assert.doesNotMatch(navbar, /href="\/blog"/);
  assert.match(navbar, /href="\/clinical-evidence"/);
});

test("every MindCheck ad is non-personalized", async () => {
  const consent = await readFile(new URL("../src/components/ConsentAnalytics.tsx", import.meta.url), "utf8");
  const adSlot = await readFile(new URL("../src/components/AdSlot.tsx", import.meta.url), "utf8");
  assert.match(adSlot, /data-npa="1"/);
  assert.match(adSlot, /adsbygoogle\.requestNonPersonalizedAds = 1/);
  assert.match(consent, /queue\.requestNonPersonalizedAds = 1/);
  assert.doesNotMatch(adSlot, /npa \? \{ "data-npa"/);
});

test("ads.txt names the direct seller and owner without a false manager", async () => {
  const ads = await readFile(new URL("../public/ads.txt", import.meta.url), "utf8");
  assert.match(ads, /^google\.com, pub-7171402107622932, DIRECT, f08c47fec0942fa0$/m);
  assert.match(ads, /^OWNERDOMAIN=mindchecktools\.com$/m);
  assert.doesNotMatch(ads, /^MANAGERDOMAIN=/m);
});

test("public copy avoids absolute privacy and anonymity promises", async () => {
  const sourceRoot = fileURLToPath(new URL("../src/", import.meta.url));
  const files = await readSourceTree(sourceRoot);
  for (const file of files) {
    assert.doesNotMatch(
      file.source,
      /100% private|completely private|private\s*&(?:amp;)?\s*anonymous/i,
      file.path,
    );
  }
});
