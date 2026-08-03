import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "You Are Offline",
  description: "MindCheck Tools requires an internet connection for screening and other sensitive routes.",
  robots: "noindex, nofollow",
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white dark:from-night-800 dark:to-night-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-sage-600 dark:text-sage-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-serif font-bold text-night-900 dark:text-white mb-3">
          You&apos;re offline
        </h1>

        <p className="text-lg text-sage-700 dark:text-sage-300 mb-6">
          Screening and other sensitive routes require an internet connection and are not saved for offline use.
        </p>

        <div className="bg-sage-50 dark:bg-night-700 rounded-lg p-6 mb-8">
          <h2 className="text-base font-semibold text-sage-800 dark:text-sage-200 mb-4">
            What you can do
          </h2>
          <ul className="text-base text-left text-sage-700 dark:text-sage-300 space-y-3 list-disc pl-5">
            <li>Reconnect before starting or continuing a screening tool.</li>
            <li>Previously loaded, non-sensitive public information may still be available, depending on your browser.</li>
            <li>Phone and text crisis services may work if your device has cellular service.</li>
          </ul>
        </div>

        <Link
          href="/"
          className="flex min-h-[44px] w-full items-center justify-center bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Try the Home Page
        </Link>

        <p className="text-sm text-sage-700 dark:text-sage-300 mt-8">
          This offline page does not save screening answers or results. Try again after your connection returns.
        </p>

        <div className="mt-12 pt-8 border-t border-sage-200 dark:border-night-600">
          <p className="text-base text-sage-700 dark:text-sage-300 mb-4">
            Having a mental health crisis?
          </p>
          <div className="space-y-2">
            <a
              href="tel:988"
              className="flex min-h-[44px] items-center justify-center text-base font-medium text-crisis-600 dark:text-crisis-400 hover:underline"
            >
              Call or text 988 (Suicide &amp; Crisis Lifeline)
            </a>
            <a
              href="sms:741741"
              className="flex min-h-[44px] items-center justify-center text-base font-medium text-crisis-600 dark:text-crisis-400 hover:underline"
            >
              Text HOME to 741741 (Crisis Text Line)
            </a>
            <a
              href="tel:1-800-662-4357"
              className="flex min-h-[44px] items-center justify-center text-base font-medium text-crisis-600 dark:text-crisis-400 hover:underline"
            >
              Call 1-800-662-4357 (SAMHSA Helpline)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
