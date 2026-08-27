import assert from "node:assert/strict";
import test from "node:test";
import { auditHtml, isAllowedAuditOrigin, safeEntryUrl } from "../scripts/full-site-audit.mjs";

const url = "https://mindchecktools.com/athens-insomnia-scale";
const html = `<html><head><title>Information</title><meta name="description" content="An educational overview"><link rel="canonical" href="${url}"><script type="application/ld+json">{"@type":"WebPage"}</script></head><body><h1>Information</h1></body></html>`;
const options = { headers: { "cache-control": "private, no-store", "referrer-policy": "no-referrer", "x-frame-options": "DENY", "x-content-type-options": "nosniff" } };
test("entry audit accepts a compliant information page", () => assert.equal(auditHtml(url, 200, html, options).pass, true));
test("entry audit rejects misleading previous false positives", () => {
  for (const mutated of [html.replace(url, "https://example.com/athens-insomnia-scale"), html.replace('{"@type":"WebPage"}', "broken json"), html.replace("</head>", '<meta name="robots" content="noindex"></head>'), html.replace("</body>", '<ins class="adsbygoogle"></ins></body>'), html.replace("</body>", '<script src="/_vercel/insights/script.js"></script></body>')]) {
    assert.equal(auditHtml(url, 200, mutated, options).pass, false);
  }
  assert.equal(auditHtml(url, 200, html, { ...options, finalUrl: "https://mindchecktools.com/" }).pass, false);
  assert.equal(auditHtml(url, 200, html).pass, false);
});
test("crawler refuses query strings, external hosts, APIs, and result journeys", () => {
  for (const path of ["/results", "/result/fixture", "/api/fixture", "/?fixture=true", "/#fixture", "https://example.com/"]) assert.equal(safeEntryUrl(path), null);
  assert.equal(safeEntryUrl("/athens-insomnia-scale"), url);
});
test("homepage canonical treats an empty path and slash as equivalent", () => {
  assert.equal(auditHtml("https://mindchecktools.com/", 200, html.replace(url, "https://mindchecktools.com"), options).pass, true);
});

test("audit origin requires exact parsed equality and rejects lookalike URLs", () => {
  for (const origin of ["https://mindchecktools.com", "http://localhost:3000", "http://localhost:3100", "http://127.0.0.1:3100"]) assert.equal(isAllowedAuditOrigin(origin), true);
  for (const origin of ["https://mindchecktools.com.example.org", "https://example.org/https://mindchecktools.com", "https://mindchecktools.com@example.org", "https://mindchecktools.com?fixture=true", "https://mindchecktools.com#fixture", "http://localhost:3100/path", "not a URL"]) assert.equal(isAllowedAuditOrigin(origin), false);
});
