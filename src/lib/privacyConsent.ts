export const CONSENT_STORAGE_KEY = "mindchecktools:privacy-consent";
export const CONSENT_EVENT = "mindcheck:consent-change";
export const OPEN_CONSENT_EVENT = "mindcheck:open-privacy-choices";
export const PRIVACY_CHOICE_STATUS_EVENT = "mindcheck:privacy-choice-status";

export type PrivacyConsent = {
  version: 3;
  analytics: boolean;
};

export type PrivacyChoiceStatus = {
  completed: boolean;
  dialogOpen: boolean;
};

declare global {
  interface Window {
    __mindcheckConsent?: PrivacyConsent;
    __mindcheckPrivacyChoiceStatus?: PrivacyChoiceStatus;
    __mindcheckLastTrackedPath?: string;
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

// Preserve only a valid, explicit analytics choice from the old two-choice
// format. Advertising permission is discarded, never mapped to analytics.
export function parseStoredPrivacyConsent(raw: string | null): PrivacyConsent | null {
  try {
    const parsed: unknown = JSON.parse(raw || "null");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    const choice = parsed as Record<string, unknown>;
    if (typeof choice.analytics !== "boolean") return null;
    if (choice.version === 2 && typeof choice.advertising !== "boolean") return null;
    if (choice.version !== 2 && choice.version !== 3) return null;
    return { version: 3, analytics: choice.analytics };
  } catch {
    return null;
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
