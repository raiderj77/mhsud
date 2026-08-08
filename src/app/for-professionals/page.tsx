import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, SITE_NAME, SITE_URL } from "@/lib/metadata";

const PAGE_PATH = "/for-professionals";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED = "2026-08-06";

const FAQS = [
  {
    question: "Does the review require patient records or assessment results?",
    answer:
      "No. The proposed review uses public pages or a fictional, non-sensitive staging environment. Do not send patient records, assessment answers, scores, diagnoses, or other health information.",
  },
  {
    question: "Is this a legal, clinical, security, or accessibility certification?",
    answer:
      "No. It is a bounded technical and content-readiness review. Findings that require legal advice, clinical validation, a penetration test, or formal accessibility conformance must be handled by appropriately qualified professionals.",
  },
  {
    question: "Can the review grant permission to use a screening instrument?",
    answer:
      "No. The review can organize current authoritative evidence and identify missing permission records, but only the instrument owner or authorized publisher can grant rights.",
  },
  {
    question: "What does the deliverable include?",
    answer:
      "The proposed deliverable is a prioritized evidence register covering public routes, instrument-rights records, citations, crisis and non-diagnostic safeguards, privacy and third-party requests, accessibility, crawlability, and release gates.",
  },
];

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Mental Health Screening Implementation Review",
  description:
    "A fixed-scope technical readiness review for digital-health and behavioral-health software teams. Public or fictional staging evidence only; no patient data accepted.",
  keywords: [
    "mental health screening implementation review",
    "behavioral health software review",
    "screening instrument website audit",
    "digital health privacy review",
    "mental health app accessibility review",
  ],
});

function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mental Health Screening Implementation Readiness Review",
    description:
      "A bounded technical and content-readiness review using public or fictional staging evidence without patient records, assessment answers, or scores.",
    url: PAGE_URL,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Digital-health and behavioral-health software teams",
    },
    dateModified: LAST_UPDATED,
  };
}

const REVIEW_AREAS = [
  {
    title: "Public journey inventory",
    text: "Canonical routes, entry states, informational versus interactive boundaries, crawl directives, and mobile and desktop behavior.",
  },
  {
    title: "Instrument rights evidence",
    text: "Authoritative owner or publisher terms, exact-version records, missing approvals, and commercial-use gates without reproducing restricted items.",
  },
  {
    title: "Privacy and network boundary",
    text: "Data-flow claims, browser storage, request metadata, analytics and advertising isolation, sharing behavior, and third-party requests.",
  },
  {
    title: "Safety and clinical limits",
    text: "Crisis actions, non-diagnostic language, result-copy boundaries, reviewer scope, and findings that require topic-qualified review.",
  },
  {
    title: "Accessibility and usability",
    text: "Keyboard entry, labels, focus behavior, result announcements, touch targets, narrow-screen layout, and printable-state risks.",
  },
  {
    title: "Discovery and release controls",
    text: "Titles, canonicals, sitemap and indexing state, internal discovery, structured data, release checks, and prioritized remediation.",
  },
];

export default function ForProfessionalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "For Professionals", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          <Link href="/" className="hover:text-sage-700 dark:hover:text-sage-400">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-700 dark:text-neutral-300">For Professionals</span>
        </nav>

        <header className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-sage-700 dark:text-sage-400 mb-3">
            For digital-health and behavioral-health software teams
          </p>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-5">
            Screening implementation readiness review
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            A fixed-scope technical and content review for public-facing mental-health or substance-use screening journeys. The review uses public pages or fictional staging evidence and returns a prioritized evidence register.
          </p>
          <div className="grid gap-3 sm:grid-cols-3 mb-8 text-sm">
            {[
              "No patient data accepted",
              "No answers or scores collected",
              "Verified evidence separated from unknowns",
            ].map((label) => (
              <div key={label} className="card p-4 font-medium text-neutral-700 dark:text-neutral-200">
                {label}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@mindchecktools.com?subject=Professional%20screening%20implementation%20review"
              className="btn-primary"
            >
              Request a scope review
            </a>
            <Link href="/for-professionals/screening-implementation-checklist" className="btn-secondary">
              Use the free checklist
            </Link>
            <Link href="/for-professionals/screening-instrument-rights-guide" className="btn-secondary">
              Check instrument rights
            </Link>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
            Do not email patient records, assessment answers, scores, diagnoses, or other health information.
          </p>
        </header>

        <section aria-labelledby="review-areas" className="mb-14">
          <h2 id="review-areas" className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            What the proposed review covers
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEW_AREAS.map((area) => (
              <article key={area.title} className="card p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{area.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{area.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="process" className="mb-14 max-w-4xl">
          <h2 id="process" className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            A bounded three-step process
          </h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {[
              ["1", "Confirm scope", "Name the public routes, instrument list, staging boundary, and questions the review should answer."],
              ["2", "Review fictional evidence", "Inspect public or non-sensitive staging states without entering real answers or generating real assessment results."],
              ["3", "Deliver the register", "Separate verified evidence, inference, unknowns, release blockers, and the highest-value remediation steps."],
            ].map(([number, title, text]) => (
              <li key={number} className="card p-6 list-none">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-950/40 text-sage-700 dark:text-sage-300 font-bold mb-4">{number}</span>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="limits" className="mb-14 rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20 p-6 sm:p-8">
          <h2 id="limits" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Exact limits
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            This is a technical and content-readiness review, not a legal opinion, clinical validation, instrument licence, penetration test, accessibility certification, diagnosis, or assurance of regulatory compliance.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li>Only an instrument owner or authorized publisher can grant reuse permission.</li>
            <li>Clinical items, scoring, thresholds, crisis branches, and care guidance may require topic-qualified clinical review.</li>
            <li>Legal, privacy, security, and accessibility conclusions must be made by professionals qualified for the exact jurisdiction and scope.</li>
            <li>No review changes production or represents that a product is safe for diagnosis or treatment.</li>
          </ul>
        </section>

        <section aria-labelledby="faq" className="max-w-3xl mb-14">
          <h2 id="faq" className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <article key={faq.question} className="card p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{faq.question}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="next-step" className="max-w-3xl rounded-2xl bg-sage-700 dark:bg-sage-900 p-7 sm:p-9 text-white">
          <h2 id="next-step" className="font-serif text-2xl font-bold mb-3">Start with the scope, not sensitive data</h2>
          <p className="text-sage-50 leading-relaxed mb-5">
            Describe the product, public routes, and business question. Do not include patient records, assessment answers, scores, diagnoses, or other health information.
          </p>
          <a
            href="mailto:hello@mindchecktools.com?subject=Professional%20screening%20implementation%20review"
            className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-5 py-2.5 font-semibold text-sage-800 hover:bg-sage-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Email MindCheck Tools
          </a>
        </section>
      </div>
    </>
  );
}
