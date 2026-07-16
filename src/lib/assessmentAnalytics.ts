type AssessmentEvent = "assessment_started" | "assessment_completed";

declare global {
  interface Window {
    Cookiebot?: {
      consent?: { statistics?: boolean };
      renew?: () => void;
    };
    gtag?: (command: "event", eventName: AssessmentEvent) => void;
  }
}

export function trackAssessmentEvent(eventName: AssessmentEvent): void {
  if (typeof window === "undefined") return;
  if (window.Cookiebot?.consent?.statistics !== true) return;
  window.gtag?.("event", eventName);
}
