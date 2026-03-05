"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

// ── Data ────────────────────────────────────────────────────────────────

const QUESTIONS = [
  "Do you make yourself Sick because you feel uncomfortably full?",
  "Do you worry you have lost Control over how much you eat?",
  "Have you recently lost more than One stone (14 pounds / 6.5 kg) in a 3-month period?",
  "Do you believe yourself to be Fat when others say you are too thin?",
  "Would you say that Food dominates your life?",
];

const QUESTION_KEYS = ["Sick", "Control", "One stone", "Fat", "Food"];

const OPTIONS = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 },
];

const RANGES = [
  { min: 0, max: 1, level: "Negative Screen", key: "negative", description: "Your responses do not suggest the presence of an eating disorder at this time. Scores of 0-1 are below the clinical screening threshold.", suggestion: "Continue to be mindful of your eating habits and relationship with food. If your situation changes or you develop concerns about eating, consider checking in again or speaking with a healthcare provider." },
  { min: 2, max: 5, level: "Positive Screen", key: "positive", description: "Your responses suggest that further evaluation for a possible eating disorder may be beneficial. A positive screen does not mean you have an eating disorder \u2014 it means a conversation with a qualified healthcare professional is recommended.", suggestion: "Consider speaking with a healthcare provider or eating disorder specialist. The National Alliance for Eating Disorders Helpline (1-866-662-1235) and the SAMHSA helpline (1-800-662-4357) can help connect you with support." },
];

function getRange(score: number) {
  return RANGES.find((r) => score >= r.min && score <= r.max)!;
}

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  negative: { text: "text-sage-700 dark:text-sage-400",   bg: "bg-sage-50 dark:bg-sage-950/30",   bar: "from-sage-400 to-sage-600" },
  positive: { text: "text-warm-700 dark:text-warm-400",   bg: "bg-warm-50 dark:bg-warm-950/30",   bar: "from-warm-400 to-warm-600" },
};

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function SCOFFClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(5).fill(null));
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
  const positiveScreen = totalScore >= 2;
  const progress = (answers.filter((a) => a !== null).length / 5) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 4) {
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
    setAnswers(Array(5).fill(null));
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
    const url = "https://mindchecktools.com/scoff-eating-disorder-screening";

    if (mode === "blank") {
      const shareData = {
        title: "SCOFF Eating Disorder Screening \u2014 Free & Private",
        text: "Take a free, private SCOFF eating disorder screening. 5 questions, 1 minute. Your answers never leave your browser.",
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

    const summary = `SCOFF Eating Disorder Screening Results\nScore: ${totalScore}/5 \u2014 ${range.level}\n\nThis is a screening tool, not a diagnosis. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My SCOFF Results", text: summary }); return; } catch { /* user cancelled */ }
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
          SCOFF Eating Disorder Self-Check
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          The SCOFF is a validated screening tool for eating disorders including anorexia, bulimia, and binge eating disorder. Five quick questions about your relationship with food and eating. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~1 Minute" },
            { icon: "\uD83D\uDCCB", text: "5 Questions" },
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
          toolName="SCOFF"
          toolDescription="This self-check uses the SCOFF questionnaire, a validated 5-item screening tool for eating disorders developed by Morgan et al. (1999). The acronym stands for Sick, Control, One stone, Fat, Food. It is free to use for clinical screening purposes."
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
                {answers.filter((a) => a !== null).length} of 5 answered
              </span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">
                Yes / No
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
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inline-block bg-sage-50 dark:bg-sage-950/30 text-sage-600 dark:text-sage-400 text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                          {QUESTION_KEYS[qi]}
                        </span>
                      </div>
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                        {q}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleAnswer(qi, opt.value)}
                            className={`p-2.5 rounded-xl border-2 text-center transition-all text-sm leading-tight ${
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
        <div ref={resultsRef} className="animate-fade-in">
          {/* Positive Screen Alert */}
          {positiveScreen && (
            <div className="bg-warm-50 dark:bg-warm-950/30 border-2 border-warm-300 dark:border-warm-800 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex gap-3 items-start">
                <span className="text-xl">{"\u26A0\uFE0F"}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-warm-800 dark:text-warm-300 mb-2">
                    Positive screen — further evaluation recommended
                  </h3>
                  <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed mb-3">
                    Your responses suggest that further evaluation for a possible eating disorder may be beneficial. A positive screen does not mean you have an eating disorder — it means a deeper conversation with a qualified healthcare professional is recommended.
                  </p>
                  <div className="bg-warm-100/50 dark:bg-warm-900/30 rounded-xl p-4 space-y-1.5">
                    <p className="text-xs font-semibold text-warm-700 dark:text-warm-400 mb-1">Resources:</p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>Eating Disorders:</strong> National Alliance for Eating Disorders — Call <strong>1-866-662-1235</strong></p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> SAMHSA National Helpline — Call <strong>1-800-662-4357</strong> (free, 24/7)</p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> 988 Suicide &amp; Crisis Lifeline — Call or text <strong>988</strong></p>
                    <p className="text-sm text-warm-700 dark:text-warm-400"><strong>US:</strong> Crisis Text Line — Text <strong>HOME</strong> to <strong>741741</strong></p>
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
                <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your SCOFF Score</p>
                <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
                <p className={`text-sm font-semibold ${colors.text}`}>out of 5 — {range.level}</p>
                <div className="mt-6">
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 5) * 100}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-400 dark:text-neutral-500 mt-1.5">
                    <span>0 — Negative</span>
                    <span>5 — Positive</span>
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

                {/* Sensitivity/Specificity Note */}
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-xl p-4">
                  <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                    <strong>About accuracy:</strong> The SCOFF has a sensitivity of approximately 84.6% and specificity of approximately 89.6% (Morgan et al., 1999). This means it correctly identifies most people with eating disorders, but a positive screen does not confirm an eating disorder — and a negative screen does not entirely rule one out. Professional evaluation is always recommended if you have concerns about your eating.
                  </p>
                </div>

                <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                  <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                    <strong>Important reminder:</strong> The SCOFF is a brief screening tool. It is not a way to confirm or rule out an eating disorder. Only a qualified healthcare professional can properly assess eating-related concerns through a comprehensive clinical evaluation. This tool is for personal reflection and education only.
                  </p>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Responses</h3>
              <div className="divide-y divide-sand-100 dark:divide-neutral-700">
                {QUESTIONS.map((q, i) => (
                  <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                      <span className="inline-block bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 text-[10px] font-bold px-1.5 py-0.5 rounded mr-1.5 uppercase tracking-wide">
                        {QUESTION_KEYS[i]}
                      </span>
                      {q}
                    </span>
                    <span className={`text-sm font-semibold whitespace-nowrap ${
                      answers[i] === 1 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
                    }`}>
                      {answers[i] === 1 ? "Yes" : "No"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>SCOFF Eating Disorder Screening from mindchecktools.com — {new Date().toLocaleDateString()}</p>
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
                How this score is calculated
              </span>
              <svg className={`w-5 h-5 text-neutral-400 transition-transform ${showScoring ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showScoring && (
              <div className="px-5 pb-5 space-y-3 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  The SCOFF adds your Yes responses (1 point each) across 5 items for a total between 0 and 5. A score of 2 or higher is considered a positive screen:
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
                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed pt-2">
                  The cutoff of 2 was established in the original validation study by Morgan, Reid, and Lacey (1999). The SCOFF acronym stands for the key words in each question: <strong>S</strong>ick, <strong>C</strong>ontrol, <strong>O</strong>ne stone, <strong>F</strong>at, <strong>F</strong>ood.
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are struggling with eating, food, or body image, you are not alone. Help is available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "National Alliance for Eating Disorders (US)", detail: "1-866-662-1235 \u2014 eating disorder helpline", color: "text-sage-600 dark:text-sage-400" },
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
              Understanding Eating Disorders
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Types of Eating Disorders</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Eating disorders encompass several distinct conditions. <strong>Anorexia nervosa</strong> involves restriction of food intake leading to significantly low body weight, intense fear of gaining weight, and distorted body image. <strong>Bulimia nervosa</strong> involves recurrent episodes of binge eating followed by compensatory behaviors such as self-induced vomiting, misuse of laxatives, fasting, or excessive exercise. <strong>Binge eating disorder (BED)</strong> involves recurrent episodes of eating large amounts of food with a sense of loss of control, without regular compensatory behaviors. <strong>ARFID</strong> (Avoidant/Restrictive Food Intake Disorder) involves avoidance of food based on sensory characteristics, fear of consequences, or lack of interest. <strong>OSFED</strong> (Other Specified Feeding or Eating Disorders) captures clinically significant eating-related difficulties that do not meet full criteria for other categories.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Who Is Affected?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Eating disorders affect approximately <strong>9% of the U.S. population</strong> at some point in their lifetime, according to the National Association of Anorexia Nervosa and Associated Disorders. They affect people of all ages, genders, races, ethnicities, body shapes, and socioeconomic backgrounds. While eating disorders have historically been associated with young white women, research increasingly shows they are common across all demographics. Approximately <strong>1 in 3 people</strong> with an eating disorder is male. Eating disorders have the <strong>highest mortality rate</strong> of any mental health condition, making early identification critically important.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Why Screening Matters</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Many people with eating disorders do not seek help on their own, often due to shame, denial, or not recognizing their behaviors as problematic. Brief screening tools like the SCOFF can help identify individuals who may benefit from professional evaluation. Early identification is important because eating disorders are treatable — <strong>recovery is possible</strong> — and outcomes improve with earlier intervention. Effective approaches include cognitive-behavioral therapy, family-based approaches, and nutritional counseling, often combined. The <Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">DASS-21</Link> and <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">PHQ-9</Link> may also be useful, as depression and anxiety frequently co-occur with eating disorders.
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
                  Morgan, J. F., Reid, F., &amp; Lacey, J. H. (1999). The SCOFF questionnaire: assessment of a new screening tool for eating disorders.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/10604269/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — SCOFF Validation</a>
                </li>
                <li>
                  National Institute of Mental Health (NIMH). Eating Disorders.{" "}
                  <a href="https://www.nimh.nih.gov/health/topics/eating-disorders" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
                </li>
                <li>
                  SAMHSA. Mental Health.{" "}
                  <a href="https://www.samhsa.gov/mental-health" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">samhsa.gov</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "DASS-21 Depression/Anxiety/Stress", desc: "One test screens three conditions", href: "/dass-21-depression-anxiety-stress" },
                { name: "PHQ-9 Depression Screening", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
                { name: "GAD-7 Anxiety Screening", desc: "7-question validated anxiety screener", href: "/gad-7-anxiety-test" },
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
              The SCOFF questionnaire was developed by Morgan, Reid, and Lacey (1999). It is free to use for clinical screening purposes.
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
