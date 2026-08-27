const SENSITIVE_TOOL_SEGMENT =
  /(?:^|-)(?:test|screen|screening|assessment|questionnaire|scale|inventory|calculator|check|check-in|record|scheduler)(?:-|$)/i;

const EXPLICIT_SENSITIVE_ROUTES = new Set([
  // Awareness articles can concern grief and overdose. Keep the whole section
  // outside tracking and referrer/caching flows, including its calendar hub.
  "awareness",
  "screening-tools",
  "crisis-resources",
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

// Optional third-party services use a positive allowlist. A new route is
// therefore tag-free by default until privacy, rights, crisis, and clinical
// review explicitly clear it. Search Console remains the source of page-level
// acquisition data; consented GA is limited to the topic-neutral homepage.
const OPTIONAL_SERVICE_ALLOWED_ROUTES = new Set(["/"]);

// Cookie-free aggregate measurement uses a separate, narrow allowlist. These
// routes are topic-neutral policy, trust, professional, or commercial pages.
// Assessment, result, crisis, condition-specific, blog-detail, and interactive
// tool routes are excluded. New routes stay excluded until privacy review.
const PRIVACY_SAFE_AGGREGATE_ANALYTICS_ROUTES = new Set([
  "/",
  "/about",
  "/about/jason-ramirez",
  "/accessibility",
  "/clinical-evidence",
  "/consumer-health-data-privacy",
  "/contact",
  "/cookies",
  "/disclaimer",
  "/for-professionals",
  "/for-professionals/sample-readiness-review",
  "/for-professionals/screening-implementation-checklist",
  "/for-professionals/screening-instrument-rights-guide",
  "/methodology",
  "/privacy",
  "/recommended-reading",
  "/terms",
]);

function cleanPathname(pathname: string): string {
  const cleanPath = pathname.split(/[?#]/, 1)[0] || "/";
  if (cleanPath === "/") return cleanPath;
  return cleanPath.replace(/\/+$/, "") || "/";
}

export function isOptionalServicesAllowedRoute(pathname: string): boolean {
  return OPTIONAL_SERVICE_ALLOWED_ROUTES.has(cleanPathname(pathname));
}

export function isPrivacySafeAggregateAnalyticsRoute(pathname: string): boolean {
  return PRIVACY_SAFE_AGGREGATE_ANALYTICS_ROUTES.has(cleanPathname(pathname));
}

export function isSensitiveRoute(pathname: string): boolean {
  const cleanPath = cleanPathname(pathname);
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
