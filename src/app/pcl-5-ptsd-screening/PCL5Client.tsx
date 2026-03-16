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

interface Cluster {
  key: string;
  label: string;
  sublabel: string;
  items: number[]; // 0-indexed question indices
}

const CLUSTERS: Cluster[] = [
  { key: "B", label: "Cluster B \u2014 Intrusion", sublabel: "Re-experiencing the event", items: [0, 1, 2, 3, 4] },
  { key: "C", label: "Cluster C \u2014 Avoidance", sublabel: "Avoiding reminders", items: [5, 6] },
  { key: "D", label: "Cluster D \u2014 Cognition & Mood", sublabel: "Negative thoughts and feelings", items: [7, 8, 9, 10, 11, 12, 13] },
  { key: "E", label: "Cluster E \u2014 Arousal & Reactivity", sublabel: "Feeling on edge", items: [14, 15, 16, 17, 18, 19] },
];

const QUESTIONS = [
  "Repeated, disturbing, and unwanted memories of the stressful experience?",
  "Repeated, disturbing dreams of the stressful experience?",
  "Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?",
  "Feeling very upset when something reminded you of the stressful experience?",
  "Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?",
  "Avoiding memories, thoughts, or feelings related to the stressful experience?",
  "Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?",
  "Trouble remembering important parts of the stressful experience?",
  "Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?",
  "Blaming yourself or someone else for the stressful experience or what happened after it?",
  "Having strong negative feelings such as fear, horror, anger, guilt, or shame?",
  "Loss of interest in activities that you used to enjoy?",
  "Feeling distant or cut off from other people?",
  "Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?",
  "Irritable behavior, angry outbursts, or acting aggressively?",
  "Taking too many risks or doing things that could cause you harm?",
  'Being "superalert" or watchful or on guard?',
  "Feeling jumpy or easily startled?",
  "Having difficulty concentrating?",
  "Trouble falling or staying asleep?",
];

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "A little bit", value: 1 },
  { label: "Moderately", value: 2 },
  { label: "Quite a bit", value: 3 },
  { label: "Extremely", value: 4 },
];

const RANGES = [
  { min: 0, max: 10, level: "Minimal", key: "minimal", description: "Your responses suggest minimal levels of PTSD-related symptoms over the past month.", suggestion: "Continue to be mindful of how you are feeling. If you notice changes, consider checking in again." },
  { min: 11, max: 20, level: "Mild", key: "mild", description: "Your responses suggest mild levels of PTSD-related symptoms over the past month, indicating some distress related to a stressful experience.", suggestion: "Consider monitoring your symptoms over the coming weeks. If they persist or worsen, speaking with a healthcare provider can be helpful." },
  { min: 21, max: 32, level: "Moderate", key: "moderate", description: "Your responses suggest moderate levels of PTSD-related symptoms over the past month. Professional evaluation may be beneficial.", suggestion: "Consider reaching out to a mental health professional to discuss how you have been feeling. Early conversations can make a real difference in recovery." },
  { min: 33, max: 80, level: "Probable PTSD", key: "probable", description: "Your total score meets or exceeds the clinically significant cutoff of 33, which suggests a probable PTSD presentation. Professional evaluation is strongly recommended.", suggestion: "Speaking with a mental health professional who specializes in trauma is strongly encouraged. Veterans can contact the Veterans Crisis Line at 1-800-273-8255 (Press 1). The SAMHSA Helpline (1-800-662-4357) provides free referrals 24/7." },
];

function getRange(score: number) {
  return RANGES.find((r) => score >= r.min && score <= r.max)!;
}

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  minimal:  { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600" },
  mild:     { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600" },
  moderate: { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30",     bar: "from-warm-400 to-warm-600" },
  probable: { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "from-crisis-400 to-crisis-600" },
};

const CLUSTER_COLORS: Record<string, string> = {
  B: "from-blue-400 to-blue-600",
  C: "from-amber-400 to-amber-600",
  D: "from-purple-400 to-purple-600",
  E: "from-rose-400 to-rose-600",
};

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function PCL5Client({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(20).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const totalScore = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const allAnswered = answers.every((a) => a !== null);
  const range = getRange(totalScore);
  const colors = RANGE_COLORS[range.key];
  const probablePTSD = totalScore >= 33;
  const progress = (answers.filter((a) => a !== null).length / 20) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function clusterScore(cluster: Cluster) {
    return cluster.items.reduce((s, i) => s + (answers[i] ?? 0), 0);
  }

  function clusterMax(cluster: Cluster) {
    return cluster.items.length * 4;
  }

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 19) {
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
    setAnswers(Array(20).fill(null));
    setShowResults(false);
    setShowScoring(false);
    setExpandedFaq(null);
    setShareMessage("");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/pcl-5-ptsd-screening";

    if (mode === "blank") {
      const shareData = {
        title: "PCL-5 PTSD Self-Check \u2014 Free & Private",
        text: "Take a free, private PCL-5 PTSD screening self-check. Your answers never leave your browser.",
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

    const summary = `PCL-5 Self-Check Results\nScore: ${totalScore}/80 \u2014 ${range.level}\n\nThis is a screening tool, not a diagnosis. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My PCL-5 Results", text: summary }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [totalScore, range.level]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Public Domain</span>
          <span className="badge bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">VA / NCPTSD</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          PCL-5 PTSD Self-Check
        </h1>
        <p className="text-sm text-gray-500 mt-1 mb-4">
          Last updated: <time dateTime="2026-03">March 2026</time>
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          A validated 20-item screening measure developed by the National Center for PTSD. It assesses symptoms across four DSM-5 clusters to help you reflect on how a stressful experience may be affecting you. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~5 Minutes" },
            { icon: "\uD83D\uDCCB", text: "20 Questions" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>
      </header>

      {/* Disclaimer Gate */}
      {!accepted && (
        <DisclaimerGate
          toolName="PCL-5"
          toolDescription="This self-check uses the PCL-5 (PTSD Checklist for DSM-5), a validated screening measure developed by the National Center for PTSD at the U.S. Department of Veterans Affairs. It is in the public domain. No permission is required to reproduce."
          onAccept={() => setAccepted(true)}
        />
      )}

      {/* Questionnaire */}
      {accepted && !showResults && (
        <div className="animate-fade-in">
          {/* Instruction */}
          <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4 mb-4">
            <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
              <strong>Instructions:</strong> Below is a list of problems that people sometimes have in response to a very stressful experience. Please read each problem carefully and then select one of the options to indicate how much you have been bothered by that problem <strong>in the past month</strong>.
            </p>
          </div>

          {/* Progress */}
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">
                {answers.filter((a) => a !== null).length} of 20 answered
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                In the past <strong>month</strong>
              </span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Questions grouped by cluster */}
          {CLUSTERS.map((cluster) => (
            <div key={cluster.key} className="mb-6">
              {/* Cluster Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${CLUSTER_COLORS[cluster.key]}`} />
                <div>
                  <h2 className="text-sm font-bold text-neutral-700 dark:text-neutral-200">{cluster.label}</h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{cluster.sublabel}</p>
                </div>
              </div>

              <div className="space-y-3">
                {cluster.items.map((qi) => {
                  const isReachable = qi <= furthestAnswered + 1;
                  return (
                    <div
                      key={qi}
                      ref={(el) => { questionRefs.current[qi] = el; }}
                      className={`card p-5 transition-all duration-300 ${
                        isReachable ? "opacity-100" : "opacity-30 pointer-events-none"
                      } ${
                        answers[qi] !== null
                          ? "border-sage-200 dark:border-sage-800"
                          : ""
                      }`}
                    >
                      <div className="flex gap-3 items-start">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${
                          answers[qi] !== null
                            ? "bg-sage-500 text-white"
                            : "bg-sand-100 dark:bg-night-700 text-neutral-400"
                        }`}>
                          {answers[qi] !== null ? "\u2713" : qi + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                            {QUESTIONS[qi]}
                          </p>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                            {OPTIONS.map((opt) => (
                              <button
                                key={opt.value}
                                onClick={() => handleAnswer(qi, opt.value)}
                                className={`p-2 rounded-xl border-2 text-center transition-all text-xs sm:text-sm leading-tight ${
                                  answers[qi] === opt.value
                                    ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold"
                                    : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"
                                }`}
                              >
                                {opt.label}
                                <span className="block text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">({opt.value})</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

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
          {/* Probable PTSD Alert */}
          {probablePTSD && (
            <div className="bg-crisis-50 dark:bg-crisis-950/30 border-2 border-crisis-300 dark:border-crisis-800 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex gap-3 items-start">
                <span className="text-xl">{"\uD83D\uDEA8"}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-crisis-800 dark:text-crisis-300 mb-2">
                    Your score suggests probable PTSD
                  </h3>
                  <p className="text-sm text-crisis-700 dark:text-crisis-400 leading-relaxed mb-3">
                    Your total score of {totalScore} meets or exceeds the clinically significant cutoff of 33. This does not confirm PTSD, but it strongly suggests that a professional evaluation would be beneficial. You do not have to manage these symptoms alone — effective, evidence-based support is available.
                  </p>
                  <div className="bg-crisis-100/50 dark:bg-crisis-900/30 rounded-xl p-4 space-y-1.5">
                    <p className="text-xs font-semibold text-crisis-700 dark:text-crisis-400 mb-1">Resources:</p>
                    <p className="text-sm text-crisis-700 dark:text-crisis-400"><strong>Veterans:</strong> Veterans Crisis Line — Call <strong>1-800-273-8255 (Press 1)</strong> or text <strong>838255</strong></p>
                    <p className="text-sm text-crisis-700 dark:text-crisis-400"><strong>US:</strong> 988 Suicide &amp; Crisis Lifeline — Call or text <strong>988</strong></p>
                    <p className="text-sm text-crisis-700 dark:text-crisis-400"><strong>US:</strong> SAMHSA National Helpline — Call <strong>1-800-662-4357</strong> (free, confidential, 24/7)</p>
                    <p className="text-sm text-crisis-700 dark:text-crisis-400"><strong>US:</strong> Crisis Text Line — Text <strong>HOME</strong> to <strong>741741</strong></p>
                    <p className="text-sm text-crisis-700 dark:text-crisis-400"><strong>International:</strong> Visit <strong>findahelpline.com</strong> for your country</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Printable Results Area */}
          <div ref={printRef} id="printable-results">
            {/* Score Card */}
            <div className="card overflow-hidden mb-5">
              <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your PCL-5 Score</p>
                <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
                <p className={`text-sm font-semibold ${colors.text}`}>out of 80 — {range.level}</p>
                <div className="mt-6">
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 80) * 100}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">
                    <span>0 — Minimal</span>
                    <span className="text-center">33 cutoff</span>
                    <span>80 — Severe</span>
                  </div>
                  {/* Cutoff marker */}
                  <div className="relative h-0">
                    <div className="absolute top-[-10px] border-l-2 border-dashed border-neutral-400 dark:border-neutral-500 h-[10px]" style={{ left: `${(33 / 80) * 100}%` }} />
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">{range.description}</p>
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <strong>What you can consider next:</strong> {range.suggestion}
                  </p>
                </div>
                <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                  <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                    <strong>Important reminder:</strong> This score reflects your self-reported symptoms, not a clinical assessment. The PCL-5 is a screening tool — only a qualified mental health professional can properly evaluate PTSD through a comprehensive clinical interview. This tool is for personal reflection and education only.
                  </p>
                </div>
              </div>
            </div>

            {/* Cluster Breakdown */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Symptom Cluster Breakdown</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                The PCL-5 measures four DSM-5 symptom clusters. Higher scores within a cluster suggest more distress in that area.
              </p>
              <div className="space-y-4">
                {CLUSTERS.map((cluster) => {
                  const score = clusterScore(cluster);
                  const max = clusterMax(cluster);
                  const pct = (score / max) * 100;
                  return (
                    <div key={cluster.key}>
                      <div className="flex justify-between items-center mb-1.5">
                        <div>
                          <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">{cluster.label}</span>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-2">{cluster.sublabel}</span>
                        </div>
                        <span className="text-sm font-bold text-neutral-600 dark:text-neutral-300">{score}/{max}</span>
                      </div>
                      <div className="h-2.5 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${CLUSTER_COLORS[cluster.key]} rounded-full transition-all duration-700`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Answer Summary */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Responses</h3>
              {CLUSTERS.map((cluster) => (
                <div key={cluster.key} className="mb-4 last:mb-0">
                  <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">{cluster.label}</p>
                  <div className="divide-y divide-sand-100 dark:divide-neutral-700">
                    {cluster.items.map((qi) => (
                      <div key={qi} className="flex justify-between items-start gap-3 py-2">
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                          {qi + 1}. {QUESTIONS[qi]}
                        </span>
                        <span className={`text-sm font-semibold whitespace-nowrap ${
                          (answers[qi] ?? 0) >= 2 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
                        }`}>
                          {OPTIONS[answers[qi]!]?.label} ({answers[qi]})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>PCL-5 Self-Check from mindchecktools.com — {new Date().toLocaleDateString()}</p>
              <p>This is a screening tool, not a diagnosis. Consult a healthcare professional.</p>
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
              <p className="text-xs text-sage-600 dark:text-sage-400 font-medium mt-2 animate-fade-in">
                {"\u2713"} {shareMessage}
              </p>
            )}
          </div>

          {/* Download Reflection Summary */}
          <ReflectionSummary
            toolName="PCL-5 PTSD Self-Check"
            toolUrl="https://mindchecktools.com/pcl-5-ptsd-screening"
            score={totalScore}
            severityLabel={range.level}
            scoreRange={`${range.min}–${range.max}`}
            interpretation={range.description}
            suggestion={range.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["pcl-5-ptsd-screening"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q,
              answer: `${OPTIONS[answers[i]!]?.label} (${answers[i]})`,
            }))}
          />

          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["pcl-5-ptsd-screening"] && (
            <ReflectionPrompts
              toolName="PCL-5 PTSD Self-Check"
              prompts={REFLECTION_PROMPTS["pcl-5-ptsd-screening"].prompts}
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
                  The PCL-5 adds your responses (0\u20134) across 20 items for a total between 0 and 80. A cutoff score of 33 is widely used in research and clinical settings to indicate probable PTSD:
                </p>
                {RANGES.map((r) => {
                  const active = totalScore >= r.min && totalScore <= r.max;
                  const c = RANGE_COLORS[r.key];
                  return (
                    <div key={r.key} className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      active ? `${c.bg} ring-1 ring-inset ring-current/10` : ""
                    }`}>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${c.bar} flex-shrink-0`} />
                      <span className={`text-sm ${active ? `font-semibold ${c.text}` : "text-neutral-500 dark:text-neutral-400"}`}>
                        {r.min}\u2013{r.max}: {r.level}
                      </span>
                    </div>
                  );
                })}
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-2">
                  These ranges are based on published research from the National Center for PTSD. They should not be treated as diagnostic thresholds.
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are struggling with trauma-related symptoms, you are not alone. These resources are available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "Veterans Crisis Line (US)", detail: "1-800-273-8255 (Press 1) or text 838255 \u2014 24/7", color: "text-blue-600 dark:text-blue-400" },
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 \u2014 available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "SAMHSA National Helpline (US)", detail: "1-800-662-4357 \u2014 free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
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

          {/* Educational Content */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              What Is PTSD and How Does the PCL-5 Work?
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What Is PTSD?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event such as combat, a serious accident, assault, natural disaster, or other life-threatening situations. While it is normal to feel distressed after trauma, PTSD is characterized by symptoms that persist for more than a month and significantly interfere with daily life. According to the National Center for PTSD, about 6 out of every 100 people will experience PTSD at some point in their lives.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What the PCL-5 Measures</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The PCL-5 assesses the 20 symptoms of PTSD as defined by the DSM-5, organized into four clusters. <strong>Cluster B (Intrusion)</strong> covers re-experiencing symptoms like flashbacks and nightmares. <strong>Cluster C (Avoidance)</strong> addresses deliberate avoidance of trauma-related thoughts or situations. <strong>Cluster D (Cognition and Mood)</strong> includes negative beliefs, emotional numbness, and loss of interest. <strong>Cluster E (Arousal and Reactivity)</strong> covers hypervigilance, irritability, sleep problems, and difficulty concentrating. The cluster breakdown in your results helps identify which areas may be most affected.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">The Importance of Professional Evaluation</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The PCL-5 is a screening tool, not a clinical assessment. A score of 33 or above suggests probable PTSD, but only a qualified mental health professional can make a proper evaluation through a comprehensive clinical interview that considers your full history, the nature of the traumatic event, and the duration and severity of your symptoms. Many conditions can produce overlapping symptoms — depression, anxiety, grief, and adjustment disorders may present similarly. Professional evaluation ensures you receive the most appropriate support.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Evidence-Based Support for PTSD</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  PTSD is one of the most well-researched mental health conditions, and effective, evidence-based approaches are available. These include Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR), among others. The VA offers specialized PTSD programs for veterans. For anyone seeking help, the SAMHSA National Helpline (1-800-662-4357) provides free, confidential referrals 24/7. Recovery from trauma is possible, and seeking help is a sign of strength.
                </p>
              </div>
              <ToolReviewerBio />
            </div>
          </section>

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
                  National Center for PTSD. PTSD Checklist for DSM-5 (PCL-5).{" "}
                  <a href="https://www.ptsd.va.gov/professional/assessment/adult-sr/ptsd-checklist.asp" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">VA National Center for PTSD</a>
                </li>
                <li>
                  National Institute of Mental Health (NIMH). Post-Traumatic Stress Disorder.{" "}
                  <a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
                </li>
                <li>
                  American Psychological Association. Clinical Practice Guideline for the Treatment of PTSD.{" "}
                  <a href="https://www.apa.org/ptsd-guideline" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">apa.org</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "PHQ-9 Depression Self-Check", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
                { name: "GAD-7 Anxiety Self-Check", desc: "7-question validated anxiety screener", href: "/gad-7-anxiety-test" },
                { name: "CAGE-AID Substance Screen", desc: "4-question alcohol & drug screening", href: "/cage-aid-substance-abuse-screening" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot position="Footer" className="mb-8" />

          {/* Attribution */}
          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
              The PCL-5 was developed by the National Center for PTSD at the U.S. Department of Veterans Affairs. It is in the public domain. No permission required to reproduce, translate, display, or distribute.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              This tool is for educational purposes only. It is not medical advice, a diagnosis, or a treatment recommendation.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
