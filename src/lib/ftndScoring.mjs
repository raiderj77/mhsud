export const FTND_QUESTIONS = [
  {
    text: "How soon after you wake up do you smoke your first cigarette?",
    options: [
      { label: "Within 5 minutes", value: 3 },
      { label: "6 to 30 minutes", value: 2 },
      { label: "31 to 60 minutes", value: 1 },
      { label: "After 60 minutes", value: 0 },
    ],
  },
  {
    text: "Do you find it difficult to refrain from smoking in places where it is forbidden?",
    options: [{ label: "Yes", value: 1 }, { label: "No", value: 0 }],
  },
  {
    text: "Which cigarette would you hate most to give up?",
    options: [{ label: "The first one in the morning", value: 1 }, { label: "Any other", value: 0 }],
  },
  {
    text: "How many cigarettes per day do you smoke?",
    options: [
      { label: "10 or less", value: 0 },
      { label: "11 to 20", value: 1 },
      { label: "21 to 30", value: 2 },
      { label: "31 or more", value: 3 },
    ],
  },
  {
    text: "Do you smoke more frequently during the first hours after waking than during the rest of the day?",
    options: [{ label: "Yes", value: 1 }, { label: "No", value: 0 }],
  },
  {
    text: "Do you smoke if you are so ill that you are in bed most of the day?",
    options: [{ label: "Yes", value: 1 }, { label: "No", value: 0 }],
  },
];

const scoreLimit = "The score cannot measure smoking-related harm or diagnose tobacco use disorder.";
const quitline = "the free U.S. quitline at 1-800-QUIT-NOW (1-800-784-8669)";
const supportedQuit = `Quitting usually goes better with support. Call ${quitline} and ask a clinician about cessation support options.`;

export const FTND_RANGES = [
  {
    min: 0, max: 2, key: "very-low", level: "Very Low Dependence",
    description: `Your score falls in the very low range for physical dependence on cigarettes. ${scoreLimit}`,
    suggestion: `Notice when you reach for a cigarette. If you want help quitting, call ${quitline}.`,
  },
  {
    min: 3, max: 4, key: "low", level: "Low Dependence",
    description: `Your score falls in the low range for physical dependence on cigarettes. ${scoreLimit}`,
    suggestion: `Notice which routines make smoking harder to skip. You can call ${quitline} for coaching.`,
  },
  {
    min: 5, max: 5, key: "medium", level: "Medium Dependence",
    description: `Your score falls in the medium range for physical dependence on cigarettes. ${scoreLimit}`,
    suggestion: `Consider making a quit plan and calling ${quitline} for help getting started.`,
  },
  {
    min: 6, max: 7, key: "high", level: "High Dependence",
    description: `Your score falls in the high range for physical dependence on cigarettes. ${scoreLimit}`,
    suggestion: supportedQuit,
  },
  {
    min: 8, max: 10, key: "very-high", level: "Very High Dependence",
    description: `Your score falls in the very high range for physical dependence on cigarettes. ${scoreLimit}`,
    suggestion: supportedQuit,
  },
];

/** @param {unknown} answers */
export function scoreFtnd(answers) {
  if (!Array.isArray(answers) || answers.length !== FTND_QUESTIONS.length) return null;

  let score = 0;
  for (const [index, question] of FTND_QUESTIONS.entries()) {
    const value = answers[index];
    if (!question.options.some((option) => option.value === value)) return null;
    score += value;
  }
  return score;
}

/** @param {number} score */
export function getFtndRange(score) {
  if (!Number.isInteger(score)) return undefined;
  return FTND_RANGES.find((range) => score >= range.min && score <= range.max);
}
