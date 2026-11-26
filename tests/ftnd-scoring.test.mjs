import assert from "node:assert/strict";
import test from "node:test";

import { FTND_QUESTIONS, scoreFtnd, getFtndRange } from "../src/lib/ftndScoring.mjs";

for (const [answers, score, key] of [
  [[0, 0, 0, 0, 0, 0], 0, "very-low"],
  [[2, 0, 0, 0, 0, 0], 2, "very-low"],
  [[3, 0, 0, 0, 0, 0], 3, "low"],
  [[3, 1, 0, 0, 0, 0], 4, "low"],
  [[3, 1, 0, 1, 0, 0], 5, "medium"],
  [[3, 1, 1, 1, 0, 0], 6, "high"],
  [[3, 1, 1, 1, 1, 0], 7, "high"],
  [[3, 1, 1, 3, 0, 0], 8, "very-high"],
  [[3, 1, 1, 3, 1, 1], 10, "very-high"],
]) {
  test(`FTND golden score ${score} maps to ${key}`, () => {
    const total = scoreFtnd(answers);
    assert.equal(total, score);
    assert.equal(getFtndRange(total)?.key, key);
  });
}

test("each of the two heavily weighted items can contribute three points alone", () => {
  assert.equal(scoreFtnd([3, 0, 0, 0, 0, 0]), 3);
  assert.equal(scoreFtnd([0, 0, 0, 3, 0, 0]), 3);
});

test("FTND rejects incomplete and invalid responses", () => {
  for (let index = 0; index < 6; index += 1) {
    const missing = Array(6).fill(0);
    missing[index] = null;
    assert.equal(scoreFtnd(missing), null);
  }
  for (const answers of [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, 0, 0, 1.5, 0, 0],
    ["0", 0, 0, 0, 0, 0],
    Array(6),
    null,
  ]) {
    assert.equal(scoreFtnd(answers), null);
  }
});

test("FTND preserves the published item and option text, order, and weights", () => {
  const snapshot = FTND_QUESTIONS.map(({ text, options }) => [
    text,
    ...options.map(({ label, value }) => `${label} = ${value}`),
  ]);
  assert.deepEqual(snapshot, [
    ["How soon after you wake up do you smoke your first cigarette?", "Within 5 minutes = 3", "6 to 30 minutes = 2", "31 to 60 minutes = 1", "After 60 minutes = 0"],
    ["Do you find it difficult to refrain from smoking in places where it is forbidden?", "Yes = 1", "No = 0"],
    ["Which cigarette would you hate most to give up?", "The first one in the morning = 1", "Any other = 0"],
    ["How many cigarettes per day do you smoke?", "10 or less = 0", "11 to 20 = 1", "21 to 30 = 2", "31 or more = 3"],
    ["Do you smoke more frequently during the first hours after waking than during the rest of the day?", "Yes = 1", "No = 0"],
    ["Do you smoke if you are so ill that you are in bed most of the day?", "Yes = 1", "No = 0"],
  ]);
});
