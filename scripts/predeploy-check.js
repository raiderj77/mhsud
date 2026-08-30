/**
 * predeploy-check.js — Empire Build Standards compliance check for mindchecktools.com
 * Validates: no-display-ad policy, robots.txt, llms.txt, legal pages, focused footer links, security headers
 * Exit code 1 on failure, 0 on pass.
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
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

// ---------------------------------------------------------------------------
// 1. No display advertising
// ---------------------------------------------------------------------------
check("No display advertising", () => {
  for (const file of ["public/ads.txt", "ads.txt", "src/components/AdSlot.tsx"]) {
    if (existsSync(resolve(ROOT, file))) fail(`Display-ad artifact must remain absent: ${file}`);
  }
  for (const file of ["src/app/layout.tsx", "src/components/ConsentAnalytics.tsx", "next.config.mjs", ".env.example"]) {
    const content = readFileSync(resolve(ROOT, file), "utf-8");
    if (/google-adsense-account|adsbygoogle|googlesyndication|doubleclick|fundingchoicesmessages|adtrafficquality|NEXT_PUBLIC_(?:ADSENSE|GOOGLE_CERTIFIED_CMP)/i.test(content)) {
      fail(`Display-ad activation or vendor integration remains in ${file}`);
    }
  }
  if (failures === 0) pass("No ad seller, component, activation flag or vendor integration");
});

// ---------------------------------------------------------------------------
// 2. robots.txt — AI crawlers + Bingbot crawl-delay
// ---------------------------------------------------------------------------
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
    if (content.includes(crawler)) {
      pass(`${crawler} rule present`);
    } else {
      fail(`${crawler} rule missing from robots.txt`);
    }
  }

  const blockedCrawlers = ["Bytespider", "Meta-ExternalAgent"];
  for (const crawler of blockedCrawlers) {
    if (content.includes(crawler)) {
      pass(`${crawler} blocked`);
    } else {
      fail(`${crawler} not blocked in robots.txt`);
    }
  }

  if (/Bingbot[\s\S]*?Crawl-delay:\s*10/i.test(content)) {
    pass("Bingbot Crawl-delay: 10");
  } else {
    fail("Bingbot Crawl-delay: 10 missing");
  }

  if (content.includes("sitemap.xml")) {
    pass("Sitemap reference present");
  } else {
    fail("Sitemap reference missing from robots.txt");
  }
});

// ---------------------------------------------------------------------------
// 3. llms.txt
// ---------------------------------------------------------------------------
check("llms.txt", () => {
  const p = resolve(ROOT, "public/llms.txt");
  if (!existsSync(p)) return fail("public/llms.txt missing");
  const content = readFileSync(p, "utf-8");
  if (content.length > 100) {
    pass("llms.txt present and has content");
  } else {
    fail("llms.txt exists but appears empty or too short");
  }
});

// ---------------------------------------------------------------------------
// 4. Legal pages (privacy, terms)
// ---------------------------------------------------------------------------
check("Legal pages", () => {
  const pages = ["privacy", "terms"];
  for (const page of pages) {
    const tsx = resolve(ROOT, `src/app/${page}/page.tsx`);
    const jsx = resolve(ROOT, `src/app/${page}/page.jsx`);
    if (existsSync(tsx) || existsSync(jsx)) {
      pass(`/${page} page exists`);
    } else {
      fail(`/${page} page missing (no src/app/${page}/page.tsx)`);
    }
  }
});

// ---------------------------------------------------------------------------
// 5. MindCheckTools-focused footer boundary
// ---------------------------------------------------------------------------
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
    if (!footer.includes(site)) {
      pass(`No unrelated portfolio link to ${site}`);
    } else {
      fail(`Unrelated portfolio link to ${site} remains in Footer`);
    }
  }
  for (const route of ["/screening-tools", "/for-professionals", "/clinical-evidence", "/methodology", "/crisis-resources", "/privacy"]) {
    if (footer.includes(route)) pass(`Focused footer route ${route}`);
    else fail(`Missing focused footer route ${route}`);
  }
});

// ---------------------------------------------------------------------------
// 6. Security headers
// ---------------------------------------------------------------------------
check("Security headers", () => {
  // Check next.config.mjs or next.config.js
  let configContent = "";
  for (const name of ["next.config.mjs", "next.config.js", "next.config.ts"]) {
    const p = resolve(ROOT, name);
    if (existsSync(p)) {
      configContent = readFileSync(p, "utf-8");
      break;
    }
  }
  if (!configContent) return fail("No next.config file found");

  const requiredHeaders = [
    "Strict-Transport-Security",
    "X-Content-Type-Options",
    "X-Frame-Options",
    "Referrer-Policy",
    "Permissions-Policy",
    "Content-Security-Policy",
  ];
  for (const header of requiredHeaders) {
    if (configContent.includes(header)) {
      pass(`${header} configured`);
    } else {
      fail(`${header} missing from next.config`);
    }
  }
});

// ---------------------------------------------------------------------------
// 7. No dynamic dateModified in source files
// ---------------------------------------------------------------------------
check("Dynamic dateModified guard", () => {
  function walkSync(dir) {
    let results = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = resolve(dir, entry.name);
      if (entry.isDirectory()) {
        results = results.concat(walkSync(full));
      } else if (entry.isFile() && (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))) {
        results.push(full);
      }
    }
    return results;
  }

  const files = walkSync(resolve(ROOT, "src"));
  const hits = [];

  for (const file of files) {
    const lines = readFileSync(file, "utf-8").split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (
        (line.includes("dateModified") && line.includes("new Date(")) ||
        line.includes("modifiedDate={new Date(")
      ) {
        const rel = file.slice(ROOT.length + 1).replace(/\\/g, "/");
        hits.push(`${rel}:${i + 1}  ${line.trim()}`);
      }
    }
  }

  if (hits.length === 0) {
    pass("No dynamic dateModified found");
  } else {
    for (const hit of hits) {
      console.error(`  ${hit}`);
    }
    fail("Dynamic dateModified detected. Use static YYYY-MM-DD string. See CLAUDE.md.");
  }
});

check("Maintained external references", () => {
  function walkSource(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = resolve(dir, entry.name);
      if (entry.isDirectory()) return walkSource(full);
      return entry.isFile() && /\.(ts|tsx)$/.test(entry.name) ? [full] : [];
    });
  }

  const content = walkSource(resolve(ROOT, "src"))
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
  for (const retiredUrl of retiredUrls) {
    if (content.includes(retiredUrl)) fail(`Retired external destination remains: ${retiredUrl}`);
  }
  if (!retiredUrls.some((retiredUrl) => content.includes(retiredUrl))) pass("Retired external destinations are absent");
});

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log("\n" + "=".repeat(50));
if (failures > 0) {
  console.error(`\n💥 ${failures} check(s) FAILED — fix before deploying.\n`);
  process.exit(1);
} else {
  console.log("\n🎉 All predeploy checks passed.\n");
  process.exit(0);
}
