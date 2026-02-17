"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";

const QUESTIONS = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it's hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid as if something awful might happen",
];

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

const RANGES = [
  { min: 0, max: 4, level: "Minimal", key: "minimal", description: "Your responses suggest minimal levels of anxiety symptoms over the past two weeks.", suggestion: "Continue maintaining your well-being. If you notice changes in how you feel, consider checking in again." },
  { min: 5, max: 9, level: "Mild", key: "mild", description: "Your responses suggest mild levels of anxiety symptoms over the past two weeks.", suggestion: "Consider monitoring your anxiety over the coming weeks. If symptoms persist or worsen, speaking with a healthcare provider can be helpful." },
  { min: 10, max: 14, level: "Moderate", key: "moderate", description: "Your responses suggest moderate levels of anxiety symptoms over the past two weeks.", suggestion: "Consider reaching out to a healthcare provider to discuss how you've been feeling. Many effective approaches are available for managing anxiety." },
  { min: 15, max: 21, level: "Severe", key: "severe", description: "Your responses suggest severe levels of anxiety symptoms over the past two weeks.", suggestion: "Speaking with a healthcare professional is strongly encouraged. Anxiety at this level can be very treatable, and you don't have to manage it alone." },
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

interface Props {
  faqData: { question: string; answer: string }[];
}

export function GAD7Client({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(7).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const totalScore = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const allAnswered = answers.every((a) => a !== null);
  const range = getRange(totalScore);
  const colors = RANGE_COLORS[range.key];
  const progress = (answers.filter((a) => a !== null).length / 7) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 6) {
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
    setAnswers(Array(7).fill(null));
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
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free to Use</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          GAD-7 Anxiety Self-Check
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          A validated screening questionnaire that helps you reflect on anxiety symptoms over the past two weeks. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[{ icon: "🔒", text: "100% Private" }, { icon: "⏱", text: "~2 Minutes" }, { icon: "📋", text: "7 Questions" }].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">{b.icon} {b.text}</span>
          ))}
        </div>
      </header>

      {!accepted && (
        <DisclaimerGate
          toolName="GAD-7"
          toolDescription="This self-check uses the Generalized Anxiety Disorder-7 (GAD-7), a validated screening instrument developed by Drs. Spitzer, Kroenke, Williams, and Löwe. It is free to use without licensing fees."
          onAccept={() => setAccepted(true)}
        />
      )}

      {accepted && !showResults && (
        <div className="animate-fade-in">
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">{answers.filter((a) => a !== null).length} of 7 answered</span>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">Over the last <strong>2 weeks</strong></span>
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
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">{q}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleAnswer(qi, opt.value)}
                            className={`p-2.5 rounded-xl border-2 text-center transition-all text-sm leading-tight ${answers[qi] === opt.value ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold" : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"}`}
                          >
                            {opt.label}
                            <span className="block text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">({opt.value})</span>
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
          <div className="card overflow-hidden mb-5">
            <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
              <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your GAD-7 Score</p>
              <p className={`font-serif text-6xl font-bold ${colors.text} leading-none mb-2`}>{totalScore}</p>
              <p className={`text-sm font-semibold ${colors.text}`}>out of 21 — {range.level} anxiety level</p>
              <div className="mt-6">
                <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700`} style={{ width: `${(totalScore / 21) * 100}%` }} />
                </div>
                <div className="flex justify-between text-[11px] text-neutral-400 dark:text-neutral-500 mt-1.5">
                  <span>0 — Minimal</span><span>21 — Severe</span>
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
                  <strong>Important reminder:</strong> This score reflects your self-reported symptoms, not a clinical diagnosis. Only a healthcare professional can properly interpret these results. This tool is for personal reflection and education only.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Your Responses</h3>
            <div className="divide-y divide-sand-100 dark:divide-neutral-700">
              {QUESTIONS.map((q, i) => (
                <div key={i} className="flex justify-between items-start gap-3 py-2.5">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{i + 1}. {q}</span>
                  <span className={`text-sm font-semibold whitespace-nowrap ${answers[i]! >= 2 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"}`}>
                    {OPTIONS[answers[i]!]?.label} ({answers[i]})
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card overflow-hidden mb-5">
            <button onClick={() => setShowScoring(!showScoring)} className="w-full p-5 flex justify-between items-center text-left">
              <span className="font-serif text-base font-semibold text-neutral-800 dark:text-neutral-100">How this score is calculated</span>
              <svg className={`w-5 h-5 text-neutral-400 transition-transform ${showScoring ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showScoring && (
              <div className="px-5 pb-5 space-y-3 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">The GAD-7 adds your responses (0–3) across 7 items for a total between 0 and 21. Research-based ranges:</p>
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
                <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed pt-2">These ranges come from published research guidelines and should not be treated as diagnostic thresholds.</p>
              </div>
            )}
          </div>

          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">If anxiety is affecting your daily life, support is available:</p>
            <div className="space-y-2.5">
              {[
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 — available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
                { label: "SAMHSA Helpline (US)", detail: "1-800-662-4357 — free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
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

          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "PHQ-9 Depression Self-Check", desc: "9-question validated depression screener", href: "/phq-9-depression-test" },
                { name: "AUDIT Alcohol Use Screen", desc: "10-item WHO alcohol screening tool", href: "/audit-alcohol-test" },
                { name: "AUDIT-C Quick Screen", desc: "3-question brief alcohol screen", href: "/audit-c-alcohol-screen" },
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
              The GAD-7 was developed by Drs. Robert L. Spitzer, Kurt Kroenke, Janet B.W. Williams, and Bernd Löwe. It is free to use for clinical and research purposes without licensing fees.
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
