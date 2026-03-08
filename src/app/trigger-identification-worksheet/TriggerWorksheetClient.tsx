"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

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
      "Set a clear boundary before interacting with this person.",
      "Practice saying \u201Cno\u201D in advance \u2014 rehearse the exact words you will use.",
      "Bring a sober support person when you know you will see them.",
      "Have an exit plan ready: know how you will leave if a craving starts.",
      "Limit contact to phone or text instead of in-person meetings.",
      "Ask your sponsor or therapist for help navigating this relationship.",
      "Remember: you can love someone and still protect your recovery by keeping distance.",
      "Tell a trusted person you are about to see this trigger person so they can check in on you after.",
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
      "Avoid this location entirely if possible \u2014 take a different route.",
      "If you must go, bring a sober support person with you.",
      "Set a time limit: decide in advance how long you will stay and stick to it.",
      "Have a specific exit plan: know where the door is and have a ride ready.",
      "Replace this location with a new one \u2014 find a new coffee shop, gym, or hangout.",
      "If you drive past it regularly, plan an alternate route even if it takes longer.",
      "Call someone from your support network before and after visiting this place.",
      "Remind yourself why you stopped going there \u2014 write it on a card you carry.",
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
      "Use urge surfing: observe the emotion like a wave \u2014 it will rise, peak, and pass.",
      "Practice box breathing: 4 seconds in, hold 4, out 4, hold 4.",
      "Call someone from your support network and tell them how you feel.",
      "Write in a journal: name the emotion and describe it without judgment.",
      "Go for a walk or do physical activity \u2014 movement changes brain chemistry.",
      "Use the 5-4-3-2-1 grounding technique to bring yourself to the present moment.",
      "Remind yourself: the emotion is real, but the craving is not a command.",
      "Ask: what do I actually need right now? Often the answer is not a substance.",
      "Do something kind for yourself \u2014 a warm drink, a shower, a favorite show.",
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
      "Plan ahead: if you know this situation is coming, rehearse your response.",
      "Have a prepared phrase for being offered substances: \u201CNo thanks, I\u2019m good.\u201D",
      "Automate your money on paydays: set up auto-transfers to savings before you can spend.",
      "Build structure into unstructured time \u2014 schedule activities in advance.",
      "Call your sponsor or a support person before the situation, not just after.",
      "Keep your relapse prevention plan accessible \u2014 on your phone or in your wallet.",
      "Identify one safe person you can text a code word when you feel triggered.",
      "Leave early. You do not owe anyone an explanation for protecting your recovery.",
      "After the situation passes, acknowledge that you got through it. That matters.",
      "Debrief with your therapist or sponsor \u2014 what worked, what was hard, what to do differently next time.",
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
      "Schedule a specific activity during this time every week \u2014 fill the void before it appears.",
      "Build a new routine: replace the old habit with a healthy one at the same time.",
      "Plan a support check-in call during your vulnerable times.",
      "Go to a meeting, group, or social activity during this time slot.",
      "Change your environment during vulnerable times: go to a library, gym, or coffee shop.",
      "Set a phone reminder to check in with yourself during trigger times.",
      "Create a \u201CFriday night plan\u201D or \u201Choliday plan\u201D in advance so you are never caught unprepared.",
      "If bedtime is a trigger, develop a wind-down routine: no screens, herbal tea, reading, breathing.",
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
      "Use the 5-4-3-2-1 grounding technique: name 5 things you see, 4 you hear, 3 you touch, 2 you smell, 1 you taste.",
      "Change your environment immediately \u2014 walk to a different room or go outside.",
      "Replace the sensory association: listen to new music, find new scents you enjoy.",
      "Mute, skip, or block alcohol and drug advertisements on social media and streaming services.",
      "Carry something with a strong, pleasant scent (essential oil, mint) to redirect your senses.",
      "Practice urge surfing: notice the sensory trigger, observe the craving, let it pass.",
      "Tell someone nearby what you are experiencing: \u201CI just got hit by a craving.\u201D",
      "Remind yourself: the trigger is a cue, not a command. You can notice it without obeying it.",
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
    setTimeout(() => profileRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
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

  const handlePrint = () => window.print();

  const handleShare = async () => {
    const text = `I identified ${totalSelected} personal triggers across 6 categories using the Trigger Identification Worksheet on MindCheck Tools.`;
    if (navigator.share) {
      try { await navigator.share({ title: "Trigger Identification Worksheet", text, url: window.location.href }); } catch {}
    } else {
      try { await navigator.clipboard.writeText(`${text}\n${window.location.href}`); alert("Copied to clipboard!"); } catch {}
    }
  };

  /* ── render ──────────────────────────────────────────── */

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* H1 */}
      <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3 text-center">
        Trigger Identification Worksheet
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-center max-w-xl mx-auto mb-2 leading-relaxed">
        Identify your personal triggers across six categories. Check off the ones that apply to you,
        add your own, and get a personalized trigger profile with coping strategies.
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mb-8">
        Your answers stay in your browser and are never stored or sent anywhere.
      </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

      <AdSlot position="triggers-top" />

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
                        className={`flex items-start gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors ${
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
                          className={`flex items-start gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors ${
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
                      value={customInput[cat.key]}
                      onChange={(e) => setCustomInput((prev) => ({ ...prev, [cat.key]: e.target.value }))}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addCustom(cat.key); } }}
                      placeholder="Add a custom trigger\u2026"
                      className="flex-1 px-3 py-2 rounded-lg border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-500"
                      maxLength={80}
                    />
                    <button
                      onClick={() => addCustom(cat.key)}
                      disabled={!customInput[cat.key].trim()}
                      className="px-4 py-2 rounded-lg bg-sand-200 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-300 dark:hover:bg-night-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
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
              Generate My Trigger Profile
            </button>
            {totalSelected === 0 && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                Select at least one trigger to generate your profile.
              </p>
            )}
          </div>
        </section>
      )}

      {/* ─── TRIGGER PROFILE ───────────────────────────── */}
      {showProfile && (
        <div ref={profileRef}>
          <section className="card p-6 sm:p-8 mb-6 print:shadow-none print:border-0" aria-label="Your trigger profile" aria-live="polite">
            <div className="text-center mb-6">
              <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Your Trigger Profile
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {totalSelected} trigger{totalSelected !== 1 ? "s" : ""} identified &middot; Generated {new Date().toLocaleDateString()}
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
                          <span><strong className="text-sage-700 dark:text-sage-400">Coping:</strong> {getCopingForTrigger(cat, idx)}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* actions */}
            <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-sand-200 dark:border-neutral-700 mt-8 print:hidden">
              <button onClick={handlePrint} className="px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors">
                Print Profile
              </button>
              <button onClick={handleShare} className="px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors">
                Share Profile
              </button>
              <button onClick={handleEdit} className="px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors">
                Edit Triggers
              </button>
              <button onClick={handleReset} className="px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors">
                Start Over
              </button>
            </div>
          </section>

          {/* next step callout */}
          <div className="bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl p-5 mb-8 text-center print:hidden">
            <p className="font-semibold text-sage-700 dark:text-sage-400 mb-2">
              Next Step: Build Your Relapse Prevention Plan
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3 max-w-md mx-auto leading-relaxed">
              Now that you know your triggers, put them into a written plan with coping strategies,
              emergency contacts, and a craving action plan.
            </p>
            <Link href="/relapse-prevention-plan" className="btn-primary text-sm px-6 py-2">
              Build My Plan
            </Link>
          </div>
        </div>
      )}

      <AdSlot position="triggers-mid" />

      {/* ─── EDUCATIONAL CONTENT ───────────────────────── */}
      <section className="prose-custom mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          What Are Addiction Triggers?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          A <strong>trigger</strong> is any person, place, emotion, situation, time, or sensory experience
          that activates a craving or urge to use substances. Triggers work through <strong>conditioned
          association</strong> — your brain has learned to link certain cues with the reward of using, so
          encountering those cues produces an automatic urge, even if you consciously want to stay sober.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          Triggers are often divided into <strong>external triggers</strong> (people, places, situations,
          sensory cues) and <strong>internal triggers</strong> (emotions, physical states, thought patterns).
          Research published in <em>Drug and Alcohol Dependence</em> found that internal triggers — especially
          negative emotions like stress, anger, and loneliness — are the most common precursors to relapse,
          accounting for the majority of relapse episodes.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          The critical insight is that <strong>you cannot eliminate all triggers</strong> — but you can
          identify them, prepare for them, and develop specific coping responses for each one. This is the
          foundation of evidence-based relapse prevention.
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
                {cat.key === "people" && "Specific individuals whose presence, behavior, or memory triggers cravings. Often the hardest category because it involves relationships you may care about."}
                {cat.key === "places" && "Locations associated with past substance use. Your brain encodes spatial memories strongly, which is why walking past a bar or driving through an old neighborhood can produce powerful cravings."}
                {cat.key === "emotional" && "Internal feeling states that historically led to substance use. Often the most powerful triggers and the hardest to avoid, because you carry them with you everywhere."}
                {cat.key === "situational" && "Specific circumstances or events that create vulnerability. These are often predictable, which means they are plannable."}
                {cat.key === "time" && "Certain days, times, or periods associated with past use. Your brain has an internal clock that can trigger cravings at habitual use times."}
                {cat.key === "sensory" && "Sights, sounds, smells, and tastes that activate craving through sensory memory. Often the most sudden and unexpected type of trigger."}
              </p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          From Identification to Action
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          Identifying your triggers is the first step — but the real value comes from <strong>building a
          specific response plan for each one</strong>. This is what a relapse prevention plan does: it takes
          your trigger list and pairs each trigger with a concrete coping strategy, so that when the trigger
          appears, you already know what to do.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          Research by Marlatt and Gordon found that people who could identify their triggers and had
          pre-planned coping responses were significantly less likely to relapse than those who relied on
          willpower alone. The reason is simple: in the moment of a craving, your brain is flooded with
          urges and it is difficult to think clearly. Having a written plan means you do not need to think —
          you just follow the plan.
        </p>

        {/* internal links */}
        <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-3 uppercase tracking-wider">
            Related Recovery Tools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Relapse Prevention Plan
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Turn your triggers into a written action plan</span>
            </li>
            <li>
              <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Urge Surfing Timer
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Ride out cravings with guided mindfulness</span>
            </li>
            <li>
              <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                HALT Check-In
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Check if hunger, anger, loneliness, or tiredness is driving your craving</span>
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
            assessment or a substitute for professional counseling. Identifying triggers is one component
            of a comprehensive approach to recovery. Always work with a qualified healthcare professional
            or counselor for personalized support.
          </p>
          <ToolReviewerBio />
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 rounded-xl p-5 border border-crisis-200 dark:border-crisis-800">
          <p className="font-semibold text-crisis-700 dark:text-crisis-300 mb-2">
            Need Help Now?
          </p>
          <ul className="space-y-1 text-crisis-600 dark:text-crisis-400">
            <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (free, 24/7)</li>
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text 988</li>
            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          </ul>
        </div>

        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
          This tool runs entirely in your browser. No data is stored, transmitted, or collected.
          Your responses are completely private.
        </p>
      </footer>
    </main>
  );
}
