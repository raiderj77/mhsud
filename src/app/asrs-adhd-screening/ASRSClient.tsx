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
  "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
  "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
  "How often do you have problems remembering appointments or obligations?",
  "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
  "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
  "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
];

const OPTIONS = [
  { label: "Never", value: 0 },
  { label: "Rarely", value: 1 },
  { label: "Sometimes", value: 2 },
  { label: "Often", value: 3 },
  { label: "Very Often", value: 4 },
];

// ASRS unique scoring: different thresholds per question
// Q1-3: "Sometimes" (2), "Often" (3), or "Very Often" (4) = positive
// Q4-6: "Often" (3) or "Very Often" (4) = positive
function isPositive(qi: number, value: number): boolean {
  if (qi <= 2) return value >= 2; // Q1-3: Sometimes or higher
  return value >= 3;              // Q4-6: Often or higher
}

function getPositiveThresholdLabel(qi: number): string {
  if (qi <= 2) return "Sometimes or higher";
  return "Often or higher";
}

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function ASRSClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(6).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const allAnswered = answers.every((a) => a !== null);
  const positiveCount = answers.reduce<number>(
    (count, val, qi) => count + (val !== null && isPositive(qi, val) ? 1 : 0),
    0
  );
  const screenPositive = positiveCount >= 4;
  const progress = (answers.filter((a) => a !== null).length / 6) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 5) {
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
    setAnswers(Array(6).fill(null));
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
    const url = "https://mindchecktools.com/asrs-adhd-screening";

    if (mode === "blank") {
      const shareData = {
        title: "ASRS Adult ADHD Self-Check \u2014 Free & Private",
        text: "Take a free, private ASRS adult ADHD screening self-check. WHO-developed. Your answers never leave your browser.",
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

    const result = screenPositive ? "Positive Screen" : "Negative Screen";
    const summary = `ASRS Self-Check Results\n${positiveCount} of 6 positive responses \u2014 ${result}\n\nThis is a screening tool, not a diagnosis. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My ASRS Results", text: summary }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [positiveCount, screenPositive]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated</span>
          <span className="badge bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">WHO</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free to Use</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          ASRS v1.1 Adult ADHD Self-Check
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          A WHO-developed screening tool that helps identify symptoms consistent with adult ADHD. This is the validated 6-item Part A screener used in clinical and research settings. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~2 Minutes" },
            { icon: "\uD83D\uDCCB", text: "6 Questions" },
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
          toolName="ASRS v1.1"
          toolDescription="This self-check uses the Adult ADHD Self-Report Scale (ASRS v1.1) Part A, a screening tool developed by the World Health Organization (WHO). ADHD can only be identified through a comprehensive professional evaluation — this tool helps determine whether such an evaluation may be beneficial."
          onAccept={() => setAccepted(true)}
        />
      )}

      {/* Questionnaire */}
      {accepted && !showResults && (
        <div className="animate-fade-in">
          {/* Instruction */}
          <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4 mb-4">
            <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
              <strong>Instructions:</strong> Please answer the questions below, rating yourself on each of the criteria shown. Select the option that best describes how you have felt and conducted yourself <strong>over the past 6 months</strong>.
            </p>
          </div>

          {/* Progress */}
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">
                {answers.filter((a) => a !== null).length} of 6 answered
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Over the past <strong>6 months</strong>
              </span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500"
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
                        {q}
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
                          </button>
                        ))}
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
          {/* Positive Screen Alert */}
          {screenPositive && (
            <div className="bg-warm-50 dark:bg-warm-950/30 border-2 border-warm-300 dark:border-warm-800 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex gap-3 items-start">
                <span className="text-xl">{"\u26A0\uFE0F"}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-warm-800 dark:text-warm-300 mb-2">
                    Positive screen — further evaluation recommended
                  </h3>
                  <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed mb-3">
                    Your responses are consistent with adult ADHD symptoms. This does not mean you have ADHD — only a comprehensive professional evaluation can determine that. ADHD evaluation typically involves a detailed clinical interview, developmental history, and assessment of how symptoms affect multiple areas of your life.
                  </p>
                  <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed">
                    Consider speaking with your primary care provider or a mental health professional who has experience with adult ADHD. They can help determine whether a full evaluation is appropriate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Printable Results Area */}
          <div ref={printRef} id="printable-results">
            {/* Score Card */}
            <div className="card overflow-hidden mb-5">
              <div className={`${screenPositive ? "bg-warm-50 dark:bg-warm-950/30" : "bg-sage-50 dark:bg-sage-950/30"} p-6 sm:p-8 text-center`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${screenPositive ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"} mb-2`}>Your ASRS Result</p>
                <p className={`font-serif text-5xl font-bold ${screenPositive ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"} leading-none mb-2`}>
                  {positiveCount}<span className="text-2xl font-semibold">/6</span>
                </p>
                <p className={`text-sm font-semibold ${screenPositive ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"}`}>
                  positive responses — {screenPositive ? "Positive Screen" : "Negative Screen"}
                </p>
                <div className="mt-6">
                  <div className="flex gap-1.5 justify-center">
                    {answers.map((val, qi) => {
                      const pos = val !== null && isPositive(qi, val);
                      return (
                        <div
                          key={qi}
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                            pos
                              ? "bg-warm-500 dark:bg-warm-600 text-white"
                              : "bg-sage-200 dark:bg-sage-800 text-sage-700 dark:text-sage-300"
                          }`}
                        >
                          {qi + 1}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center gap-4 mt-3 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-warm-500 dark:bg-warm-600 inline-block" /> Positive
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-sage-200 dark:bg-sage-800 inline-block" /> Not positive
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {screenPositive
                    ? "Your symptom pattern is consistent with adult ADHD. A comprehensive evaluation by a qualified professional is recommended to determine whether ADHD or another condition may be contributing to these symptoms."
                    : "Your responses do not meet the threshold for a positive ADHD screen at this time. If you continue to experience difficulty with attention, organization, or restlessness that affects your daily life, consider discussing your concerns with a healthcare provider."
                  }
                </p>
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <strong>What you can consider next:</strong>{" "}
                    {screenPositive
                      ? "Speak with your primary care provider or a mental health professional experienced with adult ADHD. Bring your results to help start the conversation."
                      : "Continue to monitor how you are feeling. If your situation changes or symptoms become more noticeable, consider taking this screen again or speaking with a healthcare provider."
                    }
                  </p>
                </div>
                <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                  <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                    <strong>Important reminder:</strong> ADHD can only be properly identified through a comprehensive professional evaluation that includes a detailed clinical interview, developmental history, and functional assessment. This screening tool is for personal reflection and education only — it cannot confirm or rule out ADHD.
                  </p>
                </div>
              </div>
            </div>

            {/* Answer Summary with Positive Indicators */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Responses</h3>
              <div className="divide-y divide-sand-100 dark:divide-neutral-700">
                {QUESTIONS.map((q, i) => {
                  const val = answers[i]!;
                  const pos = isPositive(i, val);
                  return (
                    <div key={i} className="py-3">
                      <div className="flex justify-between items-start gap-3">
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                          {i + 1}. {q}
                        </span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`text-sm font-semibold whitespace-nowrap ${
                            pos ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
                          }`}>
                            {OPTIONS[val]?.label}
                          </span>
                          {pos && (
                            <span className="w-5 h-5 rounded-full bg-warm-500 dark:bg-warm-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                              {"\u2713"}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1">
                        Positive threshold: {getPositiveThresholdLabel(i)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>ASRS v1.1 Self-Check from mindchecktools.com — {new Date().toLocaleDateString()}</p>
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
            toolName="ASRS v1.1 Adult ADHD Self-Check"
            toolUrl="https://mindchecktools.com/asrs-adhd-screening"
            score={positiveCount}
            severityLabel={screenPositive ? "Positive Screen" : "Negative Screen"}
            scoreRange={screenPositive ? "4–6 positive" : "0–3 positive"}
            interpretation={
              screenPositive
                ? "Your symptom pattern is consistent with adult ADHD. A comprehensive evaluation by a qualified professional is recommended to determine whether ADHD or another condition may be contributing to these symptoms."
                : "Your responses do not meet the threshold for a positive ADHD screen at this time. If you continue to experience difficulty with attention, organization, or restlessness that affects your daily life, consider discussing your concerns with a healthcare provider."
            }
            suggestion={
              screenPositive
                ? "Speak with your primary care provider or a mental health professional experienced with adult ADHD. Bring your results to help start the conversation."
                : "Continue to monitor how you are feeling. If your situation changes or symptoms become more noticeable, consider taking this screen again or speaking with a healthcare provider."
            }
            reflectionPrompts={REFLECTION_PROMPTS["asrs-adhd-screening"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q,
              answer: `${OPTIONS[answers[i]!]?.label}${isPositive(i, answers[i]!) ? " (Positive)" : ""}`,
            }))}
          />

          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["asrs-adhd-screening"] && (
            <ReflectionPrompts
              toolName="ASRS v1.1 Adult ADHD Self-Check"
              prompts={REFLECTION_PROMPTS["asrs-adhd-screening"].prompts}
            />
          )}

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
                  The ASRS uses a unique scoring method. Unlike tools that simply add up points, the ASRS counts how many of your responses fall in the &quot;positive&quot; range — and the threshold differs by question:
                </p>
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mt-0.5 w-16 flex-shrink-0">Q1\u2013Q3:</span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">&quot;Sometimes,&quot; &quot;Often,&quot; or &quot;Very Often&quot; = positive</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mt-0.5 w-16 flex-shrink-0">Q4\u2013Q6:</span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">&quot;Often&quot; or &quot;Very Often&quot; = positive</span>
                  </div>
                </div>
                <div className="space-y-2 mt-3">
                  <div className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    !screenPositive ? "bg-sage-50 dark:bg-sage-950/30 ring-1 ring-inset ring-current/10" : ""
                  }`}>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex-shrink-0" />
                    <span className={`text-sm ${!screenPositive ? "font-semibold text-sage-700 dark:text-sage-400" : "text-neutral-500 dark:text-neutral-400"}`}>
                      0\u20133 positive: Negative screen
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    screenPositive ? "bg-warm-50 dark:bg-warm-950/30 ring-1 ring-inset ring-current/10" : ""
                  }`}>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-warm-400 to-warm-600 flex-shrink-0" />
                    <span className={`text-sm ${screenPositive ? "font-semibold text-warm-700 dark:text-warm-400" : "text-neutral-500 dark:text-neutral-400"}`}>
                      4\u20136 positive: Positive screen — further evaluation recommended
                    </span>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-2">
                  This scoring method is based on the WHO&apos;s validated research. It should not be treated as a diagnostic threshold.
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are struggling, you are not alone. These resources are available:
            </p>
            <div className="space-y-2.5">
              {[
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
              Understanding Adult ADHD
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What Is Adult ADHD?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with daily functioning. While often associated with children, ADHD frequently persists into adulthood. Research estimates that approximately 2.5\u20134% of adults worldwide have ADHD, though many remain unidentified. In adults, symptoms may look different than in children — hyperactivity often manifests as internal restlessness rather than obvious physical activity, and inattention may present as difficulty with organization, time management, and follow-through on tasks.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Why ADHD Is Often Missed in Adults</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Adult ADHD is frequently underrecognized for several reasons. Many adults developed coping strategies during childhood and adolescence that masked their symptoms enough to avoid identification. Others were identified with other conditions — such as anxiety, depression, or learning difficulties — without ADHD being recognized as an underlying factor. Women and girls are particularly underidentified, as they are more likely to present with the inattentive type of ADHD rather than the more visibly disruptive hyperactive-impulsive type. Additionally, ADHD was historically considered a childhood condition, so many adults were simply never evaluated.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What the ASRS Measures</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The ASRS v1.1 Part A screener asks about six symptoms that are the most predictive of adult ADHD based on WHO research. These include difficulty with task completion, organization, memory, procrastination, physical restlessness, and feeling driven or compelled. The scoring uses research-validated thresholds rather than a simple sum, because the clinical significance of each symptom varies. A positive screen indicates that a comprehensive evaluation may be beneficial — it is the starting point of a conversation, not a conclusion.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">The Importance of Comprehensive Evaluation</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  ADHD cannot be identified through a screening tool alone. A proper evaluation typically involves a detailed clinical interview covering current symptoms and childhood history, standardized rating scales, assessment of functional impairment across multiple settings (work, home, relationships), and ruling out other conditions that can mimic ADHD symptoms. Many professionals with experience in adult ADHD — including psychiatrists, psychologists, and some primary care providers — can conduct this evaluation. If you screen positive, your primary care provider is often a good first point of contact.
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

          {/* Sources & Further Reading */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources &amp; Further Reading</h2>
            <div className="card p-5 sm:p-6">
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  Kessler, R. C., Adler, L., Ames, M., et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS).{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15841682/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — ASRS Validation</a>
                </li>
                <li>
                  National Institute of Mental Health (NIMH). Attention-Deficit/Hyperactivity Disorder.{" "}
                  <a href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
                </li>
                <li>
                  World Health Organization. The WHO ASRS was developed by the WHO.{" "}
                  <a href="https://www.who.int/publications" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">who.int</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "ADHD Test for Teens", desc: "ASRS screening with teen-specific context", href: "/adhd-test-for-teens" },
                { name: "PHQ-9 Depression Self-Check", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
                { name: "GAD-7 Anxiety Self-Check", desc: "7-question validated anxiety screener", href: "/gad-7-anxiety-test" },
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
              The ASRS v1.1 was developed by the World Health Organization (WHO) in collaboration with Drs. Lenard Adler, Ronald Kessler, and Thomas Spencer. It is free to use for clinical and research purposes.
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
