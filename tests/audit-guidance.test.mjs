import assert from "node:assert/strict";
import test from "node:test";

import {
  getAuditSupportLevel,
  hasAuditItemLevelEscalation,
  shouldShowAuditWithdrawalSafety,
} from "../src/lib/auditGuidance.mjs";

const answersWith = (entries) => {
  const answers = Array(10).fill(0);
  for (const [index, value] of entries) answers[index] = value;
  return answers;
};

test("WHO item-level AUDIT guidance raises support by exactly one level", () => {
  for (const { total, answers, expected } of [
    { total: 2, answers: answersWith([[3, 2]]), expected: 2 },
    { total: 12, answers: answersWith([[8, 4]]), expected: 3 },
    { total: 18, answers: answersWith([[9, 4]]), expected: 4 },
    { total: 24, answers: answersWith([[4, 3]]), expected: 4 },
  ]) {
    assert.equal(hasAuditItemLevelEscalation(answers), true);
    assert.equal(getAuditSupportLevel(total, answers), expected);
  }
});

test("lower item responses preserve the total-score support level", () => {
  const answers = answersWith([[3, 1], [8, 2]]);
  assert.equal(hasAuditItemLevelEscalation(answers), false);
  assert.equal(getAuditSupportLevel(7, answers), 1);
  assert.equal(getAuditSupportLevel(15, answers), 2);
  assert.equal(getAuditSupportLevel(19, answers), 3);
  assert.equal(getAuditSupportLevel(20, answers), 4);
});

test("withdrawal safety guidance is not limited to a total score of 20", () => {
  for (const { total, answers } of [
    { total: 20, answers: answersWith([]) },
    { total: 5, answers: answersWith([[0, 3], [1, 2]]) },
    { total: 3, answers: answersWith([[2, 3]]) },
    { total: 1, answers: answersWith([[5, 1]]) },
  ]) {
    assert.equal(shouldShowAuditWithdrawalSafety(total, answers), true);
  }

  assert.equal(shouldShowAuditWithdrawalSafety(7, answersWith([[0, 3], [1, 1], [2, 2]])), false);
});
