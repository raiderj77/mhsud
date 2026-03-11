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
  { id: 1, text: "How often do you feel that you are \u201cin tune\u201d with the people around you?", reversed: true },
  { id: 2, text: "How often do you feel that you lack companionship?", reversed: false },
  { id: 3, text: "How often do you feel that there is no one you can turn to?", reversed: false },
  { id: 4, text: "How often do you feel alone?", reversed: false },
  { id: 5, text: "How often do you feel part of a group of friends?", reversed: true },
  { id: 6, text: "How often do you feel that you have a lot in common with the people around you?", reversed: true },
  { id: 7, text: "How often do you feel that you are no longer close to anyone?", reversed: false },
  { id: 8, text: "How often do you feel that your interests and ideas are not shared by those around you?", reversed: false },
  { id: 9, text: "How often do you feel outgoing and friendly?", reversed: true },
  { id: 10, text: "How often do you feel close to people?", reversed: true },
  { id: 11, text: "How often do you feel left out?", reversed: false },
  { id: 12, text: "How often do you feel that your relationships with others are not meaningful?", reversed: false },
  { id: 13, text: "How often do you feel that no one really knows you well?", reversed: false },
  { id: 14, text: "How often do you feel isolated from others?", reversed: false },
  { id: 15, text: "How often do you feel you can find companionship when you want it?", reversed: true },
  { id: 16, text: "How often do you feel that there are people who really understand you?", reversed: true },
  { id: 17, text: "How often do you feel shy and withdrawn?", reversed: false },
  { id: 18, text: "How often do you feel that people are around you but not with you?", reversed: false },
  { id: 19, text: "How often do you feel that there are people you can talk to?", reversed: true },
  { id: 20, text: "How often do you feel that there are people you can turn to?", reversed: true },
];

const SCALE_OPTIONS = [
  { value: 1, label: "Never" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Always" },
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
    label: "Low Loneliness",
    range: "20\u201334",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your score suggests a low level of loneliness. You appear to feel generally connected to the people around you and satisfied with your social relationships. This is a positive result. Social connection is one of the strongest predictors of overall wellbeing. If you notice changes in how connected you feel, you can retake this screening at any time.",
  },
  {
    label: "Moderate Loneliness",
    range: "35\u201343",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-800",
    message:
      "Your score suggests a moderate level of loneliness. You may be experiencing some dissatisfaction with your social connections or feeling that your relationships are not fully meeting your needs. This is a common experience, especially during life transitions such as moving, changing jobs, losing a relationship, or retiring. Consider whether there are specific areas of connection you would like to strengthen. Speaking with a therapist or counselor can also help you explore what may be contributing to these feelings.",
  },
  {
    label: "Elevated Loneliness",
    range: "44\u201359",
    color: "#f97316",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/30",
    textLight: "text-orange-700",
    textDark: "dark:text-orange-300",
    borderLight: "border-orange-200",
    borderDark: "dark:border-orange-800",
    message:
      "Your score of 44 or higher meets the commonly used research threshold for elevated loneliness. This suggests you are experiencing a significant level of disconnection and unmet social needs. Chronic loneliness at this level has been linked in research to increased risk for depression, anxiety, cardiovascular problems, and weakened immune function. This score does not mean something is wrong with you \u2014 loneliness is a signal that your social needs are not being met. Consider reaching out to a therapist, counselor, or one of the support resources listed below.",
  },
  {
    label: "High Loneliness",
    range: "60\u201380",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your score suggests a high level of loneliness. You appear to be experiencing pervasive feelings of disconnection, isolation, and unmet social needs. At this level, loneliness is likely affecting your daily wellbeing and may be contributing to or co-occurring with depression, anxiety, or other mental health difficulties. Please consider reaching out to a healthcare provider, therapist, or one of the crisis resources listed below. Loneliness is treatable, and professional support can help you identify what is contributing to these feelings and develop strategies for building meaningful connection.",
  },
];

function getTier(score: number): Tier {
  if (score <= 34) return TIERS[0];
  if (score <= 43) return TIERS[1];
  if (score <= 59) return TIERS[2];
  return TIERS[3];
}

function scoreItem(item: Item, rawValue: number): number {
  return item.reversed ? 5 - rawValue : rawValue;
}

function itemColor(scored: number): string {
  if (scored <= 1) return "#22c55e";
  if (scored <= 2) return "#f59e0b";
  if (scored <= 3) return "#f97316";
  return "#ef4444";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function UCLAClient({ faqData }: Props) {
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

  const totalScore = ITEMS.reduce((sum, item) => {
    const raw = answers[item.id];
    if (raw === undefined) return sum;
    return sum + scoreItem(item, raw);
  }, 0);

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
    const isElevated = totalScore >= 44;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your Loneliness Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          UCLA Loneliness Scale (Version 3) &middot; {ITEMS.length} items &middot; Score 20&ndash;80
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {tier.label}
            </h2>
            <span className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {totalScore} / 80
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${((totalScore - 20) / 60) * 100}%`, backgroundColor: tier.color }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* Elevated follow-up */}
        {isElevated && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
              Further Screening May Be Helpful
            </h2>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed mb-3">
              Elevated loneliness often co-occurs with depression and anxiety. Taking a more specific screening can help clarify whether these may be factors for you:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/phq-9-depression-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                PHQ-9 Depression Screen &rarr;
              </Link>
              <Link
                href="/gad-7-anxiety-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                GAD-7 Anxiety Screen &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Moderate follow-up */}
        {!isElevated && totalScore >= 35 && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-2">
              Consider Exploring Further
            </h2>
            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
              Moderate loneliness sometimes co-occurs with depression or low wellbeing. These screenings may provide additional perspective:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/phq-9-depression-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                PHQ-9 Depression Screen &rarr;
              </Link>
              <Link
                href="/who-5-wellbeing-index"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                WHO-5 Well-Being Index &rarr;
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
            const pct = ((scored - 1) / 3) * 100;
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
                    {scored}/4
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TIERS.map((t) => (
              <div key={t.label} className={`p-3 rounded-lg text-center ${t.bgLight} ${t.bgDark}`}>
                <p className={`text-xs font-bold ${t.textLight} ${t.textDark}`}>{t.label}</p>
                <p className={`text-xs ${t.textLight} ${t.textDark}`}>{t.range}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">
            44+ = Commonly used research threshold for elevated loneliness
          </p>
        </div>

        {/* Sources & Further Reading */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources &amp; Further Reading</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Russell, D. W. (1996). UCLA Loneliness Scale (Version 3): Reliability, validity, and factor structure.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/8656507/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — UCLA Loneliness Scale Validation</a>
              </li>
              <li>
                National Institute of Mental Health (NIMH). Mental Health Information.{" "}
                <a href="https://www.nimh.nih.gov/health" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
              </li>
              <li>
                World Health Organization. Social Determinants of Health.{" "}
                <a href="https://www.who.int/teams/social-determinants-of-health" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">who.int</a>
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
          toolName="UCLA Loneliness Scale"
          toolUrl="https://mindchecktools.com/ucla-loneliness-scale"
          score={totalScore}
          severityLabel={tier.label}
          scoreRange={tier.range}
          interpretation={tier.message}
          suggestion={isElevated ? "Consider reaching out to a therapist or counselor. Cognitive-behavioral therapy (CBT) has the strongest evidence base for treating loneliness." : "If you notice changes in how connected you feel, you can retake this screening at any time."}
          reflectionPrompts={REFLECTION_PROMPTS["ucla-loneliness-scale"]?.prompts ?? []}
          responses={ITEMS.map((item) => ({
            question: item.text,
            answer: `${SCALE_OPTIONS.find((o) => o.value === answers[item.id])?.label ?? ""} (scored ${scoreItem(item, answers[item.id] ?? 1)}/4)`,
          }))}
        />

        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["ucla-loneliness-scale"] && (
          <ReflectionPrompts
            toolName="UCLA Loneliness Scale"
            prompts={REFLECTION_PROMPTS["ucla-loneliness-scale"].prompts}
          />
        )}

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the UCLA Loneliness Scale</h2>
          <p>
            The UCLA Loneliness Scale was originally developed by Daniel Russell, Letitia Anne Peplau, and Carolyn Cutrona at UCLA in 1978. The current Version 3 was published by Russell in 1996 and is the most widely used version today. It has been cited in thousands of studies and translated into dozens of languages. The scale was designed to measure subjective feelings of loneliness and social isolation &mdash; the discrepancy between the social connections a person wants and the connections they actually have.
          </p>
          <p>
            Unlike earlier versions, Version 3 includes both positively and negatively worded items. The 9 positively worded items (which are reverse-scored) were added to reduce response bias &mdash; the tendency for some people to agree with every statement regardless of content. This design makes the scale more psychometrically robust.
          </p>
          <h2>What Loneliness Is (and Isn&rsquo;t)</h2>
          <p>
            Loneliness is not the same as being alone. It is a subjective emotional experience &mdash; the painful feeling that your social connections are insufficient or unsatisfying. A person can feel lonely in a marriage, at a party, or in a large family. Conversely, a person who lives alone and has few social contacts may not feel lonely at all if those contacts meet their needs.
          </p>
          <p>
            Loneliness is also different from depression, although the two frequently co-occur. <Link href="/phq-9-depression-test">Depression</Link> involves a broader pattern of low mood, loss of interest, and other symptoms. Loneliness specifically concerns the felt quality of social connection. However, chronic loneliness is a significant risk factor for developing depression, and depression can lead to social withdrawal that deepens loneliness.
          </p>
          <h2>Health Effects of Chronic Loneliness</h2>
          <p>
            Research over the past two decades has established that chronic loneliness is a serious public health concern. A landmark meta-analysis by Holt-Lunstad and colleagues (2015) found that loneliness and social isolation were associated with a 26% increased risk of mortality &mdash; comparable to the risk of smoking 15 cigarettes per day. Other research has linked chronic loneliness to increased inflammation, elevated cortisol levels, weakened immune function, cardiovascular disease, and accelerated cognitive decline.
          </p>
          <p>
            The U.S. Surgeon General issued an advisory in 2023 declaring loneliness and social isolation a public health epidemic, noting that approximately half of U.S. adults reported experiencing measurable levels of loneliness even before the COVID-19 pandemic.
          </p>
          <h2>When to Seek Support</h2>
          <p>
            If your score suggests elevated or high loneliness, or if persistent feelings of disconnection are affecting your daily life, mood, or physical health, consider reaching out for support. Cognitive-behavioral therapy (CBT) has the strongest evidence base for treating loneliness. A therapist can help you identify patterns that may be maintaining loneliness and develop strategies for building meaningful social connections. The crisis resources listed below are available 24/7.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The UCLA Loneliness Scale is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a mental health condition. An elevated score suggests significant loneliness that may benefit from professional support. Always consult a qualified healthcare professional for mental health concerns. Reviewed by Jason Ramirez, CADC-II, Certified Drug and Alcohol Counselor with 11 years of clinical experience.
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
        UCLA Loneliness Scale
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        A widely used measure of subjective loneliness and social isolation (Russell, 1996).
      </p>
      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8">
        20 questions &middot; ~5 minutes &middot; Completely private &middot; Version 3
      </p>

      <AdSlot position="tool-top" />

      {/* Instructions */}
      <div className="mb-6 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <p className="text-sm font-medium text-sage-700 dark:text-sage-300 text-center">
          Indicate how often each of the statements below is descriptive of you. There are no right or wrong answers.
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
          The UCLA Loneliness Scale is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a mental health condition. An elevated score suggests significant loneliness that may benefit from professional support. Always consult a qualified healthcare professional for mental health concerns. Reviewed by Jason Ramirez, CADC-II, Certified Drug and Alcohol Counselor with 11 years of clinical experience.
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
