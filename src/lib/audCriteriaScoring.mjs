export const AUD_CRITERIA_ITEMS = [
  {
    criterion: 1,
    label: "Drinking more or longer than intended",
    text: "In the past 12 months, I drank more, or for longer, than I meant to.",
  },
  {
    criterion: 2,
    label: "Wanting to cut down, or trying and not being able to",
    text: "In the past 12 months, I wanted to cut down or stop drinking, or tried to, but could not.",
  },
  {
    criterion: 3,
    label: "A lot of time spent on alcohol",
    text: "In the past 12 months, I spent a lot of time getting alcohol, drinking, or recovering from drinking.",
  },
  {
    criterion: 4,
    label: "Craving",
    text: "In the past 12 months, I craved alcohol, or felt a strong urge to drink.",
  },
  {
    criterion: 5,
    label: "Drinking interfered with work, school, home, or family",
    text: "In the past 12 months, drinking, or being sick from drinking, kept me from work, school, or taking care of my home or family.",
  },
  {
    criterion: 6,
    label: "Kept drinking despite problems with family or friends",
    text: "In the past 12 months, I kept drinking even though it was causing problems with family or friends.",
  },
  {
    criterion: 7,
    label: "Gave up activities that mattered in order to drink",
    text: "In the past 12 months, I gave up or cut back on activities that mattered to me in order to drink.",
  },
  {
    criterion: 8,
    label: "Drinking in physically risky situations",
    text: "In the past 12 months, I drank in situations where it was physically risky, such as driving, swimming, or using machinery.",
  },
  {
    criterion: 9,
    label: "Kept drinking despite feeling worse or a health problem",
    text: "In the past 12 months, I kept drinking even though it was making me feel depressed or anxious, or making a health problem worse.",
  },
  {
    criterion: 10,
    label: "Tolerance: needing more for the same effect",
    text: "In the past 12 months, I needed to drink more than I used to in order to feel the effect, or my usual amount did less.",
  },
  {
    criterion: 11,
    label: "Withdrawal, or drinking to avoid it",
    text: "In the past 12 months, when alcohol wore off I had withdrawal symptoms, such as shakiness, sweating, nausea, trouble sleeping, restlessness, or anxiety, or I drank to relieve or avoid those symptoms.",
  },
];

const INTERVIEW_LIMIT = "These ranges apply only if a clinician confirms the criteria in a professional interview. This self-check cannot confirm any criterion or establish a diagnosis.";

export const AUD_CRITERIA_RANGES = [
  {
    min: 0, max: 1, key: "below", level: "Below the Diagnostic Threshold",
    description: `A count of 0 or 1 falls below the threshold clinicians use for alcohol use disorder. ${INTERVIEW_LIMIT}`,
    suggestion: "Stay aware of your drinking patterns. If you want to check them further, consider the AUDIT-C or full AUDIT.",
  },
  {
    min: 2, max: 3, key: "mild", level: "Mild Range (2 to 3 Criteria)",
    description: `A count of 2 or 3 matches the mild range clinicians use for alcohol use disorder. ${INTERVIEW_LIMIT}`,
    suggestion: "Consider taking the full AUDIT and talking with a qualified professional about what you noticed.",
  },
  {
    min: 4, max: 5, key: "moderate", level: "Moderate Range (4 to 5 Criteria)",
    description: `A count of 4 or 5 matches the moderate range clinicians use for alcohol use disorder. ${INTERVIEW_LIMIT}`,
    suggestion: "Arrange an assessment with a qualified professional. The support resources on this page can help you find a place to start.",
  },
  {
    min: 6, max: 11, key: "severe", level: "Severe Range (6 or More Criteria)",
    description: `A count of 6 or more matches the severe range clinicians use for alcohol use disorder. ${INTERVIEW_LIMIT}`,
    suggestion: "Arrange an assessment with a qualified professional soon. The support resources on this page can help you find a place to start.",
  },
];

/** @param {unknown} answers */
export function countAudCriteria(answers) {
  if (!Array.isArray(answers) || answers.length !== AUD_CRITERIA_ITEMS.length) return null;

  let count = 0;
  for (const answer of answers) {
    if (typeof answer !== "boolean") return null;
    if (answer) count += 1;
  }
  return count;
}

/** @param {number} count */
export function getAudCriteriaRange(count) {
  if (!Number.isInteger(count)) return undefined;
  return AUD_CRITERIA_RANGES.find(({ min, max }) => count >= min && count <= max);
}

/** @param {unknown} answers */
export function hasWithdrawalFlag(answers) {
  return Array.isArray(answers) && answers[10] === true && countAudCriteria(answers) !== null;
}
