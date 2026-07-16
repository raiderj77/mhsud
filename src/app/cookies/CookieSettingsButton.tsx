"use client";

declare global {
  interface Window {
    Cookiebot?: {
      consent?: { statistics?: boolean };
      renew?: () => void;
    };
  }
}

export function CookieSettingsButton() {
  return (
    <button
      onClick={() => window.Cookiebot?.renew?.()}
      className="btn-secondary text-sm"
    >
      Change Cookie Preferences
    </button>
  );
}
