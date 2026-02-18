"use client";

import { resetCookieConsent } from "@/components/CookieConsent";

export function CookieSettingsButton() {
  return (
    <button onClick={resetCookieConsent} className="btn-secondary text-sm">
      Change Cookie Preferences
    </button>
  );
}
