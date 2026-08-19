"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";
import { isPrivacySafeAggregateAnalyticsRoute } from "@/lib/routePolicies";

function globalPrivacyControlIsActive(): boolean {
  if (typeof navigator === "undefined" || typeof document === "undefined") return false;
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

  // Avoid loading the analytics runtime at all on a direct sensitive visit.
  // beforeSend remains the final fail-closed gate for client-side navigation
  // from an allowlisted route to any excluded route.
  if (!isPrivacySafeAggregateAnalyticsRoute(pathname)) return null;

  return <Analytics beforeSend={filterPrivacySafeAggregateEvent} />;
}
