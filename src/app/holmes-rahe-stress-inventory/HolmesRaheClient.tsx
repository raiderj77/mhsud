"use client";

import { useState } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

interface LifeEvent {
  id: number;
  text: string;
  lcu: number;
}

const LIFE_EVENTS: LifeEvent[] = [
  { id: 1, text: "Death of a spouse", lcu: 100 },
  { id: 2, text: "Divorce", lcu: 73 },
  { id: 3, text: "Marital separation", lcu: 65 },
  { id: 4, text: "Imprisonment", lcu: 63 },
  { id: 5, text: "Death of a close family member", lcu: 63 },
  { id: 6, text: "Personal injury or illness", lcu: 53 },
  { id: 7, text: "Marriage", lcu: 50 },
  { id: 8, text: "Dismissal from work", lcu: 47 },
  { id: 9, text: "Marital reconciliation", lcu: 45 },
  { id: 10, text: "Retirement", lcu: 45 },
  { id: 11, text: "Change in health of a family member", lcu: 44 },
  { id: 12, text: "Pregnancy", lcu: 40 },
  { id: 13, text: "Sexual difficulties", lcu: 39 },
  { id: 14, text: "Gain a new family member", lcu: 39 },
  { id: 15, text: "Business readjustment", lcu: 39 },
  { id: 16, text: "Change in financial state", lcu: 38 },
  { id: 17, text: "Death of a close friend", lcu: 37 },
  { id: 18, text: "Change to a different line of work", lcu: 36 },
  { id: 19, text: "Change in frequency of arguments with spouse", lcu: 35 },
  { id: 20, text: "Major mortgage", lcu: 32 },
  { id: 21, text: "Foreclosure of mortgage or loan", lcu: 30 },
  { id: 22, text: "Change in responsibilities at work", lcu: 29 },
  { id: 23, text: "Child leaving home", lcu: 29 },
  { id: 24, text: "Trouble with in-laws", lcu: 29 },
  { id: 25, text: "Outstanding personal achievement", lcu: 28 },
  { id: 26, text: "Spouse begins or stops work", lcu: 26 },
  { id: 27, text: "Begin or end school", lcu: 26 },
  { id: 28, text: "Change in living conditions", lcu: 25 },
  { id: 29, text: "Revision of personal habits", lcu: 24 },
  { id: 30, text: "Trouble with boss", lcu: 23 },
  { id: 31, text: "Change in working hours or conditions", lcu: 20 },
  { id: 32, text: "Change in residence", lcu: 20 },
  { id: 33, text: "Change in schools", lcu: 20 },
  { id: 34, text: "Change in recreation", lcu: 19 },
  { id: 35, text: "Change in church activities", lcu: 19 },
  { id: 36, text: "Change in social activities", lcu: 18 },
  { id: 37, text: "Minor mortgage or loan", lcu: 17 },
  { id: 38, text: "Change in sleeping habits", lcu: 16 },
  { id: 39, text: "Change in number of family reunions", lcu: 15 },
  { id: 40, text: "Change in eating habits", lcu: 15 },
  { id: 41, text: "Vacation", lcu: 13 },
  { id: 42, text: "Christmas", lcu: 12 },
  { id: 43, text: "Minor violations of the law", lcu: 11 },
];

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function HolmesRaheClient({ faqData }: Props) {
  const [phase, setPhase] = useState<"checklist" | "results">("checklist");
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const totalLcu = LIFE_EVENTS.reduce(
    (sum, e) => sum + (checked.has(e.id) ? e.lcu : 0),
    0
  );
  const checkedCount = checked.size;

  function handleToggle(id: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleSubmit() {
    setPhase("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetake() {
    setChecked(new Set());
    setPhase("checklist");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Tier helpers */
  const tier =
    totalLcu < 150 ? "low" : totalLcu < 300 ? "moderate" : "high";

  const tierColors = {
    low: {
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-700 dark:text-green-300",
      bar: "#22c55e",
    },
    moderate: {
      bg: "bg-amber-50 dark:bg-amber-950/30",
      border: "border-amber-200 dark:border-amber-800",
      text: "text-amber-700 dark:text-amber-300",
      bar: "#f59e0b",
    },
    high: {
      bg: "bg-red-50 dark:bg-red-950/30",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-700 dark:text-red-300",
      bar: "#ef4444",
    },
  };

  const tc = tierColors[tier];

  const tierLabel = {
    low: "Low Stress",
    moderate: "Moderate Stress",
    high: "High Stress",
  };

  const tierMessage = {
    low: "Your total Life Change Units are below 150, which research associates with a relatively low susceptibility to stress-related health changes. This does not mean you are free from stress — only that your recent life changes fall in the lower range of the scale.",
    moderate:
      "Your total Life Change Units fall between 150 and 299. Research associates this range with about a 50% chance of a major health change in the next two years. This is a statistical association, not a prediction for any individual. Coping strategies, social support, and self-care can all influence outcomes.",
    high: "Your total Life Change Units are 300 or above. Research associates this range with about an 80% chance of a major health change in the next two years. This is a population-level statistic, not a certainty for you as an individual. Speaking with a healthcare professional about stress management may be helpful.",
  };

  /* ================================================================ */
  /*  Results                                                          */
  /* ================================================================ */
  if (phase === "results") {
    const checkedEvents = LIFE_EVENTS.filter((e) => checked.has(e.id)).sort(
      (a, b) => b.lcu - a.lcu
    );

    /* progress bar max capped at 600 for visual scale */
    const barPct = Math.min((totalLcu / 600) * 100, 100);

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your Stress Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Holmes-Rahe Social Readjustment Rating Scale
        </p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tc.bg} ${tc.border}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${tc.text}`}>
              {tierLabel[tier]}
            </h2>
            <span className={`text-2xl font-bold ${tc.text}`}>
              {totalLcu} LCU
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${barPct}%`, backgroundColor: tc.bar }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tc.text}`}>
            {tierMessage[tier]}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* Checked Items Breakdown */}
        {checkedEvents.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Your Checked Events ({checkedEvents.length})
            </h2>
            <div className="space-y-2">
              {checkedEvents.map((e) => (
                <div
                  key={e.id}
                  className="flex items-center justify-between p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg"
                >
                  <span className="text-sm text-neutral-700 dark:text-neutral-200">
                    {e.text}
                  </span>
                  <span className="shrink-0 ml-3 text-sm font-bold text-sage-700 dark:text-sage-400">
                    {e.lcu} LCU
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between p-3 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-lg">
                <span className="text-sm font-bold text-sage-700 dark:text-sage-300">
                  Total
                </span>
                <span className="text-sm font-bold text-sage-700 dark:text-sage-300">
                  {totalLcu} LCU
                </span>
              </div>
            </div>
          </div>
        )}

        {checkedEvents.length === 0 && (
          <div className="mb-8 p-5 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl text-center">
            <p className="text-sm text-green-700 dark:text-green-300">
              You did not check any life events. Your LCU total is 0.
            </p>
          </div>
        )}

        {/* Score Ranges */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Score Ranges
          </h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-lg text-center bg-green-50 dark:bg-green-950/30">
              <p className="text-xs font-bold text-green-700 dark:text-green-300">
                0&ndash;149
              </p>
              <p className="text-xs text-green-700 dark:text-green-300">
                Low susceptibility
              </p>
            </div>
            <div className="p-3 rounded-lg text-center bg-amber-50 dark:bg-amber-950/30">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300">
                150&ndash;299
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-300">
                ~50% risk
              </p>
            </div>
            <div className="p-3 rounded-lg text-center bg-red-50 dark:bg-red-950/30">
              <p className="text-xs font-bold text-red-700 dark:text-red-300">
                300+
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                ~80% risk
              </p>
            </div>
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2 text-center">
            Risk percentages are from the original 1967 research and describe
            population-level statistical associations, not individual
            predictions.
          </p>
        </div>

        <AdSlot position="results-middle" />

        {/* Related Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/k6-distress-scale"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                K6 Distress Scale &rarr;
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                6-item psychological distress measure
              </p>
            </Link>
            <Link
              href="/phq-9-depression-test"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                PHQ-9 Depression Self-Check &rarr;
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                9-item validated depression screener
              </p>
            </Link>
            <Link
              href="/gad-7-anxiety-test"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                GAD-7 Anxiety Self-Check &rarr;
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                7-item validated anxiety screener
              </p>
            </Link>
            <Link
              href="/dass-21-depression-anxiety-stress"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                DASS-21 Depression/Anxiety/Stress &rarr;
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Screen all three in one assessment
              </p>
            </Link>
            <Link
              href="/work-stress-check"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                Work Stress &amp; Burnout &rarr;
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                12-item work stress and burnout check
              </p>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-sm font-medium"
          >
            Print Results
          </button>
          <button
            onClick={handleRetake}
            className="px-5 py-2.5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-sand-100 dark:hover:bg-night-700 transition-colors text-sm font-medium"
          >
            Retake Inventory
          </button>
        </div>

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the Holmes-Rahe Scale</h2>
          <p>
            The Social Readjustment Rating Scale was developed by psychiatrists
            Thomas Holmes and Richard Rahe in 1967 at the University of
            Washington School of Medicine. Their research examined over 5,000
            medical patients to establish whether stressful life events could
            cause illness. The study found a positive correlation between the
            number and severity of life changes and the onset of illness.
          </p>
          <p>
            Holmes and Rahe created the scale by surveying people about the
            relative amount of readjustment each life event required, using
            marriage as a baseline (assigned 50 Life Change Units). From this
            data, they derived the LCU values for all 43 events. The scale has
            been validated across multiple cultures and remains one of the most
            widely cited instruments in stress research.
          </p>
          <h2>Why Positive Events Count</h2>
          <p>
            One of the key insights of the Holmes-Rahe research is that
            <em> any</em> significant life change — positive or negative —
            requires adaptation and uses physiological resources. Marriage,
            retirement, pregnancy, and personal achievements all appear on the
            scale because they demand readjustment. The total stress load
            reflects not just negative events but the overall amount of change a
            person is navigating.
          </p>
          <h2>Limitations</h2>
          <p>
            The Holmes-Rahe Scale was developed in the 1960s with a primarily
            Western sample. Some events may be less relevant today, and the scale
            does not account for individual differences in coping, social
            support, cultural context, or the subjective meaning of events. The
            risk percentages (50% and 80%) come from the original research and
            represent population-level associations, not individual predictions.
            Modern stress research recognizes that stress is highly individual
            and influenced by many factors beyond life events alone.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The Holmes-Rahe Stress Inventory is an educational tool for
            self-reflection. It is not a clinical assessment, diagnosis, or
            prediction of future health outcomes. The risk percentages cited are
            population-level statistical associations from the original 1967
            research and do not predict individual outcomes. Always consult a
            qualified healthcare professional for health concerns. Reviewed by a
            Certified Drug and Alcohol Counselor (CADC-II).
          </p>
        </div>

        <ToolReviewerBio />

        {/* Crisis Resources */}
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Need Support?
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
              <p>Text HOME to 741741 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">SAMHSA Treatment Locator</p>
              <p>findtreatment.gov</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-neutral-400 dark:text-neutral-500 mb-10">
          Your responses were scored entirely in your browser. Nothing was stored
          or transmitted.
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
                    &#9662;
                  </span>
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

  /* ================================================================ */
  /*  Checklist Phase                                                   */
  /* ================================================================ */
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
        Holmes-Rahe Stress Inventory
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        Social Readjustment Rating Scale &middot; Holmes &amp; Rahe (1967)
      </p>
      <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-8">
        43 items &middot; ~3 minutes &middot; Completely private
      </p>

      <AdSlot position="tool-top" />

      {/* Instruction box */}
      <div className="mb-8 p-5 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <h2 className="text-base font-bold text-sage-700 dark:text-sage-300 mb-2">
          Instructions
        </h2>
        <p className="text-sm text-sage-700 dark:text-sage-300 leading-relaxed">
          Check all events that have happened to you in the{" "}
          <strong>past 12 months</strong>. Each event has a Life Change Unit
          (LCU) value. Your total score is the sum of all checked events. You do
          not need to check every item — only those that apply.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-neutral-400 dark:text-neutral-500 mb-1">
          <span>{checkedCount} of 43 checked</span>
          <span>Running total: {totalLcu} LCU</span>
        </div>
        <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-500 rounded-full transition-all duration-300"
            style={{ width: `${(checkedCount / 43) * 100}%` }}
          />
        </div>
      </div>

      {/* Event Checklist */}
      <div className="space-y-2 mb-8">
        {LIFE_EVENTS.map((event) => {
          const isChecked = checked.has(event.id);
          return (
            <button
              key={event.id}
              type="button"
              onClick={() => handleToggle(event.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-colors text-left ${
                isChecked
                  ? "bg-sage-50 dark:bg-sage-950/30 border-sage-300 dark:border-sage-700"
                  : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700 hover:border-sage-300 dark:hover:border-sage-700"
              }`}
            >
              {/* Checkbox visual */}
              <div
                className={`shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                  isChecked
                    ? "bg-sage-600 border-sage-600 text-white"
                    : "border-neutral-300 dark:border-neutral-600"
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              {/* Event text */}
              <span
                className={`flex-1 text-sm ${
                  isChecked
                    ? "text-neutral-800 dark:text-neutral-100 font-medium"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {event.text}
              </span>

              {/* LCU badge */}
              <span
                className={`shrink-0 text-xs font-bold px-2 py-1 rounded-md ${
                  isChecked
                    ? "bg-sage-200 dark:bg-sage-800 text-sage-800 dark:text-sage-200"
                    : "bg-sand-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {event.lcu} LCU
              </span>
            </button>
          );
        })}
      </div>

      {/* Running total + Submit */}
      <div className="sticky bottom-4 z-10 mb-10">
        <div className="bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl shadow-lg p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
              Total: {totalLcu} LCU
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              {checkedCount} event{checkedCount !== 1 ? "s" : ""} checked
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-sage-600 text-white hover:bg-sage-700 transition-colors shadow-sm"
          >
            See My Results
          </button>
        </div>
      </div>

      {/* YMYL Disclaimer */}
      <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        <p className="font-semibold mb-1">Clinical Disclaimer</p>
        <p>
          The Holmes-Rahe Stress Inventory is an educational tool for
          self-reflection. It is not a clinical assessment, diagnosis, or
          prediction of future health outcomes. The risk percentages cited are
          population-level statistical associations from the original 1967
          research and do not predict individual outcomes. Always consult a
          qualified healthcare professional for health concerns. Reviewed by a
          Certified Drug and Alcohol Counselor (CADC-II).
        </p>
      </div>

      {/* Crisis Resources */}
      <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
          Need Support?
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
        Your responses are scored entirely in your browser. Nothing is stored or
        transmitted.
      </p>
    </div>
  );
}
