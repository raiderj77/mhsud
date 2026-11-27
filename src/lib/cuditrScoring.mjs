export const CUDITR_GATE_QUESTION = "Have you used any cannabis over the past six months?";

const frequencyOptions = [
  { label: "Never", value: 0 },
  { label: "Less than monthly", value: 1 },
  { label: "Monthly", value: 2 },
  { label: "Weekly", value: 3 },
  { label: "Daily or almost daily", value: 4 },
];

export const CUDITR_QUESTIONS = [
  {
    text: "How often do you use cannabis?",
    options: [
      { label: "Never", value: 0 },
      { label: "Monthly or less", value: 1 },
      { label: "2-4 times a month", value: 2 },
      { label: "2-3 times a week", value: 3 },
      { label: "4 or more times a week", value: 4 },
    ],
  },
  {
    text: "How many hours were you “stoned” on a typical day when you had been using cannabis?",
    options: [
      { label: "Less than 1", value: 0 },
      { label: "1 or 2", value: 1 },
      { label: "3 or 4", value: 2 },
      { label: "5 or 6", value: 3 },
      { label: "7 or more", value: 4 },
    ],
  },
  {
    text: "How often during the past 6 months did you find that you were not able to stop using cannabis once you had started?",
    options: frequencyOptions,
  },
  {
    text: "How often during the past 6 months did you fail to do what was normally expected from you because of using cannabis?",
    options: frequencyOptions,
  },
  {
    text: "How often in the past 6 months have you devoted a great deal of your time to getting, using, or recovering from cannabis?",
    options: frequencyOptions,
  },
  {
    text: "How often in the past 6 months have you had a problem with your memory or concentration after using cannabis?",
    options: frequencyOptions,
  },
  {
    text: "How often do you use cannabis in situations that could be physically hazardous, such as driving, operating machinery, or caring for children:",
    options: frequencyOptions,
  },
  {
    text: "Have you ever thought about cutting down, or stopping, your use of cannabis?",
    options: [
      { label: "Never", value: 0 },
      { label: "Yes, but not in the past 6 months", value: 2 },
      { label: "Yes, during the past 6 months", value: 4 },
    ],
  },
];

export const CUDITR_RANGES = [
  {
    min: 0, max: 7, key: "below", level: "Below the Hazardous-Use Threshold",
    description: "Your screening score is below the hazardous-use threshold of 8. This result cannot rule out cannabis-related concerns or establish a diagnosis.",
    suggestion: "If cannabis use is causing you concern, discuss your experience with a qualified healthcare professional.",
  },
  {
    min: 8, max: 11, key: "hazardous", level: "Hazardous Use Range",
    description: "Your screening score meets the hazardous-use threshold of 8. This result flags cannabis use patterns worth discussing and cannot establish a diagnosis.",
    suggestion: "Consider discussing your cannabis use and any concerns with a qualified healthcare professional.",
  },
  {
    min: 12, max: 32, key: "possible-cud", level: "Possible Cannabis Use Disorder Range",
    description: "Your screening score meets the published cut point of 12 for possible cannabis use disorder. Adamson and colleagues (2010) reported 91% sensitivity and 90% specificity in the original 144-patient validation sample. This screening result cannot establish a diagnosis. A professional assessment is the next step.",
    suggestion: "Talk with a qualified healthcare professional about a cannabis use assessment.",
  },
];

/** @param {unknown} answers */
export function scoreCuditr(answers) {
  if (!Array.isArray(answers) || answers.length !== CUDITR_QUESTIONS.length) return null;

  let score = 0;
  for (const [index, question] of CUDITR_QUESTIONS.entries()) {
    const answer = answers[index];
    if (!question.options.some(({ value }) => value === answer)) return null;
    score += answer;
  }
  return score;
}

/** @param {number} score */
export function getCuditrRange(score) {
  return CUDITR_RANGES.find(({ min, max }) => score >= min && score <= max);
}
