"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Types ────────────────────────────────────────────── */

interface Emotion {
  name: string;
  before: number;
  after: number;
}

interface ThoughtRecord {
  id: string;
  date: string;
  situation: string;
  automaticThought: string;
  thoughtBelief: number;
  emotions: Emotion[];
  evidenceFor: string[];
  evidenceAgainst: string[];
  balancedThought: string;
  balancedBelief: number;
}

interface Props {
  faqData: { question: string; answer: string }[];
}

type AppStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | "review" | "journal";

/* ── Emotion suggestions ─────────────────────────────── */

const EMOTION_CHIPS = [
  "Anxious", "Sad", "Angry", "Guilty", "Ashamed",
  "Frustrated", "Hopeless", "Scared", "Embarrassed",
  "Lonely", "Overwhelmed", "Irritated",
];

/* ── Storage ─────────────────────────────────────────── */

const STORAGE_KEY = "mct-thought-records";

function loadRecords(): ThoughtRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return [];
}

function saveRecords(records: ThoughtRecord[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch { /* ignore */ }
}

/* ── Component ────────────────────────────────────────── */

export function ThoughtRecordClient({ faqData }: Props) {
  /* current record state */
  const [step, setStep] = useState<AppStep>(1);
  const [situation, setSituation] = useState("");
  const [automaticThought, setAutomaticThought] = useState("");
  const [thoughtBelief, setThoughtBelief] = useState(80);
  const [emotions, setEmotions] = useState<Emotion[]>([{ name: "", before: 50, after: 50 }]);
  const [evidenceFor, setEvidenceFor] = useState(["", "", ""]);
  const [evidenceAgainst, setEvidenceAgainst] = useState(["", "", ""]);
  const [balancedThought, setBalancedThought] = useState("");
  const [balancedBelief, setBalancedBelief] = useState(50);

  /* journal */
  const [savedRecords, setSavedRecords] = useState<ThoughtRecord[]>([]);
  const [expandedRecord, setExpandedRecord] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setSavedRecords(loadRecords());
    setLoaded(true);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  /* ── Helpers ───────────────────────────────────────── */

  function updateEmotion(index: number, field: keyof Emotion, value: string | number) {
    setEmotions((prev) => prev.map((e, i) => (i === index ? { ...e, [field]: value } : e)));
  }

  function addEmotion(name?: string) {
    setEmotions((prev) => [...prev, { name: name || "", before: 50, after: 50 }]);
  }

  function removeEmotion(index: number) {
    setEmotions((prev) => prev.filter((_, i) => i !== index));
  }

  function addEmotionChip(name: string) {
    const exists = emotions.some((e) => e.name.toLowerCase() === name.toLowerCase());
    if (exists) return;
    const emptyIndex = emotions.findIndex((e) => e.name.trim() === "");
    if (emptyIndex >= 0) {
      updateEmotion(emptyIndex, "name", name);
    } else {
      addEmotion(name);
    }
  }

  function updateEvidence(field: "evidenceFor" | "evidenceAgainst", index: number, value: string) {
    const setter = field === "evidenceFor" ? setEvidenceFor : setEvidenceAgainst;
    setter((prev) => prev.map((v, i) => (i === index ? value : v)));
  }

  function addEvidence(field: "evidenceFor" | "evidenceAgainst") {
    const setter = field === "evidenceFor" ? setEvidenceFor : setEvidenceAgainst;
    setter((prev) => [...prev, ""]);
  }

  function handleSaveRecord() {
    const record: ThoughtRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      situation,
      automaticThought,
      thoughtBelief,
      emotions: emotions.filter((e) => e.name.trim()),
      evidenceFor: evidenceFor.filter((e) => e.trim()),
      evidenceAgainst: evidenceAgainst.filter((e) => e.trim()),
      balancedThought,
      balancedBelief,
    };
    const updated = [record, ...savedRecords];
    setSavedRecords(updated);
    saveRecords(updated);
  }

  function deleteRecord(id: string) {
    const updated = savedRecords.filter((r) => r.id !== id);
    setSavedRecords(updated);
    saveRecords(updated);
  }

  function handleNewRecord() {
    setSituation("");
    setAutomaticThought("");
    setThoughtBelief(80);
    setEmotions([{ name: "", before: 50, after: 50 }]);
    setEvidenceFor(["", "", ""]);
    setEvidenceAgainst(["", "", ""]);
    setBalancedThought("");
    setBalancedBelief(50);
    setStep(1);
  }

  function handlePrint() {
    window.print();
  }

  const filledEmotions = emotions.filter((e) => e.name.trim());
  const numericStep = typeof step === "number" ? step : step === "review" ? 8 : 9;

  /* ── Step indicator ────────────────────────────────── */

  const STEP_SHORT = ["Situation", "Thought", "Emotions", "For", "Against", "Reframe", "Re-rate"];

  function StepIndicator() {
    return (
      <div className="mb-6 overflow-x-auto">
        <div className="flex items-center justify-center gap-1 min-w-[500px] mx-auto">
          {STEP_SHORT.map((label, i) => {
            const sNum = i + 1;
            const done = numericStep > sNum;
            const active = numericStep === sNum;
            return (
              <div key={label} className="flex items-center gap-1">
                <button
                  onClick={() => setStep(sNum as AppStep)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                    done
                      ? "bg-sage-600 text-white"
                      : active
                      ? "bg-sage-600 text-white ring-2 ring-offset-1 ring-sage-400 dark:ring-offset-night-800"
                      : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-sand-300 dark:hover:bg-neutral-600"
                  }`}
                  aria-label={`Step ${sNum}: ${label}`}
                >
                  {done ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    sNum
                  )}
                </button>
                {i < 6 && (
                  <div className={`w-4 sm:w-6 h-0.5 ${done ? "bg-sage-400 dark:bg-sage-600" : "bg-sand-200 dark:bg-neutral-700"}`} />
                )}
              </div>
            );
          })}
        </div>
        {typeof step === "number" && (
          <p className="text-center text-xs font-medium text-sage-700 dark:text-sage-400 mt-2">
            Step {step} of 7: {STEP_SHORT[step - 1]}
          </p>
        )}
      </div>
    );
  }

  /* ── Nav buttons ───────────────────────────────────── */

  function Nav({ back, next, nextLabel, nextDisabled }: { back?: AppStep; next: AppStep; nextLabel?: string; nextDisabled?: boolean }) {
    return (
      <div className="flex items-center justify-between mt-6">
        {back ? (
          <button onClick={() => setStep(back)} className="px-5 py-2.5 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
            Back
          </button>
        ) : <div />}
        <button
          onClick={() => setStep(next)}
          disabled={nextDisabled}
          className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            nextDisabled
              ? "bg-sage-200 dark:bg-sage-900 text-sage-400 dark:text-sage-700 cursor-not-allowed"
              : "bg-sage-600 hover:bg-sage-700 text-white"
          }`}
        >
          {nextLabel || "Next"}
        </button>
      </div>
    );
  }

  /* ── Emotion bar component ─────────────────────────── */

  function EmotionBar({ label, before, after }: { label: string; before: number; after: number }) {
    const change = before - after;
    const changeColor = change > 0 ? "text-sage-600 dark:text-sage-400" : change < 0 ? "text-crisis-600 dark:text-crisis-400" : "text-neutral-400";
    return (
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{label}</span>
          <span className={`text-sm font-bold ${changeColor}`}>
            {change > 0 ? `\u2193${change}` : change < 0 ? `\u2191${Math.abs(change)}` : "no change"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400 w-12">Before</span>
          <div className="flex-1 h-3 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 dark:bg-amber-500 rounded-full transition-all" style={{ width: `${before}%` }} />
          </div>
          <span className="text-xs font-mono text-neutral-500 w-8 text-right">{before}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400 w-12">After</span>
          <div className="flex-1 h-3 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <div className="h-full bg-sage-500 dark:bg-sage-500 rounded-full transition-all" style={{ width: `${after}%` }} />
          </div>
          <span className="text-xs font-mono text-neutral-500 w-8 text-right">{after}</span>
        </div>
      </div>
    );
  }

  /* ── Render ────────────────────────────────────────── */

  if (!loaded) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 text-center">
        CBT Thought Record Worksheet
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-8">
        The 7-column thought record is one of the most effective tools in cognitive behavioral therapy.
        Challenge negative thinking patterns by examining the evidence and building more balanced thoughts.
      </p>

      <AdSlot position="above-tool" />

      {/* ── Tool Card ── */}
      <div className="bg-white dark:bg-night-800 rounded-2xl shadow-lg border border-sand-200 dark:border-neutral-700 p-6 sm:p-8 mb-8 print:shadow-none print:border-0 print:p-0">

        {typeof step === "number" && <StepIndicator />}

        {/* ── Step 1: Situation ── */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">1. Situation</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">What happened? Where were you? Who were you with? When was it?</p>
            </div>
            <textarea
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              rows={4}
              placeholder='e.g. "Monday morning. Got an email from my boss asking to talk. I was at my desk."'
              className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 resize-none"
            />
            <Nav next={2} nextDisabled={!situation.trim()} />
          </div>
        )}

        {/* ── Step 2: Automatic Thought ── */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">2. Automatic Thought</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">What went through your mind? What were you saying to yourself?</p>
            </div>
            <textarea
              value={automaticThought}
              onChange={(e) => setAutomaticThought(e.target.value)}
              rows={3}
              placeholder={"e.g. \"I'm going to get fired. I must have done something wrong.\""}
              className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 resize-none"
            />
            <div>
              <label className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                <span>How much do you believe this thought right now?</span>
                <span className="font-bold text-neutral-800 dark:text-neutral-100">{thoughtBelief}%</span>
              </label>
              <input
                type="range" min={0} max={100} value={thoughtBelief}
                onChange={(e) => setThoughtBelief(Number(e.target.value))}
                className="w-full accent-sage-600"
                aria-label="Belief in automatic thought"
              />
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Don&apos;t believe it at all</span><span>Completely believe it</span>
              </div>
            </div>
            <Nav back={1} next={3} nextDisabled={!automaticThought.trim()} />
          </div>
        )}

        {/* ── Step 3: Emotions ── */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">3. Emotions</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">What emotions did you feel? Rate each one&apos;s intensity from 0 (none) to 100 (most intense).</p>
            </div>

            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">Common emotions (tap to add):</p>
              <div className="flex flex-wrap gap-2">
                {EMOTION_CHIPS.map((e) => (
                  <button
                    key={e}
                    onClick={() => addEmotionChip(e)}
                    className="px-3 py-1.5 rounded-full text-xs bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 border border-sand-200 dark:border-neutral-600 hover:border-sage-400 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors"
                  >
                    + {e}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {emotions.map((em, i) => (
                <div key={i} className="bg-sand-50 dark:bg-night-900 rounded-xl p-4 border border-sand-200 dark:border-neutral-700">
                  <div className="flex items-center gap-3 mb-3">
                    <input
                      type="text"
                      value={em.name}
                      onChange={(e) => updateEmotion(i, "name", e.target.value)}
                      placeholder="Emotion name"
                      className="flex-1 px-3 py-2 rounded-lg border border-sand-200 dark:border-neutral-600 bg-white dark:bg-night-800 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                      aria-label={`Emotion ${i + 1} name`}
                    />
                    {emotions.length > 1 && (
                      <button onClick={() => removeEmotion(i)} className="text-neutral-400 hover:text-crisis-600 transition-colors" aria-label="Remove emotion">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <label className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                    <span>Intensity</span>
                    <span className="font-bold text-neutral-700 dark:text-neutral-200">{em.before}%</span>
                  </label>
                  <input
                    type="range" min={0} max={100} value={em.before}
                    onChange={(e) => updateEmotion(i, "before", Number(e.target.value))}
                    className="w-full accent-amber-500"
                    aria-label={`${em.name || "Emotion"} intensity`}
                  />
                </div>
              ))}
              <button onClick={() => addEmotion()} className="text-sm text-sage-600 dark:text-sage-400 hover:underline">
                + Add another emotion
              </button>
            </div>

            <Nav back={2} next={4} nextDisabled={filledEmotions.length === 0} />
          </div>
        )}

        {/* ── Step 4: Evidence For ── */}
        {step === 4 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">4. Evidence Supporting the Thought</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">What facts (not feelings) support your automatic thought? Be specific and objective.</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 italic mt-1">Tip: &quot;I feel like I&apos;ll get fired&quot; is a feeling, not evidence. &quot;I missed a deadline last week&quot; is evidence.</p>
            </div>
            <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-4 border border-sand-200 dark:border-neutral-700 mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Your thought</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 italic">&ldquo;{automaticThought}&rdquo;</p>
            </div>
            <div className="space-y-3">
              {evidenceFor.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  onChange={(e) => updateEvidence("evidenceFor", i, e.target.value)}
                  placeholder={`Evidence ${i + 1}`}
                  className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                />
              ))}
              <button onClick={() => addEvidence("evidenceFor")} className="text-sm text-sage-600 dark:text-sage-400 hover:underline">
                + Add another
              </button>
            </div>
            <Nav back={3} next={5} />
          </div>
        )}

        {/* ── Step 5: Evidence Against ── */}
        {step === 5 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">5. Evidence Against the Thought</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">What facts contradict or don&apos;t fit with your automatic thought? What would you tell a friend in this situation?</p>
            </div>
            <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-4 border border-sand-200 dark:border-neutral-700 mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">Your thought</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 italic">&ldquo;{automaticThought}&rdquo;</p>
            </div>
            <div className="space-y-3">
              {evidenceAgainst.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  onChange={(e) => updateEvidence("evidenceAgainst", i, e.target.value)}
                  placeholder={`Counter-evidence ${i + 1}`}
                  className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                />
              ))}
              <button onClick={() => addEvidence("evidenceAgainst")} className="text-sm text-sage-600 dark:text-sage-400 hover:underline">
                + Add another
              </button>
            </div>
            <Nav back={4} next={6} />
          </div>
        )}

        {/* ── Step 6: Balanced Thought ── */}
        {step === 6 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">6. Balanced / Alternative Thought</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Based on the evidence for and against, what is a more balanced, accurate way to see this situation?
                It doesn&apos;t have to be positive — just more fair and realistic.
              </p>
            </div>

            {/* Evidence summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">Evidence For</p>
                <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-0.5">
                  {evidenceFor.filter((e) => e.trim()).map((e, i) => <li key={i}>• {e}</li>)}
                  {evidenceFor.filter((e) => e.trim()).length === 0 && <li className="italic text-neutral-400">None listed</li>}
                </ul>
              </div>
              <div className="bg-sage-50/50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-3">
                <p className="text-xs font-semibold text-sage-700 dark:text-sage-400 mb-1">Evidence Against</p>
                <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-0.5">
                  {evidenceAgainst.filter((e) => e.trim()).map((e, i) => <li key={i}>• {e}</li>)}
                  {evidenceAgainst.filter((e) => e.trim()).length === 0 && <li className="italic text-neutral-400">None listed</li>}
                </ul>
              </div>
            </div>

            <textarea
              value={balancedThought}
              onChange={(e) => setBalancedThought(e.target.value)}
              rows={3}
              placeholder={"e.g. \"My boss might want to discuss something routine. Even if there's a problem, one conversation doesn't mean I'm getting fired.\""}
              className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 resize-none"
            />
            <div>
              <label className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                <span>How much do you believe this balanced thought?</span>
                <span className="font-bold text-neutral-800 dark:text-neutral-100">{balancedBelief}%</span>
              </label>
              <input
                type="range" min={0} max={100} value={balancedBelief}
                onChange={(e) => setBalancedBelief(Number(e.target.value))}
                className="w-full accent-sage-600"
                aria-label="Belief in balanced thought"
              />
            </div>
            <Nav back={5} next={7} nextDisabled={!balancedThought.trim()} />
          </div>
        )}

        {/* ── Step 7: Re-rate Emotions ── */}
        {step === 7 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">7. Re-rate Your Emotions</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Now that you have a more balanced perspective, how intense are your emotions? Re-rate each one from 0 to 100.
              </p>
            </div>

            <div className="bg-sage-50/50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4 mb-2">
              <p className="text-xs font-semibold text-sage-700 dark:text-sage-400 mb-1">Your balanced thought</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 italic">&ldquo;{balancedThought}&rdquo;</p>
            </div>

            <div className="space-y-4">
              {emotions.filter((e) => e.name.trim()).map((em, i) => {
                const origIndex = emotions.indexOf(em);
                return (
                  <div key={i} className="bg-sand-50 dark:bg-night-900 rounded-xl p-4 border border-sand-200 dark:border-neutral-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{em.name}</span>
                      <span className="text-xs text-neutral-400">Was: {em.before}%</span>
                    </div>
                    <label className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                      <span>New intensity</span>
                      <span className="font-bold text-neutral-700 dark:text-neutral-200">{em.after}%</span>
                    </label>
                    <input
                      type="range" min={0} max={100} value={em.after}
                      onChange={(e) => updateEmotion(origIndex, "after", Number(e.target.value))}
                      className="w-full accent-sage-600"
                      aria-label={`Re-rate ${em.name}`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-6">
              <button onClick={() => setStep(6)} className="px-5 py-2.5 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                Back
              </button>
              <button
                onClick={() => { handleSaveRecord(); setStep("review"); }}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-sage-600 hover:bg-sage-700 text-white transition-colors"
              >
                See Results
              </button>
            </div>
          </div>
        )}

        {/* ── Review ── */}
        {step === "review" && (
          <div className="space-y-6" id="thought-record-printable" aria-live="polite">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-sage-100 dark:bg-sage-900/40 flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-sage-600 dark:text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-serif font-bold text-sage-700 dark:text-sage-400 mb-1">Thought Record Complete</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Here&apos;s your before and after.</p>
            </div>

            {/* Before / after emotions */}
            <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-5 space-y-5">
              <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-200">Emotion Changes</h3>
              {filledEmotions.map((em, i) => (
                <EmotionBar key={i} label={em.name} before={em.before} after={em.after} />
              ))}
            </div>

            {/* Thought belief shift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">Original Thought ({thoughtBelief}% belief)</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-200 italic">&ldquo;{automaticThought}&rdquo;</p>
              </div>
              <div className="border border-sage-200 dark:border-sage-800 rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-600 dark:text-sage-400 mb-1">Balanced Thought ({balancedBelief}% belief)</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-200 italic">&ldquo;{balancedThought}&rdquo;</p>
              </div>
            </div>

            {/* Full record */}
            <details className="border border-sand-200 dark:border-neutral-700 rounded-xl">
              <summary className="px-5 py-3 cursor-pointer text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-sand-50 dark:hover:bg-night-700 transition-colors rounded-xl">
                View full record
              </summary>
              <div className="px-5 pb-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <div><strong>Situation:</strong> {situation}</div>
                <div><strong>Evidence For:</strong> {evidenceFor.filter((e) => e.trim()).join("; ") || "None listed"}</div>
                <div><strong>Evidence Against:</strong> {evidenceAgainst.filter((e) => e.trim()).join("; ") || "None listed"}</div>
              </div>
            </details>

            <div className="flex flex-wrap gap-3 justify-center print:hidden">
              <button onClick={handlePrint} className="px-6 py-2.5 rounded-xl bg-sage-600 text-white font-medium text-sm hover:bg-sage-700 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
              <button onClick={handleNewRecord} className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                New Thought Record
              </button>
              {savedRecords.length > 0 && (
                <button onClick={() => setStep("journal")} className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                  My Past Records ({savedRecords.length})
                </button>
              )}
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center print:hidden">
              This record has been saved to your browser. It will be here when you come back.
            </p>
          </div>
        )}

        {/* ── Journal ── */}
        {step === "journal" && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100">My Past Records</h2>
              <button onClick={handleNewRecord} className="text-sm text-sage-600 dark:text-sage-400 hover:underline">
                + New Record
              </button>
            </div>

            {savedRecords.length === 0 ? (
              <p className="text-sm text-neutral-400 text-center py-8">No saved records yet.</p>
            ) : (
              <div className="space-y-3">
                {savedRecords.map((rec) => (
                  <div key={rec.id} className="border border-sand-200 dark:border-neutral-700 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedRecord(expandedRecord === rec.id ? null : rec.id)}
                      className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-sand-50 dark:hover:bg-night-700 transition-colors"
                    >
                      <div>
                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                          {rec.situation.length > 60 ? rec.situation.slice(0, 60) + "..." : rec.situation}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {rec.date} &middot; {rec.emotions.map((e) => `${e.name} ${e.before}\u2192${e.after}`).join(", ")}
                        </p>
                      </div>
                      <svg className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${expandedRecord === rec.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedRecord === rec.id && (
                      <div className="px-5 pb-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-400 border-t border-sand-200 dark:border-neutral-700 pt-3">
                        <div><strong>Situation:</strong> {rec.situation}</div>
                        <div><strong>Automatic Thought:</strong> &ldquo;{rec.automaticThought}&rdquo; ({rec.thoughtBelief}% belief)</div>
                        <div><strong>Evidence For:</strong> {rec.evidenceFor.join("; ") || "None"}</div>
                        <div><strong>Evidence Against:</strong> {rec.evidenceAgainst.join("; ") || "None"}</div>
                        <div><strong>Balanced Thought:</strong> &ldquo;{rec.balancedThought}&rdquo; ({rec.balancedBelief}% belief)</div>
                        <div className="space-y-2 mt-2">
                          {rec.emotions.map((em, i) => (
                            <EmotionBar key={i} label={em.name} before={em.before} after={em.after} />
                          ))}
                        </div>
                        <button onClick={() => deleteRecord(rec.id)} className="text-xs text-crisis-600 dark:text-crisis-400 hover:underline mt-2">
                          Delete this record
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <button onClick={() => setStep("review")} className="px-5 py-2.5 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
              Back to Results
            </button>
          </div>
        )}
      </div>

      <div className="print:hidden">
        <AdSlot position="below-tool" />

        {/* ── How to Use ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            How to Use This Tool
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <li><strong>Describe the situation</strong> — What triggered the negative feeling? Be specific about when, where, and what happened.</li>
            <li><strong>Capture the automatic thought</strong> — Write exactly what went through your mind. Rate how much you believe it (0-100%).</li>
            <li><strong>Name your emotions</strong> — Identify each emotion and rate its intensity. Most situations involve multiple emotions.</li>
            <li><strong>List evidence for the thought</strong> — What objective facts support this thought? Stick to facts, not interpretations.</li>
            <li><strong>List evidence against the thought</strong> — What contradicts it? What would you tell a friend thinking this?</li>
            <li><strong>Write a balanced thought</strong> — Considering all the evidence, what is a more accurate, fair perspective?</li>
            <li><strong>Re-rate your emotions</strong> — After reframing, how intense are your emotions now? Most people see a noticeable decrease.</li>
          </ol>
        </section>

        {/* ── Educational Content ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            What Is a CBT Thought Record?
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
            <p>
              A thought record (also called a dysfunctional thought record or thought diary) is one of the foundational tools of <strong>cognitive behavioral therapy (CBT)</strong>. Developed by psychiatrist <strong>Aaron Beck</strong> in the 1960s and refined by psychologist <strong>David Burns</strong> and therapist <strong>Christine Padesky</strong>, the thought record is designed to help you examine your automatic thoughts — the quick, often unconscious interpretations your mind makes in response to events — and evaluate whether they are accurate and helpful.
            </p>
            <p>
              The core insight behind CBT is that <strong>situations do not directly cause emotions</strong>. Instead, it is your <em>interpretation</em> of the situation — your automatic thought — that determines how you feel. Two people can experience the same event and feel completely different emotions depending on how they interpret it. The thought record makes this process visible by breaking it into structured columns, allowing you to see the connection between situations, thoughts, and emotions clearly.
            </p>
            <p>
              Research strongly supports the effectiveness of thought records. A 2012 meta-analysis in <em>Cognitive Therapy and Research</em> found that completing thought records was associated with significant reductions in depression and anxiety. A 2015 study in <em>Behaviour Research and Therapy</em> found that the evidence-weighing columns (4 and 5) were the most therapeutically active components — they force you to step outside your automatic thinking pattern and consider the situation from a more objective perspective.
            </p>

            <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
              Why Thought Records Work
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>They slow down your thinking</strong> — Writing forces you to examine thoughts you would normally accept without question.</li>
              <li><strong>They separate facts from feelings</strong> — The evidence columns teach you to distinguish between objective reality and emotional interpretation.</li>
              <li><strong>They build a new habit</strong> — Over time, you start automatically questioning distorted thoughts before they spiral.</li>
              <li><strong>They create a written record</strong> — Reviewing past entries shows you patterns in your thinking and progress over time.</li>
            </ul>
            <p>
              This tool works best when used regularly — therapists typically recommend completing at least one thought record per day during active CBT treatment. Even 2-3 per week can build the cognitive restructuring skill over time.
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
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-200 pr-4">{faq.question}</h3>
                  <svg className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {REFLECTION_PROMPTS["cbt-thought-record"] && (
          <ReflectionPrompts
            prompts={REFLECTION_PROMPTS["cbt-thought-record"].prompts}
            toolName={REFLECTION_PROMPTS["cbt-thought-record"].toolName}
          />
        )}

        {/* ── Related Tools ── */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Related Mental Health Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { href: "/cognitive-distortion-identifier", label: "Cognitive Distortion Identifier", desc: "Identify thinking errors in your thoughts" },
              { href: "/box-breathing-exercise", label: "Box Breathing Exercise", desc: "Visual guided breathing for calm" },
              { href: "/five-senses-grounding", label: "5-4-3-2-1 Grounding", desc: "Sensory grounding for anxiety" },
              { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Test", desc: "7-question anxiety screening" },
              { href: "/phq-9-depression-test", label: "PHQ-9 Depression Test", desc: "9-question depression screening" },
              { href: "/rosenberg-self-esteem-scale", label: "Self-Esteem Scale", desc: "Rosenberg self-esteem check" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} className="block p-4 rounded-xl border border-sand-200 dark:border-neutral-700 hover:border-sage-400 dark:hover:border-sage-600 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors">
                <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-200">{tool.label}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <section className="mb-8">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Disclaimer</h2>
            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
              This tool is for educational and self-reflection purposes only. It is not therapy, not a substitute for professional mental health care, and not a treatment for any condition. If you are struggling with persistent negative thoughts, anxiety, or depression, please consult a qualified mental health professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <div className="bg-white/60 dark:bg-amber-900/30 rounded-lg p-3 flex-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200">988 Suicide & Crisis Lifeline</p>
                <p className="text-amber-700 dark:text-amber-300">Call or text 988 — 24/7, free & confidential</p>
              </div>
              <div className="bg-white/60 dark:bg-amber-900/30 rounded-lg p-3 flex-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200">SAMHSA National Helpline</p>
                <p className="text-amber-700 dark:text-amber-300">1-800-662-4357 — Treatment referral & info</p>
              </div>
            </div>
          </div>
        </section>

        <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
          <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
          </Link>
        </div>

        <div className="text-center mb-6">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Your privacy matters. Thought records are saved only in your browser&apos;s local storage on this device. Nothing is sent to any server, collected, or shared.
          </p>
        </div>

        <ToolReviewerBio />

        <section className="mt-8 mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">Authoritative Sources</h2>
          <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
            <li>
              <a href="https://beckinstitute.org/about/aaron-t-beck-md/" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
                Beck Institute — Aaron T. Beck, MD: Founder of Cognitive Therapy
              </a>
            </li>
            <li>
              <a href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
                American Psychological Association — What Is Cognitive Behavioral Therapy?
              </a>
            </li>
            <li>
              <a href="https://www.padesky.com/clinical-corner/publications/" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
                Christine Padesky, PhD — CBT Clinical Resources
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
