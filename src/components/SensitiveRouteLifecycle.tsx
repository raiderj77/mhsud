"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  isPrivacySafeAggregateAnalyticsRoute,
  isSensitiveRoute,
} from "@/lib/routePolicies";

export function SensitiveRouteLifecycle() {
  const pathname = usePathname();

  useEffect(() => {
    const sensitive = isSensitiveRoute(pathname);
    const aggregateAllowed = isPrivacySafeAggregateAnalyticsRoute(pathname);
    const aggregateScriptLoaded = document.querySelector(
      'script[src*="/_vercel/insights/script.js"], script[src*="vercel-scripts.com/v1/script"]',
    );

    // Vercel aggregate analytics is limited to a small neutral-route allowlist.
    // If a client-side transition leaves that allowlist, start a fresh document
    // so the analytics runtime cannot observe the excluded destination path.
    if (!aggregateAllowed && aggregateScriptLoaded) {
      aggregateScriptLoaded.remove();
      window.location.replace(pathname);
      return;
    }

    if (aggregateAllowed) {
      const forceCleanExcludedNavigation = (event: MouseEvent) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) return;

        const target = event.target;
        const anchor = target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : null;
        if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;

        const destination = new URL(anchor.href, window.location.href);
        if (
          destination.origin === window.location.origin &&
          !isPrivacySafeAggregateAnalyticsRoute(destination.pathname)
        ) {
          event.preventDefault();
          window.location.assign(destination.href);
        }
      };

      document.addEventListener("click", forceCleanExcludedNavigation, true);
      return () => document.removeEventListener("click", forceCleanExcludedNavigation, true);
    }

    if (!sensitive) {
      delete document.body.dataset.sensitiveRoute;
      document.body.classList.remove("print-approved");
      return;
    }

    document.body.dataset.sensitiveRoute = "true";

    // Remove sensitive responses cached by an older service worker before the
    // current network-only policy reached this browser.
    if ("caches" in window) {
      void caches.keys().then((names) =>
        Promise.all(
          names
            .filter((name) => name.startsWith("mindcheck-tools-"))
            .map((name) => caches.delete(name)),
        ),
      );
    }

    // Sensitive routes never retain query strings or fragments that could
    // accidentally encode or disclose an answer, score, or result.
    if (window.location.search || window.location.hash) {
      window.history.replaceState(window.history.state, "", pathname);
    }

    // Reload a sensitive page restored from the back-forward cache so private
    // in-memory state is not silently resurrected after history navigation.
    const resetAfterHistoryRestore = (event: PageTransitionEvent) => {
      if (event.persisted) window.location.reload();
    };
    window.addEventListener("pageshow", resetAfterHistoryRestore);

    return () => {
      window.removeEventListener("pageshow", resetAfterHistoryRestore);
      delete document.body.dataset.sensitiveRoute;
      document.body.classList.remove("print-approved");
    };
  }, [pathname]);

  return null;
}
