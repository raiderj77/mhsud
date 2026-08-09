"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";
import { PRIVATE_SHARE_NOTICE, sharePrivateToolLink } from "@/lib/privateToolSharing";
import { printSensitiveResults } from "@/lib/sensitivePrinting";

/* ── types ─────────────────────────────────────────────── */

type CategoryKey = "people" | "places" | "emotional" | "situational" | "time" | "sensory";

interface Category {
  key: CategoryKey;
  label: string;
  icon: string;
  color: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  borderLight: string;
  borderDark: string;
  presets: string[];
  copingStrategies: string[];
}

interface Props {
  faqData: { question: string; answer: string }[];
}

/* ── data ──────────────────────────────────────────────── */

const CATEGORIES: Category[] = [
  {
    key: "people",
    label: "People Triggers",
    icon: "\uD83D\uDC65", // silhouettes
    color: "#3b82f6",
    bgLight: "bg-blue-50", bgDark: "dark:bg-blue-900/20",
    textLight: "text-blue-700", textDark: "dark:text-blue-300",
    borderLight: "border-blue-200", borderDark: "dark:border-blue-800",
    presets: [
      "Former drinking or using friends",
      "Drug dealer or supplier",
      "Family members who use",
      "Romantic partner (current or ex)",
      "Coworkers who drink or use",
      "People who enable my use",
      "People I used to get high with",
      "People who pressure or criticize me",
    ],
    copingStrategies: [
      "Consider discussing a boundary or support plan with someone you trust.",
      "Practice a brief refusal phrase before a situation where substances may be offered.",
      "If it feels safe and useful, ask a trusted person to accompany you.",
      "Consider how you could leave or contact support if an urge becomes difficult to manage.",
      "Ask a qualified counselor how to navigate a relationship connected with substance use.",
    ],
  },
  {
    key: "places",
    label: "Place Triggers",
    icon: "\uD83D\uDCCD", // pin
    color: "#ef4444",
    bgLight: "bg-red-50", bgDark: "dark:bg-red-900/20",
    textLight: "text-red-700", textDark: "dark:text-red-300",
    borderLight: "border-red-200", borderDark: "dark:border-red-800",
    presets: [
      "Bars or clubs",
      "Liquor stores",
      "Former dealer\u2019s neighborhood",
      "Parties or social events",
      "Certain restaurants",
      "Friend\u2019s house where I used",
      "Work break room",
      "My car",
      "My old apartment or neighborhood",
      "Gas stations or convenience stores",
    ],
    copingStrategies: [
      "If appropriate, consider an alternate route or location.",
      "If you need to visit, consider asking a trusted person to come with you.",
      "Think through a time limit, transportation, and an exit option in advance.",
      "Consider contacting someone in your support network before or after the visit.",
      "A counselor can help you plan for places that cannot be avoided.",
    ],
  },
  {
    key: "emotional",
    label: "Emotional Triggers",
    icon: "\uD83D\uDC9C", // heart
    color: "#8b5cf6",
    bgLight: "bg-violet-50", bgDark: "dark:bg-violet-900/20",
    textLight: "text-violet-700", textDark: "dark:text-violet-300",
    borderLight: "border-violet-200", borderDark: "dark:border-violet-800",
    presets: [
      "Stress or overwhelm",
      "Anger or frustration",
      "Loneliness or isolation",
      "Boredom",
      "Sadness or depression",
      "Anxiety or nervousness",
      "Shame or guilt",
      "Feeling celebratory or happy",
      "Grief or loss",
      "Feeling rejected or abandoned",
    ],
    copingStrategies: [
      "Do a HALT check-in: are you Hungry, Angry, Lonely, or Tired?",
      "Consider describing the emotion without judging it or treating an urge as a command.",
      "Talk with someone you trust about what you are experiencing.",
      "Choose an alternative activity that is safe and available to you.",
      "Use a coping skill from an existing professional support or treatment plan.",
    ],
  },
  {
    key: "situational",
    label: "Situational Triggers",
    icon: "\u26A0\uFE0F", // warning
    color: "#f59e0b",
    bgLight: "bg-amber-50", bgDark: "dark:bg-amber-900/20",
    textLight: "text-amber-700", textDark: "dark:text-amber-300",
    borderLight: "border-amber-200", borderDark: "dark:border-amber-800",
    presets: [
      "Payday or having extra cash",
      "Relationship conflict",
      "Work pressure or deadlines",
      "Being offered substances",
      "After a difficult conversation",
      "During holidays or celebrations",
      "When home alone",
      "After a bad day",
      "Loss of routine or structure",
      "Before or after appointments",
    ],
    copingStrategies: [
      "If you know the situation is coming, consider rehearsing a response or exit option.",
      "Prepare a brief phrase for declining an offer of substances.",
      "Consider scheduling a safe alternative activity or support check-in.",
      "Keep an existing professional support or treatment plan accessible if you have one.",
      "Afterward, consider discussing what happened with a qualified counselor or trusted support person.",
    ],
  },
  {
    key: "time",
    label: "Time-Based Triggers",
    icon: "\uD83D\uDD53", // clock
    color: "#06b6d4",
    bgLight: "bg-cyan-50", bgDark: "dark:bg-cyan-900/20",
    textLight: "text-cyan-700", textDark: "dark:text-cyan-300",
    borderLight: "border-cyan-200", borderDark: "dark:border-cyan-800",
    presets: [
      "Friday or Saturday nights",
      "After work hours",
      "Mornings",
      "Holidays and long weekends",
      "Anniversary dates",
      "Bedtime or when unable to sleep",
      "Weekends with no plans",
      "Paydays",
    ],
    copingStrategies: [
      "Consider planning a safe alternative activity for this time.",
      "Ask someone you trust whether a support check-in would be useful.",
      "Consider spending the time in a setting that supports your goals.",
      "Use a reminder for a coping step from your professional support or treatment plan.",
      "A counselor can help you plan around recurring times or events.",
    ],
  },
  {
    key: "sensory",
    label: "Sensory Triggers",
    icon: "\uD83D\uDC41\uFE0F", // eye
    color: "#10b981",
    bgLight: "bg-emerald-50", bgDark: "dark:bg-emerald-900/20",
    textLight: "text-emerald-700", textDark: "dark:text-emerald-300",
    borderLight: "border-emerald-200", borderDark: "dark:border-emerald-800",
    presets: [
      "Smell of alcohol",
      "Smell of smoke or marijuana",
      "Sound of bottles or cans opening",
      "Seeing drug paraphernalia",
      "Alcohol advertisements",
      "Music associated with using",
      "Taste of certain drinks",
      "Seeing others drink or use",
    ],
    copingStrategies: [
      "If it is safe to do so, consider moving to a different environment.",
      "Mute or skip media that contains substance-related cues when that option is available.",
      "Notice the cue and choose a coping step from an existing professional support plan.",
      "Tell a trusted person that a cue brought up an urge if you want support.",
      "A cue is information, not a prediction or command.",
    ],
  },
];

/* ── component ─────────────────────────────────────────── */

export function TriggerWorksheetClient({ faqData }: Props) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [customTriggers, setCustomTriggers] = useState<Record<CategoryKey, string[]>>({
    people: [], places: [], emotional: [], situational: [], time: [], sensory: [],
  });
  const [customInput, setCustomInput] = useState<Record<CategoryKey, string>>({
    people: "", places: "", emotional: "", situational: "", time: "", sensory: "",
  });
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  /* ── helpers ─────────────────────────────────────────── */

  const toggleCheck = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const addCustom = (cat: CategoryKey) => {
    const val = customInput[cat].trim();
    if (!val || customTriggers[cat].length >= 5) return;
    if (customTriggers[cat].includes(val)) return;
    setCustomTriggers((prev) => ({ ...prev, [cat]: [...prev[cat], val] }));
    const customKey = `${cat}::custom::${val}`;
    setChecked((prev) => ({ ...prev, [customKey]: true }));
    setCustomInput((prev) => ({ ...prev, [cat]: "" }));
  };

  const getSelectedForCategory = (cat: Category): string[] => {
    const selected: string[] = [];
    for (const preset of cat.presets) {
      const key = `${cat.key}::${preset}`;
      if (checked[key]) selected.push(preset);
    }
    for (const custom of customTriggers[cat.key]) {
      const key = `${cat.key}::custom::${custom}`;
      if (checked[key]) selected.push(custom);
    }
    return selected;
  };

  const totalSelected = CATEGORIES.reduce((sum, cat) => sum + getSelectedForCategory(cat).length, 0);

  const getCopingForTrigger = (cat: Category, triggerIndex: number): string => {
    const pool = cat.copingStrategies;
    return pool[triggerIndex % pool.length];
  };

  const handleGenerate = () => {
    setShowProfile(true);
    setTimeout(() => {
      profileRef.current?.focus();
      profileRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleEdit = () => {
    setShowProfile(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    if (!confirm("This will clear all your selections. Continue?")) return;
    setChecked({});
    setCustomTriggers({ people: [], places: [], emotional: [], situational: [], time: [], sensory: [] });
    setCustomInput({ people: "", places: "", emotional: "", situational: "", time: "", sensory: "" });
    setShowProfile(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => printSensitiveResults();

  const handleShare = async () => {
    await sharePrivateToolLink({
      toolName: "Trigger Identification Worksheet",
      canonicalPath: "/trigger-identification-worksheet",
    });
  };

  /* ── render ──────────────────────────────────────────── */

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
      <p className="text-neutral-500 dark:text-neutral-400 text-center max-w-xl mx-auto mb-2 leading-relaxed">
        Select cues that feel relevant, add fictional or de-identified examples if needed, and review
        general response-planning ideas. You can edit or clear the worksheet at any time.
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mb-6">
        Your answers are processed locally and are not intentionally sent to MindCheck Tools. Copies, browser or device sync, backups, and shared-device access are outside this boundary.
      </p>

      <div id="trigger-entry-privacy" className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
        <p className="font-semibold mb-1">Before adding a custom cue</p>
        <p className="leading-relaxed">
          Use a fictional or de-identified phrase when possible. Do not enter names, contact details, or information you would not want someone with access to this device or a printed copy to see.
        </p>
      </div>

      {/* ─── WORKSHEET ─────────────────────────────────── */}
      {!showProfile && (
        <section aria-label="Trigger identification worksheet">
          <div className="space-y-6 mb-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.key} className={`card p-5 sm:p-6 border ${cat.borderLight} ${cat.borderDark}`}>
                {/* category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                  <div>
                    <h2 className={`font-serif font-bold text-lg ${cat.textLight} ${cat.textDark}`}>
                      {cat.label}
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Check all that apply to you
                    </p>
                  </div>
                </div>

                {/* preset checkboxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {cat.presets.map((preset) => {
                    const key = `${cat.key}::${preset}`;
                    return (
                      <label
                        key={key}
                        className={`flex min-h-[44px] items-start gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors ${
                          checked[key]
                            ? `${cat.bgLight} ${cat.bgDark}`
                            : "hover:bg-sand-50 dark:hover:bg-night-800"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={!!checked[key]}
                          onChange={() => toggleCheck(key)}
                          className="mt-0.5 w-4 h-4 rounded border-neutral-300 dark:border-neutral-600 text-sage-600 focus:ring-sage-500"
                        />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                          {preset}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {/* custom triggers already added */}
                {customTriggers[cat.key].length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {customTriggers[cat.key].map((custom) => {
                      const key = `${cat.key}::custom::${custom}`;
                      return (
                        <label
                          key={key}
                          className={`flex min-h-[44px] items-start gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors ${
                            checked[key]
                              ? `${cat.bgLight} ${cat.bgDark}`
                              : "hover:bg-sand-50 dark:hover:bg-night-800"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={!!checked[key]}
                            onChange={() => toggleCheck(key)}
                            className="mt-0.5 w-4 h-4 rounded border-neutral-300 dark:border-neutral-600 text-sage-600 focus:ring-sage-500"
                          />
                          <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-snug italic">
                            {custom} <span className="text-xs text-neutral-400">(custom)</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}

                {/* add custom input */}
                {customTriggers[cat.key].length < 5 && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      aria-label={`Custom ${cat.label} trigger`}
                      aria-describedby="trigger-entry-privacy"
                      autoComplete="off"
                      spellCheck={false}
                      value={customInput[cat.key]}
                      onChange={(e) => setCustomInput((prev) => ({ ...prev, [cat.key]: e.target.value }))}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addCustom(cat.key); } }}
                      placeholder="Add a custom trigger\u2026"
                      className="min-h-[44px] flex-1 px-3 py-2 rounded-lg border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-500"
                      maxLength={80}
                    />
                    <button
                      onClick={() => addCustom(cat.key)}
                      disabled={!customInput[cat.key].trim()}
                      className="min-h-[44px] px-4 py-2 rounded-lg bg-sand-200 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-300 dark:hover:bg-night-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Add
                    </button>
                  </div>
                )}
                {customTriggers[cat.key].length >= 5 && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Maximum 5 custom triggers per category.</p>
                )}
              </div>
            ))}
          </div>

          {/* summary + generate */}
          <div className="card p-5 sm:p-6 text-center mb-8">
            <p className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
              {totalSelected} trigger{totalSelected !== 1 ? "s" : ""} identified
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              across {CATEGORIES.filter((c) => getSelectedForCategory(c).length > 0).length} of 6 categories
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
              These counts organize your selections. They are not assessment scores, severity levels, or relapse-risk estimates.
            </p>

            {/* mini breakdown */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {CATEGORIES.map((cat) => {
                const count = getSelectedForCategory(cat).length;
                return (
                  <span
                    key={cat.key}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      count > 0
                        ? `${cat.bgLight} ${cat.bgDark} ${cat.textLight} ${cat.textDark}`
                        : "bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {cat.icon} {count}
                  </span>
                );
              })}
            </div>

            <button
              onClick={handleGenerate}
              disabled={totalSelected === 0}
              className={`btn-primary text-base px-8 py-3 ${totalSelected === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Review Selected Triggers
            </button>
            {totalSelected === 0 && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                Select at least one cue to create a worksheet summary.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Worksheet summary */}
      {showProfile && (
        <div ref={profileRef} tabIndex={-1}>
          <section className="card p-6 sm:p-8 mb-6 print:shadow-none print:border-0" aria-label="Your worksheet summary" aria-live="polite">
            <div className="text-center mb-6">
              <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Your Worksheet Summary
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {totalSelected} cue{totalSelected !== 1 ? "s" : ""} selected &middot; Created {new Date().toLocaleDateString()}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                This is an organizational summary, not a clinical result, severity rating, or relapse prediction.
              </p>
            </div>

            {/* summary bar */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
              {CATEGORIES.map((cat) => {
                const count = getSelectedForCategory(cat).length;
                return (
                  <div key={cat.key} className={`text-center p-2 rounded-lg ${count > 0 ? `${cat.bgLight} ${cat.bgDark}` : "bg-sand-50 dark:bg-night-800"}`}>
                    <span className="text-lg block" aria-hidden="true">{cat.icon}</span>
                    <span className={`text-lg font-bold block ${count > 0 ? `${cat.textLight} ${cat.textDark}` : "text-neutral-300 dark:text-neutral-600"}`}>
                      {count}
                    </span>
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400 block leading-tight">
                      {cat.label.replace(" Triggers", "")}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* category details with coping */}
            {CATEGORIES.map((cat) => {
              const selected = getSelectedForCategory(cat);
              if (selected.length === 0) return null;
              return (
                <div key={cat.key} className="mb-8 last:mb-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                    <h3 className={`font-serif font-bold ${cat.textLight} ${cat.textDark}`}>
                      {cat.label}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${cat.bgLight} ${cat.bgDark} ${cat.textLight} ${cat.textDark} font-medium`}>
                      {selected.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {selected.map((trigger, idx) => (
                      <div
                        key={trigger}
                        className={`rounded-xl p-4 border ${cat.borderLight} ${cat.borderDark} ${cat.bgLight} ${cat.bgDark}`}
                      >
                        <p className="font-medium text-neutral-800 dark:text-neutral-100 text-sm mb-2 flex items-start gap-2">
                          <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: cat.color }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
                          </svg>
                          {trigger}
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pl-6 flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span><strong className="text-sage-700 dark:text-sage-400">General planning idea:</strong> {getCopingForTrigger(cat, idx)}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* actions */}
            <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-sand-200 dark:border-neutral-700 mt-8 print:hidden">
              <button onClick={handlePrint} className="min-h-[44px] px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors">
                Print Summary
              </button>
              <button onClick={handleShare} className="min-h-[44px] px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors">
                Share Tool Link
              </button>
              <button onClick={handleEdit} className="min-h-[44px] px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors">
                Edit Selections
              </button>
              <button onClick={handleReset} className="min-h-[44px] px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors">
                Start Over
              </button>
            </div>
            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 print:hidden">{PRIVATE_SHARE_NOTICE}</p>
          </section>

          {/* next step callout */}
          <div className="bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl p-5 mb-8 text-center print:hidden">
            <p className="font-semibold text-sage-700 dark:text-sage-400 mb-2">
              Next Step: Build Your Relapse Prevention Plan
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3 max-w-md mx-auto leading-relaxed">
              If a written plan is appropriate for you, organize support contacts and response ideas you can review with a qualified professional.
            </p>
            <Link href="/relapse-prevention-plan" className="btn-primary text-sm px-6 py-2">
              Build My Plan
            </Link>
          </div>
        </div>
      )}

      {/* ─── EDUCATIONAL CONTENT ───────────────────────── */}
      <section className="prose-custom mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          What are substance-use triggers?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          A trigger or cue is something associated with an urge to use a substance. The U.S. National
          Institute on Alcohol Abuse and Alcoholism (NIAAA) describes <strong>external cues</strong> such as
          people, places, things, and times of day, and <strong>internal cues</strong> such as thoughts,
          emotions, and physical sensations. The examples here extend that organizing idea beyond alcohol,
          but this worksheet does not determine what caused an urge or predict what will happen next.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          NIAAA&apos;s self-help material suggests recognizing cues, planning ahead, talking with someone you
          trust, choosing an alternative activity, and leaving a tempting situation when appropriate. It
          also cautions that recalling urge experiences can itself bring up an urge. If you are unsure about
          doing this alone, pause and complete it with a therapist, doctor, or trusted person.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          Sources: {" "}
          <a href="https://rethinkingdrinking.niaaa.nih.gov/tools/worksheets-more/how-stop-alcohol-cravings" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">
            NIAAA: How to Stop Alcohol Cravings
          </a>{" "}
          and {" "}
          <a href="https://rethinkingdrinking.niaaa.nih.gov/tools/worksheets-more/handling-urges-drink/plan-your-strategies" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">
            NIAAA: Plan Your Strategies
          </a>.
        </p>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          The Six Categories of Triggers
        </h2>
        <div className="space-y-3 mb-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className={`${cat.bgLight} ${cat.bgDark} rounded-xl p-4`}>
              <h3 className={`font-semibold ${cat.textLight} ${cat.textDark} mb-1 flex items-center gap-2`}>
                <span aria-hidden="true">{cat.icon}</span> {cat.label}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {cat.key === "people" && "People you associate with past or current substance use, offers, pressure, or difficult interactions."}
                {cat.key === "places" && "Locations you associate with substance use or an urge to use."}
                {cat.key === "emotional" && "Feelings you notice before or alongside an urge. Emotions alone do not determine behavior."}
                {cat.key === "situational" && "Events or circumstances you associate with an urge or with difficulty following your goals."}
                {cat.key === "time" && "Times, dates, or recurring periods you associate with substance use or an urge."}
                {cat.key === "sensory" && "Sights, sounds, smells, or tastes you associate with substance use or an urge."}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          From identification to a support plan
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          A list can help you prepare questions for a healthcare professional or substance-use counselor.
          General planning ideas may include avoiding a cue when that is safe and practical, preparing a
          refusal or exit option, contacting someone you trust, or choosing another activity.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          These ideas are not personalized recommendations. NIAAA notes that activities like this can be
          used with counseling or therapy and are not substitutes for professional help. If reducing or
          stopping a substance could cause withdrawal, seek medical guidance; do not use this worksheet as
          a withdrawal plan.
        </p>

        {/* internal links */}
        <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-3 uppercase tracking-wider">
            Related Recovery Tools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Recovery Planning Worksheet
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">, Organize support contacts and response ideas</span>
            </li>
            <li>
              <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Urge Surfing Timer
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">, Try a structured mindfulness exercise without a promised outcome</span>
            </li>
            <li>
              <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                HALT Check-In
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">, Reflect on hunger, anger, loneliness, and tiredness</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqData.map((faq) => (
            <details key={faq.question} className="group card p-0 overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer select-none hover:bg-sand-50 dark:hover:bg-night-800 transition-colors">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 text-sm pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="w-4 h-4 text-neutral-400 shrink-0 transition-transform group-open:rotate-180"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {REFLECTION_PROMPTS["trigger-identification-worksheet"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["trigger-identification-worksheet"].prompts}
          toolName={REFLECTION_PROMPTS["trigger-identification-worksheet"].toolName}
        />
      )}

      {/* ─── YMYL FOOTER ──────────────────────────────── */}
      <footer className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        <div className="bg-sand-100 dark:bg-night-800 rounded-xl p-5 border border-sand-200 dark:border-neutral-700">
          <p className="font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Clinical Disclaimer</p>
          <p className="leading-relaxed">
            This worksheet is for educational and self-reflection purposes only. It is not a clinical
            assessment, relapse-risk score, withdrawal plan, treatment plan, or substitute for professional
            counseling. A qualified healthcare professional or substance-use counselor can help you decide
            what support is appropriate for your circumstances.
          </p>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 rounded-xl p-5 border border-crisis-200 dark:border-crisis-800">
          <p className="font-semibold text-crisis-700 dark:text-crisis-300 mb-2">
            Need Help Now?
          </p>
          <ul className="space-y-1 text-crisis-600 dark:text-crisis-400">
            <li><strong>SAMHSA National Helpline:</strong> <a className="underline" href="tel:18006624357">call 1-800-662-4357</a> for treatment information and referrals</li>
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> <a className="underline" href="tel:988">call 988</a> or <a className="underline" href="sms:988">text 988</a></li>
            <li><strong>Crisis Text Line:</strong> <a className="underline" href="sms:741741?body=HOME">text HOME to 741741</a></li>
          </ul>
          <p className="mt-3">
            If you or someone else is in immediate danger, call 911. See all <Link href="/crisis-resources" className="underline font-medium">crisis resources</Link>.
          </p>
        </div>

        <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
          <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            How to discuss recovery concerns with a healthcare professional &rarr;
          </Link>
        </div>

        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
          This tool uses browser-local state. Entries are not intentionally sent to MindCheck Tools.
          Copies, device or browser sync, backups, and shared-device access are outside this boundary.
        </p>
      </footer>
    </div>
  );
}
