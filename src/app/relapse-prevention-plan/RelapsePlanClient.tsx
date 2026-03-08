"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Suggestion chips ─────────────────────────────────── */

const TRIGGER_SUGGESTIONS = [
  "Stress at work", "Relationship conflict", "Loneliness", "Boredom",
  "Financial problems", "Social pressure", "Celebrations/parties",
  "Seeing old using friends", "Driving past old spots", "Pain or illness",
  "Anger or frustration", "Anxiety", "Insomnia", "Unstructured time",
];

const ACTIVITY_SUGGESTIONS = [
  "Go for a walk", "Call a friend", "Exercise", "Read a book",
  "Listen to music", "Attend a meeting", "Journal", "Cook a meal",
  "Take a shower", "Meditate", "Play with a pet", "Clean the house",
  "Watch a movie", "Work on a hobby", "Volunteer", "Garden",
];

/* ── Types ────────────────────────────────────────────── */

interface PlanData {
  triggers: string[];
  warningEmotional: string[];
  warningMental: string[];
  warningPhysical: string[];
  warningBehavioral: string[];
  copingStrategies: string[];
  contacts: { role: string; name: string; phone: string }[];
  safeActivities: string[];
  placesToAvoid: string[];
  cravingSteps: string[];
}

const EMPTY_PLAN: PlanData = {
  triggers: ["", "", "", "", ""],
  warningEmotional: ["", ""],
  warningMental: ["", ""],
  warningPhysical: ["", ""],
  warningBehavioral: ["", ""],
  copingStrategies: ["", "", "", "", ""],
  contacts: [
    { role: "Sponsor / Support Person", name: "", phone: "" },
    { role: "Therapist / Counselor", name: "", phone: "" },
    { role: "Trusted Friend / Family", name: "", phone: "" },
  ],
  safeActivities: ["", "", "", "", ""],
  placesToAvoid: ["", "", ""],
  cravingSteps: [
    "Recognize it is a craving — temporary, not a command",
    "Wait 30 minutes before making any decision",
    "",
    "",
    "",
  ],
};

/* ── Helpers ──────────────────────────────────────────── */

function updateArr(arr: string[], idx: number, val: string): string[] {
  const copy = [...arr];
  copy[idx] = val;
  return copy;
}

function addSlot(arr: string[]): string[] {
  return [...arr, ""];
}

function filledCount(arr: string[]): number {
  return arr.filter((s) => s.trim()).length;
}

/* ── Section Components ───────────────────────────────── */

function SectionHeader({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-400 text-xs font-bold">{num}</span>
        <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100">{title}</h2>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 ml-9">{desc}</p>
    </div>
  );
}

function TextInputList({ items, onChange, placeholder, onAdd, maxItems }: {
  items: string[];
  onChange: (idx: number, val: string) => void;
  placeholder: string;
  onAdd?: () => void;
  maxItems?: number;
}) {
  return (
    <div className="space-y-2 ml-9">
      {items.map((item, i) => (
        <input
          key={i}
          type="text"
          value={item}
          onChange={(e) => onChange(i, e.target.value)}
          placeholder={`${placeholder} ${i + 1}`}
          className="w-full px-4 py-2.5 rounded-xl bg-sand-50 dark:bg-night-700 border border-sand-200 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600"
        />
      ))}
      {onAdd && (!maxItems || items.length < maxItems) && (
        <button onClick={onAdd} className="text-xs text-sage-600 dark:text-sage-400 hover:underline ml-1">+ Add another</button>
      )}
    </div>
  );
}

function ChipSuggestions({ suggestions, current, onAdd }: {
  suggestions: string[];
  current: string[];
  onAdd: (val: string) => void;
}) {
  const used = new Set(current.map((s) => s.toLowerCase().trim()));
  const available = suggestions.filter((s) => !used.has(s.toLowerCase()));
  if (available.length === 0) return null;
  return (
    <div className="ml-9 mt-2">
      <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-1.5">Common examples (tap to add):</p>
      <div className="flex flex-wrap gap-1.5">
        {available.slice(0, 8).map((s) => (
          <button
            key={s}
            onClick={() => onAdd(s)}
            className="px-2.5 py-1 rounded-lg bg-sand-100 dark:bg-night-700 text-xs text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30 transition-colors"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────── */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function RelapsePlanClient({ faqData }: Props) {
  const [plan, setPlan] = useState<PlanData>(EMPTY_PLAN);
  const [showPlan, setShowPlan] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const hasContent = plan.triggers.some((t) => t.trim()) || plan.safeActivities.some((a) => a.trim());

  const addSuggestionToList = (field: keyof PlanData, val: string) => {
    const arr = plan[field] as string[];
    const emptyIdx = arr.findIndex((s) => !s.trim());
    if (emptyIdx >= 0) {
      setPlan((p) => ({ ...p, [field]: updateArr(arr, emptyIdx, val) }));
    } else {
      setPlan((p) => ({ ...p, [field]: [...arr, val] }));
    }
  };

  const handlePrint = useCallback(() => window.print(), []);

  const handleShare = useCallback(async () => {
    const url = "https://mindchecktools.com/relapse-prevention-plan";
    const text = "Build your own relapse prevention plan — identify triggers, warning signs, coping strategies, emergency contacts, and a craving action plan. Free and private.";
    if (navigator.share) {
      try { await navigator.share({ title: "Relapse Prevention Plan Builder", text, url }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(url);
    setShareMessage("Link copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, []);

  const handleReset = () => {
    if (confirm("This will clear your entire plan. Your data is not saved anywhere — once cleared, it cannot be recovered. Continue?")) {
      setPlan(EMPTY_PLAN);
      setShowPlan(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Recovery</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Relapse Prevention Plan Builder
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          Build a personalized relapse prevention plan you can print and keep. Fill in each section below — your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\uD83D\uDDA8\uFE0F", text: "Printable" },
            { icon: "\u23F1", text: "~10 Minutes" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Last reviewed: March 2026</p>
      </header>

      <AdSlot position="plan-top" className="mb-6" />

      {/* Builder Sections */}
      {!showPlan && (
        <div className="space-y-6">
          {/* 1. Triggers */}
          <div className="card p-6 sm:p-8">
            <SectionHeader num={1} title="My Triggers" desc="What people, places, situations, or emotions increase your urge to use?" />
            <TextInputList
              items={plan.triggers}
              onChange={(i, v) => setPlan((p) => ({ ...p, triggers: updateArr(p.triggers, i, v) }))}
              placeholder="Trigger"
              onAdd={() => setPlan((p) => ({ ...p, triggers: addSlot(p.triggers) }))}
              maxItems={10}
            />
            <ChipSuggestions suggestions={TRIGGER_SUGGESTIONS} current={plan.triggers} onAdd={(v) => addSuggestionToList("triggers", v)} />
          </div>

          {/* 2. Warning Signs */}
          <div className="card p-6 sm:p-8">
            <SectionHeader num={2} title="My Warning Signs" desc="What changes in yourself signal that you may be heading toward relapse?" />

            <div className="space-y-4 ml-9">
              {([
                { key: "warningEmotional" as const, label: "Emotional", placeholder: "e.g., Increasing anger, feeling hopeless" },
                { key: "warningMental" as const, label: "Mental", placeholder: "e.g., Thinking 'just once,' romanticizing use" },
                { key: "warningPhysical" as const, label: "Physical", placeholder: "e.g., Not sleeping, skipping meals" },
                { key: "warningBehavioral" as const, label: "Behavioral", placeholder: "e.g., Isolating, skipping meetings" },
              ]).map((cat) => (
                <div key={cat.key}>
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1.5">{cat.label}</p>
                  <div className="space-y-2">
                    {plan[cat.key].map((item, i) => (
                      <input
                        key={i}
                        type="text"
                        value={item}
                        onChange={(e) => setPlan((p) => ({ ...p, [cat.key]: updateArr(p[cat.key], i, e.target.value) }))}
                        placeholder={cat.placeholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-sand-50 dark:bg-night-700 border border-sand-200 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600"
                      />
                    ))}
                    <button
                      onClick={() => setPlan((p) => ({ ...p, [cat.key]: addSlot(p[cat.key]) }))}
                      className="text-xs text-sage-600 dark:text-sage-400 hover:underline"
                    >+ Add another</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Coping Strategies */}
          <div className="card p-6 sm:p-8">
            <SectionHeader num={3} title="Coping Strategies for My Triggers" desc="For each trigger you listed, what will you do instead of using?" />
            <div className="space-y-3 ml-9">
              {plan.triggers.filter((t) => t.trim()).map((trigger, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
                    Trigger: <span className="text-neutral-700 dark:text-neutral-200">{trigger}</span>
                  </p>
                  <input
                    type="text"
                    value={plan.copingStrategies[i] || ""}
                    onChange={(e) => setPlan((p) => ({ ...p, copingStrategies: updateArr(p.copingStrategies, i, e.target.value) }))}
                    placeholder="My coping strategy for this trigger"
                    className="w-full px-4 py-2.5 rounded-xl bg-sand-50 dark:bg-night-700 border border-sand-200 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600"
                  />
                </div>
              ))}
              {plan.triggers.filter((t) => t.trim()).length === 0 && (
                <p className="text-sm text-neutral-400 dark:text-neutral-500 italic">Fill in your triggers above first, then come back to pair each one with a coping strategy.</p>
              )}
            </div>
          </div>

          {/* 4. Emergency Contacts */}
          <div className="card p-6 sm:p-8">
            <SectionHeader num={4} title="Emergency Contacts" desc="Who will you call when you are struggling? Have these numbers ready." />
            <div className="space-y-4 ml-9">
              {plan.contacts.map((contact, i) => (
                <div key={i} className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">{contact.role}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={contact.name}
                      onChange={(e) => {
                        const contacts = [...plan.contacts];
                        contacts[i] = { ...contacts[i], name: e.target.value };
                        setPlan((p) => ({ ...p, contacts }));
                      }}
                      placeholder="Name"
                      className="px-4 py-2.5 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600"
                    />
                    <input
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => {
                        const contacts = [...plan.contacts];
                        contacts[i] = { ...contacts[i], phone: e.target.value };
                        setPlan((p) => ({ ...p, contacts }));
                      }}
                      placeholder="Phone number"
                      className="px-4 py-2.5 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Safe Activities */}
          <div className="card p-6 sm:p-8">
            <SectionHeader num={5} title="Safe Activities" desc="What healthy activities can you do when cravings hit or you need a distraction?" />
            <TextInputList
              items={plan.safeActivities}
              onChange={(i, v) => setPlan((p) => ({ ...p, safeActivities: updateArr(p.safeActivities, i, v) }))}
              placeholder="Activity"
              onAdd={() => setPlan((p) => ({ ...p, safeActivities: addSlot(p.safeActivities) }))}
              maxItems={12}
            />
            <ChipSuggestions suggestions={ACTIVITY_SUGGESTIONS} current={plan.safeActivities} onAdd={(v) => addSuggestionToList("safeActivities", v)} />
          </div>

          {/* 6. Places to Avoid */}
          <div className="card p-6 sm:p-8">
            <SectionHeader num={6} title="Places & Situations to Avoid" desc="What locations or situations put your recovery at risk?" />
            <TextInputList
              items={plan.placesToAvoid}
              onChange={(i, v) => setPlan((p) => ({ ...p, placesToAvoid: updateArr(p.placesToAvoid, i, v) }))}
              placeholder="Place or situation"
              onAdd={() => setPlan((p) => ({ ...p, placesToAvoid: addSlot(p.placesToAvoid) }))}
              maxItems={8}
            />
          </div>

          {/* 7. Craving Action Plan */}
          <div className="card p-6 sm:p-8">
            <SectionHeader num={7} title="My Craving Action Plan" desc="When a craving hits, I will follow these steps in order:" />
            <div className="space-y-2 ml-9">
              {plan.cravingSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs font-bold text-sage-600 dark:text-sage-400 w-5 shrink-0">{i + 1}.</span>
                  <input
                    type="text"
                    value={step}
                    onChange={(e) => setPlan((p) => ({ ...p, cravingSteps: updateArr(p.cravingSteps, i, e.target.value) }))}
                    placeholder={`Step ${i + 1}`}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-sand-50 dark:bg-night-700 border border-sand-200 dark:border-neutral-700 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600"
                  />
                </div>
              ))}
              {plan.cravingSteps.length < 10 && (
                <button
                  onClick={() => setPlan((p) => ({ ...p, cravingSteps: addSlot(p.cravingSteps) }))}
                  className="text-xs text-sage-600 dark:text-sage-400 hover:underline ml-7"
                >+ Add another step</button>
              )}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={() => setShowPlan(true)}
            disabled={!hasContent}
            className={`w-full py-3.5 rounded-xl font-semibold text-base transition-colors ${
              hasContent
                ? "bg-sage-600 hover:bg-sage-700 dark:bg-sage-500 dark:hover:bg-sage-600 text-white"
                : "bg-sand-200 dark:bg-night-700 text-neutral-400 dark:text-neutral-500 cursor-not-allowed"
            }`}
          >
            Generate My Plan
          </button>
          {!hasContent && (
            <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">Fill in at least one trigger or safe activity to generate your plan.</p>
          )}
        </div>
      )}

      {/* Generated Plan Preview */}
      {showPlan && (
        <div className="animate-fade-in space-y-6" aria-live="polite">
          <div className="card p-6 sm:p-8 print:shadow-none print:border-none" id="plan-preview">
            <div className="text-center mb-6 pb-4 border-b border-sand-200 dark:border-neutral-700">
              <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">My Relapse Prevention Plan</h2>
              <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-1">Created {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>

            {/* Triggers + Coping */}
            {filledCount(plan.triggers) > 0 && (
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-3">My Triggers & Coping Strategies</h3>
                <div className="space-y-2">
                  {plan.triggers.map((t, i) => t.trim() && (
                    <div key={i} className="bg-sand-50 dark:bg-night-700 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200 sm:w-1/2"><span className="text-crisis-500 mr-1">&#x26A0;</span> {t}</span>
                      {plan.copingStrategies[i]?.trim() && (
                        <span className="text-sm text-sage-700 dark:text-sage-400 sm:w-1/2"><span className="mr-1">&#x2192;</span> {plan.copingStrategies[i]}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Warning Signs */}
            {(filledCount(plan.warningEmotional) + filledCount(plan.warningMental) + filledCount(plan.warningPhysical) + filledCount(plan.warningBehavioral)) > 0 && (
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-3">My Warning Signs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {([
                    { label: "Emotional", items: plan.warningEmotional },
                    { label: "Mental", items: plan.warningMental },
                    { label: "Physical", items: plan.warningPhysical },
                    { label: "Behavioral", items: plan.warningBehavioral },
                  ]).map((cat) => {
                    const filled = cat.items.filter((s) => s.trim());
                    if (filled.length === 0) return null;
                    return (
                      <div key={cat.label} className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-3">
                        <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">{cat.label}</p>
                        <ul className="space-y-0.5">
                          {filled.map((s, i) => <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300">&#x2022; {s}</li>)}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Emergency Contacts */}
            {plan.contacts.some((c) => c.name.trim()) && (
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Emergency Contacts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {plan.contacts.filter((c) => c.name.trim()).map((c, i) => (
                    <div key={i} className="bg-sage-50 dark:bg-sage-950/20 rounded-xl p-3 text-center">
                      <p className="text-xs font-semibold text-sage-600 dark:text-sage-400 uppercase tracking-wider mb-1">{c.role}</p>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{c.name}</p>
                      {c.phone.trim() && <p className="text-sm text-neutral-500 dark:text-neutral-400">{c.phone}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Safe Activities */}
            {filledCount(plan.safeActivities) > 0 && (
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Safe Activities</h3>
                <div className="flex flex-wrap gap-2">
                  {plan.safeActivities.filter((a) => a.trim()).map((a, i) => (
                    <span key={i} className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">{a}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Places to Avoid */}
            {filledCount(plan.placesToAvoid) > 0 && (
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Places & Situations to Avoid</h3>
                <div className="flex flex-wrap gap-2">
                  {plan.placesToAvoid.filter((p) => p.trim()).map((p, i) => (
                    <span key={i} className="badge bg-crisis-50 dark:bg-crisis-950/30 text-crisis-700 dark:text-crisis-400">{p}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Craving Action Plan */}
            {filledCount(plan.cravingSteps) > 0 && (
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-3">When I Feel a Craving, I Will:</h3>
                <ol className="space-y-1.5">
                  {plan.cravingSteps.filter((s) => s.trim()).map((s, i) => (
                    <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300 flex gap-2">
                      <span className="font-bold text-sage-600 dark:text-sage-400 shrink-0">{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Crisis Resources in plan */}
            <div className="mt-6 pt-4 border-t border-sand-200 dark:border-neutral-700">
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">Crisis Resources — Always Available</p>
              <div className="text-sm text-neutral-600 dark:text-neutral-300 space-y-0.5">
                <p><strong>SAMHSA:</strong> 1-800-662-4357 (24/7, free, confidential)</p>
                <p><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</p>
                <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 print:hidden">
            <button onClick={() => setShowPlan(false)} className="btn-secondary text-sm flex-1 min-w-[120px]">
              Edit Plan
            </button>
            <button onClick={handlePrint} className="btn-secondary text-sm flex-1 min-w-[120px]">
              Print Plan
            </button>
            <button onClick={handleShare} className="btn-secondary text-sm flex-1 min-w-[120px]">
              Share Tool
            </button>
            <button onClick={handleReset} className="btn-secondary text-sm flex-1 min-w-[120px] text-crisis-600 dark:text-crisis-400 hover:bg-crisis-50 dark:hover:bg-crisis-950/20">
              Start Over
            </button>
          </div>
          {shareMessage && (
            <p className="text-center text-sm font-medium text-sage-600 dark:text-sage-400 animate-fade-in print:hidden">{shareMessage}</p>
          )}

          {/* Reflection */}
          {REFLECTION_PROMPTS["relapse-prevention-plan"] && (
            <ReflectionPrompts
              prompts={REFLECTION_PROMPTS["relapse-prevention-plan"].prompts}
              toolName={REFLECTION_PROMPTS["relapse-prevention-plan"].toolName}
            />
          )}

          <AdSlot position="plan-results" className="mt-6 print:hidden" />
        </div>
      )}

      {/* Educational Content */}
      <section className="mt-12 space-y-8 print:hidden">
        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Why a Written Plan Matters
          </h2>
          <div className="prose-custom">
            <p>
              In moments of crisis — when cravings are intense, emotions are overwhelming, or triggers are present — your ability to think clearly and make good decisions is significantly impaired. This is exactly when you need a plan the most, and exactly when you are least able to create one on the spot.
            </p>
            <p>
              A written relapse prevention plan acts as your <strong>future self&apos;s instruction manual</strong>. You are creating it now, when you are thinking clearly, for the version of yourself that will be struggling later. Research consistently shows that people who have a written, personalized relapse prevention plan have significantly better outcomes than those who rely on willpower and memory alone.
            </p>
            <p>
              Print your plan. Keep a copy in your wallet, on your phone (take a photo), on your refrigerator, and with your sponsor or therapist. The more accessible it is, the more likely you are to use it when it matters.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            The Three Stages of Relapse
          </h2>
          <div className="prose-custom">
            <p>
              Relapse is not a single event — it is a process that unfolds in three stages, each of which offers an opportunity to intervene:
            </p>
            <p>
              <strong>Emotional Relapse:</strong> You are not thinking about using, but your behaviors and emotions are setting you up for it. Signs include bottling up emotions, isolating, skipping meetings, poor self-care, and not asking for help. This is the easiest stage to intervene.
            </p>
            <p>
              <strong>Mental Relapse:</strong> Part of you wants to use, and part of you does not. Signs include thinking about people, places, and things associated with past use; glamorizing past use; lying; bargaining; looking for relapse opportunities; and planning a relapse around other people&apos;s schedules.
            </p>
            <p>
              <strong>Physical Relapse:</strong> This is the act of using. Once mental relapse is not addressed, the window of opportunity to intervene narrows significantly.
            </p>
            <p>
              Your warning signs section maps to these stages. Learn to recognize emotional and mental relapse early — that is where your plan has the most power. The <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">HALT Check-In</Link> is a quick daily tool for catching early warning signs, and the <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">Sobriety Calculator</Link> can help you track your recovery milestones.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 print:hidden">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <details key={i} className="card p-5 group">
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-neutral-800 dark:text-neutral-100">
                <span className="pr-4">{faq.question}</span>
                <svg className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Disclaimer + Crisis Resources */}
      <footer className="mt-12 space-y-4 text-xs text-neutral-400 dark:text-neutral-500 print:hidden">
        <div className="bg-sand-50 dark:bg-night-800 rounded-2xl p-5 space-y-2">
          <p className="font-semibold text-neutral-500 dark:text-neutral-400">About This Tool</p>
          <p>
            The Relapse Prevention Plan Builder is a self-guided worksheet for educational and self-reflection purposes only.
            It is <strong>not</strong> a substitute for professional treatment, counseling, or a clinically supervised relapse prevention plan.
            This tool is most effective when used alongside professional support from a counselor, therapist, or sponsor.
          </p>
          <p>
            <strong>Your data is never stored.</strong> Everything you enter is processed in your browser only. When you close this page,
            your plan data is gone. Print or save your plan before leaving.
          </p>
          <ToolReviewerBio />
        </div>

        <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-800 rounded-2xl p-5">
          <p className="font-semibold text-warm-700 dark:text-warm-300 mb-2">Need Help Now?</p>
          <ul className="space-y-1 text-warm-600 dark:text-warm-400">
            <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (free, confidential, 24/7)</li>
            <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          </ul>
          <p className="mt-2">
            <Link href="/crisis-resources" className="text-warm-700 dark:text-warm-300 underline hover:no-underline">
              View all crisis resources →
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
