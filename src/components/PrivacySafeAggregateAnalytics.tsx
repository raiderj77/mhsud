"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isPrivacySafeAggregateAnalyticsRoute } from "@/lib/routePolicies";

function globalPrivacyControlIsActive(): boolean {
  if (typeof navigator === "undefined" || typeof document === "undefined") return true;
  return Boolean(
    (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl ||
      document.cookie.includes("empire_gpc=1"),
  );
}

export function filterPrivacySafeAggregateEvent(
  event: BeforeSendEvent,
): BeforeSendEvent | null {
  if (globalPrivacyControlIsActive()) return null;

  try {
    const url = new URL(event.url);
    if (!isPrivacySafeAggregateAnalyticsRoute(url.pathname)) return null;

    // Vercel receives only the allowlisted path. Query parameters and fragments
    // are never needed for aggregate visitor and page-view counts.
    url.search = "";
    url.hash = "";
    return { ...event, url: url.toString() };
  } catch {
    return null;
  }
}

export function PrivacySafeAggregateAnalytics() {
  const pathname = usePathname();
  const [privacyChecked, setPrivacyChecked] = useState(false);

  // Do not even mount the third-party runtime before the browser's privacy
  // signal is known. The event filter also rechecks it on every event.
  useEffect(() => {
    setPrivacyChecked(!globalPrivacyControlIsActive());
  }, []);

  // Avoid loading the analytics runtime at all on a direct sensitive visit.
  // beforeSend remains the final fail-closed gate for client-side navigation
  // from an allowlisted route to any excluded route.
  if (!privacyChecked || !isPrivacySafeAggregateAnalyticsRoute(pathname) || globalPrivacyControlIsActive()) return null;

  return <Analytics beforeSend={filterPrivacySafeAggregateEvent} />;
}
