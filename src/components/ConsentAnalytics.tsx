"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  ADS_READY_EVENT,
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  OPEN_CONSENT_EVENT,
  type PrivacyConsent,
} from "@/lib/privacyConsent";

const MEASUREMENT_ID = "G-XKHQN1NJ2Z";
const ANALYTICS_SCRIPT_ID = "consented-google-analytics";
const ADS_SCRIPT_ID = "consented-google-adsense";
const ADSENSE_CLIENT = "ca-pub-7171402107622932";
const SAFE_CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
const SAFE_CAMPAIGN_VALUE = /^[a-zA-Z0-9._~-]{1,80}$/;

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
    ad_storage: consent.advertising ? "granted" : "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    personalization_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function safePageLocation(): string {
  const current = new URL(window.location.href);
  const safe = new URL(current.pathname, current.origin);
  for (const key of SAFE_CAMPAIGN_KEYS) {
    const value = current.searchParams.get(key);
    if (value && SAFE_CAMPAIGN_VALUE.test(value)) safe.searchParams.set(key, value);
  }
  return safe.toString();
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
    window.gtag?.("js", new Date());
    window.gtag?.("config", MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      send_page_view: false,
    });
    sendSanitizedPageView(pathname);
  }, { once: true });
  document.head.appendChild(script);
}

function loadNonPersonalizedAds(): void {
  if (document.getElementById(ADS_SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = ADS_SCRIPT_ID;
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.addEventListener("load", () => window.dispatchEvent(new Event(ADS_READY_EVENT)), { once: true });
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

function readStoredConsent(): PrivacyConsent | null {
  try {
    const parsed = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) || "null") as Partial<PrivacyConsent> | null;
    if (parsed?.version !== 1) return null;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.advertising !== "boolean") return null;
    return { version: 1, analytics: parsed.analytics, advertising: parsed.advertising };
  } catch {
    return null;
  }
}

type ConsentAnalyticsProps = { adsenseEnabled: boolean };

export function ConsentAnalytics({ adsenseEnabled }: ConsentAnalyticsProps) {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [gpcActive, setGpcActive] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  const applyConsent = useCallback((choice: PrivacyConsent, persist = true) => {
    const effectiveChoice = globalPrivacyControlIsActive()
      ? { version: 1 as const, analytics: false, advertising: false }
      : { ...choice, advertising: adsenseEnabled && choice.advertising };

    window.__mindcheckConsent = effectiveChoice;
    updateGoogleConsent(effectiveChoice);
    if (effectiveChoice.analytics) loadGoogleAnalytics(pathname);
    else clearGoogleAnalytics();
    if (effectiveChoice.advertising) loadNonPersonalizedAds();

    if (persist) {
      try { localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(effectiveChoice)); } catch {}
    }
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: effectiveChoice }));
    setAnalytics(effectiveChoice.analytics);
    setAdvertising(effectiveChoice.advertising);
  }, [adsenseEnabled, pathname]);

  useEffect(() => {
    const gpc = globalPrivacyControlIsActive();
    const stored = readStoredConsent();
    setGpcActive(gpc);
    if (gpc) {
      applyConsent({ version: 1, analytics: false, advertising: false });
      setOpen(false);
    } else if (stored) {
      applyConsent(stored, false);
    } else {
      applyConsent({ version: 1, analytics: false, advertising: false }, false);
      setOpen(true);
    }
    setReady(true);
  }, [applyConsent]);

  useEffect(() => {
    const showChoices = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, showChoices);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, showChoices);
  }, []);

  useEffect(() => {
    if (ready && window.__mindcheckConsent?.analytics) loadGoogleAnalytics(pathname);
  }, [pathname, ready]);

  if (!ready || !open) return null;

  const save = (choice: PrivacyConsent) => {
    applyConsent(choice);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-end bg-neutral-950/45 p-3 sm:items-center sm:justify-center" role="presentation">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-choices-title"
        className="w-full max-w-xl rounded-2xl border border-sand-200 bg-white p-5 shadow-2xl dark:border-neutral-700 dark:bg-night-800 sm:p-6"
      >
        <h2 id="privacy-choices-title" className="font-serif text-xl font-semibold text-neutral-900 dark:text-neutral-50">
          Your privacy choices
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          Optional services stay off until you choose. Screening answers, scores, and entries in private tools are never sent to analytics or advertising.
        </p>

        {gpcActive ? (
          <div className="mt-4 rounded-xl bg-sage-50 p-4 text-sm text-sage-800 dark:bg-sage-950/40 dark:text-sage-200">
            Global Privacy Control was detected, so optional analytics and advertising remain off.
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
                <span className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">Privacy-limited analytics</span>
                <span className="mt-1 block text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">Helps us understand which public pages are useful. URL inputs and tool results are excluded.</span>
              </span>
            </label>

            {adsenseEnabled && (
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-sand-200 p-4 dark:border-neutral-700">
                <input
                  type="checkbox"
                  checked={advertising}
                  onChange={(event) => setAdvertising(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-sage-600"
                />
                <span>
                  <span className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">Non-personalized advertising</span>
                  <span className="mt-1 block text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">Allows context-based ads without ad personalization. Health-tool inputs and results are never included.</span>
                </span>
              </label>
            )}
          </div>
        )}

        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          Read the <Link href="/cookies" className="underline hover:text-sage-600">Cookie Policy</Link> or change this choice later from the site footer.
        </p>

        <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          {!gpcActive && (
            <button
              type="button"
              onClick={() => save({ version: 1, analytics: false, advertising: false })}
              className="btn-secondary text-sm"
            >
              Continue without optional services
            </button>
          )}
          <button
            type="button"
            onClick={() => save({ version: 1, analytics, advertising })}
            className="btn-primary text-sm"
          >
            {gpcActive ? "Close" : "Save choices"}
          </button>
        </div>
      </section>
    </div>
  );
}
