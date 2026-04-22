"use client";

import { useState, useEffect } from "react";

/**
 * AppInstallPrompt Component
 *
 * Listens to beforeinstallprompt event and shows an attractive banner
 * prompting users to add the app to their home screen on mobile devices.
 *
 * Features:
 * - Only shows on supporting browsers (Chrome, Edge, Samsung)
 * - Respects user's install preference (doesn't show if already installed)
 * - Non-intrusive, dismissible design
 * - Works on iOS/Android
 * - Tracks installation completion
 *
 * Placement: Add near top of layout (after OfflineIndicator)
 */

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function AppInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing
      e.preventDefault();

      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);

      // Show our custom prompt
      setShowPrompt(true);

      console.log("[AppInstallPrompt] Install prompt available");
    };

    const handleAppInstalled = () => {
      console.log("[AppInstallPrompt] App installed");
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    try {
      // Show the native install prompt
      await deferredPrompt.prompt();

      // Wait for user choice
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        console.log("[AppInstallPrompt] User accepted install");
        setIsInstalled(true);
      } else {
        console.log("[AppInstallPrompt] User dismissed install");
      }

      // Clear the prompt
      setDeferredPrompt(null);
      setShowPrompt(false);
    } catch (error) {
      console.error("[AppInstallPrompt] Install failed:", error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    console.log("[AppInstallPrompt] User dismissed prompt");
  };

  // Don't show if already installed or not supported
  if (isInstalled || !showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 animate-fade-in pb-safe px-4 py-3 md:bottom-4 md:left-auto md:right-4 md:max-w-md md:mx-0 md:px-0 md:py-0"
      role="region"
      aria-label="App installation prompt"
    >
      <div className="mx-auto max-w-lg bg-white dark:bg-night-800 rounded-xl shadow-lg border border-sand-200 dark:border-neutral-700 overflow-hidden">
        <div className="p-4 md:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Icon */}
          <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-sage-100 dark:bg-sage-900">
            <span className="text-2xl" aria-hidden="true">
              📱
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
              Install MindCheck Tools
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Add to your home screen for fast offline access to screening tools.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDismiss}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-sm font-medium
                text-neutral-700 dark:text-neutral-300
                bg-sand-100 dark:bg-night-700
                hover:bg-sand-200 dark:hover:bg-night-600
                transition-colors duration-200
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-500"
              type="button"
              aria-label="Dismiss install prompt"
            >
              Not now
            </button>

            <button
              onClick={handleInstall}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-sm font-semibold
                text-white
                bg-gradient-to-br from-sage-500 to-sage-600
                hover:from-sage-600 hover:to-sage-700
                transition-all duration-200
                shadow-md hover:shadow-lg
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              type="button"
              aria-label="Install MindCheck Tools app"
            >
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
