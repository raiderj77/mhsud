import type { Metadata } from "next";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import {
  breadcrumbJsonLd,
  createMetadata,
  faqJsonLd,
  medicalWebPageJsonLd,
  SITE_URL,
} from "@/lib/metadata";

const PAGE_PATH = "/cage-aid-substance-abuse-screening";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const UW_CAGE_AID_URL = "https://www.hiv.uw.edu/page/substance-use/cage-aid";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "CAGE-AID Substance Use Information and Rights Boundary",
  description:
    "Educational CAGE-AID information, why MindCheck Tools does not reproduce or score the form publicly, and non-equivalent support and screening options.",
  keywords: [
    "CAGE-AID information",
    "CAGE-AID rights",
    "substance use screening education",
    "alcohol and drug screening information",
    "substance use support",
  ],
  openGraph: {
    title: "CAGE-AID Substance Use Information and Rights Boundary",
    description:
      "Why this site provides CAGE-AID information without questions, answer collection, scoring, or automated interpretation.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the CAGE-AID?",
    answer:
      "The CAGE Adapted to Include Drugs, or CAGE-AID, is a published clinical screening measure intended to flag possible alcohol- or drug-related concerns that may warrant fuller evaluation. It is not a diagnostic instrument.",
  },
  {
    question: "Can I take the CAGE-AID on MindCheck Tools?",
    answer:
      "No. An authoritative university curriculum displays the form, but that availability does not grant MindCheck Tools third-party public electronic reproduction or commercial rights. No owner grant covering this website is archived, so the questions, answers, scoring, and results are not provided.",
  },
  {
    question: "Why is there no score or cutoff information?",
    answer:
      "Scoring and result language are part of the instrument implementation. They are omitted until exact version parity, reproduction terms, and qualified clinical review are documented.",
  },
  {
    question: "Are the AUDIT or AUDIT-C equivalent to CAGE-AID?",
    answer:
      "No. AUDIT and AUDIT-C focus on alcohol and use different questions, timeframes, and interpretation. CAGE-AID covers both alcohol and other drugs. Results cannot be translated between them.",
  },
  {
    question: "Where can I get confidential substance-use support?",
    answer:
      "In the United States, SAMHSA's National Helpline at 1-800-662-4357 provides free, confidential treatment information and referrals. FindTreatment.gov lists treatment services. Call or text 988 for immediate crisis support.",
  },
];

const ALTERNATIVES = [
  {
    href: "/audit-c-alcohol-screen",
    name: "AUDIT-C Alcohol Screen",
    description:
      "A separate, alcohol-only screening route maintained under a noncommercial public-use boundary. It does not assess other drug use and is not equivalent to CAGE-AID.",
  },
  {
    href: "/audit-alcohol-test",
    name: "AUDIT Alcohol Self-Check",
    description:
      "A longer WHO alcohol screen maintained as an ad-free, noncommercial experience. It does not replace a combined alcohol-and-drug evaluation.",
  },
  {
    href: "/phq-4-anxiety-depression-screen",
    name: "PHQ-4 Mood and Anxiety Screen",
    description:
      "A publicly permitted screen for recent depression and anxiety symptoms. It does not assess substance use or explain its causes.",
  },
];

export default function CageAidInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "CAGE-AID Substance Use Information and Rights Boundary",
              description:
                "Educational information about CAGE-AID and the unresolved third-party public electronic reproduction boundary.",
              url: PAGE_URL,
              lastReviewed: "2026-08-02",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "CAGE-AID Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-wrap gap-2 mb-5" aria-label="Page status">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Educational information</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">No questionnaire</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">No scoring</span>
        </div>

        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          CAGE-AID Substance Use Information and Rights Boundary
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          MindCheck Tools does not reproduce, administer, score, or interpret the CAGE-AID on this public website. This page explains its purpose and the unresolved rights boundary without asking about your substance use.
        </p>

        <AnswerBlock
          what="An educational overview of CAGE-AID and why public electronic reproduction is unavailable without documented permission."
          who="Adults seeking reliable CAGE-AID information, separate alcohol-screening options, or confidential substance-use support."
          bottomLine="This page does not provide a questionnaire or result. AUDIT, AUDIT-C, and PHQ-4 are different instruments and cannot substitute for CAGE-AID or a professional evaluation."
          lastUpdated="2026-08-05"
        />

        <section className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6" aria-labelledby="cage-rights-boundary">
          <h2 id="cage-rights-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">
            Why the public self-check is unavailable
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              The University of Washington&apos;s federally funded National HIV Curriculum publicly displays and administers CAGE-AID and identifies its developers. That page does not grant unrelated third parties permission to reproduce the instrument on a public consumer or commercial website.
            </p>
            <p>
              MindCheck Tools has no archived owner or publisher grant covering public electronic reproduction, answer capture, automated scoring, or interpretation. Public access to this information page remains available while those instrument mechanics are omitted.
            </p>
            <a href={UW_CAGE_AID_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
              Review the University of Washington CAGE-AID source
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-cage-aid">
          <h2 id="about-cage-aid" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What CAGE-AID is designed to do
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              Brown and Rounds studied CAGE-AID as a brief way to screen jointly for possible alcohol- and other drug-related concerns in primary care. A screen can identify a reason for a fuller conversation; it cannot determine whether someone has a substance use disorder.
            </p>
            <p>
              A qualified clinician considers current use, safety, medications, withdrawal risk, health conditions, functional impact, and the person&apos;s goals. Seek medical guidance before abruptly stopping alcohol, benzodiazepines, or another substance when withdrawal may be dangerous.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="cage-alternatives">
          <h2 id="cage-alternatives" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Separate, non-equivalent options
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            These tools address narrower or different concerns. They do not reproduce CAGE-AID, assess the same scope, or estimate a CAGE-AID result.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {ALTERNATIVES.map((alternative) => (
              <Link key={alternative.href} href={alternative.href} className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">{alternative.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{alternative.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="cage-privacy">
          <h2 id="cage-privacy" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">No-input privacy boundary</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This informational page has no form and asks for no substance-use history, answers, or score. It calculates and stores no personal result. Review the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before using any linked self-check, particularly on a shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="cage-support">
          <h2 id="cage-support" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">Confidential support and urgent help</h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            In the United States, SAMHSA&apos;s National Helpline provides confidential treatment information at 1-800-662-4357. Call or text 988 for immediate crisis support. For overdose, severe withdrawal, trouble breathing, unconsciousness, or immediate danger in the United States, call 911. Outside the United States, use local emergency or crisis services.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:18006624357" className="inline-flex min-h-11 items-center rounded-lg bg-sage-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sage-800">Call SAMHSA</a>
            <a href="https://findtreatment.gov" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-sage-700 px-4 py-2 text-sm font-semibold text-sage-800 dark:text-sage-200">FindTreatment.gov</a>
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 988</a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Text 988</a>
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 911</a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">View U.S. and international crisis resources</Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="cage-sources">
          <h2 id="cage-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              University of Washington National HIV Curriculum. <a href={UW_CAGE_AID_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">CAGE-AID Questionnaire source page</a>.
            </li>
            <li>
              Brown, R. L., &amp; Rounds, L. A. (1995). Conjoint screening questionnaires for alcohol and other drug abuse. <a href="https://pubmed.ncbi.nlm.nih.gov/7778330/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">PubMed PMID 7778330</a>.
            </li>
            <li>
              Substance Abuse and Mental Health Services Administration. <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="font-semibold underline">National Helpline</a>.
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="cage-faq">
          <h2 id="cage-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQ_DATA.map((entry) => (
              <div key={entry.question}>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{entry.question}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{entry.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
