import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

import { deletedBlogRouteDecisions } from "../config/legacy-blog-routes.mjs";

const root = process.cwd();
const read = (relativePath) => readFile(path.join(root, relativePath), "utf8");

test("the maintained Athens information page preserves the evidence and permission boundary", async () => {
  const page = await read("src/app/athens-insomnia-scale/page.tsx");

  assert.match(page, /pubmed\.ncbi\.nlm\.nih\.gov\/11033374/);
  assert.match(page, /does not reproduce, administer, score, or interpret the Athens Insomnia Scale/i);
  assert.match(page, /Written public-web permission is not on file/i);
  assert.match(page, /cannot diagnose a sleep disorder/i);
  assert.doesNotMatch(page, /score of 6|total score of 0|AIS covers eight domains/i);

  const retiredGuide = deletedBlogRouteDecisions.find(({ source }) => source === "/blog/insomnia-test-guide");
  assert.equal(retiredGuide?.outcome, "redirect");
  assert.equal(retiredGuide?.destination, "/athens-insomnia-scale");
});

test("the Athens route remains information-only rather than an available assessment", async () => {
  const page = await read("src/app/athens-insomnia-scale/page.tsx");

  assert.match(page, /This page provides no questionnaire, score, threshold, or insomnia result/i);
  assert.match(page, /withholds questionnaire content, response choices, scoring, thresholds, and automated interpretation/i);
  assert.match(page, /Can I take the Athens Insomnia Scale on MindCheck Tools\?/i);
  assert.match(page, /No\. MindCheck Tools has not archived written permission/i);
  assert.doesNotMatch(page, /Athens Insomnia Scale self-assessment/i);
  assert.doesNotMatch(page, /validated 8-item insomnia self-assessment/i);
});
