"use client";

import { useState } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Types ────────────────────────────────────────────── */

interface Value {
  id: string;
  name: string;
  description: string;
}

type Pile = "very" | "somewhat" | "not" | null;

type Step = "sort" | "narrow" | "rank" | "profile";

interface Props {
  faqData: { question: string; answer: string }[];
}

/* ── 43 Values ───────────────────────────────────────── */

const VALUES: Value[] = [
  { id: "family", name: "Family", description: "Close relationships with loved ones" },
  { id: "honesty", name: "Honesty", description: "Being truthful and transparent" },
  { id: "adventure", name: "Adventure", description: "New experiences and exploration" },
  { id: "creativity", name: "Creativity", description: "Expressing ideas and imagination" },
  { id: "financial-security", name: "Financial Security", description: "Stability and freedom from money stress" },
  { id: "health", name: "Health", description: "Physical and mental well-being" },
  { id: "independence", name: "Independence", description: "Self-reliance and autonomy" },
  { id: "spirituality", name: "Spirituality", description: "Connection to something greater than yourself" },
  { id: "community", name: "Community", description: "Belonging to and contributing to a group" },
  { id: "learning", name: "Learning", description: "Growing through knowledge and education" },
  { id: "nature", name: "Nature", description: "Connection to the natural world" },
  { id: "justice", name: "Justice", description: "Fairness, equality, and standing up for what is right" },
  { id: "humor", name: "Humor", description: "Laughter, fun, and not taking life too seriously" },
  { id: "love", name: "Love", description: "Deep connection and affection for others" },
  { id: "courage", name: "Courage", description: "Acting despite fear or uncertainty" },
  { id: "compassion", name: "Compassion", description: "Caring for others who are suffering" },
  { id: "freedom", name: "Freedom", description: "Living without unnecessary constraints" },
  { id: "gratitude", name: "Gratitude", description: "Appreciating what you have" },
  { id: "loyalty", name: "Loyalty", description: "Standing by the people you care about" },
  { id: "patience", name: "Patience", description: "Accepting that things take time" },
  { id: "respect", name: "Respect", description: "Treating yourself and others with dignity" },
  { id: "responsibility", name: "Responsibility", description: "Being accountable for your choices" },
  { id: "self-discipline", name: "Self-Discipline", description: "Staying focused on your goals" },
  { id: "service", name: "Service", description: "Helping others and giving back" },
  { id: "simplicity", name: "Simplicity", description: "A life free of unnecessary complexity" },
  { id: "wisdom", name: "Wisdom", description: "Learning from experience and making thoughtful choices" },
  { id: "achievement", name: "Achievement", description: "Accomplishing meaningful goals" },
  { id: "balance", name: "Balance", description: "Harmony between different areas of life" },
  { id: "belonging", name: "Belonging", description: "Feeling accepted and included" },
  { id: "challenge", name: "Challenge", description: "Pushing yourself to grow" },
  { id: "cooperation", name: "Cooperation", description: "Working well with others" },
  { id: "curiosity", name: "Curiosity", description: "Wanting to understand how things work" },
  { id: "forgiveness", name: "Forgiveness", description: "Letting go of resentment and grudges" },
  { id: "generosity", name: "Generosity", description: "Giving freely of your time, energy, or resources" },
  { id: "growth", name: "Growth", description: "Continuously becoming a better version of yourself" },
  { id: "humility", name: "Humility", description: "Staying grounded and open to learning" },
  { id: "integrity", name: "Integrity", description: "Living in line with your principles" },
  { id: "kindness", name: "Kindness", description: "Being warm and considerate toward others" },
  { id: "leadership", name: "Leadership", description: "Guiding and inspiring others" },
  { id: "mindfulness", name: "Mindfulness", description: "Being present and aware in the moment" },
  { id: "openness", name: "Openness", description: "Being receptive to new ideas and perspectives" },
  { id: "perseverance", name: "Perseverance", description: "Keeping going even when it is hard" },
  { id: "purpose", name: "Purpose", description: "Living with meaning and direction" },
];

/* ── Pile colors ─────────────────────────────────────── */

const PILE_STYLES: Record<string, string> = {
  very: "border-emerald-400 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/40",
  somewhat: "border-amber-400 bg-amber-50 dark:border-amber-600 dark:bg-amber-950/40",
  not: "border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/40",
};

const PILE_BADGE: Record<string, string> = {
  very: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
  somewhat: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  not: "bg-neutral-200 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
};

/* ── Component ───────────────────────────────────────── */

export function ValuesCardSortClient({ faqData }: Props) {
  const [step, setStep] = useState<Step>("sort");
  const [piles, setPiles] = useState<Record<string, Pile>>({});
  const [selected5, setSelected5] = useState<string[]>([]);
  const [ranked, setRanked] = useState<string[]>([]);
  const [reflection1, setReflection1] = useState("");
  const [reflection2, setReflection2] = useState("");

  /* Derived */
  const sortedCount = Object.values(piles).filter(Boolean).length;
  const totalValues = VALUES.length;
  const veryImportant = VALUES.filter((v) => piles[v.id] === "very");

  /* Sort a card */
  function sortCard(id: string, pile: Pile) {
    setPiles((prev) => ({ ...prev, [id]: pile }));
  }

  /* Move to narrow step */
  function goToNarrow() {
    if (veryImportant.length <= 5) {
      const ids = veryImportant.map((v) => v.id);
      setSelected5(ids);
      setRanked(ids);
      setStep("rank");
    } else {
      setStep("narrow");
    }
  }

  /* Toggle selection in narrow step */
  function toggleNarrow(id: string) {
    setSelected5((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 5) return prev;
      return [...prev, id];
    });
  }

  /* Go to rank step */
  function goToRank() {
    setRanked([...selected5]);
    setStep("rank");
  }

  /* Move a value up or down in ranking */
  function moveRank(index: number, direction: "up" | "down") {
    const newRanked = [...ranked];
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= newRanked.length) return;
    [newRanked[index], newRanked[swapIndex]] = [newRanked[swapIndex], newRanked[index]];
    setRanked(newRanked);
  }

  /* Reset */
  function startOver() {
    setPiles({});
    setSelected5([]);
    setRanked([]);
    setReflection1("");
    setReflection2("");
    setStep("sort");
  }

  /* Print */
  function handlePrint() {
    window.print();
  }

  /* Lookup helper */
  function getVal(id: string): Value {
    return VALUES.find((v) => v.id === id)!;
  }

  /* ── Step indicator ──────────────────────────────────── */
  const STEPS: { key: Step; label: string }[] = [
    { key: "sort", label: "Sort" },
    { key: "narrow", label: "Narrow" },
    { key: "rank", label: "Rank" },
    { key: "profile", label: "Profile" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 print:py-4">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 print:hidden">
        <Link href="/" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700 dark:text-neutral-200">Values Card Sort</span>
      </nav>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
        Values Card Sort
      </h1>
      <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl">
        Discover what matters most to you. Sort {totalValues} personal values into categories, narrow to your top 5, rank them, and reflect on how to live in alignment with what you truly care about.
      </p>

      <AdSlot position="top-banner" className="mb-6 print:hidden" />

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8 print:hidden" aria-label="Progress">
        {STEPS.map((s, i) => {
          const isCurrent = step === s.key;
          const stepIndex = STEPS.findIndex((x) => x.key === step);
          const isPast = i < stepIndex;
          return (
            <div key={s.key} className="flex items-center gap-2">
              {i > 0 && (
                <div className={`w-8 h-0.5 ${isPast ? "bg-sage-400" : "bg-neutral-200 dark:bg-neutral-700"}`} />
              )}
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isCurrent
                  ? "bg-sage-100 text-sage-700 dark:bg-sage-900 dark:text-sage-300"
                  : isPast
                    ? "bg-sage-50 text-sage-500 dark:bg-sage-950 dark:text-sage-400"
                    : "bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500"
              }`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  isCurrent
                    ? "bg-sage-500 text-white"
                    : isPast
                      ? "bg-sage-300 text-white dark:bg-sage-700"
                      : "bg-neutral-300 text-white dark:bg-neutral-600"
                }`}>
                  {isPast ? "\u2713" : i + 1}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── STEP 1: Sort ─────────────────────────────── */}
      {step === "sort" && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
              Step 1: Sort Each Value
            </h2>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {sortedCount} of {totalValues} sorted
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">
            For each value, choose how important it is to you. There are no right or wrong answers — go with your gut feeling.
          </p>

          {/* Progress bar */}
          <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-6">
            <div
              className="h-2 bg-sage-500 rounded-full transition-all duration-300"
              style={{ width: `${(sortedCount / totalValues) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {VALUES.map((val) => {
              const pile = piles[val.id];
              return (
                <div
                  key={val.id}
                  className={`border-2 rounded-xl p-4 transition-all ${
                    pile ? PILE_STYLES[pile] : "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-night-900"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">{val.name}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{val.description}</p>
                    </div>
                    {pile && (
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${PILE_BADGE[pile]}`}>
                        {pile === "very" ? "Very" : pile === "somewhat" ? "Somewhat" : "Not"}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => sortCard(val.id, "very")}
                      className={`flex-1 text-xs font-medium py-1.5 px-2 rounded-lg border transition-colors ${
                        pile === "very"
                          ? "bg-emerald-500 text-white border-emerald-500"
                          : "border-emerald-300 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950"
                      }`}
                    >
                      Very Important
                    </button>
                    <button
                      onClick={() => sortCard(val.id, "somewhat")}
                      className={`flex-1 text-xs font-medium py-1.5 px-2 rounded-lg border transition-colors ${
                        pile === "somewhat"
                          ? "bg-amber-500 text-white border-amber-500"
                          : "border-amber-300 text-amber-600 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-400 dark:hover:bg-amber-950"
                      }`}
                    >
                      Somewhat
                    </button>
                    <button
                      onClick={() => sortCard(val.id, "not")}
                      className={`flex-1 text-xs font-medium py-1.5 px-2 rounded-lg border transition-colors ${
                        pile === "not"
                          ? "bg-neutral-500 text-white border-neutral-500"
                          : "border-neutral-300 text-neutral-500 hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-900"
                      }`}
                    >
                      Not Important
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary counts */}
          <div className="mt-6 p-4 bg-sand-50 dark:bg-night-900 rounded-xl border border-sand-200 dark:border-neutral-700">
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                Very Important: {veryImportant.length}
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-medium">
                Somewhat: {VALUES.filter((v) => piles[v.id] === "somewhat").length}
              </span>
              <span className="text-neutral-500 dark:text-neutral-400 font-medium">
                Not Important: {VALUES.filter((v) => piles[v.id] === "not").length}
              </span>
            </div>
          </div>

          <button
            onClick={goToNarrow}
            disabled={sortedCount < totalValues}
            className="mt-6 w-full sm:w-auto px-8 py-3 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded-xl shadow transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {sortedCount < totalValues
              ? `Sort all ${totalValues} values to continue`
              : veryImportant.length <= 5
                ? "Continue to Ranking"
                : `Narrow ${veryImportant.length} Values to Top 5`}
          </button>
        </section>
      )}

      {/* ── STEP 2: Narrow ───────────────────────────── */}
      {step === "narrow" && (
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Step 2: Choose Your Top 5
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            You marked <strong>{veryImportant.length}</strong> values as very important. Now pick the <strong>5</strong> that matter most to you. This is the hardest part — trust your instincts.
          </p>

          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            {selected5.length} of 5 selected
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {veryImportant.map((val) => {
              const isSelected = selected5.includes(val.id);
              return (
                <button
                  key={val.id}
                  onClick={() => toggleNarrow(val.id)}
                  className={`text-left border-2 rounded-xl p-4 transition-all ${
                    isSelected
                      ? "border-sage-500 bg-sage-50 dark:border-sage-500 dark:bg-sage-950/40 ring-2 ring-sage-200 dark:ring-sage-800"
                      : selected5.length >= 5
                        ? "border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 opacity-50 cursor-not-allowed"
                        : "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-night-900 hover:border-sage-300 dark:hover:border-sage-700"
                  }`}
                  disabled={!isSelected && selected5.length >= 5}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected
                        ? "border-sage-500 bg-sage-500"
                        : "border-neutral-300 dark:border-neutral-600"
                    }`}>
                      {isSelected && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">{val.name}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{val.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setStep("sort")}
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              Back
            </button>
            <button
              onClick={goToRank}
              disabled={selected5.length !== 5}
              className="px-8 py-3 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded-xl shadow transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {selected5.length === 5 ? "Rank Your Top 5" : `Select ${5 - selected5.length} more`}
            </button>
          </div>
        </section>
      )}

      {/* ── STEP 3: Rank ─────────────────────────────── */}
      {step === "rank" && (
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Step 3: Rank Your Top 5
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Put your 5 core values in order. #1 is the value that matters most. Use the arrows to reorder.
          </p>

          <div className="space-y-3">
            {ranked.map((id, index) => {
              const val = getVal(id);
              return (
                <div
                  key={id}
                  className="flex items-center gap-3 border-2 border-sage-200 dark:border-sage-800 bg-white dark:bg-night-900 rounded-xl p-4"
                >
                  <span className="w-8 h-8 rounded-full bg-sage-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">{val.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{val.description}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => moveRank(index, "up")}
                      disabled={index === 0}
                      aria-label={`Move ${val.name} up`}
                      className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <svg className="w-4 h-4 text-neutral-600 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => moveRank(index, "down")}
                      disabled={index === ranked.length - 1}
                      aria-label={`Move ${val.name} down`}
                      className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <svg className="w-4 h-4 text-neutral-600 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => veryImportant.length <= 5 ? setStep("sort") : setStep("narrow")}
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => setStep("profile")}
              className="px-8 py-3 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded-xl shadow transition-colors"
            >
              See My Values Profile
            </button>
          </div>
        </section>
      )}

      {/* ── STEP 4: Profile ──────────────────────────── */}
      {step === "profile" && (
        <section>
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2 print:text-2xl">
            Your Values Profile
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 print:mb-4">
            These are your 5 core values, ranked by importance. Use this profile as a compass for decisions, goal-setting, and understanding what truly matters to you.
          </p>

          {/* Ranked values */}
          <div className="space-y-4 mb-8">
            {ranked.map((id, index) => {
              const val = getVal(id);
              const sizes = ["text-xl", "text-lg", "text-base", "text-base", "text-base"];
              return (
                <div
                  key={id}
                  className="flex items-center gap-4 p-5 border-2 border-sage-200 dark:border-sage-800 bg-gradient-to-r from-sage-50 to-white dark:from-sage-950/30 dark:to-night-900 rounded-xl"
                >
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${
                    index === 0 ? "bg-sage-600" : index === 1 ? "bg-sage-500" : "bg-sage-400"
                  }`}>
                    {index + 1}
                  </span>
                  <div>
                    <h3 className={`font-bold text-neutral-800 dark:text-neutral-100 ${sizes[index]}`}>
                      {val.name}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reflection prompts */}
          <div className="space-y-6 mb-8">
            <div>
              <label htmlFor="reflection1" className="block text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                How are you living these values today?
              </label>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                Think about your daily life. Where do your top values show up? Where might there be a gap between what you value and how you are living?
              </p>
              <textarea
                id="reflection1"
                value={reflection1}
                onChange={(e) => setReflection1(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-night-900 text-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-sage-400 focus:border-sage-400 transition-colors resize-y print:border-neutral-400"
                placeholder="e.g. I value Family deeply but have been working late most nights..."
              />
            </div>

            <div>
              <label htmlFor="reflection2" className="block text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                What one change would bring your life closer to your top values?
              </label>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                Pick one small, concrete step you could take this week. It does not have to be big — small shifts add up.
              </p>
              <textarea
                id="reflection2"
                value={reflection2}
                onChange={(e) => setReflection2(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-night-900 text-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-sage-400 focus:border-sage-400 transition-colors resize-y print:border-neutral-400"
                placeholder="e.g. I will leave work by 5:30 three days this week to have dinner with my family..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-8 print:hidden">
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-sage-600 hover:bg-sage-700 text-white font-semibold rounded-xl shadow transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Profile
            </button>
            <button
              onClick={startOver}
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              Start Over
            </button>
          </div>

          {/* Sorting summary */}
          <div className="p-5 bg-sand-50 dark:bg-night-900 rounded-xl border border-sand-200 dark:border-neutral-700 mb-8 print:hidden">
            <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Your Full Sort</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">Very Important ({veryImportant.length})</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {veryImportant.map((v) => v.name).join(", ") || "None"}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                  Somewhat Important ({VALUES.filter((v) => piles[v.id] === "somewhat").length})
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {VALUES.filter((v) => piles[v.id] === "somewhat").map((v) => v.name).join(", ") || "None"}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                  Not Important ({VALUES.filter((v) => piles[v.id] === "not").length})
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {VALUES.filter((v) => piles[v.id] === "not").map((v) => v.name).join(", ") || "None"}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <AdSlot position="mid-content" className="my-8 print:hidden" />

      {/* ── Educational Content ──────────────────────── */}
      <section className="mt-12 print:hidden">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          About Values Card Sort Exercises
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            A values card sort is a widely used exercise in counseling, coaching, and personal development. Originally developed for use in <strong>Motivational Interviewing (MI)</strong>, values clarification exercises help people identify what truly matters to them — and reveal gaps between their values and their current behavior. This awareness is often the starting point for meaningful change.
          </p>
          <p>
            In <strong>substance use recovery</strong>, values work is particularly powerful. When someone can clearly name their core values, they gain a compass for decisions: &ldquo;Does this choice move me toward or away from what I care about most?&rdquo; Research published in the journal <em>Psychology of Addictive Behaviors</em> has found that values-based interventions can strengthen motivation for change and reduce ambivalence about recovery.
          </p>
          <p>
            The card sort format — physically or digitally sorting values into piles — is preferred over simple ranking because it forces comparison. When you must choose between two things you care about, you learn something about yourself. The process of narrowing to 5 core values is intentionally difficult; the struggle itself is part of the insight.
          </p>
          <p>
            This exercise is not a screening or assessment. There are no scores and no right or wrong answers. It is a self-reflection tool meant to help you better understand your own priorities. If you are working with a therapist or counselor, your values profile can be a valuable starting point for deeper conversation.
          </p>
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Authoritative Sources</h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1.5">
            <li>
              <a href="https://motivationalinterviewing.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 dark:hover:text-blue-100">
                Motivational Interviewing Network of Trainers (MINT)
              </a>{" "}
              — The international organization for MI training and research
            </li>
            <li>
              <a href="https://www.samhsa.gov/medications-substance-use-disorders" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 dark:hover:text-blue-100">
                SAMHSA: Substance Use Treatment Resources
              </a>{" "}
              — Federal agency for substance abuse and mental health services
            </li>
          </ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="mt-12 print:hidden">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <details key={faq.question} className="group border border-neutral-200 dark:border-neutral-700 rounded-xl">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-xl transition-colors">
                <h3 className="text-left pr-4">{faq.question}</h3>
                <svg className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {REFLECTION_PROMPTS["values-card-sort"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["values-card-sort"].prompts}
          toolName={REFLECTION_PROMPTS["values-card-sort"].toolName}
        />
      )}

      {/* ── Related Tools ────────────────────────────── */}
      <section className="mt-12 print:hidden">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/readiness-to-change", label: "Readiness to Change", desc: "Assess your stage of change" },
            { href: "/cbt-thought-record", label: "CBT Thought Record", desc: "Challenge automatic thoughts" },
            { href: "/cognitive-distortion-identifier", label: "Thought Patterns", desc: "Identify cognitive distortions" },
            { href: "/daily-recovery-check-in", label: "Daily Recovery Check-In", desc: "Daily reflection for recovery" },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center gap-3 p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-sage-300 dark:hover:border-sage-700 hover:bg-sage-50/50 dark:hover:bg-sage-950/20 transition-colors"
            >
              <div>
                <p className="font-medium text-neutral-800 dark:text-neutral-100">{tool.label}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot position="bottom-content" className="mt-8 print:hidden" />

      {/* ── Clinical Disclaimer ──────────────────────── */}
      <section className="mt-12 print:mt-6">
        <div className="p-5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
          <h2 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Disclaimer</h2>
          <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
            This values card sort is an educational self-reflection exercise, not a clinical assessment or therapeutic intervention. It is not a substitute for professional counseling or therapy. If you are struggling with substance use, mental health challenges, or a life crisis, please reach out to a qualified healthcare professional.
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mt-2">
            All responses are processed entirely in your browser and are never stored or transmitted to any server.
          </p>
        </div>
      </section>

      {/* ── Crisis Resources ─────────────────────────── */}
      <section className="mt-6 print:mt-4">
        <div className="p-5 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800">
          <h2 className="font-semibold text-red-800 dark:text-red-200 mb-2">Crisis Resources</h2>
          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> (24/7)</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> (24/7, free, confidential)</li>
            <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
          </ul>
          <p className="text-sm text-red-600 dark:text-red-400 mt-2">
            <Link href="/crisis-resources" className="underline hover:text-red-800 dark:hover:text-red-200">
              View all crisis resources and international helplines
            </Link>
          </p>
        </div>
      </section>

      {/* ── Reviewer Bio ─────────────────────────────── */}
      <div className="mt-8 print:mt-4">
        <ToolReviewerBio />
      </div>
    </main>
  );
}
