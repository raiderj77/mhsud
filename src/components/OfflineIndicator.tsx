"use client";

import { useState, useEffect } from "react";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

/**
 * OfflineIndicator Component
 *
 * Displays a dismissible banner when user is offline.
 * Shows crisis color (red) to signal importance while being helpful, not alarming.
 * Uses aria-live for screen reader announcements.
 * Automatically re-appears when user goes offline again.
 *
 * Placement: Add near top of layout (before main content)
 */
export function OfflineIndicator() {
  const { isOnline, isReady } = useOnlineStatus();
  const [dismissed, setDismissed] = useState(false);

  // Reset dismissed state when coming back online
  useEffect(() => {
    if (isOnline) {
      setDismissed(false);
    }
  }, [isOnline]);

  // Don't render until hydrated
  if (!isReady) {
    return null;
  }

  // Don't show if online or dismissed
  if (isOnline || dismissed) {
    return null;
  }

  return (
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className="fixed top-0 left-0 right-0 z-50 animate-fade-in"
    >
      <div className="bg-gradient-to-r from-crisis-600 to-crisis-700 dark:from-crisis-700 dark:to-crisis-800 text-white px-4 py-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xl" aria-hidden="true">
              ⚠️
            </span>
            <div className="flex-1">
              <p className="font-semibold text-sm md:text-base leading-tight">
                You&apos;re offline
              </p>
              <p className="text-xs md:text-sm opacity-95 mt-0.5">
                Screening tools still work! Your results won&apos;t sync until you&apos;re online.
              </p>
            </div>
          </div>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss offline notification"
            className="ml-2 flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg
              hover:bg-white/20 dark:hover:bg-white/10
              transition-colors duration-200
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            type="button"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
