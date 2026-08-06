"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  isOptionalServicesAllowedRoute,
  isSensitiveRoute,
} from "@/lib/routePolicies";

export function SensitiveRouteLifecycle() {
  const pathname = usePathname();

  useEffect(() => {
    const sensitive = isSensitiveRoute(pathname);
    const optionalServicesAllowed = isOptionalServicesAllowedRoute(pathname);
    const optionalScriptLoaded =
      document.getElementById("consented-google-analytics") ||
      document.getElementById("consented-google-adsense");

    // Client-side navigation away from the homepage must not carry a running
    // Google runtime into a topical page, even when that page is informational.
    if (!optionalServicesAllowed && optionalScriptLoaded) {
      optionalScriptLoaded.remove();
      window.location.replace(pathname);
      return;
    }

    if (optionalServicesAllowed) {
      const forceCleanTopicalNavigation = (event: MouseEvent) => {
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
          !isOptionalServicesAllowedRoute(destination.pathname)
        ) {
          // Prevent a consented homepage runtime from seeing a health-topic URL
          // during a client-side transition. A new document starts tag-free.
          event.preventDefault();
          window.location.assign(destination.href);
        }
      };

      document.addEventListener("click", forceCleanTopicalNavigation, true);
      return () => document.removeEventListener("click", forceCleanTopicalNavigation, true);
    }

    if (!sensitive) {
      delete document.body.dataset.sensitiveRoute;
      document.body.classList.remove("print-approved");
      return;
    }

    document.body.dataset.sensitiveRoute = "true";

    // A client-side transition can arrive from a public page where optional
    // Google code was already loaded. Force one clean document load so that
    // sensitive routes never inherit a running analytics or ads runtime.
    // Remove any sensitive navigation response cached by an older worker
    // before the network-only policy reached the browser.
    if ("caches" in window) {
      void caches.keys().then((names) =>
        Promise.all(
          names
            .filter((name) => name.startsWith("mindcheck-tools-"))
            .map((name) => caches.delete(name)),
        ),
      );
    }

    // Sensitive routes do not retain query strings or fragments that could
    // accidentally encode or disclose an answer, score, or result.
    if (window.location.search || window.location.hash) {
      window.history.replaceState(window.history.state, "", pathname);
    }

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
