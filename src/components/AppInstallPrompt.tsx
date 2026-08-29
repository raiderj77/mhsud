"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function AppInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    const handleAppInstalled = () => {
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
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") setIsInstalled(true);
    } finally {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (isInstalled || !showPrompt || !deferredPrompt) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 animate-fade-in pb-safe px-4 py-3 md:bottom-4 md:left-auto md:right-4 md:max-w-md md:mx-0 md:px-0 md:py-0"
      role="region"
      aria-labelledby="app-install-title"
    >
      <div className="mx-auto max-w-lg bg-white dark:bg-night-800 rounded-xl shadow-lg border border-sand-200 dark:border-neutral-700 overflow-hidden">
        <div className="p-4 md:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-sage-100 dark:bg-sage-900">
            <span className="text-2xl" aria-hidden="true">📱</span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 id="app-install-title" className="font-semibold text-neutral-900 dark:text-white mb-1">
              Install MindCheck Tools
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-300">
              Add MindCheck Tools to your home screen for quick access. Screening tools still require an internet connection.
            </p>
          </div>

          <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleDismiss}
              className="flex-1 sm:flex-none min-h-[44px] px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-sand-100 dark:bg-night-700 hover:bg-sand-200 dark:hover:bg-night-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-500"
              type="button"
              aria-label="Not now"
            >
              Not now
            </button>

            <button
              onClick={handleInstall}
              className="flex-1 sm:flex-none min-h-[44px] px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-sage-700 to-sage-800 hover:from-sage-800 hover:to-sage-900 transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
