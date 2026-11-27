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

/* ------------------------------------------------------------------ */
/*  PNG meaning layout: fit-to-box, never silent truncation           */
/* ------------------------------------------------------------------ */
//
// The downloadable PNG draws the meaning in a fixed block: first baseline
// at y 700, and the last baseline must stay at or above y 830 so the text
// never reaches the screening line below it. At the full 42px size the
// block holds three lines; a longer meaning steps the font down (never
// below 28px) until the wrapped text fits the line capacity at that size.
//
// Words are never dropped. planResultCardMeaning returns every wrapped
// line plus `fits`: whether those lines fit the block. Every real tool
// meaning fits (pinned by tests over the tools' own source data). A
// hypothetical meaning that fit at no size returns fits: false, so a test
// fails loudly instead of the PNG quietly clipping words the person never
// sees are missing.

export const RESULT_CARD_MEANING_MAX_WIDTH = 936; // 1080 canvas, 72px margins
export const RESULT_CARD_MEANING_START_SIZE = 42;
export const RESULT_CARD_MEANING_MIN_SIZE = 28;
export const RESULT_CARD_MEANING_FIRST_BASELINE = 700;
export const RESULT_CARD_MEANING_LAST_BASELINE = 830;

function meaningLineHeight(size) {
  return Math.round((size * 58) / 42);
}

function meaningCapacity(size) {
  return (
    1 +
    Math.floor(
      (RESULT_CARD_MEANING_LAST_BASELINE - RESULT_CARD_MEANING_FIRST_BASELINE) /
        meaningLineHeight(size),
    )
  );
}

/**
 * @typedef {(text: string, sizePx: number) => number} ResultCardMeasure
 * A width measurer: returns the rendered width of text at a font size.
 */

/**
 * Greedy word wrap with no line cap. `measure(text)` returns the rendered
 * width of a string at the caller's current font. A single word wider than
 * maxWidth gets its own line rather than being dropped.
 *
 * @param {(text: string) => number} measure
 * @param {string} text
 * @param {number} maxWidth
 */
export function wrapResultCardText(measure, text, maxWidth) {
  const words = requireText(text, "meaning").split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (measure(candidate) <= maxWidth || !line) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * Plans how the meaning is drawn on the PNG. `measure(text, sizePx)`
 * returns the rendered width of text at a given font size (the component
 * supplies canvas measureText; tests supply a conservative model).
 * Returns the largest size at which the full wrapped text fits the
 * meaning block, the line height and lines to draw, and whether it fit.
 *
 * @param {ResultCardMeasure} measure
 * @param {string} meaning
 */
export function planResultCardMeaning(measure, meaning) {
  const text = requireText(meaning, "meaning");
  for (
    let size = RESULT_CARD_MEANING_START_SIZE;
    size >= RESULT_CARD_MEANING_MIN_SIZE;
    size -= 2
  ) {
    const lines = wrapResultCardText(
      (t) => measure(t, size),
      text,
      RESULT_CARD_MEANING_MAX_WIDTH,
    );
    if (lines.length <= meaningCapacity(size)) {
      return Object.freeze({
        size,
        lineHeight: meaningLineHeight(size),
        lines: Object.freeze(lines),
        fits: true,
      });
    }
  }
  const size = RESULT_CARD_MEANING_MIN_SIZE;
  const lines = wrapResultCardText(
    (t) => measure(t, size),
    text,
    RESULT_CARD_MEANING_MAX_WIDTH,
  );
  return Object.freeze({
    size,
    lineHeight: meaningLineHeight(size),
    lines: Object.freeze(lines),
    fits: false,
  });
}
