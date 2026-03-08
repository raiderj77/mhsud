"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

// ── Data ────────────────────────────────────────────────────────────────

const DRINK_TYPES = [
  { key: "beer", label: "Beer (12 oz, 5%)", standardDrinks: 1 },
  { key: "strong-beer", label: "Strong Beer (12 oz, 7%)", standardDrinks: 1.4 },
  { key: "wine", label: "Wine (5 oz, 12%)", standardDrinks: 1 },
  { key: "large-wine", label: "Large Wine (8 oz, 12%)", standardDrinks: 1.6 },
  { key: "spirits", label: "Shot/Spirit (1.5 oz, 40%)", standardDrinks: 1 },
  { key: "cocktail", label: "Cocktail (avg 2 shots)", standardDrinks: 2 },
  { key: "custom", label: "Standard drinks (manual)", standardDrinks: 1 },
];

const BAC_EFFECTS = [
  { min: 0, max: 0.019, level: "Sober / Minimal", color: "sage", effects: "Little to no effect. Most people feel normal at this level." },
  { min: 0.02, max: 0.039, level: "Slight Mood Elevation", color: "sage", effects: "Mild relaxation, slight mood elevation. Subtle warming sensation. Minimal measurable impairment." },
  { min: 0.04, max: 0.059, level: "Lowered Inhibitions", color: "warm", effects: "Feeling of well-being, lower inhibitions, mild euphoria. Slight impairment of reasoning and memory. Minor decrease in caution." },
  { min: 0.06, max: 0.079, level: "Buzzed", color: "warm", effects: "Reduced coordination, impaired judgment. Processing information more slowly. Mild euphoria or sedation. Some loss of fine motor control." },
  { min: 0.08, max: 0.099, level: "Legally Impaired", color: "crisis", effects: "Clear impairment of balance, speech, vision, reaction time, and judgment. This is the legal limit for driving in all 50 U.S. states. You are too impaired to drive safely." },
  { min: 0.10, max: 0.129, level: "Significant Impairment", color: "crisis", effects: "Significant impairment of motor coordination and judgment. Slurred speech, poor balance, blurred vision. Reaction time severely slowed." },
  { min: 0.13, max: 0.159, level: "Major Impairment", color: "crisis", effects: "Major impairment of all physical and mental functions. Blurred vision, loss of balance, severely impaired judgment. Onset of dysphoria (anxiety, unease). Vomiting may occur." },
  { min: 0.16, max: 0.199, level: "Nausea / Dysphoria", color: "crisis", effects: "Nausea common. Dysphoric (feeling ill rather than euphoric). Appearance of intoxication obvious to everyone. Dangerous impairment. Risk of blackout." },
  { min: 0.20, max: 0.249, level: "Severe Impairment", color: "crisis", effects: "Confusion, disorientation. Need help to stand or walk. Vomiting likely. Blackout risk is high. Emotional volatility. Risk of choking on vomit." },
  { min: 0.25, max: 0.349, level: "Alcohol Poisoning Risk", color: "crisis", effects: "Severe impairment of all functions. Risk of alcohol poisoning. Loss of consciousness possible. Choking hazard from vomiting. Seek medical attention." },
  { min: 0.35, max: 999, level: "Medical Emergency", color: "crisis", effects: "BAC at this level is life-threatening. Risk of coma and death from respiratory depression. Call 911 immediately if someone reaches this level." },
];

function getEffects(bac: number) {
  return BAC_EFFECTS.find((e) => bac >= e.min && bac <= e.max) || BAC_EFFECTS[0];
}

// Widmark formula
// BAC = (alcohol_grams * 100) / (body_weight_grams * body_water) - (0.015 * hours)
const ALCOHOL_PER_DRINK_G = 14; // 14g per US standard drink
const METABOLISM_RATE = 0.015; // BAC eliminated per hour
const BODY_WATER = { male: 0.68, female: 0.55 };

function calculateBAC(sex: "male" | "female", weightLbs: number, drinks: number, hours: number): number {
  const weightGrams = weightLbs * 453.592;
  const r = BODY_WATER[sex];
  const alcoholGrams = drinks * ALCOHOL_PER_DRINK_G;
  const bac = ((alcoholGrams * 100) / (weightGrams * r)) - (METABOLISM_RATE * hours);
  return Math.max(0, bac);
}

function hoursUntilSober(bac: number): number {
  return bac > 0 ? bac / METABOLISM_RATE : 0;
}

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function BACClient({ faqData }: Props) {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState<"lbs" | "kg">("lbs");
  const [drinkType, setDrinkType] = useState("beer");
  const [drinkCount, setDrinkCount] = useState("");
  const [hours, setHours] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [shareMessage, setShareMessage] = useState("");

  const selectedDrink = DRINK_TYPES.find((d) => d.key === drinkType)!;
  const rawCount = parseFloat(drinkCount) || 0;
  const standardDrinks = drinkType === "custom" ? rawCount : rawCount * selectedDrink.standardDrinks;
  const rawWeight = parseFloat(weight) || 0;
  const weightLbs = weightUnit === "kg" ? rawWeight * 2.20462 : rawWeight;
  const rawHours = parseFloat(hours) || 0;

  const bac = calculateBAC(sex, weightLbs, standardDrinks, rawHours);
  const effects = getEffects(bac);
  const soberHours = hoursUntilSober(bac);
  const isLegal = bac < 0.08;
  const canCalculate = rawWeight > 0 && rawCount > 0;

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
    setWeight("");
    setDrinkCount("");
    setHours("");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => window.print(), []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/bac-calculator";
    if (mode === "blank") {
      if (navigator.share) {
        try { await navigator.share({ title: "BAC Calculator \u2014 Free & Private", text: "Estimate your blood alcohol content. See BAC level, effects, and time until sober.", url }); return; } catch { /* cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    const summary = `BAC Calculator\nEstimated BAC: ${bac.toFixed(3)}% \u2014 ${effects.level}\nEst. time until sober: ${soberHours.toFixed(1)} hours\n\nThis is an ESTIMATE only. Never drive after drinking.\nCalculate yours: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "BAC Estimate", text: summary }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [bac, effects.level, soberHours]);

  // Gauge position (capped at 0.40 for display)
  const gaugePercent = Math.min((bac / 0.40) * 100, 100);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Free</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          BAC Calculator
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          Estimate your blood alcohol content using the Widmark formula. Enter your details below to see your estimated BAC, its effects, and how long until it returns to zero. All calculations happen in your browser.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "~1 Minute" },
            { icon: "\uD83E\uddEE", text: "Widmark Formula" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
      </header>

      {/* Safety Warning — Always Visible */}
      <div className="bg-crisis-50 dark:bg-crisis-950/20 border-2 border-crisis-300 dark:border-crisis-800 rounded-2xl p-5 mb-6">
        <div className="flex gap-3 items-start">
          <span className="text-xl">{"\u26A0\uFE0F"}</span>
          <div>
            <p className="text-sm font-semibold text-crisis-700 dark:text-crisis-400 mb-1">Important Safety Information</p>
            <p className="text-xs text-crisis-600 dark:text-crisis-400 leading-relaxed">
              This is an <strong>ESTIMATE only</strong>. Actual BAC varies based on food intake, medications, metabolism, hydration, and other factors. <strong>Never drive after drinking.</strong> No calculator can determine if you are safe to drive. If someone shows signs of alcohol poisoning (unconscious, slow breathing, seizures), <strong>call 911 immediately</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      {!showResults && (
        <div className="animate-fade-in">
          <div className="card p-6 sm:p-8 mb-5 space-y-5">
            {/* Sex */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Biological sex
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(["male", "female"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSex(s)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium text-center transition-all capitalize ${
                      sex === s
                        ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300"
                        : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                Affects body water ratio used in the Widmark formula.
              </p>
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Body weight
              </label>
              <div className="flex gap-2">
                <input
                  id="weight"
                  type="number"
                  min="50"
                  step="1"
                  placeholder={weightUnit === "lbs" ? "e.g., 160" : "e.g., 73"}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="flex-1 p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
                />
                <div className="flex rounded-xl border-2 border-sand-200 dark:border-neutral-700 overflow-hidden">
                  {(["lbs", "kg"] as const).map((u) => (
                    <button
                      key={u}
                      onClick={() => setWeightUnit(u)}
                      className={`px-4 py-3 text-sm font-medium transition-all ${
                        weightUnit === u
                          ? "bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300"
                          : "bg-sand-50 dark:bg-night-700 text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Drink Type */}
            <div>
              <label htmlFor="drink-type" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Type of drink
              </label>
              <select
                id="drink-type"
                value={drinkType}
                onChange={(e) => setDrinkType(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
              >
                {DRINK_TYPES.map((d) => (
                  <option key={d.key} value={d.key}>{d.label}</option>
                ))}
              </select>
              {drinkType !== "custom" && (
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                  Each {selectedDrink.label.split(" (")[0].toLowerCase()} = {selectedDrink.standardDrinks} standard drink{selectedDrink.standardDrinks !== 1 ? "s" : ""}
                </p>
              )}
            </div>

            {/* Number of Drinks */}
            <div>
              <label htmlFor="drink-count" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {drinkType === "custom" ? "Number of standard drinks" : `How many ${selectedDrink.label.split(" (")[0].toLowerCase()}s?`}
              </label>
              <input
                id="drink-count"
                type="number"
                min="0.5"
                step="0.5"
                placeholder="e.g., 3"
                value={drinkCount}
                onChange={(e) => setDrinkCount(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
              />
              {drinkType !== "custom" && rawCount > 0 && (
                <p className="text-xs text-sage-600 dark:text-sage-400 mt-1 font-medium">
                  = {standardDrinks.toFixed(1)} standard drinks
                </p>
              )}
            </div>

            {/* Time */}
            <div>
              <label htmlFor="hours" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Time period over which you drank (hours)
              </label>
              <input
                id="hours"
                type="number"
                min="0"
                step="0.5"
                placeholder="e.g., 2"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-800 dark:text-neutral-100 focus:border-sage-400 dark:focus:border-sage-600 focus:outline-none transition-colors"
              />
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                Enter 0 if you just finished drinking.
              </p>
            </div>

            <button onClick={handleCalculate} disabled={!canCalculate} className="btn-primary w-full text-base py-4">
              Estimate My BAC
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div className="animate-fade-in" aria-live="polite">
          {/* BAC Score Card */}
          <div id="printable-results">
            <div className="card overflow-hidden mb-5">
              <div className={`p-6 sm:p-8 text-center ${
                bac >= 0.08
                  ? "bg-crisis-50 dark:bg-crisis-950/20"
                  : bac >= 0.04
                    ? "bg-warm-50 dark:bg-warm-950/20"
                    : "bg-sage-50 dark:bg-sage-950/30"
              }`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
                  bac >= 0.08 ? "text-crisis-600 dark:text-crisis-400" : bac >= 0.04 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
                }`}>
                  Estimated BAC
                </p>
                <p className={`font-serif text-6xl sm:text-7xl font-bold leading-none mb-2 ${
                  bac >= 0.08 ? "text-crisis-700 dark:text-crisis-400" : bac >= 0.04 ? "text-warm-700 dark:text-warm-400" : "text-sage-700 dark:text-sage-400"
                }`}>
                  {bac.toFixed(3)}%
                </p>
                <p className={`text-sm font-semibold mb-1 ${
                  bac >= 0.08 ? "text-crisis-600 dark:text-crisis-400" : bac >= 0.04 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"
                }`}>
                  {effects.level}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {standardDrinks.toFixed(1)} standard drinks &bull; {rawWeight} {weightUnit} &bull; {rawHours}h elapsed
                </p>

                {/* BAC Gauge */}
                <div className="mt-5 max-w-md mx-auto">
                  <div className="relative h-4 rounded-full overflow-hidden bg-gradient-to-r from-sage-200 via-warm-300 to-crisis-400 dark:from-sage-800 dark:via-warm-700 dark:to-crisis-700">
                    {/* Current position marker */}
                    <div
                      className="absolute top-0 h-full w-1 bg-neutral-900 dark:bg-white rounded-full transition-all duration-700 shadow-lg"
                      style={{ left: `${Math.min(gaugePercent, 99)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-400 dark:text-neutral-500 mt-1.5 px-0.5">
                    <span>0.00</span>
                    <span className="text-warm-500">0.08 limit</span>
                    <span>0.20</span>
                    <span>0.40+</span>
                  </div>
                  {/* Legal limit marker */}
                  <div className="relative">
                    <div className="absolute left-[20%] -translate-x-1/2 -top-1 flex flex-col items-center">
                      <div className="w-px h-2 bg-warm-500 dark:bg-warm-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                {/* Legal Status */}
                <div className={`rounded-xl p-4 ${
                  isLegal
                    ? "bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800"
                    : "bg-crisis-50 dark:bg-crisis-950/20 border border-crisis-200 dark:border-crisis-800"
                }`}>
                  <p className={`text-sm font-semibold ${
                    isLegal ? "text-sage-700 dark:text-sage-400" : "text-crisis-700 dark:text-crisis-400"
                  }`}>
                    {isLegal ? "Below legal limit (0.08%)" : "At or above legal limit (0.08%)"}
                  </p>
                  <p className={`text-xs mt-1 ${
                    isLegal ? "text-sage-600 dark:text-sage-500" : "text-crisis-600 dark:text-crisis-400"
                  }`}>
                    {isLegal
                      ? "Even below the legal limit, any amount of alcohol causes impairment. Never drive after drinking."
                      : "You are legally impaired. Do not drive, operate machinery, or make important decisions. Seek a safe ride."}
                  </p>
                </div>

                {/* Effects */}
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">Effects at this level</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{effects.effects}</p>
                </div>

                {/* Time Until Sober */}
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">Estimated time until BAC reaches 0.00%</p>
                  <p className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                    {soberHours < 0.1 ? "You are at or near 0.00%" : `~${soberHours.toFixed(1)} hours`}
                  </p>
                  {soberHours >= 0.1 && (
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                      Based on average metabolism of 0.015% BAC per hour. Individual rates vary.
                    </p>
                  )}
                </div>

                {/* Estimate Warning */}
                <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                  <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                    <strong>This is an estimate only.</strong> Actual BAC varies based on food intake, medications, metabolism, hydration, tolerance, and many other factors. This calculator cannot determine if you are safe to drive. <strong>The only safe amount of alcohol for driving is zero.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* All BAC Levels */}
            <div className="card p-5 sm:p-6 mb-5">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">BAC Effects Reference</h3>
              <div className="space-y-2">
                {BAC_EFFECTS.filter((e) => e.min <= 0.35).map((e) => {
                  const isCurrent = bac >= e.min && bac <= e.max;
                  const colorMap: Record<string, string> = {
                    sage: "border-sage-300 dark:border-sage-700 bg-sage-50/50 dark:bg-sage-950/10",
                    warm: "border-warm-300 dark:border-warm-700 bg-warm-50/50 dark:bg-warm-950/10",
                    crisis: "border-crisis-300 dark:border-crisis-700 bg-crisis-50/50 dark:bg-crisis-950/10",
                  };
                  return (
                    <div
                      key={e.min}
                      className={`p-3 rounded-xl border transition-all ${
                        isCurrent
                          ? `${colorMap[e.color]} ring-2 ring-inset ring-current/10`
                          : "border-sand-200 dark:border-neutral-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-bold ${isCurrent ? (e.color === "sage" ? "text-sage-700 dark:text-sage-400" : e.color === "warm" ? "text-warm-700 dark:text-warm-400" : "text-crisis-700 dark:text-crisis-400") : "text-neutral-500 dark:text-neutral-400"}`}>
                          {e.min.toFixed(2)}–{e.max >= 999 ? "+" : e.max.toFixed(2)}%
                        </span>
                        <span className={`text-xs font-semibold ${isCurrent ? (e.color === "sage" ? "text-sage-600 dark:text-sage-400" : e.color === "warm" ? "text-warm-600 dark:text-warm-400" : "text-crisis-600 dark:text-crisis-400") : "text-neutral-400 dark:text-neutral-500"}`}>
                          {e.level}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-bold bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 px-2 py-0.5 rounded-full">YOU</span>
                        )}
                      </div>
                      <p className={`text-xs leading-relaxed ${isCurrent ? "text-neutral-600 dark:text-neutral-300" : "text-neutral-400 dark:text-neutral-500"}`}>
                        {e.effects}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>BAC Calculator from mindchecktools.com — {new Date().toLocaleDateString()}</p>
              <p>ESTIMATE ONLY. Never drive after drinking. Not medical advice.</p>
            </div>
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
                Copy My Estimate
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
          {REFLECTION_PROMPTS["bac-calculator"] && (
            <>
              <ReflectionPrompts
                prompts={REFLECTION_PROMPTS["bac-calculator"].prompts}
                toolName={REFLECTION_PROMPTS["bac-calculator"].toolName}
              />
              <ReflectionSummary
                toolName={REFLECTION_PROMPTS["bac-calculator"].toolName}
                toolUrl="https://mindchecktools.com/bac-calculator"
                score={`${bac.toFixed(3)}%`}
                severityLabel={effects.level}
                scoreRange={`${standardDrinks.toFixed(1)} standard drinks`}
                interpretation={effects.effects}
                suggestion={bac >= 0.08 ? "You are above the legal limit. Do not drive. Seek a safe ride home." : "Even below the legal limit, alcohol impairs judgment. Never drive after drinking."}
                reflectionPrompts={REFLECTION_PROMPTS["bac-calculator"].prompts}
              />
            </>
          )}

          {/* Emergency Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Emergency &amp; Support Resources</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you or someone else is in danger from alcohol, help is available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "Emergency Services", detail: "Call 911 for alcohol poisoning or medical emergencies", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "Poison Control (US)", detail: "1-800-222-1222 \u2014 free, confidential, 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "SAMHSA National Helpline (US)", detail: "1-800-662-4357 \u2014 free treatment referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 \u2014 available 24/7", color: "text-warm-600 dark:text-warm-400" },
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
              Understanding Blood Alcohol Content
            </h2>
            <div className="card p-5 sm:p-6 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What Is a Standard Drink?</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  In the United States, one standard drink contains approximately <strong>14 grams of pure alcohol</strong>. This equals 12 ounces of regular beer (5% ABV), 5 ounces of wine (12% ABV), or 1.5 ounces of distilled spirits (40% ABV / 80 proof). Many drinks contain more than one standard drink — a large restaurant pour of wine may be 8-10 ounces (1.6-2 standard drinks), a pint of craft beer at 7% ABV is about 1.5 standard drinks, and a strong cocktail can contain 2-3 standard drinks. Accurately counting standard drinks is essential for estimating BAC.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">How the Body Processes Alcohol</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  After consumption, alcohol is absorbed through the stomach and small intestine into the bloodstream. The liver metabolizes approximately <strong>90-98% of alcohol</strong> using the enzyme alcohol dehydrogenase, at a roughly constant rate of about 0.015% BAC per hour (approximately one standard drink per hour). This rate cannot be accelerated by coffee, cold showers, exercise, or food — once alcohol is in your bloodstream, only time will lower your BAC. Eating before or while drinking slows <em>absorption</em> (how quickly BAC rises), but does not speed <em>metabolism</em> (how quickly it falls).
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">BAC and Risk</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Even low BAC levels impair driving ability. Research shows that crash risk begins increasing at <strong>BAC 0.02%</strong> and doubles by 0.05%. At the legal limit of 0.08%, crash risk is approximately <strong>4 times higher</strong> than at 0.00%. Beyond driving, elevated BAC increases risk of falls, injuries, poor decision-making, and alcohol poisoning. The <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">AUDIT screening</Link> can help you reflect on your overall relationship with alcohol, and the <Link href="/audit-c-alcohol-screen" className="text-sage-600 dark:text-sage-400 underline hover:text-sage-700 dark:hover:text-sage-300">AUDIT-C quick screen</Link> takes just 1 minute.
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
                { name: "AUDIT Alcohol Screen", desc: "10-item WHO alcohol screening tool", href: "/audit-alcohol-test" },
                { name: "AUDIT-C Quick Screen", desc: "3-question brief alcohol screen", href: "/audit-c-alcohol-screen" },
                { name: "Sobriety Calculator", desc: "Track days sober and milestones", href: "/sobriety-calculator" },
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
              This calculator uses the Widmark formula to estimate BAC. It is an estimate only and should never be used to determine fitness to drive.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              This tool is for educational purposes only. It is not medical advice. Never drive after drinking.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
