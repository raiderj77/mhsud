import type { ReactNode } from "react";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";

export type InformationAlternative = {
  href: string;
  name: string;
  description: string;
};

export type InformationSource = {
  href: string;
  label: string;
  detail: string;
};

export type InformationFaq = {
  question: string;
  answer: string;
};

type RightsBoundaryInformationPageProps = {
  title: string;
  intro: string;
  what: string;
  who: string;
  bottomLine: string;
  boundaryHeading: string;
  boundaryParagraphs: string[];
  overviewHeading: string;
  overviewParagraphs: string[];
  alternatives: InformationAlternative[];
  sources: InformationSource[];
  faq: InformationFaq[];
  reviewer: ReactNode;
};

export function RightsBoundaryInformationPage({
  title,
  intro,
  what,
  who,
  bottomLine,
  boundaryHeading,
  boundaryParagraphs,
  overviewHeading,
  overviewParagraphs,
  alternatives,
  sources,
  faq,
  reviewer,
}: RightsBoundaryInformationPageProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-wrap gap-2 mb-5" aria-label="Page status">
        <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">
          Educational information
        </span>
        <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">
          No questionnaire
        </span>
        <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">
          No scoring
        </span>
      </div>

      <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
        {title}
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
        {intro}
      </p>

      <AnswerBlock
        what={what}
        who={who}
        bottomLine={bottomLine}
        lastUpdated="2026-08-05"
      />

      <section
        className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6"
        aria-labelledby="rights-boundary"
      >
        <h2 id="rights-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">
          {boundaryHeading}
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
          {boundaryParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="instrument-overview">
        <h2 id="instrument-overview" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          {overviewHeading}
        </h2>
        <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {overviewParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="permitted-alternatives">
        <h2 id="permitted-alternatives" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Separately permitted, non-equivalent options
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          These links serve different purposes and cannot reproduce, replace, or be compared with this instrument. Each option has its own scope, timeframe, limitations, and interpretation.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {alternatives.map((alternative) => (
            <Link
              key={alternative.href}
              href={alternative.href}
              className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors"
            >
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">{alternative.name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{alternative.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5"
        aria-labelledby="privacy-boundary"
      >
        <h2 id="privacy-boundary" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Privacy boundary
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          This page does not ask for symptoms or experiences, collect answers, calculate a score, or produce a personal result. If you open another self-check, review its limits and the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before answering, especially on a shared device.
        </p>
      </section>

      <section
        className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5"
        aria-labelledby="immediate-help"
      >
        <h2 id="immediate-help" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">
          If you need immediate help
        </h2>
        <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
          An informational page or self-check cannot assess an emergency. In the United States, call or text 988 for the Suicide &amp; Crisis Lifeline, or call 911 for immediate danger. Outside the United States, use local emergency or crisis services.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg bg-crisis-700 px-4 py-2 text-sm font-semibold text-white hover:bg-crisis-800">
            Call 988
          </a>
          <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">
            Text 988
          </a>
          <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">
            Call 911
          </a>
          <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">
            U.S. and international crisis resources
          </Link>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="information-sources">
        <h2 id="information-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Sources and rights evidence
        </h2>
        <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                {source.label}
              </a>{" "}
              {source.detail}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10">{reviewer}</div>

      <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="information-faq">
        <h2 id="information-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Frequently asked questions
        </h2>
        <div className="space-y-5">
          {faq.map((entry) => (
            <div key={entry.question}>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{entry.question}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{entry.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
