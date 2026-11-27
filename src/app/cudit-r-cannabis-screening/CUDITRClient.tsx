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
import {
  CUDITR_GATE_QUESTION,
  CUDITR_QUESTIONS as QUESTIONS,
  CUDITR_RANGES as RANGES,
  scoreCuditr,
  getCuditrRange,
} from "@/lib/cuditrScoring.mjs";

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  below:       { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600" },
  hazardous:     { text: "text-orange-700 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30", bar: "from-orange-400 to-orange-600" },
  "possible-cud":      { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "from-crisis-400 to-crisis-600" },
};

interface Props {
  faqData: { question: string; answer: string }[];
}

export function CUDITRClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [recentUse, setRecentUse] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const totalScore = recentUse === true ? scoreCuditr(answers) : null;
  const range = totalScore === null ? undefined : getCuditrRange(totalScore);
  const colors = range && RANGE_COLORS[range.key];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = (answeredCount / QUESTIONS.length) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < QUESTIONS.length - 1) {
      setTimeout(() => {
        questionRefs.current[qi + 1]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      }, 200);
    }
  }

  function handleSubmit() {
    setShowResults(true);
    setTimeout(() => {
      resultsRef.current?.focus();
    }, 100);
  }

  function handleReset() {
    setRecentUse(null);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setShowResults(false);
    setShowScoring(false);
    setExpandedFaq(null);
    requestAnimationFrame(() => document.getElementById("cuditr-gate-heading")?.focus());
  }

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(async (mode: "share" | "copy") => {
    const outcome = await sharePrivateToolLink({
      toolName: "CUDIT-R Cannabis Screen",
      canonicalPath: "/cudit-r-cannabis-screening",
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
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated Screen</span>
          <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">~2 Minutes</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          CUDIT-R Cannabis Screen
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          An 8-question cannabis screen for adults who have used cannabis in the past six months. Your answers and score are processed locally in your browser.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[{ icon: "🔒", text: "Answers Stay Local" }, { icon: "⚡", text: "~2 Minutes" }, { icon: "📋", text: "8 Questions" }].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">{b.icon} {b.text}</span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last updated: November 26, 2026</p>
        <ToolReviewerBio lastReviewed="November 26, 2026" />
      </header>

      {!accepted && (
        <DisclaimerGate
          toolName="CUDIT-R"
          toolDescription="The CUDIT-R is an 8-question cannabis screening tool developed by Adamson and colleagues. It uses published cut points and is for educational purposes only."
          onAccept={() => setAccepted(true)}
        />
      )}

      {accepted && recentUse === null && (
        <section className="card p-5 mb-5" aria-labelledby="cuditr-gate-heading">
          <h2 id="cuditr-gate-heading" tabIndex={-1} className="font-serif text-xl font-semibold mb-4">{CUDITR_GATE_QUESTION}</h2>
          <div className="flex gap-3">
            <button aria-describedby="cuditr-gate-heading" onClick={() => {
              setRecentUse(true);
              requestAnimationFrame(() => document.getElementById("cuditr-progress")?.focus());
            }} className="btn-primary min-h-[44px] px-6">Yes</button>
            <button aria-describedby="cuditr-gate-heading" onClick={() => {
              setRecentUse(false);
              requestAnimationFrame(() => document.getElementById("cuditr-no-score")?.focus());
            }} className="btn-secondary min-h-[44px] px-6">No</button>
          </div>
        </section>
      )}

      {recentUse === false && (
        <section className="card p-5 mb-5" aria-labelledby="cuditr-no-score">
          <h2 id="cuditr-no-score" tabIndex={-1} className="font-serif text-xl font-semibold mb-2">No score calculated</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">This screen is designed for adults who have used cannabis in the past six months. This outcome cannot establish a diagnosis or rule out a cannabis-related concern.</p>
          <ul className="space-y-2 mb-4">
            <li><Link href="/what-is-the-cudit-r-test" className="underline">Read the CUDIT-R guide</Link></li>
            <li><Link href="/audit-c-alcohol-screen" className="underline">Open the AUDIT-C alcohol screen</Link></li>
            <li><button type="button" onClick={() => document.getElementById("cuditr-support")?.focus()} className="underline">Find support resources</button></li>
          </ul>
          <button onClick={handleReset} className="btn-secondary min-h-[44px] px-5">Start Over</button>
        </section>
      )}

      {recentUse === true && !showResults && (
        <div className="animate-fade-in">
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span id="cuditr-progress" tabIndex={-1} role="status" className="text-xs font-semibold text-sage-600 dark:text-sage-400">{answeredCount} of {QUESTIONS.length} answered</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Past six months</span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
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
                      <p id={`cuditr-question-${qi}`} className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">{q.text}</p>
                      <div role="group" aria-labelledby={`cuditr-question-${qi}`} className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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

      {recentUse === false && <SupportCard />}

      {showResults && totalScore !== null && range && colors && (
        <div ref={resultsRef} tabIndex={-1} className="animate-fade-in" aria-live="polite">
          <div className="card overflow-hidden mb-5">
            <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
              <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your CUDIT-R Score</p>
              <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
              <p className={`text-sm font-semibold ${colors.text}`}>out of 32, {range.level}</p>
              <div className="mt-6">
                <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 32) * 100}%` }} />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1.5">
                  <span>0 points</span><span>32 points</span>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">{range.description}</p>
              <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"><strong>What you can consider next:</strong> {range.suggestion}</p>
              </div>
              {range.key !== "below" && (
                <Link href="/what-is-the-cudit-r-test" className="block bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4 hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
                  <p className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-1">Read the CUDIT-R guide</p>
                  <p className="text-xs text-sage-600 dark:text-sage-500">Review the cut points, limitations, and what a positive screen means.</p>
                </Link>
              )}
              <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                  <strong>Important reminder:</strong> This screening result cannot establish or rule out cannabis use disorder. A qualified healthcare professional can assess your concerns. Your answers and score are processed locally in your browser.
                </p>
              </div>
            </div>
          </div>

          <ResultCard
            toolName="CUDIT-R Cannabis Screen"
            toolPath="/cudit-r-cannabis-screening"
            score={`${totalScore} / 32`}
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
                    <span className={`text-sm font-semibold max-w-[45%] text-right ${(answers[i] ?? 0) >= 2 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"}`}>{selected?.label}</span>
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
              <div className="px-5 pb-5 space-y-3 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">The first seven items each score 0–4. The eighth scores 0, 2, or 4. The eight values add up to a total between 0 and 32.</p>
                {RANGES.map((r) => {
                  const active = totalScore >= r.min && totalScore <= r.max;
                  const c = RANGE_COLORS[r.key];
                  return (
                    <div key={r.key} className={`flex items-center gap-3 p-3 rounded-lg transition-all ${active ? `${c.bg} ring-1 ring-inset ring-current/10` : ""}`}>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${c.bar} flex-shrink-0`} />
                      <span className={`text-sm ${active ? `font-semibold ${c.text}` : "text-neutral-500 dark:text-neutral-400"}`}>{r.min}–{r.max}: {r.level}</span>
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
              <p className="text-xs text-sage-600 dark:text-sage-400 font-medium mt-2 animate-fade-in">
                ✓ {shareMessage}
              </p>
            )}
          </div>

          {/* Download Reflection Summary */}
          <ReflectionSummary
            toolName="CUDIT-R Cannabis Screen"
            toolUrl="https://mindchecktools.com/cudit-r-cannabis-screening"
            score={totalScore}
            severityLabel={range.level}
            scoreRange={`${range.min}–${range.max}`}
            interpretation={range.description}
            suggestion={range.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["cudit-r-cannabis-screening"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q.text,
              answer: q.options.find((o) => o.value === answers[i])?.label ?? "",
            }))}
          />



          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["cudit-r-cannabis-screening"] && (
            <ReflectionPrompts
              toolName="CUDIT-R Cannabis Screen"
              prompts={REFLECTION_PROMPTS["cudit-r-cannabis-screening"].prompts}
            />
          )}

          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqData.map((faq, i) => (
                <div key={i} className="card overflow-hidden">
                  <button aria-expanded={expandedFaq === i} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full p-4 flex justify-between items-center text-left gap-3">
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 flex-1">{faq.question}</span>
                    <svg className={`w-4 h-4 text-neutral-400 transition-transform flex-shrink-0 ${expandedFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {expandedFaq === i && <div className="px-4 pb-4 animate-fade-in"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </section>


          {/* What Research Is This Based On? */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">What Research Is This Based On?</h2>
            <div className="card p-5 sm:p-6">
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  Adamson SJ et al. (2010). Drug and Alcohol Dependence 110(1–2):137–143.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/20347232/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400">CUDIT-R validation study</a>
                </li>
                <li>
                  PhenX Toolkit protocol 510310.{" "}
                  <a href="https://www.phenxtoolkit.org/protocols/view/510310" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400">CUDIT-R protocol</a>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Full AUDIT (10 Questions)", desc: "Comprehensive WHO alcohol screen", href: "/audit-alcohol-test" },
                { name: "AUDIT-C", desc: "Quick alcohol screen", href: "/audit-c-alcohol-screen" },
                { name: "FTND Nicotine Dependence Test", desc: "Nicotine dependence screen", href: "/nicotine-dependence-test" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>


          <SupportCard />

          <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
            <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
              Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
            </Link>
          </div>

          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
              The CUDIT-R was developed by Adamson and colleagues (2010). The PhenX Toolkit lists the protocol as freely available, with permission not required for use. MindCheck Tools reproduces the published items unchanged, keeps this screening free, and keeps it separate from any paid product.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">This tool is for educational purposes only. Not medical advice, a diagnosis, or a treatment recommendation.</p>
            <ToolReviewerBio lastReviewed="November 26, 2026" />
          </footer>
        </div>
      )}
    </div>
  );
}

function SupportCard() {
  return (
    <section id="cuditr-support" tabIndex={-1} className="card p-5 sm:p-6 mb-5 scroll-mt-20" aria-labelledby="cuditr-support-heading">
      <h2 id="cuditr-support-heading" className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need Support Right Now?</h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">If you are in immediate danger, call emergency services.</p>
      <div className="space-y-2.5">
        {[
          { label: "SAMHSA National Helpline (US)", detail: "Call 1-800-662-4357", href: "tel:+18006624357" },
          { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988", href: "tel:988" },
          { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", href: "sms:741741" },
          { label: "International Resources", detail: "Find a helpline in your country", href: "https://findahelpline.com/" },
        ].map(({ label, detail, href }) => (
          <div key={label} className="px-3.5 pt-3.5 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700">
            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{label}</p>
            <a href={href} rel="noreferrer" className="inline-flex min-h-[44px] items-center text-sm underline">{detail}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
