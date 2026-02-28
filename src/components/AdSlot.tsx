"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  position: string;
  className?: string;
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
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
    <div className={`my-6 min-h-[90px] ${className}`} data-ad-position={position}>
      <div ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7171402107622932"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
