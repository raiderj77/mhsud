/**
 * predeploy-check.js — MindCheckTools release guard
 * Validates privacy, public discovery files, legal pages, focused navigation,
 * security headers, review-date hygiene, and maintained external references.
 * Exit code 1 on failure, 0 on pass.
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { resolve, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
let failures = 0;

function pass(msg) {
  console.log(`  ✅ ${msg}`);
}

function fail(msg) {
  console.error(`  ❌ ${msg}`);
  failures++;
}

function check(label, fn) {
  console.log(`\n🔍 ${label}`);
  fn();
}

function walkFiles(dir, pattern = /\.(ts|tsx|js|mjs)$/) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(full, pattern);
    return entry.isFile() && pattern.test(entry.name) ? [full] : [];
  });
}

check("No display-ad or GA runtime", () => {
  const adsTxt = resolve(ROOT, "public/ads.txt");
  if (existsSync(adsTxt)) fail("public/ads.txt must not exist; MindCheckTools does not use display advertising");
  else pass("ads.txt absent");

  const runtimeFiles = [
    ...walkFiles(resolve(ROOT, "src")),
    resolve(ROOT, "next.config.mjs"),
    resolve(ROOT, ".env.example"),
  ].filter(existsSync);

  const forbidden = [
    /ca-pub-[0-9]+/i,
    /G-[A-Z0-9]{8,}/,
    /googlesyndication/i,
    /adsbygoogle/i,
    /google-adsense-account/i,
    /googletagmanager\.com\/gtag/i,
    /NEXT_PUBLIC_ADSENSE_/,
    /NEXT_PUBLIC_GOOGLE_CERTIFIED_CMP_READY/,
  ];

  const hits = [];
  for (const file of runtimeFiles) {
    const source = readFileSync(file, "utf-8");
    for (const pattern of forbidden) {
      if (pattern.test(source)) hits.push(`${relative(ROOT, file)} matches ${pattern}`);
    }
  }

  if (hits.length === 0) pass("No GA4/AdSense runtime identifiers found");
  else {
    for (const hit of hits) console.error(`  ${hit}`);
    fail("Google analytics/display-ad runtime identifiers remain in production source");
  }
});

check("robots.txt", () => {
  const p = resolve(ROOT, "public/robots.txt");
  if (!existsSync(p)) return fail("public/robots.txt missing");
  const content = readFileSync(p, "utf-8");

  const requiredCrawlers = [
    "OAI-SearchBot",
    "ChatGPT-User",
    "Claude-SearchBot",
    "PerplexityBot",
    "Applebot-Extended",
    "DuckAssistBot",
    "Amazonbot",
  ];
  for (const crawler of requiredCrawlers) {
    if (content.includes(crawler)) pass(`${crawler} rule present`);
    else fail(`${crawler} rule missing from robots.txt`);
  }

  for (const crawler of ["Bytespider", "Meta-ExternalAgent"]) {
    if (content.includes(crawler)) pass(`${crawler} blocked`);
    else fail(`${crawler} not blocked in robots.txt`);
  }

  if (/Bingbot[\s\S]*?Crawl-delay:\s*10/i.test(content)) pass("Bingbot Crawl-delay: 10");
  else fail("Bingbot Crawl-delay: 10 missing");

  if (content.includes("sitemap.xml")) pass("Sitemap reference present");
  else fail("Sitemap reference missing from robots.txt");
});

check("llms.txt", () => {
  const p = resolve(ROOT, "public/llms.txt");
  if (!existsSync(p)) return fail("public/llms.txt missing");
  const content = readFileSync(p, "utf-8");
  if (content.length > 100) pass("llms.txt present and has content");
  else fail("llms.txt exists but appears empty or too short");
});

check("Legal pages", () => {
  for (const page of ["privacy", "terms", "consumer-health-data-privacy", "cookies"]) {
    const tsx = resolve(ROOT, `src/app/${page}/page.tsx`);
    const jsx = resolve(ROOT, `src/app/${page}/page.jsx`);
    if (existsSync(tsx) || existsSync(jsx)) pass(`/${page} page exists`);
    else fail(`/${page} page missing`);
  }
});

check("Focused footer links", () => {
  const footerPath = resolve(ROOT, "src/components/Footer.tsx");
  if (!existsSync(footerPath)) return fail("Footer.tsx not found");
  const footer = readFileSync(footerPath, "utf-8");

  const unrelatedPortfolioSites = [
    "fibertools.app",
    "flipmycase.com",
    "contractextract.com",
    "medicalbillreader.com",
    "creatorrevenuecalculator.com",
    "taxbreaktools.com",
    "524tracker.com",
    "aibusinessalternative.com",
  ];
  for (const site of unrelatedPortfolioSites) {
    if (!footer.includes(site)) pass(`No unrelated portfolio link to ${site}`);
    else fail(`Unrelated portfolio link to ${site} remains in Footer`);
  }
  for (const route of ["/screening-tools", "/for-professionals", "/clinical-evidence", "/methodology", "/crisis-resources", "/privacy"]) {
    if (footer.includes(route)) pass(`Focused footer route ${route}`);
    else fail(`Missing focused footer route ${route}`);
  }
});

check("Security headers", () => {
  let configContent = "";
  for (const name of ["next.config.mjs", "next.config.js", "next.config.ts"]) {
    const p = resolve(ROOT, name);
    if (existsSync(p)) {
      configContent = readFileSync(p, "utf-8");
      break;
    }
  }
  if (!configContent) return fail("No next.config file found");

  for (const header of [
    "Strict-Transport-Security",
    "X-Content-Type-Options",
    "X-Frame-Options",
    "Referrer-Policy",
    "Permissions-Policy",
    "Content-Security-Policy",
  ]) {
    if (configContent.includes(header)) pass(`${header} configured`);
    else fail(`${header} missing from next.config`);
  }
});

check("Dynamic dateModified guard", () => {
  const files = walkFiles(resolve(ROOT, "src"), /\.(ts|tsx)$/);
  const hits = [];
  for (const file of files) {
    const lines = readFileSync(file, "utf-8").split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (
        (line.includes("dateModified") && line.includes("new Date(")) ||
        line.includes("modifiedDate={new Date(")
      ) {
        hits.push(`${relative(ROOT, file)}:${i + 1}  ${line.trim()}`);
      }
    }
  }

  if (hits.length === 0) pass("No dynamic dateModified found");
  else {
    for (const hit of hits) console.error(`  ${hit}`);
    fail("Dynamic dateModified detected. Use a static YYYY-MM-DD review date.");
  }
});

check("Maintained external references", () => {
  const content = walkFiles(resolve(ROOT, "src"), /\.(ts|tsx)$/)
    .map((file) => readFileSync(file, "utf-8"))
    .join("\n");
  const retiredUrls = [
    "ads.google.com/settings",
    "cdc.gov/niosh/topics/stress/default.html",
    "nimh.nih.gov/health/topics/stress",
    "med.stanford.edu/news/all-news/2023/01/breathing-exercises.html",
    "va.gov/wholehealthlibrary/tools/grounding-techniques.asp",
    "samhsa.gov/nctic",
    "who.int/publications/i/item/audit-the-alcohol-use-disorders-identification-test",
    "beckinstitute.org/about/aaron-t-beck-md",
    "nia.nih.gov/health/caregiving/caregiver-health",
    "cdc.gov/reproductivehealth/depression",
    "who.int/news-room/fact-sheets/detail/maternal-mental-health",
  ];
  const hits = retiredUrls.filter((url) => content.includes(url));
  for (const url of hits) fail(`Retired external destination remains: ${url}`);
  if (hits.length === 0) pass("Retired external destinations are absent");
});

console.log("\n" + "=".repeat(50));
if (failures > 0) {
  console.error(`\n💥 ${failures} check(s) FAILED — fix before deploying.\n`);
  process.exit(1);
}
console.log("\n🎉 All predeploy checks passed.\n");
