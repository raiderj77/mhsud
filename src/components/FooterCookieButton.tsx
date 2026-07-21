"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/privacyConsent";

export function FooterCookieButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
    >
      Privacy Choices
    </button>
  );
}
