import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "@/lib/metadata";

const PAGE_PATH = "/methodology";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TODAY = new Date().toISOString().substring(0, 10);

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Methodology: How MindCheck Tools Selects and Scores Screening Instruments",
  description:
    "How MindCheck Tools chooses validated screening instruments, preserves official scoring, protects health data, and what the site is and is not. Reviewed by Jason Ramirez, CADC-II.",
  keywords: [
    "screening tool methodology",
    "validated mental health screeners",
    "PHQ-9 GAD-7 scoring",
    "clinical reviewer mental health",
    "screening instrument standards",
  ],
});

function authorPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jason Ramirez",
    jobTitle: "CADC-II Certified Drug and Alcohol Counselor",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "CADC-II",
    },
    url: `${SITE_URL}/about/jason-ramirez`,
    worksFor: {
      "@type": "Organization",
      name: `${SITE_NAME} / Your Friendly Developer LLC`,
      url: SITE_URL,
    },
    description:
      "Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience. Clinical reviewer for MindCheck Tools.",
  };
}

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Methodology: How MindCheck Tools Selects and Scores Screening Instruments",
    description:
      "Selection criteria, scoring fidelity, privacy practices, and the role of the clinical reviewer for MindCheck Tools.",
    datePublished: "2026-04-26",
    dateModified: TODAY,
    author: authorPersonJsonLd(),
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
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
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
        Last updated: {TODAY}. Reviewed by Jason Ramirez, CADC-II.
      </p>

      <div
        role="note"
        className="mb-8 px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 text-sm text-amber-800 dark:text-amber-300"
      >
        <strong>Important:</strong> Screeners on this site are educational. They
        are not diagnostic instruments and they do not replace evaluation by a
        qualified clinician. If you are in crisis, call or text{" "}
        <strong>988</strong> in the United States, text{" "}
        <strong>HOME to 741741</strong>, or call SAMHSA at{" "}
        <strong>1-800-662-4357</strong>.
      </div>

      <article className="prose-medical text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          Why this page exists
        </h2>
        <p>
          Mental health screening is a high-stakes context. People who reach
          this site are often worried about themselves or someone they love.
          They deserve to know exactly what they are using, who reviewed it,
          and what the limits are. This page documents the standards every
          screening tool on MindCheck Tools is held to before it goes live.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          How instruments are selected
        </h2>
        <p>
          A screening instrument only makes it onto MindCheck Tools if it meets
          all of the following criteria:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Peer-reviewed validation.</strong> The instrument has at
            least one validation study published in a peer-reviewed journal,
            with reported sensitivity and specificity in a defined population.
          </li>
          <li>
            <strong>Established use.</strong> It is in active clinical or
            research use, cited in published guidelines, or distributed by a
            credible body such as the developing authors, a professional
            association, or a public agency.
          </li>
          <li>
            <strong>Permissive licensing.</strong> The instrument is in the
            public domain, released under a free-use license by the developers,
            or otherwise permitted for non-commercial public-facing screening
            use. Items requiring a paid license are not hosted.
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

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          How scoring is preserved
        </h2>
        <p>
          The items, response options, and scoring algorithm of each instrument
          are reproduced as published. Wording, item order, response anchors,
          reverse-scored items, and threshold cutoffs are kept faithful to the
          source paper or the developer-distributed version. The site does not
          shorten validated instruments, swap items, alter the response scale,
          or invent new severity bands.
        </p>
        <p>
          Where multiple recognized cutoffs exist (for example, the AUDIT cutoff
          of 8 versus 7 for women and adults over 65, or the PHQ-9 cutoff of 10
          versus DSM-based algorithms), the site reports the cutoff used and
          notes the alternatives. Score interpretation pages describe what each
          band means in plain language without converting a screening score
          into a diagnosis.
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
          No health-related answers from any screener on this site are sent to
          advertising networks, social platforms, or third-party trackers.
          Aggregate site analytics, where present, are limited to standard page
          metrics and never include the content of your responses.
        </p>

        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3">
          The clinical reviewer
        </h2>
        <p>
          All screening tools and their accompanying score interpretation pages
          are reviewed by{" "}
          <Link
            href="/about/jason-ramirez"
            className="text-sage-700 dark:text-sage-400 hover:underline"
          >
            Jason Ramirez, CADC-II
          </Link>
          , a Certified Drug and Alcohol Counselor with 11 years of clinical
          experience in substance use and mental health counseling. The review
          checks that items match the published instrument, that the scoring
          and bands match the source paper, that the language used to describe
          results stays educational rather than diagnostic, and that crisis
          resources are present where they are needed.
        </p>
        <p>
          Clinical review does not turn an educational screener into a
          diagnostic test. It is a quality control step on top of source
          fidelity, not a substitute for evaluation by your own clinician.
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
            with the source study, validated population, and cutoffs for each
            instrument.
          </li>
          <li>
            <Link
              href="/about/jason-ramirez"
              className="text-sage-700 dark:text-sage-400 hover:underline"
            >
              About the clinical reviewer
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
        </ul>
      </article>
    </main>
  );
}
