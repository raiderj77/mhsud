import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (relativePath) => readFile(path.join(root, relativePath), "utf8");

const linkedArticles = [
  "src/app/blog/insomnia-test-guide/page.tsx",
  "src/app/blog/mental-health-and-sleep/page.tsx",
  "src/app/blog/sleep-and-mood/page.tsx",
];

test("Athens links describe the route as information rather than an available assessment", async () => {
  const sources = await Promise.all(linkedArticles.map(read));
  const combined = sources.join("\n");

  assert.doesNotMatch(combined, /take the Athens Insomnia Scale/i);
  assert.doesNotMatch(combined, /Athens Insomnia Scale self-assessment/i);
  assert.doesNotMatch(combined, /validated 8-item insomnia self-assessment/i);
  assert.doesNotMatch(combined, /provides a validated self-assessment/i);
  assert.match(combined, /informational Athens Insomnia Scale page/i);
  assert.match(combined, /Athens scale information/i);
});

test("the insomnia guide preserves the Athens evidence and permission boundary", async () => {
  const guide = await read("src/app/blog/insomnia-test-guide/page.tsx");
  const catalog = await read("src/lib/blog.ts");

  assert.match(guide, /pubmed\.ncbi\.nlm\.nih\.gov\/11033374/);
  assert.match(guide, /does not reproduce the questionnaire, response choices, scoring instructions, threshold, or automated interpretation/i);
  assert.match(guide, /written permission for public consumer-web administration is not on file/i);
  assert.match(guide, /cannot diagnose insomnia or determine its cause/i);
  assert.doesNotMatch(guide, /score of 6|total score of 0|AIS covers eight domains/i);
  assert.match(catalog, /title: "Insomnia Signs and Athens Insomnia Scale Information"/);
});
