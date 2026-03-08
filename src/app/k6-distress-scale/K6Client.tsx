"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Item {
  id: number;
  text: string;
}

const STEM = "During the past 30 days, about how often did you feel\u2026";

const ITEMS: Item[] = [
  { id: 1, text: "\u2026nervous?" },
  { id: 2, text: "\u2026hopeless?" },
  { id: 3, text: "\u2026restless or fidgety?" },
  { id: 4, text: "\u2026so depressed that nothing could cheer you up?" },
  { id: 5, text: "\u2026that everything was an effort?" },
  { id: 6, text: "\u2026worthless?" },
];

const SCALE_OPTIONS = [
  { value: 0, label: "None of the time" },
  { value: 1, label: "A little of the time" },
  { value: 2, label: "Some of the time" },
  { value: 3, label: "Most of the time" },
  { value: 4, label: "All of the time" },
];

interface Tier {
  label: string;
  range: string;
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
    label: "Low Distress",
    range: "0\u20134",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your score suggests a low level of psychological distress over the past 30 days. This is a positive result. You appear to be functioning well in terms of the emotional experiences measured by this scale. If you do notice changes in how you feel, you can retake this screening at any time.",
  },
  {
    label: "Moderate Distress",
    range: "5\u201312",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-800",
    message:
      "Your score suggests a moderate level of psychological distress over the past 30 days. You may be experiencing some nervousness, sadness, restlessness, or fatigue that is affecting your daily life. This level of distress is common and may be related to life circumstances, stress, or other factors. Consider taking a more specific screening (like the PHQ-9 for depression or GAD-7 for anxiety) to better understand what you are experiencing, or speak with a healthcare provider.",
  },
  {
    label: "Serious Psychological Distress",
    range: "13\u201324",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your score of 13 or higher meets the threshold for serious psychological distress (SPD) \u2014 the same cutoff used in national health surveys by SAMHSA and the CDC. This does not mean you have a specific mental health condition, but it does mean you are experiencing a significant level of emotional difficulty that warrants professional attention. Please consider reaching out to a healthcare provider, therapist, or one of the crisis resources listed below.",
  },
];

function getTier(score: number): Tier {
  if (score <= 4) return TIERS[0];
  if (score <= 12) return TIERS[1];
  return TIERS[2];
}

function itemColor(value: number): string {
  if (value <= 1) return "#22c55e";
  if (value <= 2) return "#f59e0b";
  return "#ef4444";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function K6Client({ faqData }: Props) {
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

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const tier = getTier(totalScore);

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
    const isSPD = totalScore >= 13;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your K6 Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Psychological distress · Past 30 days · {ITEMS.length} items
        </p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {tier.label}
            </h2>
            <span className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {totalScore} / 24
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${(totalScore / 24) * 100}%`, backgroundColor: tier.color }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* SPD Follow-up Recommendation */}
        {isSPD && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
              Further Screening Recommended
            </h2>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed mb-3">
              A K6 score of 13 or higher indicates serious psychological distress. The K6 measures general distress but does not identify the specific cause. Taking a more specific screening can help clarify what you may be experiencing:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/phq-9-depression-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                PHQ-9 Depression Screen →
              </Link>
              <Link
                href="/gad-7-anxiety-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                GAD-7 Anxiety Screen →
              </Link>
            </div>
          </div>
        )}

        {/* Moderate follow-up */}
        {!isSPD && totalScore >= 5 && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-2">
              Consider a More Specific Screening
            </h2>
            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
              Your score suggests moderate distress. A more targeted screening can help identify whether depression or anxiety may be contributing:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/phq-9-depression-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                PHQ-9 Depression Screen →
              </Link>
              <Link
                href="/gad-7-anxiety-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                GAD-7 Anxiety Screen →
              </Link>
            </div>
          </div>
        )}

        {/* Item Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Item Breakdown
        </h2>
        <div className="space-y-3 mb-8">
          {ITEMS.map((item) => {
            const val = answers[item.id] ?? 0;
            const pct = (val / 4) * 100;
            const chosen = SCALE_OPTIONS.find((o) => o.value === val);
            return (
              <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {item.text}
                  </p>
                  <span className="shrink-0 text-sm font-bold text-neutral-600 dark:text-neutral-300">
                    {val}/4
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
          <div className="grid grid-cols-3 gap-2">
            {TIERS.map((t) => (
              <div key={t.label} className={`p-3 rounded-lg text-center ${t.bgLight} ${t.bgDark}`}>
                <p className={`text-xs font-bold ${t.textLight} ${t.textDark}`}>{t.label}</p>
                <p className={`text-xs ${t.textLight} ${t.textDark}`}>{t.range}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2 text-center">
            13+ = Serious Psychological Distress (SPD) threshold used in national surveys
          </p>
        </div>

        {/* Sources & Further Reading */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources &amp; Further Reading</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Kessler, R. C., Andrews, G., Colpe, L. J., et al. (2002). Short screening scales to monitor population prevalences and trends in non-specific psychological distress.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/12214795/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — K6 Validation</a>
              </li>
              <li>
                SAMHSA. Mental Health.{" "}
                <a href="https://www.samhsa.gov/mental-health" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">samhsa.gov</a>
              </li>
              <li>
                World Health Organization. Mental Health.{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">who.int</a>
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
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">9-item validated depression screener</p>
            </Link>
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">7-item validated anxiety screener</p>
            </Link>
            <Link href="/dass-21-depression-anxiety-stress" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DASS-21 →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Measure depression, anxiety, and stress together</p>
            </Link>
            <Link href="/who-5-wellbeing-index" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">WHO-5 Well-Being Index →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Positive wellbeing measure from the WHO</p>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button onClick={() => window.print()} className="px-5 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-sm font-medium">
            Print Results
          </button>
          <button onClick={handleRetake} className="px-5 py-2.5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-sand-100 dark:hover:bg-night-700 transition-colors text-sm font-medium">
            Retake Screening
          </button>
        </div>

        {/* Download Reflection Summary */}
        <ReflectionSummary
          toolName="K6 Psychological Distress Scale"
          toolUrl="https://mindchecktools.com/k6-distress-scale"
          score={totalScore}
          severityLabel={tier.label}
          scoreRange={tier.range}
          interpretation={tier.message}
          suggestion={totalScore >= 13
            ? "Your score meets the threshold for serious psychological distress. Please consider reaching out to a healthcare provider, therapist, or one of the crisis resources available."
            : totalScore >= 5
              ? "Consider taking a more specific screening like the PHQ-9 or GAD-7 to better understand what you are experiencing, or speak with a healthcare provider."
              : "Continue monitoring your well-being. If you notice changes in how you feel, you can retake this screening at any time."}
          reflectionPrompts={REFLECTION_PROMPTS["k6-distress-scale"]?.prompts ?? []}
          responses={ITEMS.map((item) => ({
            question: item.text,
            answer: `${SCALE_OPTIONS.find((o) => o.value === (answers[item.id] ?? 0))?.label} (${answers[item.id] ?? 0}/4)`,
          }))}
        />

        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["k6-distress-scale"] && (
          <ReflectionPrompts
            toolName="K6 Psychological Distress Scale"
            prompts={REFLECTION_PROMPTS["k6-distress-scale"].prompts}
          />
        )}

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the K6</h2>
          <p>
            The Kessler Psychological Distress Scale (K6) is a 6-item screening tool developed by Ronald Kessler and colleagues at Harvard Medical School in collaboration with the World Health Organization. It was designed as a brief, efficient measure of nonspecific psychological distress \u2014 meaning it detects general emotional difficulty without identifying a specific condition like depression or anxiety.
          </p>
          <p>
            The K6 is used in major national health surveys including the National Survey on Drug Use and Health (NSDUH) conducted by SAMHSA, the National Health Interview Survey (NHIS), and the Behavioral Risk Factor Surveillance System (BRFSS). In these surveys, a score of 13 or higher is used to identify <strong>serious psychological distress (SPD)</strong>, a classification that helps track mental health trends at the population level.
          </p>
          <h2>What &ldquo;Nonspecific Distress&rdquo; Means</h2>
          <p>
            The K6 intentionally measures general distress rather than a specific disorder. The six items cover nervousness, hopelessness, restlessness, depression, effort, and worthlessness \u2014 symptoms that are common across many mental health conditions including major depression, generalized anxiety disorder, panic disorder, and adjustment disorders. A high K6 score tells you that something is wrong, but it does not tell you exactly what. That is why follow-up with more specific tools (like the <Link href="/phq-9-depression-test">PHQ-9</Link> or <Link href="/gad-7-anxiety-test">GAD-7</Link>) or a professional evaluation is recommended for scores in the moderate or serious range.
          </p>
          <h2>K6 vs. K10</h2>
          <p>
            The K10 is a 10-item version of the same scale that includes four additional items. Both the K6 and K10 were developed together, and the K6 was derived from the K10 as a shorter alternative. Research has shown that the K6 performs nearly as well as the K10 for identifying serious mental illness, making it the preferred version for brief screening and large-scale surveys. The K10 may provide slightly more nuanced information but at the cost of additional questions.
          </p>
          <h2>When to Seek Help</h2>
          <p>
            If your K6 score is 13 or higher, or if you are experiencing persistent distress that is affecting your ability to work, maintain relationships, or enjoy life, please reach out for support. A primary care provider, therapist, or counselor can help determine what is contributing to your distress and connect you with appropriate resources. The crisis resources listed below are available 24/7.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The K6 is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a specific mental health condition. A score of 13 or higher suggests serious psychological distress that may warrant professional evaluation. Always consult a qualified healthcare professional for mental health concerns.
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
        K6 Psychological Distress Scale
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        A brief measure of nonspecific psychological distress used in national health surveys.
      </p>
      <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-8">
        6 questions · ~2 minutes · Completely private · Public domain instrument
      </p>

      <AdSlot position="tool-top" />

      {/* Stem */}
      <div className="mb-6 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <p className="text-sm font-medium text-sage-700 dark:text-sage-300 text-center">
          {STEM}
        </p>
      </div>

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
            <div className="flex flex-wrap gap-2 ml-10">
              {SCALE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(item.id, opt.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
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
          The K6 is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a specific mental health condition. A score of 13 or higher suggests serious psychological distress that may warrant professional evaluation. Always consult a qualified healthcare professional for mental health concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
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
