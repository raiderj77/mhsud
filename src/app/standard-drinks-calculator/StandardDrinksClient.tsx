"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

// ── Data ────────────────────────────────────────────────────────────────

// 1 US standard drink = 14g pure alcohol
// Formula: (oz * ABV/100 * 29.5735 * 0.789) / 14
function calcStandardDrinks(oz: number, abv: number): number {
  return (oz * (abv / 100) * 29.5735 * 0.789) / 14;
}

interface Preset {
  name: string;
  category: string;
  oz: number;
  abv: number;
  drinks: number;
}

const PRESETS: Preset[] = [
  { name: "Regular Beer", category: "Beer", oz: 12, abv: 5, drinks: calcStandardDrinks(12, 5) },
  { name: "Light Beer", category: "Beer", oz: 12, abv: 4.2, drinks: calcStandardDrinks(12, 4.2) },
  { name: "Pint of Draft", category: "Beer", oz: 16, abv: 5, drinks: calcStandardDrinks(16, 5) },
  { name: "Craft IPA (pint)", category: "Beer", oz: 16, abv: 7, drinks: calcStandardDrinks(16, 7) },
  { name: "Malt Liquor (16 oz)", category: "Beer", oz: 16, abv: 8, drinks: calcStandardDrinks(16, 8) },
  { name: "Tall Can (24 oz, 5%)", category: "Beer", oz: 24, abv: 5, drinks: calcStandardDrinks(24, 5) },
  { name: "Wine Glass", category: "Wine", oz: 5, abv: 12, drinks: calcStandardDrinks(5, 12) },
  { name: "Large Wine Pour", category: "Wine", oz: 8, abv: 13, drinks: calcStandardDrinks(8, 13) },
  { name: "Champagne Flute", category: "Wine", oz: 6, abv: 12, drinks: calcStandardDrinks(6, 12) },
  { name: "Shot / Spirit (neat)", category: "Spirits", oz: 1.5, abv: 40, drinks: calcStandardDrinks(1.5, 40) },
  { name: "Double Shot", category: "Spirits", oz: 3, abv: 40, drinks: calcStandardDrinks(3, 40) },
  { name: "Martini", category: "Cocktails", oz: 3, abv: 32, drinks: calcStandardDrinks(3, 32) },
  { name: "Margarita", category: "Cocktails", oz: 8, abv: 13, drinks: calcStandardDrinks(8, 13) },
  { name: "Long Island Iced Tea", category: "Cocktails", oz: 10, abv: 22, drinks: calcStandardDrinks(10, 22) },
  { name: "Moscow Mule", category: "Cocktails", oz: 8, abv: 10, drinks: calcStandardDrinks(8, 10) },
  { name: "Hard Seltzer (12 oz)", category: "Other", oz: 12, abv: 5, drinks: calcStandardDrinks(12, 5) },
];

function drinkColor(d: number): string {
  if (d <= 1.05) return "sage";
  if (d <= 1.5) return "warm";
  return "crisis";
}

const COLOR_CLASSES: Record<string, { text: string; bg: string; bar: string }> = {
  sage: { text: "text-sage-700 dark:text-sage-400", bg: "bg-sage-50 dark:bg-sage-950/30", bar: "bg-sage-500" },
  warm: { text: "text-warm-700 dark:text-warm-400", bg: "bg-warm-50 dark:bg-warm-950/30", bar: "bg-warm-500" },
  crisis: { text: "text-crisis-700 dark:text-crisis-400", bg: "bg-crisis-50 dark:bg-crisis-950/30", bar: "bg-crisis-500" },
};

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function StandardDrinksClient({ faqData }: Props) {
  const [volume, setVolume] = useState("");
  const [abv, setAbv] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [shareMessage, setShareMessage] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const rawVol = parseFloat(volume) || 0;
  const rawAbv = parseFloat(abv) || 0;
  const customResult = rawVol > 0 && rawAbv > 0 ? calcStandardDrinks(rawVol, rawAbv) : null;
  const customColor = customResult ? drinkColor(customResult) : "sage";
  const customColors = COLOR_CLASSES[customColor];

  const categories = Array.from(new Set(PRESETS.map((p) => p.category)));
  const filteredPresets = activeCategory ? PRESETS.filter((p) => p.category === activeCategory) : PRESETS;
  const maxDrinks = Math.max(...PRESETS.map((p) => p.drinks));

  const handlePrint = useCallback(() => window.print(), []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/standard-drinks-calculator";
    if (mode === "blank") {
      if (navigator.share) {
        try { await navigator.share({ title: "Standard Drinks Calculator", text: "Find out how many standard drinks are in your beverage. Many common drinks are more than 1 standard drink.", url }); return; } catch { /* cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    const summary = customResult
      ? `Standard Drinks Calculator\n${rawVol} oz at ${rawAbv}% ABV = ${customResult.toFixed(1)} standard drinks\n\n1 US standard drink = 14g pure alcohol\nCalculate yours: ${url}`
      : `Standard Drinks Calculator\nFind out how many standard drinks are in your beverage: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "Standard Drinks", text: summary }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [customResult, rawVol, rawAbv]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Standard Drinks Calculator
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          How many &ldquo;standard drinks&rdquo; are actually in your glass? Many common beverages contain more than one standard drink. Enter your drink&apos;s details or browse the presets below.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "Instant" },
            { icon: "\uD83C\uDF7A", text: "14g = 1 Drink" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>
      </header>

      {/* Reference */}
      <div className="bg-sand-50 dark:bg-night-700 rounded-2xl p-5 mb-6">
        <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">1 US Standard Drink = 14g Pure Alcohol</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Beer", detail: "12 oz at 5%", icon: "\uD83C\uDF7A" },
            { label: "Wine", detail: "5 oz at 12%", icon: "\uD83C\uDF77" },
            { label: "Spirits", detail: "1.5 oz at 40%", icon: "\uD83E\uDD43" },
          ].map((r) => (
            <div key={r.label} className="text-center">
              <span className="text-2xl block mb-1">{r.icon}</span>
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">{r.label}</p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Calculator */}
      <div className="card p-6 sm:p-8 mb-6">
        <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-5">Calculate Your Drink</h2>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label htmlFor="volume" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Volume (oz)
            </label>
            <input
              id="volume"
              type="number"
              min="0.5"
              step="0.5"
              placeholder="e.g., 16"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="abv" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Alcohol % (ABV)
            </label>
            <input
              id="abv"
              type="number"
              min="0.1"
              step="0.1"
              placeholder="e.g., 7"
              value={abv}
              onChange={(e) => setAbv(e.target.value)}
              className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Result */}
        {customResult !== null && (
          <div className={`${customColors.bg} rounded-xl p-5 text-center animate-fade-in`}>
            <p className={`text-xs font-semibold uppercase tracking-widest ${customColors.text} mb-2`}>
              {rawVol} oz at {rawAbv}% ABV
            </p>
            <p className={`font-serif text-5xl font-bold ${customColors.text} leading-none mb-1`}>
              {customResult.toFixed(1)}
            </p>
            <p className={`text-sm font-semibold ${customColors.text}`}>
              standard drink{customResult >= 1.95 || customResult < 0.95 ? "s" : ""}
            </p>
            {customResult > 1.05 && (
              <p className={`text-xs mt-2 ${customColors.text}`}>
                That&apos;s {customResult.toFixed(1)}&times; a standard drink
              </p>
            )}
            {/* Visual bar */}
            <div className="mt-4 max-w-xs mx-auto">
              <div className="h-3 bg-sand-200 dark:bg-night-600 rounded-full overflow-hidden">
                <div
                  className={`h-full ${customColors.bar} rounded-full transition-all duration-500`}
                  style={{ width: `${Math.min((customResult / 4) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-neutral-500 dark:text-neutral-400 mt-1">
                <span>0</span>
                <span>1 std</span>
                <span>2 std</span>
                <span>3 std</span>
                <span>4+</span>
              </div>
            </div>
          </div>
        )}
        {customResult === null && (
          <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-5 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Enter volume and ABV to see standard drink equivalents.
            </p>
          </div>
        )}
      </div>

      <AdSlot position="Mid Tool" className="mb-6" />

      {/* Presets Comparison */}
      <div id="printable-results" className="card p-5 sm:p-6 mb-6">
        <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Common Drinks Compared</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          Many drinks you order contain more than one standard drink. The bar shows how each compares.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-5">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategory === null
                ? "bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400 border border-sage-300 dark:border-sage-700"
                : "bg-sand-50 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 border border-sand-200 dark:border-neutral-700"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(activeCategory === c ? null : c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === c
                  ? "bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400 border border-sage-300 dark:border-sage-700"
                  : "bg-sand-50 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 border border-sand-200 dark:border-neutral-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Preset Bars */}
        <div className="space-y-3">
          {filteredPresets.map((p) => {
            const color = drinkColor(p.drinks);
            const c = COLOR_CLASSES[color];
            const pct = (p.drinks / maxDrinks) * 100;
            const oneDrinkPct = (1 / maxDrinks) * 100;
            return (
              <div key={p.name}>
                <div className="flex justify-between items-baseline mb-1">
                  <div>
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{p.name}</span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-2">{p.oz} oz, {p.abv}%</span>
                  </div>
                  <span className={`text-sm font-bold ${c.text}`}>
                    {p.drinks.toFixed(1)}
                  </span>
                </div>
                <div className="relative h-4 bg-sand-100 dark:bg-night-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${c.bar} rounded-full transition-all duration-500`}
                    style={{ width: `${pct}%` }}
                  />
                  {/* 1 standard drink line */}
                  <div
                    className="absolute top-0 h-full w-0.5 bg-neutral-400 dark:bg-neutral-500"
                    style={{ left: `${oneDrinkPct}%` }}
                    title="1 standard drink"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-sand-200 dark:border-neutral-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-sage-500" />
            <span className="text-xs text-neutral-500 dark:text-neutral-400">&le;1 standard drink</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warm-500" />
            <span className="text-xs text-neutral-500 dark:text-neutral-400">1-1.5 standard drinks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-crisis-500" />
            <span className="text-xs text-neutral-500 dark:text-neutral-400">&gt;1.5 standard drinks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-neutral-400" />
            <span className="text-xs text-neutral-500 dark:text-neutral-400">= 1 std drink line</span>
          </div>
        </div>

        {/* Print-only footer */}
        <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pt-3 border-t border-neutral-200">
          <p>Standard Drinks Calculator — mindchecktools.com — {new Date().toLocaleDateString()}</p>
          <p>1 US standard drink = 14g pure alcohol. For educational purposes only.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-5">
        <button onClick={handlePrint} className="btn-secondary flex-1 text-base py-4 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Chart
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
            Copy My Result
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
      {REFLECTION_PROMPTS["standard-drinks-calculator"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["standard-drinks-calculator"].prompts}
          toolName={REFLECTION_PROMPTS["standard-drinks-calculator"].toolName}
        />
      )}

      {/* Crisis Resources */}
      <div className="card p-5 sm:p-6 mb-5">
        <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need Support Right Now?</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          If you are concerned about your drinking or someone else&apos;s, help is available:
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
          What Is a Standard Drink?
        </h2>
        <div className="card p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Why This Matters</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Most people significantly <strong>underestimate</strong> how much alcohol they consume. A 2019 study in <em>Alcoholism: Clinical and Experimental Research</em> found that drinkers poured an average of <strong>42% more</strong> than a standard drink when asked to pour a &ldquo;typical drink.&rdquo; This gap between perceived and actual consumption has real consequences: it affects how accurately people respond to screening tools like the <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">AUDIT</Link>, how well they can estimate their <Link href="/bac-calculator" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">blood alcohol content</Link>, and whether they stay within recommended drinking guidelines.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">NIAAA Drinking Guidelines</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              The National Institute on Alcohol Abuse and Alcoholism defines <strong>moderate drinking</strong> as up to 1 standard drink per day for women and up to 2 for men. <strong>Binge drinking</strong> is defined as reaching a BAC of 0.08% — typically 4+ drinks for women or 5+ for men within about 2 hours. <strong>Heavy drinking</strong> is more than 3 drinks on any day (or 7/week) for women, or more than 4 on any day (or 14/week) for men. These guidelines are based on <em>standard drinks</em> — so a night of &ldquo;3 craft IPAs&rdquo; is actually closer to 5.7 standard drinks, which exceeds binge drinking thresholds for both men and women.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">The Trend Toward Stronger Drinks</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Alcohol content in beer, wine, and cocktails has been trending upward. The average ABV of craft beer has risen from about 5% to over 6% in the past decade, with many popular styles (IPAs, stouts, sours) routinely exceeding 7%. Wine has similarly crept from an average of 11-12% to 13-14%. Restaurant cocktails are often served in larger portions with higher alcohol content than home pours. Understanding these trends makes standard drink awareness more important than ever for making informed choices about consumption.
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
            { name: "BAC Calculator", desc: "Estimate your blood alcohol content", href: "/bac-calculator" },
            { name: "AUDIT Alcohol Screen", desc: "10-item WHO alcohol screening tool", href: "/audit-alcohol-test" },
            { name: "AUDIT-C Quick Screen", desc: "3-question brief alcohol screen", href: "/audit-c-alcohol-screen" },
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
          This is an original tool. Standard drink definition based on NIAAA guidelines (14g pure alcohol).
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          This tool is for educational purposes only. It is not medical advice or a treatment recommendation.
        </p>
      </footer>
    </div>
  );
}
