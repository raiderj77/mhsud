"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

interface Domain {
  name: string;
  icon: string;
  tasks: string[];
}

const DOMAINS: Domain[] = [
  { name: "Meals & Groceries", icon: "🍳", tasks: ["Planning what to eat", "Making grocery lists", "Noticing when supplies are low", "Cooking or arranging meals"] },
  { name: "Household Upkeep", icon: "🏠", tasks: ["Noticing when cleaning is needed", "Tracking repairs and maintenance", "Organizing shared spaces", "Managing supplies (toiletries, cleaning products)"] },
  { name: "Finances & Admin", icon: "💰", tasks: ["Tracking bills and due dates", "Managing budgets and savings", "Filing paperwork (insurance, taxes)", "Researching purchases and services"] },
  { name: "Scheduling & Logistics", icon: "📅", tasks: ["Coordinating calendars", "Planning appointments (medical, dental, etc.)", "Arranging transportation", "Remembering important dates"] },
  { name: "Childcare / Dependent Care", icon: "👶", tasks: ["Tracking school/daycare needs", "Planning activities and social events", "Monitoring health and development", "Managing clothing and supplies"] },
  { name: "Emotional & Social", icon: "💛", tasks: ["Maintaining family/friend relationships", "Remembering to check on people", "Planning gifts and celebrations", "Noticing when someone is struggling"] },
];

const RESPONSIBILITY_OPTIONS = [
  { label: "Mostly me", value: 2 },
  { label: "Shared equally", value: 1 },
  { label: "Mostly someone else", value: 0 },
  { label: "N/A", value: -1 },
];

interface Props {
  faqData: { question: string; answer: string }[];
}

export function MentalLoadClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [shareMessage, setShareMessage] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);

  const allTasks = DOMAINS.flatMap((d) => d.tasks.map((t) => `${d.name}::${t}`));
  const answered = allTasks.filter((k) => answers[k] !== null && answers[k] !== undefined);
  const allAnswered = answered.length === allTasks.length;
  const progress = (answered.length / allTasks.length) * 100;

  // Calculate results
  const validAnswers = Object.entries(answers).filter(([, v]) => v !== null && v !== -1);
  const totalPossible = validAnswers.length * 2;
  const totalScore = validAnswers.reduce((s, [, v]) => s + (v ?? 0), 0);
  const loadPct = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;

  const domainResults = DOMAINS.map((d) => {
    const domainAnswers = d.tasks.map((t) => answers[`${d.name}::${t}`]).filter((v) => v !== null && v !== undefined && v !== -1) as number[];
    const domainMax = domainAnswers.length * 2;
    const domainScore = domainAnswers.reduce((s, v) => s + v, 0);
    const pct = domainMax > 0 ? Math.round((domainScore / domainMax) * 100) : -1;
    const mostlyMe = domainAnswers.filter((v) => v === 2).length;
    const shared = domainAnswers.filter((v) => v === 1).length;
    const mostlyOther = domainAnswers.filter((v) => v === 0).length;
    return { ...d, pct, mostlyMe, shared, mostlyOther, total: domainAnswers.length };
  });

  function handleAnswer(key: string, value: number) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    setShowResults(true);
    setTimeout(() => { document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }, 100);
  }

  function handleReset() {
    setAnswers({});
    setShowResults(false);
    setExpandedFaq(null);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const loadLevel = loadPct >= 75 ? "high" : loadPct >= 50 ? "moderate" : "balanced";
  const loadLabels: Record<string, { label: string; text: string; bg: string; bar: string }> = {
    balanced: { label: "More Balanced", text: "text-sage-700 dark:text-sage-400", bg: "bg-sage-50 dark:bg-sage-950/30", bar: "from-sage-400 to-sage-600" },
    moderate: { label: "Moderate Load", text: "text-warm-700 dark:text-warm-400", bg: "bg-warm-50 dark:bg-warm-950/30", bar: "from-warm-400 to-warm-600" },
    high: { label: "Heavy Load", text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "from-crisis-400 to-crisis-600" },
  };
  const lc = loadLabels[loadLevel];

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/mental-load-calculator";
    if (mode === "blank") {
      const shareData = {
        title: "Mental Load Calculator — Free & Private",
        text: "Take a free, private Mental Load Calculator. Your answers never leave your browser.",
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
    const summary = `Mental Load Calculator Results\nLoad: ${loadPct}% — ${lc.label}\n\nThis is a reflection tool, not a diagnosis. Take the self-check: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My Mental Load Calculator Results", text: summary }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [loadPct, lc.label]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">Original Tool</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Conversation Starter</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">Mental Load Calculator</h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          Who remembers, plans, and organizes in your household? This checklist helps you see how the invisible work of running a home is distributed — and start a conversation about it.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[{ icon: "🔒", text: "100% Private" }, { icon: "⏱", text: "~3 Minutes" }, { icon: "📋", text: "24 Items" }].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">{b.icon} {b.text}</span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last updated: March 2026</p>
      </header>

      {!accepted && (
        <DisclaimerGate
          toolName="Mental Load Calculator"
          toolDescription="This is an original reflection tool created by MindCheck Tools. It is designed to support conversations about household task distribution. It is NOT a clinical assessment and cannot diagnose any condition."
          onAccept={() => setAccepted(true)}
        />
      )}

      {accepted && !showResults && (
        <div className="animate-fade-in">
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">{answered.length} of {allTasks.length} answered</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Who usually handles this?</span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {DOMAINS.map((domain) => (
            <div key={domain.name} className="mb-6">
              <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 mb-3 flex items-center gap-2">
                <span>{domain.icon}</span> {domain.name}
              </h3>
              <div className="space-y-2">
                {domain.tasks.map((task) => {
                  const key = `${domain.name}::${task}`;
                  return (
                    <div key={key} className={`card p-4 transition-all ${answers[key] !== null && answers[key] !== undefined ? "border-sage-200 dark:border-sage-800" : ""}`}>
                      <p className="text-[14px] text-neutral-700 dark:text-neutral-200 mb-2.5">{task}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                        {RESPONSIBILITY_OPTIONS.map((opt) => (
                          <button key={opt.label} onClick={() => handleAnswer(key, opt.value)} className={`p-2 rounded-lg border text-center transition-all text-xs leading-tight ${answers[key] === opt.value ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold" : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 hover:border-sage-300 dark:hover:border-sage-700"}`}>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex gap-3 mt-6">
            <button onClick={handleSubmit} disabled={!allAnswered} className="btn-primary flex-1 text-base py-4">View My Results</button>
            <button onClick={handleReset} className="btn-secondary px-5">Reset</button>
          </div>
        </div>
      )}

      {showResults && (
        <div ref={resultsRef} className="animate-fade-in" aria-live="polite">
          <div className="card overflow-hidden mb-5">
            <div className={`${lc.bg} p-6 sm:p-8 text-center`}>
              <p className={`text-xs font-semibold uppercase tracking-widest ${lc.text} mb-2`}>Your Mental Load</p>
              <p className={`font-serif text-6xl font-bold ${lc.text} leading-none mb-2`}>{loadPct}%</p>
              <p className={`text-sm font-semibold ${lc.text}`}>of applicable tasks — {lc.label}</p>
              <p className={`text-xs ${lc.text} mt-2 opacity-80`}>&quot;Mostly me&quot; responsibility reported</p>
              <div className="mt-6">
                <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${lc.bar} rounded-full transition-all duration-700`} style={{ width: `${loadPct}%` }} />
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              {loadPct >= 75 && <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">You reported carrying most of the planning, remembering, and organizing across many areas of your household. This level of cognitive labor — even when tasks themselves are &quot;small&quot; — can contribute to stress and burnout over time.</p>}
              {loadPct >= 50 && loadPct < 75 && <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">You reported carrying a moderate share of the household&apos;s mental load. Some areas appear more balanced than others, which may be worth exploring together with your household members.</p>}
              {loadPct < 50 && <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">Your responses suggest a relatively balanced distribution of household cognitive labor, or that many tasks are shared. This is worth celebrating — and maintaining.</p>}
              <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"><strong>This is a conversation starter,</strong> not a verdict. The most valuable thing you can do with these results is share them with the people you live with and talk about what you notice.</p>
              </div>
            </div>
          </div>

          {/* Domain breakdown */}
          <div className="card p-5 sm:p-6 mb-5">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Breakdown by Area</h2>
            <div className="space-y-4">
              {domainResults.filter((d) => d.total > 0).map((d) => (
                <div key={d.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{d.icon} {d.name}</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {d.mostlyMe} mostly me · {d.shared} shared · {d.mostlyOther} mostly other
                    </span>
                  </div>
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${d.pct >= 75 ? "bg-gradient-to-r from-crisis-400 to-crisis-600" : d.pct >= 50 ? "bg-gradient-to-r from-warm-400 to-warm-600" : "bg-gradient-to-r from-sage-400 to-sage-600"}`} style={{ width: `${d.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4 mb-5">
            <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
              <strong>Remember:</strong> This reflects your perception. Your household members may see things differently — and that&apos;s okay. The point is to start talking about it, not to prove who does more.
            </p>
          </div>

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
                ✓ {shareMessage}
              </p>
            )}
          </div>

          {/* Download Reflection Summary */}
          <ReflectionSummary
            toolName="Mental Load Calculator"
            toolUrl="https://mindchecktools.com/mental-load-calculator"
            score={`${loadPct}%`}
            severityLabel={lc.label}
            scoreRange={loadPct >= 75 ? "75–100%" : loadPct >= 50 ? "50–74%" : "0–49%"}
            interpretation={
              loadPct >= 75
                ? "You reported carrying most of the planning, remembering, and organizing across many areas of your household. This level of cognitive labor can contribute to stress and burnout over time."
                : loadPct >= 50
                  ? "You reported carrying a moderate share of the household's mental load. Some areas appear more balanced than others."
                  : "Your responses suggest a relatively balanced distribution of household cognitive labor, or that many tasks are shared."
            }
            suggestion="The most valuable thing you can do with these results is share them with the people you live with and talk about what you notice."
            reflectionPrompts={REFLECTION_PROMPTS["mental-load-calculator"]?.prompts ?? []}
          />

          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["mental-load-calculator"] && (
            <ReflectionPrompts
              toolName="Mental Load Calculator"
              prompts={REFLECTION_PROMPTS["mental-load-calculator"].prompts}
            />
          )}

          <AdSlot position="Below Results" className="mb-8" />

          <section className="card p-5 sm:p-6 mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Understanding Mental Load</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed space-y-3">
              <p>
                Mental load — sometimes called &quot;cognitive labor&quot; or &quot;invisible labor&quot; — refers to the ongoing
                work of managing, planning, and organizing household life. It goes beyond completing tasks: it includes
                remembering appointments, noticing when supplies run low, tracking school deadlines, coordinating
                schedules, and anticipating what needs to happen next. Research by sociologist Allison Daminger (2019)
                identifies four stages of cognitive labor: anticipating needs, identifying options, deciding among them,
                and monitoring the results.
              </p>
              <p>
                Studies consistently show that mental load falls disproportionately on one partner in a household —
                most often women, even in dual-income families. A 2019 study published in the <em>American Sociological
                Review</em> found that mothers are more likely to perform the anticipation and monitoring stages of
                household management, while fathers are more often involved only when directly asked. This imbalance
                can persist even when physical tasks are shared equally.
              </p>
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mt-4 mb-2">How Mental Load Affects Well-Being</h3>
              <p>
                Carrying a disproportionate mental load is associated with higher rates of stress, anxiety, and
                burnout. Research published in <em>Sex Roles</em> (2021) found a significant link between unequal
                cognitive labor and reduced relationship satisfaction. The person carrying more mental load often
                reports feeling overwhelmed, underappreciated, and emotionally exhausted — symptoms that overlap
                with clinical burnout.
              </p>
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mt-4 mb-2">Strategies for Rebalancing</h3>
              <p>
                Addressing mental load starts with making the invisible visible. This tool helps by breaking down
                household cognitive labor into concrete domains. From there, evidence-based strategies include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Full ownership transfer</strong> — assign entire domains (not individual tasks) so both partners carry the planning and follow-through</li>
                <li><strong>Regular check-ins</strong> — schedule brief weekly conversations to review what each person is carrying</li>
                <li><strong>Externalize systems</strong> — shared calendars, grocery lists, and task apps reduce the need for one person to remember everything</li>
                <li><strong>Let go of gatekeeping</strong> — allow your partner to manage tasks their way, even if the approach differs from yours</li>
              </ul>
              <p>
                If mental load is contributing to persistent stress, low mood, or relationship conflict, consider
                speaking with a therapist who specializes in couples or family dynamics.
              </p>
            </div>
          </section>

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

          <section className="mb-8">
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Burnout Assessment Tool", desc: "Work stress compounds household load", href: "/burnout-assessment-tool" },
                { name: "PHQ-9 Depression Check", desc: "Persistent overload can affect mood", href: "/phq-9-depression-test" },
                { name: "Sleep & Mood Reflection", desc: "See how load affects your rest", href: "/sleep-and-mood-check" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot position="Footer" className="mb-8" />

          <div className="card p-5 sm:p-6 mb-5">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">If mental load is affecting your well-being, help is available:</p>
            <div className="space-y-2.5">
              {[
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 — available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
                { label: "SAMHSA Helpline (US)", detail: "1-800-662-4357 — free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
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

          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">Original tool by MindCheck Tools. For reflection and conversation only.</p>
            <ToolReviewerBio />
          </footer>
        </div>
      )}
    </div>
  );
}
