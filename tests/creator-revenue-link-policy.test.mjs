import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("Creator Revenue Calculator is followed only from the homepage", async () => {
  const [component, footer] = await Promise.all([
    read("src/components/CreatorRevenueLink.tsx"),
    read("src/components/Footer.tsx"),
  ]);

  assert.match(component, /const rel = pathname === "\/" \? undefined : "nofollow";/);
  assert.match(component, /href=\{href\}/);
  assert.match(component, /rel=\{rel\}/);
  assert.match(
    footer,
    /<CreatorRevenueLink href="https:\/\/creatorrevenuecalculator\.com" className=\{SISTER_SITE_LINK_CLASS\} \/>/,
  );
  assert.doesNotMatch(
    footer,
    /<a[^>]+href="https:\/\/creatorrevenuecalculator\.com"/,
  );
});
