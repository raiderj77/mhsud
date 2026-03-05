"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Item {
  id: number;
  text: string;
}

const ITEMS: Item[] = [
  { id: 1, text: "I have felt cheerful and in good spirits" },
  { id: 2, text: "I have felt calm and relaxed" },
  { id: 3, text: "I have felt active and vigorous" },
  { id: 4, text: "I woke up feeling fresh and rested" },
  { id: 5, text: "My daily life has been filled with things that interest me" },
];

const SCALE_OPTIONS = [
  { value: 5, label: "All of the time" },
  { value: 4, label: "Most of the time" },
  { value: 3, label: "More than half the time" },
  { value: 2, label: "Less than half the time" },
  { value: 1, label: "Some of the time" },
  { value: 0, label: "At no time" },
];

interface Tier {
  label: string;
  rawRange: string;
  pctRange: string;
  color: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  borderLight: string;
  borderDark: string;
  message: string;
}

const TIERS: Tier[] = [
  {
    label: "High Wellbeing",
    rawRange: "18–25",
    pctRange: "72–100%",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your responses suggest a high level of overall wellbeing over the past two weeks. You have been feeling generally cheerful, rested, engaged, and at ease. This is a positive sign. Continue the habits and routines that support your wellbeing, and remember that periodic check-ins — even when things feel good — can help you notice changes early.",
  },
  {
    label: "Moderate Wellbeing",
    rawRange: "13–17",
    pctRange: "50–71%",
    color: "#3b82f6",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/30",
    textLight: "text-blue-700",
    textDark: "dark:text-blue-300",
    borderLight: "border-blue-200",
    borderDark: "dark:border-blue-800",
    message:
      "Your responses suggest a moderate level of wellbeing. Some areas of your life are going well, while others may feel less satisfying. This is common and does not necessarily indicate a problem, but it may be worth reflecting on which areas scored lower and whether small changes could help. If you have been feeling down or stressed, consider exploring that further.",
  },
  {
    label: "Low Wellbeing",
    rawRange: "8–12",
    pctRange: "29–49%",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-800",
    message:
      "Your responses suggest a low level of wellbeing over the past two weeks. A WHO-5 percentage score below 50% may indicate that further evaluation is appropriate. This does not mean something is wrong with you — but it does suggest that your current quality of life could benefit from attention. Consider taking a depression screening like the PHQ-9 and speaking with a healthcare provider.",
  },
  {
    label: "Very Low Wellbeing",
    rawRange: "0–7",
    pctRange: "0–28%",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your responses suggest a very low level of wellbeing over the past two weeks. A WHO-5 percentage score below 28% is associated with a higher likelihood of depression. This is a strong signal to seek further evaluation — we recommend taking the PHQ-9 depression screening and speaking with a qualified healthcare professional. Support is available, and you do not have to feel this way.",
  },
];

function getTier(rawScore: number): Tier {
  if (rawScore >= 18) return TIERS[0];
  if (rawScore >= 13) return TIERS[1];
  if (rawScore >= 8) return TIERS[2];
  return TIERS[3];
}

function itemColor(value: number): string {
  if (value >= 4) return "#22c55e";
  if (value >= 3) return "#3b82f6";
  if (value >= 2) return "#f59e0b";
  return "#ef4444";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function Who5Client({ faqData }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const allAnswered = ITEMS.every((item) => answers[item.id] !== undefined);

  function handleAnswer(id: number, value: number) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    const idx = ITEMS.findIndex((item) => item.id === id);
    if (idx < ITEMS.length - 1) {
      setTimeout(() => {
        questionRefs.current[idx + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  const rawScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const pctScore = rawScore * 4;
  const tier = getTier(rawScore);

  function handleSubmit() {
    if (!allAnswered) return;
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetake() {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------------------------------------------------------- */
  /*  Results View                                                     */
  /* ---------------------------------------------------------------- */
  if (showResults) {
    const showPhq9Nudge = pctScore < 50;
    const showStrongPhq9 = pctScore <= 28;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your WHO-5 Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Well-Being Index · Past 2 weeks
        </p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}>
          <div className="flex items-center justify-between mb-1">
            <h2 className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {tier.label}
            </h2>
            <span className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {pctScore}%
            </span>
          </div>
          <p className={`text-xs mb-4 ${tier.textLight} ${tier.textDark}`}>
            Raw score: {rawScore} / 25
          </p>

          {/* Percentage Bar */}
          <div className="w-full h-4 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pctScore}%`, backgroundColor: tier.color }}
            />
          </div>

          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* PHQ-9 Suggestion */}
        {showPhq9Nudge && (
          <div className={`mb-8 p-5 rounded-xl border-2 ${showStrongPhq9 ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800" : "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800"}`}>
            <h2 className={`text-lg font-bold mb-2 ${showStrongPhq9 ? "text-red-700 dark:text-red-300" : "text-amber-700 dark:text-amber-300"}`}>
              {showStrongPhq9 ? "Depression Screening Recommended" : "Consider a Depression Screening"}
            </h2>
            <p className={`text-sm mb-3 leading-relaxed ${showStrongPhq9 ? "text-red-700 dark:text-red-300" : "text-amber-700 dark:text-amber-300"}`}>
              {showStrongPhq9
                ? "A WHO-5 percentage score of 28% or below is associated with depression in research studies. We strongly recommend taking the PHQ-9 depression screening and discussing your results with a healthcare provider."
                : "A WHO-5 percentage score below 50% suggests that further evaluation may be appropriate. The PHQ-9 is a widely-used depression screening tool that can provide more specific insight."}
            </p>
            <Link
              href="/phq-9-depression-test"
              className={`inline-block px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${showStrongPhq9 ? "bg-red-600 text-white hover:bg-red-700" : "bg-amber-600 text-white hover:bg-amber-700"}`}
            >
              Take the PHQ-9 Depression Screen →
            </Link>
          </div>
        )}

        {/* Item Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Item Breakdown
        </h2>
        <div className="space-y-3 mb-8">
          {ITEMS.map((item) => {
            const val = answers[item.id] ?? 0;
            const pct = (val / 5) * 100;
            const chosen = SCALE_OPTIONS.find((o) => o.value === val);
            return (
              <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {item.text}
                  </p>
                  <span className="shrink-0 text-sm font-bold text-neutral-600 dark:text-neutral-300">
                    {val}/5
                  </span>
                </div>
                <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: itemColor(val) }}
                  />
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  {chosen?.label}
                </p>
              </div>
            );
          })}
        </div>

        <AdSlot position="results-middle" />

        {/* Score Guide */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Score Ranges
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TIERS.map((t) => (
              <div key={t.label} className={`p-3 rounded-lg text-center ${t.bgLight} ${t.bgDark}`}>
                <p className={`text-xs font-bold ${t.textLight} ${t.textDark}`}>{t.label}</p>
                <p className={`text-xs ${t.textLight} ${t.textDark}`}>{t.pctRange}</p>
                <p className={`text-xs ${t.textLight} ${t.textDark}`}>Raw: {t.rawRange}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources & Further Reading */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources &amp; Further Reading</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                World Health Organization. WHO-5 Well-Being Index.{" "}
                <a href="https://www.who.int/mental_health/media/en/76.pdf" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">WHO — WHO-5 Index</a>
              </li>
              <li>
                Topp, C. W., Østergaard, S. D., Søndergaard, S., &amp; Bech, P. (2015). The WHO-5 Well-Being Index: a systematic review of the literature.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25831962/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — WHO-5 Systematic Review</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/phq-9-depression-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PHQ-9 Depression Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Validated 9-question depression screener</p>
            </Link>
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">7-question validated anxiety screener</p>
            </Link>
            <Link href="/dass-21-depression-anxiety-stress" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DASS-21 →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Measure depression, anxiety, and stress together</p>
            </Link>
            <Link href="/sleep-and-mood-check" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">Sleep &amp; Mood Reflection →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Explore how sleep quality affects your mood</p>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button onClick={() => window.print()} className="px-5 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-sm font-medium">
            Print Results
          </button>
          <button onClick={handleRetake} className="px-5 py-2.5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-sand-100 dark:hover:bg-night-700 transition-colors text-sm font-medium">
            Retake Assessment
          </button>
        </div>

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the WHO-5 Well-Being Index</h2>
          <p>
            The WHO-5 Well-Being Index is a short, self-reported measure of current mental wellbeing developed by the World Health Organization in 1998. It is one of the most widely used measures of subjective wellbeing in the world, translated into more than 30 languages, and has been validated in numerous studies across diverse populations.
          </p>
          <p>
            Unlike depression screeners (such as the <Link href="/phq-9-depression-test">PHQ-9</Link>) that ask about negative symptoms, the WHO-5 uses <strong>positively worded</strong> statements. This makes it less stigmatizing and well-suited for general wellbeing monitoring — in primary care, workplace settings, research, and personal use. A low WHO-5 score does not mean you are depressed, but research has shown it is a reliable indicator that further evaluation may be beneficial.
          </p>
          <h2>How the WHO-5 Is Scored</h2>
          <p>
            Each of the five items is rated on a 6-point scale from 0 (At no time) to 5 (All of the time), referring to the past two weeks. The raw score ranges from 0 to 25. This raw score is then multiplied by 4 to produce a percentage score from 0 to 100, where 0 represents the worst possible wellbeing and 100 represents the best.
          </p>
          <ul>
            <li><strong>Below 50%</strong> (raw &lt; 13): Suggests low mood or reduced wellbeing. Further evaluation recommended.</li>
            <li><strong>Below 28%</strong> (raw &lt; 8): Strongly associated with depression in validation studies. Depression screening (e.g., PHQ-9) recommended.</li>
            <li>A <strong>change of 10% or more</strong> from a previous score is considered clinically significant.</li>
          </ul>
          <h2>WHO-5 vs. Depression Screeners</h2>
          <p>
            The WHO-5 is not a depression screener — it is a <strong>wellbeing measure</strong>. Depression screeners like the PHQ-9 ask about specific symptoms of depression (sadness, loss of interest, sleep changes, etc.). The WHO-5 asks about positive experiences (cheerfulness, calm, energy, rest, engagement). A low WHO-5 score signals reduced wellbeing, which may be caused by depression, anxiety, stress, burnout, physical illness, life circumstances, or other factors. If your WHO-5 score is low, a depression-specific screen can help clarify whether depression may be a contributing factor.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The WHO-5 Well-Being Index is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have depression or any other condition. A low score suggests that further evaluation may be appropriate. Always consult a qualified healthcare professional for mental health concerns.
          </p>
        </div>

        <ToolReviewerBio />

        {/* Crisis Resources */}
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Crisis &amp; Support Resources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
            <div>
              <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
              <p>Call or text 988 · 24/7</p>
            </div>
            <div>
              <p className="font-bold">SAMHSA National Helpline</p>
              <p>1-800-662-4357 · 24/7</p>
            </div>
            <div>
              <p className="font-bold">Crisis Text Line</p>
              <p>Text HOME to 741741</p>
            </div>
            <div>
              <p className="font-bold">International</p>
              <p>findahelpline.com</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-neutral-400 dark:text-neutral-500 mb-10">
          Your responses were scored entirely in your browser. Nothing was stored or transmitted.
        </p>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-sage-700 dark:hover:text-sage-400 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <span className="ml-2 text-neutral-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-4 pb-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Assessment Form View                                             */
  /* ---------------------------------------------------------------- */
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
        WHO-5 Well-Being Index
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        Rate each statement for how you have been feeling over the <strong>last two weeks</strong>.
      </p>
      <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-8">
        5 questions · ~2 minutes · Completely private · WHO public domain instrument
      </p>

      <AdSlot position="tool-top" />

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-neutral-400 dark:text-neutral-500 mb-1">
          <span>{answeredCount} of {ITEMS.length} answered</span>
          <span>{Math.round((answeredCount / ITEMS.length) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-500 rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / ITEMS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4 mb-8">
        {ITEMS.map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => { questionRefs.current[idx] = el; }}
            className={`p-4 rounded-xl border transition-colors ${
              answers[item.id] !== undefined
                ? "bg-white dark:bg-night-800 border-sage-200 dark:border-sage-800"
                : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
            }`}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                answers[item.id] !== undefined
                  ? "bg-sage-500 text-white"
                  : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
              }`}>
                {answers[item.id] !== undefined ? "✓" : idx + 1}
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                {item.text}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ml-10">
              {SCALE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(item.id, opt.value)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors text-center ${
                    answers[item.id] === opt.value
                      ? "bg-sage-600 text-white"
                      : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="text-center mb-10">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`px-8 py-3 rounded-xl text-base font-semibold transition-colors ${
            allAnswered
              ? "bg-sage-600 text-white hover:bg-sage-700 shadow-sm"
              : "bg-sand-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500 cursor-not-allowed"
          }`}
        >
          See My Results
        </button>
        {!allAnswered && (
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">
            Please answer all {ITEMS.length} questions to continue
          </p>
        )}
      </div>

      {/* YMYL Disclaimer */}
      <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        <p className="font-semibold mb-1">Clinical Disclaimer</p>
        <p>
          The WHO-5 Well-Being Index is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have depression or any other condition. A low score suggests that further evaluation may be appropriate. Always consult a qualified healthcare professional for mental health concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
        </p>
      </div>

      {/* Crisis Resources */}
      <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
          Crisis &amp; Support Resources
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
          <div>
            <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
            <p>Call or text 988 · 24/7</p>
          </div>
          <div>
            <p className="font-bold">SAMHSA National Helpline</p>
            <p>1-800-662-4357 · 24/7</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}
