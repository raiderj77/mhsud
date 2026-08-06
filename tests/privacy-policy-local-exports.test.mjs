import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const privacyUrl = new URL("../src/app/privacy/page.tsx", import.meta.url);

test("privacy policy distinguishes local processing from user-created exports", async () => {
  const privacy = await readFile(privacyUrl, "utf8");

  assert.match(privacy, /not intentionally sent to MindCheck Tools/i);
  assert.match(privacy, /downloaded or printed summary can contain sensitive information/i);
  assert.match(privacy, /public tool name and canonical page URL/i);
  assert.match(privacy, /does not include answers, scores, ratings, result labels, or summaries/i);
  assert.doesNotMatch(privacy, /answers and scores never leave your browser/i);
  assert.doesNotMatch(privacy, /Screening data never leaves your browser/i);
});
