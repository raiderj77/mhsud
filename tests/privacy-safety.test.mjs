import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

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

test("dormant email-capture and therapy-affiliate infrastructure stays removed", () => {
  for (const relativePath of [
    "../src/components/TherapyCTA.tsx",
    "../src/components/EmailCapture.tsx",
    "../src/app/api/subscribe/route.ts",
    "../src/lib/subscription.mjs",
  ]) {
    assert.equal(existsSync(new URL(relativePath, import.meta.url)), false, relativePath);
  }
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
    /Cookie-free aggregate measurement/,
    /Vercel/,
    /Consumer Health Data Request/,
  ]) assert.match(notice, required);
  assert.doesNotMatch(notice, /Resource-email subscription|Loops/i);
  assert.match(notice, /does not use Google Analytics/i);
  assert.match(notice, /do not sell consumer health data/i);
  assert.match(notice, /Questionnaire answers, scores[\s\S]*processed in your browser[\s\S]*not intentionally sent/);
  assert.match(notice, /Ordinary page requests[\s\S]*hosting records/);
  assert.match(privacy, /requested health-topic path can appear in ordinary hosting data/);
  assert.match(privacy, /coarse city\/region\/country/);
  assert.match(privacy, /operating system and version/);
  assert.match(privacy, /browser and version/);
  assert.match(privacy, /device type/);
  assert.match(privacy, /analytics-script version/);
  assert.match(notice, /cleanup cannot[\s\S]*guaranteed if JavaScript or hydration fails/);
  assert.doesNotMatch(privacy, /MindCheck Tools does not collect, store, or share health data/);
  assert.match(privacy, /MODPA took effect October 1, 2025/);
});

test("homepage describes its privacy boundary without calling tools confidential", async () => {
  const homepage = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");
  assert.match(homepage, /what is the privacy boundary/i);
  assert.doesNotMatch(homepage, /screening tools free and confidential/i);
});

test("unused public indexing proxy and false search action stay removed", async () => {
  const metadata = await readFile(new URL("../src/lib/metadata.ts", import.meta.url), "utf8");
  assert.equal(existsSync(new URL("../src/app/api/indexnow/route.ts", import.meta.url)), false);
  assert.doesNotMatch(metadata, /SearchAction|search_term_string/);
});

test("IndexNow retains one canonical public verification key and no fake secret knob", async () => {
  const key = "55d118ba976fb26d19c6f5c6f5b1816d";
  const publicFiles = await readdir(new URL("../public/", import.meta.url));
  const keyFiles = publicFiles.filter((name) => /^[0-9a-f]{32}\.txt$/.test(name));
  const [contents, workflow, envExample] = await Promise.all([
    readFile(new URL(`../public/${key}.txt`, import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/empire-check.yml", import.meta.url), "utf8"),
    readFile(new URL("../.env.example", import.meta.url), "utf8"),
  ]);

  assert.deepEqual(keyFiles, [`${key}.txt`]);
  assert.equal(contents.trim(), key);
  assert.match(workflow, /Expected exactly one public IndexNow key file/);
  assert.ok(workflow.includes(key));
  assert.doesNotMatch(envExample, /INDEXNOW_API_KEY/);
});

test("dead trust-marketing hero cannot be accidentally revived", () => {
  assert.equal(existsSync(new URL("../src/components/ModernHero.tsx", import.meta.url)), false);
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

test("Google Analytics, display advertising, and Clarity runtimes are absent", async () => {
  const layout = await readFile(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
  assert.equal(existsSync(new URL("../src/components/AdSlot.tsx", import.meta.url)), false);
  assert.equal(existsSync(new URL("../src/components/ConsentAnalytics.tsx", import.meta.url)), false);
  assert.equal(existsSync(new URL("../src/lib/privacyConsent.ts", import.meta.url)), false);
  const nextConfig = await readFile(new URL("../next.config.mjs", import.meta.url), "utf8");
  assert.match(layout, /<PrivacySafeAggregateAnalytics \/>/);
  assert.doesNotMatch(layout, /ConsentAnalytics|gtag|googletagmanager|G-[A-Z0-9]{8,}|ADSENSE|google-adsense-account/i);
  assert.doesNotMatch(layout, /clarity\.ms|microsoft-clarity/i);
  assert.doesNotMatch(nextConfig, /google|googlesyndication|doubleclick|consent\.cookiebot/i);
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

test("assessment funnel events are compatibility no-ops with no analytics transport", async () => {
  const analytics = await readFile(
    new URL("../src/lib/assessmentAnalytics.ts", import.meta.url),
    "utf8",
  );
  assert.match(analytics, /"assessment_started" \| "assessment_completed"/);
  assert.match(analytics, /trackAssessmentEvent\(eventName: AssessmentEvent\): void \{\s*void eventName;\s*\}/);
  assert.doesNotMatch(analytics, /gtag|fetch\(|sendBeacon|Analytics/);

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

test("retired content stays out of search and internal discovery", async () => {
  const nextConfig = await readFile(new URL("../next.config.mjs", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");
  const homepage = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");
  const attachmentPage = await readFile(new URL("../src/app/attachment-style-quiz/page.tsx", import.meta.url), "utf8");
  const screeningTools = await readFile(new URL("../src/app/screening-tools/page.tsx", import.meta.url), "utf8");
  const llms = await readFile(new URL("../public/llms.txt", import.meta.url), "utf8");
  const llmsFull = await readFile(new URL("../public/llms-full.txt", import.meta.url), "utf8");
  const llmsFullRoute = await readFile(new URL("../src/app/llms-full.txt/route.ts", import.meta.url), "utf8");

  assert.match(nextConfig, /legacyBlogRedirects/);
  assert.doesNotMatch(nextConfig, /source: "\/blog\/:path\*"/);
  assert.match(nextConfig, /retiredNonBlogNotFoundPaths/);
  assert.doesNotMatch(nextConfig, /"\/depression-test-for-teens", "\/phq-9-depression-test"/);
  assert.equal(existsSync(new URL("../src/app/depression-test-for-teens/page.tsx", import.meta.url)), false);
  assert.equal(existsSync(new URL("../src/app/anxiety-test-for-teens/page.tsx", import.meta.url)), false);
  assert.equal(existsSync(new URL("../src/app/adhd-test-for-teens/page.tsx", import.meta.url)), false);
  assert.doesNotMatch(sitemap, /BLOG_POSTS/);
  assert.doesNotMatch(sitemap, /SITE_URL\}\/blog/);
  assert.match(sitemap, /QUARANTINED_PATHS/);
  assert.equal(existsSync(new URL("../src/app/blog/attachment-styles-guide/page.tsx", import.meta.url)), false);
  assert.equal(existsSync(new URL("../src/lib/blog.ts", import.meta.url)), false);
  assert.match(homepage, /targetedScreenings=\{\[\]\}/);
  for (const source of [attachmentPage, screeningTools, llms, llmsFull, llmsFullRoute]) {
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

test("Google consent and advertising runtimes are removed rather than conditionally enabled", () => {
  assert.equal(existsSync(new URL("../src/components/ConsentAnalytics.tsx", import.meta.url)), false);
  assert.equal(existsSync(new URL("../src/lib/privacyConsent.ts", import.meta.url)), false);
});

test("no authorized display-ad seller declaration is published", () => {
  assert.equal(existsSync(new URL("../public/ads.txt", import.meta.url)), false);
  assert.equal(existsSync(new URL("../ads.txt", import.meta.url)), false);
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
