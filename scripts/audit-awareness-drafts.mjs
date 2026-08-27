/** Read-only release checks on localhost or the exact production domain only. */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/awarenessArticles.ts", import.meta.url), "utf8");
const moduleText = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { awarenessArticles, getReleasedAwarenessArticles, getAwarenessRelease, awarenessArticlePath, AWARENESS_HUB_PATH } = await import(`data:text/javascript;base64,${Buffer.from(moduleText).toString("base64")}`);
const origin = process.argv[2] ?? "http://localhost:3100";
assert.ok(["http://localhost:3100", "https://mindchecktools.com"].includes(origin), "fixed local or canonical production origin only");
const routes = getReleasedAwarenessArticles().map(a => awarenessArticlePath(a.slug));
const unreleasedRoutes = [AWARENESS_HUB_PATH, ...awarenessArticles.filter(a => !getAwarenessRelease(a.slug)).map(a => awarenessArticlePath(a.slug))];
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
for (const route of routes) assert.ok(sitemap.includes(`https://mindchecktools.com${route}</loc>`), route);
for (const route of unreleasedRoutes) assert.ok(!sitemap.includes(route), "unapproved drafts must not appear in the sitemap");
const internalRoutes = new Set();
for (const route of routes) {
  const response = await fetch(origin + route, { redirect: "manual" });
  assert.equal(response.status, 200, route);
  assert.match(response.headers.get("cache-control"), /no-store/);
  assert.equal(response.headers.get("referrer-policy"), "no-referrer");
  const $ = load(await response.text());
  assert.equal($("main h1").length, 1);
  assert.equal($("main input, main textarea, main form").length, 0);
  assert.equal($("link[rel=canonical]").attr("href"), `https://mindchecktools.com${route}`);
  for (const name of ["robots", "googlebot"]) {
    const robots = $(`meta[name=${name}]`).attr("content");
    assert.match(robots, /\bindex\b/);
    assert.doesNotMatch(robots, /noindex|nofollow|noimageindex/);
  }
  assert.doesNotMatch(response.headers.get("x-robots-tag") ?? "", /noindex|nofollow/);
  assert.ok($("meta[name=description]").attr("content")?.length > 50);
  assert.ok(!$("main").text().includes("qualified human review pending"));
  assert.ok($("main").text().includes("Addiction-related educational content reviewed and approved by"));
  assert.ok($("main").text().includes("Jason Ramirez"));
  assert.ok($("main a[href='tel:988']").length);
  assert.ok($("main a[href='sms:988']").length);
  assert.ok($("main a[href='tel:911']").length);
  assert.equal($("script[src]").filter((_, el) => /googletagmanager|google-analytics|googlesyndication|doubleclick|insights\/script|vercel-scripts/.test($(el).attr("src") ?? "")).length, 0);
  const articleSchemas = [];
  for (const element of $("script[type='application/ld+json']")) {
    const json = JSON.parse($(element).text());
    assert.ok(!JSON.stringify(json).includes('"reviewedBy"'));
    for (const item of Array.isArray(json) ? json : [json]) if (item["@type"] === "Article") articleSchemas.push(item);
  }
  assert.equal(articleSchemas.length, 1);
  assert.equal(articleSchemas[0].creativeWorkStatus, "Published");
  assert.equal(articleSchemas[0].datePublished, "2026-08-26");
  for (const el of $("main img")) {
    assert.ok($(el).attr("alt")?.length > 20);
    const src = new URL($(el).attr("src"), origin);
    assert.equal(src.origin, origin);
    assert.equal((await fetch(src)).status, 200);
  }
  for (const el of $("main a[href]")) {
    const href = $(el).attr("href");
    if (href.startsWith("#")) assert.equal($(`[id="${href.slice(1)}"]`).length, 1, href);
    if (href.startsWith("/")) internalRoutes.add(href);
    for (const unreleased of unreleasedRoutes) assert.notEqual(href, unreleased);
  }
  console.log(`PASS ${route}: 200; indexable; correct canonical; review credit/schema; images; crisis actions; no forms or tracking tags`);
}
for (const route of internalRoutes) {
  assert.ok(!/[?#]/.test(route));
  assert.ok(!/\/results?(?:\/|$)/.test(route));
  assert.equal((await fetch(origin + route, { redirect: "manual" })).status, 200, route);
}
assert.equal((await fetch(`${origin}/awareness/unlisted`, { redirect: "manual" })).status, 404);
for (const route of unreleasedRoutes) {
  const response = await fetch(origin + route, { redirect: "manual" });
  assert.equal(response.status, 404, route);
  const $ = load(await response.text());
  assert.equal($("main article").length, 0, "draft article content must not render");
}
const evidenceResponse = await fetch(`${origin}/clinical-evidence`);
assert.equal(evidenceResponse.status, 200);
const evidence = load(await evidenceResponse.text());
for (const route of routes) assert.ok(evidence(`main a[href='${route}']`).length, "approved articles need a public incoming link");
console.log(`PASS ${internalRoutes.size} internal links; 3 unapproved routes and unknown slug return 404; sitemap includes only the approved pair; public incoming links present`);
