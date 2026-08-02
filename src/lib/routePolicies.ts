const SENSITIVE_TOOL_SEGMENT =
  /(?:^|-)(?:test|screen|screening|assessment|questionnaire|scale|inventory|calculator|check|check-in|record|scheduler)(?:-|$)/i;

const EXPLICIT_SENSITIVE_ROUTES = new Set([
  "screening-tools",
  "safety-plan",
  "readiness-to-change",
  "who-5-wellbeing-index",
  // Interactive health tools whose slugs do not contain one of the generic
  // screening keywords above. Keep these explicit so they cannot load ads or
  // analytics, inherit shared caches, or send a referrer merely because their
  // public-facing name uses words such as quiz, plan, or timeline.
  "attachment-style-quiz",
  "box-breathing-exercise",
  "cognitive-distortion-identifier",
  "coping-skills-randomizer",
  "dass-21-depression-anxiety-stress",
  "dbt-crisis-skills",
  "five-senses-grounding",
  "health-recovery-timeline",
  "relapse-prevention-plan",
  "treatment-cost-estimator",
  "trigger-identification-worksheet",
  "urge-surfing-timer",
  "values-card-sort",
  "withdrawal-timeline",
]);

export function isSensitiveRoute(pathname: string): boolean {
  const cleanPath = pathname.split(/[?#]/, 1)[0] ?? "/";
  const firstSegment = cleanPath.split("/").filter(Boolean)[0]?.toLowerCase();

  if (!firstSegment || firstSegment === "blog") return false;
  if (/^results?$/.test(firstSegment)) return true;
  if (EXPLICIT_SENSITIVE_ROUTES.has(firstSegment)) return true;
  return SENSITIVE_TOOL_SEGMENT.test(firstSegment);
}

export function isSensitiveBrowserLocation(): boolean {
  if (typeof window === "undefined") return false;
  return isSensitiveRoute(window.location.href.slice(window.location.origin.length));
}
