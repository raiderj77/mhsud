"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

// ── Data ────────────────────────────────────────────────────────────────

const PART1_INTRO = "Has there ever been a period of time when you were not your usual self and...";

const PART1_QUESTIONS = [
  "...you felt so good or so hyper that other people thought you were not your normal self, or you were so hyper that you got into trouble?",
  "...you were so irritable that you shouted at people or started fights or arguments?",
  "...you felt much more self-confident than usual?",
  "...you got much less sleep than usual and found you didn't really miss it?",
  "...you were much more talkative or spoke much faster than usual?",
  "...thoughts raced through your head and you couldn't slow your mind down?",
  "...you were so easily distracted by things around you that you had trouble concentrating or staying on track?",
  "...you had much more energy than usual?",
  "...you were much more active or did many more things than usual?",
  "...you were much more social or outgoing than usual; for example, you telephoned friends in the middle of the night?",
  "...you were much more interested in sex than usual?",
  "...you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
  "...spending money got you or your family into trouble?",
];

const YES_NO = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 },
];

const IMPACT_OPTIONS = [
  { label: "No problem", value: 0 },
  { label: "Minor problem", value: 1 },
  { label: "Moderate problem", value: 2 },
  { label: "Serious problem", value: 3 },
];

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function MDQClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [part1, setPart1] = useState<(number | null)[]>(Array(13).fill(null));
  const [part2, setPart2] = useState<number | null>(null);
  const [part3, setPart3] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const part2Ref = useRef<HTMLDivElement>(null);
  const part3Ref = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Scoring
  const part1YesCount = part1.reduce<number>((s, a) => s + (a ?? 0), 0);
  const criterion1Met = part1YesCount >= 7;
  const criterion2Met = part2 === 1;
  const criterion3Met = part3 !== null && part3 >= 2;
  const positiveScreen = criterion1Met && criterion2Met && criterion3Met;

  const part1Answered = part1.every((a) => a !== null);
  const allAnswered = part1Answered && part2 !== null && part3 !== null;
  const totalItems = 15;
  const answeredCount = part1.filter((a) => a !== null).length + (part2 !== null ? 1 : 0) + (part3 !== null ? 1 : 0);
  const progress = (answeredCount / totalItems) * 100;
  const furthestPart1 = part1.findLastIndex((a) => a !== null);

  function handlePart1(qi: number, value: number) {
    const next = [...part1];
    next[qi] = value;
    setPart1(next);
    if (qi < 12) {
      setTimeout(() => {
        questionRefs.current[qi + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    } else {
      // Last Part 1 question answered — scroll to Part 2
      setTimeout(() => {
        part2Ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  function handlePart2(value: number) {
    setPart2(value);
    setTimeout(() => {
      part3Ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
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
    setPart1(Array(13).fill(null));
    setPart2(null);
    setPart3(null);
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
    const url = "https://mindchecktools.com/mdq-bipolar-screening";

    if (mode === "blank") {
      const shareData = {
        title: "MDQ Bipolar Screening Self-Check \u2014 Free & Private",
        text: "Take a free, private MDQ bipolar screening self-check. 15 items, 3 minutes. Your answers never leave your browser.",
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

    const result = positiveScreen ? "Positive Screen" : "Negative Screen";
    const summary = `MDQ Bipolar Screening Results\nResult: ${result}\nPart 1: ${part1YesCount}/13 Yes (need 7+)\nPart 2: ${part2 === 1 ? "Yes" : "No"} co-occurrence\nPart 3: ${IMPACT_OPTIONS[part3 ?? 0].label}\n\nThis is a screening tool, not a diagnosis. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My MDQ Results", text: summary }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [positiveScreen, part1YesCount, part2, part3]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free to Reproduce</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          MDQ Bipolar Screening Self-Check
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          The Mood Disorder Questionnaire (MDQ) is a validated screening tool for bipolar spectrum disorders. It asks about lifetime experiences of manic or hypomanic symptoms, their co-occurrence, and functional impact. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~3 Minutes" },
            { icon: "\uD83D\uDCCB", text: "15 Items" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
      </header>

      {/* Disclaimer Gate */}
      {!accepted && (
        <DisclaimerGate
          toolName="MDQ"
          toolDescription="This self-check uses the Mood Disorder Questionnaire (MDQ), a validated screening instrument for bipolar spectrum disorders. It has three parts: symptom questions, a co-occurrence question, and a functional impact question. The MDQ is free to reproduce for clinical and research purposes."
          onAccept={() => setAccepted(true)}
        />
      )}

      {/* Questionnaire */}
      {accepted && !showResults && (
        <div className="animate-fade-in">
          {/* Progress */}
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">
                {answeredCount} of {totalItems} answered
              </span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">
                3 Parts
              </span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Part 1 Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                Part 1 of 3
              </span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">13 symptom questions</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
              {PART1_INTRO}
            </p>
          </div>

          {/* Part 1 Questions */}
          <div className="space-y-3 mb-6">
            {PART1_QUESTIONS.map((q, qi) => {
              const isReachable = qi <= furthestPart1 + 1;
              return (
                <div
                  key={qi}
                  ref={(el) => { questionRefs.current[qi] = el; }}
                  className={`card p-5 transition-all duration-300 ${
                    isReachable ? "opacity-100" : "opacity-30 pointer-events-none"
                  } ${
                    part1[qi] !== null
                      ? "border-sage-200 dark:border-sage-800"
                      : ""
                  }`}
                >
                  <div className="flex gap-3 items-start">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${
                      part1[qi] !== null
                        ? "bg-sage-500 text-white"
                        : "bg-sand-100 dark:bg-night-700 text-neutral-400"
                    }`}>
                      {part1[qi] !== null ? "\u2713" : qi + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                        {q}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {YES_NO.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handlePart1(qi, opt.value)}
                            className={`p-2.5 rounded-xl border-2 text-center transition-all text-sm leading-tight ${
                              part1[qi] === opt.value
                                ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold"
                                : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Part 2 */}
          <div
            ref={part2Ref}
            className={`transition-all duration-300 mb-6 ${part1Answered ? "opacity-100" : "opacity-30 pointer-events-none"}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                Part 2 of 3
              </span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">Co-occurrence</span>
            </div>
            <div className={`card p-5 ${part2 !== null ? "border-sage-200 dark:border-sage-800" : ""}`}>
              <div className="flex gap-3 items-start">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${
                  part2 !== null
                    ? "bg-sage-500 text-white"
                    : "bg-sand-100 dark:bg-night-700 text-neutral-400"
                }`}>
                  {part2 !== null ? "\u2713" : "14"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                    If you checked YES to more than one of the above, have several of these ever happened during the same period of time?
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {YES_NO.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handlePart2(opt.value)}
                        className={`p-2.5 rounded-xl border-2 text-center transition-all text-sm leading-tight ${
                          part2 === opt.value
                            ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold"
                            : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3 */}
          <div
            ref={part3Ref}
            className={`transition-all duration-300 mb-6 ${part2 !== null ? "opacity-100" : "opacity-30 pointer-events-none"}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                Part 3 of 3
              </span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">Functional impact</span>
            </div>
            <div className={`card p-5 ${part3 !== null ? "border-sage-200 dark:border-sage-800" : ""}`}>
              <div className="flex gap-3 items-start">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${
                  part3 !== null
                    ? "bg-sage-500 text-white"
                    : "bg-sand-100 dark:bg-night-700 text-neutral-400"
                }`}>
                  {part3 !== null ? "\u2713" : "15"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                    How much of a problem did any of these cause you — like being unable to work; having family, money, or legal troubles; getting into arguments or fights?
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {IMPACT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setPart3(opt.value)}
                        className={`p-2.5 rounded-xl border-2 text-center transition-all text-sm leading-tight ${
                          part3 === opt.value
                            ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold"
                            : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
        <div ref={resultsRef} className="animate-fade-in">
          {/* Positive Screen Alert */}
          {positiveScreen && (
            <div className="bg-warm-50 dark:bg-warm-950/30 border-2 border-warm-300 dark:border-warm-800 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex gap-3 items-start">
                <span className="text-xl">{"\u26A0\uFE0F"}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-warm-800 dark:text-warm-300 mb-2">
                    Positive screen — professional evaluation recommended
                  </h3>
                  <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed mb-3">
                    Your responses meet all three criteria for a positive MDQ screen, which suggests that further evaluation for bipolar spectrum disorders by a qualified mental health professional may be beneficial. This is not a confirmation of bipolar disorder — it indicates the need for a comprehensive professional assessment.
                  </p>
                  <div className="bg-warm-100/50 dark:bg-warm-900/30 rounded-xl p-4 space-y-1.5">
                    <p className="text-xs font-semibold text-warm-700 dark:text-warm-400 mb-1">Resources:</p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> SAMHSA National Helpline — Call <strong>1-800-662-4357</strong> (free, confidential, 24/7)</p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> 988 Suicide &amp; Crisis Lifeline — Call or text <strong>988</strong></p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> Crisis Text Line — Text <strong>HOME</strong> to <strong>741741</strong></p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>International:</strong> Visit <strong>findahelpline.com</strong> for your country</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Printable Results Area */}
          <div id="printable-results">
            {/* Overall Result Card */}
            <div className="card overflow-hidden mb-5">
              <div className={`${positiveScreen ? "bg-warm-50 dark:bg-warm-950/30" : "bg-sage-50 dark:bg-sage-950/30"} p-6 sm:p-8 text-center`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${positiveScreen ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"} mb-2`}>
                  MDQ Screening Result
                </p>
                <p className={`font-serif text-3xl sm:text-4xl font-bold ${positiveScreen ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"} leading-none mb-2`}>
                  {positiveScreen ? "Positive Screen" : "Negative Screen"}
                </p>
                <p className={`text-sm ${positiveScreen ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"}`}>
                  {positiveScreen
                    ? "All 3 criteria met — further evaluation recommended"
                    : "Not all 3 criteria met — screen is negative"
                  }
                </p>
              </div>

              {/* Three Criteria Breakdown */}
              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="font-serif text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Three-Part Criteria</h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">A positive screen requires all three criteria to be met.</p>

                {/* Criterion 1 */}
                <div className={`flex items-start gap-3 p-4 rounded-xl border ${
                  criterion1Met
                    ? "border-warm-200 dark:border-warm-800 bg-warm-50/50 dark:bg-warm-950/20"
                    : "border-sage-200 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/20"
                }`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                    criterion1Met
                      ? "bg-warm-500 text-white"
                      : "bg-sage-500 text-white"
                  }`}>
                    {criterion1Met ? "!" : "\u2713"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${criterion1Met ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"}`}>
                      Part 1: Symptom Count — {part1YesCount} of 13 Yes
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {criterion1Met
                        ? `Criterion met: 7 or more Yes answers (you answered ${part1YesCount})`
                        : `Criterion not met: fewer than 7 Yes answers (you answered ${part1YesCount})`
                      }
                    </p>
                  </div>
                </div>

                {/* Criterion 2 */}
                <div className={`flex items-start gap-3 p-4 rounded-xl border ${
                  criterion2Met
                    ? "border-warm-200 dark:border-warm-800 bg-warm-50/50 dark:bg-warm-950/20"
                    : "border-sage-200 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/20"
                }`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                    criterion2Met
                      ? "bg-warm-500 text-white"
                      : "bg-sage-500 text-white"
                  }`}>
                    {criterion2Met ? "!" : "\u2713"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${criterion2Met ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"}`}>
                      Part 2: Co-occurrence — {part2 === 1 ? "Yes" : "No"}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {criterion2Met
                        ? "Criterion met: symptoms occurred during the same time period"
                        : "Criterion not met: symptoms did not co-occur"
                      }
                    </p>
                  </div>
                </div>

                {/* Criterion 3 */}
                <div className={`flex items-start gap-3 p-4 rounded-xl border ${
                  criterion3Met
                    ? "border-warm-200 dark:border-warm-800 bg-warm-50/50 dark:bg-warm-950/20"
                    : "border-sage-200 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/20"
                }`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                    criterion3Met
                      ? "bg-warm-500 text-white"
                      : "bg-sage-500 text-white"
                  }`}>
                    {criterion3Met ? "!" : "\u2713"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${criterion3Met ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"}`}>
                      Part 3: Functional Impact — {IMPACT_OPTIONS[part3 ?? 0].label}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {criterion3Met
                        ? `Criterion met: moderate or serious functional impact reported`
                        : `Criterion not met: ${part3 !== null && part3 <= 1 ? "no or minor" : "no"} functional impact reported`
                      }
                    </p>
                  </div>
                </div>

                {/* Interpretation */}
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4 mt-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {positiveScreen
                      ? <><strong>What you can consider next:</strong> A positive screen suggests that speaking with a mental health professional about your mood experiences may be beneficial. Your primary care provider can be a good starting point, or you can call the SAMHSA National Helpline at 1-800-662-4357 for free, confidential referrals available 24/7.</>
                      : <><strong>What this means:</strong> A negative screen means not all three MDQ criteria were met at this time. This does not rule out bipolar disorder or other mood concerns. If you are experiencing mood difficulties that affect your daily life, speaking with a healthcare provider is still encouraged.</>
                    }
                  </p>
                </div>

                <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                  <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                    <strong>Important reminder:</strong> The MDQ is a screening tool, not a way to confirm or rule out bipolar disorder. Only a qualified mental health professional can properly evaluate mood disorders through a comprehensive clinical assessment. This tool is for personal reflection and education only.
                  </p>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Responses</h3>

              {/* Part 1 Summary */}
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">Part 1: Symptoms ({part1YesCount}/13 Yes)</p>
              <div className="divide-y divide-sand-100 dark:divide-neutral-700 mb-4">
                {PART1_QUESTIONS.map((q, i) => (
                  <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                      <span className="inline-block bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 text-[10px] font-bold px-1.5 py-0.5 rounded mr-1.5">
                        Q{i + 1}
                      </span>
                      {q}
                    </span>
                    <span className={`text-sm font-semibold whitespace-nowrap ${
                      part1[i] === 1 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
                    }`}>
                      {part1[i] === 1 ? "Yes" : "No"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Part 2 Summary */}
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">Part 2: Co-occurrence</p>
              <div className="flex justify-between items-start gap-3 py-2.5 border-b border-sand-100 dark:border-neutral-700 mb-4">
                <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                  Several symptoms occurred during the same period
                </span>
                <span className={`text-sm font-semibold whitespace-nowrap ${
                  part2 === 1 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
                }`}>
                  {part2 === 1 ? "Yes" : "No"}
                </span>
              </div>

              {/* Part 3 Summary */}
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">Part 3: Functional Impact</p>
              <div className="flex justify-between items-start gap-3 py-2.5">
                <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                  Level of problems caused
                </span>
                <span className={`text-sm font-semibold whitespace-nowrap ${
                  (part3 ?? 0) >= 2 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
                }`}>
                  {IMPACT_OPTIONS[part3 ?? 0].label}
                </span>
              </div>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>MDQ Bipolar Screening Self-Check from mindchecktools.com — {new Date().toLocaleDateString()}</p>
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

          {/* How Scoring Works */}
          <div className="card overflow-hidden mb-5">
            <button
              onClick={() => setShowScoring(!showScoring)}
              className="w-full p-5 flex justify-between items-center text-left"
            >
              <span className="font-serif text-base font-semibold text-neutral-800 dark:text-neutral-100">
                How this screening is scored
              </span>
              <svg className={`w-5 h-5 text-neutral-400 transition-transform ${showScoring ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showScoring && (
              <div className="px-5 pb-5 space-y-3 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  The MDQ uses a three-part conjunctive scoring method. A positive screen requires <strong>all three</strong> criteria to be met simultaneously:
                </p>
                <div className="space-y-2">
                  <div className={`flex items-center gap-3 p-3 rounded-lg ${criterion1Met ? "bg-warm-50 dark:bg-warm-950/20 ring-1 ring-inset ring-warm-200 dark:ring-warm-800" : ""}`}>
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${criterion1Met ? "bg-warm-500" : "bg-neutral-300 dark:bg-neutral-600"}`} />
                    <span className={`text-sm ${criterion1Met ? "font-semibold text-warm-700 dark:text-warm-400" : "text-neutral-500 dark:text-neutral-400"}`}>
                      Part 1: 7 or more &quot;Yes&quot; answers out of 13 symptom questions
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-lg ${criterion2Met ? "bg-warm-50 dark:bg-warm-950/20 ring-1 ring-inset ring-warm-200 dark:ring-warm-800" : ""}`}>
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${criterion2Met ? "bg-warm-500" : "bg-neutral-300 dark:bg-neutral-600"}`} />
                    <span className={`text-sm ${criterion2Met ? "font-semibold text-warm-700 dark:text-warm-400" : "text-neutral-500 dark:text-neutral-400"}`}>
                      Part 2: &quot;Yes&quot; to symptoms co-occurring during the same time period
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-lg ${criterion3Met ? "bg-warm-50 dark:bg-warm-950/20 ring-1 ring-inset ring-warm-200 dark:ring-warm-800" : ""}`}>
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${criterion3Met ? "bg-warm-500" : "bg-neutral-300 dark:bg-neutral-600"}`} />
                    <span className={`text-sm ${criterion3Met ? "font-semibold text-warm-700 dark:text-warm-400" : "text-neutral-500 dark:text-neutral-400"}`}>
                      Part 3: &quot;Moderate problem&quot; or &quot;Serious problem&quot; functional impact
                    </span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed pt-2">
                  This conjunctive approach (requiring all three criteria) was designed to reduce false positives while maintaining sensitivity for bipolar spectrum disorders. The scoring is based on the original validation research by Hirschfeld et al. (2000).
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are experiencing mood difficulties or are in distress, help is available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "SAMHSA National Helpline (US)", detail: "1-800-662-4357 \u2014 free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 \u2014 available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
                { label: "International Resources", detail: "Visit findahelpline.com for your country", color: "text-sage-600 dark:text-sage-400" },
              ].map((r) => (
                <div key={r.label} className="p-3.5 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700">
                  <p className={`text-sm font-semibold ${r.color}`}>{r.label}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <AdSlot position="Below Results" className="mb-8" />

          {/* Educational Content */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              Understanding the MDQ and Bipolar Screening
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What Is Bipolar Disorder?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Bipolar disorder is a mental health condition involving unusual shifts in mood, energy, and activity levels. It affects approximately 2.8% of U.S. adults, according to the National Institute of Mental Health (NIMH). There are three main types: <strong>Bipolar I</strong> involves full manic episodes that last at least 7 days and often require hospitalization, usually accompanied by depressive episodes; <strong>Bipolar II</strong> involves a pattern of depressive episodes alternating with hypomanic episodes (less severe than full mania but still a noticeable change from baseline); and <strong>Cyclothymic Disorder</strong> involves chronic fluctuating mood disturbance with periods of hypomanic and depressive symptoms that do not meet the full criteria for either episode type.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Why Screening for Bipolar Disorder Matters</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Research consistently shows that bipolar disorder is one of the most commonly misidentified mental health conditions. Studies suggest an average delay of approximately <strong>10 years</strong> between first symptoms and correct identification. This happens because people most often seek help during depressive episodes — the manic or hypomanic side is frequently not recognized, not reported, or attributed to other causes such as personality, stress, or substance use. The MDQ was specifically designed to address this gap by asking directly about lifetime experiences of manic and hypomanic symptoms.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What the MDQ Measures</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The MDQ assesses three dimensions: (1) whether you have ever experienced core symptoms of mania or hypomania, such as elevated mood, decreased need for sleep, racing thoughts, increased energy, or risky behavior; (2) whether multiple symptoms occurred during the same time period, which is characteristic of a manic or hypomanic episode; and (3) whether these experiences caused functional problems in your work, relationships, finances, or daily life. All three dimensions must be positive for a positive screen, which reduces false positives compared to checking symptoms alone.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">The Importance of Professional Evaluation</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  A screening tool like the MDQ can identify individuals who may benefit from further evaluation, but it cannot replace a comprehensive clinical assessment. Bipolar disorder shares symptoms with many other conditions including major depression, ADHD, anxiety disorders, and certain personality disorders. A qualified professional will conduct a thorough interview, review your full mood and developmental history, and consider other possible explanations before reaching any conclusions. If you have concerns about your mood patterns, the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">PHQ-9 depression screening</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">GAD-7 anxiety screening</Link> may also provide useful information to discuss with your provider.
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

          {/* Related Tools */}
          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "PHQ-9 Depression Screening", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
                { name: "GAD-7 Anxiety Screening", desc: "7-question validated anxiety screener", href: "/gad-7-anxiety-test" },
                { name: "ASRS ADHD Screening", desc: "6-item WHO adult ADHD screener", href: "/asrs-adhd-screening" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot position="Footer" className="mb-8" />

          {/* Attribution */}
          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed mb-2">
              The Mood Disorder Questionnaire (MDQ) was developed by Robert M.A. Hirschfeld, MD, and colleagues. It is free to reproduce for clinical and research purposes.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              This tool is for educational purposes only. It is not medical advice, a diagnosis, or a treatment recommendation.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
