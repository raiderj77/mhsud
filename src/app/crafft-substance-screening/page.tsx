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

const PAGE_PATH = "/crafft-substance-screening";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const CRAFFT_TERMS_URL = "https://crafft.org/get-the-crafft/";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "CRAFFT Adolescent Screening Information and Permission Boundary",
  description:
    "Educational information about CRAFFT, its adolescent clinical context, and why MindCheck Tools does not administer or score it without written approval.",
  keywords: [
    "CRAFFT information",
    "CRAFFT permission",
    "adolescent substance use screening education",
    "teen substance use support",
    "CRAFFT reproduction terms",
  ],
  openGraph: {
    title: "CRAFFT Adolescent Screening Information and Permission Boundary",
    description:
      "Why this public page provides CRAFFT education without questions, answer collection, scoring, or automated results.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is CRAFFT?",
    answer:
      "CRAFFT is a copyrighted adolescent substance-use screening instrument developed for use in healthcare settings. It helps trained professionals identify when a young person may need a fuller conversation or evaluation. It is not a diagnosis.",
  },
  {
    question: "Can a teen take CRAFFT on MindCheck Tools?",
    answer:
      "No. Boston Children's Hospital requires a reproduction draft, intended-use description, required notices, and an official approval letter. MindCheck Tools has not archived approval for this implementation, so no questions, answers, scoring, or results are provided.",
  },
  {
    question: "Why does the official CRAFFT guidance emphasize privacy?",
    answer:
      "The official site places CRAFFT in a patient-care context and emphasizes conditions that protect adolescent privacy and confidentiality. A public website cannot promise the same legal or clinical confidentiality as a healthcare relationship.",
  },
  {
    question: "Are AUDIT-C or PHQ-4 replacements for CRAFFT?",
    answer:
      "No. AUDIT-C is an adult-focused alcohol screen, while PHQ-4 addresses depression and generalized anxiety symptoms. Neither is an adolescent combined substance-use screen, and neither can estimate a CRAFFT result.",
  },
  {
    question: "Where can a young person or family find help?",
    answer:
      "A pediatrician, adolescent-medicine clinician, school health professional, or licensed behavioral-health provider can discuss substance use and confidentiality. In the United States, SAMHSA's National Helpline at 1-800-662-4357 provides treatment information and referrals. Call or text 988 for immediate crisis support.",
  },
];

const ALTERNATIVES = [
  {
    href: "/audit-c-alcohol-screen",
    name: "AUDIT-C Alcohol Screen for Adults",
    description:
      "An alcohol-only screen intended for adult contexts and maintained under a noncommercial boundary. It is not appropriate as a CRAFFT substitute for adolescents.",
  },
  {
    href: "/phq-4-anxiety-depression-screen",
    name: "PHQ-4 Mood and Anxiety Screen",
    description:
      "A separate, publicly permitted symptom screen. It does not assess alcohol or drug use and cannot replace an adolescent substance-use evaluation.",
  },
];

export default function CrafftInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "CRAFFT Adolescent Screening Information and Permission Boundary",
              description:
                "Educational CRAFFT information and the written-approval boundary for electronic reproduction.",
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
              { name: "CRAFFT Information", url: PAGE_URL },
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
          CRAFFT Adolescent Screening Information and Permission Boundary
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          MindCheck Tools does not reproduce, administer, score, or interpret CRAFFT on this public website. This page explains its clinical purpose, confidentiality context, and written-approval requirement without asking a young person about substance use.
        </p>

        <AnswerBlock
          what="An educational overview of CRAFFT and Boston Children's Hospital's written-approval requirements for reproduction."
          who="Young people, families, educators, or clinicians seeking reliable CRAFFT information and safer next steps."
          bottomLine="This page does not provide a CRAFFT questionnaire or result. Adult alcohol and general mood screens are not equivalent, and only a qualified professional can evaluate substance-use concerns."
          lastUpdated="2026-08-05"
        />

        <section className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6" aria-labelledby="crafft-rights-boundary">
          <h2 id="crafft-rights-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">
            Why the public self-check is unavailable
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              Boston Children&apos;s Hospital states that CRAFFT questions are copyright protected. Its reproduction process requires submission of the intended implementation, exact-version and use details, required notices, and an official approval letter. Later changes require reapproval.
            </p>
            <p>
              MindCheck Tools has no archived approval letter or approved screenshot for this public website. The former questionnaire, answer capture, scoring, cutoffs, and result language are therefore unavailable while the informational URL remains public.
            </p>
            <a href={CRAFFT_TERMS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
              Review the official CRAFFT reproduction terms
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-crafft">
          <h2 id="about-crafft" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Clinical and confidentiality context
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              Knight and colleagues developed CRAFFT as an adolescent-focused clinical screen. Its role is to support a private healthcare conversation and identify whether further assessment may be useful, not to label or diagnose a young person.
            </p>
            <p>
              The official CRAFFT guidance emphasizes administration in conditions that protect patient privacy and confidentiality and allow a healthcare provider to use responses in counseling. Confidentiality rules vary by location, age, setting, and safety concern; a public website should not promise legal confidentiality.
            </p>
            <p>
              A pediatric or adolescent-health professional can explain confidentiality before asking sensitive questions and can assess immediate safety, withdrawal risk, medications, mental health, family context, and appropriate support.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="crafft-alternatives">
          <h2 id="crafft-alternatives" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Different, non-equivalent options
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            No linked self-check duplicates CRAFFT&apos;s adolescent substance-use purpose. These options address narrower or different concerns and should not be used to estimate a CRAFFT result.
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

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="crafft-privacy">
          <h2 id="crafft-privacy" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">No-input privacy boundary</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This informational page has no form and asks for no alcohol or drug history, answers, age, name, or score. It calculates and stores no personal result. Review the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before using any linked self-check, especially on a family, school, or shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="crafft-support">
          <h2 id="crafft-support" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">Support for young people and families</h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            In the United States, SAMHSA&apos;s National Helpline provides confidential treatment information at 1-800-662-4357. Call or text 988 for immediate crisis support. For overdose, trouble breathing, unconsciousness, severe withdrawal, or immediate danger in the United States, call 911. Outside the United States, use local emergency or crisis services.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:18006624357" className="inline-flex min-h-11 items-center rounded-lg bg-sage-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sage-800">Call SAMHSA</a>
            <a href="https://findtreatment.gov" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-sage-700 px-4 py-2 text-sm font-semibold text-sage-800 dark:text-sage-200">FindTreatment.gov</a>
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 988</a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Text 988</a>
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 911</a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">View crisis resources: U.S. and international</Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="crafft-sources">
          <h2 id="crafft-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              Center for Adolescent Behavioral Health Research, Boston Children&apos;s Hospital. <a href={CRAFFT_TERMS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Official CRAFFT versions and reproduction terms</a>.
            </li>
            <li>
              Knight, J. R., et al. (1999). A new brief screen for adolescent substance abuse. <a href="https://pubmed.ncbi.nlm.nih.gov/10357299/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">PubMed PMID 10357299</a>.
            </li>
            <li>
              Substance Abuse and Mental Health Services Administration. <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="font-semibold underline">National Helpline</a>.
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="crafft-faq">
          <h2 id="crafft-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Frequently asked questions</h2>
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
