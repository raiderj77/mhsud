import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

const TOOL_URL = `${SITE_URL}/mdq-bipolar-screening`;

export const metadata: Metadata = createMetadata({
  path: "/mdq-bipolar-screening",
  title: "MDQ Bipolar Screening — Coming Soon",
  description:
    "The MDQ bipolar screening tool is temporarily unavailable while we obtain licensing permission. Please consult a qualified mental health professional.",
  keywords: [
    "mdq", "mood disorder questionnaire", "bipolar screening",
    "bipolar test", "bipolar spectrum screening",
  ],
  openGraph: {
    title: "MDQ Bipolar Screening — Coming Soon",
    description: "The MDQ bipolar screening tool is temporarily unavailable while we obtain licensing permission.",
    url: TOOL_URL,
    type: "website",
  },
});

export default function MDQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "MDQ Bipolar Screening", url: TOOL_URL },
            ])
          ),
        }}
      />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-warm-900 dark:text-warm-100 mb-6 text-center">
          MDQ Bipolar Screening — Coming Soon
        </h1>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <p className="text-warm-700 dark:text-warm-300 leading-relaxed">
            We are currently obtaining licensing permission to offer this screening tool. The Mood Disorder Questionnaire (MDQ) is a validated instrument for bipolar spectrum disorder screening. We expect to have this tool available soon. In the meantime, please consult with a qualified mental health professional.
          </p>
        </div>

        {/* Crisis Resources */}
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-4">
            Crisis Resources
          </h2>
          <ul className="space-y-3 text-warm-700 dark:text-warm-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <a href="tel:988" className="text-blue-600 dark:text-blue-400 underline font-semibold">988</a>
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text HOME to{" "}
              <a href="sms:741741" className="text-blue-600 dark:text-blue-400 underline font-semibold">741741</a>
            </li>
            <li>
              <strong>SAMHSA Helpline:</strong>{" "}
              <a href="tel:1-800-662-4357" className="text-blue-600 dark:text-blue-400 underline font-semibold">1-800-662-4357</a>
            </li>
          </ul>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-800 rounded-xl p-4 mb-8">
          <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed">
            <strong>Important:</strong> This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
          </p>
        </div>

        {/* Related Tools */}
        <h2 className="text-xl font-semibold text-warm-900 dark:text-warm-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/mdq-score-interpretation" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">MDQ Score Guide</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Understand what MDQ bipolar scores mean</p>
          </Link>
          <Link href="/bipolar-test-young-adults" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Bipolar Test: Young Adults</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Age-specific bipolar screening</p>
          </Link>
          <Link href="/dass-21-depression-anxiety-stress" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Depression, anxiety, and stress screening</p>
          </Link>
        </div>
      </main>
    </>
  );
}
