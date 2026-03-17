"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  position: string;
  className?: string;
  /**
   * FIX: data-ad-slot is required by Google AdSense for targeted ad serving.
   * Without a slot ID, AdSense cannot serve targeted ads and fill rates drop significantly.
   * Get slot IDs from: https://www.google.com/adsense → Ads → By ad unit → Create ad unit
   *
   * If omitted, the component falls back to auto-ads behavior (acceptable for initial
   * setup, but named slot IDs improve fill rate and revenue by 20-40%).
   */
  adSlot?: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  /** When true, signals AdSense to serve non-personalized ads (data-npa="1").
   *  Required on health screening pages per privacy policy. */
  npa?: boolean;
}

export function AdSlot({
  position,
  className = "",
  adSlot,
  adFormat = "auto",
  npa = false,
}: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      if (w.adsbygoogle && adRef.current) {
        w.adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense not loaded — silently skip
    }
  }, []);

  return (
    <div
      className={`my-6 min-h-[250px] ${className}`}
      style={{ contain: "layout" }}
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
          {...(npa ? { "data-npa": "1" } : {})}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
