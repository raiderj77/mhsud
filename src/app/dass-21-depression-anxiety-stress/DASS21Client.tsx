"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

// ── Data ────────────────────────────────────────────────────────────────

const INSTRUCTIONS = "Please read each statement and select a number which indicates how much the statement applied to you over the past week. There are no right or wrong answers.";

// Items in validated interleaved order; sub = D (depression), A (anxiety), S (stress)
const QUESTIONS: { text: string; sub: "D" | "A" | "S" }[] = [
  { text: "I found it hard to wind down", sub: "S" },
  { text: "I was aware of dryness of my mouth", sub: "A" },
  { text: "I couldn\u2019t seem to experience any positive feeling at all", sub: "D" },
  { text: "I experienced breathing difficulty (e.g., excessively rapid breathing, breathlessness in the absence of physical exertion)", sub: "A" },
  { text: "I found it difficult to work up the initiative to do things", sub: "D" },
  { text: "I tended to over-react to situations", sub: "S" },
  { text: "I experienced trembling (e.g., in the hands)", sub: "A" },
  { text: "I felt that I was using a lot of nervous energy", sub: "S" },
  { text: "I was worried about situations in which I might panic and make a fool of myself", sub: "A" },
  { text: "I felt that I had nothing to look forward to", sub: "D" },
  { text: "I found myself getting agitated", sub: "S" },
  { text: "I found it difficult to relax", sub: "S" },
  { text: "I felt down-hearted and blue", sub: "D" },
  { text: "I was intolerant of anything that kept me from getting on with what I was doing", sub: "D" },
  { text: "I felt I was close to panic", sub: "A" },
  { text: "I was unable to become enthusiastic about anything", sub: "D" },
  { text: "I felt I wasn\u2019t worth much as a person", sub: "D" },
  { text: "I felt that I was rather touchy", sub: "S" },
  { text: "I was aware of the action of my heart in the absence of physical exertion (e.g., sense of heart rate increase, heart missing a beat)", sub: "A" },
  { text: "I felt scared without any good reason", sub: "A" },
  { text: "I felt that life was meaningless", sub: "S" },
];

const OPTIONS = [
  { label: "Did not apply", value: 0 },
  { label: "Some of the time", value: 1 },
  { label: "Good part of time", value: 2 },
  { label: "Most of the time", value: 3 },
];

const SUB_META: Record<"D" | "A" | "S", { name: string; label: string; color: string; bar: string; text: string; bg: string }> = {
  D: { name: "Depression", label: "D", color: "from-blue-400 to-blue-600", bar: "bg-blue-500", text: "text-blue-700 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/30" },
  A: { name: "Anxiety", label: "A", color: "from-amber-400 to-amber-600", bar: "bg-amber-500", text: "text-amber-700 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/30" },
  S: { name: "Stress", label: "S", color: "from-rose-400 to-rose-600", bar: "bg-rose-500", text: "text-rose-700 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/30" },
};

// Severity ranges AFTER multiplying by 2
const SEVERITY: Record<"D" | "A" | "S", { min: number; max: number; level: string }[]> = {
  D: [
    { min: 0, max: 9, level: "Normal" },
    { min: 10, max: 13, level: "Mild" },
    { min: 14, max: 20, level: "Moderate" },
    { min: 21, max: 27, level: "Severe" },
    { min: 28, max: 42, level: "Extremely Severe" },
  ],
  A: [
    { min: 0, max: 7, level: "Normal" },
    { min: 8, max: 9, level: "Mild" },
    { min: 10, max: 14, level: "Moderate" },
    { min: 15, max: 19, level: "Severe" },
    { min: 20, max: 42, level: "Extremely Severe" },
  ],
  S: [
    { min: 0, max: 14, level: "Normal" },
    { min: 15, max: 18, level: "Mild" },
    { min: 19, max: 25, level: "Moderate" },
    { min: 26, max: 33, level: "Severe" },
    { min: 34, max: 42, level: "Extremely Severe" },
  ],
};

function getSeverity(sub: "D" | "A" | "S", score: number) {
  return SEVERITY[sub].find((r) => score >= r.min && score <= r.max)!;
}

const LEVEL_COLORS: Record<string, { text: string; bg: string }> = {
  Normal:           { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30" },
  Mild:             { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30" },
  Moderate:         { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30" },
  Severe:           { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30" },
  "Extremely Severe": { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30" },
};

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function DASS21Client({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(21).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const allAnswered = answers.every((a) => a !== null);
  const progress = (answers.filter((a) => a !== null).length / 21) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  // Calculate subscale scores (raw * 2)
  function subScore(sub: "D" | "A" | "S"): number {
    const raw = QUESTIONS.reduce((s, q, i) => q.sub === sub ? s + (answers[i] ?? 0) : s, 0);
    return raw * 2;
  }

  const dScore = subScore("D");
  const aScore = subScore("A");
  const sScore = subScore("S");

  const dSev = getSeverity("D", dScore);
  const aSev = getSeverity("A", aScore);
  const sSev = getSeverity("S", sScore);

  const anyElevated = dSev.level !== "Normal" && dSev.level !== "Mild"
    || aSev.level !== "Normal" && aSev.level !== "Mild"
    || sSev.level !== "Normal" && sSev.level !== "Mild";

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 20) {
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
    setAnswers(Array(21).fill(null));
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
    const url = "https://mindchecktools.com/dass-21-depression-anxiety-stress";

    if (mode === "blank") {
      const shareData = {
        title: "DASS-21 Depression, Anxiety & Stress Self-Check \u2014 Free & Private",
        text: "Take a free, private DASS-21 screening. One test screens depression, anxiety, and stress. Your answers never leave your browser.",
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

    const ds = QUESTIONS.reduce((s, q, i) => q.sub === "D" ? s + (answers[i] ?? 0) : s, 0) * 2;
    const as = QUESTIONS.reduce((s, q, i) => q.sub === "A" ? s + (answers[i] ?? 0) : s, 0) * 2;
    const ss = QUESTIONS.reduce((s, q, i) => q.sub === "S" ? s + (answers[i] ?? 0) : s, 0) * 2;
    const summary = `DASS-21 Screening Results\nDepression: ${ds}/42 \u2014 ${getSeverity("D", ds).level}\nAnxiety: ${as}/42 \u2014 ${getSeverity("A", as).level}\nStress: ${ss}/42 \u2014 ${getSeverity("S", ss).level}\n\nThis is a screening tool, not a diagnosis. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My DASS-21 Results", text: summary }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [answers]);

  // Render a subscale result card
  function SubScaleCard({ sub, score, sev }: { sub: "D" | "A" | "S"; score: number; sev: { level: string } }) {
    const meta = SUB_META[sub];
    const lc = LEVEL_COLORS[sev.level];
    return (
      <div className={`${lc.bg} rounded-xl p-4 sm:p-5`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`inline-block ${meta.bg} ${meta.text} text-xs font-bold px-2 py-0.5 rounded uppercase`}>{meta.label}</span>
            <span className={`text-sm font-semibold ${lc.text}`}>{meta.name}</span>
          </div>
          <span className={`font-serif text-2xl font-bold ${lc.text}`}>{score}<span className="text-sm font-normal">/42</span></span>
        </div>
        <div className="relative mb-1.5">
          <div className="h-2.5 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${meta.color} rounded-full transition-all duration-700`} style={{ width: `${(score / 42) * 100}%` }} />
          </div>
        </div>
        <p className={`text-sm font-semibold ${lc.text}`}>{sev.level}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Public Domain</span>
          <span className="badge bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400">3-in-1</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          DASS-21 Depression, Anxiety &amp; Stress Self-Check
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          One test, three answers. The DASS-21 screens for depression, anxiety, and stress simultaneously using 21 validated questions. See which dimensions are elevated and how they compare. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~4 Minutes" },
            { icon: "\uD83D\uDCCB", text: "21 Questions" },
            { icon: "\uD83C\uDFAF", text: "3 Subscales" },
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
          toolName="DASS-21"
          toolDescription="This self-check uses the DASS-21 (Depression Anxiety Stress Scales), a validated 21-item screening instrument that measures three dimensions simultaneously: depression, anxiety, and stress. Developed by Lovibond & Lovibond (1995). It is in the public domain and free to reproduce."
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
                {answers.filter((a) => a !== null).length} of 21 answered
              </span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">
                Past week
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
              const meta = SUB_META[q.sub];
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
                      <span className={`inline-block ${meta.bg} ${meta.text} text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-1.5`}>
                        {meta.name}
                      </span>
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                        {q.text}
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
                            <span className="block text-xs text-neutral-400 dark:text-neutral-500 mb-0.5">{opt.value}</span>
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
          {anyElevated && (
            <div className="bg-warm-50 dark:bg-warm-950/30 border-2 border-warm-300 dark:border-warm-800 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex gap-3 items-start">
                <span className="text-xl">{"\u26A0\uFE0F"}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-warm-800 dark:text-warm-300 mb-2">
                    One or more scores are elevated — professional consultation recommended
                  </h3>
                  <p className="text-sm text-warm-700 dark:text-warm-400 leading-relaxed mb-3">
                    At least one of your subscale scores falls in the moderate or higher range. This suggests that further evaluation by a qualified healthcare provider may be beneficial. This is not a confirmation of any condition — it indicates the need for a professional conversation.
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
            {/* Three Subscale Cards */}
            <div className="card overflow-hidden mb-5">
              <div className="p-5 sm:p-6 border-b border-sand-200 dark:border-neutral-700">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1">DASS-21 Results</p>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100">Three-Subscale Breakdown</h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">Scores are raw totals multiplied by 2 (DASS-21 to DASS-42 equivalent). Max 42 per subscale.</p>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <SubScaleCard sub="D" score={dScore} sev={dSev} />
                <SubScaleCard sub="A" score={aScore} sev={aSev} />
                <SubScaleCard sub="S" score={sScore} sev={sSev} />
              </div>

              <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-4">
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <strong>What you can consider next:</strong>{" "}
                    {anyElevated
                      ? "One or more of your subscale scores is in the moderate or higher range. Speaking with a healthcare provider or mental health professional about these results is recommended. Your subscale breakdown can help guide that conversation. The SAMHSA helpline (1-800-662-4357) provides free, confidential referrals 24/7."
                      : "Your scores fall in the normal to mild range across all three dimensions. Continue to be mindful of your emotional well-being. If your situation changes or you are experiencing difficulties, consider checking in again or speaking with a healthcare provider."
                    }
                  </p>
                </div>
                <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                  <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                    <strong>Important reminder:</strong> The DASS-21 is a screening tool, not a way to confirm or rule out depression, anxiety, or stress disorders. Only a qualified healthcare professional can properly evaluate mental health conditions through a comprehensive clinical assessment. This tool is for personal reflection and education only.
                  </p>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Responses</h3>
              <div className="divide-y divide-sand-100 dark:divide-neutral-700">
                {QUESTIONS.map((q, i) => {
                  const meta = SUB_META[q.sub];
                  return (
                    <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                        <span className={`inline-block ${meta.bg} ${meta.text} text-[10px] font-bold px-1.5 py-0.5 rounded mr-1.5 uppercase tracking-wide`}>
                          {meta.label}
                        </span>
                        {q.text}
                      </span>
                      <span className={`text-sm font-semibold whitespace-nowrap ${
                        (answers[i] ?? 0) >= 2 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
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
              <p>DASS-21 Self-Check from mindchecktools.com — {new Date().toLocaleDateString()}</p>
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
                How this scoring works
              </span>
              <svg className={`w-5 h-5 text-neutral-400 transition-transform ${showScoring ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showScoring && (
              <div className="px-5 pb-5 space-y-4 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  The DASS-21 has 21 items (7 per subscale) rated 0-3. Raw subscale totals are <strong>multiplied by 2</strong> because the DASS-21 is the short form of the 42-item DASS. Each subscale has its own severity cutoffs:
                </p>

                {(["D", "A", "S"] as const).map((sub) => {
                  const meta = SUB_META[sub];
                  const score = sub === "D" ? dScore : sub === "A" ? aScore : sScore;
                  return (
                    <div key={sub}>
                      <p className={`text-sm font-semibold ${meta.text} mb-1.5`}>{meta.name}</p>
                      <div className="space-y-1">
                        {SEVERITY[sub].map((r) => {
                          const active = score >= r.min && score <= r.max;
                          const lc = LEVEL_COLORS[r.level];
                          return (
                            <div key={r.level} className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
                              active ? `${lc.bg} ring-1 ring-inset ring-current/10` : ""
                            }`}>
                              <div className={`w-2.5 h-2.5 rounded-full ${meta.bar} flex-shrink-0`} />
                              <span className={`text-sm ${active ? `font-semibold ${lc.text}` : "text-neutral-500 dark:text-neutral-400"}`}>
                                {r.min}\u2013{r.max}: {r.level}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed pt-2">
                  Scoring and severity cutoffs based on the original DASS manual by Lovibond &amp; Lovibond (1995). Note that each subscale uses different thresholds because depression, anxiety, and stress have different distributions in the general population.
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are experiencing depression, anxiety, or overwhelming stress, help is available:
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
              Understanding Depression, Anxiety, and Stress
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Why Screen All Three Together?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Depression, anxiety, and stress are the three most common emotional health challenges worldwide, and they frequently co-occur. Research shows that approximately <strong>60% of people</strong> experiencing depression also have significant anxiety symptoms, and chronic stress is a well-established risk factor for both. Despite their overlap, each involves distinct experiences: depression centers on low mood, hopelessness, and loss of pleasure; anxiety involves worry, fear, and physical arousal; and stress involves tension, irritability, and difficulty winding down. The DASS-21 measures all three simultaneously, providing a more complete picture than single-condition screeners alone.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What Each Subscale Measures</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The <strong>Depression subscale</strong> assesses dysphoria, hopelessness, devaluation of life, self-deprecation, lack of interest, anhedonia (inability to experience pleasure), and inertia. The <strong>Anxiety subscale</strong> captures autonomic arousal (dry mouth, breathing difficulty, trembling, heart pounding), skeletal muscle effects, situational anxiety, and subjective anxious feelings. The <strong>Stress subscale</strong> measures difficulty relaxing, nervous arousal, being easily upset or agitated, irritability, and impatience. This three-factor structure has been confirmed across dozens of international studies.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">The Value of a Comprehensive Snapshot</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Understanding which dimensions are elevated can help guide more productive conversations with healthcare providers. For example, someone with high stress but normal depression might benefit from different support than someone with high depression and high anxiety. The DASS-21 helps identify these patterns. It complements condition-specific tools: the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">PHQ-9</Link> provides a deeper assessment of depression, while the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">GAD-7</Link> focuses on generalized anxiety. Using them together gives the most comprehensive self-assessment picture.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Understanding the Scoring</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The DASS-21 is the short form of the original 42-item DASS. Because it uses half as many items, raw scores are multiplied by 2 to produce final scores on the same scale as the full version. Each subscale uses different severity thresholds — for instance, a depression score of 14 is &quot;Moderate&quot; while the same score for stress is &quot;Normal&quot; — because these conditions have different baseline distributions in the general population. The DASS-21 has been validated across many cultures and settings (Lovibond &amp; Lovibond, 1995) and is widely used in both clinical practice and research.
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
                  Lovibond, S. H., &amp; Lovibond, P. F. (1995). Manual for the Depression Anxiety Stress Scales.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/7497257/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — DASS Validation</a>
                </li>
                <li>
                  National Institute of Mental Health (NIMH). Depression.{" "}
                  <a href="https://www.nimh.nih.gov/health/topics/depression" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
                </li>
                <li>
                  American Psychological Association. Stress.{" "}
                  <a href="https://www.apa.org/topics/stress" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">apa.org</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "PHQ-9 Depression Screening", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
                { name: "GAD-7 Anxiety Screening", desc: "7-question validated anxiety screener", href: "/gad-7-anxiety-test" },
                { name: "Work Stress & Burnout", desc: "12 questions about work demands and recovery", href: "/work-stress-check" },
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
              The DASS-21 (Depression Anxiety Stress Scales) was developed by S.H. Lovibond and P.F. Lovibond (1995). It is in the public domain and free to reproduce.
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
