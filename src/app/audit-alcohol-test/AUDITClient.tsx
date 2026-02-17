"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";

interface Question {
  text: string;
  options: { label: string; value: number }[];
}

const QUESTIONS: Question[] = [
  {
    text: "How often do you have a drink containing alcohol?",
    options: [
      { label: "Never", value: 0 },
      { label: "Monthly or less", value: 1 },
      { label: "2–4 times a month", value: 2 },
      { label: "2–3 times a week", value: 3 },
      { label: "4+ times a week", value: 4 },
    ],
  },
  {
    text: "How many drinks containing alcohol do you have on a typical day when you are drinking?",
    options: [
      { label: "1 or 2", value: 0 },
      { label: "3 or 4", value: 1 },
      { label: "5 or 6", value: 2 },
      { label: "7 to 9", value: 3 },
      { label: "10 or more", value: 4 },
    ],
  },
  {
    text: "How often do you have six or more drinks on one occasion?",
    options: [
      { label: "Never", value: 0 },
      { label: "Less than monthly", value: 1 },
      { label: "Monthly", value: 2 },
      { label: "Weekly", value: 3 },
      { label: "Daily or almost daily", value: 4 },
    ],
  },
  {
    text: "How often during the last year have you found that you were not able to stop drinking once you had started?",
    options: [
      { label: "Never", value: 0 },
      { label: "Less than monthly", value: 1 },
      { label: "Monthly", value: 2 },
      { label: "Weekly", value: 3 },
      { label: "Daily or almost daily", value: 4 },
    ],
  },
  {
    text: "How often during the last year have you failed to do what was normally expected of you because of drinking?",
    options: [
      { label: "Never", value: 0 },
      { label: "Less than monthly", value: 1 },
      { label: "Monthly", value: 2 },
      { label: "Weekly", value: 3 },
      { label: "Daily or almost daily", value: 4 },
    ],
  },
  {
    text: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
    options: [
      { label: "Never", value: 0 },
      { label: "Less than monthly", value: 1 },
      { label: "Monthly", value: 2 },
      { label: "Weekly", value: 3 },
      { label: "Daily or almost daily", value: 4 },
    ],
  },
  {
    text: "How often during the last year have you had a feeling of guilt or remorse after drinking?",
    options: [
      { label: "Never", value: 0 },
      { label: "Less than monthly", value: 1 },
      { label: "Monthly", value: 2 },
      { label: "Weekly", value: 3 },
      { label: "Daily or almost daily", value: 4 },
    ],
  },
  {
    text: "How often during the last year have you been unable to remember what happened the night before because of your drinking?",
    options: [
      { label: "Never", value: 0 },
      { label: "Less than monthly", value: 1 },
      { label: "Monthly", value: 2 },
      { label: "Weekly", value: 3 },
      { label: "Daily or almost daily", value: 4 },
    ],
  },
  {
    text: "Have you or someone else been injured because of your drinking?",
    options: [
      { label: "No", value: 0 },
      { label: "Yes, but not in the last year", value: 2 },
      { label: "Yes, during the last year", value: 4 },
    ],
  },
  {
    text: "Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?",
    options: [
      { label: "No", value: 0 },
      { label: "Yes, but not in the last year", value: 2 },
      { label: "Yes, during the last year", value: 4 },
    ],
  },
];

const RANGES = [
  { min: 0, max: 7, level: "Zone I — Lower Risk", key: "low", description: "Your responses fall in the lower-risk zone. In research, scores in this range are generally associated with lower risk from alcohol use.", suggestion: "Continue being mindful of your drinking habits. If your patterns change, consider checking in again." },
  { min: 8, max: 15, level: "Zone II — Hazardous Use", key: "hazardous", description: "Your responses suggest a level of alcohol use that research associates with increased risk of harm. This does not mean you have a disorder, but it may be worth reflecting on.", suggestion: "Consider talking with a healthcare provider about your drinking patterns. Simple changes can reduce risk, and a professional can help you understand your options." },
  { min: 16, max: 19, level: "Zone III — Harmful Use", key: "harmful", description: "Your responses suggest a level of alcohol use that research associates with likely harm to your health or well-being.", suggestion: "Speaking with a healthcare professional is strongly encouraged. They can provide a proper assessment and discuss options that fit your situation." },
  { min: 20, max: 40, level: "Zone IV — Possible Dependence", key: "dependence", description: "Your responses fall in a range that research associates with possible alcohol dependence. A comprehensive professional assessment is recommended.", suggestion: "Please consider speaking with a healthcare professional as soon as possible. If you drink heavily and want to cut down or stop, do not do so suddenly without medical guidance — withdrawal can be medically serious." },
];

function getRange(score: number) {
  return RANGES.find((r) => score >= r.min && score <= r.max)!;
}

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  low:        { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600" },
  hazardous:  { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30",     bar: "from-warm-400 to-warm-600" },
  harmful:    { text: "text-orange-700 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30", bar: "from-orange-400 to-orange-600" },
  dependence: { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "from-crisis-400 to-crisis-600" },
};

interface Props {
  faqData: { question: string; answer: string }[];
}

export function AUDITClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(10).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const totalScore = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const allAnswered = answers.every((a) => a !== null);
  const range = getRange(totalScore);
  const colors = RANGE_COLORS[range.key];
  const progress = (answers.filter((a) => a !== null).length / 10) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);
  const highRisk = totalScore >= 20;

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
      if (resultsRef.current) resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }

  function handleReset() {
    setAnswers(Array(10).fill(null));
    setShowResults(false);
    setShowScoring(false);
    setExpandedFaq(null);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">WHO</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Public Domain</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          AUDIT Alcohol Use Screen
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          A World Health Organization screening tool that helps you reflect on your relationship with alcohol. Non-judgmental, private, and educational.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[{ icon: "🔒", text: "100% Private" }, { icon: "⏱", text: "~3 Minutes" }, { icon: "📋", text: "10 Questions" }].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">{b.icon} {b.text}</span>
          ))}
        </div>
      </header>

      {!accepted && (
        <DisclaimerGate
          toolName="AUDIT"
          toolDescription="This self-check uses the Alcohol Use Disorders Identification Test (AUDIT), a 10-item screening tool developed by the World Health Organization. It is in the public domain and can be used freely."
          onAccept={() => setAccepted(true)}
        />
      )}

      {accepted && !showResults && (
        <div className="animate-fade-in">
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">{answers.filter((a) => a !== null).length} of 10 answered</span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">Take your time — be honest with yourself</span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="space-y-3">
            {QUESTIONS.map((q, qi) => {
              const isReachable = qi <= furthestAnswered + 1;
              return (
                <div
                  key={qi}
                  ref={(el) => { questionRefs.current[qi] = el; }}
                  className={`card p-5 transition-all duration-300 ${isReachable ? "opacity-100" : "opacity-30 pointer-events-none"} ${answers[qi] !== null ? "border-sage-200 dark:border-sage-800" : ""}`}
                >
                  <div className="flex gap-3 items-start">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${answers[qi] !== null ? "bg-sage-500 text-white" : "bg-sand-100 dark:bg-night-700 text-neutral-400"}`}>
                      {answers[qi] !== null ? "✓" : qi + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">{q.text}</p>
                      <div className={`grid gap-2 ${q.options.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-3"}`}>
                        {q.options.map((opt) => (
                          <button
                            key={opt.label}
                            onClick={() => handleAnswer(qi, opt.value)}
                            className={`p-2.5 rounded-xl border-2 text-center transition-all text-sm leading-tight ${answers[qi] === opt.value ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold" : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"}`}
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

          <div className="flex gap-3 mt-6">
            <button onClick={handleSubmit} disabled={!allAnswered} className="btn-primary flex-1 text-base py-4">View My Results</button>
            <button onClick={handleReset} className="btn-secondary px-5">Reset</button>
          </div>
        </div>
      )}

      {showResults && (
        <div ref={resultsRef} className="animate-fade-in">
          {/* Withdrawal Warning for high scores */}
          {highRisk && (
            <div className="bg-crisis-50 dark:bg-crisis-950/30 border-2 border-crisis-300 dark:border-crisis-800 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex gap-3 items-start">
                <span className="text-xl">⚠️</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-crisis-800 dark:text-crisis-300 mb-2">Important safety information</h3>
                  <p className="text-sm text-crisis-700 dark:text-crisis-400 leading-relaxed mb-2">
                    If you drink heavily and are considering reducing or stopping, <strong>please talk to a healthcare professional first.</strong> Alcohol withdrawal can be medically dangerous and may require supervised care.
                  </p>
                  <p className="text-sm text-crisis-700 dark:text-crisis-400 leading-relaxed">
                    Do not attempt to stop suddenly without medical guidance if you have been drinking heavily or frequently.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="card overflow-hidden mb-5">
            <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
              <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your AUDIT Score</p>
              <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
              <p className={`text-sm font-semibold ${colors.text}`}>out of 40 — {range.level}</p>
              <div className="mt-6">
                <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 40) * 100}%` }} />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-400 dark:text-neutral-500 mt-1.5">
                  <span>0 — Lower Risk</span><span>40 — Higher Risk</span>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">{range.description}</p>
              <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"><strong>What you can consider next:</strong> {range.suggestion}</p>
              </div>
              <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                  <strong>Important reminder:</strong> This score is not a diagnosis. It reflects your self-reported responses to a screening tool. Only a healthcare professional can properly assess alcohol-related concerns. This tool is for reflection and education only.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Responses</h3>
            <div className="divide-y divide-sand-100 dark:divide-neutral-700">
              {QUESTIONS.map((q, i) => {
                const selected = q.options.find((o) => o.value === answers[i]);
                return (
                  <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{i + 1}. {q.text}</span>
                    <span className={`text-sm font-semibold whitespace-nowrap ${(answers[i] ?? 0) >= 2 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"}`}>
                      {selected?.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card overflow-hidden mb-5">
            <button onClick={() => setShowScoring(!showScoring)} className="w-full p-5 flex justify-between items-center text-left">
              <span className="font-serif text-base font-semibold text-neutral-800 dark:text-neutral-100">How this score is calculated</span>
              <svg className={`w-5 h-5 text-neutral-400 transition-transform ${showScoring ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showScoring && (
              <div className="px-5 pb-5 space-y-3 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">The AUDIT adds your responses (0–4) across 10 items for a total between 0 and 40. WHO-established risk zones:</p>
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

          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">If you&apos;re concerned about your drinking, help is available:</p>
            <div className="space-y-2.5">
              {[
                { label: "SAMHSA National Helpline (US)", detail: "1-800-662-4357 — free, confidential, 24/7 referrals", color: "text-sage-600 dark:text-sage-400" },
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 — available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "International Resources", detail: "Visit findahelpline.com for your country", color: "text-sage-600 dark:text-sage-400" },
              ].map((r) => (
                <div key={r.label} className="p-3.5 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700">
                  <p className={`text-sm font-semibold ${r.color}`}>{r.label}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-8">
            <button onClick={handleReset} className="btn-primary flex-1 text-base py-4">Start Over</button>
          </div>

          <AdSlot position="Below Results" className="mb-8" />

          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqData.map((faq, i) => (
                <div key={i} className="card overflow-hidden">
                  <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full p-4 flex justify-between items-center text-left gap-3">
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 flex-1">{faq.question}</span>
                    <svg className={`w-4 h-4 text-neutral-400 transition-transform flex-shrink-0 ${expandedFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {expandedFaq === i && <div className="px-4 pb-4 animate-fade-in"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>}
                </div>
              ))}
            </div>
          </section>

          <AdSlot position="Mid Content" className="mb-8" />

          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "AUDIT-C Quick Screen", desc: "3-question brief alcohol screen", href: "/audit-c-alcohol-screen" },
                { name: "PHQ-9 Depression Self-Check", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
                { name: "GAD-7 Anxiety Self-Check", desc: "7-question validated anxiety screener", href: "/gad-7-anxiety-test" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot position="Footer" className="mb-8" />

          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed mb-2">
              The AUDIT was developed by the World Health Organization. It is in the public domain and can be reproduced and used freely.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">This tool is for educational purposes only. It is not medical advice, a diagnosis, or a treatment recommendation.</p>
          </footer>
        </div>
      )}
    </div>
  );
}
