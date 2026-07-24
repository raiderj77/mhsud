const SENSITIVE_TOOL_SEGMENT =
  /(?:^|-)(?:test|screen|screening|assessment|questionnaire|scale|inventory|calculator|check|check-in|record|scheduler)(?:-|$)/i;

const EXPLICIT_SENSITIVE_ROUTES = new Set([
  "screening-tools",
  "safety-plan",
  "readiness-to-change",
  "who-5-wellbeing-index",
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
