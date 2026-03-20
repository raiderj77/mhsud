import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

const TOOL_URL = `${SITE_URL}/dast-10-drug-screening`;

export const metadata: Metadata = createMetadata({
  path: "/dast-10-drug-screening",
  title: "DAST-10 Drug Screening — Coming Soon",
  description:
    "The DAST-10 drug screening tool is temporarily unavailable while we obtain licensing permission. Please consult a qualified mental health professional.",
  keywords: [
    "dast-10", "drug abuse screening test", "drug screening test",
    "substance abuse screening", "drug use screening",
  ],
  openGraph: {
    title: "DAST-10 Drug Screening — Coming Soon",
    description: "The DAST-10 drug screening tool is temporarily unavailable while we obtain licensing permission.",
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
          DAST-10 Drug Screening — Coming Soon
        </h1>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <p className="text-warm-700 dark:text-warm-300 leading-relaxed">
            We are currently obtaining licensing permission to offer this screening tool. The Drug Abuse Screening Test (DAST-10) is a validated instrument for identifying drug use problems. We expect to have this tool available soon. In the meantime, please consult with a qualified mental health professional.
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
        <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-800 rounded-xl p-4">
          <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed">
            <strong>Important:</strong> This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
          </p>
        </div>
      </main>
    </>
  );
}
