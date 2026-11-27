"use client";

import { ScreeningDirectoryLinks } from "@/components/ScreeningDirectoryLinks";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";
import {
  PRIVATE_SHARE_COPIED_MESSAGE,
  PRIVATE_SHARE_NOTICE,
  sharePrivateToolLink,
} from "@/lib/privateToolSharing";
import { ResultCard } from "@/components/ResultCard";
import { firstSentence } from "@/lib/resultCard.mjs";


import { FTND_QUESTIONS as QUESTIONS, FTND_RANGES as RANGES, scoreFtnd, getFtndRange } from "@/lib/ftndScoring.mjs";

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  "very-low":       { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600" },
  low: { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30",     bar: "from-warm-400 to-warm-600" },
  medium:     { text: "text-orange-700 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30", bar: "from-orange-400 to-orange-600" },
  high: { text: "text-orange-800 dark:text-orange-300", bg: "bg-orange-100 dark:bg-orange-950/40", bar: "from-orange-500 to-orange-700" },
  "very-high":      { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "from-crisis-400 to-crisis-600" },
};

interface Props {
  faqData: { question: string; answer: string }[];
}

export function FTNDClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const totalScore = scoreFtnd(answers);
  const range = totalScore === null ? undefined : getFtndRange(totalScore);
  const colors = range && RANGE_COLORS[range.key];
  const progress = (answers.filter((a) => a !== null).length / QUESTIONS.length) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < QUESTIONS.length - 1) {
      setTimeout(() => {
        questionRefs.current[qi + 1]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "center" });
      }, 200);
    }
  }

  function handleSubmit() {
    setShowResults(true);
    setTimeout(() => {
      if (resultsRef.current) resultsRef.current.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }

  function handleReset() {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setShowResults(false);
    setShowScoring(false);
    setExpandedFaq(null);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(async (mode: "share" | "copy") => {
    const outcome = await sharePrivateToolLink({
      toolName: "FTND Nicotine Dependence Test",
      canonicalPath: "/nicotine-dependence-test",
      mode,
    });
    if (outcome === "copied") {
      setShareMessage(PRIVATE_SHARE_COPIED_MESSAGE);
      setTimeout(() => setShareMessage(""), 2500);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated Screen</span>
          <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">~1 Minute</span>
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">6 Questions</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          FTND Nicotine Dependence Test
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          A published screener for adults who smoke cigarettes, developed by Heatherton and colleagues (1991). Your answers and score are processed locally in your browser.
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last updated: November 26, 2026</p>
        <ToolReviewerBio lastReviewed="November 26, 2026" />
      </header>

      {!accepted && (
        <DisclaimerGate
          toolName="FTND"
          toolDescription="The Fagerström Test for Nicotine Dependence is a 6-question measure of physical dependence on cigarettes for adults who smoke. It is for educational purposes only."
          onAccept={() => setAccepted(true)}
        />
      )}

      {accepted && !showResults && (
        <div className="motion-safe:animate-fade-in">
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">{answers.filter((a) => a !== null).length} of {QUESTIONS.length} answered</span>
              </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500 motion-reduce:transition-none" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="space-y-3">
            {QUESTIONS.map((q, qi) => {
              const isReachable = qi <= furthestAnswered + 1;
              return (
                <div key={qi} ref={(el) => { questionRefs.current[qi] = el; }} className={`card p-5 transition-all duration-300 ${isReachable ? "opacity-100" : "opacity-30 pointer-events-none"} ${answers[qi] !== null ? "border-sage-200 dark:border-sage-800" : ""}`}>
                  <div className="flex gap-3 items-start">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${answers[qi] !== null ? "bg-sage-500 text-white" : "bg-sand-100 dark:bg-night-700 text-neutral-400"}`}>
                      {answers[qi] !== null ? "✓" : qi + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">{q.text}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {q.options.map((opt) => (
                          <button key={opt.label} disabled={!isReachable} aria-pressed={answers[qi] === opt.value} onClick={() => handleAnswer(qi, opt.value)} className={`p-2.5 min-h-[44px] rounded-xl border-2 text-center transition-all text-sm leading-tight ${answers[qi] === opt.value ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold" : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"}`}>
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

          <div className="flex gap-3 mt-6">
            <button onClick={handleSubmit} disabled={totalScore === null} className="btn-primary flex-1 text-base py-4">View My Results</button>
            <button onClick={handleReset} className="btn-secondary px-5">Reset</button>
          </div>
        </div>
      )}

      {showResults && totalScore !== null && range && colors && (
        <div ref={resultsRef} className="motion-safe:animate-fade-in" aria-live="polite">
          <div className="card overflow-hidden mb-5">
            <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
              <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your FTND Score</p>
              <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
              <p className={`text-sm font-semibold ${colors.text}`}>out of 10, {range.level}</p>
              <p className={`text-xs ${colors.text} mt-1`}>Score range {range.min === range.max ? range.min : `${range.min}–${range.max}`}</p>
              <div className="mt-6">
                <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700 motion-reduce:transition-none`} style={{ width: `${(totalScore / 10) * 100}%` }} />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">
                  <span>0, Very Low Dependence</span><span>10, Very High Dependence</span>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">{range.description} A low score does not mean smoking is safe.</p>
              <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"><strong>What you can consider next:</strong> {range.suggestion}</p>
              </div>
              <Link href="/what-is-the-ftnd-test" className="block bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4 hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
                <p className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-1">Read the FTND score guide</p>
                <p className="text-xs text-sage-600 dark:text-sage-400">See how the five dependence levels are interpreted.</p>
              </Link>
              <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                  <strong>Important reminder:</strong> This screen is for adults who smoke cigarettes. Your answers and score are processed locally in your browser.
                </p>
              </div>
            </div>
          </div>

          <ResultCard
            toolName="FTND Nicotine Dependence Test"
            toolPath="/nicotine-dependence-test"
            score={`${totalScore} / 10`}
            band={range.level}
            meaning={firstSentence(range.description)}
          />

          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Response Summary</h3>
            <div className="divide-y divide-sand-100 dark:divide-neutral-700">
              {QUESTIONS.map((q, i) => {
                const selected = q.options.find((o) => o.value === answers[i]);
                return (
                  <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{i + 1}. {q.text}</span>
                    <span className={`text-sm font-semibold text-right ${(answers[i] ?? 0) >= 2 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"}`}>{selected?.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card overflow-hidden mb-5">
            <button aria-expanded={showScoring} onClick={() => setShowScoring(!showScoring)} className="w-full p-5 flex justify-between items-center text-left">
              <span className="font-serif text-base font-semibold text-neutral-800 dark:text-neutral-100">How this score is calculated</span>
              <svg className={`w-5 h-5 text-neutral-400 transition-transform ${showScoring ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showScoring && (
              <div className="px-5 pb-5 space-y-3 motion-safe:animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">The FTND adds the points for all six answers. Two questions are worth up to 3 points each and four are worth up to 1 point each, for a total of 0 to 10.</p>
                {RANGES.map((r) => {
                  const active = totalScore >= r.min && totalScore <= r.max;
                  const c = RANGE_COLORS[r.key];
                  return (
                    <div key={r.key} className={`flex items-center gap-3 p-3 rounded-lg transition-all ${active ? `${c.bg} ring-1 ring-inset ring-current/10` : ""}`}>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${c.bar} flex-shrink-0`} />
                      <span className={`text-sm ${active ? `font-semibold ${c.text}` : "text-neutral-500 dark:text-neutral-400"}`}>{r.min === r.max ? r.min : `${r.min}–${r.max}`}: {r.level}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <ScreeningDirectoryLinks />

          <div className="flex gap-3 mb-8">
            <button onClick={handleReset} className="btn-primary flex-1 text-base py-4">Start Over</button>
            <button
              onClick={handlePrint}
              className="btn-secondary px-5 py-4 flex items-center gap-2"
              aria-label="Print your results"
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
                onClick={() => handleShare("share")}
                className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Share Tool Link
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Copy Tool Link
              </button>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">{PRIVATE_SHARE_NOTICE}</p>
            {shareMessage && (
              <p className="text-xs text-sage-600 dark:text-sage-400 font-medium mt-2 motion-safe:animate-fade-in">
                ✓ {shareMessage}
              </p>
            )}
          </div>

          {/* Download Reflection Summary */}
          <ReflectionSummary
            toolName="FTND Nicotine Dependence Test"
            toolUrl="https://mindchecktools.com/nicotine-dependence-test"
            score={totalScore}
            severityLabel={range.level}
            scoreRange={range.min === range.max ? String(range.min) : `${range.min}–${range.max}`}
            interpretation={range.description}
            suggestion={range.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["nicotine-dependence-test"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q.text,
              answer: q.options.find((o) => o.value === answers[i])?.label ?? "",
            }))}
          />



          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["nicotine-dependence-test"] && (
            <ReflectionPrompts
              toolName="FTND Nicotine Dependence Test"
              prompts={REFLECTION_PROMPTS["nicotine-dependence-test"].prompts}
            />
          )}

          {/* What Research Is This Based On? */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">What Research Is This Based On?</h2>
            <div className="card p-5 sm:p-6">
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  Heatherton TF, Kozlowski LT, Frecker RC, Fagerström KO (1991). British Journal of Addiction, 86, 1119–1127.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/1932883/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">Original FTND study</a>
                </li>
                <li>
                  U.S. National Library of Medicine, Common Data Elements Repository.{" "}
                  <a href="https://cde.nlm.nih.gov/formView?tinyId=myLzkabPx" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">NIDA Clinical Trials Network FTND form</a>
                </li>
                <li>
                  Centers for Disease Control and Prevention.{" "}
                  <a href="https://www.cdc.gov/tobacco/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">Smoking and Tobacco Use</a>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Full AUDIT", desc: "Comprehensive WHO alcohol screen", href: "/audit-alcohol-test" },
                { name: "CUDIT-R Cannabis Screen", desc: "Screen for cannabis use concerns", href: "/cudit-r-cannabis-screening" },
                { name: "AUDIT-C", desc: "Brief alcohol screen", href: "/audit-c-alcohol-screen" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>


          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need Support Right Now?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Get help with quitting cigarettes or find immediate support. In immediate danger, call your local emergency number (911 in the U.S.).</p>
            <div className="space-y-2.5">
              {[
                { label: "Quitline (US)", detail: <a className="underline" href="tel:18007848669">1-800-QUIT-NOW (1-800-784-8669), free coaching</a>, color: "text-sage-600 dark:text-sage-400" },
                { label: "Smokefree.gov", detail: <a className="underline" href="https://smokefree.gov/">Quit plans and text programs</a>, color: "text-sage-600 dark:text-sage-400" },
                { label: "SAMHSA National Helpline (US)", detail: "1-800-662-4357, free, confidential, 24/7 referrals", color: "text-sage-600 dark:text-sage-400" },
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988, available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
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
            <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
              Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
            </Link>
          </div>

          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
              The Fagerström Test for Nicotine Dependence (Heatherton et al., 1991) is copyrighted by Taylor &amp; Francis. The U.S. National Library of Medicine records that it may be reproduced without permission. MindCheck Tools reproduces the six published items in full, keeps this test free, and keeps it separate from any paid product.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">This tool is for educational purposes only. Not medical advice, a diagnosis, or a treatment recommendation.</p>
            <ToolReviewerBio lastReviewed="November 26, 2026" />
          </footer>
        </div>
      )}
      <section className="mt-8 mb-8">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqData.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button aria-expanded={expandedFaq === i} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full p-4 flex justify-between items-center text-left gap-3">
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 flex-1">{faq.question}</span>
                <svg className={`w-4 h-4 text-neutral-400 transition-transform flex-shrink-0 ${expandedFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div hidden={expandedFaq !== i} className="px-4 pb-4 motion-safe:animate-fade-in"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
