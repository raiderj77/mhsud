"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

// ── Milestones ──────────────────────────────────────────────────────────

const MILESTONES = [
  { days: 1, label: "24 Hours", icon: "\u2B50", message: "The hardest step is the first one. You did it." },
  { days: 7, label: "1 Week", icon: "\uD83C\uDF1F", message: "One full week. Your body is already beginning to heal." },
  { days: 30, label: "30 Days", icon: "\uD83C\uDFC5", message: "One month strong. New habits are taking root." },
  { days: 60, label: "60 Days", icon: "\uD83D\uDCAA", message: "Two months of choosing yourself. That takes real courage." },
  { days: 90, label: "90 Days", icon: "\uD83C\uDFC6", message: "90 days — a cornerstone of recovery. Be proud of how far you've come." },
  { days: 183, label: "6 Months", icon: "\uD83C\uDF89", message: "Half a year. You are building a life you don't need to escape from." },
  { days: 365, label: "1 Year", icon: "\uD83C\uDF96\uFE0F", message: "One full year. This is a monumental achievement in recovery." },
  { days: 548, label: "18 Months", icon: "\uD83D\uDE80", message: "18 months of resilience, growth, and daily courage." },
  { days: 730, label: "2 Years", icon: "\uD83D\uDC8E", message: "Two years. You've proven that recovery is real and lasting." },
  { days: 1826, label: "5 Years", icon: "\uD83D\uDC51", message: "Five years. You are an inspiration to everyone on this journey." },
  { days: 3652, label: "10 Years", icon: "\uD83C\uDF1E", message: "A decade of freedom. Your recovery story is extraordinary." },
];

function getMotivationalMessage(days: number): string {
  if (days === 0) return "Today is Day 1. The most courageous day of all.";
  if (days <= 7) return "Every hour matters right now. You are stronger than you know.";
  if (days <= 30) return "The early days are the hardest. Keep going — it gets better.";
  if (days <= 90) return "You're building momentum. New patterns are replacing old ones.";
  if (days <= 183) return "Your recovery is becoming your lifestyle. That's powerful.";
  if (days <= 365) return "You're approaching a full year. What an incredible journey.";
  if (days <= 730) return "Your recovery is an example of what's possible.";
  return "Your sustained recovery is a gift — to yourself and to those around you.";
}

function daysBetween(start: Date, end: Date): number {
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.floor((e.getTime() - s.getTime()) / 86400000);
}

function breakdown(start: Date, end: Date) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  if (days < 0) {
    months--;
    const prev = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prev.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

const LS_KEY = "mindcheck_sobriety_date";
const LS_SPEND_KEY = "mindcheck_sobriety_spend";

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function SobrietyClient({ faqData }: Props) {
  const [soberDate, setSoberDate] = useState<string>("");
  const [dailySpend, setDailySpend] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [shareMessage, setShareMessage] = useState("");
  const [now, setNow] = useState<Date>(new Date());

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    const savedSpend = localStorage.getItem(LS_SPEND_KEY);
    if (saved) {
      setSoberDate(saved);
      setShowResults(true);
    }
    if (savedSpend) setDailySpend(savedSpend);
  }, []);

  // Tick every minute to keep counter fresh
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const today = now.toISOString().split("T")[0];
  const startDate = soberDate ? new Date(soberDate + "T00:00:00") : null;
  const totalDays = startDate ? daysBetween(startDate, now) : 0;
  const bd = startDate ? breakdown(startDate, now) : { years: 0, months: 0, days: 0 };
  const spend = parseFloat(dailySpend) || 0;
  const moneySaved = totalDays * spend;

  const earnedMilestones = MILESTONES.filter((m) => totalDays >= m.days);
  const nextMilestone = MILESTONES.find((m) => totalDays < m.days);
  const daysToNext = nextMilestone ? nextMilestone.days - totalDays : null;

  function handleStart() {
    if (!soberDate) return;
    localStorage.setItem(LS_KEY, soberDate);
    if (dailySpend) localStorage.setItem(LS_SPEND_KEY, dailySpend);
    setShowResults(true);
  }

  function handleReset() {
    localStorage.removeItem(LS_KEY);
    localStorage.removeItem(LS_SPEND_KEY);
    setSoberDate("");
    setDailySpend("");
    setShowResults(false);
    setShowResetConfirm(false);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => window.print(), []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/sobriety-calculator";
    if (mode === "blank") {
      if (navigator.share) {
        try { await navigator.share({ title: "Sobriety Calculator \u2014 Free & Private", text: "Track your sobriety with a free, private day counter. See milestones, countdowns, and money saved.", url }); return; } catch { /* cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    const latest = earnedMilestones.length > 0 ? earnedMilestones[earnedMilestones.length - 1].label : "Starting out";
    const summary = `Sobriety Calculator\n${totalDays} days sober \u2014 Latest milestone: ${latest}${moneySaved > 0 ? `\nEstimated savings: $${moneySaved.toLocaleString()}` : ""}\n\nTrack yours: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: `${totalDays} Days Sober`, text: summary }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [totalDays, earnedMilestones, moneySaved]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free</span>
          <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">Private</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Sobriety Calculator
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          Enter your clean date and see how far you&apos;ve come. Track milestones, count your days, and estimate money saved. Your date is stored in your browser only — completely private.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~1 Minute" },
            { icon: "\uD83D\uDCC5", text: "Saves Locally" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Last reviewed: March 2026</p>
      </header>

      {/* Input Form */}
      {!showResults && (
        <div className="animate-fade-in">
          <div className="card p-6 sm:p-8 mb-5">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-5">Enter Your Clean Date</h2>
            <div className="space-y-5">
              <div>
                <label htmlFor="sober-date" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  When did you get sober / clean?
                </label>
                <input
                  id="sober-date"
                  type="date"
                  max={today}
                  value={soberDate}
                  onChange={(e) => setSoberDate(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="daily-spend" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Estimated daily spending on substance (optional)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 text-sm">$</span>
                  <input
                    id="daily-spend"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g., 15"
                    value={dailySpend}
                    onChange={(e) => setDailySpend(e.target.value)}
                    className="w-full p-3 pl-7 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
                  />
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">Used to estimate money saved. Not required.</p>
              </div>
            </div>
            <button
              onClick={handleStart}
              disabled={!soberDate}
              className="btn-primary w-full text-base py-4 mt-6"
            >
              Calculate My Sobriety
            </button>
          </div>

          {/* Disclaimer */}
          <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4 mb-5">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              <strong>Privacy:</strong> Your clean date and spending estimate are stored in your browser&apos;s local storage only. No data is ever sent to any server. You can clear your data at any time using the Reset button.
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && startDate && (
        <div className="animate-fade-in" aria-live="polite">
          {/* Big Counter */}
          <div id="printable-results" className="card overflow-hidden mb-5">
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 dark:from-sage-950/30 dark:to-sage-900/20 p-6 sm:p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-600 dark:text-sage-400 mb-3">You have been sober for</p>
              <p className="font-serif text-7xl sm:text-8xl font-bold text-sage-700 dark:text-sage-400 leading-none mb-2">{totalDays.toLocaleString()}</p>
              <p className="text-lg font-semibold text-sage-600 dark:text-sage-400 mb-1">
                {totalDays === 1 ? "day" : "days"}
              </p>
              {(bd.years > 0 || bd.months > 0) && (
                <p className="text-sm text-sage-500 dark:text-sage-500">
                  {bd.years > 0 && `${bd.years} year${bd.years !== 1 ? "s" : ""}`}
                  {bd.years > 0 && bd.months > 0 && ", "}
                  {bd.months > 0 && `${bd.months} month${bd.months !== 1 ? "s" : ""}`}
                  {(bd.years > 0 || bd.months > 0) && bd.days > 0 && ", "}
                  {bd.days > 0 && `${bd.days} day${bd.days !== 1 ? "s" : ""}`}
                </p>
              )}
              <p className="text-xs text-sage-500 dark:text-sage-600 mt-2">
                Since {startDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed text-center italic">
                &ldquo;{getMotivationalMessage(totalDays)}&rdquo;
              </p>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 pb-4 border-t border-neutral-200 pt-3 mx-6">
              <p className="font-semibold text-sm text-neutral-600 mb-1">Sobriety Certificate</p>
              <p>{totalDays.toLocaleString()} days sober since {startDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
              <p>Generated at mindchecktools.com/sobriety-calculator — {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Money Saved */}
          {spend > 0 && (
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Estimated Money Saved</h3>
              <p className="font-serif text-4xl font-bold text-sage-600 dark:text-sage-400 mb-2">
                ${moneySaved.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Based on ${spend.toFixed(2)}/day &times; {totalDays.toLocaleString()} days
              </p>
              <div className="mt-3 text-xs text-neutral-400 dark:text-neutral-500">
                <Link href="/money-saved-recovery-calculator" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">
                  Get a detailed savings breakdown with projections &rarr;
                </Link>
              </div>
            </div>
          )}

          {/* Next Milestone */}
          {nextMilestone && daysToNext !== null && (
            <div className="card p-5 sm:p-6 mb-5 border-2 border-warm-200 dark:border-warm-800 bg-warm-50/50 dark:bg-warm-950/20">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{nextMilestone.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-warm-700 dark:text-warm-400">
                    Next milestone: {nextMilestone.label}
                  </p>
                  <p className="text-xs text-warm-600 dark:text-warm-500">
                    {daysToNext} day{daysToNext !== 1 ? "s" : ""} to go — you&apos;re {Math.round((totalDays / nextMilestone.days) * 100)}% there
                  </p>
                  <div className="mt-2 h-1.5 bg-warm-200 dark:bg-warm-800 rounded-full overflow-hidden w-48">
                    <div
                      className="h-full bg-gradient-to-r from-warm-400 to-warm-600 rounded-full transition-all duration-700"
                      style={{ width: `${Math.min((totalDays / nextMilestone.days) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Milestones Grid */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Recovery Milestones</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {MILESTONES.map((m) => {
                const earned = totalDays >= m.days;
                return (
                  <div
                    key={m.days}
                    className={`relative p-3 rounded-xl text-center transition-all ${
                      earned
                        ? "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 border-2 border-amber-300 dark:border-amber-700"
                        : "bg-sand-50 dark:bg-night-700 border border-sand-200 dark:border-neutral-700 opacity-40"
                    }`}
                    title={earned ? m.message : `${m.days - totalDays} days to go`}
                  >
                    <span className="text-2xl block mb-1">{m.icon}</span>
                    <p className={`text-xs font-bold ${
                      earned ? "text-amber-700 dark:text-amber-400" : "text-neutral-400 dark:text-neutral-500"
                    }`}>
                      {m.label}
                    </p>
                    {earned && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-sage-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">{"\u2713"}</span>
                    )}
                  </div>
                );
              })}
            </div>
            {earnedMilestones.length > 0 && (
              <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-3">
                {earnedMilestones.length} of {MILESTONES.length} milestones earned
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-5">
            <button onClick={handlePrint} className="btn-primary flex-1 text-base py-4 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Certificate
            </button>
            <button
              onClick={() => setShowResetConfirm(true)}
              className="btn-secondary px-5 py-4 text-crisis-600 dark:text-crisis-400"
            >
              Reset
            </button>
          </div>

          {/* Reset Confirmation */}
          {showResetConfirm && (
            <div className="card p-5 mb-5 border-2 border-crisis-300 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 animate-fade-in">
              <p className="text-sm font-semibold text-crisis-700 dark:text-crisis-400 mb-2">Reset your sobriety date?</p>
              <p className="text-xs text-crisis-600 dark:text-crisis-400 mb-4">
                This will clear your saved clean date and spending estimate from this browser. This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button onClick={handleReset} className="px-4 py-2 rounded-xl bg-crisis-600 text-white text-sm font-semibold hover:bg-crisis-700 transition-colors">
                  Yes, Reset
                </button>
                <button onClick={() => setShowResetConfirm(false)} className="btn-secondary text-sm px-4 py-2">
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Share Buttons */}
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
          {REFLECTION_PROMPTS["sobriety-calculator"] && (
            <>
              <ReflectionPrompts
                prompts={REFLECTION_PROMPTS["sobriety-calculator"].prompts}
                toolName={REFLECTION_PROMPTS["sobriety-calculator"].toolName}
              />
              <ReflectionSummary
                toolName={REFLECTION_PROMPTS["sobriety-calculator"].toolName}
                toolUrl="https://mindchecktools.com/sobriety-calculator"
                score={`${totalDays} days`}
                severityLabel={earnedMilestones.length > 0 ? earnedMilestones[earnedMilestones.length - 1].label : "Starting out"}
                scoreRange={`${totalDays} days sober`}
                interpretation={getMotivationalMessage(totalDays)}
                suggestion="Continue tracking your recovery milestones and celebrate each day of progress."
                reflectionPrompts={REFLECTION_PROMPTS["sobriety-calculator"].prompts}
              />
            </>
          )}

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              Recovery has difficult moments. You don&apos;t have to face them alone:
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
              Why Tracking Sobriety Matters
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Milestones and What They Mean</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Recovery milestones are more than numbers — they represent real changes happening in your body, brain, and life. In the <strong>first 30 days</strong>, your body is actively healing from the physical effects of substance use. Sleep patterns begin normalizing, appetite returns, and energy levels stabilize. By <strong>90 days</strong>, many people report clearer thinking, improved emotional regulation, and stronger relationships. The <strong>one-year mark</strong> is significant because it means you&apos;ve navigated every season, holiday, and anniversary without your substance — proving to yourself that recovery works across all of life&apos;s circumstances.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">The Science of Habit Change</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Research on habit formation shows that <strong>self-monitoring</strong> — tracking your own behavior — is one of the most effective strategies for maintaining change. A 2016 review published in <em>Health Psychology Review</em> found that self-monitoring was the single most effective behavior change technique across multiple health behaviors. Counting days provides concrete, undeniable evidence of progress. On difficult days, seeing &ldquo;287 days&rdquo; is a powerful reminder that you have 287 reasons not to go back.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Relapse Is Part of Recovery</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  If you experience a relapse, it does not erase your progress. The National Institute on Drug Abuse (NIDA) recognizes substance use disorders as <strong>chronic conditions</strong> with relapse rates (40-60%) comparable to type 1 diabetes, hypertension, and asthma. Relapse is a signal to adjust your approach — not a sign of failure. Every period of sobriety strengthens recovery skills and builds resilience. If you need to reset your counter, do so without shame. The <Link href="/cage-aid-substance-abuse-screening" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">CAGE-AID screening</Link> and <Link href="/dast-10-drug-screening" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">DAST-10</Link> can help you reflect on your substance use at any point in your journey.
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
                { name: "Money Saved Calculator", desc: "See how much you've saved in recovery", href: "/money-saved-recovery-calculator" },
                { name: "Health Recovery Timeline", desc: "What happens to your body after you quit", href: "/health-recovery-timeline" },
                { name: "CAGE-AID Substance Screen", desc: "4-question substance use screening", href: "/cage-aid-substance-abuse-screening" },
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
              This is an original tool created by MindCheck Tools. It is not a validated clinical instrument.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              This tool is for educational and motivational purposes only. It is not medical advice or a treatment recommendation.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
