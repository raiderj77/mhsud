import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, createMetadata, SITE_URL } from "@/lib/metadata";
import { PrintSampleButton } from "./PrintSampleButton";

const PAGE_PATH = "/for-professionals/sample-readiness-review";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Fictional Screening Readiness Review Sample",
  description: "A fictional, printable example of the MindCheck Tools Privacy and Screening Readiness Review. No patient data, assessment answers, scores, or diagnoses.",
  keywords: ["screening readiness review sample", "mental health app privacy checklist", "digital health screening audit example"],
});

const findings = [
  {
    priority: "P0",
    area: "Privacy",
    evidence: "A fictional analytics tag loads on a condition-named questionnaire route before consent.",
    risk: "The page URL and request metadata can disclose a sensitive health interest even without custom answer parameters.",
    action: "Remove optional third-party code from every questionnaire, result, crisis, youth, and condition-specific route; verify with a browser-network test.",
  },
  {
    priority: "P1",
    area: "Instrument rights",
    evidence: "The fictional team has a validation paper but no owner terms for public electronic administration.",
    risk: "Validation does not grant reproduction or commercial-use rights.",
    action: "Keep the public URL informational-only until authoritative permission is archived. Do not reproduce items while researching rights.",
  },
  {
    priority: "P1",
    area: "Clinical limits",
    evidence: "The fictional result calls a screening threshold a diagnosis.",
    risk: "A screening score cannot replace a comprehensive clinical evaluation.",
    action: "Use source-aligned, non-diagnostic result language and obtain topic-qualified review before release.",
  },
  {
    priority: "P2",
    area: "Accessibility",
    evidence: "The fictional answer controls are 36 pixels high and expose no selected state to assistive technology.",
    risk: "Touch and keyboard users may be unable to complete the journey accurately.",
    action: "Use semantic radio controls, 44-pixel targets, visible focus, and announced validation and result states.",
  },
];

export default function SampleReadinessReviewPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
        { name: "Home", url: SITE_URL },
        { name: "For Professionals", url: `${SITE_URL}/for-professionals` },
        { name: "Fictional Sample", url: PAGE_URL },
      ])) }} />

      <nav aria-label="Breadcrumb" className="no-print mb-8 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/for-professionals">For Professionals</Link><span aria-hidden="true">/</span>
        <span className="text-neutral-700 dark:text-neutral-300">Fictional Sample</span>
      </nav>

      <header className="mb-10 border-b border-sand-200 pb-8 dark:border-neutral-700">
        <p className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">Fictional sample</p>
        <h1 className="mt-4 font-serif text-display font-bold text-neutral-900 dark:text-neutral-50">Privacy and Screening Readiness Review</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          This sample shows the structure and level of detail of a bounded review. The company, product, routes, evidence, and findings are invented. It contains no patient records, assessment answers, scores, diagnoses, personal data, or real client information.
        </p>
        <div className="no-print mt-6"><PrintSampleButton /></div>
      </header>

      <section className="mb-10">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">1. Agreed scope</h2>
        <dl className="mt-5 grid gap-4 rounded-xl border border-sand-200 bg-sand-50 p-5 text-sm dark:border-neutral-700 dark:bg-night-800 sm:grid-cols-2">
          <div><dt className="font-semibold">Fictional organization</dt><dd>Harbor Lantern Digital Health</dd></div>
          <div><dt className="font-semibold">Routes</dt><dd>Homepage plus four fictional staging routes</dd></div>
          <div><dt className="font-semibold">Instrument family</dt><dd>One unnamed published adult screener; no items reproduced</dd></div>
          <div><dt className="font-semibold">States inspected</dt><dd>Public mobile and desktop entry states only</dd></div>
        </dl>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">2. Executive status</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300"><strong>RED — not ready for public administration.</strong> The fictional release is blocked by a sensitive-route third-party request, missing electronic-use rights evidence, and diagnostic result wording. The public URL may remain useful as an information-only page while those gates are resolved.</p>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">3. Prioritized findings</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-sand-200 dark:border-neutral-700">
          <table className="min-w-[900px] w-full border-collapse text-left text-sm">
            <thead className="bg-sand-100 dark:bg-night-800"><tr>{["Priority", "Area", "Verified fictional evidence", "Why it matters", "Recommended action"].map((heading) => <th key={heading} scope="col" className="px-4 py-3 font-semibold">{heading}</th>)}</tr></thead>
            <tbody className="divide-y divide-sand-200 dark:divide-neutral-700">{findings.map((finding) => (
              <tr key={`${finding.priority}-${finding.area}`} className="align-top">
                <td className="px-4 py-4 font-bold">{finding.priority}</td><td className="px-4 py-4 font-semibold">{finding.area}</td><td className="px-4 py-4">{finding.evidence}</td><td className="px-4 py-4">{finding.risk}</td><td className="px-4 py-4">{finding.action}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6"><h2 className="font-serif text-xl font-bold">Verified evidence</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-sm"><li>Public entry routes respond and render one H1.</li><li>The fictional assessment currently requests an unapproved third-party domain.</li><li>No written electronic-use grant is in the fictional evidence folder.</li></ul></div>
        <div className="card p-6"><h2 className="font-serif text-xl font-bold">Unknowns and human decisions</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-sm"><li>Whether the instrument owner will grant the intended use.</li><li>Whether a topic-qualified clinician will approve every result branch.</li><li>Applicable law, contract terms, insurance, and formal conformance.</li></ul></div>
      </section>

      <section className="mb-10 rounded-xl border border-sage-200 bg-sage-50 p-6 dark:border-sage-800 dark:bg-sage-950/20">
        <h2 className="font-serif text-2xl font-bold">4. Release gate</h2>
        <p className="mt-3">Do not publish the fictional interactive journey until rights, clinical, privacy, crisis, accessibility, security, and owner approval gates are documented. A later review would verify the repaired entry states and network boundary without using real health data.</p>
      </section>

      <footer className="border-t border-sand-200 pt-6 text-sm text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
        <p><strong>Sample limitation:</strong> This document demonstrates format only. It is not legal advice, clinical validation, an instrument licence, a penetration test, formal accessibility certification, or a representation that any real product is compliant or safe.</p>
        <p className="mt-3 no-print"><Link href="/for-professionals" className="font-semibold text-sage-700 hover:underline dark:text-sage-400">Return to the review scope and founding price</Link></p>
      </footer>
    </article>
  );
}
