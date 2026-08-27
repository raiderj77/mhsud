import assert from "node:assert/strict";
import test from "node:test";
import { readFile, stat } from "node:fs/promises";
import ts from "typescript";
import sharp from "sharp";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
async function loadTs(path) {
  const code = ts.transpileModule(await read(path), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
}
const data = await loadTs("src/lib/awarenessArticles.ts");
const policies = await loadTs("src/lib/routePolicies.ts");

test("four distinct awareness guides have resolvable citations and related routes", () => {
  assert.equal(data.awarenessArticles.length, 4);
  assert.equal(new Set(data.awarenessArticles.map(a => a.slug)).size, 4);
  assert.equal(new Set(data.awarenessArticles.map(a => a.seoTitle)).size, 4);
  for (const article of data.awarenessArticles) {
    assert.ok(article.answer.length > 80);
    assert.ok(article.sections.length >= 4);
    assert.equal(new Set(article.sections.map(s => s.id)).size, article.sections.length);
    for (const slug of article.related) assert.ok(data.getAwarenessArticle(slug), slug);
    for (const key of data.articleSourceKeys(article)) {
      const url = new URL(data.awarenessSources[key].url);
      assert.equal(url.protocol, "https:");
      assert.equal(url.search, "");
      assert.equal(url.hash, "");
    }
  }
  assert.equal(data.getAwarenessArticle("unlisted"), undefined);
});

test("observance dates and uncertainty remain explicit", () => {
  assert.equal(data.getAwarenessArticle("national-wellness-month").dateLabel, "All August");
  assert.equal(data.getAwarenessArticle("national-grief-awareness-day").dateLabel, "August 30");
  assert.equal(data.getAwarenessArticle("fentanyl-prevention-awareness-day").dateLabel, "August 21");
  const overdose = data.getAwarenessArticle("overdose-awareness-month-day");
  assert.match(overdose.dateLabel, /August 31/);
  assert.match(JSON.stringify(overdose), /exact 2026 week date range has not been verified/);
  assert.match(JSON.stringify(overdose), /not a universal federal designation/);
  assert.equal(overdose.emergency, true);
  assert.equal(data.getAwarenessArticle("fentanyl-prevention-awareness-day").emergency, true);
});

test("review drafts cannot inherit indexable metadata or invented human review", async () => {
  const [layout, shared, sitemap, page] = await Promise.all([
    read("src/app/awareness/layout.tsx"), read("src/app/awareness/shared.tsx"),
    read("src/app/sitemap.ts"), read("src/app/awareness/[slug]/page.tsx"),
  ]);
  assert.equal(data.AWARENESS_REVIEW_STATUS, "pending-qualified-review");
  for (const file of [layout, shared]) {
    assert.match(file, /index: false, follow: false, noimageindex: true/);
    assert.match(file, /googleBot: \{ index: false/);
  }
  assert.doesNotMatch(sitemap, /awareness/);
  assert.match(page, /dynamicParams = true/);
  assert.match(page, /if \(!article\) notFound\(\)/);
  assert.match(shared, /has not been clinically reviewed/);
  assert.match(shared, /SITE_AUTHOR.name/);
  assert.match(shared, /SITE_AUTHOR.credential/);
  assert.doesNotMatch(shared.replace(/^\s*\/\/.*$/gm, ""), /reviewedBy\s*:|datePublished\s*:|AUTHOR_SCHEMA|ToolReviewerBio|AuthorByline/);
  assert.match(shared, /creativeWorkStatus: "Draft"/);
});

test("all awareness routes are isolated from analytics, referrers and service-worker page caches", async () => {
  for (const route of [data.AWARENESS_HUB_PATH, ...data.awarenessArticles.map(a => data.awarenessArticlePath(a.slug))]) {
    for (const suffix of ["", "/", "?fixture=non-sensitive#section"]) {
      assert.equal(policies.isOptionalServicesAllowedRoute(route + suffix), false);
      assert.equal(policies.isPrivacySafeAggregateAnalyticsRoute(route + suffix), false);
      assert.equal(policies.isSensitiveRoute(route + suffix), true);
    }
  }
  assert.match(await read("public/service-worker.js"), /"awareness"/);
  const shared = await read("src/app/awareness/shared.tsx");
  assert.match(shared, /referrerPolicy="no-referrer"/);
  assert.match(shared, /Ordinary hosting requests still occur/);
});

test("articles preserve direct crisis actions without forms or commercial CTAs", async () => {
  const files = await Promise.all(["src/app/awareness/shared.tsx", "src/app/awareness/[slug]/page.tsx", "src/app/awareness/august/page.tsx"].map(read));
  const source = files.join("\n");
  for (const action of ["tel:911", "tel:988", "sms:988", "/crisis-resources"]) assert.ok(source.includes(action));
  assert.match(source, /local emergency number elsewhere immediately/);
  assert.match(source, /non-diagnostic education/);
  assert.doesNotMatch(source, /<form|<input|<textarea|AdSlot|TherapyCTA|EmailCapture|trackEvent|\/results|bookshop\.org|<iframe/i);
  assert.match(source, /<Image[\s\S]*?width=\{1536\} height=\{1024\}/);
  assert.match(source, /aria-label="On this page"/);
});

test("each original illustration is local, optimized, and described", async () => {
  for (const article of data.awarenessArticles) {
    const path = new URL(`../public${article.image}`, import.meta.url);
    assert.match(article.imageAlt, /^Illustration of /);
    const metadata = await sharp(await readFile(path)).metadata();
    assert.equal(metadata.format, "webp");
    assert.equal(metadata.width, 1536);
    assert.equal(metadata.height, 1024);
    assert.ok((await stat(path)).size < 220000);
  }
});
