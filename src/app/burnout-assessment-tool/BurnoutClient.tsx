"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

// ── Data ────────────────────────────────────────────────────────────────

const QUESTIONS = [
  // Emotional Exhaustion (Questions 1-5)
  "I feel emotionally drained from my work",
  "I feel used up at the end of the workday",
  "I feel fatigued when I get up in the morning and have to face another day at work",
  "Working with people all day is a strain for me",
  "I feel burned out from my work",
  
  // Depersonalization/Cynicism (Questions 6-10)
  "I've become more callous toward people since I took this job",
  "I worry that this job is hardening me emotionally",
  "I don't really care what happens to some recipients",
  "I feel I treat some recipients as if they were impersonal objects",
  "I've become less interested in my work since I started this job",
  
  // Reduced Personal Accomplishment (Questions 11-15)
  "I can easily understand how my recipients feel about things",
  "I deal very effectively with the problems of my recipients",
  "I feel I'm positively influencing other people's lives through my work",
  "I feel very energetic",
  "I can easily create a relaxed atmosphere with my recipients",
];

const OPTIONS = [
  { label: "Never", value: 0 },
  { label: "A few times a year", value: 1 },
  { label: "Once a month or less", value: 2 },
  { label: "A few times a month", value: 3 },
  { label: "Once a week", value: 4 },
  { label: "A few times a week", value: 5 },
  { label: "Every day", value: 6 },
];

// Note: Questions 11-15 are reverse scored (0=6, 1=5, 2=4, 3=3, 4=2, 5=1, 6=0)
const REVERSE_SCORED_INDICES = [10, 11, 12, 13, 14]; // Questions 11-15 (0-indexed)

const RANGES = [
  { 
    min: 0, 
    max: 18, 
    level: "Low Burnout", 
    key: "low", 
    description: "Your responses suggest low levels of burnout symptoms. You appear to be managing work-related stress effectively.",
    suggestion: "Continue your current self-care practices and maintain healthy work-life boundaries. Regular check-ins can help you stay aware of your stress levels."
  },
  { 
    min: 19, 
    max: 32, 
    level: "Moderate Burnout", 
    key: "moderate", 
    description: "Your responses suggest moderate levels of burnout symptoms. You may be experiencing some emotional exhaustion, cynicism, or reduced sense of accomplishment.",
    suggestion: "Consider implementing stress-reduction strategies and setting clearer boundaries. Speaking with a supervisor, HR representative, or mental health professional could provide helpful support."
  },
  { 
    min: 33, 
    max: 54, 
    level: "High Burnout", 
    key: "high", 
    description: "Your responses suggest high levels of burnout symptoms. You may be experiencing significant emotional exhaustion, depersonalization, and reduced personal accomplishment.",
    suggestion: "It's important to take these results seriously. Consider reaching out to a healthcare professional, counselor, or employee assistance program. Burnout is treatable, and support is available to help you recover."
  },
  { 
    min: 55, 
    max: 90, 
    level: "Severe Burnout", 
    key: "severe", 
    description: "Your responses suggest severe levels of burnout symptoms. You may be experiencing intense emotional exhaustion, significant cynicism, and a strong sense of reduced accomplishment.",
    suggestion: "Please consider seeking professional support as soon as possible. Burnout at this level can have serious impacts on your health and well-being. Contact a healthcare provider, therapist, or crisis resource for immediate guidance."
  },
];

function getRange(score: number) {
  return RANGES.find((r) => score >= r.min && score <= r.max)!;
}

// Color mappings per range key
const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  low:      { text: "text-sage-700 dark:text-sage-400",         bg: "bg-sage-50 dark:bg-sage-950/30",      bar: "from-sage-400 to-sage-600" },
  moderate: { text: "text-warm-700 dark:text-warm-400",         bg: "bg-warm-50 dark:bg-warm-950/30",      bar: "from-warm-400 to-warm-600" },
  high:     { text: "text-orange-700 dark:text-orange-400",     bg: "bg-orange-50 dark:bg-orange-950/30",  bar: "from-orange-400 to-orange-600" },
  severe:   { text: "text-crisis-700 dark:text-crisis-400",     bg: "bg-crisis-50 dark:bg-crisis-950/30",  bar: "from-crisis-400 to-crisis-600" },
};

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function BurnoutClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(15).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Calculate score with reverse scoring for questions 11-15
  const totalScore = answers.reduce<number>((score, answer, index) => {
    if (answer === null) return score;
    if (REVERSE_SCORED_INDICES.includes(index)) {
      // Reverse score: 0 becomes 6, 1 becomes 5, etc.
      return score + (6 - answer);
    }
    return score + answer;
  }, 0);

  const allAnswered = answers.every((a) => a !== null);
  const range = getRange(totalScore);
  const colors = RANGE_COLORS[range.key];
  const progress = (answers.filter((a) => a !== null).length / 15) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  // Calculate subscale scores
  const emotionalExhaustionScore = answers.slice(0, 5).reduce<number>((sum, a) => {
    if (a === null) return sum;
    return sum + a;
  }, 0);
  
  const depersonalizationScore = answers.slice(5, 10).reduce<number>((sum, a) => {
    if (a === null) return sum;
    return sum + a;
  }, 0);
  
  const personalAccomplishmentScore = answers.slice(10, 15).reduce<number>((sum, a) => {
    if (a === null) return sum;
    // Reverse score for personal accomplishment questions
    return sum + (6 - a);
  }, 0);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 14) {
      setTimeout(() => {
        questionRefs.current[qi + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  function handleSubmit() {
    setShowResults(true);
    setTimeout(() => {
      if (resultsRef.current) resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }

  function handleReset() {
    setAnswers(Array(15).fill(null));
    setShowResults(false);
    setShowScoring(false);
    setExpandedFaq(null);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/burnout-assessment-tool";
    if (mode === "blank") {
      const shareData = {
        title: "Burnout Assessment — Free & Private",
        text: "Take a free, private Burnout Assessment. Your answers never leave your browser.",
        url,
      };
      if (navigator.share) {
        try { await navigator.share(shareData); return; } catch { /* user cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    const summary = `Burnout Assessment Results\nScore: ${totalScore}/90 — ${range.level}\n\nThis is a screening tool, not a diagnosis. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My Burnout Assessment Results", text: summary }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [totalScore, range.level]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Clinically-Informed</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free to Use</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Burnout Assessment Tool
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          Assess emotional exhaustion, depersonalization, and reduced personal accomplishment with this professionally-designed screening tool.
        </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Last updated: March 2026</p>
      </header>

      <AdSlot position="burnout-top" className="mb-8" />

      {!accepted ? (
        <DisclaimerGate
          toolName="Burnout Assessment"
          toolDescription="This self-check uses a validated burnout assessment tool based on established psychological measures to help you understand your current stress and burnout levels."
          onAccept={() => setAccepted(true)}
        />
      ) : (
        <>
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-600 dark:text-neutral-400">
                {answers.filter((a) => a !== null).length} of 15 questions answered
              </span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-neutral-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sage-500 to-sage-700 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6 mb-10">
            {QUESTIONS.map((q, qi) => (
              <div
                key={qi}
                ref={(el) => { questionRefs.current[qi] = el; }}
                className={`p-5 rounded-xl border transition-all duration-200 ${
                  answers[qi] !== null
                    ? "border-sage-300 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/20"
                    : "border-neutral-200 dark:border-night-700 bg-white dark:bg-night-900"
                } ${qi <= furthestAnswered + 1 ? "opacity-100" : "opacity-50"}`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 dark:bg-sage-900 flex items-center justify-center">
                    <span className="font-medium text-sage-700 dark:text-sage-300">
                      {qi + 1}
                    </span>
                  </div>
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100 pt-1">
                    {q}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleAnswer(qi, opt.value)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                        answers[qi] === opt.value
                          ? "bg-sage-500 text-white shadow-sm"
                          : "bg-neutral-100 dark:bg-night-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-night-700"
                      }`}
                      aria-pressed={answers[qi] === opt.value}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`flex-1 px-6 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                allAnswered
                  ? "bg-sage-600 hover:bg-sage-700 text-white shadow-md hover:shadow-lg"
                  : "bg-neutral-200 dark:bg-night-800 text-neutral-500 dark:text-neutral-400 cursor-not-allowed"
              }`}
            >
              {allAnswered ? "See My Results" : "Answer All Questions to Continue"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3.5 rounded-xl font-medium border border-neutral-300 dark:border-night-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-night-800 transition-colors"
            >
              Start Over
            </button>
          </div>

          {/* Results */}
          {showResults && (
            <div
              ref={resultsRef}
              aria-live="polite"
              className={`mb-12 p-6 rounded-2xl ${colors.bg} border ${colors.text.replace("text-", "border-")}/30`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Your Results</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.text} ${colors.bg}`}>
                  {range.level}
                </span>
              </div>

              {/* Score Display */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Total Score: {totalScore}/90</span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    Range: {range.min}-{range.max}
                  </span>
                </div>
                <div className="h-4 bg-neutral-200 dark:bg-night-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${colors.bar} transition-all duration-1000`}
                    style={{ width: `${Math.min(100, (totalScore / 90) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Subscale Scores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 border border-neutral-200 dark:border-night-700">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                    Emotional Exhaustion
                  </h3>
                  <div className="text-2xl font-bold text-sage-700 dark:text-sage-400">
                    {emotionalExhaustionScore}/30
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    Questions 1-5
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 border border-neutral-200 dark:border-night-700">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                    Depersonalization
                  </h3>
                  <div className="text-2xl font-bold text-warm-700 dark:text-warm-400">
                    {depersonalizationScore}/30
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    Questions 6-10
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 border border-neutral-200 dark:border-night-700">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                    Personal Accomplishment
                  </h3>
                  <div className="text-2xl font-bold text-orange-700 dark:text-orange-400">
                    {personalAccomplishmentScore}/30
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    Questions 11-15 (reverse scored)
                  </div>
                </div>
              </div>

              {/* Interpretation */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                    What This Means
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {range.description}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                    Suggested Next Steps
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {range.suggestion}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-night-700">
                <button
                  type="button"
                  onClick={() => setShowScoring(!showScoring)}
                  className="text-sm font-medium text-sage-700 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300"
                >
                  {showScoring ? "Hide" : "Show"} Scoring Details
                </button>
                {showScoring && (
                  <div className="mt-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl text-sm">
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">
                      This assessment is based on three dimensions of burnout:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                      <li><strong>Emotional Exhaustion</strong> (questions 1-5): Feelings of being emotionally overextended and drained</li>
                      <li><strong>Depersonalization</strong> (questions 6-10): Unfeeling and impersonal response toward recipients of one&apos;s service</li>
                      <li><strong>Reduced Personal Accomplishment</strong> (questions 11-15): Feelings of incompetence and lack of achievement</li>
                    </ul>
                    <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                      Questions 11-15 are reverse scored (higher scores indicate lower personal accomplishment).
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {showResults && (
            <>
              <div className="flex gap-3 mb-8">
                <button onClick={handleReset} className="btn-primary flex-1 text-base py-4">Start Over</button>
                <button
                  onClick={handlePrint}
                  className="btn-secondary px-5 py-4 flex items-center gap-2"
                  title="Print your results"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span className="hidden sm:inline">Print</span>
                </button>
              </div>

              <div className="card p-4 mb-8">
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">Share</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleShare("results")}
                    className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Copy My Results
                  </button>
                  <button
                    onClick={() => handleShare("blank")}
                    className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Blank Test
                  </button>
                </div>
                {shareMessage && (
                  <p className="text-xs text-sage-600 dark:text-sage-400 font-medium mt-2 animate-fade-in">
                    ✓ {shareMessage}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Download Reflection Summary */}
          <ReflectionSummary
            toolName="Burnout Assessment Tool"
            toolUrl="https://mindchecktools.com/burnout-assessment-tool"
            score={totalScore}
            severityLabel={range.level}
            scoreRange={`${range.min}–${range.max}`}
            interpretation={range.description}
            suggestion={range.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["burnout-assessment-tool"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q,
              answer: `${OPTIONS[answers[i]!]?.label} (${answers[i]})`,
            }))}
          />

          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["burnout-assessment-tool"] && (
            <ReflectionPrompts
              toolName="Burnout Assessment Tool"
              prompts={REFLECTION_PROMPTS["burnout-assessment-tool"].prompts}
            />
          )}

          <AdSlot position="burnout-middle" className="my-8" />

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div
                  key={i}
                  className="border border-neutral-200 dark:border-night-700 rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-neutral-50 dark:hover:bg-night-800 transition-colors"
                    aria-expanded={expandedFaq === i}
                  >
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-neutral-500 dark:text-neutral-400 transition-transform ${
                        expandedFaq === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedFaq === i && (
                    <div className="px-5 py-4 border-t border-neutral-200 dark:border-night-700 bg-neutral-50/50 dark:bg-night-800/50">
                      <p className="text-neutral-700 dark:text-neutral-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <ToolReviewerBio />

          {/* Crisis Resources */}
          <div className="mb-10 p-6 rounded-2xl bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800">
            <h3 className="font-medium text-crisis-900 dark:text-crisis-100 mb-3">
              Immediate Support Resources
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-crisis-100 dark:bg-crisis-900 flex items-center justify-center">
                  <span className="text-crisis-700 dark:text-crisis-300 font-medium">988</span>
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    Suicide & Crisis Lifeline
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Call or text <strong>988</strong> for free, confidential support 24/7
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-crisis-100 dark:bg-crisis-900 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-crisis-700 dark:text-crisis-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    SAMHSA National Helpline
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Call <strong>1-800-662-4357</strong> for treatment referral and information
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-crisis-100 dark:bg-crisis-900 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-crisis-700 dark:text-crisis-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    Crisis Text Line
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Text <strong>HOME</strong> to <strong>741741</strong> for free crisis counseling
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-crisis-200 dark:border-crisis-800">
              <Link
                href="/crisis-resources"
                className="inline-flex items-center gap-1 text-sm font-medium text-crisis-700 dark:text-crisis-400 hover:text-crisis-800 dark:hover:text-crisis-300"
              >
                View all crisis resources
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Related Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Related Mental Health Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/work-stress-check"
                className="p-5 rounded-xl border border-neutral-200 dark:border-night-700 hover:border-sage-300 dark:hover:border-sage-800 hover:bg-sage-50/50 dark:hover:bg-sage-950/20 transition-all group"
              >
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-sage-700 dark:group-hover:text-sage-400">
                  Work Stress Check
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Assess workplace stress factors and get personalized coping strategies.
                </p>
              </Link>
              <Link
                href="/phq-9-depression-test"
                className="p-5 rounded-xl border border-neutral-200 dark:border-night-700 hover:border-sage-300 dark:hover:border-sage-800 hover:bg-sage-50/50 dark:hover:bg-sage-950/20 transition-all group"
              >
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-sage-700 dark:group-hover:text-sage-400">
                  PHQ-9 Depression Test
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Professional depression screening based on the Patient Health Questionnaire.
                </p>
              </Link>
              <Link
                href="/gad-7-anxiety-test"
                className="p-5 rounded-xl border border-neutral-200 dark:border-night-700 hover:border-sage-300 dark:hover:border-sage-800 hover:bg-sage-50/50 dark:hover:bg-sage-950/20 transition-all group"
              >
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-sage-700 dark:group-hover:text-sage-400">
                  GAD-7 Anxiety Test
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Clinically validated anxiety screening used by healthcare professionals worldwide.
                </p>
              </Link>
            </div>
          </section>

          <AdSlot position="burnout-bottom" className="mb-8" />

          {/* Disclaimer */}
          <div className="text-sm text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-night-700 pt-6">
            <p className="mb-2">
              <strong>Disclaimer:</strong> This tool is for educational and self-assessment purposes only. It is not a diagnostic tool and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical or mental health condition.
            </p>
            <p>
              If you are experiencing a medical or mental health emergency, please call 911 or go to the nearest emergency room immediately.
            </p>
          </div>
        </>
      )}
    </div>
  );
}