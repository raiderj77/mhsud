import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "@/lib/metadata";
import { SITE_AUTHOR } from "@/config/author";

const PAGE_PATH = "/methodology";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TODAY = "2026-09-05";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Methodology: How MindCheck Tools Selects and Scores Screening Instruments",
  description:
    "How MindCheck Tools distinguishes published screeners from original educational tools, checks intended-use rights, protects browser-local responses, and describes review limits.",
  keywords: [
    "screening tool methodology",
    "validated mental health screeners",
    "PHQ-9 GAD-7 scoring",
    "screening editorial review scope",
    "screening instrument standards",
  ],
});

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Methodology: How MindCheck Tools Selects and Scores Screening Instruments",
    description:
      "Evidence, intended-use rights, privacy practices, and editorial review limits for MindCheck Tools.",
    datePublished: "2026-04-26",
    dateModified: TODAY,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: PAGE_URL,
  };
}

export default function MethodologyPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Methodology", url: PAGE_URL },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-6"
      >
        <Link href="/" className="hover:text-sage-700 dark:hover:text-sage-400">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-neutral-700 dark:text-neutral-300">Methodology</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight mb-3">
        Methodology: How MindCheck Tools Works
      </h1>

      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Editorial corrections: {TODAY}. Site owner: Jason Ramirez, CADC-II.
      </p>

      <div
        role="note"
        className="mb-8 px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 text-sm text-amber-800 dark:text-amber-300"
      >
        <strong>Important:</strong> Screeners on this site are educational. They
        are not diagnostic instruments and they do not replace evaluation by a
        qualified clinician. For immediate crisis support in the United States,{" "}
        <a href="tel:988" className="underline">call 988</a> or <a href="sms:988" className="underline">text 988</a>,
        or text <strong>HOME to 741741</strong>. For immediate danger, call{" "}
        <a href="tel:911" className="underline">911</a> in the U.S. or your local emergency number elsewhere.
        <p className="mt-2">For U.S. treatment referral and information,{" "}
          <a href="tel:18006624357" className="underline">call 1-800-662-4357</a>{" "}
          (<a href="https://www.samhsa.gov/find-help/helplines/national-helpline" className="underline" referrerPolicy="no-referrer">SAMHSA National Helpline</a>).
          This is not crisis counseling. <Link href="/crisis-resources" className="underline">Find crisis and international support resources.</Link>
        </p>
      </div>

      <article className="prose-medical text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          Why this page exists
        </h2>
        <p>
          Mental health screening is a high-stakes context. People who reach
          this site are often worried about themselves or someone they love.
          They deserve to know exactly what they are using, who reviewed it,
          and what the limits are. This page describes the site&apos;s editorial
          standards; it does not certify every implementation or replace a
          page-specific evidence and review record.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          How instruments are selected
        </h2>
        <p>
          Published instruments are assessed separately for evidence, rights,
          implementation fidelity, and suitability for this public setting:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Peer-reviewed validation.</strong> The instrument has at
            least one validation study published in a peer-reviewed journal,
            in a defined population. Relevant measures differ by purpose:
            not every well-being or research scale has diagnostic sensitivity
            and specificity. Evidence for an instrument does not validate this
            website&apos;s implementation or every population.
          </li>
          <li>
            <strong>Established use.</strong> It is in active clinical or
            research use, cited in published guidelines, or distributed by a
            credible body such as the developing authors, a professional
            association, or a public agency.
          </li>
          <li>
            <strong>Intended-use rights.</strong> Terms must cover the exact version,
            reproduction, electronic administration, scoring, and the site&apos;s
            actual commercial context. Free access does not by itself mean
            noncommercial use. Permission for one version or setting does not
            transfer automatically to another. Unresolved permission is not
            clearance; information-only pages do not administer the instrument.
            See the <Link href="/for-professionals/screening-instrument-rights-guide" className="text-sage-700 dark:text-sage-400 underline">instrument-rights guide</Link>.
          </li>
          <li>
            <strong>Traceable source.</strong> The original publication can be
            cited and, where possible, linked to PubMed. The full citation is
            documented on the{" "}
            <Link
              href="/clinical-evidence"
              className="text-sage-700 dark:text-sage-400 hover:underline"
            >
              clinical evidence
            </Link>{" "}
            page.
          </li>
        </ul>
        <p>
          MindCheck Tools also publishes original educational self-reflection
          tools, calculators, worksheets, and skills-practice aids. Those pages
          are labeled as educational or reflective, do not claim clinical
          validation, and are not included in the clinical-evidence directory
          unless a named published instrument is actually implemented.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          How scoring is preserved
        </h2>
        <p>
          For an interactive published instrument, the implementation should be
          checked against its exact authorized source version: wording, order,
          response options, reverse scoring, and interpretation boundaries.
          Automated tests check defined software behavior; they do not establish
          clinical validity or prove that every implementation detail has been
          independently reviewed. Information-only pages do not score responses.
        </p>
        <p>
          Interpretation depends on the exact instrument, study population,
          setting, and purpose. Page-specific sources and limitations matter;
          a screening result is not a diagnosis. Changing instrument items,
          response scales, thresholds, or scoring requires a separate rights
          and qualified-review check, not merely an editorial update.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          How your responses are handled
        </h2>
        <p>
          Screeners run in your browser. Your answers are scored on the device
          you are using. The site does not transmit your individual responses
          to any server, does not store them in a database, and does not
          require an account to use any tool. Closing the page or reloading it
          discards the responses unless a tool offers an explicit local-save
          option, in which case the data stays in your own browser storage.
        </p>
        <p>
          MindCheck Tools does not use display advertising. Optional Vercel Web
          Analytics is restricted to an explicit neutral-page allowlist, strips
          query strings and fragments, and is suppressed under Global Privacy
          Control. Screening, condition-specific education, and crisis pages are excluded.
          Ordinary hosting and security requests still occur. See the{" "}
          <Link href="/privacy" className="text-sage-700 dark:text-sage-400 underline">privacy policy</Link> for the limits of browser-local processing.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          Editorial oversight and review limits
        </h2>
        <p>
          The site is maintained by{" "}
          <Link
            href="/about/jason-ramirez"
            className="text-sage-700 dark:text-sage-400 hover:underline"
          >
            Jason Ramirez, CADC-II
          </Link>
          , a {SITE_AUTHOR.credentialFull}. His role and stated experience are
          described on his profile. A named reviewer, review date, and scope
          should be recorded for the specific content reviewed; ownership or
          a site-wide byline is not evidence of review of every page.
        </p>
        <p>
          CADC-II is a substance use counseling certification, not a physician,
          psychologist, psychiatrist, or independent mental health license.
          Source checking and software tests do not replace topic-qualified
          clinical review. The September 5 editorial corrections do not claim
          a new clinical review or independent credential verification.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          What MindCheck Tools is not
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            It is not a diagnostic service. A score on a screener is a starting
            point for a conversation with a qualified clinician, not a
            diagnosis.
          </li>
          <li>
            It is not a substitute for a clinical evaluation, a therapy
            session, a medication consultation, or a treatment plan.
          </li>
          <li>
            It is not a crisis service. If you or someone near you is in
            immediate danger, contact emergency services, or use the crisis
            lines listed at the top of this page and on every screener page.
          </li>
          <li>
            It is not a covered medical service for billing or insurance
            purposes.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          Updates and corrections
        </h2>
        <p>
          When a screening instrument is revised by its authors, when new
          validation evidence is published, or when a citation is found to be
          inaccurate, the corresponding tool page and the{" "}
          <Link
            href="/clinical-evidence"
            className="text-sage-700 dark:text-sage-400 hover:underline"
          >
            clinical evidence
          </Link>{" "}
          page are updated and the &quot;last updated&quot; date is reset. To
          report an error, use the{" "}
          <Link
            href="/contact"
            className="text-sage-700 dark:text-sage-400 hover:underline"
          >
            contact page
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          See also
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <Link
              href="/clinical-evidence"
              className="text-sage-700 dark:text-sage-400 hover:underline"
            >
              Clinical evidence
            </Link>{" "}
            with source studies, populations, limitations, and rights notes.
          </li>
          <li>
            <Link
              href="/about/jason-ramirez"
              className="text-sage-700 dark:text-sage-400 hover:underline"
            >
              About the site owner and review scope
            </Link>
            .
          </li>
          <li>
            <Link
              href="/crisis-resources"
              className="text-sage-700 dark:text-sage-400 hover:underline"
            >
              Crisis resources
            </Link>{" "}
            for immediate help.
          </li>
          <li>
            <Link
              href="/for-professionals/screening-implementation-checklist"
              className="text-sage-700 dark:text-sage-400 hover:underline"
            >
              Screening implementation checklist
            </Link>{" "}
            for product and implementation teams.
          </li>
        </ul>
      </article>
    </div>
  );
}
