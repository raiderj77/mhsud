import { createHash } from "node:crypto";
import test from "node:test";
import assert from "node:assert/strict";
import {
  CUDITR_GATE_QUESTION,
  CUDITR_QUESTIONS,
  getCuditrRange,
  scoreCuditr,
} from "../src/lib/cuditrScoring.mjs";

test("preserves the published gate, item order, wording, and response anchors", () => {
  const instrument = JSON.stringify([CUDITR_GATE_QUESTION, CUDITR_QUESTIONS]);
  const digest = createHash("sha256").update(instrument).digest("hex");
  assert.equal(digest, "8032c5b15502a86991a7a06f0ccb853134dca2774e5f68f468a3c7eb97c984e8");
});

const goldenCases = [
  ["minimum", [0, 0, 0, 0, 0, 0, 0, 0], 0, "below"],
  ["maximum", [4, 4, 4, 4, 4, 4, 4, 4], 32, "possible-cud"],
  ["one below the hazardous cut point", [1, 1, 1, 1, 1, 1, 1, 0], 7, "below"],
  ["hazardous cut point", [2, 1, 1, 1, 1, 1, 1, 0], 8, "hazardous"],
  ["one above the hazardous cut point", [3, 1, 1, 1, 1, 1, 1, 0], 9, "hazardous"],
  ["one below the possible disorder cut point", [2, 2, 2, 2, 1, 1, 1, 0], 11, "hazardous"],
  ["possible disorder cut point", [2, 2, 2, 2, 2, 1, 1, 0], 12, "possible-cud"],
  ["one above the possible disorder cut point", [2, 2, 2, 2, 1, 1, 1, 2], 13, "possible-cud"],
  ["item eight historical weighting", [0, 0, 0, 0, 0, 0, 0, 2], 2, "below"],
  ["item eight recent weighting", [0, 0, 0, 0, 0, 0, 0, 4], 4, "below"],
  ["known combination", [3, 2, 3, 2, 1, 2, 1, 4], 18, "possible-cud"],
];

for (const [name, answers, expectedScore, expectedRange] of goldenCases) {
  test(name, () => {
    const score = scoreCuditr(answers);
    assert.equal(score, expectedScore);
    assert.equal(getCuditrRange(score)?.key, expectedRange);
  });
}

const invalidCases = [
  ["null answer", [null, 0, 0, 0, 0, 0, 0, 0]],
  ["undefined answer", [undefined, 0, 0, 0, 0, 0, 0, 0]],
  ["sparse array", Array(8)],
  ["wrong length", [0, 0, 0, 0, 0, 0, 0]],
  ["item one above maximum", [5, 0, 0, 0, 0, 0, 0, 0]],
  ["item eight value one", [0, 0, 0, 0, 0, 0, 0, 1]],
  ["item eight value three", [0, 0, 0, 0, 0, 0, 0, 3]],
  ["non-array input", null],
];

for (const [name, answers] of invalidCases) {
  test(`rejects ${name}`, () => {
    assert.equal(scoreCuditr(answers), null);
  });
}
