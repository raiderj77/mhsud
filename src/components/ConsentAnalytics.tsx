"use client";

import { useEffect } from "react";

const MEASUREMENT_ID = "G-XKHQN1NJ2Z";
const SCRIPT_ID = "consented-google-analytics";

type AnalyticsWindow = Window & {
  Cookiebot?: { consent?: { statistics?: boolean } };
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

function globalPrivacyControlIsActive(): boolean {
  return Boolean(
    (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl ||
      document.cookie.includes("empire_gpc=1"),
  );
}

function loadGoogleAnalytics(): void {
  if (document.getElementById(SCRIPT_ID)) return;

  const analyticsWindow = window as AnalyticsWindow;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.addEventListener("load", () => {
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.gtag = analyticsWindow.gtag || ((...args: unknown[]) => {
      analyticsWindow.dataLayer?.push(args);
    });
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", MEASUREMENT_ID, { anonymize_ip: true });
  }, { once: true });
  document.head.appendChild(script);
}

export function ConsentAnalytics() {
  useEffect(() => {
    const enableIfConsented = () => {
      const analyticsWindow = window as AnalyticsWindow;
      if (globalPrivacyControlIsActive()) return;
      if (analyticsWindow.Cookiebot?.consent?.statistics !== true) return;
      loadGoogleAnalytics();
    };

    enableIfConsented();
    window.addEventListener("CookiebotOnConsent", enableIfConsented);
    window.addEventListener("CookiebotOnAccept", enableIfConsented);
    return () => {
      window.removeEventListener("CookiebotOnConsent", enableIfConsented);
      window.removeEventListener("CookiebotOnAccept", enableIfConsented);
    };
  }, []);

  return null;
}
