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

const INSTRUCTIONS = "Rate how much each experience has distressed or bothered you during the past month.";

const QUESTIONS = [
  "I have saved up so many things that they get in the way.",
  "I check things more often than necessary.",
  "I get upset if objects are not arranged properly.",
  "I feel compelled to count while I am doing things.",
  "I find it difficult to touch an object when I know it has been touched by strangers or certain people.",
  "I find it difficult to control my own thoughts.",
  "I collect things I don\u2019t need.",
  "I repeatedly check doors, windows, drawers, etc.",
  "I get upset if others change the way I have arranged things.",
  "I feel I have to repeat certain numbers.",
  "I sometimes have to wash or clean myself simply because I feel contaminated.",
  "I am upset by unpleasant thoughts that come into my mind against my will.",
  "I avoid throwing things away because I am afraid I might need them later.",
  "I repeatedly check gas and water taps and light switches after turning them off.",
  "I need things to be arranged in a particular way.",
  "I feel that there are good and bad numbers.",
  "I wash my hands more often and longer than necessary.",
  "I frequently get nasty thoughts and have difficulty in getting rid of them.",
];

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "A little", value: 1 },
  { label: "Moderately", value: 2 },
  { label: "A lot", value: 3 },
  { label: "Extremely", value: 4 },
];

const SUBSCALES = [
  { name: "Hoarding", items: [0, 6, 12], color: "from-amber-400 to-amber-600", text: "text-amber-700 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/30" },
  { name: "Checking", items: [1, 7, 13], color: "from-blue-400 to-blue-600", text: "text-blue-700 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/30" },
  { name: "Ordering", items: [2, 8, 14], color: "from-violet-400 to-violet-600", text: "text-violet-700 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-950/30" },
  { name: "Neutralizing", items: [3, 9, 15], color: "from-teal-400 to-teal-600", text: "text-teal-700 dark:text-teal-400", bg: "bg-teal-50 dark:bg-teal-950/30" },
  { name: "Washing", items: [4, 10, 16], color: "from-rose-400 to-rose-600", text: "text-rose-700 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/30" },
  { name: "Obsessing", items: [5, 11, 17], color: "from-orange-400 to-orange-600", text: "text-orange-700 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30" },
];

const RANGES = [
  { min: 0, max: 10, level: "Minimal OCD Symptoms", key: "minimal", description: "Your responses indicate minimal distress from OCD-related experiences. Scores in this range are common in the general population.", suggestion: "Continue to be mindful of your mental health. If your situation changes, consider checking in again." },
  { min: 11, max: 20, level: "Mild OCD Symptoms", key: "mild", description: "Your responses indicate a mild level of distress from OCD-related experiences. Some of these experiences may be part of normal daily life, though they may warrant attention if they are increasing or causing concern.", suggestion: "If these experiences are affecting your daily life or causing significant distress, consider discussing them with a healthcare provider." },
  { min: 21, max: 40, level: "Moderate — Possible OCD", key: "moderate", description: "Your score is above the clinical cutoff of 21, which suggests possible OCD. This means your level of distress from obsessive-compulsive experiences is higher than what is typically seen in the general population.", suggestion: "A professional evaluation is recommended. Consider speaking with a mental health professional, particularly one experienced with OCD. The International OCD Foundation (617-973-5801) can help you find a specialist." },
  { min: 41, max: 72, level: "Severe OCD Symptoms", key: "severe", description: "Your score indicates a high level of distress from obsessive-compulsive experiences. This strongly suggests that professional evaluation and support could be beneficial.", suggestion: "A comprehensive evaluation by a mental health professional experienced with OCD is strongly recommended. The IOCDF helpline (617-973-5801) and SAMHSA helpline (1-800-662-4357) can help connect you with appropriate resources." },
];

function getRange(score: number) {
  return RANGES.find((r) => score >= r.min && score <= r.max)!;
}

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  minimal:  { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600" },
  mild:     { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600" },
  moderate: { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30",     bar: "from-warm-400 to-warm-600" },
  severe:   { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "from-crisis-400 to-crisis-600" },
};

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function OCIRClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(18).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const totalScore = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const allAnswered = answers.every((a) => a !== null);
  const range = getRange(totalScore);
  const colors = RANGE_COLORS[range.key];
  const progress = (answers.filter((a) => a !== null).length / 18) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function subscaleScore(items: number[]): number {
    return items.reduce((s, i) => s + (answers[i] ?? 0), 0);
  }

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 17) {
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
    setAnswers(Array(18).fill(null));
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
    const url = "https://mindchecktools.com/oci-r-ocd-screening";

    if (mode === "blank") {
      const shareData = {
        title: "OCI-R OCD Screening Self-Check \u2014 Free & Private",
        text: "Take a free, private OCI-R OCD screening self-check. 18 questions, 3 minutes, 6 subscales. Your answers never leave your browser.",
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

    const subscaleSummary = SUBSCALES.map((s) => `${s.name}: ${s.items.reduce((sum, i) => sum + (answers[i] ?? 0), 0)}/12`).join(", ");
    const summary = `OCI-R OCD Screening Results\nTotal Score: ${totalScore}/72 \u2014 ${range.level}\nSubscales: ${subscaleSummary}\n\nThis is a screening tool, not a diagnosis. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My OCI-R Results", text: summary }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [totalScore, range.level, answers]);

  // Find which subscale a question belongs to
  function getSubscaleForQuestion(qi: number): typeof SUBSCALES[number] | undefined {
    return SUBSCALES.find((s) => s.items.includes(qi));
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free to Use</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          OCI-R OCD Screening Self-Check
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          The Obsessive-Compulsive Inventory - Revised (OCI-R) is a validated screening tool that measures distress from OCD symptoms across six dimensions. Rate how much each experience has bothered you in the past month. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~3 Minutes" },
            { icon: "\uD83D\uDCCB", text: "18 Questions" },
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
          toolName="OCI-R"
          toolDescription="This self-check uses the OCI-R (Obsessive-Compulsive Inventory - Revised), a validated 18-item screening instrument that measures distress from OCD-related experiences across six subscales: Hoarding, Checking, Ordering, Neutralizing, Washing, and Obsessing. It is free to use in clinical and research settings (Foa et al., 2002)."
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
                {answers.filter((a) => a !== null).length} of 18 answered
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Past month
              </span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4 mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
              {INSTRUCTIONS}
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {QUESTIONS.map((q, qi) => {
              const isReachable = qi <= furthestAnswered + 1;
              const sub = getSubscaleForQuestion(qi);
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
                      {sub && (
                        <span className={`inline-block ${sub.bg} ${sub.text} text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-1.5`}>
                          {sub.name}
                        </span>
                      )}
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                        {q}
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
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
                            <span className="block text-xs text-neutral-500 dark:text-neutral-400 mb-0.5">{opt.value}</span>
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
          {/* Elevated Alert */}
          {totalScore >= 21 && (
            <div className={`${totalScore >= 41 ? "bg-crisis-50 dark:bg-crisis-950/30 border-crisis-300 dark:border-crisis-800" : "bg-warm-50 dark:bg-warm-950/30 border-warm-300 dark:border-warm-800"} border-2 rounded-2xl p-5 sm:p-6 mb-5`}>
              <div className="flex gap-3 items-start">
                <span className="text-xl">{"\u26A0\uFE0F"}</span>
                <div>
                  <h3 className={`font-serif text-lg font-semibold ${totalScore >= 41 ? "text-crisis-800 dark:text-crisis-300" : "text-warm-800 dark:text-warm-300"} mb-2`}>
                    {totalScore >= 41 ? "Score suggests significant OCD symptoms" : "Score above clinical cutoff — evaluation recommended"}
                  </h3>
                  <p className={`text-sm ${totalScore >= 41 ? "text-crisis-700 dark:text-crisis-400" : "text-warm-700 dark:text-warm-400"} leading-relaxed mb-3`}>
                    Your score of {totalScore} is above the clinical cutoff of 21, which suggests possible OCD. This is not a confirmation — it indicates that further evaluation by a qualified mental health professional may be beneficial, particularly one experienced with OCD.
                  </p>
                  <div className={`${totalScore >= 41 ? "bg-crisis-100/50 dark:bg-crisis-900/30" : "bg-warm-100/50 dark:bg-warm-900/30"} rounded-xl p-4 space-y-1.5`}>
                    <p className={`text-xs font-semibold ${totalScore >= 41 ? "text-crisis-700 dark:text-crisis-400" : "text-warm-700 dark:text-warm-400"} mb-1`}>Resources:</p>
                    <p className={`text-sm ${totalScore >= 41 ? "text-crisis-700 dark:text-crisis-400" : "text-warm-700 dark:text-warm-400"}`}><strong>IOCDF:</strong> International OCD Foundation — Call <strong>617-973-5801</strong></p>
                    <p className={`text-sm ${totalScore >= 41 ? "text-crisis-700 dark:text-crisis-400" : "text-warm-700 dark:text-warm-400"}`}><strong>US:</strong> SAMHSA National Helpline — Call <strong>1-800-662-4357</strong> (free, 24/7)</p>
                    <p className={`text-sm ${totalScore >= 41 ? "text-crisis-700 dark:text-crisis-400" : "text-warm-700 dark:text-warm-400"}`}><strong>US:</strong> 988 Suicide &amp; Crisis Lifeline — Call or text <strong>988</strong></p>
                    <p className={`text-sm ${totalScore >= 41 ? "text-crisis-700 dark:text-crisis-400" : "text-warm-700 dark:text-warm-400"}`}><strong>US:</strong> Crisis Text Line — Text <strong>HOME</strong> to <strong>741741</strong></p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Printable Results Area */}
          <div id="printable-results">
            {/* Score Card */}
            <div className="card overflow-hidden mb-5">
              <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your OCI-R Score</p>
                <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
                <p className={`text-sm font-semibold ${colors.text}`}>out of 72 — {range.level}</p>
                <div className="mt-6 relative">
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 72) * 100}%` }} />
                  </div>
                  {/* Clinical cutoff marker */}
                  <div className="absolute top-0 h-2" style={{ left: `${(21 / 72) * 100}%` }}>
                    <div className="w-0.5 h-full bg-neutral-400 dark:bg-neutral-500" />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">
                    <span>0 — Minimal</span>
                    <span className="absolute" style={{ left: `${(21 / 72) * 100}%`, transform: "translateX(-50%)" }}>21 cutoff</span>
                    <span>72 — Severe</span>
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
                    <strong>Important reminder:</strong> The OCI-R is a screening tool that measures distress from OCD-like symptoms. It is not a way to confirm or rule out OCD. Only a qualified mental health professional can properly assess OCD through a comprehensive clinical evaluation. This tool is for personal reflection and education only.
                  </p>
                </div>
              </div>
            </div>

            {/* Subscale Breakdown */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Subscale Breakdown</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">Each subscale has 3 items with a maximum score of 12.</p>
              <div className="space-y-3">
                {SUBSCALES.map((sub) => {
                  const score = subscaleScore(sub.items);
                  const pct = (score / 12) * 100;
                  return (
                    <div key={sub.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-sm font-semibold ${sub.text}`}>{sub.name}</span>
                        <span className={`text-sm font-bold ${sub.text}`}>{score}/12</span>
                      </div>
                      <div className="h-2.5 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${sub.color} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Answer Summary */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Response Summary</h3>
              <div className="divide-y divide-sand-100 dark:divide-neutral-700">
                {QUESTIONS.map((q, i) => {
                  const sub = getSubscaleForQuestion(i);
                  return (
                    <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                        {sub && (
                          <span className={`inline-block ${sub.bg} ${sub.text} text-[10px] font-bold px-1.5 py-0.5 rounded mr-1.5 uppercase tracking-wide`}>
                            {sub.name}
                          </span>
                        )}
                        {q}
                      </span>
                      <span className={`text-sm font-semibold whitespace-nowrap ${
                        (answers[i] ?? 0) >= 3 ? "text-warm-600 dark:text-warm-400"
                          : (answers[i] ?? 0) >= 2 ? "text-neutral-600 dark:text-neutral-300"
                          : "text-sage-600 dark:text-sage-400"
                      }`}>
                        {answers[i]} — {OPTIONS[answers[i] ?? 0].label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>OCI-R OCD Screening Self-Check from mindchecktools.com — {new Date().toLocaleDateString()}</p>
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
            toolName="OCI-R OCD Screening Self-Check"
            toolUrl="https://mindchecktools.com/oci-r-ocd-screening"
            score={totalScore}
            severityLabel={range.level}
            scoreRange={`${range.min}–${range.max}`}
            interpretation={range.description}
            suggestion={range.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["oci-r-ocd-screening"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q,
              answer: `${OPTIONS[answers[i] ?? 0].label} (${answers[i]})`,
            }))}
          />



          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["oci-r-ocd-screening"] && (
            <ReflectionPrompts
              toolName="OCI-R OCD Screening Self-Check"
              prompts={REFLECTION_PROMPTS["oci-r-ocd-screening"].prompts}
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
                  The OCI-R sums all 18 item ratings (0-4 each) for a total score between 0 and 72. A score of 21 or higher is the established clinical cutoff suggesting possible OCD:
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
                  The 6 subscales (Hoarding, Checking, Ordering, Neutralizing, Washing, Obsessing) each consist of 3 items with a maximum of 12 per subscale. The clinical cutoff and subscale structure are based on the validation research by Foa et al. (2002).
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need Support Right Now?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are experiencing distress from obsessive or compulsive symptoms, help is available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "International OCD Foundation (IOCDF)", detail: "617-973-5801 \u2014 OCD specialist directory & resources", color: "text-sage-600 dark:text-sage-400" },
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

          <AdSlot npa position="Below Results" className="mb-8" />

          {/* Educational Content */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              What Is OCD and How Does the OCI-R Work?
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What Is OCD?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Obsessive-Compulsive Disorder (OCD) is a mental health condition that affects approximately <strong>2-3% of the population</strong>, according to the National Institute of Mental Health. It involves two core components: <strong>obsessions</strong> (unwanted, intrusive thoughts, images, or urges that cause significant anxiety or distress) and <strong>compulsions</strong> (repetitive behaviors or mental acts performed to reduce the distress caused by obsessions). Contrary to common misconceptions, OCD is not about being neat or organized — it is a distressing cycle where intrusive thoughts drive behaviors the person feels unable to control, often consuming hours each day and significantly impairing quality of life.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Common OCD Presentations</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  OCD can manifest in many forms, which is why the OCI-R measures six distinct dimensions. <strong>Contamination OCD</strong> involves fears of germs, illness, or contamination with washing or cleaning compulsions. <strong>Checking OCD</strong> involves doubts about safety or correctness with repeated verification. <strong>Symmetry and ordering</strong> involves a need for things to be &quot;just right.&quot; <strong>Intrusive thoughts</strong> (sometimes called &quot;Pure O&quot;) involve distressing unwanted thoughts about harm, morality, or taboo subjects, often with mental compulsions. <strong>Hoarding</strong> involves difficulty discarding items due to perceived need or emotional attachment. Many people experience symptoms across multiple dimensions simultaneously.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Why Screening Matters</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Research shows that people with OCD often wait <strong>7-10 years</strong> before seeking help, partly because of stigma and partly because many do not recognize their experiences as OCD. The disorder is frequently misidentified, with symptoms attributed to anxiety, depression, personality traits, or simply dismissed as &quot;worry.&quot; Early identification matters because effective approaches exist — particularly <strong>Exposure and Response Prevention (ERP)</strong>, a specialized cognitive-behavioral approach with strong research support. ERP involves gradually facing situations that trigger obsessions while learning to refrain from compulsions, helping the brain learn to tolerate uncertainty without engaging in rituals.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">How to Use Your OCI-R Results</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Your total score provides an overall picture, while the subscale breakdown shows which OCD dimensions contribute most to your distress. This information can be useful when discussing your experiences with a healthcare provider. If your score is above the clinical cutoff of 21, or if any individual subscale is notably elevated, speaking with a mental health professional experienced with OCD is recommended. The <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">GAD-7 anxiety screening</Link> and <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">PHQ-9 depression screening</Link> may also provide useful complementary information, as anxiety and depression commonly co-occur with OCD. The International OCD Foundation (617-973-5801) maintains a directory of OCD specialists.
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

          <AdSlot npa position="Mid Content" className="mb-8" />

          {/* What Research Is This Based On? */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">What Research Is This Based On?</h2>
            <div className="card p-5 sm:p-6">
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  Foa, E. B., Huppert, J. D., Leiberg, S., et al. (2002). The Obsessive-Compulsive Inventory: development and validation of a short version.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/12501574/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — OCI-R Validation</a>
                </li>
                <li>
                  National Institute of Mental Health (NIMH). Obsessive-Compulsive Disorder.{" "}
                  <a href="https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
                </li>
                <li>
                  American Psychological Association. Obsessive-Compulsive Disorder.{" "}
                  <a href="https://www.apa.org/topics/obsessive-compulsive-disorder" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">apa.org</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Mental Health Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "GAD-7 Anxiety Screening", desc: "7-question validated anxiety screener", href: "/gad-7-anxiety-test" },
                { name: "PHQ-9 Depression Screening", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
                { name: "PCL-5 PTSD Screening", desc: "20-item validated PTSD screener", href: "/pcl-5-ptsd-screening" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot npa position="Footer" className="mb-8" />

          {/* Attribution */}
          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
              The OCI-R (Obsessive-Compulsive Inventory - Revised) was developed by Foa et al. (2002). It is free to use in clinical and research settings.
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
