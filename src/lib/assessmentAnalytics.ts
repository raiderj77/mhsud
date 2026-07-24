import { getCurrentConsent } from "@/lib/privacyConsent";
import { isSensitiveBrowserLocation } from "@/lib/routePolicies";

type AssessmentEvent = "assessment_started" | "assessment_completed";

export function trackAssessmentEvent(eventName: AssessmentEvent): void {
  if (typeof window === "undefined") return;
  if (isSensitiveBrowserLocation()) return;
  if (getCurrentConsent()?.analytics !== true) return;
  window.gtag?.("event", eventName);
}
