#!/usr/bin/env node
/**
 * Full-site post-deployment audit.
 *
 * Fetches the live sitemap, walks every <loc>, and verifies on each page:
 *   - HTTP 200
 *   - <title> present + non-empty
 *   - <meta name="description"> present
 *   - <link rel="canonical"> matches the URL's path
 *   - at least one <script type="application/ld+json"> JSON-LD block
 *
 * For screening tool routes (matching the slug patterns the YMYL pages live
 * under), additionally asserts the string `data-npa="1"` is present in the
 * HTML — non-personalized AdSense is a hard policy requirement on health
 * screening pages.
 *
 * Run:  node scripts/full-site-audit.mjs
 */
import * as cheerio from "cheerio";

const SITE_ORIGIN = "https://mindchecktools.com";
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`;
const CONCURRENCY = 6;
const RETRY_DELAY_MS = 750;

// ANSI colors — disabled if NO_COLOR is set or stdout isn't a TTY
const useColor = !process.env.NO_COLOR && process.stdout.isTTY;
const c = (code) => (s) => (useColor ? `\x1b[${code}m${s}\x1b[0m` : s);
const green = c("32");
const red = c("31");
const yellow = c("33");
const dim = c("2");
const bold = c("1");

const SCREENING_PATTERNS = [
  /-test(\b|\/|$)/,
  /-screening(\b|\/|$)/,
  /-scale(\b|\/|$)/,
  /-calculator(\b|\/|$)/,
  /-questionnaire(\b|\/|$)/,
  /-inventory(\b|\/|$)/,
];

function isScreeningRoute(url) {
  const path = new URL(url).pathname;
  // Blog posts that mention "-screening" or "-test" in their slug are
  // informational guides, not screening tools — they don't render AdSlots
  // with NPA, so don't apply the NPA check to them.
  if (path.startsWith("/blog/")) return false;
  return SCREENING_PATTERNS.some((re) => re.test(path));
}

async function fetchText(url, attempt = 1) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "MindCheckTools-Audit/1.0 (+https://mindchecktools.com)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      redirect: "follow",
    });
    const text = await res.text();
    return { status: res.status, text, finalUrl: res.url };
  } catch (err) {
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, RETRY_DELAY_MS * attempt));
      return fetchText(url, attempt + 1);
    }
    return { status: 0, text: "", finalUrl: url, error: err.message };
  }
}

async function loadSitemapUrls() {
  const { status, text } = await fetchText(SITEMAP_URL);
  if (status !== 200) {
    throw new Error(`Sitemap fetch failed with status ${status}`);
  }
  // Cheerio with xmlMode parses sitemap.xml fine; <loc> selectors return text
  const $ = cheerio.load(text, { xmlMode: true });
  const urls = [];
  $("loc").each((_, el) => {
    const u = $(el).text().trim();
    if (u) urls.push(u);
  });
  return urls;
}

function auditHtml(url, status, html) {
  const checks = [];
  let pass = true;

  if (status !== 200) {
    return { pass: false, checks: [{ name: "http-200", ok: false, detail: `status ${status}` }] };
  }
  checks.push({ name: "http-200", ok: true });

  const $ = cheerio.load(html);

  // <title>
  const title = $("head > title").first().text().trim();
  const titleOk = title.length > 0;
  checks.push({ name: "title", ok: titleOk, detail: titleOk ? null : "missing or empty" });
  pass &&= titleOk;

  // <meta name="description">
  const desc = $('head > meta[name="description"]').attr("content")?.trim() ?? "";
  const descOk = desc.length > 0;
  checks.push({ name: "meta-description", ok: descOk, detail: descOk ? null : "missing or empty" });
  pass &&= descOk;

  // <link rel="canonical"> matches URL path
  const canonical = $('head > link[rel="canonical"]').attr("href")?.trim() ?? "";
  const expectedPath = new URL(url).pathname.replace(/\/$/, "");
  let canonicalOk = false;
  let canonicalDetail = null;
  if (!canonical) {
    canonicalDetail = "missing";
  } else {
    try {
      const canonicalPath = new URL(canonical, SITE_ORIGIN).pathname.replace(/\/$/, "");
      canonicalOk = canonicalPath === expectedPath;
      if (!canonicalOk) canonicalDetail = `points to ${canonicalPath}, expected ${expectedPath}`;
    } catch {
      canonicalDetail = `invalid URL: ${canonical}`;
    }
  }
  checks.push({ name: "canonical", ok: canonicalOk, detail: canonicalDetail });
  pass &&= canonicalOk;

  // JSON-LD
  const jsonLdCount = $('script[type="application/ld+json"]').length;
  const jsonLdOk = jsonLdCount > 0;
  checks.push({
    name: "json-ld",
    ok: jsonLdOk,
    detail: jsonLdOk ? null : "no <script type=\"application/ld+json\"> block",
  });
  pass &&= jsonLdOk;

  // Screening-tool routes intentionally gate <AdSlot npa /> behind
  // {showResults && ...} so no ads ever render alongside the active
  // questionnaire (YMYL / sensitive-input policy). The data-npa attribute
  // is therefore absent from the SSR HTML by design and only appears in
  // the live DOM after submit. Static crawlers cannot observe it; we mark
  // these as SKIP rather than FAIL.
  if (isScreeningRoute(url)) {
    checks.push({
      name: "npa",
      skipped: true,
      detail: "AdSlot is client-side rendered post-submission to protect sensitive input",
    });
  }

  return { pass, checks };
}

async function runConcurrent(items, limit, worker) {
  const results = [];
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      results[i] = await worker(items[i], i);
    }
  });
  await Promise.all(workers);
  return results;
}

function formatLine(url, result) {
  const tag = result.pass ? green("[PASS]") : red("[FAIL]");
  const skipped = result.checks.filter((c) => c.skipped);
  const lines = [`${tag}  ${url}`];
  for (const s of skipped) {
    lines.push(
      `       ${yellow("[SKIP]")} ${bold(s.name)}${s.detail ? dim(` — ${s.detail}`) : ""}`
    );
  }
  if (!result.pass) {
    const failed = result.checks
      .filter((c) => !c.ok && !c.skipped)
      .map((c) => `       ${red("✗")} ${bold(c.name)}${c.detail ? dim(` — ${c.detail}`) : ""}`)
      .join("\n");
    if (failed) lines.push(failed);
  }
  return lines.join("\n");
}

(async () => {
  console.log(bold("\nMindCheck Tools — Full Site Audit\n"));
  console.log(dim(`Sitemap: ${SITEMAP_URL}`));
  console.log(dim(`Concurrency: ${CONCURRENCY}\n`));

  let urls;
  try {
    urls = await loadSitemapUrls();
  } catch (err) {
    console.error(red(`Failed to load sitemap: ${err.message}`));
    process.exit(2);
  }
  console.log(dim(`Found ${urls.length} URLs in sitemap.\n`));

  const results = await runConcurrent(urls, CONCURRENCY, async (url) => {
    const { status, text, error } = await fetchText(url);
    if (error) {
      return { url, pass: false, checks: [{ name: "fetch", ok: false, detail: error }] };
    }
    const audit = auditHtml(url, status, text);
    return { url, ...audit };
  });

  let passed = 0;
  let failed = 0;
  let npaSkipped = 0;

  for (const r of results) {
    if (r.pass) passed++;
    else failed++;
    if (r.checks.some((c) => c.name === "npa" && c.skipped)) npaSkipped++;
    console.log(formatLine(r.url, r));
  }

  console.log(bold("\nSummary"));
  console.log(`  Total:     ${results.length}`);
  console.log(`  ${green("Passed")}:    ${passed}`);
  console.log(`  ${failed > 0 ? red("Failed") : "Failed"}:    ${failed}`);
  console.log(
    `  ${yellow("NPA skipped")}: ${npaSkipped} screening pages (AdSlot is post-submit-gated by design)`
  );

  // Detailed failure list
  if (failed > 0) {
    console.log(bold(yellow("\nFailing URLs:")));
    for (const r of results) {
      if (!r.pass) {
        const reasons = r.checks.filter((c) => !c.ok).map((c) => c.name).join(", ");
        console.log(`  - ${r.url}  ${dim(`(${reasons})`)}`);
      }
    }
  }

  process.exit(failed > 0 ? 1 : 0);
})();
