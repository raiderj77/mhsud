"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isSensitiveRoute } from "@/lib/routePolicies";

export function SensitiveRouteLifecycle() {
  const pathname = usePathname();

  useEffect(() => {
    const sensitive = isSensitiveRoute(pathname);
    if (!sensitive) {
      delete document.body.dataset.sensitiveRoute;
      document.body.classList.remove("print-approved");
      return;
    }

    document.body.dataset.sensitiveRoute = "true";

    // A client-side transition can arrive from a public page where optional
    // Google code was already loaded. Force one clean document load so that
    // sensitive routes never inherit a running analytics or ads runtime.
    const optionalScriptLoaded =
      document.getElementById("consented-google-analytics") ||
      document.getElementById("consented-google-adsense");
    if (optionalScriptLoaded) {
      optionalScriptLoaded.remove();
      window.location.replace(pathname);
      return;
    }

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
