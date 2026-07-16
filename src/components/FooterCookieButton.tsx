"use client";

declare global {
  interface Window {
    Cookiebot?: {
      consent?: { statistics?: boolean };
      renew?: () => void;
    };
  }
}

export function FooterCookieButton() {
  return (
    <button
      onClick={() => window.Cookiebot?.renew?.()}
      className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
    >
      Cookie Settings
    </button>
  );
}
