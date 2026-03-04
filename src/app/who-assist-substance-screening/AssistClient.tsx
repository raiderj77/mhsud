"use client";

import { useState } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

interface Substance {
  id: string;
  label: string;
  examples: string;
}

const SUBSTANCES: Substance[] = [
  { id: "tobacco", label: "Tobacco Products", examples: "cigarettes, chewing tobacco, cigars, e-cigarettes, vapes" },
  { id: "alcohol", label: "Alcoholic Beverages", examples: "beer, wine, spirits, cocktails, hard seltzer" },
  { id: "cannabis", label: "Cannabis", examples: "marijuana, pot, grass, hash, edibles, THC" },
  { id: "cocaine", label: "Cocaine", examples: "coke, crack, freebase" },
  { id: "amphetamines", label: "Amphetamine-Type Stimulants", examples: "speed, meth, MDMA/ecstasy, Adderall misuse" },
  { id: "inhalants", label: "Inhalants", examples: "nitrous oxide, glue, gasoline, paint thinner, poppers" },
  { id: "sedatives", label: "Sedatives or Sleeping Pills", examples: "Valium, Xanax, Ambien, benzodiazepines, barbiturates" },
  { id: "hallucinogens", label: "Hallucinogens", examples: "LSD, acid, mushrooms, PCP, ketamine, DMT" },
  { id: "opioids", label: "Opioids", examples: "heroin, fentanyl, morphine, codeine, oxycodone, hydrocodone" },
  { id: "other", label: "Other", examples: "any substance not listed above" },
];

/* WHO ASSIST v3.1 — each question has differently weighted response values */

interface QuestionDef {
  key: string;
  template: string;
  options: { value: number; label: string }[];
  onlyWhenRecent: boolean; // only shown when Q2 > 0
}

const QUESTIONS: QuestionDef[] = [
  {
    key: "q2",
    template: "In the past 3 months, how often have you used [substance]?",
    options: [
      { value: 0, label: "Never" },
      { value: 2, label: "Once or Twice" },
      { value: 3, label: "Monthly" },
      { value: 4, label: "Weekly" },
      { value: 6, label: "Daily or Almost Daily" },
    ],
    onlyWhenRecent: false,
  },
  {
    key: "q3",
    template: "In the past 3 months, how often have you had a strong desire or urge to use [substance]?",
    options: [
      { value: 0, label: "Never" },
      { value: 3, label: "Once or Twice" },
      { value: 4, label: "Monthly" },
      { value: 5, label: "Weekly" },
      { value: 6, label: "Daily or Almost Daily" },
    ],
    onlyWhenRecent: true,
  },
  {
    key: "q4",
    template: "In the past 3 months, how often has your use of [substance] led to health, social, legal, or financial problems?",
    options: [
      { value: 0, label: "Never" },
      { value: 4, label: "Once or Twice" },
      { value: 5, label: "Monthly" },
      { value: 6, label: "Weekly" },
      { value: 7, label: "Daily or Almost Daily" },
    ],
    onlyWhenRecent: true,
  },
  {
    key: "q5",
    template: "In the past 3 months, how often have you failed to do what was normally expected of you because of your use of [substance]?",
    options: [
      { value: 0, label: "Never" },
      { value: 5, label: "Once or Twice" },
      { value: 6, label: "Monthly" },
      { value: 7, label: "Weekly" },
      { value: 8, label: "Daily or Almost Daily" },
    ],
    onlyWhenRecent: true,
  },
  {
    key: "q6",
    template: "Has a friend, relative, or anyone else EVER expressed concern about your use of [substance]?",
    options: [
      { value: 0, label: "No, Never" },
      { value: 3, label: "Yes, but not in the past 3 months" },
      { value: 6, label: "Yes, in the past 3 months" },
    ],
    onlyWhenRecent: false,
  },
  {
    key: "q7",
    template: "Have you EVER tried and failed to control, cut down, or stop using [substance]?",
    options: [
      { value: 0, label: "No, Never" },
      { value: 3, label: "Yes, but not in the past 3 months" },
      { value: 6, label: "Yes, in the past 3 months" },
    ],
    onlyWhenRecent: false,
  },
];

const Q8_OPTIONS = [
  { value: 0, label: "No, Never" },
  { value: 2, label: "Yes, but not in the past 3 months" },
  { value: 4, label: "Yes, in the past 3 months" },
];

/* Risk levels */

interface RiskInfo {
  level: "low" | "moderate" | "high";
  label: string;
  color: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  borderLight: string;
  borderDark: string;
  recommendation: string;
}

function getRisk(substanceId: string, score: number): RiskInfo {
  const lowMax = substanceId === "alcohol" ? 10 : 3;

  if (score <= lowMax) {
    return {
      level: "low",
      label: "Low Risk",
      color: "#22c55e",
      bgLight: "bg-green-50",
      bgDark: "dark:bg-green-950/30",
      textLight: "text-green-700",
      textDark: "dark:text-green-300",
      borderLight: "border-green-200",
      borderDark: "dark:border-green-800",
      recommendation:
        "Your current use pattern carries a low risk of problems related to this substance. No intervention is needed at this time.",
    };
  }

  if (score <= 26) {
    return {
      level: "moderate",
      label: "Moderate Risk",
      color: "#f59e0b",
      bgLight: "bg-amber-50",
      bgDark: "dark:bg-amber-950/30",
      textLight: "text-amber-700",
      textDark: "dark:text-amber-300",
      borderLight: "border-amber-200",
      borderDark: "dark:border-amber-800",
      recommendation:
        "Your score suggests a moderate risk of health and other problems from your current use pattern. Consider reducing or stopping use. A brief intervention from a healthcare provider may be helpful.",
    };
  }

  return {
    level: "high",
    label: "High Risk",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    recommendation:
      "Your score suggests a high risk of experiencing severe problems from your current use pattern, and you may be dependent on this substance. An intensive assessment by a qualified healthcare professional is strongly recommended.",
  };
}

function getScore(answers: Record<string, number> | undefined): number {
  if (!answers) return 0;
  const q2 = answers.q2 ?? 0;
  const recent = q2 > 0;
  return (
    q2 +
    (recent ? (answers.q3 ?? 0) : 0) +
    (recent ? (answers.q4 ?? 0) : 0) +
    (recent ? (answers.q5 ?? 0) : 0) +
    (answers.q6 ?? 0) +
    (answers.q7 ?? 0)
  );
}

function formatQ(template: string, substance: Substance, otherName: string): string {
  const name = substance.id === "other" && otherName
    ? otherName.toLowerCase()
    : substance.label.toLowerCase();
  return template.replace("[substance]", name);
}

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

type Phase = "intro" | "q1" | "substance" | "q8" | "results";

interface Props {
  faqData: { question: string; answer: string }[];
}

export function AssistClient({ faqData }: Props) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [lifetimeUse, setLifetimeUse] = useState<Set<string>>(new Set());
  const [otherName, setOtherName] = useState("");
  const [subIdx, setSubIdx] = useState(0);
  const [substanceAnswers, setSubstanceAnswers] = useState<Record<string, Record<string, number>>>({});
  const [q8Answer, setQ8Answer] = useState<number | undefined>(undefined);

  /* Derived */
  const endorsed = SUBSTANCES.filter((s) => lifetimeUse.has(s.id));
  const showQ8 = endorsed.some((s) => s.id !== "tobacco");
  const currentSub = endorsed[subIdx] as Substance | undefined;

  /* Helpers */
  function goTo(p: Phase, idx?: number) {
    if (idx !== undefined) setSubIdx(idx);
    setPhase(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleSubstance(id: string) {
    setLifetimeUse((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleAnswer(substanceId: string, key: string, value: number) {
    setSubstanceAnswers((prev) => {
      const current = { ...(prev[substanceId] || {}) };
      current[key] = value;
      if (key === "q2" && value === 0) {
        delete current.q3;
        delete current.q4;
        delete current.q5;
      }
      return { ...prev, [substanceId]: current };
    });
  }

  function isSubComplete(substanceId: string): boolean {
    const a = substanceAnswers[substanceId];
    if (!a || a.q2 === undefined) return false;
    if (a.q2 > 0) {
      return a.q3 !== undefined && a.q4 !== undefined && a.q5 !== undefined && a.q6 !== undefined && a.q7 !== undefined;
    }
    return a.q6 !== undefined && a.q7 !== undefined;
  }

  function handleRetake() {
    setPhase("intro");
    setLifetimeUse(new Set());
    setOtherName("");
    setSubIdx(0);
    setSubstanceAnswers({});
    setQ8Answer(undefined);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Progress */
  const totalFormSteps = endorsed.length + (showQ8 ? 1 : 0);
  const currentFormStep = phase === "substance" ? subIdx + 1 : phase === "q8" ? endorsed.length + 1 : 0;
  const progressPct = totalFormSteps > 0 ? (currentFormStep / totalFormSteps) * 100 : 0;

  /* ================================================================ */
  /*  INTRO                                                            */
  /* ================================================================ */
  if (phase === "intro") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          WHO ASSIST Screening
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
          The Alcohol, Smoking and Substance Involvement Screening Test — a comprehensive substance use screening developed by the World Health Organization.
        </p>
        <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-8">
          10 substance categories · ~5–10 minutes · Completely private · WHO ASSIST v3.1
        </p>

        <AdSlot position="tool-top" />

        <div className="mb-8 p-5 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
          <h2 className="text-base font-bold text-sage-700 dark:text-sage-300 mb-3">What to Expect</h2>
          <ul className="space-y-2 text-sm text-sage-700 dark:text-sage-300">
            <li className="flex items-start gap-2">
              <span className="shrink-0 font-bold">1.</span>
              <span><strong>Lifetime use check</strong> — select which substances you have ever used, even once</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 font-bold">2.</span>
              <span><strong>Per-substance questions</strong> — for each substance, answer 2–6 questions about recent use, problems, and attempts to cut down</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 font-bold">3.</span>
              <span><strong>Risk results</strong> — a separate risk score for each substance with specific recommendations</span>
            </li>
          </ul>
        </div>

        <div className="text-center mb-10">
          <button
            onClick={() => goTo("q1")}
            className="px-8 py-3 rounded-xl text-base font-semibold bg-sage-600 text-white hover:bg-sage-700 transition-colors shadow-sm"
          >
            Begin Assessment
          </button>
        </div>

        {/* YMYL */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The WHO ASSIST is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a substance use disorder. Scores suggesting moderate or high risk warrant follow-up with a qualified healthcare professional. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
        </div>

        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">Crisis &amp; Support Resources</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
            <div><p className="font-bold">988 Suicide &amp; Crisis Lifeline</p><p>Call or text 988 · 24/7</p></div>
            <div><p className="font-bold">SAMHSA National Helpline</p><p>1-800-662-4357 · 24/7</p></div>
          </div>
        </div>

        <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
          Your responses are scored entirely in your browser. Nothing is stored or transmitted.
        </p>
      </div>
    );
  }

  /* ================================================================ */
  /*  Q1 — LIFETIME USE                                                */
  /* ================================================================ */
  if (phase === "q1") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Step 1: Lifetime Substance Use
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
          Which of the following substances have you <strong>ever</strong> used, even once? Check all that apply.
        </p>

        <div className="space-y-3 mb-6">
          {SUBSTANCES.map((s) => (
            <button
              key={s.id}
              onClick={() => toggleSubstance(s.id)}
              className={`w-full text-left p-4 rounded-xl border transition-colors ${
                lifetimeUse.has(s.id)
                  ? "bg-sage-50 dark:bg-sage-950/30 border-sage-300 dark:border-sage-700"
                  : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700 hover:border-sage-200 dark:hover:border-sage-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                  lifetimeUse.has(s.id)
                    ? "bg-sage-600 border-sage-600"
                    : "border-neutral-300 dark:border-neutral-600"
                }`}>
                  {lifetimeUse.has(s.id) && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">{s.label}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">{s.examples}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Other substance name input */}
        {lifetimeUse.has("other") && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
              Please specify the other substance:
            </label>
            <input
              type="text"
              value={otherName}
              onChange={(e) => setOtherName(e.target.value)}
              placeholder="e.g., kratom, GHB, etc."
              className="w-full px-4 py-2 rounded-lg border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-800 text-neutral-800 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400"
            />
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => goTo("intro")}
            className="px-5 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={() => {
              if (endorsed.length === 0) {
                goTo("results");
              } else {
                goTo("substance", 0);
              }
            }}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-sage-600 text-white hover:bg-sage-700 transition-colors"
          >
            {endorsed.length === 0 ? "See Results" : `Continue (${endorsed.length} selected)`}
          </button>
        </div>
      </div>
    );
  }

  /* ================================================================ */
  /*  SUBSTANCE DETAIL — Q2–Q7 per substance                          */
  /* ================================================================ */
  if (phase === "substance" && currentSub) {
    const a = substanceAnswers[currentSub.id] || {};
    const q2Val = a.q2;
    const displayName = currentSub.id === "other" && otherName ? otherName : currentSub.label;
    const complete = isSubComplete(currentSub.id);

    const visibleQuestions = QUESTIONS.filter((q) => {
      if (q.onlyWhenRecent && (q2Val === undefined || q2Val === 0)) return false;
      return true;
    });

    const handleNext = () => {
      if (!complete) return;
      if (subIdx < endorsed.length - 1) {
        goTo("substance", subIdx + 1);
      } else if (showQ8) {
        goTo("q8");
      } else {
        goTo("results");
      }
    };

    const handleBack = () => {
      if (subIdx > 0) {
        goTo("substance", subIdx - 1);
      } else {
        goTo("q1");
      }
    };

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-neutral-400 dark:text-neutral-500 mb-1">
            <span>Substance {subIdx + 1} of {endorsed.length}</span>
            <span>{Math.round(progressPct)}%</span>
          </div>
          <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <div className="h-full bg-sage-500 rounded-full transition-all duration-300" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* Substance Header */}
        <div className="mb-6 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl text-center">
          <h2 className="text-lg font-bold text-sage-700 dark:text-sage-300">{displayName}</h2>
          <p className="text-xs text-sage-600 dark:text-sage-400 mt-1">{currentSub.examples}</p>
        </div>

        {/* Questions */}
        <div className="space-y-5 mb-8">
          {visibleQuestions.map((q, qIdx) => {
            const selected = a[q.key];
            const isLong = q.options.length <= 3;

            return (
              <div key={q.key} className={`p-4 rounded-xl border transition-colors ${
                selected !== undefined
                  ? "bg-white dark:bg-night-800 border-sage-200 dark:border-sage-800"
                  : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
              }`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-sand-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-500 dark:text-neutral-400">
                    {qIdx + 1}
                  </span>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {formatQ(q.template, currentSub, otherName)}
                  </p>
                </div>
                <div className={`ml-10 ${isLong ? "flex flex-col gap-2" : "flex flex-wrap gap-2"}`}>
                  {q.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(currentSub.id, q.key, opt.value)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                        selected === opt.value
                          ? "bg-sage-600 text-white"
                          : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Q2 = Never note */}
        {q2Val === 0 && (
          <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
              Since you haven&apos;t used {displayName.toLowerCase()} in the past 3 months, questions about recent frequency, cravings, and problems are skipped. The two questions above ask about your lifetime experience with this substance.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className="px-5 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={!complete}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              complete
                ? "bg-sage-600 text-white hover:bg-sage-700"
                : "bg-sand-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500 cursor-not-allowed"
            }`}
          >
            {subIdx < endorsed.length - 1
              ? "Next Substance →"
              : showQ8
                ? "Continue →"
                : "See My Results →"}
          </button>
        </div>
      </div>
    );
  }

  /* ================================================================ */
  /*  Q8 — INJECTION USE                                               */
  /* ================================================================ */
  if (phase === "q8") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-neutral-400 dark:text-neutral-500 mb-1">
            <span>Final Question</span>
            <span>{Math.round(progressPct)}%</span>
          </div>
          <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <div className="h-full bg-sage-500 rounded-full transition-all duration-300" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Injection Drug Use
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8 max-w-lg mx-auto text-sm">
          This question is about non-medical injection use only. It is not included in your substance-specific scores — it is asked separately because injection use carries additional health risks.
        </p>

        <div className="p-4 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 mb-8">
          <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed mb-4">
            Have you <strong>ever</strong> used any drug by injection? (non-medical use only)
          </p>
          <div className="flex flex-col gap-2">
            {Q8_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setQ8Answer(opt.value)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  q8Answer === opt.value
                    ? "bg-sage-600 text-white"
                    : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => goTo("substance", endorsed.length - 1)}
            className="px-5 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={() => { if (q8Answer !== undefined) goTo("results"); }}
            disabled={q8Answer === undefined}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              q8Answer !== undefined
                ? "bg-sage-600 text-white hover:bg-sage-700"
                : "bg-sand-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500 cursor-not-allowed"
            }`}
          >
            See My Results →
          </button>
        </div>
      </div>
    );
  }

  /* ================================================================ */
  /*  RESULTS                                                          */
  /* ================================================================ */
  if (phase === "results") {
    /* Compute results for endorsed substances */
    const results = endorsed.map((s) => {
      const score = getScore(substanceAnswers[s.id]);
      const risk = getRisk(s.id, score);
      const displayName = s.id === "other" && otherName ? `Other: ${otherName}` : s.label;
      return { substance: s, displayName, score, risk };
    });

    /* Sort: high first, then moderate, then low */
    const order = { high: 0, moderate: 1, low: 2 };
    results.sort((a, b) => order[a.risk.level] - order[b.risk.level] || b.score - a.score);

    const hasHighRisk = results.some((r) => r.risk.level === "high");
    const hasModerateRisk = results.some((r) => r.risk.level === "moderate");
    const injectionRisk = q8Answer !== undefined && q8Answer > 0;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your ASSIST Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Substance-specific risk scores · WHO ASSIST v3.1
        </p>

        {/* No substances */}
        {endorsed.length === 0 && (
          <div className="p-6 rounded-xl border-2 mb-8 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <h2 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">No Substance Use Reported</h2>
            <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed">
              You indicated that you have never used any of the substances listed. Your risk level is low for all categories. No intervention is needed at this time.
            </p>
          </div>
        )}

        {/* Per-substance risk cards */}
        {results.length > 0 && (
          <div className="space-y-4 mb-8">
            {results.map((r) => {
              const pct = (r.score / 39) * 100;
              return (
                <div key={r.substance.id} className={`p-5 rounded-xl border-2 ${r.risk.bgLight} ${r.risk.bgDark} ${r.risk.borderLight} ${r.risk.borderDark}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-base font-bold ${r.risk.textLight} ${r.risk.textDark}`}>
                      {r.displayName}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        r.risk.level === "low" ? "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200"
                        : r.risk.level === "moderate" ? "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                        : "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200"
                      }`}>
                        {r.risk.label}
                      </span>
                      <span className={`text-lg font-bold ${r.risk.textLight} ${r.risk.textDark}`}>
                        {r.score}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2.5 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, backgroundColor: r.risk.color }}
                    />
                  </div>
                  <p className={`text-xs leading-relaxed ${r.risk.textLight} ${r.risk.textDark}`}>
                    {r.risk.recommendation}
                  </p>
                  {r.substance.id === "alcohol" && r.risk.level === "low" && r.score > 3 && (
                    <p className={`text-xs mt-2 italic ${r.risk.textLight} ${r.risk.textDark}`}>
                      Note: Alcohol uses a higher low-risk cutoff (0-10) compared to other substances (0-3) because alcohol is legal and widely consumed.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <AdSlot position="results-top" />

        {/* Injection Risk Flag */}
        {injectionRisk && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
              Injection Drug Use Risk
            </h2>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed mb-2">
              {q8Answer === 4
                ? "You reported injecting drugs in the past 3 months. Injection drug use carries significant additional health risks including blood-borne infections (HIV, Hepatitis B, Hepatitis C), skin infections, and overdose."
                : "You reported previous injection drug use. Even if you are not currently injecting, it is important to be aware of your risk for blood-borne infections (HIV, Hepatitis B, Hepatitis C) and to discuss testing with your healthcare provider."
              }
            </p>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed">
              {q8Answer === 4
                ? "Harm reduction services including needle exchange programs, testing for blood-borne infections, and naloxone (Narcan) for overdose prevention can reduce these risks. Contact SAMHSA at 1-800-662-4357 for local resources."
                : "Consider discussing your history with a healthcare provider and getting tested for blood-borne infections if you haven't already."
              }
            </p>
          </div>
        )}

        {/* High risk follow-up */}
        {hasHighRisk && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
              Professional Assessment Recommended
            </h2>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed mb-3">
              One or more of your substance scores indicates high risk. The WHO recommends an intensive assessment by a qualified healthcare professional to determine appropriate next steps.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/audit-alcohol-test" className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors">
                AUDIT Alcohol Screen →
              </Link>
              <Link href="/dast-10-drug-screening" className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors">
                DAST-10 Drug Screen →
              </Link>
            </div>
          </div>
        )}

        {/* Moderate risk follow-up */}
        {!hasHighRisk && hasModerateRisk && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-2">
              Consider a More Specific Screening
            </h2>
            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
              One or more of your substance scores indicates moderate risk. A more specific screening can provide additional detail:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/audit-alcohol-test" className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors">
                AUDIT Alcohol Screen →
              </Link>
              <Link href="/dast-10-drug-screening" className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors">
                DAST-10 Drug Screen →
              </Link>
              <Link href="/cage-aid-substance-abuse-screening" className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors">
                CAGE-AID Screen →
              </Link>
            </div>
          </div>
        )}

        {/* Score Guide */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Score Ranges
          </h2>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="p-3 rounded-lg text-center bg-green-50 dark:bg-green-950/30">
              <p className="text-xs font-bold text-green-700 dark:text-green-300">Low Risk</p>
              <p className="text-xs text-green-700 dark:text-green-300">0–3 (most)</p>
              <p className="text-xs text-green-700 dark:text-green-300">0–10 (alcohol)</p>
            </div>
            <div className="p-3 rounded-lg text-center bg-amber-50 dark:bg-amber-950/30">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300">Moderate Risk</p>
              <p className="text-xs text-amber-700 dark:text-amber-300">4–26 (most)</p>
              <p className="text-xs text-amber-700 dark:text-amber-300">11–26 (alcohol)</p>
            </div>
            <div className="p-3 rounded-lg text-center bg-red-50 dark:bg-red-950/30">
              <p className="text-xs font-bold text-red-700 dark:text-red-300">High Risk</p>
              <p className="text-xs text-red-700 dark:text-red-300">27+ (all)</p>
            </div>
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
            Max score per substance: 39 · Alcohol has a higher low-risk threshold because it is legal and widely consumed
          </p>
        </div>

        {/* Related Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/audit-alcohol-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">AUDIT Alcohol Screen →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">10-item WHO alcohol use screening</p>
            </Link>
            <Link href="/dast-10-drug-screening" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DAST-10 Drug Screen →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">10-item drug abuse screening test</p>
            </Link>
            <Link href="/cage-aid-substance-abuse-screening" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">CAGE-AID Screen →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">4-question alcohol and drug screen</p>
            </Link>
            <Link href="/readiness-to-change" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">Readiness to Change →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Stages of Change assessment</p>
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

        <AdSlot position="results-middle" />

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the WHO ASSIST</h2>
          <p>
            The ASSIST (Alcohol, Smoking and Substance Involvement Screening Test) was developed by the World Health Organization in collaboration with researchers from Australia, Brazil, India, Ireland, Israel, Palestine, the United Kingdom, and Zimbabwe. The project began in 1997 with the goal of creating a brief, culturally neutral screening instrument that could be used in primary care settings worldwide to identify people at risk of substance-related problems.
          </p>
          <p>
            Version 3.1, which this tool implements, was published after extensive validation across multiple countries and clinical settings. It has been shown to have good reliability and validity for detecting substance use disorders across all substance categories. The ASSIST is recommended by the WHO for use in primary healthcare, emergency departments, mental health settings, and community health programs.
          </p>
          <h2>Understanding Your Scores</h2>
          <p>
            The ASSIST produces a separate risk score for each substance you have used, which is an important feature. A person may have low risk for alcohol but moderate risk for cannabis and high risk for opioids — each substance is evaluated independently. This allows for targeted recommendations rather than a single overall score that might mask important differences.
          </p>
          <p>
            The three risk levels correspond to recommended levels of intervention: <strong>Low risk</strong> requires only positive reinforcement of current behavior. <strong>Moderate risk</strong> warrants a brief intervention — a short counseling session where a healthcare provider gives personalized feedback about your score, discusses risks, and supports your motivation to change. Brief interventions have strong evidence for reducing substance use, especially for alcohol and tobacco. <strong>High risk</strong> indicates that more intensive assessment and possibly treatment is needed, which may include specialized substance use disorder treatment, medication-assisted treatment, or residential care.
          </p>
          <h2>ASSIST vs. Other Screening Tools</h2>
          <p>
            The ASSIST fills a unique niche among substance use screening tools. The <Link href="/audit-alcohol-test">AUDIT</Link> is alcohol-specific and provides a more detailed picture of drinking patterns. The <Link href="/dast-10-drug-screening">DAST-10</Link> focuses on drug use but treats all drugs as a single category. The <Link href="/cage-aid-substance-abuse-screening">CAGE-AID</Link> is a quick 4-item screen but provides only a binary positive/negative result. The ASSIST is the only widely validated tool that provides substance-specific risk levels across all major substance categories in a single assessment.
          </p>
          <h2>When to Seek Help</h2>
          <p>
            If any of your substance scores fall in the moderate or high risk range, please consider speaking with a healthcare provider. Substance use problems often develop gradually, and early intervention leads to better outcomes. The SAMHSA National Helpline (1-800-662-4357) provides free, confidential, 24/7 referrals to local treatment facilities, support groups, and community organizations.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The WHO ASSIST is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a substance use disorder. Scores suggesting moderate or high risk warrant follow-up with a qualified healthcare professional. Always consult a healthcare provider for substance use concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
        </div>

        {/* Crisis Resources */}
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Crisis &amp; Support Resources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
            <div><p className="font-bold">988 Suicide &amp; Crisis Lifeline</p><p>Call or text 988 · 24/7</p></div>
            <div><p className="font-bold">SAMHSA National Helpline</p><p>1-800-662-4357 · 24/7</p></div>
            <div><p className="font-bold">Crisis Text Line</p><p>Text HOME to 741741</p></div>
            <div><p className="font-bold">International</p><p>findahelpline.com</p></div>
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

  /* Fallback — should not reach here */
  return null;
}
