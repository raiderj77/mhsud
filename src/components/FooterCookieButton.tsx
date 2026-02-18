"use client";

import { resetCookieConsent } from "./CookieConsent";

export function FooterCookieButton() {
  return (
    <button
      onClick={resetCookieConsent}
      className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
    >
      Cookie Settings
    </button>
  );
}
