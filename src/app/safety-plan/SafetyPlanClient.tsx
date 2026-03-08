"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Crisis contacts (always visible) ────────────────── */

function CrisisBar() {
  return (
    <div className="bg-crisis-50 dark:bg-crisis-950/40 border border-crisis-200 dark:border-crisis-800 rounded-xl p-4 mb-6">
      <p className="text-sm font-semibold text-crisis-800 dark:text-crisis-200 mb-3 text-center">
        If you are in immediate danger, call 911 or go to your nearest emergency room.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
        <div className="bg-white/70 dark:bg-crisis-900/40 rounded-lg p-3">
          <p className="text-sm font-bold text-crisis-800 dark:text-crisis-200">988 Suicide &amp; Crisis Lifeline</p>
          <p className="text-xs text-crisis-700 dark:text-crisis-300">Call or text <strong>988</strong></p>
          <p className="text-xs text-crisis-600 dark:text-crisis-400">24/7, free &amp; confidential</p>
        </div>
        <div className="bg-white/70 dark:bg-crisis-900/40 rounded-lg p-3">
          <p className="text-sm font-bold text-crisis-800 dark:text-crisis-200">Crisis Text Line</p>
          <p className="text-xs text-crisis-700 dark:text-crisis-300">Text <strong>HOME</strong> to <strong>741741</strong></p>
          <p className="text-xs text-crisis-600 dark:text-crisis-400">24/7 text-based support</p>
        </div>
        <div className="bg-white/70 dark:bg-crisis-900/40 rounded-lg p-3">
          <p className="text-sm font-bold text-crisis-800 dark:text-crisis-200">Veterans Crisis Line</p>
          <p className="text-xs text-crisis-700 dark:text-crisis-300">Call <strong>1-800-273-8255</strong>, Press 1</p>
          <p className="text-xs text-crisis-600 dark:text-crisis-400">Or text 838255</p>
        </div>
      </div>
    </div>
  );
}

/* ── Suggestion chips ────────────────────────────────── */

const COPING_SUGGESTIONS = [
  "Go for a walk",
  "Listen to music",
  "Take a shower",
  "Deep breathing",
  "Watch a favorite show",
  "Write in a journal",
  "Pet an animal",
  "Exercise",
  "Cook or bake something",
  "Draw or create art",
  "Clean or organize",
  "Read a book",
];

const WARNING_SIGN_SUGGESTIONS = [
  "Feeling hopeless",
  "Thinking \"no one cares\"",
  "Not sleeping",
  "Withdrawing from people",
  "Increased substance use",
  "Giving things away",
  "Feeling like a burden",
  "Sudden calmness after depression",
];

const ENVIRONMENT_OPTIONS = [
  "I have asked someone I trust to hold onto items that concern me",
  "I have secured medications in a locked location or given them to someone",
  "I have identified a safe place I can go if I need to leave my environment",
  "I have removed or limited access to things I could use to harm myself",
];

/* ── Types ────────────────────────────────────────────── */

interface ContactEntry {
  name: string;
  phone: string;
}

interface PlanData {
  warningSigns: string[];
  copingStrategies: string[];
  distractionPeople: ContactEntry[];
  helpPeople: ContactEntry[];
  professionals: ContactEntry[];
  environmentSteps: string[];
  environmentNotes: string;
  reasonsToLive: string;
}

interface Props {
  faqData: { question: string; answer: string }[];
}

type AppStep = 1 | 2 | 3 | 4 | 5 | 6 | "review";

const STEP_TITLES = [
  "Warning Signs",
  "Internal Coping Strategies",
  "People & Places for Distraction",
  "People I Can Ask for Help",
  "Professionals & Crisis Contacts",
  "Making My Environment Safer",
];

/* ── Helpers ──────────────────────────────────────────── */

const STORAGE_KEY = "mct-safety-plan";

function loadPlan(): PlanData {
  if (typeof window === "undefined") return defaultPlan();
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return defaultPlan();
}

function defaultPlan(): PlanData {
  return {
    warningSigns: ["", "", ""],
    copingStrategies: ["", "", ""],
    distractionPeople: [
      { name: "", phone: "" },
      { name: "", phone: "" },
      { name: "", phone: "" },
    ],
    helpPeople: [
      { name: "", phone: "" },
      { name: "", phone: "" },
      { name: "", phone: "" },
    ],
    professionals: [
      { name: "988 Suicide & Crisis Lifeline", phone: "988" },
      { name: "Crisis Text Line", phone: "Text HOME to 741741" },
      { name: "Veterans Crisis Line", phone: "1-800-273-8255 (Press 1)" },
      { name: "", phone: "" },
      { name: "", phone: "" },
    ],
    environmentSteps: [],
    environmentNotes: "",
    reasonsToLive: "",
  };
}

/* ── Component ────────────────────────────────────────── */

export function SafetyPlanClient({ faqData }: Props) {
  const [plan, setPlan] = useState<PlanData>(defaultPlan);
  const [step, setStep] = useState<AppStep>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setPlan(loadPlan());
    setLoaded(true);
  }, []);

  // Auto-save
  const savePlan = useCallback((data: PlanData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (loaded) savePlan(plan);
  }, [plan, loaded, savePlan]);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  /* ── Update helpers ────────────────────────────────── */

  function updateStringList(field: "warningSigns" | "copingStrategies", index: number, value: string) {
    setPlan((prev) => {
      const next = { ...prev, [field]: [...prev[field]] };
      next[field][index] = value;
      return next;
    });
  }

  function addStringEntry(field: "warningSigns" | "copingStrategies") {
    setPlan((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  }

  function updateContact(field: "distractionPeople" | "helpPeople" | "professionals", index: number, key: "name" | "phone", value: string) {
    setPlan((prev) => {
      const next = { ...prev, [field]: prev[field].map((c, i) => (i === index ? { ...c, [key]: value } : c)) };
      return next;
    });
  }

  function addContact(field: "distractionPeople" | "helpPeople" | "professionals") {
    setPlan((prev) => ({ ...prev, [field]: [...prev[field], { name: "", phone: "" }] }));
  }

  function toggleEnvironmentStep(step: string) {
    setPlan((prev) => {
      const steps = prev.environmentSteps.includes(step)
        ? prev.environmentSteps.filter((s) => s !== step)
        : [...prev.environmentSteps, step];
      return { ...prev, environmentSteps: steps };
    });
  }

  function addSuggestion(field: "warningSigns" | "copingStrategies", suggestion: string) {
    setPlan((prev) => {
      const list = prev[field];
      const emptyIndex = list.findIndex((s) => s.trim() === "");
      if (emptyIndex >= 0) {
        const next = [...list];
        next[emptyIndex] = suggestion;
        return { ...prev, [field]: next };
      }
      return { ...prev, [field]: [...list, suggestion] };
    });
  }

  function handlePrint() {
    window.print();
  }

  function handleClearPlan() {
    const fresh = defaultPlan();
    setPlan(fresh);
    setStep(1);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  }

  const numericStep = typeof step === "number" ? step : 7;

  /* ── Step indicator ────────────────────────────────── */

  function StepIndicator() {
    return (
      <div className="mb-6">
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
          {STEP_TITLES.map((_, i) => {
            const sNum = i + 1;
            const done = numericStep > sNum;
            const active = numericStep === sNum;
            return (
              <div key={i} className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setStep(sNum as AppStep)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    done
                      ? "bg-sage-600 text-white"
                      : active
                      ? "bg-sage-600 text-white ring-2 ring-offset-2 ring-sage-400 dark:ring-offset-night-800"
                      : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-sand-300 dark:hover:bg-neutral-600"
                  }`}
                  aria-label={`Step ${sNum}: ${STEP_TITLES[i]}`}
                >
                  {done ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    sNum
                  )}
                </button>
                {i < 5 && (
                  <div className={`w-4 sm:w-8 h-0.5 ${done ? "bg-sage-400 dark:bg-sage-600" : "bg-sand-200 dark:bg-neutral-700"}`} />
                )}
              </div>
            );
          })}
        </div>
        {typeof step === "number" && (
          <p className="text-center text-sm font-medium text-sage-700 dark:text-sage-400">
            Step {step}: {STEP_TITLES[step - 1]}
          </p>
        )}
      </div>
    );
  }

  /* ── Navigation ────────────────────────────────────── */

  function NavButtons({ backTo, nextTo, nextLabel }: { backTo?: AppStep; nextTo: AppStep; nextLabel?: string }) {
    return (
      <div className="flex items-center justify-between mt-6">
        {backTo ? (
          <button
            onClick={() => setStep(backTo)}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
          >
            Back
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={() => setStep(nextTo)}
          className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-sage-600 hover:bg-sage-700 text-white transition-colors"
        >
          {nextLabel || "Next Step"}
        </button>
      </div>
    );
  }

  /* ── Render ────────────────────────────────────────── */

  if (!loaded) return null; // prevent flash before localStorage loads

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 text-center">
        Safety Plan
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-6">
        Having a plan can help you get through a crisis. This tool walks you through the 6 steps
        of a safety plan so you have it ready when you need it most. <strong>You matter, and you
        deserve support.</strong>
      </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

      <CrisisBar />

      <AdSlot position="above-tool" />

      {/* ── Tool Card ── */}
      <div className="bg-white dark:bg-night-800 rounded-2xl shadow-lg border border-sand-200 dark:border-neutral-700 p-6 sm:p-8 mb-8 print:shadow-none print:border-0 print:p-0">

        {step !== "review" && <StepIndicator />}

        {/* ── Step 1: Warning Signs ── */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Step 1: My Warning Signs
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                What thoughts, feelings, moods, images, or situations tell you that a crisis may be developing?
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                Recognizing these early can help you use your plan before things escalate.
              </p>
            </div>

            {/* Suggestion chips */}
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">Common warning signs (tap to add):</p>
              <div className="flex flex-wrap gap-2">
                {WARNING_SIGN_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => addSuggestion("warningSigns", s)}
                    className="px-3 py-1.5 rounded-full text-xs bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 border border-sand-200 dark:border-neutral-600 hover:border-sage-400 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors"
                  >
                    + {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {plan.warningSigns.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  onChange={(e) => updateStringList("warningSigns", i, e.target.value)}
                  placeholder={`Warning sign ${i + 1}`}
                  className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                  aria-label={`Warning sign ${i + 1}`}
                />
              ))}
              <button
                onClick={() => addStringEntry("warningSigns")}
                className="text-sm text-sage-600 dark:text-sage-400 hover:underline"
              >
                + Add another
              </button>
            </div>

            <NavButtons nextTo={2} />
          </div>
        )}

        {/* ── Step 2: Internal Coping Strategies ── */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Step 2: Things I Can Do on My Own
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                Activities that help take your mind off problems — things you can do alone, without contacting another person.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                These don&apos;t have to solve the problem. They just need to get you through the moment.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">Ideas (tap to add):</p>
              <div className="flex flex-wrap gap-2">
                {COPING_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => addSuggestion("copingStrategies", s)}
                    className="px-3 py-1.5 rounded-full text-xs bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 border border-sand-200 dark:border-neutral-600 hover:border-sage-400 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors"
                  >
                    + {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {plan.copingStrategies.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  onChange={(e) => updateStringList("copingStrategies", i, e.target.value)}
                  placeholder={`Coping strategy ${i + 1}`}
                  className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                  aria-label={`Coping strategy ${i + 1}`}
                />
              ))}
              <button
                onClick={() => addStringEntry("copingStrategies")}
                className="text-sm text-sage-600 dark:text-sage-400 hover:underline"
              >
                + Add another
              </button>
            </div>

            <NavButtons backTo={1} nextTo={3} />
          </div>
        )}

        {/* ── Step 3: People & Places for Distraction ── */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Step 3: People and Places That Help Distract Me
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                People you can be around or places you can go that help take your mind off things.
                You don&apos;t have to tell them what you&apos;re going through — their presence alone can help.
              </p>
            </div>

            <div className="space-y-4">
              {plan.distractionPeople.map((entry, i) => (
                <div key={i} className="flex gap-3">
                  <input
                    type="text"
                    value={entry.name}
                    onChange={(e) => updateContact("distractionPeople", i, "name", e.target.value)}
                    placeholder={`Person or place ${i + 1}`}
                    className="flex-1 px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                    aria-label={`Distraction person or place ${i + 1}`}
                  />
                  <input
                    type="tel"
                    value={entry.phone}
                    onChange={(e) => updateContact("distractionPeople", i, "phone", e.target.value)}
                    placeholder="Phone (optional)"
                    className="w-40 px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                    aria-label={`Phone for distraction contact ${i + 1}`}
                  />
                </div>
              ))}
              <button
                onClick={() => addContact("distractionPeople")}
                className="text-sm text-sage-600 dark:text-sage-400 hover:underline"
              >
                + Add another
              </button>
            </div>

            <NavButtons backTo={2} nextTo={4} />
          </div>
        )}

        {/* ── Step 4: People I Can Ask for Help ── */}
        {step === 4 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Step 4: People I Can Tell I&apos;m in Crisis
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                People you trust enough to tell that you&apos;re struggling. These are people who will listen and help — a friend, family member, sponsor, faith leader, or anyone you feel safe with.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                Reaching out is a sign of strength, not weakness.
              </p>
            </div>

            <div className="space-y-4">
              {plan.helpPeople.map((entry, i) => (
                <div key={i} className="flex gap-3">
                  <input
                    type="text"
                    value={entry.name}
                    onChange={(e) => updateContact("helpPeople", i, "name", e.target.value)}
                    placeholder={`Name ${i + 1}`}
                    className="flex-1 px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                    aria-label={`Help contact name ${i + 1}`}
                  />
                  <input
                    type="tel"
                    value={entry.phone}
                    onChange={(e) => updateContact("helpPeople", i, "phone", e.target.value)}
                    placeholder="Phone number"
                    className="w-40 px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                    aria-label={`Help contact phone ${i + 1}`}
                  />
                </div>
              ))}
              <button
                onClick={() => addContact("helpPeople")}
                className="text-sm text-sage-600 dark:text-sage-400 hover:underline"
              >
                + Add another
              </button>
            </div>

            <NavButtons backTo={3} nextTo={5} />
          </div>
        )}

        {/* ── Step 5: Professionals & Crisis Contacts ── */}
        {step === 5 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Step 5: Professionals and Crisis Lines I Can Contact
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                The crisis lines below are already included. Add your therapist, doctor, local crisis center, or anyone else who can provide professional support.
              </p>
            </div>

            <div className="space-y-4">
              {plan.professionals.map((entry, i) => {
                const isPreset = i < 3;
                return (
                  <div key={i} className={`flex gap-3 ${isPreset ? "opacity-90" : ""}`}>
                    <input
                      type="text"
                      value={entry.name}
                      onChange={(e) => updateContact("professionals", i, "name", e.target.value)}
                      placeholder={i === 3 ? "My therapist / counselor" : i === 4 ? "My doctor / psychiatrist" : `Professional ${i + 1}`}
                      className={`flex-1 px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-sage-400 ${
                        isPreset
                          ? "border-crisis-200 dark:border-crisis-800 bg-crisis-50/50 dark:bg-crisis-950/20 text-crisis-800 dark:text-crisis-200 font-medium"
                          : "border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
                      }`}
                      aria-label={`Professional contact name ${i + 1}`}
                    />
                    <input
                      type="tel"
                      value={entry.phone}
                      onChange={(e) => updateContact("professionals", i, "phone", e.target.value)}
                      placeholder="Phone number"
                      className={`w-48 sm:w-56 px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-sage-400 ${
                        isPreset
                          ? "border-crisis-200 dark:border-crisis-800 bg-crisis-50/50 dark:bg-crisis-950/20 text-crisis-800 dark:text-crisis-200 font-medium"
                          : "border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
                      }`}
                      aria-label={`Professional contact phone ${i + 1}`}
                    />
                  </div>
                );
              })}
              <button
                onClick={() => addContact("professionals")}
                className="text-sm text-sage-600 dark:text-sage-400 hover:underline"
              >
                + Add another
              </button>
            </div>

            <NavButtons backTo={4} nextTo={6} />
          </div>
        )}

        {/* ── Step 6: Making My Environment Safer ── */}
        {step === 6 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Step 6: Making My Environment Safer
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                One of the most effective things you can do during a difficult time is to put distance
                between yourself and anything that could be used for self-harm. Even small steps make
                a real difference.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                You do not have to do all of these. Even one step can help keep you safe.
              </p>
            </div>

            <div className="space-y-3">
              {ENVIRONMENT_OPTIONS.map((option) => (
                <label
                  key={option}
                  className={`flex items-start gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                    plan.environmentSteps.includes(option)
                      ? "border-sage-500 dark:border-sage-500 bg-sage-50/50 dark:bg-sage-950/20"
                      : "border-sand-200 dark:border-neutral-700 hover:border-sand-300 dark:hover:border-neutral-600"
                  }`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                    plan.environmentSteps.includes(option)
                      ? "bg-sage-600 border-sage-600"
                      : "border-neutral-300 dark:border-neutral-600"
                  }`}>
                    {plan.environmentSteps.includes(option) && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    checked={plan.environmentSteps.includes(option)}
                    onChange={() => toggleEnvironmentStep(option)}
                    className="sr-only"
                  />
                  <span className="text-sm text-neutral-700 dark:text-neutral-200">{option}</span>
                </label>
              ))}
            </div>

            <div>
              <label htmlFor="env-notes" className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                Other steps I can take:
              </label>
              <textarea
                id="env-notes"
                value={plan.environmentNotes}
                onChange={(e) => setPlan((prev) => ({ ...prev, environmentNotes: e.target.value }))}
                rows={3}
                placeholder="Any other steps that would help make your environment safer..."
                className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 resize-none"
              />
            </div>

            {/* Reasons to live */}
            <div className="bg-sage-50/50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-5">
              <label htmlFor="reasons" className="block text-sm font-semibold text-sage-800 dark:text-sage-300 mb-1">
                My reasons for living
              </label>
              <p className="text-xs text-sage-600 dark:text-sage-400 mb-3">
                What matters most to you? People, pets, goals, hopes — anything worth holding onto.
              </p>
              <textarea
                id="reasons"
                value={plan.reasonsToLive}
                onChange={(e) => setPlan((prev) => ({ ...prev, reasonsToLive: e.target.value }))}
                rows={3}
                placeholder="My children, my dog, finishing school, seeing my niece grow up..."
                className="w-full px-4 py-3 rounded-xl border border-sage-200 dark:border-sage-700 bg-white dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 resize-none"
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setStep(5)}
                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep("review")}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-sage-600 hover:bg-sage-700 text-white transition-colors"
              >
                Review My Plan
              </button>
            </div>
          </div>
        )}

        {/* ── Review / Print ── */}
        {step === "review" && (
          <div className="space-y-6 print:space-y-4" id="safety-plan-printable">
            <div className="text-center print:text-left">
              <h2 className="text-2xl font-serif font-bold text-sage-700 dark:text-sage-400 mb-2 print:text-black">
                My Safety Plan
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                Keep this somewhere you can easily find it. Share it with someone you trust.
              </p>
            </div>

            {/* Step summaries */}
            {[
              { title: "Step 1: My Warning Signs", items: plan.warningSigns.filter((s) => s.trim()) },
              { title: "Step 2: Things I Can Do on My Own", items: plan.copingStrategies.filter((s) => s.trim()) },
            ].map(({ title, items }) => (
              <div key={title} className="border border-sand-200 dark:border-neutral-700 rounded-xl p-4 print:border-neutral-300">
                <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-200 mb-2 print:text-black">{title}</h3>
                {items.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                ) : (
                  <p className="text-sm text-neutral-400 italic">Not filled in yet</p>
                )}
              </div>
            ))}

            {[
              { title: "Step 3: People & Places for Distraction", contacts: plan.distractionPeople },
              { title: "Step 4: People I Can Ask for Help", contacts: plan.helpPeople },
              { title: "Step 5: Professionals & Crisis Contacts", contacts: plan.professionals },
            ].map(({ title, contacts }) => {
              const filled = contacts.filter((c) => c.name.trim());
              return (
                <div key={title} className="border border-sand-200 dark:border-neutral-700 rounded-xl p-4 print:border-neutral-300">
                  <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-200 mb-2 print:text-black">{title}</h3>
                  {filled.length > 0 ? (
                    <div className="space-y-1.5">
                      {filled.map((c, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-neutral-700 dark:text-neutral-200 print:text-black">{c.name}</span>
                          {c.phone && <span className="text-neutral-500 dark:text-neutral-400 font-mono text-xs print:text-neutral-700">{c.phone}</span>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-neutral-400 italic">Not filled in yet</p>
                  )}
                </div>
              );
            })}

            <div className="border border-sand-200 dark:border-neutral-700 rounded-xl p-4 print:border-neutral-300">
              <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-200 mb-2 print:text-black">Step 6: Making My Environment Safer</h3>
              {plan.environmentSteps.length > 0 || plan.environmentNotes.trim() ? (
                <div className="space-y-1">
                  {plan.environmentSteps.map((s, i) => (
                    <p key={i} className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2 print:text-neutral-700">
                      <svg className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {s}
                    </p>
                  ))}
                  {plan.environmentNotes.trim() && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 print:text-neutral-700">{plan.environmentNotes}</p>
                  )}
                </div>
              ) : (
                <p className="text-sm text-neutral-400 italic">Not filled in yet</p>
              )}
            </div>

            {plan.reasonsToLive.trim() && (
              <div className="bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4 print:bg-white print:border-neutral-300">
                <h3 className="text-sm font-bold text-sage-800 dark:text-sage-300 mb-1 print:text-black">My Reasons for Living</h3>
                <p className="text-sm text-sage-700 dark:text-sage-400 print:text-neutral-700">{plan.reasonsToLive}</p>
              </div>
            )}

            {/* Print crisis numbers */}
            <div className="border-2 border-crisis-300 dark:border-crisis-700 rounded-xl p-4 text-center print:border-black">
              <p className="text-sm font-bold text-crisis-800 dark:text-crisis-200 mb-1 print:text-black">Emergency: 911</p>
              <p className="text-sm text-crisis-700 dark:text-crisis-300 print:text-neutral-700">
                988 Suicide &amp; Crisis Lifeline: <strong>988</strong> | Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong> | Veterans: <strong>1-800-273-8255</strong> (Press 1)
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 justify-center print:hidden">
              <button
                onClick={handlePrint}
                className="px-6 py-2.5 rounded-xl bg-sage-600 text-white font-medium text-sm hover:bg-sage-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print My Plan
              </button>
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
              >
                Edit Plan
              </button>
              <button
                onClick={handleClearPlan}
                className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
              >
                Start Over
              </button>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center print:hidden">
              Your plan is automatically saved in your browser. It will be here when you come back.
            </p>
          </div>
        )}
      </div>

      <div className="print:hidden">
        <AdSlot position="below-tool" />

        {/* ── How to Use ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            How to Use This Safety Planning Tool
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <li><strong>Work through each step</strong> — Go at your own pace. You can jump between steps using the step indicator.</li>
            <li><strong>Be specific</strong> — Names, phone numbers, and concrete actions are more helpful during a crisis than vague ideas.</li>
            <li><strong>Fill in what you can</strong> — Not every field needs to be filled. Even a partially completed plan is valuable.</li>
            <li><strong>Print your plan</strong> — Keep a paper copy in your wallet, on your fridge, or next to your bed. Give a copy to someone you trust.</li>
            <li><strong>Your plan auto-saves</strong> — It is stored in your browser so you can come back and update it anytime.</li>
            <li><strong>Review and update regularly</strong> — Your plan should evolve as your life changes. Update it with your therapist or on your own.</li>
          </ol>
        </section>

        {/* ── Educational Content ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            About the Safety Planning Model
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
            <p>
              This tool is based on the <strong>Stanley-Brown Safety Planning Intervention</strong>, developed by Dr. Barbara Stanley and Dr. Gregory Brown. It is one of the most widely used and evidence-based approaches to suicide prevention in the world. The Safety Planning Intervention is recommended by the <strong>Suicide Prevention Resource Center (SPRC)</strong>, the <strong>U.S. Department of Veterans Affairs</strong>, the <strong>Joint Commission</strong>, and the <strong>National Action Alliance for Suicide Prevention</strong>.
            </p>
            <p>
              A safety plan is different from a &quot;no-suicide contract&quot; or &quot;safety contract.&quot; Research has shown that no-suicide contracts are <strong>not effective</strong> at preventing suicide, while safety plans <strong>are</strong>. A 2012 study by Stanley and Brown published in the <em>American Journal of Preventive Medicine</em> found that the Safety Planning Intervention, combined with follow-up contact, reduced suicidal behavior by approximately 45% compared to usual care.
            </p>
            <p>
              The plan is structured as a series of steps to follow in order during a crisis. The idea is to start with the simplest coping strategies (things you can do alone) and escalate to more intensive support (calling a professional or going to an emergency room) only if earlier steps are not enough. This graduated approach gives you multiple opportunities to interrupt a crisis before it escalates.
            </p>

            <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
              Why Safety Plans Work
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>They interrupt the crisis spiral</strong> — Suicidal crises are often time-limited. Having a concrete plan provides a path through the worst moments.</li>
              <li><strong>They reduce impulsivity</strong> — Most suicide attempts involve some degree of impulsivity. A plan creates a pause between the impulse and the action.</li>
              <li><strong>They connect you to support</strong> — Having names and numbers written down removes the barrier of having to think of who to call during a crisis.</li>
              <li><strong>They are personalized</strong> — Unlike generic advice, your safety plan reflects your specific warning signs, coping strategies, and support network.</li>
              <li><strong>Means restriction saves lives</strong> — Research consistently shows that reducing access to lethal means during a crisis is one of the single most effective suicide prevention strategies.</li>
            </ul>

            <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
              When to Use Your Safety Plan
            </h3>
            <p>
              Use your safety plan <strong>as soon as you notice your warning signs</strong> — the thoughts, feelings, or situations you identified in Step 1. Do not wait until you are in full crisis. The earlier you start working through your plan, the more effective it will be. Start with Step 2 (internal coping) and work your way through the steps in order until you feel safer.
            </p>
          </div>
        </section>

        <AdSlot position="in-content" />

        {/* ── FAQ ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <div key={i} className="border border-sand-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-sand-50 dark:hover:bg-night-700 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-200 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {REFLECTION_PROMPTS["safety-plan"] && (
          <ReflectionPrompts
            prompts={REFLECTION_PROMPTS["safety-plan"].prompts}
            toolName={REFLECTION_PROMPTS["safety-plan"].toolName}
          />
        )}

        {/* ── Related Tools ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { href: "/box-breathing-exercise", label: "Box Breathing Exercise", desc: "Visual guided breathing for calm" },
              { href: "/five-senses-grounding", label: "5-4-3-2-1 Grounding", desc: "Sensory grounding for anxiety" },
              { href: "/crisis-resources", label: "Crisis Resources", desc: "Full list of helplines & resources" },
              { href: "/coping-skills-randomizer", label: "Coping Skills Randomizer", desc: "Random healthy coping strategy" },
              { href: "/halt-check-in", label: "HALT Check-In", desc: "Hungry, Angry, Lonely, Tired" },
              { href: "/urge-surfing-timer", label: "Urge Surfing Timer", desc: "Guided craving mindfulness tool" },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block p-4 rounded-xl border border-sand-200 dark:border-neutral-700 hover:border-sage-400 dark:hover:border-sage-600 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors"
              >
                <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-200">{tool.label}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Enhanced Crisis Resources ── */}
        <section className="mb-8">
          <div className="bg-crisis-50 dark:bg-crisis-950/40 border-2 border-crisis-300 dark:border-crisis-700 rounded-xl p-6">
            <h2 className="text-lg font-serif font-bold text-crisis-800 dark:text-crisis-200 mb-4 text-center">
              You Are Not Alone — Crisis Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white/70 dark:bg-crisis-900/40 rounded-lg p-4">
                <p className="text-sm font-bold text-crisis-800 dark:text-crisis-200">988 Suicide &amp; Crisis Lifeline</p>
                <p className="text-sm text-crisis-700 dark:text-crisis-300">Call or text <strong>988</strong></p>
                <p className="text-xs text-crisis-600 dark:text-crisis-400">24/7, free &amp; confidential. For anyone in suicidal crisis or emotional distress.</p>
              </div>
              <div className="bg-white/70 dark:bg-crisis-900/40 rounded-lg p-4">
                <p className="text-sm font-bold text-crisis-800 dark:text-crisis-200">Crisis Text Line</p>
                <p className="text-sm text-crisis-700 dark:text-crisis-300">Text <strong>HOME</strong> to <strong>741741</strong></p>
                <p className="text-xs text-crisis-600 dark:text-crisis-400">24/7 text-based crisis support. You&apos;ll be connected to a trained crisis counselor.</p>
              </div>
              <div className="bg-white/70 dark:bg-crisis-900/40 rounded-lg p-4">
                <p className="text-sm font-bold text-crisis-800 dark:text-crisis-200">Veterans Crisis Line</p>
                <p className="text-sm text-crisis-700 dark:text-crisis-300">Call <strong>1-800-273-8255</strong>, Press 1</p>
                <p className="text-xs text-crisis-600 dark:text-crisis-400">Or text 838255. For veterans, service members, and their families.</p>
              </div>
              <div className="bg-white/70 dark:bg-crisis-900/40 rounded-lg p-4">
                <p className="text-sm font-bold text-crisis-800 dark:text-crisis-200">SAMHSA National Helpline</p>
                <p className="text-sm text-crisis-700 dark:text-crisis-300">Call <strong>1-800-662-4357</strong></p>
                <p className="text-xs text-crisis-600 dark:text-crisis-400">24/7 treatment referral and information. Free, confidential, in English and Spanish.</p>
              </div>
            </div>
            <p className="text-sm text-crisis-700 dark:text-crisis-300 text-center">
              <Link href="/crisis-resources" className="underline hover:text-crisis-900 dark:hover:text-crisis-100 font-medium">
                View all crisis resources and international helplines &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <section className="mb-8">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Important Disclaimer
            </h2>
            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
              This safety planning tool is based on an evidence-based model and is provided for educational and self-help purposes. It is <strong>not a substitute</strong> for professional crisis intervention, therapy, or emergency services. If you are in immediate danger, call <strong>911</strong> or go to your nearest emergency room. If you are having thoughts of suicide, please reach out to the <strong>988 Suicide &amp; Crisis Lifeline</strong> (call or text 988) or the <strong>Crisis Text Line</strong> (text HOME to 741741). You deserve support from a real person who cares.
            </p>
          </div>
        </section>

        <div className="text-center mb-6">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Your privacy matters. Your safety plan is stored only in your browser&apos;s local storage on this device. Nothing is sent to any server, collected, or shared with anyone.
          </p>
        </div>

        <ToolReviewerBio />

        {/* ── Authoritative Sources ── */}
        <section className="mt-8 mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
            Authoritative Sources
          </h2>
          <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
            <li>
              <a href="https://suicidepreventionlifeline.org/" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
                988 Suicide &amp; Crisis Lifeline
              </a>
            </li>
            <li>
              <a href="https://www.sprc.org/resources-programs/patient-safety-plan-template" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
                Suicide Prevention Resource Center — Safety Plan Template
              </a>
            </li>
            <li>
              <a href="https://www.va.gov/ve/safetyplan.asp" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
                U.S. Department of Veterans Affairs — Safety Planning
              </a>
            </li>
            <li>
              <a href="https://www.hsph.harvard.edu/means-matter/" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
                Harvard T.H. Chan School of Public Health — Means Matter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
