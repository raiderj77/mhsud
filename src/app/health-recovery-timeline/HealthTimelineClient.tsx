"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

// ── Timeline Data ───────────────────────────────────────────────────────

interface Milestone {
  days: number;
  label: string;
  description: string;
}

const TIMELINES: Record<string, { label: string; milestones: Milestone[] }> = {
  alcohol: {
    label: "Alcohol",
    milestones: [
      { days: 1, label: "24 Hours", description: "Blood sugar begins normalizing. The body starts processing remaining alcohol." },
      { days: 3, label: "3 Days", description: "Acute withdrawal risk is decreasing. The body begins detoxifying." },
      { days: 7, label: "1 Week", description: "Sleep quality begins improving. Hydration levels normalize." },
      { days: 14, label: "2 Weeks", description: "Liver fat begins reducing. Stomach lining starts healing." },
      { days: 21, label: "3 Weeks", description: "Blood pressure starts normalizing. Kidney function improves." },
      { days: 30, label: "1 Month", description: "Skin appearance improves. Liver fat significantly reduced. Mental clarity improving." },
      { days: 90, label: "3 Months", description: "Liver function improving measurably. Immune system strengthening. Mood stabilizing." },
      { days: 183, label: "6 Months", description: "Reduced cancer risk begins. Weight often normalizes. Significant cognitive improvements." },
      { days: 365, label: "1 Year", description: "Liver inflammation substantially reduced. Heart disease risk decreasing. Overall health markedly improved." },
      { days: 1826, label: "3-5 Years", description: "Cancer risk approaches non-drinker levels. Liver may fully recover if no cirrhosis present." },
    ],
  },
  cigarettes: {
    label: "Cigarettes / Nicotine",
    milestones: [
      { days: 0.014, label: "20 Minutes", description: "Heart rate drops back to a normal level." },
      { days: 0.5, label: "12 Hours", description: "Carbon monoxide levels in the blood normalize. Oxygen levels increase." },
      { days: 14, label: "2 Weeks", description: "Circulation begins improving. Lung function starts increasing." },
      { days: 90, label: "1-3 Months", description: "Circulation and lung function measurably improved. Exercise becomes easier." },
      { days: 270, label: "1-9 Months", description: "Coughing and shortness of breath decrease. Cilia regain function in lungs." },
      { days: 365, label: "1 Year", description: "Heart disease risk is halved compared to a current smoker." },
      { days: 1826, label: "5 Years", description: "Stroke risk drops to the level of a non-smoker." },
      { days: 3652, label: "10 Years", description: "Lung cancer death risk is about half that of a current smoker. Risk of other cancers decreases." },
      { days: 5479, label: "15 Years", description: "Heart disease risk equals that of someone who has never smoked." },
    ],
  },
  opioids: {
    label: "Opioids",
    milestones: [
      { days: 3, label: "1-3 Days", description: "Physical withdrawal peaks. This is often the most physically uncomfortable period." },
      { days: 7, label: "1 Week", description: "Acute withdrawal symptoms subsiding. Physical discomfort decreasing." },
      { days: 30, label: "1 Month", description: "Sleep patterns normalizing. Appetite returning. Energy levels improving." },
      { days: 90, label: "3 Months", description: "Brain chemistry rebalancing. Dopamine receptor density beginning to recover." },
      { days: 183, label: "6 Months", description: "Cognitive function improving. Emotional regulation strengthening. Immune system recovering." },
      { days: 365, label: "1 Year", description: "Hormonal balance restoring. Significant neurological recovery. Overall health substantially improved." },
    ],
  },
};

function daysBetween(start: Date, end: Date): number {
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.max(0, (e.getTime() - s.getTime()) / 86400000);
}

function formatCountdown(days: number): string {
  if (days < 1) { const hours = Math.round(days * 24); return hours <= 1 ? "less than 1 hour" : `${hours} hours`; }
  if (days < 7) return `${Math.ceil(days)} day${Math.ceil(days) !== 1 ? "s" : ""}`;
  if (days < 30) return `${Math.round(days / 7)} week${Math.round(days / 7) !== 1 ? "s" : ""}`;
  if (days < 365) return `${Math.round(days / 30.44)} month${Math.round(days / 30.44) !== 1 ? "s" : ""}`;
  return `${(days / 365).toFixed(1)} years`;
}

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function HealthTimelineClient({ faqData }: Props) {
  const [substance, setSubstance] = useState("");
  const [quitDate, setQuitDate] = useState("");
  const [showTimeline, setShowTimeline] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [shareMessage, setShareMessage] = useState("");
  const youAreHereRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split("T")[0];
  const timeline = substance ? TIMELINES[substance] : null;
  const daysSober = quitDate ? daysBetween(new Date(quitDate + "T00:00:00"), new Date()) : 0;

  const canStart = substance && quitDate;

  // Scroll to "You are here" on show
  useEffect(() => {
    if (showTimeline && youAreHereRef.current) {
      setTimeout(() => {
        youAreHereRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  }, [showTimeline]);

  function handleStart() {
    if (!canStart) return;
    setShowTimeline(true);
  }

  function handleReset() {
    setShowTimeline(false);
    setSubstance("");
    setQuitDate("");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => window.print(), []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/health-recovery-timeline";
    if (mode === "blank") {
      if (navigator.share) {
        try { await navigator.share({ title: "Health Recovery Timeline", text: "See what happens to your body after you stop drinking, smoking, or using. Free and private.", url }); return; } catch { /* cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    if (!timeline) return;
    const passed = timeline.milestones.filter((m) => daysSober >= m.days).length;
    const summary = `Health Recovery Timeline (${timeline.label})\n${Math.round(daysSober)} days \u2014 ${passed} of ${timeline.milestones.length} milestones reached\n\nSee yours: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My Recovery Timeline", text: summary }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [daysSober, timeline]);

  // Find the index of the "You are here" position
  const youAreHereIndex = timeline
    ? timeline.milestones.findIndex((m) => daysSober < m.days)
    : -1;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Health Recovery Timeline
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          See what happens to your body after you stop using a substance. Select your substance, enter your quit date, and watch your health milestones light up. Based on published medical research.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~1 Minute" },
            { icon: "\uD83E\uDEBA", text: "Evidence-Based" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>
      </header>

      {/* Medical Disclaimer */}
      <div className="bg-crisis-50 dark:bg-crisis-950/20 border-2 border-crisis-300 dark:border-crisis-800 rounded-2xl p-5 mb-6">
        <div className="flex gap-3 items-start">
          <span className="text-xl">{"\u26A0\uFE0F"}</span>
          <div>
            <p className="text-sm font-semibold text-crisis-700 dark:text-crisis-400 mb-1">Important Medical Warning</p>
            <p className="text-xs text-crisis-600 dark:text-crisis-400 leading-relaxed">
              This timeline shows general health improvements based on medical research. <strong>Individual experiences vary.</strong> Withdrawal from certain substances — especially <strong>alcohol and benzodiazepines</strong> — can be medically dangerous and potentially fatal. <strong>Always consult a healthcare provider before stopping any substance.</strong> If you need help finding treatment, call SAMHSA at <strong>1-800-662-4357</strong> (free, 24/7).
            </p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      {!showTimeline && (
        <div className="animate-fade-in">
          <div className="card p-6 sm:p-8 mb-5 space-y-5">
            <div>
              <label htmlFor="substance" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                What substance did you quit?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {Object.entries(TIMELINES).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setSubstance(key)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium text-center transition-all ${
                      substance === key
                        ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300"
                        : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"
                    }`}
                  >
                    {val.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="quit-date" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                When did you quit?
              </label>
              <input
                id="quit-date"
                type="date"
                max={today}
                value={quitDate}
                onChange={(e) => setQuitDate(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
              />
            </div>
            <button onClick={handleStart} disabled={!canStart} className="btn-primary w-full text-base py-4">
              Show My Timeline
            </button>
          </div>
        </div>
      )}

      {/* Timeline */}
      {showTimeline && timeline && (
        <div className="animate-fade-in">
          {/* Summary */}
          <div className="card overflow-hidden mb-6">
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 dark:from-sage-950/30 dark:to-sage-900/20 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-600 dark:text-sage-400 mb-2">
                {timeline.label} — Recovery Progress
              </p>
              <p className="font-serif text-5xl font-bold text-sage-700 dark:text-sage-400 leading-none mb-1">
                {Math.round(daysSober).toLocaleString()}
              </p>
              <p className="text-sm text-sage-500 dark:text-sage-500">days since you quit</p>
              <p className="text-xs text-sage-500 dark:text-sage-600 mt-2">
                {timeline.milestones.filter((m) => daysSober >= m.days).length} of {timeline.milestones.length} milestones reached
              </p>
            </div>
          </div>

          {/* Visual Timeline */}
          <div id="printable-results" className="mb-6">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-5">Your Recovery Timeline</h3>
            <div className="relative ml-4">
              {/* Vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-sand-200 dark:bg-neutral-700" />

              {timeline.milestones.map((m, i) => {
                const passed = daysSober >= m.days;
                const isYouAreHere = i === youAreHereIndex;

                return (
                  <div key={i}>
                    {/* "You are here" marker — before this milestone */}
                    {isYouAreHere && (
                      <div ref={youAreHereRef} className="relative flex items-center gap-4 py-3 ml-[-4px]">
                        <div className="relative z-10 w-7 h-7 rounded-full bg-warm-500 border-4 border-warm-200 dark:border-warm-800 flex items-center justify-center animate-pulse">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <div className="bg-warm-50 dark:bg-warm-950/30 border border-warm-300 dark:border-warm-800 rounded-xl px-4 py-2">
                          <p className="text-sm font-bold text-warm-700 dark:text-warm-400">
                            You are here — {formatCountdown(m.days - daysSober)} until next milestone
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Milestone */}
                    <div className={`relative flex gap-4 pb-6 ${passed ? "" : "opacity-50"}`}>
                      <div className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        passed
                          ? "bg-sage-500 text-white"
                          : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                      }`}>
                        {passed ? (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-[10px] font-bold">{i + 1}</span>
                        )}
                      </div>
                      <div className={`flex-1 ${passed ? "bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800" : "bg-sand-50 dark:bg-night-700 border border-sand-200 dark:border-neutral-700"} rounded-xl p-4`}>
                        <div className="flex items-center justify-between mb-1">
                          <p className={`text-sm font-bold ${passed ? "text-sage-700 dark:text-sage-400" : "text-neutral-500 dark:text-neutral-400"}`}>
                            {m.label}
                          </p>
                          {passed && (
                            <span className="text-[10px] font-semibold text-sage-600 dark:text-sage-400 bg-sage-100 dark:bg-sage-900/30 px-2 py-0.5 rounded-full">
                              Reached
                            </span>
                          )}
                        </div>
                        <p className={`text-xs leading-relaxed ${passed ? "text-sage-600 dark:text-sage-400" : "text-neutral-500 dark:text-neutral-400"}`}>
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* "You are here" at the end if all milestones passed */}
              {youAreHereIndex === -1 && daysSober > 0 && (
                <div ref={youAreHereRef} className="relative flex items-center gap-4 py-3 ml-[-4px]">
                  <div className="relative z-10 w-7 h-7 rounded-full bg-sage-500 border-4 border-sage-200 dark:border-sage-800 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">{"\u2713"}</span>
                  </div>
                  <div className="bg-sage-50 dark:bg-sage-950/30 border border-sage-300 dark:border-sage-800 rounded-xl px-4 py-2">
                    <p className="text-sm font-bold text-sage-700 dark:text-sage-400">
                      All milestones reached! Your recovery is extraordinary.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>Health Recovery Timeline ({timeline.label}) from mindchecktools.com — {new Date().toLocaleDateString()}</p>
              <p>Based on general medical research. Individual experiences vary. Not medical advice.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-5">
            <button onClick={handleReset} className="btn-primary flex-1 text-base py-4">
              Try Another Substance
            </button>
            <button onClick={handlePrint} className="btn-secondary px-5 py-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>

          {/* Share */}
          <div className="card p-4 mb-8">
            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">Share</p>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => handleShare("results")} className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Copy My Progress
              </button>
              <button onClick={() => handleShare("blank")} className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share This Tool
              </button>
            </div>
            {shareMessage && (
              <p className="text-xs text-sage-600 dark:text-sage-400 font-medium mt-2 animate-fade-in">{"\u2713"} {shareMessage}</p>
            )}
          </div>

          {/* Reflection */}
          {REFLECTION_PROMPTS["health-recovery-timeline"] && (
            <ReflectionPrompts
              prompts={REFLECTION_PROMPTS["health-recovery-timeline"].prompts}
              toolName={REFLECTION_PROMPTS["health-recovery-timeline"].toolName}
            />
          )}

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              Recovery is a journey. Support is available at every stage:
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

          {/* Educational Content */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              How Your Body Recovers
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">The Body&apos;s Remarkable Healing Ability</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The human body has extraordinary capacity to heal from the effects of substance use. Recovery begins within <strong>minutes to hours</strong> of your last use and continues for years. The liver, one of the organs most affected by alcohol, can regenerate damaged tissue. Lungs gradually clear tar and debris after smoking cessation. The brain rewires neural pathways through <strong>neuroplasticity</strong>, restoring cognitive function and emotional regulation. The speed of recovery varies by substance, duration of use, and individual health factors, but the trajectory is consistently toward improvement.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Why Timelines Help</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Knowing <em>what</em> is happening in your body provides motivation during difficult moments. In early recovery, when withdrawal symptoms or cravings are intense, it helps to know that your liver is already reducing fat, your blood pressure is normalizing, or your lungs are clearing. Each milestone represents real, measurable physiological change. Research shows that understanding the health benefits of abstinence increases motivation to maintain recovery. The <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">Sobriety Calculator</Link> can help you track your overall recovery journey alongside this health timeline.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Important Limitations</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  These timelines are based on averages from published medical research and represent general patterns. Your experience may differ based on your age, duration of use, overall health, genetics, and other factors. Some effects of long-term heavy substance use may not be fully reversible. This tool is not a substitute for medical care — if you are in early recovery or considering stopping, <strong>please work with a healthcare provider</strong> who can monitor your health and manage any withdrawal safely.
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

          {/* Related Tools */}
          <section className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Sobriety Calculator", desc: "Track days sober and recovery milestones", href: "/sobriety-calculator" },
                { name: "Money Saved Calculator", desc: "See how much you've saved in recovery", href: "/money-saved-recovery-calculator" },
                { name: "DAST-10 Drug Screening", desc: "10-item validated drug use screening", href: "/dast-10-drug-screening" },
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
              This is an original tool. Health timelines are based on published medical research and represent general patterns. Individual recovery varies.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              This tool is for educational purposes only. It is not medical advice or a treatment recommendation. Always consult a healthcare provider.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
