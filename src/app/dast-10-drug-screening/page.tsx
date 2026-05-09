import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

const TOOL_URL = `${SITE_URL}/dast-10-drug-screening`;

export const metadata: Metadata = createMetadata({
  path: "/dast-10-drug-screening",
  title: "Drug Abuse Screening Test (DAST-10) — Under Licensing Review",
  description:
    "The DAST-10 drug screening instrument is temporarily unavailable while we obtain commercial-use clearance. Please consult a qualified mental health professional.",
  keywords: [
    "dast-10", "drug abuse screening test", "drug screening test",
    "substance abuse screening", "drug use screening",
  ],
  robots: { index: false, follow: false },
  openGraph: {
    title: "Drug Abuse Screening Test (DAST-10) — Under Licensing Review",
    description: "The DAST-10 drug screening instrument is temporarily unavailable while we obtain commercial-use clearance.",
    url: TOOL_URL,
    type: "website",
  },
});

export default function DAST10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "DAST-10 Drug Screening", url: TOOL_URL },
            ])
          ),
        }}
      />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-warm-900 dark:text-warm-100 mb-6 text-center">
          Drug Abuse Screening Test (DAST-10) — Under Licensing Review
        </h1>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <p className="text-warm-700 dark:text-warm-300 leading-relaxed">
            The DAST-10 is a substance-use screening instrument with contested commercial-use status. We are pursuing written clearance before publishing this tool. In the meantime, our AUDIT and AUDIT-C alcohol screenings are available, and the WHO ASSIST tool page provides broader substance-use context. If you are concerned about your substance use, please speak with a licensed clinician or call SAMHSA at 1-800-662-4357.
          </p>
        </div>

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

        <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-800 rounded-xl p-4 mb-8">
          <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed">
            <strong>Important:</strong> This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
          </p>
        </div>

        <h2 className="text-xl font-semibold text-warm-900 dark:text-warm-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/dast-10-score-interpretation" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Score Guide</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Understand what DAST-10 scores mean</p>
          </Link>
          <Link href="/cage-aid-substance-abuse-screening" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Screening</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Alcohol and drug screening available now</p>
          </Link>
          <Link href="/who-assist-substance-screening" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">WHO ASSIST</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Comprehensive substance use screening</p>
          </Link>
          <Link href="/audit-vs-dast-10" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT vs. DAST-10</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Alcohol vs. drug screening tools compared</p>
          </Link>
        </div>
      </main>
    </>
  );
}
