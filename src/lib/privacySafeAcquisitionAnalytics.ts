import { getCurrentConsent } from "@/lib/privacyConsent";

/**
 * Counts an aggregate launch from the public homepage without recording which
 * health topic or tool the visitor chose. Sensitive routes remain analytics-free.
 */
export function trackPrivateToolLaunch(): void {
  if (typeof window === "undefined") return;
  if (window.location.pathname !== "/") return;
  if (getCurrentConsent()?.analytics !== true) return;

  window.gtag?.("event", "private_tool_launch", {
    transport_type: "beacon",
  });
}
