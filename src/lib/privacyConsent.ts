export const CONSENT_STORAGE_KEY = "mindchecktools:privacy-consent";
export const CONSENT_EVENT = "mindcheck:consent-change";
export const OPEN_CONSENT_EVENT = "mindcheck:open-privacy-choices";
export const ADS_READY_EVENT = "mindcheck:ads-ready";

export type PrivacyConsent = {
  version: 1;
  analytics: boolean;
  advertising: boolean;
};

declare global {
  interface Window {
    __mindcheckConsent?: PrivacyConsent;
    __mindcheckLastTrackedPath?: string;
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    adsbygoogle?: unknown[];
  }
}

export function getCurrentConsent(): PrivacyConsent | null {
  if (typeof window === "undefined") return null;
  return window.__mindcheckConsent ?? null;
}
