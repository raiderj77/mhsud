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
  reverse: boolean;
}

const ITEMS: Item[] = [
  { id: 1, text: "I was bothered by things that usually don\u2019t bother me", reverse: false },
  { id: 2, text: "I did not feel like eating; my appetite was poor", reverse: false },
  { id: 3, text: "I felt that I could not shake off the blues even with help from my family or friends", reverse: false },
  { id: 4, text: "I felt that I was just as good as other people", reverse: true },
  { id: 5, text: "I had trouble keeping my mind on what I was doing", reverse: false },
  { id: 6, text: "I felt depressed", reverse: false },
  { id: 7, text: "I felt that everything I did was an effort", reverse: false },
  { id: 8, text: "I felt hopeful about the future", reverse: true },
  { id: 9, text: "I thought my life had been a failure", reverse: false },
  { id: 10, text: "I felt fearful", reverse: false },
  { id: 11, text: "My sleep was restless", reverse: false },
  { id: 12, text: "I was happy", reverse: true },
  { id: 13, text: "I talked less than usual", reverse: false },
  { id: 14, text: "I felt lonely", reverse: false },
  { id: 15, text: "People were unfriendly", reverse: false },
  { id: 16, text: "I enjoyed life", reverse: true },
  { id: 17, text: "I had crying spells", reverse: false },
  { id: 18, text: "I felt sad", reverse: false },
  { id: 19, text: "I felt that people dislike me", reverse: false },
  { id: 20, text: "I could not get \u201Cgoing\u201D", reverse: false },
];

const SCALE_LABELS = [
  "Rarely or none of the time (less than 1 day)",
  "Some or a little of the time (1\u20132 days)",
  "Occasionally or a moderate amount of time (3\u20134 days)",
  "Most or all of the time (5\u20137 days)",
];

const SCALE_SHORT = ["< 1 day", "1\u20132 days", "3\u20134 days", "5\u20137 days"];

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
    label: "Minimal Symptoms",
    range: "0\u201315",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your score is below the clinical cutoff of 16, suggesting minimal depressive symptoms over the past week. This is a positive result. However, if you have been feeling down, losing interest in activities, or struggling with daily life, those experiences are still worth discussing with a healthcare provider regardless of your score.",
  },
  {
    label: "Mild Symptoms",
    range: "16\u201320",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-800",
    message:
      "Your score is at or above the clinical cutoff of 16, which suggests mild depressive symptoms that may warrant further evaluation. This does not mean you have clinical depression \u2014 but it is a signal to pay attention. Consider taking the PHQ-9 for a more specific depression screening, and consider speaking with a healthcare provider about how you have been feeling.",
  },
  {
    label: "Moderate Symptoms",
    range: "21\u201330",
    color: "#f97316",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/30",
    textLight: "text-orange-700",
    textDark: "dark:text-orange-300",
    borderLight: "border-orange-200",
    borderDark: "dark:border-orange-800",
    message:
      "Your score suggests moderate depressive symptoms over the past week. Symptoms at this level often affect daily functioning, relationships, and quality of life. We recommend taking the PHQ-9 depression screening for a more detailed assessment, and speaking with a qualified healthcare professional. Effective support is available, and reaching out is an important step.",
  },
  {
    label: "Severe Symptoms",
    range: "31\u201360",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your score suggests severe depressive symptoms over the past week. Symptoms at this level can significantly impair daily life and may require professional support. Please consider reaching out to a healthcare provider, therapist, or one of the crisis resources listed below. You do not have to go through this alone \u2014 effective help is available.",
  },
];

function getTier(score: number): Tier {
  if (score <= 15) return TIERS[0];
  if (score <= 20) return TIERS[1];
  if (score <= 30) return TIERS[2];
  return TIERS[3];
}

function scoreItem(rawValue: number, reverse: boolean): number {
  return reverse ? 3 - rawValue : rawValue;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function CesdClient({ faqData }: Props) {
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
    return sum + scoreItem(raw, item.reverse);
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
    const showPhq9Nudge = totalScore >= 16;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your CES-D Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Depression screening · Past week · {ITEMS.length} items
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {tier.label}
            </h2>
            <span className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {totalScore} / 60
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${(totalScore / 60) * 100}%`, backgroundColor: tier.color }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* PHQ-9 Nudge */}
        {showPhq9Nudge && (
          <div className={`mb-8 p-5 rounded-xl border-2 ${totalScore >= 31 ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800" : "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800"}`}>
            <h2 className={`text-lg font-bold mb-2 ${totalScore >= 31 ? "text-red-700 dark:text-red-300" : "text-amber-700 dark:text-amber-300"}`}>
              Further Screening Recommended
            </h2>
            <p className={`text-sm mb-3 leading-relaxed ${totalScore >= 31 ? "text-red-700 dark:text-red-300" : "text-amber-700 dark:text-amber-300"}`}>
              Your CES-D score is at or above the clinical cutoff of 16. The PHQ-9 is a widely-used, clinician-recommended depression screening tool that can provide a more specific severity assessment and is often used as a follow-up to the CES-D.
            </p>
            <Link
              href="/phq-9-depression-test"
              className={`inline-block px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${totalScore >= 31 ? "bg-red-600 text-white hover:bg-red-700" : "bg-amber-600 text-white hover:bg-amber-700"}`}
            >
              Take the PHQ-9 Depression Screen →
            </Link>
          </div>
        )}

        {/* Item Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Your Item-by-Item Breakdown
        </h2>
        <div className="space-y-2 mb-8">
          {ITEMS.map((item) => {
            const raw = answers[item.id] ?? 0;
            const scored = scoreItem(raw, item.reverse);
            const pct = (scored / 3) * 100;
            return (
              <div key={item.id} className="p-3 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700">
                <div className="flex items-start gap-2 mb-2">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-sand-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-500 dark:text-neutral-400">
                    {item.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                      {item.text}
                      {item.reverse && (
                        <span className="ml-1 text-xs text-blue-500 dark:text-blue-400 font-medium">(R)</span>
                      )}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-neutral-600 dark:text-neutral-300">
                    {scored}
                  </span>
                </div>
                <div className="ml-8">
                  <div className="w-full h-1.5 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: scored >= 2 ? "#f59e0b" : scored >= 1 ? "#3b82f6" : "#22c55e",
                      }}
                    />
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {SCALE_SHORT[raw]}
                    {item.reverse && " → reverse scored"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <AdSlot position="results-middle" />

        {/* Reverse Scoring Explainer */}
        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl">
          <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
            About Reverse-Scored Items (R)
          </h3>
          <p className="text-xs text-blue-600 dark:text-blue-400 leading-relaxed">
            Items 4, 8, 12, and 16 are positively worded (e.g., &ldquo;I was happy&rdquo;). For these items, responding &ldquo;Most or all of the time&rdquo; scores 0 (indicating good wellbeing), while &ldquo;Rarely&rdquo; scores 3 (indicating low wellbeing). This reverse scoring ensures that higher total scores consistently reflect greater depressive symptom burden.
          </p>
        </div>

        {/* Score Guide */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Understanding the Score Ranges
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
            Clinical cutoff: 16+ suggests further evaluation
          </p>
        </div>

        {/* What Research Is This Based On? */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">What Research Is This Based On?</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Radloff, L. S. (1977). The CES-D Scale: A self-report depression scale for research in the general population.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/1255891/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — Original CES-D Paper</a>
              </li>
              <li>
                National Institute of Mental Health (NIMH). Depression.{" "}
                <a href="https://www.nimh.nih.gov/health/topics/depression" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Related Mental Health Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/phq-9-depression-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PHQ-9 Depression Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">9-item validated depression screener used in clinical settings</p>
            </Link>
            <Link href="/who-5-wellbeing-index" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">WHO-5 Well-Being Index →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Positive wellbeing measure from the WHO</p>
            </Link>
            <Link href="/dass-21-depression-anxiety-stress" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DASS-21 →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Measure depression, anxiety, and stress together</p>
            </Link>
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Anxiety commonly co-occurs with depression</p>
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
          toolName="CES-D Depression Scale"
          toolUrl="https://mindchecktools.com/ces-d-depression-scale"
          score={totalScore}
          severityLabel={tier.label}
          scoreRange={tier.range}
          interpretation={tier.message}
          suggestion={totalScore >= 16 ? "Consider taking the PHQ-9 for a more specific depression screening, and consider speaking with a healthcare provider about how you have been feeling." : "If you notice depressive symptoms increasing or persisting, you can retake this screening at any time."}
          reflectionPrompts={REFLECTION_PROMPTS["ces-d-depression-scale"]?.prompts ?? []}
          responses={ITEMS.map((item) => ({
            question: item.text,
            answer: `${SCALE_SHORT[answers[item.id] ?? 0]}${item.reverse ? " (reverse scored)" : ""}`,
          }))}
        />

        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["ces-d-depression-scale"] && (
          <ReflectionPrompts
            toolName="CES-D Depression Scale"
            prompts={REFLECTION_PROMPTS["ces-d-depression-scale"].prompts}
          />
        )}

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>What Is the CES-D?</h2>
          <p>
            The CES-D (Center for Epidemiologic Studies Depression Scale) is a 20-item self-report depression screening tool developed by Lenore Radloff at the National Institute of Mental Health (NIMH) in 1977. It was originally designed for use in epidemiological research to measure depressive symptomatology in the general population. Since its publication, it has become one of the most widely used depression screening instruments in the world, cited in thousands of studies.
          </p>
          <p>
            The CES-D asks about experiences over the <strong>past week</strong>, covering depressed mood, feelings of guilt and worthlessness, helplessness and hopelessness, psychomotor retardation, loss of appetite, and sleep disturbance. Four items (#4, #8, #12, #16) are positively worded and reverse-scored to reduce response bias and assess positive affect.
          </p>
          <h2>How the CES-D Compares to the PHQ-9</h2>
          <p>
            Both the CES-D and the <Link href="/phq-9-depression-test">PHQ-9</Link> screen for depression, but they differ in important ways. The CES-D has 20 items and covers a broader range of depressive experiences, including interpersonal difficulties and positive affect. The PHQ-9 has 9 items directly aligned with DSM-5 diagnostic criteria for major depressive disorder, making it more specific and more commonly used in clinical settings today. The CES-D remains widely used in research, community screening, and populations where a broader assessment is preferred.
          </p>
          <h2>How Scoring and Interpretation Works</h2>
          <p>
            The total score ranges from 0 to 60. A score of <strong>16 or higher</strong> is the traditionally used cutoff suggesting clinically significant depressive symptoms. This cutoff was established in Radloff&apos;s original 1977 validation study and has been replicated across many populations. However, a score above 16 does not confirm depression — it indicates that further evaluation by a qualified professional is recommended.
          </p>
          <h2>When to Seek Help</h2>
          <p>
            If your CES-D score is 16 or higher, or if you are experiencing persistent sadness, loss of interest, changes in sleep or appetite, difficulty concentrating, or thoughts of self-harm, please reach out to a healthcare provider. Depression is a treatable condition, and early intervention improves outcomes. The resources listed below are available 24/7.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The CES-D is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have depression. A score of 16 or higher suggests that further evaluation by a qualified healthcare professional may be appropriate. Always consult a licensed mental health provider for concerns about depressive symptoms.
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
        CES-D Depression Scale
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        For each statement, select how often you have felt this way <strong>during the past week</strong>.
      </p>
      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8">
        20 questions · ~5 minutes · Completely private · NIMH public domain instrument
      </p>

      <AdSlot position="tool-top" />

      {/* Progress — sticky */}
      <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
        <div className="flex justify-between text-xs font-semibold text-sage-600 dark:text-sage-400 mb-1">
          <span>{answeredCount} of {ITEMS.length} answered</span>
          <span>{Math.round((answeredCount / ITEMS.length) * 100)}%</span>
        </div>
        <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500"
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
                {item.reverse && (
                  <span className="ml-1 text-xs text-blue-500 dark:text-blue-400 font-medium">(positive item)</span>
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 ml-10">
              {SCALE_SHORT.map((label, val) => (
                <button
                  key={val}
                  onClick={() => handleAnswer(item.id, val)}
                  title={SCALE_LABELS[val]}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    answers[item.id] === val
                      ? "bg-sage-600 text-white"
                      : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                  }`}
                >
                  {label}
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
          The CES-D is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have depression. A score of 16 or higher suggests that further evaluation by a qualified healthcare professional may be appropriate. Always consult a licensed mental health provider for concerns about depressive symptoms.
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
        </div>
      </div>

      <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}
