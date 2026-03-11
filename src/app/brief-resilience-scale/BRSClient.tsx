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
  reversed: boolean;
}

const ITEMS: Item[] = [
  { id: 1, text: "I tend to bounce back quickly after hard times.", reversed: false },
  { id: 2, text: "I have a hard time making it through stressful events.", reversed: true },
  { id: 3, text: "It does not take me long to recover from a stressful event.", reversed: false },
  { id: 4, text: "It is hard for me to snap back when something bad happens.", reversed: true },
  { id: 5, text: "I usually come through difficult times with little trouble.", reversed: false },
  { id: 6, text: "I tend to take a long time to get over set-backs in my life.", reversed: true },
];

const SCALE_OPTIONS = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
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
    label: "Low Resilience",
    range: "1.00\u20132.99",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your score suggests low resilience \u2014 you may find it difficult to bounce back from stressful events, setbacks, or adversity. This does not mean you are weak or that things will always feel this hard. Resilience is not a fixed trait; it can be developed and strengthened over time. Low resilience is associated with higher levels of stress, depression, and anxiety. Consider speaking with a therapist or counselor who can help you build coping strategies and identify what may be making recovery from stress more difficult for you right now.",
  },
  {
    label: "Normal Resilience",
    range: "3.00\u20134.30",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your score falls within the normal range of resilience. You appear to have a typical ability to bounce back from stress and adversity. This means you can generally recover from difficult experiences, though some setbacks may take longer than others. Normal resilience does not mean you never struggle \u2014 it means you have a reasonable capacity to recover when you do. If you notice your ability to cope declining during a particularly stressful period, you can retake this screening at any time.",
  },
  {
    label: "High Resilience",
    range: "4.31\u20135.00",
    color: "#3b82f6",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/30",
    textLight: "text-blue-700",
    textDark: "dark:text-blue-300",
    borderLight: "border-blue-200",
    borderDark: "dark:border-blue-800",
    message:
      "Your score suggests high resilience. You appear to have a strong ability to bounce back from stress, setbacks, and adversity. High resilience is associated with better psychological wellbeing, lower rates of depression and anxiety, and more effective coping with life challenges. Even with high resilience, it is important to maintain your support systems and self-care practices. If you experience a major life event or notice changes in your ability to cope, support is always available.",
  },
];

function getTier(mean: number): Tier {
  if (mean < 3.0) return TIERS[0];
  if (mean <= 4.3) return TIERS[1];
  return TIERS[2];
}

function scoreItem(item: Item, rawValue: number): number {
  return item.reversed ? 6 - rawValue : rawValue;
}

function itemColor(scored: number): string {
  if (scored >= 4) return "#22c55e";
  if (scored >= 3) return "#f59e0b";
  return "#ef4444";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function BRSClient({ faqData }: Props) {
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

  const totalScored = ITEMS.reduce((sum, item) => {
    const raw = answers[item.id];
    if (raw === undefined) return sum;
    return sum + scoreItem(item, raw);
  }, 0);

  const meanScore = allAnswered ? totalScored / ITEMS.length : 0;
  const meanDisplay = meanScore.toFixed(2);
  const tier = getTier(meanScore);

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
    const isLow = meanScore < 3.0;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your Resilience Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Brief Resilience Scale &middot; {ITEMS.length} items &middot; Mean score 1.00&ndash;5.00
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {tier.label}
            </h2>
            <span className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {meanDisplay} / 5.00
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${((meanScore - 1) / 4) * 100}%`, backgroundColor: tier.color }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* Low resilience follow-up */}
        {isLow && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
              Further Screening May Be Helpful
            </h2>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed mb-3">
              Low resilience often co-occurs with depression, anxiety, or elevated stress. These screenings can help clarify whether other factors may be affecting your ability to cope:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/phq-9-depression-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                PHQ-9 Depression Screen &rarr;
              </Link>
              <Link
                href="/k6-distress-scale"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                K6 Distress Scale &rarr;
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
            const raw = answers[item.id] ?? 1;
            const scored = scoreItem(item, raw);
            const pct = ((scored - 1) / 4) * 100;
            const chosenLabel = SCALE_OPTIONS.find((o) => o.value === raw)?.label ?? "";
            return (
              <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {item.text}
                    {item.reversed && (
                      <span className="ml-1 text-xs text-neutral-500 dark:text-neutral-400">(reverse-scored)</span>
                    )}
                  </p>
                  <span className="shrink-0 text-sm font-bold text-neutral-600 dark:text-neutral-300">
                    {scored}/5
                  </span>
                </div>
                <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: itemColor(scored) }}
                  />
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {chosenLabel}
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
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">
            Score is the mean (average) of all 6 items after reverse scoring
          </p>
        </div>

        {/* Sources & Further Reading */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources &amp; Further Reading</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Smith, B. W., Dalen, J., Wiggins, K., et al. (2008). The Brief Resilience Scale: assessing the ability to bounce back.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/18696313/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — BRS Validation</a>
              </li>
              <li>
                American Psychological Association. Resilience.{" "}
                <a href="https://www.apa.org/topics/resilience" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">apa.org</a>
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
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PHQ-9 Depression Self-Check &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">9-item validated depression screener</p>
            </Link>
            <Link href="/rosenberg-self-esteem-scale" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">Rosenberg Self-Esteem Scale &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">10-item measure of global self-esteem</p>
            </Link>
            <Link href="/k6-distress-scale" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">K6 Distress Scale &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">6-item psychological distress screening</p>
            </Link>
            <Link href="/who-5-wellbeing-index" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">WHO-5 Well-Being Index &rarr;</span>
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
          toolName="Brief Resilience Scale"
          toolUrl="https://mindchecktools.com/brief-resilience-scale"
          score={meanDisplay}
          severityLabel={tier.label}
          scoreRange={tier.range}
          interpretation={tier.message}
          suggestion={isLow ? "Consider speaking with a therapist or counselor who can help you build coping strategies and strengthen your resilience." : "Continue maintaining your support systems and self-care practices. You can retake this screening at any time."}
          reflectionPrompts={REFLECTION_PROMPTS["brief-resilience-scale"]?.prompts ?? []}
          responses={ITEMS.map((item) => ({
            question: item.text,
            answer: `${SCALE_OPTIONS.find((o) => o.value === answers[item.id])?.label ?? ""} (scored ${scoreItem(item, answers[item.id] ?? 1)}/5)`,
          }))}
        />

        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["brief-resilience-scale"] && (
          <ReflectionPrompts
            toolName="Brief Resilience Scale"
            prompts={REFLECTION_PROMPTS["brief-resilience-scale"].prompts}
          />
        )}

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the Brief Resilience Scale</h2>
          <p>
            The Brief Resilience Scale (BRS) was developed by Bruce W. Smith, Jeanne Dalen, Kathryn Wiggins, and colleagues and published in 2008 in the <em>International Journal of Behavioral Medicine</em>. It was created to fill a gap in resilience measurement: while many scales measured protective factors, resources, or health outcomes, none directly assessed the core concept of resilience itself &mdash; the ability to bounce back or recover from stress.
          </p>
          <p>
            The BRS was validated across four samples: two undergraduate student samples, a sample of cardiac rehabilitation patients, and a sample of women with fibromyalgia. It showed good internal consistency (Cronbach&rsquo;s alpha 0.80&ndash;0.91), test-retest reliability, and convergent validity with measures of optimism, social support, and coping. It was also negatively associated with anxiety, depression, negative affect, and physical symptoms.
          </p>
          <h2>Resilience Is Not a Fixed Trait</h2>
          <p>
            A common misconception is that resilience is something you either have or you don&rsquo;t. Research shows this is not the case. Resilience is a dynamic process influenced by biology, environment, relationships, learned coping skills, and life experience. It can fluctuate over time and across different types of stressors. A person may be highly resilient in one area of life (such as work challenges) but less resilient in another (such as relationship difficulties).
          </p>
          <p>
            Importantly, resilience can be developed. Cognitive-behavioral therapy, mindfulness-based stress reduction, social connection, physical exercise, and gradual exposure to manageable challenges have all been shown to strengthen resilience. Even people who currently score low on the BRS can build greater resilience with the right support and practices.
          </p>
          <h2>Resilience and Mental Health</h2>
          <p>
            Research has consistently linked higher resilience to better mental health outcomes. People with higher BRS scores tend to have lower rates of <Link href="/phq-9-depression-test">depression</Link>, <Link href="/gad-7-anxiety-test">anxiety</Link>, and PTSD following stressful events. They also report higher life satisfaction, better physical health, and more effective coping strategies. However, resilience does not make you immune to stress or suffering &mdash; it means you are better able to recover when difficult things happen.
          </p>
          <p>
            Low resilience, on the other hand, is associated with higher vulnerability to stress-related conditions. If your BRS score suggests low resilience, it may be worth exploring whether depression, anxiety, or chronic stress are contributing factors. The <Link href="/k6-distress-scale">K6 Distress Scale</Link> or <Link href="/who-5-wellbeing-index">WHO-5 Well-Being Index</Link> can provide additional perspective.
          </p>
          <h2>When to Seek Support</h2>
          <p>
            If your score suggests low resilience and you are finding it difficult to recover from stress or setbacks in your life, consider speaking with a therapist or counselor. Approaches such as cognitive-behavioral therapy (CBT), acceptance and commitment therapy (ACT), and mindfulness-based interventions have strong evidence for building resilience. A professional can help you identify specific patterns and develop strategies tailored to your situation. The crisis resources listed below are available 24/7.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The Brief Resilience Scale is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a mental health condition. A low score suggests reduced ability to bounce back from stress that may benefit from professional support. Always consult a qualified healthcare professional for mental health concerns. Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
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
              <p>Call or text 988 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">SAMHSA National Helpline</p>
              <p>1-800-662-4357 &middot; 24/7</p>
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

        <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
          <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
          </Link>
        </div>

        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 mb-10">
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
                  <span className="ml-2 text-neutral-400 group-open:rotate-180 transition-transform">&#9662;</span>
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
        Brief Resilience Scale
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        A measure of your ability to bounce back or recover from stress (Smith et al., 2008).
      </p>
      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8">
        6 questions &middot; ~2 minutes &middot; Completely private
      </p>

      <AdSlot position="tool-top" />

      {/* Instructions */}
      <div className="mb-6 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <p className="text-sm font-medium text-sage-700 dark:text-sage-300 text-center">
          Please indicate the extent to which you agree with each of the following statements. There are no right or wrong answers.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
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
                {answers[item.id] !== undefined ? "\u2713" : idx + 1}
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
              : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed"
          }`}
        >
          See My Results
        </button>
        {!allAnswered && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
            Please answer all {ITEMS.length} questions to continue
          </p>
        )}
      </div>

      {/* YMYL Disclaimer */}
      <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        <p className="font-semibold mb-1">Clinical Disclaimer</p>
        <p>
          The Brief Resilience Scale is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a mental health condition. A low score suggests reduced ability to bounce back from stress that may benefit from professional support. Always consult a qualified healthcare professional for mental health concerns. Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
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
            <p>Call or text 988 &middot; 24/7</p>
          </div>
          <div>
            <p className="font-bold">SAMHSA National Helpline</p>
            <p>1-800-662-4357 &middot; 24/7</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}
