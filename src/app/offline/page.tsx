import { Metadata } from "next";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Offline — MindCheck Tools",
  robots: "noindex, nofollow",
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white dark:from-night-800 dark:to-night-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-sage-600 dark:text-sage-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-serif font-bold text-night-900 dark:text-white mb-3">
          You&apos;re Offline
        </h1>

        {/* Subheading */}
        <p className="text-lg text-sage-700 dark:text-sage-300 mb-6">
          It looks like you&apos;ve lost your internet connection. But don&apos;t worry — you can still use our screening tools offline!
        </p>

        {/* Info Box */}
        <div className="bg-sage-50 dark:bg-night-700 rounded-lg p-6 mb-8">
          <p className="text-sm text-sage-700 dark:text-sage-300 mb-4">
            <strong>Available offline:</strong>
          </p>
          <ul className="text-sm text-sage-600 dark:text-sage-400 space-y-2">
            <li>✓ All screening tools (PHQ-9, GAD-7, AUDIT, etc.)</li>
            <li>✓ Blog articles and educational content</li>
            <li>✓ Your results (stored locally on this device)</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Go Back Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="block w-full bg-sage-100 hover:bg-sage-200 dark:bg-night-600 dark:hover:bg-night-500 text-sage-700 dark:text-sage-300 font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Return to Previous Page
          </button>
        </div>

        {/* Help Text */}
        <p className="text-xs text-sage-500 dark:text-sage-400 mt-8">
          Your connection will be restored when you regain internet access. All your screening data is stored privately on this device.
        </p>

        {/* Crisis Resources */}
        <div className="mt-12 pt-8 border-t border-sage-200 dark:border-night-600">
          <p className="text-xs text-sage-600 dark:text-sage-400 mb-4">
            Having a mental health crisis?
          </p>
          <div className="space-y-2">
            <a
              href="tel:988"
              className="block text-sm font-medium text-crisis-600 dark:text-crisis-400 hover:underline"
            >
              📞 Call or text 988 (Suicide & Crisis Lifeline)
            </a>
            <a
              href="sms:741741"
              className="block text-sm font-medium text-crisis-600 dark:text-crisis-400 hover:underline"
            >
              💬 Text HOME to 741741 (Crisis Text Line)
            </a>
            <a
              href="tel:1-800-662-4357"
              className="block text-sm font-medium text-crisis-600 dark:text-crisis-400 hover:underline"
            >
              ☎️ Call 1-800-662-4357 (SAMHSA Helpline)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
