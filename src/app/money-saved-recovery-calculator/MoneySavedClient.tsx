"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";
import EmailCapture from "@/components/EmailCapture";


// ── Data ────────────────────────────────────────────────────────────────

const SUBSTANCES = [
  { key: "alcohol", label: "Alcohol", avgMonthly: 225, range: "$150-300/month" },
  { key: "cigarettes", label: "Cigarettes / Nicotine", avgMonthly: 300, range: "$200-400/month" },
  { key: "cannabis", label: "Cannabis", avgMonthly: 200, range: "$100-300/month" },
  { key: "cocaine", label: "Cocaine", avgMonthly: 1000, range: "$500-1,500/month" },
  { key: "opioids", label: "Opioids", avgMonthly: 600, range: "$200-1,000/month" },
  { key: "meth", label: "Methamphetamine", avgMonthly: 450, range: "$200-700/month" },
  { key: "other", label: "Other", avgMonthly: 300, range: "Varies" },
];

const PERIOD_OPTIONS = [
  { key: "day", label: "Per Day", multiplier: 1 },
  { key: "week", label: "Per Week", multiplier: 1 / 7 },
  { key: "month", label: "Per Month", multiplier: 1 / 30.44 },
];

function daysBetween(start: Date, end: Date): number {
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.max(0, Math.floor((e.getTime() - s.getTime()) / 86400000));
}

function usd(n: number): string {
  return "$" + n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function getComparisons(amount: number): { emoji: string; text: string }[] {
  const list: { emoji: string; text: string }[] = [];
  if (amount >= 15) list.push({ emoji: "\u2615", text: `${Math.floor(amount / 5)} cups of coffee` });
  if (amount >= 50) list.push({ emoji: "\uD83D\uDCF1", text: `${(amount / 1200).toFixed(1)} new smartphones` });
  if (amount >= 200) list.push({ emoji: "\u2708\uFE0F", text: `${(amount / 500).toFixed(1)} weekend getaways` });
  if (amount >= 500) list.push({ emoji: "\uD83C\uDFE0", text: `${(amount / 1500).toFixed(1)} months of rent` });
  if (amount >= 2000) list.push({ emoji: "\uD83C\uDF0E", text: `${(amount / 3000).toFixed(1)} international vacations` });
  if (amount >= 5000) list.push({ emoji: "\uD83D\uDE97", text: `${(amount / 5000).toFixed(1)} used cars` });
  if (amount >= 20000) list.push({ emoji: "\uD83C\uDF93", text: `${(amount / 10000).toFixed(1)} years of community college` });
  return list.slice(0, 4);
}

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function MoneySavedClient({ faqData }: Props) {
  const [substance, setSubstance] = useState("alcohol");
  const [amount, setAmount] = useState("");
  const [period, setPeriod] = useState("month");
  const [inputMode, setInputMode] = useState<"date" | "days">("date");
  const [soberDate, setSoberDate] = useState("");
  const [manualDays, setManualDays] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [shareMessage, setShareMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const sub = SUBSTANCES.find((s) => s.key === substance)!;
  const periodObj = PERIOD_OPTIONS.find((p) => p.key === period)!;

  // Use preset if user hasn't entered a custom amount
  const effectiveAmount = amount ? parseFloat(amount) : sub.avgMonthly;
  const effectivePeriodObj = amount ? periodObj : PERIOD_OPTIONS.find((p) => p.key === "month")!;
  const dailyCost = effectiveAmount * effectivePeriodObj.multiplier;

  const totalDays = inputMode === "date" && soberDate
    ? daysBetween(new Date(soberDate + "T00:00:00"), new Date())
    : parseInt(manualDays) || 0;

  const totalSaved = totalDays * dailyCost;
  const comparisons = getComparisons(totalSaved);

  const projections = [
    { label: "1 Year", days: 365 },
    { label: "5 Years", days: 1826 },
    { label: "10 Years", days: 3652 },
  ];

  const canCalculate = totalDays > 0 && dailyCost > 0;

  function handleCalculate() {
    if (!canCalculate) return;
    setShowResults(true);
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }

  function handleReset() {
    setShowResults(false);
    setAmount("");
    setSoberDate("");
    setManualDays("");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => window.print(), []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/money-saved-recovery-calculator";
    if (mode === "blank") {
      if (navigator.share) {
        try { await navigator.share({ title: "Money Saved in Recovery Calculator", text: "Calculate how much money you've saved by not drinking or using. Free and private.", url }); return; } catch { /* cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    const summary = `Money Saved in Recovery\n${totalDays} days \u00d7 ${usd(dailyCost)}/day = ${usd(totalSaved)} saved\n\nCalculate yours: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: `${usd(totalSaved)} Saved in Recovery`, text: summary }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [totalDays, dailyCost, totalSaved]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Money Saved in Recovery
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          See the financial impact of your recovery. Enter your substance, what you used to spend, and how long you&apos;ve been sober. All calculations happen in your browser — nothing is stored or sent anywhere.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~2 Minutes" },
            { icon: "\uD83D\uDCB0", text: "Instant Results" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>
      </header>

      {/* Input Form */}
      {!showResults && (
        <div className="animate-fade-in">
          <div className="card p-6 sm:p-8 mb-5 space-y-6">
            {/* Substance */}
            <div>
              <label htmlFor="substance" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                What substance did you use?
              </label>
              <select
                id="substance"
                value={substance}
                onChange={(e) => { setSubstance(e.target.value); setAmount(""); }}
                className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
              >
                {SUBSTANCES.map((s) => (
                  <option key={s.key} value={s.key}>{s.label}</option>
                ))}
              </select>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Average spending: {sub.range}</p>
            </div>

            {/* Spending */}
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                How much did you spend? (optional — defaults to average)
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm">$</span>
                  <input
                    id="amount"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder={`${sub.avgMonthly} (average)`}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-3 pl-7 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
                  />
                </div>
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
                >
                  {PERIOD_OPTIONS.map((p) => (
                    <option key={p.key} value={p.key}>{p.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Input Mode Toggle */}
            <div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">How long have you been sober?</p>
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => setInputMode("date")}
                  className={`flex-1 p-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                    inputMode === "date"
                      ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300"
                      : "border-sand-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  Enter a date
                </button>
                <button
                  onClick={() => setInputMode("days")}
                  className={`flex-1 p-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                    inputMode === "days"
                      ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300"
                      : "border-sand-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  Enter number of days
                </button>
              </div>
              {inputMode === "date" ? (
                <input
                  type="date"
                  max={today}
                  value={soberDate}
                  onChange={(e) => setSoberDate(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
                />
              ) : (
                <input
                  type="number"
                  min="1"
                  placeholder="e.g., 90"
                  value={manualDays}
                  onChange={(e) => setManualDays(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
                />
              )}
            </div>

            <button onClick={handleCalculate} disabled={!canCalculate} className="btn-primary w-full text-base py-4">
              Calculate My Savings
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div className="animate-fade-in" aria-live="polite">
          {/* Big Savings Card */}
          <div id="printable-results" className="card overflow-hidden mb-5">
            <div className="bg-gradient-to-br from-sage-50 to-sage-100 dark:from-sage-950/30 dark:to-sage-900/20 p-6 sm:p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-600 dark:text-sage-400 mb-3">You have saved approximately</p>
              <p className="font-serif text-6xl sm:text-7xl font-bold text-sage-700 dark:text-sage-400 leading-none mb-2">
                {usd(totalSaved)}
              </p>
              <p className="text-sm text-sage-500 dark:text-sage-500">
                {totalDays.toLocaleString()} days &times; {usd(Math.round(dailyCost))}/day ({sub.label})
              </p>
            </div>

            {/* Rate Breakdown */}
            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Daily", value: usd(dailyCost) },
                  { label: "Weekly", value: usd(dailyCost * 7) },
                  { label: "Monthly", value: usd(dailyCost * 30.44) },
                  { label: "Yearly", value: usd(dailyCost * 365) },
                ].map((r) => (
                  <div key={r.label} className="bg-sand-50 dark:bg-night-700 rounded-xl p-3 text-center">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{r.label}</p>
                    <p className="text-sm font-bold text-neutral-800 dark:text-neutral-100">{r.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 pb-4 border-t border-neutral-200 pt-3 mx-6">
              <p>Money Saved in Recovery — mindchecktools.com — {new Date().toLocaleDateString()}</p>
              <p>Estimates are approximate and for motivational purposes only.</p>
            </div>
          </div>

          {/* Fun Comparisons */}
          {comparisons.length > 0 && (
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">That&apos;s equivalent to...</h3>
              <div className="grid grid-cols-2 gap-3">
                {comparisons.map((c) => (
                  <div key={c.text} className="bg-sand-50 dark:bg-night-700 rounded-xl p-4 text-center">
                    <span className="text-2xl block mb-1">{c.emoji}</span>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projections */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Future Savings Projections</h3>
            <div className="space-y-3">
              {projections.map((p) => {
                const projected = p.days * dailyCost;
                const maxProjected = projections[projections.length - 1].days * dailyCost;
                const pct = maxProjected > 0 ? (projected / maxProjected) * 100 : 0;
                return (
                  <div key={p.label}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{p.label}</span>
                      <span className="text-sm font-bold text-sage-600 dark:text-sage-400">{usd(projected)}</span>
                    </div>
                    <div className="h-3 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
              Based on current spending rate of {usd(Math.round(dailyCost))}/day. Does not account for inflation or changing prices.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-5">
            <button onClick={handleReset} className="btn-primary flex-1 text-base py-4">
              Calculate Again
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
                Copy My Savings
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
          {REFLECTION_PROMPTS["money-saved-recovery-calculator"] && (
            <>
              <ReflectionPrompts
                prompts={REFLECTION_PROMPTS["money-saved-recovery-calculator"].prompts}
                toolName={REFLECTION_PROMPTS["money-saved-recovery-calculator"].toolName}
              />
              <ReflectionSummary
                toolName={REFLECTION_PROMPTS["money-saved-recovery-calculator"].toolName}
                toolUrl="https://mindchecktools.com/money-saved-recovery-calculator"
                score={usd(totalSaved)}
                severityLabel={`${totalDays} days sober`}
                scoreRange={`${usd(Math.round(dailyCost))}/day savings`}
                interpretation={`In ${totalDays} days of recovery, you have saved approximately ${usd(totalSaved)} that would have been spent on ${sub.label}.`}
                suggestion="Consider putting your savings toward an emergency fund, paying down debt, or investing in your future."
                reflectionPrompts={REFLECTION_PROMPTS["money-saved-recovery-calculator"].prompts}
              />

          {/* Email Capture */}
          <EmailCapture
            headline="Get a private copy of your results"
            subtext="We\u2019ll email you your score and what it means \u2014 your responses are never stored."
            buttonText="Send Private Copy"
            source="mindchecktools-results"
            leadMagnet="screening-score-copy"
            variant="inline"
          />

            </>
          )}

          {/* Disclaimer */}
          <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4 mb-5">
            <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
              <strong>Note:</strong> These are approximate estimates based on the spending amount entered. Actual costs of substance use are often higher than direct purchase costs when healthcare, legal, and productivity impacts are included. This calculator is for motivational and educational purposes only.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need Support Right Now?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              Recovery is about more than money. If you need support:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "SAMHSA National Helpline (US)", detail: "1-800-662-4357 \u2014 free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 \u2014 available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
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
              The Financial Impact of Substance Use
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Beyond the Purchase Price</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  The direct cost of purchasing a substance is just the tip of the iceberg. The true financial toll includes <strong>healthcare costs</strong> (emergency visits, medications, chronic condition management), <strong>legal expenses</strong> (DUI fines, legal representation, court costs), <strong>lost income</strong> (missed work days, reduced productivity, lost career opportunities), and <strong>indirect costs</strong> (higher insurance premiums, relationship breakdowns, property damage). The National Institute on Drug Abuse estimates that substance use disorders cost the United States over <strong>$600 billion annually</strong> across healthcare, criminal justice, and lost workplace productivity.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Financial Recovery</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Financial recovery is a real and meaningful part of overall recovery. Many people in early recovery have accumulated significant debt, damaged their credit, or lost assets. The money saved by not purchasing substances is the first step, but the benefits compound over time: improved work performance leads to raises and promotions, better health reduces medical costs, and clearer thinking leads to better financial decisions. Consider using your savings to build an <strong>emergency fund</strong> (a critical stability factor that reduces relapse risk), pay down debt, or invest in your future. The <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">Sobriety Calculator</Link> can help you track your overall recovery milestones alongside these financial gains.
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
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Mental Health Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Sobriety Calculator", desc: "Track days sober and recovery milestones", href: "/sobriety-calculator" },
                { name: "Health Recovery Timeline", desc: "What happens to your body after you quit", href: "/health-recovery-timeline" },
                { name: "AUDIT Alcohol Screen", desc: "10-item WHO alcohol screening tool", href: "/audit-alcohol-test" },
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
              This is an original tool created by MindCheck Tools. Spending estimates are approximate and for motivational purposes.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              This tool is for educational purposes only. It is not financial or medical advice.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
