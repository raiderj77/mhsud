/** Local-only, read-only entry checks. Never visits a question or result flow. */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/awarenessArticles.ts", import.meta.url), "utf8");
const moduleText = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { awarenessArticles, awarenessArticlePath, AWARENESS_HUB_PATH } = await import(`data:text/javascript;base64,${Buffer.from(moduleText).toString("base64")}`);
const origin = "http://localhost:3100";
const routes = [AWARENESS_HUB_PATH, ...awarenessArticles.map(a => awarenessArticlePath(a.slug))];
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
assert.ok(!sitemap.includes("/awareness/"), "drafts must not appear in the public sitemap");
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
  for (const name of ["robots", "googlebot"]) assert.match($(`meta[name=${name}]`).attr("content"), /noindex/);
  assert.ok($("meta[name=description]").attr("content")?.length > 50);
  assert.ok($("main").text().includes("qualified human review pending"));
  assert.ok($("main").text().includes("Jason Ramirez"));
  assert.ok($("main a[href='tel:988']").length);
  assert.ok($("main a[href='sms:988']").length);
  assert.equal($("script[src]").filter((_, el) => /googletagmanager|google-analytics|googlesyndication|doubleclick|insights\/script|vercel-scripts/.test($(el).attr("src") ?? "")).length, 0);
  for (const element of $("script[type='application/ld+json']")) {
    const json = JSON.parse($(element).text());
    assert.ok(!JSON.stringify(json).includes('"reviewedBy"'));
  }
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
  }
  console.log(`PASS ${route}: 200; noindex; correct canonical; citations/schema; images; crisis actions; no forms or tracking tags`);
}
for (const route of internalRoutes) {
  assert.ok(!/[?#]/.test(route));
  assert.ok(!/\/results?(?:\/|$)/.test(route));
  assert.equal((await fetch(origin + route, { redirect: "manual" })).status, 200, route);
}
assert.equal((await fetch(`${origin}/awareness/unlisted`, { redirect: "manual" })).status, 404);
console.log(`PASS ${internalRoutes.size} internal links and unknown-slug 404; sitemap excludes drafts`);
