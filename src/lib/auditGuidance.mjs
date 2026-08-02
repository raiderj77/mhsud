function scoreAt(answers, index) {
  const value = answers[index];
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

/**
 * WHO's AUDIT manual calls for the next-highest intervention level when a
 * dependence-symptom item (Questions 4-6) scores 2+ or an injury/concern item
 * (Questions 9-10) scores 4. This does not alter the validated total score.
 */
export function hasAuditItemLevelEscalation(answers) {
  return [3, 4, 5].some((index) => scoreAt(answers, index) >= 2)
    || [8, 9].some((index) => scoreAt(answers, index) === 4);
}

export function getAuditSupportLevel(totalScore, answers) {
  const scoreBasedLevel = totalScore >= 20 ? 4 : totalScore >= 16 ? 3 : totalScore >= 8 ? 2 : 1;
  return Math.min(scoreBasedLevel + (hasAuditItemLevelEscalation(answers) ? 1 : 0), 4);
}

/**
 * Show conditional withdrawal safety guidance when the total score or answers
 * indicate a frequent/heavy pattern or a morning drink. This is a caution, not
 * a diagnosis of dependence or a prediction that withdrawal will occur.
 */
export function shouldShowAuditWithdrawalSafety(totalScore, answers) {
  const frequentAndHighQuantity = scoreAt(answers, 0) >= 3 && scoreAt(answers, 1) >= 2;
  const sixOrMoreWeekly = scoreAt(answers, 2) >= 3;
  const morningDrinkReported = scoreAt(answers, 5) >= 1;
  return totalScore >= 20 || frequentAndHighQuantity || sixOrMoreWeekly || morningDrinkReported;
}
