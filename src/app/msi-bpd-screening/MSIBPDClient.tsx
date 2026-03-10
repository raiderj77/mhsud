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
  "Have any of your closest relationships been troubled by a lot of arguments or repeated breakups?",
  "Have you deliberately hurt yourself physically (e.g., punched yourself, cut yourself, burned yourself)? How about made a suicide attempt?",
  "Have you had at least two other problems with impulsivity (e.g., eating binges and spending sprees, drinking too much and verbal outbursts)?",
  "Have you been extremely moody?",
  "Have you felt very angry a lot of the time? How about often acted in an angry or sarcastic manner?",
  "Have you often been distrustful of other people?",
  "Have you frequently felt unreal or as if things around you were unreal?",
  "Have you chronically felt empty?",
  "Have you often felt that you had no idea of who you are or that you had no identity?",
  "Have you made desperate efforts to avoid feeling abandoned or being abandoned (e.g., repeatedly called someone to reassure yourself that he or she still cared, begged them not to leave you, clung to them physically)?",
];

const OPTIONS = [
  { label: "Yes", value: 1 },
  { label: "No", value: 0 },
];

const RANGES = [
  { min: 0, max: 4, level: "Low Likelihood", key: "low", description: "Your responses suggest a lower likelihood of borderline personality features based on this screening.", suggestion: "Continue being mindful of your emotional well-being. If you notice changes or have concerns, consider checking in again or speaking with a healthcare provider." },
  { min: 5, max: 6, level: "Uncertain — Cannot Rule Out", key: "uncertain", description: "Your responses fall in an uncertain range. Based on this screening, borderline personality features cannot be ruled out.", suggestion: "Consider speaking with a mental health professional for a more thorough evaluation. This score does not mean you have BPD, but further assessment may be helpful." },
  { min: 7, max: 10, level: "Positive Screen", key: "positive", description: "Your responses meet the threshold for a positive screen on the MSI-BPD. This suggests that further evaluation for borderline personality features may be warranted.", suggestion: "Speaking with a mental health professional experienced with personality disorders is strongly encouraged. Effective treatments like Dialectical Behavior Therapy (DBT) are available and can make a meaningful difference." },
];

function getRange(score: number) {
  return RANGES.find((r) => score >= r.min && score <= r.max)!;
}

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  low:       { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",    bar: "from-sage-400 to-sage-600" },
  uncertain: { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30",    bar: "from-warm-400 to-warm-600" },
  positive:  { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "from-crisis-400 to-crisis-600" },
};

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function MSIBPDClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(10).fill(null));
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
  const q2Flagged = answers[1] === 1;
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
    const url = "https://mindchecktools.com/msi-bpd-screening";

    if (mode === "blank") {
      const shareData = {
        title: "MSI-BPD Borderline Personality Disorder Screening — Free & Private",
        text: "Take a free, private MSI-BPD borderline personality disorder screening. Your answers never leave your browser.",
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

    const summary = `MSI-BPD Screening Results\nScore: ${totalScore}/10 — ${range.level}\n\nThis is a screening tool, not a diagnosis. Take the screening: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My MSI-BPD Results", text: summary }); return; } catch { /* user cancelled */ }
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
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          MSI-BPD Borderline Personality Disorder Screening
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          A validated 10-item screening instrument that helps identify features of borderline personality disorder. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\u{1F512}", text: "100% Private" },
            { icon: "\u23F1", text: "~2 Minutes" },
            { icon: "\u{1F4CB}", text: "10 Questions" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last updated: March 2026</p>
      </header>

      {/* Disclaimer Gate */}
      {!accepted && (
        <DisclaimerGate
          toolName="MSI-BPD"
          toolDescription="This screening uses the McLean Screening Instrument for Borderline Personality Disorder (MSI-BPD), a validated 10-item tool developed by Zanarini et al. (2003) at McLean Hospital."
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
                Answer <strong>Yes</strong> or <strong>No</strong>
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
              const isQ2 = qi === 1;
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
                        {isQ2 && (
                          <span className="inline-block bg-warm-100 dark:bg-warm-950/40 text-warm-700 dark:text-warm-400 text-[11px] font-bold px-2 py-0.5 rounded mr-2 uppercase tracking-wide align-middle">
                            Sensitive
                          </span>
                        )}
                        {q}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
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
          {/* Q2 Crisis Alert */}
          {q2Flagged && (
            <div className="bg-crisis-50 dark:bg-crisis-950/30 border-2 border-crisis-300 dark:border-crisis-800 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex gap-3 items-start">
                <span className="text-xl">{"\u{1F6A8}"}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-crisis-800 dark:text-crisis-300 mb-2">
                    Your safety matters
                  </h3>
                  <p className="text-sm text-crisis-700 dark:text-crisis-400 leading-relaxed mb-3">
                    You indicated a history of self-harm or a suicide attempt. These experiences are more common than many people realize, and support is available.
                  </p>
                  <p className="text-sm font-semibold text-crisis-800 dark:text-crisis-300 mb-4">
                    If you are in immediate danger, please call your local emergency number now.
                  </p>
                  <div className="bg-crisis-100/50 dark:bg-crisis-900/30 rounded-xl p-4 space-y-1.5">
                    <p className="text-xs font-semibold text-crisis-700 dark:text-crisis-400 mb-1">Resources:</p>
                    <p className="text-sm text-crisis-700 dark:text-crisis-400"><strong>US:</strong> 988 Suicide &amp; Crisis Lifeline — Call or text <strong>988</strong></p>
                    <p className="text-sm text-crisis-700 dark:text-crisis-400"><strong>US:</strong> Crisis Text Line — Text <strong>HOME</strong> to <strong>741741</strong></p>
                    <p className="text-sm text-crisis-700 dark:text-crisis-400"><strong>US:</strong> SAMHSA National Helpline — Call <strong>1-800-662-4357</strong></p>
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
                <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your MSI-BPD Score</p>
                <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
                <p className={`text-sm font-semibold ${colors.text}`}>out of 10 — {range.level}</p>
                <div className="mt-6">
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 10) * 100}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">
                    <span>0 — Low</span>
                    <span>10 — Positive Screen</span>
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
                    <strong>Important reminder:</strong> This score reflects your self-reported responses, not a clinical assessment. Borderline personality disorder can only be assessed by a qualified mental health professional through a comprehensive evaluation. This tool is for personal reflection and education only.
                  </p>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="card p-5 sm:p-6 mb-5">
              <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Responses</h2>
              <div className="divide-y divide-sand-100 dark:divide-neutral-700">
                {QUESTIONS.map((q, i) => (
                  <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                      {i + 1}. {q}
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
              <p>MSI-BPD Screening from mindchecktools.com — {new Date().toLocaleDateString()}</p>
              <p>This is a screening tool, not a diagnosis. Consult a healthcare professional.</p>
            </div>
          </div>

          {/* Action Buttons: Start Over, Print, Share */}
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
            toolName="MSI-BPD Borderline Personality Disorder Screening"
            toolUrl="https://mindchecktools.com/msi-bpd-screening"
            score={totalScore}
            severityLabel={range.level}
            scoreRange={`${range.min}\u2013${range.max}`}
            interpretation={range.description}
            suggestion={range.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["msi-bpd-screening"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q,
              answer: answers[i] === 1 ? "Yes" : "No",
            }))}
          />

          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["msi-bpd-screening"] && (
            <ReflectionPrompts
              toolName="MSI-BPD Borderline Personality Disorder Screening"
              prompts={REFLECTION_PROMPTS["msi-bpd-screening"].prompts}
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
                  The MSI-BPD counts your &ldquo;Yes&rdquo; responses across 10 items for a total between 0 and 10. Research-based ranges:
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
                  The cutoff score of 7 or higher was established by Zanarini et al. (2003). These ranges come from published research, not from this website. They should not be treated as diagnostic thresholds.
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are struggling, you are not alone. These resources are available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 \u2014 available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
                { label: "SAMHSA Helpline (US)", detail: "1-800-662-4357 \u2014 free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
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

          {/* Sources & Further Reading */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources &amp; Further Reading</h2>
            <div className="card p-5 sm:p-6">
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  Zanarini, M. C., Vujanovic, A. A., Parachini, E. A., Boulanger, J. L., Frankenburg, F. R., &amp; Hennen, J. (2003). A screening measure for BPD: The McLean Screening Instrument for Borderline Personality Disorder (MSI-BPD).{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/14609637/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — Validation Study</a>
                </li>
                <li>
                  National Institute of Mental Health (NIMH). Borderline Personality Disorder.{" "}
                  <a href="https://www.nimh.nih.gov/health/topics/borderline-personality-disorder" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
                </li>
                <li>
                  SAMHSA. Personality Disorders.{" "}
                  <a href="https://www.samhsa.gov/mental-health" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">samhsa.gov</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "BPD Test for Women", desc: "MSI-BPD screening with context on BPD in women", href: "/bpd-test-for-women" },
                { name: "BPD Screening for Young Adults", desc: "MSI-BPD screening with young adult context", href: "/bpd-screening-for-young-adults" },
                { name: "PHQ-9 Depression Self-Check", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
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
              The MSI-BPD was developed by Mary C. Zanarini, Ph.D., and colleagues at McLean Hospital / Harvard Medical School. It is reproduced widely across .gov, .edu, and .org sites for clinical and research use.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              This tool is for educational purposes only. It is not medical advice, a diagnosis, or a treatment recommendation.
            </p>
            <ToolReviewerBio />
          </footer>
        </div>
      )}
    </div>
  );
}
