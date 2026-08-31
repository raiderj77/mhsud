import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import test from "node:test";

import {
  deletedBlogRouteDecisions,
  legacyBlogIndexDecision,
  legacyBlogRouteDecisions,
  supplementalLegacyBlogRouteDecisions,
} from "../config/legacy-blog-routes.mjs";
import nextConfig, { retiredNonBlogNotFoundPaths } from "../next.config.mjs";

const root = process.cwd();

test("legacy blog manifest covers the exact 115-route retirement set", () => {
  assert.equal(deletedBlogRouteDecisions.length, 115);
  assert.equal(
    createHash("sha256")
      .update(deletedBlogRouteDecisions.map(({ source }) => source).sort().join("\n"))
      .digest("hex"),
    "6997a7d710086e22f586c92dd38f9feefb9d28d71f68dc1c4881892dace8267a",
    "the known retirement set changed without an explicit manifest review",
  );
  assert.equal(
    createHash("sha256")
      .update(
        legacyBlogRouteDecisions
          .map(({ source, outcome, destination }) => `${source}|${outcome}|${destination ?? ""}`)
          .sort()
          .join("\n"),
      )
      .digest("hex"),
    "b605746577ae02daa5e016bec858c2782d8871be91c5a3238661de737d3225f9",
    "a reviewed redirect or not-found decision changed without an explicit governance review",
  );
  assert.deepEqual(
    supplementalLegacyBlogRouteDecisions.map(({ source }) => source).sort(),
    ["/blog/attachment-styles-guide", "/blog/dast-10-guide", "/blog/what-does-oci-r-score-mean"],
  );
  assert.equal(legacyBlogIndexDecision.source, "/blog");
  assert.equal(legacyBlogIndexDecision.outcome, "not-found");
  assert.equal(legacyBlogRouteDecisions.filter(({ outcome }) => outcome === "redirect").length, 71);
  assert.equal(legacyBlogRouteDecisions.filter(({ outcome }) => outcome === "not-found").length, 47);

  const sources = legacyBlogRouteDecisions.map(({ source }) => source);
  assert.equal(new Set(sources).size, sources.length, "legacy manifest contains duplicate sources");
  for (const decision of legacyBlogRouteDecisions) {
    assert.match(decision.source, /^\/blog(?:\/[a-z0-9-]+)?$/);
    assert.ok(decision.reason.length >= 20, `${decision.source} lacks a reviewable rationale`);
    assert.ok(["redirect", "not-found"].includes(decision.outcome));
    if (decision.outcome === "redirect") {
      assert.match(decision.destination, /^\/(?!blog(?:\/|$))[a-z0-9-/]+$/);
      assert.equal(decision.permanent, true);
    } else {
      assert.equal("destination" in decision, false);
    }
  }
});

test("unsupported youth and DAST routes remain honest not-found responses", async () => {
  assert.deepEqual([...retiredNonBlogNotFoundPaths].sort(), [
    "/adhd-test-for-teens",
    "/anxiety-test-for-teens",
    "/audit-vs-dast-10",
    "/dast-10-drug-screening",
    "/dast-10-score-interpretation",
    "/depression-test-for-teens",
  ]);

  const redirects = await nextConfig.redirects();
  const redirectSources = new Set(redirects.map(({ source }) => source));
  for (const source of retiredNonBlogNotFoundPaths) {
    assert.equal(redirectSources.has(source), false, `${source} must not redirect to a non-equivalent instrument`);
    const pagePath = path.join(root, "src", "app", ...source.slice(1).split("/"), "page.tsx");
    assert.equal(existsSync(pagePath), false, `${source} retains latent page source`);
  }
});

test("only explicitly equivalent legacy articles redirect", async () => {
  const redirects = await nextConfig.redirects();
  const blogRedirects = redirects.filter(({ source }) => source === "/blog" || source.startsWith("/blog/"));
  const expectedRedirects = legacyBlogRouteDecisions.filter(({ outcome }) => outcome === "redirect");

  assert.equal(redirects.some(({ source }) => source === "/blog/:path*"), false, "blog wildcard would create soft-404s");
  assert.equal(redirects.some(({ source }) => source === "/blog"), false, "retired blog index must return not found");
  assert.equal(blogRedirects.length, expectedRedirects.length);

  for (const decision of legacyBlogRouteDecisions) {
    const matches = redirects.filter(({ source }) => source === decision.source);
    if (decision.outcome === "not-found") {
      assert.deepEqual(matches, [], `${decision.source} must remain an honest not-found response`);
    } else {
      assert.deepEqual(matches, [{
        source: decision.source,
        destination: decision.destination,
        permanent: true,
      }]);
    }
  }
});

test("redirect graph is one hop and every legacy destination is maintained", async () => {
  const redirects = await nextConfig.redirects();
  const redirectSources = new Set(redirects.map(({ source }) => source));

  for (const { source, destination } of redirects) {
    assert.equal(redirectSources.has(destination), false, `${source} redirects through ${destination}`);
  }

  for (const decision of legacyBlogRouteDecisions.filter(({ outcome }) => outcome === "redirect")) {
    const pagePath = path.join(root, "src", "app", ...decision.destination.slice(1).split("/"), "page.tsx");
    assert.equal(existsSync(pagePath), true, `${decision.source} targets missing page ${decision.destination}`);
  }

  for (const retiredSource of [
    "/mdq-bipolar-screening",
    "/bipolar-test-young-adults",
    "/mdq-score-interpretation",
    "/oci-r-ocd-screening",
    "/ocd-test-teens",
  ]) {
    assert.equal(redirectSources.has(retiredSource), false, `${retiredSource} has no equivalent maintained destination`);
  }
});

test("retired blog source and compatibility shim stay deleted", () => {
  assert.equal(existsSync(path.join(root, "src", "lib", "blog.ts")), false);
  assert.equal(existsSync(path.join(root, "src", "app", "blog", "attachment-styles-guide", "page.tsx")), false);
});

test("redirected non-blog wrappers retain no latent page implementation", async () => {
  const redirects = await nextConfig.redirects();
  for (const { source } of redirects.filter(({ source }) => !source.startsWith("/blog/"))) {
    const pagePath = path.join(root, "src", "app", ...source.slice(1).split("/"), "page.tsx");
    assert.equal(existsSync(pagePath), false, `${source} retains unreachable source behind its redirect`);
  }
});
