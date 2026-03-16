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
  "I often notice small sounds when others do not.",
  "I usually concentrate more on the whole picture, rather than the small details.",
  "I find it easy to do more than one thing at once.",
  "If there is an interruption, I can switch back to what I was doing very quickly.",
  "I find it easy to \u2018read between the lines\u2019 when someone is talking to me.",
  "I know how to tell if someone listening to me is getting bored.",
  "When I\u2019m reading a story, I find it difficult to work out the characters\u2019 intentions.",
  "I like to collect information about categories of things (e.g., types of car, types of bird, types of train, types of plant, etc.).",
  "I find it easy to work out what someone is thinking or feeling just by looking at their face.",
  "I find it difficult to work out people\u2019s intentions.",
];

const OPTIONS = [
  { label: "Definitely Agree", value: 0 },
  { label: "Slightly Agree", value: 1 },
  { label: "Slightly Disagree", value: 2 },
  { label: "Definitely Disagree", value: 3 },
];

// Items where AGREE scores 1 point (0-indexed): 0, 6, 7, 9
// Items where DISAGREE scores 1 point (reverse-scored): 1, 2, 3, 4, 5, 8
const AGREE_SCORED_ITEMS = new Set([0, 6, 7, 9]);

function scoreItem(qi: number, value: number): number {
  if (AGREE_SCORED_ITEMS.has(qi)) {
    // Score 1 for Definitely Agree (0) or Slightly Agree (1)
    return value <= 1 ? 1 : 0;
  }
  // Reverse-scored: score 1 for Slightly Disagree (2) or Definitely Disagree (3)
  return value >= 2 ? 1 : 0;
}

const RANGES = [
  { min: 0, max: 5, level: "Negative Screen", key: "negative", description: "Your responses do not suggest a high level of autism spectrum traits at this time. Scores below 6 are below the referral threshold recommended by NICE guidelines.", suggestion: "If you still have questions or relate to autistic experiences, your score does not rule anything out. Many autistic people score below the threshold due to masking or other factors. Consider speaking with a professional if you have ongoing questions about your neurology." },
  { min: 6, max: 10, level: "Positive Screen", key: "positive", description: "Your responses suggest the presence of autism spectrum traits at a level where further professional evaluation may be helpful. A positive screen does not mean you are autistic \u2014 it means a comprehensive assessment by a qualified specialist is recommended.", suggestion: "Consider speaking with your primary care provider about a referral for autism assessment. The Autism Society helpline (1-800-328-8476) can help connect you with resources and specialists in your area. The SAMHSA helpline (1-800-662-4357) can also provide referrals." },
];

function getRange(score: number) {
  return RANGES.find((r) => score >= r.min && score <= r.max)!;
}

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  negative: { text: "text-sage-700 dark:text-sage-400", bg: "bg-sage-50 dark:bg-sage-950/30", bar: "from-sage-400 to-sage-600" },
  positive: { text: "text-warm-700 dark:text-warm-400", bg: "bg-warm-50 dark:bg-warm-950/30", bar: "from-warm-400 to-warm-600" },
};

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function AQ10Client({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(10).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const totalScore = answers.reduce<number>((s, a, i) => s + (a !== null ? scoreItem(i, a) : 0), 0);
  const allAnswered = answers.every((a) => a !== null);
  const range = getRange(totalScore);
  const colors = RANGE_COLORS[range.key];
  const positiveScreen = totalScore >= 6;
  const progress = (answers.filter((a) => a !== null).length / 10) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 9) {
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
    setAnswers(Array(10).fill(null));
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
    const url = "https://mindchecktools.com/aq-10-autism-screening";

    if (mode === "blank") {
      const shareData = {
        title: "AQ-10 Autism Spectrum Screening \u2014 Free & Private",
        text: "Take a free, private AQ-10 autism spectrum screening. 10 questions, 2 minutes. Your answers never leave your browser.",
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

    const summary = `AQ-10 Autism Spectrum Screening Results\nScore: ${totalScore}/10 \u2014 ${range.level}\n\nThis is a screening tool, not an assessment. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My AQ-10 Results", text: summary }); return; } catch { /* user cancelled */ }
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
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free to Use</span>
          <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">Quick</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          AQ-10 Autism Spectrum Self-Check
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          The AQ-10 is a validated screening tool for autism spectrum traits in adults, developed by Simon Baron-Cohen and colleagues at the Autism Research Centre, University of Cambridge. Ten questions about your everyday experiences. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~2 Minutes" },
            { icon: "\uD83D\uDCCB", text: "10 Questions" },
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
          toolName="AQ-10"
          toolDescription="This self-check uses the AQ-10 (Autism Spectrum Quotient - 10 item), a validated screening tool for autism spectrum traits developed by Simon Baron-Cohen et al. at the Autism Research Centre, University of Cambridge. It is free to use and recommended by NICE guidelines as a first-step screening tool for adults."
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
                {answers.filter((a) => a !== null).length} of 10 answered
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Select the response that best describes you
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
                    answers[qi] !== null ? "border-sage-200 dark:border-sage-800" : ""
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
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleAnswer(qi, opt.value)}
                            className={`p-2.5 min-h-[44px] rounded-xl border-2 text-center transition-all text-sm leading-tight ${
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
          {positiveScreen && (
            <div className="bg-warm-50 dark:bg-warm-950/30 border-2 border-warm-300 dark:border-warm-800 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex gap-3 items-start">
                <span className="text-xl">{"\u26A0\uFE0F"}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-warm-800 dark:text-warm-300 mb-2">
                    Positive screen — further evaluation may be helpful
                  </h3>
                  <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed mb-3">
                    Your responses suggest the presence of autism spectrum traits at a level where a comprehensive evaluation by a specialist may be valuable. Autism is a neurodevelopmental difference, not an illness. A positive screen does not mean you are autistic — it means a fuller conversation with a qualified professional is recommended.
                  </p>
                  <div className="bg-warm-100/50 dark:bg-warm-900/30 rounded-xl p-4 space-y-1.5">
                    <p className="text-xs font-semibold text-warm-700 dark:text-warm-400 mb-1">Resources:</p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>Autism Society Helpline:</strong> Call <strong>1-800-328-8476</strong></p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> SAMHSA National Helpline — Call <strong>1-800-662-4357</strong> (free, 24/7)</p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> 988 Suicide &amp; Crisis Lifeline — Call or text <strong>988</strong></p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> Crisis Text Line — Text <strong>HOME</strong> to <strong>741741</strong></p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Neurodiversity Note */}
          <div className="bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-900 rounded-2xl p-5 sm:p-6 mb-5">
            <p className="text-sm text-violet-700 dark:text-violet-400 leading-relaxed">
              <strong>A note about autism:</strong> Autism is a neurodevelopmental difference, not an illness. A positive screen suggests further evaluation may be helpful. Many autistic adults are not identified until later in life. If you relate to these experiences, speaking with a specialist can be valuable regardless of your score.
            </p>
          </div>

          {/* Printable Results Area */}
          <div id="printable-results">
            {/* Score Card */}
            <div className="card overflow-hidden mb-5">
              <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your AQ-10 Score</p>
                <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
                <p className={`text-sm font-semibold ${colors.text}`}>out of 10 — {range.level}</p>
                <div className="mt-6">
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 10) * 100}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">
                    <span>0 — Below threshold</span>
                    <span>10 — All traits present</span>
                  </div>
                  {/* Cutoff indicator */}
                  <div className="relative mt-1">
                    <div className="absolute left-[60%] -translate-x-1/2 flex flex-col items-center">
                      <div className="w-px h-3 bg-warm-400 dark:bg-warm-600" />
                      <span className="text-[10px] text-warm-500 dark:text-warm-400 font-medium whitespace-nowrap">Cutoff: 6</span>
                    </div>
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
                    <strong>Important reminder:</strong> The AQ-10 screens for traits associated with autism but cannot confirm or rule out autism spectrum conditions. Only a qualified specialist can properly assess autism through a comprehensive clinical evaluation. This tool is for personal reflection and education only.
                  </p>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Response Summary</h3>
              <div className="divide-y divide-sand-100 dark:divide-neutral-700">
                {QUESTIONS.map((q, i) => {
                  const itemScore = answers[i] !== null ? scoreItem(i, answers[i]!) : 0;
                  return (
                    <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                        <span className="inline-block bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 text-[10px] font-bold px-1.5 py-0.5 rounded mr-1.5">
                          Q{i + 1}
                        </span>
                        {q}
                      </span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                          {OPTIONS.find((o) => o.value === answers[i])?.label}
                        </span>
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                          itemScore === 1 ? "bg-warm-100 dark:bg-warm-900/30 text-warm-600 dark:text-warm-400" : "bg-sage-100 dark:bg-sage-900/30 text-sage-600 dark:text-sage-400"
                        }`}>
                          {itemScore === 1 ? "+1" : "0"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>AQ-10 Autism Spectrum Screening from mindchecktools.com — {new Date().toLocaleDateString()}</p>
              <p>This is a screening tool, not an assessment. Consult a qualified specialist.</p>
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
            toolName="AQ-10 Autism Screening"
            toolUrl="https://mindchecktools.com/aq-10-autism-screening"
            score={totalScore}
            severityLabel={range.level}
            scoreRange={`${range.min}–${range.max}`}
            interpretation={range.description}
            suggestion={range.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["aq-10-autism-screening"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q,
              answer: OPTIONS.find((o) => o.value === answers[i])?.label ?? "",
            }))}
          />

          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["aq-10-autism-screening"] && (
            <ReflectionPrompts
              toolName="AQ-10 Autism Screening"
              prompts={REFLECTION_PROMPTS["aq-10-autism-screening"].prompts}
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
                  The AQ-10 uses a binary scoring system where each item contributes 0 or 1 point. The scoring direction depends on the item:
                </p>
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4 space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    <strong>Items 1, 7, 8, 10:</strong> Score 1 point for &ldquo;Definitely Agree&rdquo; or &ldquo;Slightly Agree&rdquo;
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    <strong>Items 2, 3, 4, 5, 6, 9:</strong> Score 1 point for &ldquo;Slightly Disagree&rdquo; or &ldquo;Definitely Disagree&rdquo; (reverse-scored)
                  </p>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Total scores range from 0 to 10. The NICE-recommended referral threshold is:
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
                  The AQ-10 was developed by Simon Baron-Cohen et al. at the Autism Research Centre, University of Cambridge. The cutoff of 6 follows NICE clinical guidelines for adult autism screening referral.
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need Support Right Now?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              Whether you are exploring autism, seeking assessment, or need mental health support, help is available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "Autism Society Helpline (US)", detail: "1-800-328-8476 \u2014 information, resources, and referrals", color: "text-sage-600 dark:text-sage-400" },
                { label: "SAMHSA National Helpline (US)", detail: "1-800-662-4357 \u2014 free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 \u2014 available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
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
              What Are Autism Spectrum Conditions?
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What Is Autism?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Autism is a neurodevelopmental difference that affects how a person experiences and interacts with the world. It involves differences in social communication, sensory processing, and patterns of thinking and behavior. Autism is a <strong>spectrum</strong> — no two autistic people are exactly alike. Some autistic individuals may need significant support in daily life, while others live independently, hold careers, and may not be identified until adulthood. The neurodiversity perspective recognizes autism as a natural form of human variation rather than a deficiency to be fixed.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Late-Identified Adults</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  A growing number of adults are learning they are autistic later in life — often in their 30s, 40s, or beyond. This is especially common among <strong>women, nonbinary individuals, and people of color</strong>, who were historically underrepresented in autism research and clinical practice. Many late-identified adults developed <strong>masking</strong> strategies — consciously or unconsciously suppressing autistic behaviors to meet social expectations. While masking can help with social navigation, it often comes at a significant cost to mental health, contributing to burnout, anxiety, and depression. Recognizing and understanding one&apos;s autistic traits can be a powerful step toward self-acceptance and improved wellbeing.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What the AQ-10 Measures</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The AQ-10 is the abbreviated form of the <strong>50-item Autism Spectrum Quotient</strong>, designed as a quick, practical screening tool. It assesses traits across several areas: social skills (understanding social cues, reading intentions), attention (multitasking, switching focus), communication (reading between the lines, recognizing emotions), and detail orientation (noticing small sounds, collecting categorical information). A score of 6 or above on the AQ-10 is the NICE-recommended threshold for considering a referral for comprehensive autism assessment.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">The Value of Understanding Yourself</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Whether or not a screening leads to a formal assessment, exploring the question &ldquo;could I be autistic?&rdquo; can be meaningful. Many people find that learning about autism helps explain lifelong patterns — social difficulties, sensory sensitivities, intense interests, or a persistent sense of being &ldquo;different.&rdquo; A comprehensive evaluation by a qualified specialist is the only way to confirm autism, but <strong>understanding yourself better is always worthwhile</strong>. If the AQ-10 resonates with your experiences, consider exploring further through the <Link href="/asrs-adhd-screening" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">ASRS ADHD screening</Link> (given the high overlap between autism and ADHD) or the <Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">DASS-21</Link> to check for co-occurring anxiety, depression, or stress.
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
                  Allison, C., Auyeung, B., &amp; Baron-Cohen, S. (2012). Toward brief &ldquo;Red Flags&rdquo; for autism screening: The Short Autism Spectrum Quotient.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/22265366/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — AQ-10 Validation</a>
                </li>
                <li>
                  National Institute of Mental Health (NIMH). Autism Spectrum Disorder.{" "}
                  <a href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Mental Health Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "ASRS ADHD Screening", desc: "6-item WHO adult ADHD screening tool", href: "/asrs-adhd-screening" },
                { name: "DASS-21 Depression/Anxiety/Stress", desc: "One test screens three conditions", href: "/dass-21-depression-anxiety-stress" },
                { name: "GAD-7 Anxiety Screening", desc: "7-question validated anxiety screener", href: "/gad-7-anxiety-test" },
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
              The AQ-10 was developed by Simon Baron-Cohen et al. at the Autism Research Centre, University of Cambridge. It is free to use.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              This tool is for educational purposes only. It is not medical advice, an assessment, or a clinical recommendation.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
