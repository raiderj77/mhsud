import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("recommended reading is a small, disclosed, source-linked list", async () => {
  const page = await read("src/app/recommended-reading/page.tsx");

  assert.match(page, /Affiliate disclosure/);
  assert.match(page, /may earn a commission/i);
  assert.match(page, /choose\s+resources independently/i);
  assert.match(page, /BOOKSHOP_AFFILIATE_ID = "127434"/);
  assert.equal((page.match(/isbn: "/g) ?? []).length, 6);
  assert.match(page, /bookshop\.org\/a\/\$\{BOOKSHOP_AFFILIATE_ID\}\/\$\{book\.isbn\}/);
  assert.match(page, /rel="sponsored nofollow noopener noreferrer"/);
  assert.match(page, /referrerPolicy="no-referrer"/);
  assert.match(page, /AuthorByline/);
  assert.match(page, /AuthorBio/);
  assert.match(page, /not a diagnosis/i);
  assert.match(page, /not crisis support/i);
});

test("affiliate links stay separate from tracking and crisis content", async () => {
  const [page, policies] = await Promise.all([
    read("src/app/recommended-reading/page.tsx"),
    read("src/lib/routePolicies.ts"),
  ]);

  for (const forbidden of [
    /AdSlot/,
    /TherapyCTA/,
    /EmailCapture/,
    /affiliate_outbound_click/,
    /gtag/,
    /googlesyndication/,
    /onClick=/,
  ]) assert.doesNotMatch(page, forbidden);

  assert.match(policies, /const OPTIONAL_SERVICE_ALLOWED_ROUTES = new Set\(\["\/"\]\)/);
  assert.ok(
    page.lastIndexOf("View this edition at Bookshop.org") < page.indexOf("Need help now?"),
    "affiliate offers must end before the dedicated crisis section",
  );
  assert.equal(
    page.slice(page.indexOf("Need help now?")).includes("bookshop.org/a/"),
    false,
    "crisis content must not contain affiliate links",
  );
});

test("recommended reading is crawlable from maintained public surfaces", async () => {
  const [footer, sitemap, llms, llmsFull] = await Promise.all([
    read("src/components/Footer.tsx"),
    read("src/app/sitemap.ts"),
    read("public/llms.txt"),
    read("public/llms-full.txt"),
  ]);

  for (const source of [footer, sitemap, llms, llmsFull]) {
    assert.match(source, /recommended-reading/);
  }
});
