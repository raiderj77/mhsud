"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ADS_READY_EVENT, CONSENT_EVENT, getCurrentConsent } from "@/lib/privacyConsent";
import { isSensitiveRoute } from "@/lib/routePolicies";

interface AdSlotProps {
  position: string;
  className?: string;
  /**
   * Optional AdSense ad-unit identifier for an account-configured placement.
   * MindCheck requests non-personalized ads regardless of whether a slot is named.
   * Get slot IDs from: https://www.google.com/adsense → Ads → By ad unit → Create ad unit
   *
   * If omitted, account-configured auto-ad behavior may supply the placement.
   */
  adSlot?: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  /** Retained for call-site compatibility. MindCheck always serves
   *  non-personalized ads because all site topics can reveal health interests. */
  npa?: boolean;
}

const FORMAT_DIMS: Record<string, { minWidth: number; minHeight: number }> = {
  auto:       { minWidth: 300, minHeight: 250 },
  rectangle:  { minWidth: 300, minHeight: 250 },
  vertical:   { minWidth: 160, minHeight: 600 },
  horizontal: { minWidth: 320, minHeight: 50 },
};

export function AdSlot({
  position,
  className = "",
  adSlot,
  adFormat = "auto",
}: AdSlotProps) {
  const pathname = usePathname();
  const sensitive = isSensitiveRoute(pathname);
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);
  const [allowed, setAllowed] = useState(false);
  const runtimeEnabled =
    process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" &&
    process.env.NEXT_PUBLIC_GOOGLE_CERTIFIED_CMP_READY === "true" &&
    process.env.NEXT_PUBLIC_ADSENSE_STRICT_CSP_READY === "true";

  useEffect(() => {
    const refresh = () => setAllowed(!sensitive && getCurrentConsent()?.advertising === true);
    refresh();
    window.addEventListener(CONSENT_EVENT, refresh);
    return () => window.removeEventListener(CONSENT_EVENT, refresh);
  }, [sensitive]);

  useEffect(() => {
    if (!allowed) return;

    const requestAd = () => {
      if (pushed.current || getCurrentConsent()?.advertising !== true) return;
      try {
        if (window.adsbygoogle && adRef.current) {
          window.adsbygoogle.requestNonPersonalizedAds = 1;
          window.adsbygoogle.push({});
          pushed.current = true;
        }
      } catch {
        // AdSense can reject a duplicate or unavailable slot; leave the page usable.
      }
    };

    requestAd();
    window.addEventListener(ADS_READY_EVENT, requestAd);
    return () => window.removeEventListener(ADS_READY_EVENT, requestAd);
  }, [allowed]);

  const dims = FORMAT_DIMS[adFormat] ?? FORMAT_DIMS.auto;

  // The asynchronous AdSense manual-unit API requires a configured slot ID.
  // When no ID is supplied, render nothing and let the consent-gated global
  // script handle account-side Auto ads instead of pushing an invalid unit.
  if (sensitive || !runtimeEnabled || !allowed || !adSlot) return null;

  return (
    <div
      className={`my-6 no-print ${className}`}
      style={{ contain: "layout", minWidth: dims.minWidth, minHeight: dims.minHeight }}
      data-ad-position={position}
      aria-label="Advertisement"
      role="complementary"
    >
      <div ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7171402107622932"
          {...(adSlot ? { "data-ad-slot": adSlot } : {})}
          data-npa="1"
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
