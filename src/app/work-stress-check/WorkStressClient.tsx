"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";

const QUESTIONS = [
  { text: "I feel overwhelmed by the amount of work I need to do.", domain: "Demands" },
  { text: "I regularly work beyond my scheduled hours or bring work home.", domain: "Demands" },
  { text: "I feel I have little control over how my work is done or prioritized.", domain: "Control" },
  { text: "My opinions and input at work feel unheard or ignored.", domain: "Control" },
  { text: "I feel unsupported by my manager or leadership.", domain: "Support" },
  { text: "I lack meaningful connection with my coworkers.", domain: "Support" },
  { text: "I dread going to work most days.", domain: "Engagement" },
  { text: "I feel emotionally drained by the end of my workday.", domain: "Engagement" },
  { text: "I have difficulty \"switching off\" from work during my personal time.", domain: "Recovery" },
  { text: "My sleep is disrupted by work-related thoughts or worries.", domain: "Recovery" },
  { text: "Work stress is affecting my physical health (headaches, tension, stomach issues, fatigue).", domain: "Impact" },
  { text: "Work stress is affecting my relationships or personal life.", domain: "Impact" },
];

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Sometimes", value: 1 },
  { label: "Often", value: 2 },
  { label: "Nearly always", value: 3 },
];

const RANGES = [
  { min: 0, max: 9, level: "Lower Stress", key: "low", description: "Your responses suggest relatively lower levels of work-related stress in the areas covered by this check.", suggestion: "Continue maintaining healthy boundaries and recovery habits. If specific areas stood out, they may still be worth reflecting on." },
  { min: 10, max: 18, level: "Moderate Stress", key: "moderate", description: "Your responses suggest moderate work stress across several areas. Some of these patterns — especially if persistent — may be worth paying attention to.", suggestion: "Consider which domains scored highest. Talking with a trusted colleague, manager, or counselor about specific stressors may help. Small changes in boundaries or routines can sometimes make a meaningful difference." },
  { min: 19, max: 27, level: "High Stress", key: "high", description: "Your responses suggest high levels of work-related stress. Multiple areas of your work life appear to be significantly impacted.", suggestion: "Speaking with a healthcare provider, therapist, or employee assistance program (EAP) is strongly encouraged. Work stress at this level often benefits from professional support and may also warrant conversations about workload or working conditions." },
  { min: 28, max: 36, level: "Very High Stress", key: "very-high", description: "Your responses suggest very high levels of work stress affecting most areas covered by this check. This pattern is often associated with burnout risk.", suggestion: "Please consider reaching out to a mental health professional. If your workplace has an EAP, they can provide confidential support. If work stress is also affecting your physical health, a medical checkup is a good idea." },
];

function getRange(score: number) {
  return RANGES.find((r) => score >= r.min && score <= r.max)!;
}

const RANGE_COLORS: Record<string, { text: string; bg: string; bar: string }> = {
  low:         { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600" },
  moderate:    { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30",     bar: "from-warm-400 to-warm-600" },
  high:        { text: "text-orange-700 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30", bar: "from-orange-400 to-orange-600" },
  "very-high": { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "from-crisis-400 to-crisis-600" },
};

const DOMAINS = ["Demands", "Control", "Support", "Engagement", "Recovery", "Impact"];

interface Props {
  faqData: { question: string; answer: string }[];
}

export function WorkStressClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(12).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const totalScore = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const allAnswered = answers.every((a) => a !== null);
  const range = getRange(totalScore);
  const colors = RANGE_COLORS[range.key];
  const progress = (answers.filter((a) => a !== null).length / 12) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  // Domain scores
  const domainScores = DOMAINS.map((domain) => {
    const indices = QUESTIONS.map((q, i) => q.domain === domain ? i : -1).filter((i) => i >= 0);
    const domainTotal = indices.reduce((s, i) => s + (answers[i] ?? 0), 0);
    const domainMax = indices.length * 3;
    return { domain, score: domainTotal, max: domainMax, pct: Math.round((domainTotal / domainMax) * 100) };
  });

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 11) setTimeout(() => { questionRefs.current[qi + 1]?.scrollIntoView({ behavior: "smooth", block: "center" }); }, 200);
  }

  function handleSubmit() {
    setShowResults(true);
    setTimeout(() => { document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, 100);
  }

  function handleReset() {
    setAnswers(Array(12).fill(null));
    setShowResults(false);
    setExpandedFaq(null);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">Original Tool</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Not Clinical</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">Work Stress &amp; Burnout Reflection</h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          12 original questions to help you reflect on work demands, control, support, engagement, recovery, and impact. For personal reflection only — not a clinical assessment.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[{ icon: "🔒", text: "100% Private" }, { icon: "⏱", text: "~3 Minutes" }, { icon: "📋", text: "12 Questions" }].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">{b.icon} {b.text}</span>
          ))}
        </div>
      </header>

      {!accepted && (
        <DisclaimerGate
          toolName="Work Stress Self-Check"
          toolDescription="This is an original self-reflection tool created by MindCheck Tools. It is NOT based on any validated clinical scale. It is designed for personal reflection only and cannot diagnose burnout, depression, or any other condition."
          onAccept={() => setAccepted(true)}
        />
      )}

      {accepted && !showResults && (
        <div className="animate-fade-in">
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">{answers.filter((a) => a !== null).length} of 12 answered</span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">Over the last <strong>2 weeks</strong></span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="space-y-3">
            {QUESTIONS.map((q, qi) => {
              const isReachable = qi <= furthestAnswered + 1;
              const prevDomain = qi > 0 ? QUESTIONS[qi - 1].domain : null;
              const showDomainLabel = q.domain !== prevDomain;
              return (
                <div key={qi}>
                  {showDomainLabel && (
                    <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mt-4 mb-2">{q.domain}</div>
                  )}
                  <div ref={(el) => { questionRefs.current[qi] = el; }} className={`card p-5 transition-all duration-300 ${isReachable ? "opacity-100" : "opacity-30 pointer-events-none"} ${answers[qi] !== null ? "border-sage-200 dark:border-sage-800" : ""}`}>
                    <div className="flex gap-3 items-start">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${answers[qi] !== null ? "bg-sage-500 text-white" : "bg-sand-100 dark:bg-night-700 text-neutral-400"}`}>
                        {answers[qi] !== null ? "✓" : qi + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">{q.text}</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {OPTIONS.map((opt) => (
                            <button key={opt.value} onClick={() => handleAnswer(qi, opt.value)} className={`p-2.5 rounded-xl border-2 text-center transition-all text-sm leading-tight ${answers[qi] === opt.value ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold" : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"}`}>
                              {opt.label}
                            </button>
                          ))}
                        </div>
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
          <div className="card overflow-hidden mb-5">
            <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
              <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your Work Stress Score</p>
              <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
              <p className={`text-sm font-semibold ${colors.text}`}>out of 36 — {range.level}</p>
              <div className="mt-6">
                <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 36) * 100}%` }} />
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">{range.description}</p>
              <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"><strong>What you can consider next:</strong> {range.suggestion}</p>
              </div>
            </div>
          </div>

          {/* Domain breakdown */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Breakdown by Area</h3>
            <div className="space-y-3">
              {domainScores.map((d) => (
                <div key={d.domain}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{d.domain}</span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500">{d.score}/{d.max}</span>
                  </div>
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${d.pct >= 67 ? "bg-gradient-to-r from-crisis-400 to-crisis-600" : d.pct >= 34 ? "bg-gradient-to-r from-warm-400 to-warm-600" : "bg-gradient-to-r from-sage-400 to-sage-600"}`} style={{ width: `${d.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4 mb-5">
            <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
              <strong>Important:</strong> This is a self-reflection tool, not a clinical assessment. It uses original questions and cannot diagnose burnout, depression, or any condition. For persistent work-related distress, please talk to a healthcare professional.
            </p>
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
                { name: "PHQ-9 Depression Self-Check", desc: "Work stress and depression often overlap", href: "/phq-9-depression-test" },
                { name: "GAD-7 Anxiety Self-Check", desc: "Anxiety is a common companion to work stress", href: "/gad-7-anxiety-test" },
                { name: "Sleep & Mood Reflection", desc: "How work stress affects your sleep", href: "/sleep-and-mood-check" },
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
            <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">This is an original tool created by MindCheck Tools. It is not based on any proprietary or copyrighted scale.</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">For personal reflection only. Not medical advice, a diagnosis, or a treatment recommendation.</p>
          </footer>
        </div>
      )}
    </div>
  );
}
