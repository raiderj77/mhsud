"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface ConsentState {
  analytics: boolean;
  advertising: boolean;
  timestamp: string;
}

const CONSENT_KEY = "mh-cookie-consent";

function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {}
}

function updateGtagConsent(consent: ConsentState) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.advertising ? "granted" : "denied",
      ad_user_data: consent.advertising ? "granted" : "denied",
      ad_personalization: consent.advertising ? "granted" : "denied",
    });
  }
}

// Extend window for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      // Already consented — apply stored preferences
      updateGtagConsent(stored);
    } else {
      // Check for Global Privacy Control signal (CCPA/CPRA compliance)
      const gpcEnabled =
        typeof navigator !== "undefined" &&
        (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;

      if (gpcEnabled) {
        // Auto-reject non-essential cookies per GPC signal
        const consent: ConsentState = {
          analytics: false,
          advertising: false,
          timestamp: new Date().toISOString(),
        };
        storeConsent(consent);
        updateGtagConsent(consent);
        // Don't show banner — GPC already handled it
      } else {
        // No consent yet, no GPC — show banner
        setVisible(true);
      }
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const consent: ConsentState = {
      analytics: true,
      advertising: true,
      timestamp: new Date().toISOString(),
    };
    storeConsent(consent);
    updateGtagConsent(consent);
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    const consent: ConsentState = {
      analytics: false,
      advertising: false,
      timestamp: new Date().toISOString(),
    };
    storeConsent(consent);
    updateGtagConsent(consent);
    setVisible(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    const consent: ConsentState = {
      analytics,
      advertising,
      timestamp: new Date().toISOString(),
    };
    storeConsent(consent);
    updateGtagConsent(consent);
    setVisible(false);
  }, [analytics, advertising]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
      <div className="max-w-xl mx-auto bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-2xl shadow-2xl overflow-hidden">
        {/* Main banner */}
        <div className="p-5 sm:p-6">
          <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            We respect your privacy
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-1">
            Your screening answers are always private — they never leave your browser. We use cookies for analytics and may use them for advertising in the future. These cookies cannot access your questionnaire responses.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-4">
            Read our{" "}
            <Link href="/privacy" className="underline hover:text-sage-600 dark:hover:text-sage-400">Privacy Policy</Link>
            {" "}and{" "}
            <Link href="/cookies" className="underline hover:text-sage-600 dark:hover:text-sage-400">Cookie Policy</Link>
            {" "}for details.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={handleAcceptAll}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectAll}
              className="btn-secondary text-sm px-5 py-2.5"
            >
              Reject All
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline px-3 py-2.5"
            >
              {showDetails ? "Hide Options" : "Customize"}
            </button>
          </div>

          {/* Granular controls */}
          {showDetails && (
            <div className="border-t border-sand-200 dark:border-neutral-700 pt-4 mt-2 space-y-3 animate-fade-in">
              {/* Essential — always on */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Essential</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">Theme preference, site functionality. No personal data.</p>
                </div>
                <span className="text-xs font-semibold text-sage-600 dark:text-sage-400 bg-sage-50 dark:bg-sage-950/30 px-2.5 py-1 rounded-full">Always On</span>
              </div>

              {/* Analytics toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Analytics</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">Google Analytics — page visits, traffic sources. Never accesses screening answers.</p>
                </div>
                <button
                  onClick={() => setAnalytics(!analytics)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${analytics ? "bg-sage-500" : "bg-sand-300 dark:bg-neutral-600"}`}
                  role="switch"
                  aria-checked={analytics}
                  aria-label="Toggle analytics cookies"
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${analytics ? "translate-x-5" : ""}`} />
                </button>
              </div>

              {/* Advertising toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Advertising</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">Ad network cookies. Not currently active — will apply when ads are enabled.</p>
                </div>
                <button
                  onClick={() => setAdvertising(!advertising)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${advertising ? "bg-sage-500" : "bg-sand-300 dark:bg-neutral-600"}`}
                  role="switch"
                  aria-checked={advertising}
                  aria-label="Toggle advertising cookies"
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${advertising ? "translate-x-5" : ""}`} />
                </button>
              </div>

              <button
                onClick={handleSavePreferences}
                className="btn-primary text-sm w-full py-2.5 mt-2"
              >
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Utility: call this to re-open the consent banner (e.g., from a footer "Cookie Settings" link).
 * Usage: import { resetCookieConsent } from "@/components/CookieConsent";
 */
export function resetCookieConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
    window.location.reload();
  } catch {}
}
