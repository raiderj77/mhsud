import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, createMetadata, SITE_URL } from "@/lib/metadata";
import { PrintChecklistButton } from "./PrintChecklistButton";

const PAGE_PATH = "/for-professionals/screening-implementation-checklist";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED = "2026-08-06";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Mental Health Screening Website Implementation Checklist",
  description:
    "A free, printable checklist for instrument rights, privacy, crisis safeguards, accessibility, citations, indexing, and fictional release QA.",
  keywords: [
    "mental health screening implementation checklist",
    "behavioral health app privacy checklist",
    "screening instrument licensing checklist",
    "mental health website accessibility checklist",
    "digital health release checklist",
  ],
});

const SECTIONS = [
  {
    title: "1. Define the product boundary",
    items: [
      "Inventory every public route, embedded questionnaire, score guide, result state, comparison page, printable view, and legacy URL.",
      "Label each journey as a published instrument, original educational tool, calculator, worksheet, or information-only page.",
      "State the intended audience, setting, supported languages, and whether minors may use the product.",
      "Separate screening, diagnosis, treatment, emergency care, and general education in both interface copy and internal requirements.",
    ],
  },
  {
    title: "2. Record instrument rights before implementation",
    items: [
      "Save the current owner or authorized publisher source, exact instrument version, access date, and commercial/electronic-use terms.",
      "Do not treat a validation paper, public PDF, citation count, or widespread use as permission to reproduce, administer, score, or monetize an instrument.",
      "Record whether permission is public, noncommercial only, request-based, paid, prohibited for public administration, or unresolved.",
      "Keep rights-limited URLs useful as information pages without reproducing items, response anchors, scoring keys, cutoffs, or automated interpretations.",
    ],
  },
  {
    title: "3. Verify citations and review scope",
    items: [
      "Trace item wording, response options, reverse keys, algorithms, cutoffs, result labels, and limitations to authoritative sources.",
      "Identify a named reviewer, public credentials, exact scope, canonical review date, and topics that require additional qualified review.",
      "Separate what a source directly supports from site interpretation and unresolved questions.",
      "Use one correction path and retain a dated evidence register for future updates or takedown requests.",
    ],
  },
  {
    title: "4. Design the privacy and network boundary",
    items: [
      "Minimize collection. Prefer device-local processing when the product does not need answers or scores on a server.",
      "Map page requests, logs, browser storage, exports, sync, backups, support messages, analytics, advertising, error monitoring, and service providers.",
      "Never send an answer, score, result label, condition or instrument name, sensitive path, crisis action, or retake behavior to advertising or audience systems.",
      "Use privacy-protective defaults, bounded retention, no-referrer behavior on sensitive routes, and accurate public copy that does not promise absolute anonymity.",
    ],
  },
  {
    title: "5. Make crisis and non-diagnostic limits usable",
    items: [
      "Place plain-language non-diagnostic limits before entry and with every result or interpretation.",
      "Provide visible, descriptive crisis actions that work on mobile; keep contact details visible when links fail.",
      "Do not track crisis-link clicks, append campaign parameters, place ads or upsells nearby, or make a questionnaire the gate to urgent help.",
      "Test country and audience assumptions. A U.S. number alone is not sufficient for an international product.",
    ],
  },
  {
    title: "6. Test accessibility across the whole journey",
    items: [
      "Use one clear H1, labelled native controls or complete ARIA patterns, visible focus, logical headings, and keyboard-operable entry and reset flows.",
      "Associate every answer group with its question and expose selection state to assistive technology.",
      "Announce validation errors, progress, and results without unexpectedly moving or trapping focus.",
      "Test narrow screens, zoom, contrast, reduced motion, print states, and adequately sized or spaced targets.",
    ],
  },
  {
    title: "7. Keep discovery accurate",
    items: [
      "Use one self-canonical URL for each maintained journey and preserve useful rights-boundary pages as HTTP 200 when the URL remains relevant.",
      "Align titles, descriptions, visible answers, internal links, structured data, sitemap entries, and AI-discovery files with the actual on-page experience.",
      "Do not publish mass condition or demographic variants, doorway pages, or score claims merely to capture search demand.",
      "Keep sensitive query and page telemetry in access-controlled records rather than public repositories or marketing material.",
    ],
  },
  {
    title: "8. Release with fictional, non-sensitive evidence",
    items: [
      "Run source, type, content, dependency, security-header, canonical, sitemap, and structured-data checks before release.",
      "Exercise desktop, mobile, keyboard, consent, error, reset, print, and representative result branches using fictional inputs only.",
      "Capture network evidence that sensitive routes do not contact unapproved analytics, advertising, affiliate, session-replay, or audience domains.",
      "Stop the release for missing rights evidence, unsupported result language, broken crisis actions, privacy contradictions, or unresolved qualified-review needs.",
    ],
  },
];

const SOURCES = [
  {
    label: "FTC: Mobile Health App Developers, Best Practices",
    href: "https://www.ftc.gov/business-guidance/resources/mobile-health-app-developers-ftc-best-practices",
  },
  {
    label: "FTC: Health Breach Notification Rule guidance",
    href: "https://www.ftc.gov/business-guidance/resources/complying-ftcs-health-breach-notification-rule-0",
  },
  {
    label: "Google Publisher Policies: Personalized advertising",
    href: "https://support.google.com/publisherpolicies/answer/15101728?hl=en",
  },
  {
    label: "W3C: Web Content Accessibility Guidelines 2.2",
    href: "https://www.w3.org/TR/WCAG22/",
  },
  {
    label: "NIST: Secure Software Development Framework",
    href: "https://csrc.nist.gov/pubs/sp/800/218/final",
  },
  {
    label: "988 Lifeline: Official help options",
    href: "https://988lifeline.org/get-help/",
  },
  {
    label: "SAMHSA: Behavioral-health screening implementation in schools",
    href: "https://www.samhsa.gov/resource/ebp/ready-set-go-review-screening-behavioral-health-risk-schools",
  },
];

export default function ScreeningImplementationChecklistPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "For Professionals", url: `${SITE_URL}/for-professionals` },
              { name: "Screening Implementation Checklist", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <nav aria-label="Breadcrumb" className="no-print flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        <Link href="/" className="hover:text-sage-700 dark:hover:text-sage-400">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/for-professionals" className="hover:text-sage-700 dark:hover:text-sage-400">For Professionals</Link>
        <span aria-hidden="true">/</span>
        <span className="text-neutral-700 dark:text-neutral-300">Checklist</span>
      </nav>

      <header className="mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-sage-700 dark:text-sage-400 mb-3">Free printable resource</p>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Mental health screening website implementation checklist
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          A pre-release checklist for rights, evidence, privacy, crisis safeguards, accessibility, discovery, and fictional testing. It contains no instrument items and does not collect answers or scores.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <PrintChecklistButton />
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: <time dateTime={LAST_UPDATED}>August 6, 2026</time>
          </p>
        </div>
      </header>

      <aside className="mb-10 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20 p-5 text-sm text-neutral-700 dark:text-neutral-300" role="note">
        <strong>Scope:</strong> This educational checklist is not legal advice, clinical validation, an instrument licence, a penetration test, or accessibility certification. Exact requirements depend on the instrument, product, audience, data flow, and jurisdiction. Do not send patient records, assessment answers, scores, diagnoses, or other health information when requesting help.
      </aside>

      <div className="space-y-10" id="checklist-content">
        {SECTIONS.map((section) => (
          <section key={section.title} className="break-inside-avoid">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <span aria-hidden="true" className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-neutral-400 dark:border-neutral-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="sources" className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <h2 id="sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Primary sources and standards</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            These sources support the general privacy, security, accessibility, advertising, crisis, and implementation principles above. They do not grant rights to any screening instrument or determine which laws apply to a particular product.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            {SOURCES.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-sage-700 dark:text-sage-400 underline underline-offset-2">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="no-print rounded-2xl bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-900 p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">Need a prioritized evidence register?</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-5">
            MindCheck Tools is preparing a bounded implementation-readiness review for digital-health and behavioral-health software teams using public or fictional staging evidence only.
          </p>
          <Link href="/for-professionals" className="btn-primary">Review the proposed scope</Link>
        </section>
      </div>
    </div>
  );
}
