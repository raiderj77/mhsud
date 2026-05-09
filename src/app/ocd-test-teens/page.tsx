import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

const TOOL_URL = `${SITE_URL}/ocd-test-teens`;

export const metadata: Metadata = createMetadata({
  path: "/ocd-test-teens",
  title: "OCD Screening for Teens — Under Licensing Review",
  description:
    "The OCI-R OCD screening instrument is temporarily unavailable while we obtain commercial-use clearance. Please consult a qualified mental health professional.",
  keywords: [
    "ocd test for teens", "teen ocd screening", "ocd quiz teenagers",
    "adolescent ocd test", "ocd symptoms teens", "oci-r teens",
    "teen ocd signs", "ocd screening adolescents", "free ocd test teens",
  ],
  robots: { index: false, follow: false },
  openGraph: {
    title: "OCD Screening for Teens — Under Licensing Review",
    description: "The OCI-R OCD screening instrument is temporarily unavailable while we obtain commercial-use clearance.",
    url: TOOL_URL,
    type: "website",
  },
});

export default function OcdTestTeensPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "OCI-R OCD Screening", url: `${SITE_URL}/oci-r-ocd-screening` },
              { name: "OCD Test for Teens", url: TOOL_URL },
            ])
          ),
        }}
      />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-warm-900 dark:text-warm-100 mb-6 text-center">
          OCD Screening for Teens — Under Licensing Review
        </h1>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <p className="text-warm-700 dark:text-warm-300 leading-relaxed">
            This page used the Obsessive-Compulsive Inventory–Revised (OCI-R), a copyrighted symptom inventory. We are pursuing written commercial-use clearance from the rights holder before continuing to publish this tool. In the meantime, if you are a teen experiencing intrusive thoughts or compulsive behaviors that concern you, please talk to a parent, school counselor, or licensed clinician. Our GAD-7 anxiety screening is available as a related tool.
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

        <h2 className="text-xl font-semibold text-warm-900 dark:text-warm-100 mb-4">Related Screening Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/gad-7-anxiety-test" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Test</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Validated anxiety screening available now</p>
          </Link>
          <Link href="/anxiety-test-for-teens" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Anxiety Test for Teens</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Age-specific anxiety screening</p>
          </Link>
          <Link href="/depression-test-for-teens" className="block border border-warm-200 dark:border-warm-700 rounded-xl p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Test for Teens</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">Teen depression screening</p>
          </Link>
        </div>
      </main>
    </>
  );
}
