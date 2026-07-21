import { getCurrentConsent } from "@/lib/privacyConsent";

type AssessmentEvent = "assessment_started" | "assessment_completed";

export function trackAssessmentEvent(eventName: AssessmentEvent): void {
  if (typeof window === "undefined") return;
  if (getCurrentConsent()?.analytics !== true) return;
  window.gtag?.("event", eventName);
}
