"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Item {
  id: number;
  text: string;
  reversed: boolean;
}

const ITEMS: Item[] = [
  { id: 1, text: "On the whole, I am satisfied with myself.", reversed: false },
  { id: 2, text: "At times I think I am no good at all.", reversed: true },
  { id: 3, text: "I feel that I have a number of good qualities.", reversed: false },
  { id: 4, text: "I am able to do things as well as most other people.", reversed: false },
  { id: 5, text: "I feel I do not have much to be proud of.", reversed: true },
  { id: 6, text: "I certainly feel useless at times.", reversed: true },
  { id: 7, text: "I feel that I'm a person of worth, at least on an equal plane with others.", reversed: false },
  { id: 8, text: "I wish I could have more respect for myself.", reversed: true },
  { id: 9, text: "All in all, I am inclined to feel that I am a failure.", reversed: true },
  { id: 10, text: "I take a positive attitude toward myself.", reversed: false },
];

const SCALE_OPTIONS = [
  { value: 3, label: "Strongly Agree" },
  { value: 2, label: "Agree" },
  { value: 1, label: "Disagree" },
  { value: 0, label: "Strongly Disagree" },
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
    label: "Low Self-Esteem",
    range: "0\u201314",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your score suggests low self-esteem. This means you may have a generally negative evaluation of yourself and your worth. Low self-esteem is not a mental health condition on its own, but research consistently links it with depression, anxiety, and difficulty in relationships. This score does not mean something is permanently wrong. Self-esteem is influenced by life circumstances, relationships, and mental health, and it can change over time. Consider speaking with a therapist or counselor who can help you explore what may be contributing to how you feel about yourself.",
  },
  {
    label: "Normal Self-Esteem",
    range: "15\u201325",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your score falls within the normal range of self-esteem. This suggests you generally have a balanced and healthy view of yourself and your worth. You likely recognize both your strengths and your limitations without an overly negative or inflated self-evaluation. Normal self-esteem does not mean you never have doubts \u2014 everyone does at times. If you notice changes in how you feel about yourself, you can retake this screening at any time.",
  },
  {
    label: "High Self-Esteem",
    range: "26\u201330",
    color: "#3b82f6",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/30",
    textLight: "text-blue-700",
    textDark: "dark:text-blue-300",
    borderLight: "border-blue-200",
    borderDark: "dark:border-blue-800",
    message:
      "Your score suggests high self-esteem. You appear to have a strongly positive evaluation of yourself and your worth. High self-esteem is generally associated with greater resilience, confidence, and psychological wellbeing. It is worth noting that self-esteem is just one dimension of mental health. If you are experiencing difficulties in other areas of your life despite feeling good about yourself, other screening tools on this site may be helpful.",
  },
];

function getTier(score: number): Tier {
  if (score <= 14) return TIERS[0];
  if (score <= 25) return TIERS[1];
  return TIERS[2];
}

function scoreItem(item: Item, rawValue: number): number {
  return item.reversed ? 3 - rawValue : rawValue;
}

function itemColor(scored: number): string {
  if (scored >= 2) return "#22c55e";
  if (scored >= 1) return "#f59e0b";
  return "#ef4444";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function RSESClient({ faqData }: Props) {
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
    const isLow = totalScore < 15;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your Self-Esteem Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Rosenberg Self-Esteem Scale &middot; {ITEMS.length} items &middot; Score 0&ndash;30
        </p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {tier.label}
            </h2>
            <span className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {totalScore} / 30
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${(totalScore / 30) * 100}%`, backgroundColor: tier.color }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* Low self-esteem follow-up */}
        {isLow && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
              Further Screening May Be Helpful
            </h2>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed mb-3">
              Low self-esteem is often connected to depression and anxiety. Taking a more specific screening can help clarify whether these may be factors for you:
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

        {/* Item Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Item Breakdown
        </h2>
        <div className="space-y-3 mb-8">
          {ITEMS.map((item) => {
            const raw = answers[item.id] ?? 0;
            const scored = scoreItem(item, raw);
            const pct = (scored / 3) * 100;
            const chosenLabel = SCALE_OPTIONS.find((o) => o.value === raw)?.label ?? "";
            return (
              <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {item.text}
                    {item.reversed && (
                      <span className="ml-1 text-xs text-neutral-400 dark:text-neutral-500">(reverse-scored)</span>
                    )}
                  </p>
                  <span className="shrink-0 text-sm font-bold text-neutral-600 dark:text-neutral-300">
                    {scored}/3
                  </span>
                </div>
                <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: itemColor(scored) }}
                  />
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
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
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2 text-center">
            15&ndash;25 = Normal range &middot; Below 15 = Low self-esteem &middot; 26&ndash;30 = High self-esteem
          </p>
        </div>

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
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">7-item validated anxiety screener</p>
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

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the Rosenberg Self-Esteem Scale</h2>
          <p>
            The Rosenberg Self-Esteem Scale (RSES) was developed by sociologist Morris Rosenberg and published in his 1965 book <em>Society and the Adolescent Self-Image</em>. It was originally designed for a large-scale study of over 5,000 high school students in New York State and has since become the most widely used measure of global self-esteem in social science research.
          </p>
          <p>
            The scale measures what Rosenberg called &ldquo;global self-esteem&rdquo; &mdash; your overall evaluation of your own worth as a person. It does not measure specific domains of self-esteem (like academic performance or appearance) but rather your general feeling about yourself. The 10 items include 5 positively worded statements and 5 negatively worded statements, which are reverse-scored to reduce response bias.
          </p>
          <h2>How Self-Esteem Relates to Mental Health</h2>
          <p>
            Decades of research have established strong connections between self-esteem and mental health. Low self-esteem is a risk factor for <Link href="/phq-9-depression-test">depression</Link>, <Link href="/gad-7-anxiety-test">anxiety disorders</Link>, eating disorders, and substance use problems. It can also be a consequence of these conditions, creating a cycle where mental health difficulties and negative self-evaluation reinforce each other.
          </p>
          <p>
            High self-esteem is generally associated with better psychological wellbeing, greater resilience to stress, and healthier relationships. However, self-esteem is just one piece of the mental health picture. A person can have normal self-esteem and still experience significant mental health challenges.
          </p>
          <h2>Understanding Reverse-Scored Items</h2>
          <p>
            Five of the ten items on the RSES are negatively worded (for example, &ldquo;At times I think I am no good at all&rdquo;). These items are reverse-scored, meaning that disagreeing with a negative statement earns a higher score, just like agreeing with a positive statement does. This design helps ensure that people are reading and thinking about each item carefully rather than simply agreeing with everything.
          </p>
          <h2>When to Seek Support</h2>
          <p>
            If your score suggests low self-esteem, or if you are struggling with persistent negative feelings about yourself that affect your daily life, relationships, or work, consider reaching out for support. Cognitive-behavioral therapy (CBT) and other therapeutic approaches have been shown to be effective for improving self-esteem. A primary care provider, therapist, or counselor can help. The crisis resources listed below are available 24/7.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The Rosenberg Self-Esteem Scale is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a mental health condition. A low score suggests low self-esteem that may benefit from professional support. Always consult a qualified healthcare professional for mental health concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
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
        Rosenberg Self-Esteem Scale
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        A widely used measure of global self-esteem developed by Morris Rosenberg (1965).
      </p>
      <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-8">
        10 questions &middot; ~2 minutes &middot; Completely private &middot; Public domain instrument
      </p>

      <AdSlot position="tool-top" />

      {/* Instructions */}
      <div className="mb-6 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <p className="text-sm font-medium text-sage-700 dark:text-sage-300 text-center">
          Below is a list of statements dealing with your general feelings about yourself. Please indicate how strongly you agree or disagree with each statement.
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
          The Rosenberg Self-Esteem Scale is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a mental health condition. A low score suggests low self-esteem that may benefit from professional support. Always consult a qualified healthcare professional for mental health concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
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

      <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}
