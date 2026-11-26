import assert from "node:assert/strict";
import test from "node:test";

import {
  countAudCriteria,
  getAudCriteriaRange,
  hasWithdrawalFlag,
} from "../src/lib/audCriteriaScoring.mjs";

const answersWithCount = (count) => Array.from({ length: 11 }, (_, index) => index < count);

for (const [count, key] of [
  [0, "below"], [1, "below"], [2, "mild"], [3, "mild"],
  [4, "moderate"], [5, "moderate"], [6, "severe"], [11, "severe"],
]) {
  test(`${count} Yes answers give a count of ${count} in the ${key} range`, () => {
    assert.equal(countAudCriteria(answersWithCount(count)), count);
    assert.equal(getAudCriteriaRange(count)?.key, key);
  });
}

test("missing or non-boolean answers do not produce a count", () => {
  const sparseAnswers = answersWithCount(0);
  delete sparseAnswers[0];

  assert.equal(countAudCriteria(), null);
  assert.equal(countAudCriteria(null), null);
  assert.equal(countAudCriteria([null, ...answersWithCount(0).slice(1)]), null);
  assert.equal(countAudCriteria(sparseAnswers), null);
  assert.equal(countAudCriteria(answersWithCount(0).slice(1)), null);
  assert.equal(countAudCriteria([1, ...answersWithCount(0).slice(1)]), null);
});

test("withdrawal guidance requires a complete response with Yes on item 11", () => {
  const withdrawalOnly = answersWithCount(0);
  withdrawalOnly[10] = true;

  assert.equal(countAudCriteria(withdrawalOnly), 1);
  assert.equal(hasWithdrawalFlag(withdrawalOnly), true);
  assert.equal(hasWithdrawalFlag(answersWithCount(0)), false);
  assert.equal(hasWithdrawalFlag(answersWithCount(10)), false);
  assert.equal(hasWithdrawalFlag(withdrawalOnly.slice(0, 10)), false);
  assert.equal(hasWithdrawalFlag([null, ...withdrawalOnly.slice(1)]), false);
});
