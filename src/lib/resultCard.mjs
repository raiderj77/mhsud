// Glanceable result card: the data model behind the one-screen result
// summary a person can download and share from a screening tool's results.
//
// The card carries only what the person already sees on their own results
// screen: the test name, their score, the band label, a one-line meaning of
// that band, and the date. It adds MindCheck Tools branding, the tool's
// canonical URL as an invitation, the screening line, and the privacy line.
// It never carries
// answers.
//
// It also never carries norms. MindCheck Tools holds no response data, so
// there is no crowd to compare a score against, and a card must never imply
// one. The builder refuses norm language (averages, percentiles, "most
// people", comparisons to others) outright so no future tool can wire a
// card that fakes a comparison we cannot honestly make.

export const RESULT_CARD_BRAND = "MindCheck Tools";
export const RESULT_CARD_SITE_URL = "https://mindchecktools.com";
export const RESULT_CARD_PRIVACY_LINE =
  "Scored in your browser. Your answers are not sent to MindCheck Tools.";
export const RESULT_CARD_SCREENING_LINE =
  "This is a screening tool, not a diagnosis.";

const NORM_LANGUAGE =
  /\b(?:percentiles?|averages?|compared\s+(?:to|with)|most\s+people|other\s+people|typical(?:ly)?|norms?|population\s+(?:average|norm))\b/i;

function requireText(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError(`Result card requires a non-empty ${field}.`);
  }
  return value.trim();
}

function rejectNormLanguage(value, field) {
  if (NORM_LANGUAGE.test(value)) {
    throw new TypeError(
      `Result card ${field} must not use norm or crowd-comparison language: MindCheck Tools holds no response data to compare against.`,
    );
  }
  return value;
}

/**
 * Returns the first sentence of a longer passage, so a tool can pass its
 * band description and the card shows only its opening line. A passage
 * that is already one sentence is returned unchanged.
 */
export function firstSentence(text) {
  const value = requireText(text, "meaning");
  const match = value.match(/^[\s\S]*?[.!?](?=\s|$)/);
  return (match ? match[0] : value).trim();
}

/**
 * Builds the immutable card model consumed by both the on-screen card and
 * the downloadable PNG, so the two can never drift apart.
 *
 * Input: the tool's own already-computed display values from its results
 * screen (never answers, never a second scoring path):
 *   toolName  e.g. "AUDIT-C Quick Alcohol Screen"
 *   toolPath  canonical path, e.g. "/audit-c-alcohol-screen"
 *   score     display-ready score, e.g. "3" or "3 / 12"
 *   band      the results screen's band label, e.g. "At-Threshold"
 *   meaning   one plain-language line for that band
 *   date      optional Date, defaults to today
 */
export function buildResultCardData({ toolName, toolPath, score, band, meaning, date } = {}) {
  const name = rejectNormLanguage(requireText(toolName, "tool name"), "tool name");
  const bandLabel = rejectNormLanguage(requireText(band, "band"), "band");
  const meaningLine = rejectNormLanguage(requireText(meaning, "meaning"), "meaning");

  const scoreText =
    typeof score === "number" && Number.isFinite(score)
      ? String(score)
      : rejectNormLanguage(requireText(score, "score"), "score");

  const path = requireText(toolPath, "tool path");
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new TypeError("Result card tool path must be a canonical site path.");
  }
  const canonicalUrl = new URL(path, RESULT_CARD_SITE_URL);
  canonicalUrl.search = "";
  canonicalUrl.hash = "";
  const toolUrl = canonicalUrl.toString();

  const when = date === undefined ? new Date() : date;
  if (!(when instanceof Date) || Number.isNaN(when.getTime())) {
    throw new TypeError("Result card date must be a valid Date.");
  }
  const dateLabel = when.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const slug =
    canonicalUrl.pathname.replace(/^\/+|\/+$/g, "").replace(/\//g, "-") || "tool";

  return Object.freeze({
    brand: RESULT_CARD_BRAND,
    toolName: name,
    toolUrl,
    score: scoreText,
    band: bandLabel,
    meaning: meaningLine,
    dateLabel,
    inviteLine: `Try it yourself, free and private: ${toolUrl}`,
    privacyLine: RESULT_CARD_PRIVACY_LINE,
    screeningLine: RESULT_CARD_SCREENING_LINE,
    fileName: `${slug}-result-card.png`,
  });
}
