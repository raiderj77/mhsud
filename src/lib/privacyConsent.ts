export const CONSENT_STORAGE_KEY = "mindchecktools:privacy-consent";
export const CONSENT_EVENT = "mindcheck:consent-change";
export const OPEN_CONSENT_EVENT = "mindcheck:open-privacy-choices";
export const ADS_READY_EVENT = "mindcheck:ads-ready";
export const PRIVACY_CHOICE_STATUS_EVENT = "mindcheck:privacy-choice-status";

export type PrivacyConsent = {
  version: 2;
  analytics: boolean;
  advertising: boolean;
};

export type PrivacyChoiceStatus = {
  completed: boolean;
  dialogOpen: boolean;
};

export type AdsByGoogleQueue = unknown[] & {
  requestNonPersonalizedAds?: 1;
};

declare global {
  interface Window {
    __mindcheckConsent?: PrivacyConsent;
    __mindcheckPrivacyChoiceStatus?: PrivacyChoiceStatus;
    __mindcheckLastTrackedPath?: string;
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    adsbygoogle?: AdsByGoogleQueue;
  }
}

export function getCurrentConsent(): PrivacyConsent | null {
  if (typeof window === "undefined") return null;
  return window.__mindcheckConsent ?? null;
}

export function getPrivacyChoiceStatus(): PrivacyChoiceStatus {
  if (typeof window === "undefined") return { completed: false, dialogOpen: true };

  const status = window.__mindcheckPrivacyChoiceStatus;
  if (typeof status?.completed !== "boolean" || typeof status.dialogOpen !== "boolean") {
    return { completed: false, dialogOpen: true };
  }

  return status;
}

export function publishPrivacyChoiceStatus(status: PrivacyChoiceStatus): void {
  if (typeof window === "undefined") return;

  const nextStatus = {
    completed: status.completed,
    dialogOpen: status.dialogOpen,
  };
  window.__mindcheckPrivacyChoiceStatus = nextStatus;
  window.dispatchEvent(new CustomEvent(PRIVACY_CHOICE_STATUS_EVENT, { detail: nextStatus }));
}
