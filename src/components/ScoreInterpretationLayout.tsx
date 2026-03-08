import Link from "next/link";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { AdSlot } from "@/components/AdSlot";

/* ─── Types ────────────────────────────────────────────────────── */

export interface ScoreRange {
  range: string;
  label: string;
  meaning: string;
  nextStep: string;
  colorClass: string;       // Tailwind bg class for the row
  textColorClass: string;   // Tailwind text class for contrast
}

export interface ScoreBand {
  heading: string;           // e.g. "PHQ-9 Score 0–4: Minimal or No Depression"
  paragraphs: string[];
}

export interface InterpFaq {
  question: string;
  answer: string;
}

export interface RelatedLink {
  name: string;
  description: string;
  href: string;
}

export interface ScoreInterpretationProps {
  testName: string;
  testAbbreviation: string;
  intro: string[];
  scoreRanges: ScoreRange[];
  cannotTellYou: string[];
  scoreBands: ScoreBand[];
  factorsAffecting: string[];
  doctorConversation: string[];
  faqs: InterpFaq[];
  relatedTools: RelatedLink[];
  sources: { text: string; url?: string }[];
  lastUpdated: string;
  toolPageHref: string;
  blogGuideHref?: string;
}

/* ─── Component ────────────────────────────────────────────────── */

export function ScoreInterpretationLayout({
  testName,
  testAbbreviation,
  intro,
  scoreRanges,
  cannotTellYou,
  scoreBands,
  factorsAffecting,
  doctorConversation,
  faqs,
  relatedTools,
  sources,
  lastUpdated,
  toolPageHref,
  blogGuideHref,
}: ScoreInterpretationProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Score Guide</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Evidence-Based</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          {testName} Score Interpretation: What Your Results Mean
        </h1>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">Last updated: {lastUpdated}</p>
      </header>

      {/* Intro */}
      <div className="prose-mh space-y-4 mb-10">
        {intro.map((p, i) => (
          <p key={i} className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{p}</p>
        ))}
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <Link href={toolPageHref} className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300 font-medium">
            Take the {testAbbreviation} self-check now
          </Link>{" "}
          — free, private, and results stay in your browser.
        </p>
      </div>

      {/* Score Ranges Table */}
      <section className="mb-10">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          {testAbbreviation} Score Ranges
        </h2>
        <div className="overflow-x-auto rounded-xl border border-sand-200 dark:border-neutral-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sand-50 dark:bg-night-700">
                <th scope="col" className="px-4 py-3 text-left font-semibold text-neutral-700 dark:text-neutral-200">Score Range</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-neutral-700 dark:text-neutral-200">Severity</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-neutral-700 dark:text-neutral-200">What It Means</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold text-neutral-700 dark:text-neutral-200">Suggested Next Step</th>
              </tr>
            </thead>
            <tbody>
              {scoreRanges.map((r, i) => (
                <tr key={i} className={`${r.colorClass} border-t border-sand-200 dark:border-neutral-700`}>
                  <td className={`px-4 py-3 font-semibold ${r.textColorClass}`}>{r.range}</td>
                  <td className={`px-4 py-3 font-medium ${r.textColorClass}`}>{r.label}</td>
                  <td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">{r.meaning}</td>
                  <td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">{r.nextStep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
          These ranges come from published research. Color and text labels are both provided — color is not the only indicator.
        </p>
      </section>

      {/* What your score cannot tell you */}
      <section className="mb-10">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          What Your {testAbbreviation} Score Cannot Tell You
        </h2>
        <div className="card p-5 sm:p-6 bg-warm-50 dark:bg-warm-950/20 border-warm-200 dark:border-warm-900">
          {cannotTellYou.map((p, i) => (
            <p key={i} className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed mb-2 last:mb-0">{p}</p>
          ))}
        </div>
      </section>

      <AdSlot position="Below Results" className="mb-8" />

      {/* Score-specific subsections */}
      {scoreBands.map((band, i) => (
        <section key={i} className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
            {band.heading}
          </h2>
          {band.paragraphs.map((p, j) => (
            <p key={j} className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">{p}</p>
          ))}
        </section>
      ))}

      {/* Factors that affect your score */}
      <section className="mb-10">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Factors That Can Affect Your {testAbbreviation} Score
        </h2>
        <div className="card p-5 sm:p-6">
          <ul className="space-y-2">
            {factorsAffecting.map((f, i) => (
              <li key={i} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <span className="text-sage-500 mt-0.5 flex-shrink-0">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 leading-relaxed">
            Because of these factors, consider retaking the {testAbbreviation} at a different time or under different circumstances if your score does not feel representative of your typical experience.
          </p>
        </div>
      </section>

      <AdSlot position="Mid Content" className="mb-8" />

      {/* How to use this score in a conversation with your doctor */}
      <section className="mb-10">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          How to Use Your {testAbbreviation} Score in a Conversation With Your Doctor
        </h2>
        {doctorConversation.map((p, i) => (
          <p key={i} className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">{p}</p>
        ))}
        <div className="card p-4 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 mt-4">
          <p className="text-sm text-sage-700 dark:text-sage-400 leading-relaxed">
            <strong>Tip:</strong> You can download a reflection summary from the{" "}
            <Link href={toolPageHref} className="underline hover:text-sage-800 dark:hover:text-sage-300">
              {testAbbreviation} self-check page
            </Link>{" "}
            to bring to your appointment. It includes your score, interpretation, and reflection questions.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
          Frequently Asked Questions About {testAbbreviation} Scores
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                {faq.question}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section className="mb-8">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
        <div className="card p-5 sm:p-6">
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            {sources.map((s, i) => (
              <li key={i}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">
                    {s.text}
                  </a>
                ) : (
                  s.text
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mb-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {relatedTools.map((t) => (
            <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {blogGuideHref && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          For more background, read our{" "}
          <Link href={blogGuideHref} className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">
            complete {testAbbreviation} guide
          </Link>.
        </p>
      )}

      <AdSlot position="Footer" className="mb-8" />

      {/* Crisis Resources */}
      <div className="card p-5 sm:p-6 mb-5">
        <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          If you are struggling, you are not alone. These resources are available 24/7:
        </p>
        <div className="space-y-2.5">
          {[
            { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988", color: "text-crisis-600 dark:text-crisis-400" },
            { label: "SAMHSA Helpline (US)", detail: "1-800-662-4357 — free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
            { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
          ].map((r) => (
            <div key={r.label} className="p-3.5 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700">
              <p className={`text-sm font-semibold ${r.color}`}>{r.label}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Disclaimer */}
      <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
          This page is for educational purposes only. It is not medical advice, a clinical assessment, or a treatment recommendation. Only a qualified healthcare professional can evaluate your mental health.
        </p>
        <ToolReviewerBio />
      </footer>
    </div>
  );
}
