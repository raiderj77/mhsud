#!/usr/bin/env node
/** Read-only HTTP entry-state audit. No forms, result navigation, or clinical certification.
 * Run: node scripts/full-site-audit.mjs [--report=docs/entry-audit.json]
 * AUDIT_ORIGIN may target a local production server; canonicals stay public.
 */
import * as cheerio from "cheerio";
import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const SITE_ORIGIN = "https://mindchecktools.com";
const policySource = await readFile(new URL("../src/lib/routePolicies.ts", import.meta.url), "utf8");
const policy = await import("data:text/javascript;base64," + Buffer.from(ts.transpile(policySource, { module: ts.ModuleKind.ESNext })).toString("base64"));

export function safeEntryUrl(value, origin = SITE_ORIGIN) {
  try {
    const url = new URL(value, origin);
    if (url.origin !== origin || url.search || url.hash || url.username || url.password) return null;
    if (/(^|\/)(?:api|results?)(?:\/|$)/i.test(url.pathname)) return null;
    return url.href;
  } catch { return null; }
}

export function auditHtml(url, status, html, { finalUrl = url, headers = {} } = {}) {
  const checks = [];
  const check = (name, ok) => checks.push({ name, ok });
  check("http-200", status === 200);
  if (status !== 200) return { pass: false, checks, links: [] };
  check("no-redirect", finalUrl === url);
  const $ = cheerio.load(html);
  check("title", $("head > title").text().trim().length > 0);
  check("meta-description", Boolean($('head > meta[name="description"]').attr("content")?.trim()));
  check("single-h1", $("h1").length === 1);
  const expected = new URL(new URL(url).pathname, SITE_ORIGIN).href;
  let canonicalMatches = false;
  try { canonicalMatches = new URL($('head > link[rel="canonical"]').attr("href")).href === expected; } catch { /* missing or relative canonical */ }
  check("canonical", canonicalMatches);
  const robots = [...$('meta[name="robots"], meta[name="googlebot"]').map((_, el) => $(el).attr("content")).get(), headers["x-robots-tag"] || ""].join(",");
  check("index-policy", !/\b(?:noindex|none)\b/i.test(robots));
  const blocks = $('script[type="application/ld+json"]').toArray();
  check("json-ld", blocks.length > 0 && blocks.every(el => {
    try { const value = JSON.parse($(el).text()); return value !== null && typeof value === "object"; } catch { return false; }
  }));
  const path = new URL(url).pathname;
  const scripts = $("script[src]").map((_, el) => $(el).attr("src")).get().join(" ");
  check("no-ad-or-google-tags", !/googletagmanager\.com|google-analytics\.com|googlesyndication\.com|doubleclick\.net/i.test(scripts) && $("ins.adsbygoogle").length === 0);
  if (!policy.isPrivacySafeAggregateAnalyticsRoute(path)) {
    const hasAggregateScript = $('script[data-sdkn^="@vercel/analytics"]').length > 0
      || /_vercel\/insights|vercel-scripts\.com/i.test(scripts);
    check("no-aggregate-tag", !hasAggregateScript);
  }
  if (policy.isSensitiveRoute(path)) {
    check("sensitive-no-store", /no-store/i.test(headers["cache-control"] || ""));
    check("sensitive-no-referrer", headers["referrer-policy"] === "no-referrer");
  }
  check("frame-protection", /deny/i.test(headers["x-frame-options"] || ""));
  check("content-type-protection", headers["x-content-type-options"] === "nosniff");
  const links = new Set();
  $("a[href]").each((_, el) => {
    try {
      const target = new URL($(el).attr("href"), url);
      target.search = ""; target.hash = "";
      const safe = safeEntryUrl(target.href, new URL(url).origin);
      if (safe) links.add(safe);
    } catch { /* Invalid URLs require separate content review. */ }
  });
  return { pass: checks.every(c => c.ok), checks, links: [...links] };
}

async function fetchEntry(url) {
  try {
    const res = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(20000), headers: { "User-Agent": "MindCheckTools-EntryAudit/2.0", Accept: "text/html,application/xml" } });
    return { status: res.status, html: await res.text(), headers: Object.fromEntries(res.headers) };
  } catch { return { status: 0, html: "", headers: {} }; }
}

async function concurrent(items, worker) {
  let next = 0;
  const results = [];
  await Promise.all(Array.from({ length: Math.min(6, items.length) }, async () => {
    while (next < items.length) { const i = next++; results[i] = await worker(items[i]); }
  }));
  return results;
}

export function isAllowedAuditOrigin(origin) {
  try {
    const parsed = new URL(origin);
    // Reject paths, credentials, queries, fragments, and lookalike hosts.
    // Use exact origin equality, never a URL substring comparison.
    if (parsed.origin !== origin) return false;
    return parsed.origin === SITE_ORIGIN ||
      parsed.origin === "http://localhost:3000" ||
      parsed.origin === "http://localhost:3100" ||
      parsed.origin === "http://127.0.0.1:3100";
  } catch { return false; }
}

export async function runAudit(origin = SITE_ORIGIN) {
  if (!isAllowedAuditOrigin(origin)) throw new Error("Out-of-scope audit origin");
  const sitemap = await fetchEntry(origin + "/sitemap.xml");
  if (sitemap.status !== 200) throw new Error("Sitemap status " + sitemap.status);
  const $ = cheerio.load(sitemap.html, { xmlMode: true });
  const entries = $("loc").map((_, el) => $(el).text().trim()).get();
  if (!entries.length || entries.some(url => !safeEntryUrl(url))) throw new Error("Sitemap has empty or unsafe entry scope");
  const paths = entries.map(url => new URL(url).pathname);
  if (new Set(paths).size !== paths.length) throw new Error("Duplicate sitemap URLs");
  const results = await concurrent(paths, async path => {
    const url = origin + path;
    const response = await fetchEntry(url);
    return { path, ...auditHtml(url, response.status, response.html, response) };
  });
  const known = new Set(paths);
  const extra = [...new Set(results.flatMap(r => r.links))].filter(url => !known.has(new URL(url).pathname));
  const extraLinks = await concurrent(extra, async url => {
    const response = await fetchEntry(url);
    return { path: new URL(url).pathname, status: response.status, ok: response.status === 200, redirect: Boolean(response.headers.location) };
  });
  const failed = results.filter(r => !r.pass).length + extraLinks.filter(r => !r.ok).length;
  const publicResults = results.map((result) => {
    const publicResult = { ...result };
    delete publicResult.links;
    return publicResult;
  });
  return { checkedAt: new Date().toISOString(), origin, scope: "HTTP entry states only; no assessment interaction, clinical certification, or browser-network proof", total: results.length, failed, results: publicResults, extraLinks };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const report = await runAudit(process.env.AUDIT_ORIGIN || SITE_ORIGIN);
    for (const row of report.results) console.log((row.pass ? "PASS " : "FAIL ") + row.path + (row.pass ? "" : ": " + row.checks.filter(c => !c.ok).map(c => c.name).join(", ")));
    console.log(JSON.stringify({ total: report.total, failed: report.failed, extraLinks: report.extraLinks, scope: report.scope }));
    const reportArg = process.argv.find(arg => arg.startsWith("--report="));
    if (reportArg) await writeFile(reportArg.slice(9), JSON.stringify({
      ...report,
      checksApplied: [...new Set(report.results.flatMap(row => row.checks.map(check => check.name)))],
      results: report.results.map(({ path, pass, checks }) => ({ path, pass, failedChecks: checks.filter(check => !check.ok).map(check => check.name) })),
    }, null, 2) + "\n");
    process.exitCode = report.failed ? 1 : 0;
  } catch (error) { console.error(error.message); process.exitCode = 2; }
}
