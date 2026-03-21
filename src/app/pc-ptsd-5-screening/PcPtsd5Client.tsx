"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";
import EmailCapture from "@/components/EmailCapture";


/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const INTRO_TEXT =
  "Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic. For example: a serious accident or fire, a physical or sexual assault or abuse, an earthquake or flood, a war, seeing someone be killed or seriously injured, having a loved one die through homicide or suicide.";

const GATE_QUESTION =
  "Have you ever experienced this kind of event?";

interface SymptomItem {
  id: number;
  label: string;
  symptom: string;
  text: string;
}

const SYMPTOM_ITEMS: SymptomItem[] = [
  {
    id: 1,
    label: "Nightmares / Intrusive Memories",
    symptom: "Re-experiencing",
    text: "Had nightmares about the event(s) or thought about the event(s) when you did not want to?",
  },
  {
    id: 2,
    label: "Avoidance",
    symptom: "Avoidance",
    text: "Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
  },
  {
    id: 3,
    label: "Hypervigilance / Startle",
    symptom: "Hyperarousal",
    text: "Been constantly on guard, watchful, or easily startled?",
  },
  {
    id: 4,
    label: "Numbness / Detachment",
    symptom: "Numbing",
    text: "Felt numb or detached from people, activities, or your surroundings?",
  },
  {
    id: 5,
    label: "Guilt / Self-Blame",
    symptom: "Dysphoric cognitions",
    text: "Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function PcPtsd5Client({ faqData }: Props) {
  const [gateAnswer, setGateAnswer] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const allAnswered = SYMPTOM_ITEMS.every((item) => answers[item.id] !== undefined);

  function handleSymptomAnswer(id: number, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    const idx = SYMPTOM_ITEMS.findIndex((item) => item.id === id);
    if (idx < SYMPTOM_ITEMS.length - 1) {
      setTimeout(() => {
        questionRefs.current[idx + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  /* Scoring */
  const totalScore = Object.values(answers).filter(Boolean).length;
  const isPositiveScreen = totalScore >= 3;

  function handleSubmit() {
    if (!allAnswered) return;
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleGateNo() {
    setGateAnswer(false);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetake() {
    setGateAnswer(null);
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------------------------------------------------------- */
  /*  Results — Gate = No (no trauma exposure)                         */
  /* ---------------------------------------------------------------- */
  if (showResults && gateAnswer === false) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your PC-PTSD-5 Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Screening complete
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

        <div className="p-6 rounded-xl border-2 mb-8 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-green-700 dark:text-green-300">
              Negative Screen
            </h2>
            <span className="text-2xl font-bold text-green-700 dark:text-green-300">
              0 / 5
            </span>
          </div>
          <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed">
            You indicated that you have not experienced an unusually frightening, horrible, or traumatic event. Based on this response, the PC-PTSD-5 screening is negative. No further PTSD symptom questions were needed.
          </p>
        </div>

        <div className="mb-8 p-5 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            What This Means
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
            A negative screen suggests that PTSD symptoms are unlikely based on your current responses. However, if you are experiencing distress, difficulty functioning, or other mental health concerns, those are still worth discussing with a healthcare provider. Not all stress responses are related to PTSD, and support is available for many types of difficulties.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            If your situation changes or you recall experiences that feel relevant, you can retake this screening at any time.
          </p>
        </div>

        {/* What Research Is This Based On? */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">What Research Is This Based On?</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                National Center for PTSD. Primary Care PTSD Screen for DSM-5 (PC-PTSD-5).{" "}
                <a href="https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">VA National Center for PTSD</a>
              </li>
              <li>
                National Institute of Mental Health (NIMH). Post-Traumatic Stress Disorder.{" "}
                <a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
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
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Screen for depression symptoms</p>
            </Link>
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Screen for generalized anxiety</p>
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

        {/* YMYL footer */}
        <YmylFooter faqData={faqData} />
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Results — Gate = Yes (symptom questions answered)                 */
  /* ---------------------------------------------------------------- */
  if (showResults && gateAnswer === true) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your PC-PTSD-5 Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Screening complete · {SYMPTOM_ITEMS.length} symptom questions
        </p>

        {/* Veterans Crisis Line Banner */}
        <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 dark:border-blue-700 rounded-xl text-center">
          <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
            Veterans Crisis Line
          </p>
          <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
            1-800-273-8255, Press 1
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-400">
            Call, text 838255, or chat at VeteransCrisisLine.net · 24/7 · Confidential
          </p>
        </div>

        {/* Score Card */}
        <div
          className={`p-6 rounded-xl border-2 mb-8 ${
            isPositiveScreen
              ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800"
              : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h2
              className={`text-xl font-bold ${
                isPositiveScreen
                  ? "text-amber-700 dark:text-amber-300"
                  : "text-green-700 dark:text-green-300"
              }`}
            >
              {isPositiveScreen ? "Positive Screen" : "Negative Screen"}
            </h2>
            <span
              className={`text-2xl font-bold ${
                isPositiveScreen
                  ? "text-amber-700 dark:text-amber-300"
                  : "text-green-700 dark:text-green-300"
              }`}
            >
              {totalScore} / 5
            </span>
          </div>
          <div className="flex gap-1.5 mb-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className={`h-3 flex-1 rounded-full ${
                  n <= totalScore
                    ? isPositiveScreen
                      ? "bg-amber-400 dark:bg-amber-500"
                      : "bg-green-400 dark:bg-green-500"
                    : "bg-white/50 dark:bg-black/20"
                }`}
              />
            ))}
          </div>
          <p
            className={`text-sm leading-relaxed ${
              isPositiveScreen
                ? "text-amber-700 dark:text-amber-300"
                : "text-green-700 dark:text-green-300"
            }`}
          >
            {isPositiveScreen
              ? "Your score of " + totalScore + " out of 5 meets the cutoff (3 or higher) for a positive PTSD screen. This does not mean you have PTSD — it means that your symptoms may warrant further evaluation by a qualified professional. A positive screen is a reason to talk to someone, not a reason to panic."
              : "Your score of " + totalScore + " out of 5 is below the cutoff for a positive screen. This suggests that PTSD symptoms may not be a primary concern at this time. However, if you are experiencing distress or difficulty functioning after a traumatic experience, those concerns are still worth discussing with a healthcare provider."}
          </p>
        </div>

        <AdSlot npa position="results-top" />

        {/* Symptom Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Symptom Breakdown
        </h2>
        <div className="space-y-3 mb-8">
          {SYMPTOM_ITEMS.map((item) => {
            const endorsed = answers[item.id] === true;
            return (
              <div
                key={item.id}
                className={`p-4 rounded-xl border ${
                  endorsed
                    ? "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800"
                    : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      endorsed
                        ? "bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-300"
                        : "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                    }`}
                  >
                    {endorsed ? "Y" : "N"}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                      {item.label}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {item.symptom}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What This Means */}
        <div className="mb-8 p-5 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            What This Means
          </h2>
          <div className="text-sm text-neutral-600 dark:text-neutral-300 space-y-3 leading-relaxed">
            <p>
              The PC-PTSD-5 is a brief screening tool — not a comprehensive assessment. A positive screen (3 or more &ldquo;Yes&rdquo; answers) indicates that further evaluation with a longer instrument like the <Link href="/pcl-5-ptsd-screening" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-800 dark:hover:text-sage-300">PCL-5 (20-item PTSD Checklist)</Link> or a clinical interview is recommended.
            </p>
            <p>
              A negative screen does not rule out PTSD or other trauma-related difficulties. If you are struggling after a traumatic experience, a healthcare provider can help even if this screen is negative.
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Recommended Next Steps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/pcl-5-ptsd-screening"
              className="block p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <h3 className="text-sm font-bold text-sage-700 dark:text-sage-300 mb-1">
                Take the Full PCL-5 →
              </h3>
              <p className="text-xs text-sage-600 dark:text-sage-400">
                20-item validated PTSD assessment with symptom cluster breakdown. Provides more detailed results.
              </p>
            </Link>
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
                Talk to a Provider
              </h3>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                Share your results with your primary care doctor, therapist, or a VA mental health provider. They can conduct a full evaluation.
              </p>
            </div>
            <div className="p-4 bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl">
              <h3 className="text-sm font-bold text-teal-700 dark:text-teal-300 mb-1">
                SAMHSA National Helpline
              </h3>
              <p className="text-xs text-teal-600 dark:text-teal-400 mb-1">
                Free, confidential, 24/7 treatment referral and information.
              </p>
              <p className="text-xs font-bold text-teal-700 dark:text-teal-300">
                1-800-662-4357
              </p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-1">
                Veterans Crisis Line
              </h3>
              <p className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                Confidential support for Veterans and their families. 24/7.
              </p>
              <p className="text-xs font-bold text-purple-700 dark:text-purple-300">
                1-800-273-8255, Press 1
              </p>
            </div>
          </div>
        </div>

        <AdSlot npa position="results-middle" />

        {/* What Research Is This Based On? */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">What Research Is This Based On?</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                National Center for PTSD. Primary Care PTSD Screen for DSM-5 (PC-PTSD-5).{" "}
                <a href="https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">VA National Center for PTSD</a>
              </li>
              <li>
                National Institute of Mental Health (NIMH). Post-Traumatic Stress Disorder.{" "}
                <a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
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
            <Link href="/pcl-5-ptsd-screening" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PCL-5 PTSD Screening →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Full 20-item PTSD assessment with cluster breakdown</p>
            </Link>
            <Link href="/phq-9-depression-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PHQ-9 Depression Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Depression often co-occurs with PTSD</p>
            </Link>
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Screen for generalized anxiety symptoms</p>
            </Link>
            <Link href="/dass-21-depression-anxiety-stress" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DASS-21 →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Measure depression, anxiety, and stress together</p>
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
          toolName="PC-PTSD-5 Quick PTSD Screen"
          toolUrl="https://mindchecktools.com/pc-ptsd-5-screening"
          score={totalScore}
          severityLabel={isPositiveScreen ? "Positive Screen" : "Negative Screen"}
          scoreRange={isPositiveScreen ? "3–5" : "0–2"}
          interpretation={isPositiveScreen
            ? "Your score meets the cutoff (3 or higher) for a positive PTSD screen. This does not mean you have PTSD — it means that your symptoms may warrant further evaluation by a qualified professional."
            : "Your score is below the cutoff for a positive screen. This suggests that PTSD symptoms may not be a primary concern at this time. However, if you are experiencing distress, those concerns are still worth discussing with a healthcare provider."}
          suggestion={isPositiveScreen
            ? "Consider taking the full PCL-5 for a more detailed assessment, or speak with your primary care provider, therapist, or a VA mental health provider about your results."
            : "If your situation changes or symptoms develop, you can retake this screening at any time."}
          reflectionPrompts={REFLECTION_PROMPTS["pc-ptsd-5-screening"]?.prompts ?? []}
          responses={SYMPTOM_ITEMS.map((item) => ({
            question: item.text,
            answer: answers[item.id] === true ? "Yes" : "No",
          }))}
        />

          {/* Email Capture */}
          <EmailCapture
            headline="Get a private copy of your results"
            subtext="We\u2019ll email you your score and what it means \u2014 your responses are never stored."
            buttonText="Send Private Copy"
            source="mindchecktools-results"
            leadMagnet="screening-score-copy"
            variant="inline"
          />


        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["pc-ptsd-5-screening"] && (
          <ReflectionPrompts
            toolName="PC-PTSD-5 Quick PTSD Screen"
            prompts={REFLECTION_PROMPTS["pc-ptsd-5-screening"].prompts}
          />
        )}

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>What Is the PC-PTSD-5?</h2>
          <p>
            The PC-PTSD-5 (Primary Care PTSD Screen for DSM-5) is a 5-item screening tool developed by the National Center for PTSD at the U.S. Department of Veterans Affairs. It is designed as a brief, first-step screen that can be used in primary care and other non-specialty medical settings to identify individuals who may have PTSD and warrant further assessment.
          </p>
          <p>
            The instrument begins with a single question about trauma exposure. If the respondent endorses trauma exposure, they are asked five yes/no questions about symptoms experienced in the past month. A score of 3 or higher (out of 5) is considered a positive screen. The original validation study by Prins et al. (2016) found that a cutoff of 3 provided optimal diagnostic accuracy, with a sensitivity of 0.95 and specificity of 0.85.
          </p>
          <h2>PC-PTSD-5 vs. PCL-5</h2>
          <p>
            The PC-PTSD-5 and the <Link href="/pcl-5-ptsd-screening">PCL-5</Link> serve different purposes. The PC-PTSD-5 is a 5-item <strong>brief screen</strong> — a quick way to identify whether further evaluation is needed. The PCL-5 is a 20-item <strong>comprehensive assessment</strong> that measures PTSD symptom severity across all four DSM-5 symptom clusters. In clinical settings, the PC-PTSD-5 is often used first; if positive, the PCL-5 or a clinical interview follows.
          </p>
          <h2>When to Seek Help</h2>
          <p>
            If you are experiencing distressing symptoms after a traumatic event — whether or not this screen is positive — you deserve support. Effective, evidence-based approaches for trauma-related difficulties include Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR). Your primary care provider, a mental health professional, or the resources listed above can help you get started.
          </p>
          <h2>Who Should Take the PC-PTSD-5?</h2>
          <p>
            The PC-PTSD-5 is appropriate for anyone who has experienced or witnessed a traumatic event and wants a quick initial check of whether PTSD symptoms may be present. It is especially useful for people who are unsure whether their experiences warrant a full evaluation. Veterans, first responders, survivors of violence or abuse, and anyone who has experienced a life-threatening event may find this screening helpful as a first step.
          </p>
          <h2>What Do My PC-PTSD-5 Results Mean?</h2>
          <p>
            A positive screen (3 or more &quot;Yes&quot; answers) means your symptom pattern is consistent with what is commonly seen in people who may have PTSD. It does not confirm PTSD — it means a more thorough evaluation is recommended. A negative screen (0–2) suggests PTSD symptoms are less likely based on your current responses, but does not rule out trauma-related difficulties. If you are experiencing distress regardless of your score, that is still worth discussing with a healthcare provider.
          </p>
        </div>

        {/* Score Guide */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            How Is the PC-PTSD-5 Scored?
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-lg text-center bg-green-50 dark:bg-green-950/30">
              <p className="text-xs font-bold text-green-700 dark:text-green-300">Negative Screen</p>
              <p className="text-xs text-green-700 dark:text-green-300">0–2</p>
            </div>
            <div className="p-3 rounded-lg text-center bg-amber-50 dark:bg-amber-950/30">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300">Positive Screen</p>
              <p className="text-xs text-amber-700 dark:text-amber-300">3–5</p>
            </div>
          </div>
        </div>

        {/* YMYL footer */}
        <YmylFooter faqData={faqData} />
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Gate Question View                                               */
  /* ---------------------------------------------------------------- */
  if (gateAnswer === null) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          PC-PTSD-5 Screening
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
          A brief PTSD screen developed by the VA National Center for PTSD. 5 yes/no questions.
        </p>
        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8">
          ~1 minute · Completely private · Public domain instrument
        </p>

        <AdSlot npa position="tool-top" />

        <div className="p-6 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl mb-8">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            {INTRO_TEXT}
          </p>
          <p className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
            {GATE_QUESTION}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setGateAnswer(true)}
              className="flex-1 px-5 py-3 rounded-xl text-sm font-semibold bg-sage-600 text-white hover:bg-sage-700 transition-colors"
            >
              Yes
            </button>
            <button
              onClick={handleGateNo}
              className="flex-1 px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-night-700 border border-sand-200 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-sand-100 dark:hover:bg-night-600 transition-colors"
            >
              No
            </button>
          </div>
        </div>

        {/* YMYL footer */}
        <YmylFooter faqData={faqData} />
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Symptom Questions View (gateAnswer === true)                     */
  /* ---------------------------------------------------------------- */
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
        PC-PTSD-5 Screening
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
        In the <strong>past month</strong>, have you&hellip;
      </p>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
          <span>{answeredCount} of {SYMPTOM_ITEMS.length} answered</span>
          <span>{Math.round((answeredCount / SYMPTOM_ITEMS.length) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-500 rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / SYMPTOM_ITEMS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4 mb-8">
        {SYMPTOM_ITEMS.map((item, idx) => (
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
              <div>
                <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                  {item.text}
                </p>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 inline-block">
                  {item.label}
                </span>
              </div>
            </div>
            <div className="flex gap-2 ml-10">
              <button
                onClick={() => handleSymptomAnswer(item.id, true)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  answers[item.id] === true
                    ? "bg-sage-600 text-white"
                    : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleSymptomAnswer(item.id, false)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  answers[item.id] === false
                    ? "bg-sage-600 text-white"
                    : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                }`}
              >
                No
              </button>
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
            Please answer all {SYMPTOM_ITEMS.length} questions to continue
          </p>
        )}
      </div>

      {/* YMYL footer */}
      <YmylFooter faqData={faqData} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared YMYL Footer                                                 */
/* ------------------------------------------------------------------ */

function YmylFooter({ faqData }: { faqData: { question: string; answer: string }[] }) {
  return (
    <>
      {/* Clinical Disclaimer */}
      <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        <p className="font-semibold mb-1">Clinical Disclaimer</p>
        <p>
          The PC-PTSD-5 is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have PTSD. A positive screen indicates that further evaluation by a qualified healthcare professional is recommended. Always consult a licensed mental health provider for concerns about trauma-related symptoms.
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
            <p className="font-bold">Veterans Crisis Line</p>
            <p>1-800-273-8255, Press 1 · 24/7</p>
          </div>
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
            <details
              key={i}
              className="group bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg"
            >
              <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-sage-700 dark:hover:text-sage-400 transition-colors list-none flex items-center justify-between">
                {faq.question}
                <span className="ml-2 text-neutral-400 group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <div className="px-4 pb-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
