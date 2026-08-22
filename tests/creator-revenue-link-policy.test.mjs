import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the footer omits Creator Revenue Calculator and retains unrelated tools", async () => {
  const footer = await read("src/components/Footer.tsx");

  assert.doesNotMatch(footer, /creatorrevenuecalculator\.com/i);
  assert.doesNotMatch(footer, /Creator Revenue Calculator/i);
  assert.match(footer, /href="https:\/\/fibertools\.app"/);
  assert.match(footer, /href="https:\/\/flipmycase\.com"/);
  assert.match(footer, /href="https:\/\/contractextract\.com"/);
});
