"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/privacyConsent";

export function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="btn-secondary text-sm"
    >
      Change Privacy Choices
    </button>
  );
}
