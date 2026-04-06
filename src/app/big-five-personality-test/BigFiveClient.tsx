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
  "Am the life of the party.",
  "Feel little concern for others.",
  "Am always prepared.",
  "Get stressed out easily.",
  "Have a rich vocabulary.",
  "Don\u2019t talk a lot.",
  "Am interested in people.",
  "Leave my belongings around.",
  "Am relaxed most of the time.",
  "Have difficulty understanding abstract ideas.",
  "Feel comfortable around people.",
  "Insult people.",
  "Pay attention to details.",
  "Worry about things.",
  "Have a vivid imagination.",
  "Keep in the background.",
  "Sympathize with others\u2019 feelings.",
  "Make a mess of things.",
  "Seldom feel blue.",
  "Am not interested in abstract ideas.",
  "Start conversations.",
  "Am not interested in other people\u2019s problems.",
  "Get chores done right away.",
  "Am easily disturbed.",
  "Have excellent ideas.",
  "Have little to say.",
  "Have a soft heart.",
  "Often forget to put things back in their proper place.",
  "Get upset easily.",
  "Do not have a good imagination.",
  "Talk to a lot of different people at parties.",
  "Am not really interested in others.",
  "Like order.",
  "Change my mood a lot.",
  "Am quick to understand things.",
  "Don\u2019t like to draw attention to myself.",
  "Take time out for others.",
  "Shirk my duties.",
  "Have frequent mood swings.",
  "Use difficult words.",
  "Don\u2019t mind being the center of attention.",
  "Feel others\u2019 emotions.",
  "Follow a schedule.",
  "Get irritated easily.",
  "Spend time reflecting on things.",
  "Am quiet around strangers.",
  "Make people feel at ease.",
  "Am exacting in my work.",
  "Often feel blue.",
  "Am full of ideas.",
];

const OPTIONS = [
  { label: "Very Inaccurate", shortLabel: "1", value: 1 },
  { label: "Moderately Inaccurate", shortLabel: "2", value: 2 },
  { label: "Neither Accurate Nor Inaccurate", shortLabel: "3", value: 3 },
  { label: "Moderately Accurate", shortLabel: "4", value: 4 },
  { label: "Very Accurate", shortLabel: "5", value: 5 },
];

// Zero-indexed reverse-scored items
const REVERSE_ITEMS = new Set([1, 5, 7, 8, 9, 11, 15, 17, 18, 19, 21, 25, 27, 29, 31, 35, 37, 45]);

function reverseScore(index: number, value: number): number {
  return REVERSE_ITEMS.has(index) ? 6 - value : value;
}

// ── Trait Configuration ─────────────────────────────────────────────────

interface TraitConfig {
  key: string;
  label: string;
  indices: number[];
  color: {
    bg: string;
    text: string;
    bar: string;
  };
  descriptions: {
    low: string;
    moderate: string;
    high: string;
  };
}

const TRAITS: TraitConfig[] = [
  {
    key: "openness",
    label: "Openness",
    indices: [4, 9, 14, 19, 24, 29, 34, 39, 44, 49],
    color: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-700 dark:text-purple-300",
      bar: "bg-purple-500",
    },
    descriptions: {
      high: "You are intellectually curious, creative, and open to new experiences. You appreciate art, imagination, and unconventional ideas.",
      moderate: "You balance practical thinking with some openness to new ideas. You can appreciate creativity while valuing routine.",
      low: "You prefer practical, straightforward approaches. You value tradition and familiar routines over novelty and abstraction.",
    },
  },
  {
    key: "conscientiousness",
    label: "Conscientiousness",
    indices: [2, 7, 12, 17, 22, 27, 32, 37, 42, 47],
    color: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-700 dark:text-blue-300",
      bar: "bg-blue-500",
    },
    descriptions: {
      high: "You are organized, disciplined, and goal-oriented. You plan ahead, pay attention to details, and follow through on commitments.",
      moderate: "You balance structure with flexibility. You can be organized when needed but are also comfortable with some spontaneity.",
      low: "You prefer flexibility and spontaneity over rigid structure. You may find strict schedules constraining and prefer to go with the flow.",
    },
  },
  {
    key: "extraversion",
    label: "Extraversion",
    indices: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
    color: {
      bg: "bg-amber-100 dark:bg-amber-900/30",
      text: "text-amber-700 dark:text-amber-300",
      bar: "bg-amber-500",
    },
    descriptions: {
      high: "You are outgoing, energetic, and thrive in social situations. You enjoy being around people and tend to be talkative and assertive.",
      moderate: "You balance social engagement with alone time. You can enjoy group settings but also value solitude and quiet reflection.",
      low: "You prefer quieter, less stimulating environments. You tend to be reserved and reflective, and may find large social gatherings draining.",
    },
  },
  {
    key: "agreeableness",
    label: "Agreeableness",
    indices: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46],
    color: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-300",
      bar: "bg-green-500",
    },
    descriptions: {
      high: "You are compassionate, cooperative, and considerate of others\u2019 feelings. You value harmony and tend to be trusting and helpful.",
      moderate: "You balance concern for others with your own needs. You can be cooperative while also standing firm when necessary.",
      low: "You tend to be more competitive and skeptical. You prioritize objective analysis over social harmony and are comfortable with confrontation.",
    },
  },
  {
    key: "neuroticism",
    label: "Neuroticism",
    indices: [3, 8, 13, 18, 23, 28, 33, 38, 43, 48],
    color: {
      bg: "bg-red-100 dark:bg-red-900/30",
      text: "text-red-700 dark:text-red-300",
      bar: "bg-red-500",
    },
    descriptions: {
      high: "You tend to experience more emotional ups and downs. You may be more sensitive to stress, worry, and negative emotions than average.",
      moderate: "You experience a typical range of emotional reactions. You handle most stressors reasonably well but may feel overwhelmed at times.",
      low: "You tend to be emotionally stable and calm. You handle stress well and are less likely to experience persistent negative emotions.",
    },
  },
];

function getLevel(score: number): "low" | "moderate" | "high" {
  if (score <= 25) return "low";
  if (score <= 35) return "moderate";
  return "high";
}

function getLevelLabel(score: number): string {
  if (score <= 25) return "Low";
  if (score <= 35) return "Moderate";
  return "High";
}

// ── Radar Chart Helper ──────────────────────────────────────────────────

function RadarChart({ scores }: { scores: number[] }) {
  const cx = 200;
  const cy = 200;
  const outerR = 160;
  const labels = ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"];
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  // 5 vertices starting from top (-90 deg), going clockwise by 72 deg
  function getPoint(vertexIndex: number, fraction: number) {
    const angle = (-90 + vertexIndex * 72) * (Math.PI / 180);
    return {
      x: cx + outerR * fraction * Math.cos(angle),
      y: cy + outerR * fraction * Math.sin(angle),
    };
  }

  function pentagonPath(fraction: number) {
    return Array.from({ length: 5 })
      .map((_, i) => {
        const pt = getPoint(i, fraction);
        return `${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
      })
      .join(" ") + " Z";
  }

  // Score polygon: each score is out of 50
  const scorePath = scores
    .map((s, i) => {
      const frac = s / 50;
      const pt = getPoint(i, frac);
      return `${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
    })
    .join(" ") + " Z";

  // Label positions pushed slightly further out
  const labelOffset = 1.2;

  return (
    <div className="flex justify-center mb-6">
      <svg
        viewBox="0 0 400 400"
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
        aria-label="Pentagon radar chart showing Big Five personality trait scores"
        role="img"
      >
        {/* Grid pentagons */}
        {gridLevels.map((level) => (
          <path
            key={level}
            d={pentagonPath(level)}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-neutral-300 dark:text-neutral-600"
          />
        ))}

        {/* Axis lines from center to each vertex */}
        {Array.from({ length: 5 }).map((_, i) => {
          const pt = getPoint(i, 1);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={pt.x}
              y2={pt.y}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-neutral-300 dark:text-neutral-600"
            />
          );
        })}

        {/* Score polygon */}
        <path
          d={scorePath}
          fill="rgba(96, 165, 250, 0.25)"
          stroke="rgba(96, 165, 250, 1)"
          strokeWidth="2"
          className="dark:fill-blue-400/20 dark:stroke-blue-400"
        />

        {/* Score dots */}
        {scores.map((s, i) => {
          const frac = s / 50;
          const pt = getPoint(i, frac);
          return (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r="4"
              fill="rgba(96, 165, 250, 1)"
              className="dark:fill-blue-400"
            />
          );
        })}

        {/* Labels */}
        {labels.map((label, i) => {
          const pt = getPoint(i, labelOffset);
          const anchor = i === 0 ? "middle" : i < 3 ? "start" : "end";
          const dy = i === 0 ? "-0.5em" : i === 2 || i === 3 ? "1em" : "0.35em";
          return (
            <text
              key={label}
              x={pt.x}
              y={pt.y}
              textAnchor={anchor}
              dy={dy}
              className="fill-neutral-700 dark:fill-neutral-300 text-[11px] sm:text-xs font-semibold"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function BigFiveClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(50).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [expandedTrait, setExpandedTrait] = useState<string | null>(null);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

  // Scoring
  const scored = answers.map((a, i) => (a !== null ? reverseScore(i, a) : null));

  function traitScore(indices: number[]): number {
    return indices.reduce<number>((sum, idx) => sum + (scored[idx] ?? 0), 0);
  }

  const traitScores = TRAITS.map((t) => traitScore(t.indices));
  const allAnswered = answers.every((a) => a !== null);
  const progress = (answers.filter((a) => a !== null).length / 50) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 49) {
      setTimeout(() => {
        questionRefs.current[qi + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  function handleSubmit() {
    setShowResults(true);
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }

  function handleReset() {
    setAnswers(Array(50).fill(null));
    setShowResults(false);
    setShowScoring(false);
    setExpandedFaq(null);
    setExpandedTrait(null);
    setShareMessage("");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/big-five-personality-test";

    if (mode === "blank") {
      const shareData = {
        title: "Big Five Personality Test (IPIP-NEO-50) \u2014 Free & Private",
        text: "Take a free, private Big Five personality test based on the IPIP-NEO-50. Your answers never leave your browser.",
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

    const summary = TRAITS.map((t, i) => `${t.label}: ${traitScores[i]}/50`).join("\n");
    const text = `Big Five Personality Test (IPIP-NEO-50) Results\n${summary}\n\nThis is a self-reflection tool, not a diagnosis. Take the test: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My Big Five Personality Results", text }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(text);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [traitScores]);

  // Build a summary label for the results
  const highestTrait = TRAITS[traitScores.indexOf(Math.max(...traitScores))];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400">Validated</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Public Domain</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Big Five Personality Test (IPIP-NEO-50)
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          A 50-item personality assessment measuring the Big Five traits: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\u{1F512}", text: "100% Private" },
            { icon: "\u23F1", text: "~8 Minutes" },
            { icon: "\u{1F4CB}", text: "50 Questions" },
          ].map((b) => (
            <span key={b.text} className="badge bg-purple-50/80 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last updated: March 16, 2026</p>
      </header>

      {/* Disclaimer Gate */}
      {!accepted && (
        <DisclaimerGate
          toolName="IPIP-NEO-50"
          toolDescription="This assessment uses the IPIP-NEO-50, a public-domain personality inventory based on the Big Five model developed by Goldberg and colleagues. It is intended for educational and self-reflection purposes only. It is not a clinical evaluation and should not replace professional psychological assessment."
          onAccept={() => setAccepted(true)}
        />
      )}

      {/* Questionnaire */}
      {accepted && !showResults && (
        <div className="animate-fade-in">
          {/* Progress */}
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                {answers.filter((a) => a !== null).length} of 50 answered
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Rate each statement <strong>1&ndash;5</strong>
              </span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {QUESTIONS.map((q, qi) => {
              const isReachable = qi <= furthestAnswered + 1;
              return (
                <div
                  key={qi}
                  ref={(el) => { questionRefs.current[qi] = el; }}
                  className={`card p-5 transition-all duration-300 ${
                    isReachable ? "opacity-100" : "opacity-30 pointer-events-none"
                  } ${
                    answers[qi] !== null
                      ? "border-purple-200 dark:border-purple-800"
                      : ""
                  }`}
                >
                  <div className="flex gap-3 items-start">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${
                      answers[qi] !== null
                        ? "bg-purple-500 text-white"
                        : "bg-sand-100 dark:bg-night-700 text-neutral-400"
                    }`}>
                      {answers[qi] !== null ? "\u2713" : qi + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                        {q}
                      </p>
                      <div className="grid grid-cols-5 gap-1">
                        {OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleAnswer(qi, opt.value)}
                            title={opt.label}
                            className={`p-2 min-h-[44px] rounded-xl border-2 text-center transition-all text-sm leading-tight ${
                              answers[qi] === opt.value
                                ? "border-purple-400 dark:border-purple-600 bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 font-semibold"
                                : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-purple-300 dark:hover:border-purple-700"
                            }`}
                          >
                            {opt.shortLabel}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 px-1">
                        <span>Very Inaccurate</span>
                        <span>Very Accurate</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit */}
          <div className="flex gap-3 mt-6">
            <button onClick={handleSubmit} disabled={!allAnswered} className="btn-primary flex-1 text-base py-4">
              View My Results
            </button>
            <button onClick={handleReset} className="btn-secondary px-5">
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div ref={resultsRef} className="animate-fade-in" aria-live="polite">
          {/* Printable Results Area */}
          <div ref={printRef} id="printable-results">
            {/* Results Header */}
            <div className="card overflow-hidden mb-5">
              <div className="bg-purple-50 dark:bg-purple-950/30 p-6 sm:p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-2">Your Big Five Personality Profile</p>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-purple-700 dark:text-purple-300 leading-tight mb-1">
                  Strongest trait: {highestTrait.label}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Based on 50 self-report items scored across 5 personality dimensions
                </p>
              </div>
            </div>

            <AdSlot position="After Results Header" className="mb-5" />

            {/* Radar Chart */}
            <div className="card p-5 sm:p-6 mb-5">
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4 text-center">
                Personality Profile
              </p>
              <RadarChart scores={traitScores} />
            </div>

            {/* Individual Trait Cards */}
            <div className="space-y-3 mb-5">
              {TRAITS.map((trait, i) => {
                const score = traitScores[i];
                const pct = (score / 50) * 100;
                const level = getLevel(score);
                const levelLabel = getLevelLabel(score);
                const desc = trait.descriptions[level];
                const isExpanded = expandedTrait === trait.key;

                return (
                  <div key={trait.key} className="card overflow-hidden">
                    <button
                      onClick={() => setExpandedTrait(isExpanded ? null : trait.key)}
                      className="w-full p-5 text-left"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-semibold ${trait.color.text}`}>
                          {trait.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${trait.color.text}`}>
                            {score}/50 ({levelLabel})
                          </span>
                          <svg
                            className={`w-4 h-4 text-neutral-400 transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${trait.color.bar} rounded-full transition-all duration-700`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                        <span>10 &mdash; Low</span>
                        <span>50 &mdash; High</span>
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-5 pb-5 animate-fade-in">
                        <div className={`${trait.color.bg} rounded-xl p-4`}>
                          <p className={`text-sm ${trait.color.text} leading-relaxed`}>{desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <AdSlot position="Mid Results" className="mb-5" />

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>IPIP-NEO-50 Big Five Personality Test from mindchecktools.com &mdash; {new Date().toLocaleDateString()}</p>
              <p>This is a self-reflection tool, not a diagnosis. Consult a healthcare professional.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-5">
            <button onClick={handleReset} className="btn-primary flex-1 text-base py-4">
              Start Over
            </button>
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

          {/* Share Buttons */}
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
              <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-2 animate-fade-in">
                {"\u2713"} {shareMessage}
              </p>
            )}
          </div>

          {/* Download Reflection Summary */}
          <ReflectionSummary
            toolName="IPIP-NEO-50 Big Five Personality Test"
            toolUrl="https://mindchecktools.com/big-five-personality-test"
            score={traitScores[0]}
            severityLabel={`Strongest: ${highestTrait.label}`}
            scoreRange={TRAITS.map((t, i) => `${t.label}: ${traitScores[i]}/50`).join(" | ")}
            interpretation={highestTrait.descriptions[getLevel(traitScores[TRAITS.indexOf(highestTrait)])]}
            suggestion="Consider exploring these results with a therapist or counselor to better understand how your personality traits influence your daily life and relationships."
            reflectionPrompts={REFLECTION_PROMPTS["big-five-personality-test"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q,
              answer: `${answers[i]} \u2014 ${OPTIONS[(answers[i] ?? 1) - 1]?.label}${REVERSE_ITEMS.has(i) ? " (R)" : ""}`,
            }))}
          />



          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["big-five-personality-test"] && (
            <ReflectionPrompts
              toolName="IPIP-NEO-50 Big Five Personality Test"
              prompts={REFLECTION_PROMPTS["big-five-personality-test"].prompts}
            />
          )}

          {/* How Scoring Works */}
          <div className="card overflow-hidden mb-5">
            <button
              onClick={() => setShowScoring(!showScoring)}
              className="w-full p-5 flex justify-between items-center text-left"
            >
              <span className="font-serif text-base font-semibold text-neutral-800 dark:text-neutral-100">
                How this score is calculated
              </span>
              <svg className={`w-5 h-5 text-neutral-400 transition-transform ${showScoring ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showScoring && (
              <div className="px-5 pb-5 space-y-3 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  The IPIP-NEO-50 measures five broad personality dimensions using 10 items per trait. Items cycle through traits (1=E, 2=A, 3=C, 4=N, 5=O, 6=E, ...).
                </p>
                <div className="space-y-2">
                  {TRAITS.map((trait, i) => (
                    <div key={trait.key} className="p-3 rounded-lg bg-sand-50 dark:bg-night-700">
                      <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-1">
                        {trait.label}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        10 items, some reverse-scored. Raw score range: 10&ndash;50. Your score: <strong>{traitScores[i]}/50</strong>
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Each item is rated 1 (Very Inaccurate) to 5 (Very Accurate). Reverse-scored items are flipped (1&rarr;5, 2&rarr;4, etc.) before summing. Higher scores indicate more of that trait.
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-2">
                  Scoring follows the IPIP framework (Goldberg et al., 2006). Score ranges (Low: 10&ndash;25, Moderate: 26&ndash;35, High: 36&ndash;50) are approximate guidelines, not clinical thresholds.
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need Support Right Now?</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are struggling with your emotional well-being, support is available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 \u2014 available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "SAMHSA Helpline (US)", detail: "1-800-662-4357 \u2014 free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
                { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
                { label: "International Resources", detail: "Visit findahelpline.com for your country", color: "text-sage-600 dark:text-sage-400" },
              ].map((r) => (
                <div key={r.label} className="p-3.5 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700">
                  <p className={`text-sm font-semibold ${r.color}`}>{r.label}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
            <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
              Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
            </Link>
          </div>

          <AdSlot position="Below Results" className="mb-8" />

          {/* FAQ */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqData.map((faq, i) => (
                <div key={i} className="card overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full p-4 flex justify-between items-center text-left gap-3"
                  >
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 flex-1">{faq.question}</span>
                    <svg className={`w-4 h-4 text-neutral-400 transition-transform flex-shrink-0 ${expandedFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === i && (
                    <div className="px-4 pb-4 animate-fade-in">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <AdSlot position="Mid Content" className="mb-8" />

          {/* What Research Is This Based On? */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">What Research Is This Based On?</h2>
            <div className="card p-5 sm:p-6">
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  Goldberg, L. R., Johnson, J. A., Eber, H. W., Hogan, R., Ashton, M. C., Cloninger, C. R., &amp; Gough, H. G. (2006). The International Personality Item Pool and the future of public-domain personality measures.{" "}
                  <a href="https://doi.org/10.1016/j.jrp.2005.08.007" target="_blank" rel="noopener noreferrer" className="underline text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">Journal of Research in Personality</a>
                </li>
                <li>
                  International Personality Item Pool (IPIP).{" "}
                  <a href="https://ipip.ori.org/" target="_blank" rel="noopener noreferrer" className="underline text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">ipip.ori.org</a>
                </li>
                <li>
                  John, O. P., &amp; Srivastava, S. (1999). The Big Five trait taxonomy: History, measurement, and theoretical perspectives. In L. A. Pervin &amp; O. P. John (Eds.), <em>Handbook of personality: Theory and research</em> (pp. 102&ndash;138). Guilford Press.
                </li>
                <li>
                  Costa, P. T., &amp; McCrae, R. R. (1992). <em>Revised NEO Personality Inventory (NEO-PI-R) and NEO Five-Factor Inventory (NEO-FFI) professional manual.</em> Odessa, FL: Psychological Assessment Resources.
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Mental Health Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Attachment Style Quiz", desc: "36-item measure of attachment patterns", href: "/attachment-style-quiz" },
                { name: "Rosenberg Self-Esteem Scale", desc: "10-item global self-esteem measure", href: "/rosenberg-self-esteem-scale" },
                { name: "UCLA Loneliness Scale", desc: "20-item measure of subjective loneliness", href: "/ucla-loneliness-scale" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot position="Footer" className="mb-8" />

          {/* Attribution */}
          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
              The IPIP-NEO-50 uses items from the International Personality Item Pool (ipip.ori.org), a public-domain collection of personality items developed by Lewis R. Goldberg and colleagues. These items are free to use without permission.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              This personality assessment is based on the IPIP-NEO-50, a public-domain instrument. It is intended for educational and self-reflection purposes only. It is not a clinical evaluation and should not replace professional psychological assessment.
            </p>
            <ToolReviewerBio />
          </footer>
        </div>
      )}
    </div>
  );
}
