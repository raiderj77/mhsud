"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  OPEN_CONSENT_EVENT,
  parseStoredPrivacyConsent,
  publishPrivacyChoiceStatus,
  type PrivacyConsent,
} from "@/lib/privacyConsent";
import { isOptionalServicesAllowedRoute } from "@/lib/routePolicies";

const MEASUREMENT_ID = "G-XKHQN1NJ2Z";
const ANALYTICS_SCRIPT_ID = "consented-google-analytics";
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function focusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hidden && element.getAttribute("aria-hidden") !== "true",
  );
}

function globalPrivacyControlIsActive(): boolean {
  return Boolean(
    (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl ||
      document.cookie.includes("empire_gpc=1"),
  );
}

function ensureGtag(): void {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => {
    window.dataLayer?.push(args);
  });
}

function updateGoogleConsent(consent: PrivacyConsent): void {
  ensureGtag();
  window.gtag?.("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    // Google Analytics remains opt-in; advertising signals are always denied.
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    personalization_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function safePageLocation(): string {
  const current = new URL(window.location.href);
  // Even an ordinary-looking campaign value is arbitrary visitor-supplied
  // text. Never forward any query parameter or fragment to analytics.
  return new URL(current.pathname, current.origin).toString();
}

function safeReferrer(): string {
  if (!document.referrer) return "";
  try {
    const referrer = new URL(document.referrer);
    return referrer.protocol === "http:" || referrer.protocol === "https:" ? referrer.origin : "";
  } catch {
    return "";
  }
}

function sendSanitizedPageView(pathname: string): void {
  if (window.__mindcheckLastTrackedPath === pathname) return;
  window.__mindcheckLastTrackedPath = pathname;
  window.gtag?.("event", "page_view", {
    page_location: safePageLocation(),
    page_path: pathname,
    page_title: document.title,
    page_referrer: safeReferrer(),
  });
}

function loadGoogleAnalytics(pathname: string): void {
  // The vendor can read the document URL independently of our page_view.
  // Fail closed on decorated URLs instead of trusting event sanitization alone.
  if (window.location.search || window.location.hash || globalPrivacyControlIsActive()) return;
  ensureGtag();
  (window as unknown as Record<string, unknown>)[`ga-disable-${MEASUREMENT_ID}`] = false;

  if (document.getElementById(ANALYTICS_SCRIPT_ID)) {
    sendSanitizedPageView(pathname);
    return;
  }

  const script = document.createElement("script");
  script.id = ANALYTICS_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.addEventListener("load", () => {
    if (window.__mindcheckConsent?.analytics !== true || globalPrivacyControlIsActive() || window.location.pathname !== "/") return;
    window.gtag?.("js", new Date());
    window.gtag?.("config", MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      send_page_view: false,
      page_location: safePageLocation(),
      page_referrer: safeReferrer(),
    });
    sendSanitizedPageView(pathname);
  }, { once: true });
  document.head.appendChild(script);
}

function clearGoogleAnalytics(): void {
  (window as unknown as Record<string, unknown>)[`ga-disable-${MEASUREMENT_ID}`] = true;
  window.__mindcheckLastTrackedPath = undefined;
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.mindchecktools.com; SameSite=Lax`;
    }
  }
}

function removeOptionalServiceScripts(): void {
  document.getElementById(ANALYTICS_SCRIPT_ID)?.remove();
  // Defensive cleanup for a document inherited from an older release, not an
  // advertising integration. SensitiveRouteLifecycle also forces a clean load.
  document.getElementById("consented-google-adsense")?.remove();
  clearGoogleAnalytics();
}

function readStoredConsent(): PrivacyConsent | null {
  try {
    return parseStoredPrivacyConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    return null;
  }
}

export function ConsentAnalytics() {
  const pathname = usePathname();
  const optionalServicesAllowed = isOptionalServicesAllowedRoute(pathname);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [choiceCompleted, setChoiceCompleted] = useState(false);
  const [gpcActive, setGpcActive] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const modalRootRef = useRef<HTMLDivElement>(null);

  const applyConsent = useCallback((choice: PrivacyConsent, persist = true) => {
    const storedChoice = globalPrivacyControlIsActive()
      ? { version: 3 as const, analytics: false }
      : { version: 3 as const, analytics: choice.analytics };
    const effectiveChoice = optionalServicesAllowed
      ? storedChoice
      : { version: 3 as const, analytics: false };

    window.__mindcheckConsent = effectiveChoice;
    updateGoogleConsent(effectiveChoice);
    if (!optionalServicesAllowed) removeOptionalServiceScripts();
    else if (effectiveChoice.analytics) loadGoogleAnalytics(pathname);
    else clearGoogleAnalytics();

    if (persist) {
      try { localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(storedChoice)); } catch {}
    }
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: effectiveChoice }));
    setAnalytics(effectiveChoice.analytics);
  }, [optionalServicesAllowed, pathname]);

  useEffect(() => {
    const gpc = globalPrivacyControlIsActive();
    const stored = readStoredConsent();
    setGpcActive(gpc);
    if (gpc) {
      applyConsent({ version: 3, analytics: false });
      setChoiceCompleted(true);
      setOpen(false);
    } else if (stored) {
      // Persist the normalized version, dropping legacy advertising choices.
      applyConsent(stored);
      setChoiceCompleted(true);
    } else {
      applyConsent({ version: 3, analytics: false }, false);
      setChoiceCompleted(false);
      // Do not interrupt a health-topic visit with consent choices for services
      // that cannot run there. The dialog appears on the homepage, or when a
      // visitor explicitly opens Privacy Choices from the footer.
      setOpen(optionalServicesAllowed);
    }
    setReady(true);
  }, [applyConsent, optionalServicesAllowed]);

  useEffect(() => {
    if (!ready) return;
    publishPrivacyChoiceStatus({ completed: choiceCompleted, dialogOpen: open });
  }, [choiceCompleted, open, ready]);

  useEffect(() => {
    const showChoices = () => {
      publishPrivacyChoiceStatus({ completed: choiceCompleted, dialogOpen: true });
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, showChoices);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, showChoices);
  }, [choiceCompleted]);

  const save = useCallback((choice: PrivacyConsent) => {
    const previous = window.__mindcheckConsent;
    const withdrewOptionalService = Boolean(previous && previous.analytics && !choice.analytics);

    applyConsent(choice);
    publishPrivacyChoiceStatus({ completed: true, dialogOpen: false });
    setChoiceCompleted(true);
    setOpen(false);

    // Consent updates stop future Google events immediately. Reload after a
    // withdrawal as well so a previously executed analytics
    // runtime cannot remain active in the current document.
    if (withdrewOptionalService) window.location.reload();
  }, [applyConsent]);

  useEffect(() => {
    if (!ready || !open) return;

    const dialog = dialogRef.current;
    const modalRoot = modalRootRef.current;
    if (!dialog || !modalRoot) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const backgroundState = new Map<HTMLElement, { inert: boolean; ariaHidden: string | null }>();
    const previousOverflow = document.body.style.overflow;

    const makeInert = (element: HTMLElement) => {
      if (element === modalRoot || modalRoot.contains(element) || element.contains(modalRoot)) return;
      if (!backgroundState.has(element)) {
        backgroundState.set(element, {
          inert: element.inert,
          ariaHidden: element.getAttribute("aria-hidden"),
        });
      }
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    };

    // Inert every sibling along the modal's ancestor path. This keeps the
    // isolation correct even if a framework wrapper is added around the modal.
    let activeBranch: HTMLElement = modalRoot;
    while (activeBranch.parentElement && activeBranch.parentElement !== document.body) {
      for (const sibling of activeBranch.parentElement.children) {
        if (sibling instanceof HTMLElement && sibling !== activeBranch) makeInert(sibling);
      }
      activeBranch = activeBranch.parentElement;
    }
    for (const sibling of document.body.children) {
      if (sibling instanceof HTMLElement && sibling !== activeBranch) makeInert(sibling);
    }

    document.body.style.overflow = "hidden";

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof HTMLElement) makeInert(node);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        save({ version: 3, analytics: false });
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = focusableElements(dialog);
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus({ preventScroll: true });
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      if (event.shiftKey && (current === first || current === dialog || !dialog.contains(current))) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!event.shiftKey && (current === last || current === dialog || !dialog.contains(current))) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    const defaultAction = dialog.querySelector<HTMLElement>("[data-consent-default-action]");
    (defaultAction ?? focusableElements(dialog)[0] ?? dialog).focus({ preventScroll: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", handleKeyDown, true);
      document.body.style.overflow = previousOverflow;
      for (const [element, state] of backgroundState) {
        element.inert = state.inert;
        if (state.ariaHidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", state.ariaHidden);
      }
      if (previouslyFocused && previouslyFocused !== document.body && previouslyFocused.isConnected) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, [open, ready, save]);

  useEffect(() => {
    if (!optionalServicesAllowed) {
      removeOptionalServiceScripts();
      return;
    }
    if (ready && window.__mindcheckConsent?.analytics) loadGoogleAnalytics(pathname);
  }, [optionalServicesAllowed, pathname, ready]);

  if (!ready || !open) return null;

  return (
    <div
      ref={modalRootRef}
      className="fixed inset-0 z-[120] flex items-end bg-neutral-950/45 p-3 sm:items-center sm:justify-center"
      role="presentation"
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-choices-title"
        aria-describedby="privacy-choices-description"
        tabIndex={-1}
        className="max-h-[calc(100dvh-1.5rem)] w-full max-w-xl overflow-y-auto rounded-2xl border border-sand-200 bg-white p-5 shadow-2xl dark:border-neutral-700 dark:bg-night-800 sm:p-6"
      >
        <h2 id="privacy-choices-title" className="font-serif text-xl font-semibold text-neutral-900 dark:text-neutral-50">
          Your privacy choices
        </h2>
        <p id="privacy-choices-description" className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          Google Analytics stays off until you choose and is permitted only on the topic-neutral homepage. MindCheck Tools does not display ads. Separate cookie-free aggregate measurement runs on an allowlist of non-sensitive public pages; neither service runs on screening, result, crisis, or interactive-tool routes.
        </p>

        {gpcActive ? (
          <div className="mt-4 rounded-xl bg-sage-50 p-4 text-sm text-sage-800 dark:bg-sage-950/40 dark:text-sage-200">
            Global Privacy Control was detected, so Google Analytics and cookie-free aggregate measurement remain off.
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-sand-200 p-4 dark:border-neutral-700">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                className="mt-1 h-4 w-4 accent-sage-600"
              />
              <span>
                <span className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">Homepage-only analytics</span>
                <span className="mt-1 block text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">On the homepage only, shares the homepage path, title, approximate region, device/browser details, and an analytics identifier with Google. Questionnaire destinations, answers, scores, results, and health-topic paths are excluded.</span>
              </span>
            </label>

          </div>
        )}

        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          Read the <Link href="/cookies" className="underline hover:text-sage-600">Cookie Policy</Link> and <Link href="/consumer-health-data-privacy" className="underline hover:text-sage-600">Consumer Health Data Privacy Notice</Link>, or change this choice later from the site footer.
        </p>

        <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          {!gpcActive && (
            <button
              type="button"
              onClick={() => save({ version: 3, analytics: false })}
              data-consent-default-action
              className="btn-secondary text-sm"
            >
              Continue without Google Analytics
            </button>
          )}
          <button
            type="button"
            onClick={() => save({ version: 3, analytics })}
            data-consent-default-action={gpcActive ? "true" : undefined}
            className="btn-primary text-sm"
          >
            {gpcActive ? "Close" : "Save choices"}
          </button>
        </div>
      </section>
    </div>
  );
}
