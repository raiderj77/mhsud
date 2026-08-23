import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the footer omits unrelated portfolio backlinks", async () => {
  const footer = await read("src/components/Footer.tsx");

  assert.doesNotMatch(
    footer,
    /creatorrevenuecalculator\.com|fibertools\.app|flipmycase\.com|contractextract\.com|medicalbillreader\.com|taxbreaktools\.com|524tracker\.com|aibusinessalternative\.com/i,
  );
  assert.doesNotMatch(footer, /More Free Tools|Sister Sites/i);
  assert.match(footer, /href: "\/for-professionals"/);
});
