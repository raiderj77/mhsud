"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Types & Data ─────────────────────────────────────── */

type Severity = "mild" | "moderate" | "severe" | "dangerous";

interface Phase {
  name: string;
  timeframe: string;
  symptoms: string[];
  severity: Severity;
}

interface Substance {
  key: string;
  name: string;
  shortName: string;
  dangerousWithdrawal: boolean;
  dangerWarning?: string;
  phases: Phase[];
  paws: string;
  mat?: string;
}

const SEVERITY_CONFIG: Record<Severity, { label: string; bg: string; text: string; dot: string; border: string }> = {
  mild: { label: "Mild", bg: "bg-sage-50 dark:bg-sage-950/30", text: "text-sage-700 dark:text-sage-400", dot: "bg-sage-500", border: "border-sage-200 dark:border-sage-800" },
  moderate: { label: "Moderate", bg: "bg-amber-50 dark:bg-amber-950/30", text: "text-amber-700 dark:text-amber-400", dot: "bg-amber-500", border: "border-amber-200 dark:border-amber-800" },
  severe: { label: "Severe", bg: "bg-orange-50 dark:bg-orange-950/30", text: "text-orange-700 dark:text-orange-400", dot: "bg-orange-500", border: "border-orange-200 dark:border-orange-800" },
  dangerous: { label: "Dangerous", bg: "bg-crisis-50 dark:bg-crisis-950/30", text: "text-crisis-700 dark:text-crisis-400", dot: "bg-crisis-500", border: "border-crisis-200 dark:border-crisis-800" },
};

const SUBSTANCES: Substance[] = [
  {
    key: "alcohol",
    name: "Alcohol",
    shortName: "Alcohol",
    dangerousWithdrawal: true,
    dangerWarning: "Alcohol withdrawal can be LIFE-THREATENING. Seizures and delirium tremens (DTs) can occur and may be fatal without medical treatment. NEVER stop drinking abruptly after heavy or prolonged use without medical supervision. Seek medical detox.",
    phases: [
      { name: "Early Symptoms", timeframe: "6-12 hours", symptoms: ["Anxiety and nervousness", "Tremors (shaky hands)", "Nausea and vomiting", "Sweating and clammy skin", "Rapid heart rate", "Insomnia", "Headache"], severity: "moderate" },
      { name: "Hallucination Risk", timeframe: "12-24 hours", symptoms: ["Visual hallucinations may begin", "Auditory hallucinations (hearing things)", "Tactile hallucinations (skin crawling)", "Increasing anxiety and agitation", "Continued tremors and sweating"], severity: "severe" },
      { name: "Seizure Risk Period", timeframe: "24-48 hours", symptoms: ["RISK OF SEIZURES — most dangerous period begins", "Grand mal seizures possible", "Severe tremors", "Elevated blood pressure and heart rate", "Profuse sweating", "Extreme agitation"], severity: "dangerous" },
      { name: "Delirium Tremens (DTs) Risk", timeframe: "48-72 hours", symptoms: ["Delirium tremens may develop (fatal without treatment)", "Severe confusion and disorientation", "High fever", "Seizures", "Rapid, irregular heartbeat", "Extreme agitation and hallucinations"], severity: "dangerous" },
      { name: "Acute Resolution", timeframe: "3-7 days", symptoms: ["Symptoms begin to subside gradually", "Sleep may slowly improve", "Tremors reducing", "Appetite returning", "Anxiety and irritability persisting but improving"], severity: "moderate" },
    ],
    paws: "Post-acute withdrawal from alcohol can include anxiety, mood swings, sleep disturbances, difficulty concentrating, and fatigue. These symptoms may come and go in waves for weeks to months. Depression is common. Regular exercise, good nutrition, therapy, and support groups can help manage PAWS symptoms.",
    mat: "FDA-approved medications for alcohol use disorder include naltrexone (reduces cravings and the rewarding effects of alcohol), acamprosate (helps maintain abstinence by reducing post-acute withdrawal symptoms), and disulfiram (causes unpleasant effects if alcohol is consumed). Talk to a healthcare provider about which option may be appropriate.",
  },
  {
    key: "opioids-short",
    name: "Opioids (Heroin / Fentanyl)",
    shortName: "Heroin/Fentanyl",
    dangerousWithdrawal: false,
    phases: [
      { name: "Early Symptoms", timeframe: "6-12 hours", symptoms: ["Muscle aches and pain", "Anxiety and restlessness", "Tearing eyes and runny nose", "Excessive sweating", "Frequent yawning", "Insomnia begins"], severity: "moderate" },
      { name: "Escalating Symptoms", timeframe: "12-36 hours", symptoms: ["Diarrhea and stomach cramps", "Nausea and vomiting", "Goosebumps (piloerection)", "Dilated pupils", "Increased heart rate", "Elevated blood pressure"], severity: "severe" },
      { name: "Peak Symptoms", timeframe: "36-72 hours", symptoms: ["Most intense period of withdrawal", "Severe abdominal cramping", "Intense cravings", "Continued vomiting and diarrhea (risk of dehydration)", "Severe insomnia", "Extreme irritability and agitation"], severity: "severe" },
      { name: "Acute Resolution", timeframe: "3-7 days", symptoms: ["Physical symptoms begin to subside", "Appetite slowly returning", "Cramping and diarrhea reducing", "Fatigue and weakness", "Cravings persisting but becoming manageable"], severity: "moderate" },
    ],
    paws: "Post-acute withdrawal from opioids can include depression, anxiety, sleep disturbances, low energy, irritability, and intermittent cravings. These symptoms can persist for weeks to months and are a major factor in relapse. PAWS symptoms tend to come in waves — you may feel good for days, then have a difficult stretch.",
    mat: "FDA-approved MAT for opioid use disorder includes methadone (full agonist, dispensed through clinics), buprenorphine/naloxone (Suboxone — partial agonist, can be prescribed by qualified providers), and naltrexone (Vivitrol — opioid blocker, monthly injection). MAT is considered the gold standard and significantly reduces overdose death risk.",
  },
  {
    key: "opioids-rx",
    name: "Opioids (Prescription Pills)",
    shortName: "Rx Opioids",
    dangerousWithdrawal: false,
    phases: [
      { name: "Delayed Onset", timeframe: "12-30 hours", symptoms: ["Muscle aches and restlessness", "Anxiety building gradually", "Runny nose and tearing eyes", "Yawning and sweating", "Sleep becoming difficult"], severity: "mild" },
      { name: "Building Symptoms", timeframe: "36-72 hours", symptoms: ["Nausea, vomiting, and diarrhea begin", "Sweating and goosebumps", "Abdominal cramping", "Dilated pupils", "Irritability and agitation increasing"], severity: "severe" },
      { name: "Peak Symptoms", timeframe: "3-5 days", symptoms: ["Most intense physical discomfort", "Severe cramping and diarrhea", "Intense cravings", "Severe insomnia", "Depression and anxiety heightened", "Risk of dehydration from GI symptoms"], severity: "severe" },
      { name: "Gradual Improvement", timeframe: "5-10 days", symptoms: ["Physical symptoms slowly improving", "Appetite beginning to return", "Sleep still disrupted but improving", "Fatigue and low energy", "Cravings less constant but still present"], severity: "moderate" },
    ],
    paws: "PAWS from prescription opioids is similar to short-acting opioids: depression, anxiety, sleep problems, low motivation, and waves of cravings that can persist for months. The longer and heavier the use, the more prolonged PAWS tends to be.",
    mat: "The same MAT options available for heroin/fentanyl apply to prescription opioid use disorder: methadone, buprenorphine (Suboxone), and naltrexone (Vivitrol). Many people transition from prescription opioid misuse directly to MAT with excellent outcomes. Contact SAMHSA at 1-800-662-4357 for treatment referrals.",
  },
  {
    key: "benzos",
    name: "Benzodiazepines",
    shortName: "Benzos",
    dangerousWithdrawal: true,
    dangerWarning: "Benzodiazepine withdrawal can be LIFE-THREATENING. Seizures can occur even weeks after stopping. NEVER stop benzodiazepines abruptly. A slow medical taper under professional supervision is essential. Abrupt discontinuation after prolonged use can cause fatal seizures.",
    phases: [
      { name: "Early Rebound", timeframe: "1-4 days", symptoms: ["Rebound anxiety (often worse than original anxiety)", "Insomnia returning or worsening", "Restlessness and irritability", "Increased heart rate", "Muscle tension and stiffness", "Difficulty concentrating"], severity: "moderate" },
      { name: "Acute Withdrawal", timeframe: "5-14 days", symptoms: ["Intensifying anxiety and panic attacks", "Tremors and muscle twitching", "SEIZURE RISK — medical emergency possible", "Nausea, vomiting, weight loss", "Headaches and muscle pain", "Perceptual disturbances (light, sound sensitivity)", "Depersonalization or derealization"], severity: "dangerous" },
      { name: "Peak / Protracted Acute", timeframe: "2-4 weeks", symptoms: ["Highest seizure risk continues", "Panic attacks", "Hypersensitivity to stimuli (light, sound, touch)", "Cognitive difficulties (memory, concentration)", "Depression and mood instability", "Insomnia may be severe", "Muscle pain and stiffness"], severity: "dangerous" },
      { name: "Gradual Resolution", timeframe: "1-3 months", symptoms: ["Symptoms slowly improving week by week", "Anxiety remaining elevated but manageable", "Cognitive function gradually returning", "Sleep slowly normalizing", "Intermittent symptom flare-ups", "Windows of feeling normal becoming more frequent"], severity: "moderate" },
    ],
    paws: "Benzodiazepine PAWS can be the most prolonged of any substance. Symptoms may include anxiety, depression, cognitive difficulties, insomnia, and sensory hypersensitivity lasting months to over a year. Symptoms typically appear in waves, with 'windows' of normalcy between 'waves' of symptoms. A very slow taper (sometimes over many months) can minimize PAWS severity.",
  },
  {
    key: "cocaine",
    name: "Cocaine / Stimulants",
    shortName: "Cocaine",
    dangerousWithdrawal: false,
    phases: [
      { name: "The Crash", timeframe: "0-24 hours", symptoms: ["Extreme exhaustion and fatigue", "Depression and dysphoria", "Dramatically increased appetite", "Intense, prolonged sleep (hypersomnia)", "Irritability and agitation", "No motivation or pleasure (anhedonia)"], severity: "moderate" },
      { name: "Acute Withdrawal", timeframe: "1-3 days", symptoms: ["Continued depression and low mood", "Fatigue and excessive sleeping", "Increased appetite", "Vivid, unpleasant dreams", "Slowed thinking and movement", "Strong cravings may begin"], severity: "moderate" },
      { name: "Craving Phase", timeframe: "3-7 days", symptoms: ["Irritability and anxiety increasing", "Vivid dreams continuing", "Strong cravings for stimulants", "Difficulty concentrating", "Mood swings", "Some energy returning"], severity: "moderate" },
      { name: "Stabilization", timeframe: "1-2 weeks", symptoms: ["Mood beginning to stabilize", "Cravings becoming intermittent", "Sleep patterns normalizing", "Energy levels improving", "Concentration improving slowly", "Emotional sensitivity"], severity: "mild" },
    ],
    paws: "Stimulant PAWS primarily involves depression, anhedonia (inability to feel pleasure), fatigue, difficulty concentrating, and intermittent intense cravings. These symptoms can persist for weeks to months as the brain's dopamine system recalibrates. Regular exercise, good sleep hygiene, and structured daily routines can significantly help recovery.",
  },
  {
    key: "meth",
    name: "Methamphetamine",
    shortName: "Meth",
    dangerousWithdrawal: false,
    phases: [
      { name: "The Crash", timeframe: "0-24 hours", symptoms: ["Extreme fatigue and exhaustion", "Dramatically increased sleep (12-20+ hours)", "Intense hunger and dehydration", "Depression onset", "Cognitive fog and confusion", "Psychomotor retardation (slowed movement)"], severity: "moderate" },
      { name: "Acute Withdrawal", timeframe: "1-3 days", symptoms: ["Severe depression and hopelessness", "Anxiety and agitation", "Psychomotor disturbance", "Body aches and pain", "Intense cravings", "Emotional volatility"], severity: "severe" },
      { name: "Subacute Phase", timeframe: "3-7 days", symptoms: ["Continued severe depression", "Intense cravings", "Cognitive difficulties (memory, attention, decision-making)", "Fatigue persisting despite sleeping", "Paranoia may continue", "Appetite changes"], severity: "severe" },
      { name: "Gradual Improvement", timeframe: "1-2 weeks", symptoms: ["Depression slowly lifting", "Sleep beginning to normalize", "Cravings less constant", "Energy improving gradually", "Cognitive function slowly returning", "Mood still fragile"], severity: "moderate" },
    ],
    paws: "Methamphetamine PAWS can be particularly challenging due to the extent of dopamine system disruption. Depression, anhedonia, cognitive deficits (memory, concentration, decision-making), fatigue, and waves of intense cravings can persist for months. Some cognitive effects may take 12-18 months to fully resolve. Structured support, therapy, and patience are essential.",
  },
  {
    key: "cannabis",
    name: "Cannabis",
    shortName: "Cannabis",
    dangerousWithdrawal: false,
    phases: [
      { name: "Onset", timeframe: "1-3 days", symptoms: ["Irritability and mood swings", "Anxiety and nervousness", "Reduced appetite", "Difficulty falling or staying asleep", "Restlessness", "Mild headaches"], severity: "mild" },
      { name: "Peak Symptoms", timeframe: "3-7 days", symptoms: ["Peak irritability and anger", "Vivid or disturbing dreams", "Night sweats", "Cravings for cannabis", "Headaches", "Stomach discomfort", "Difficulty concentrating"], severity: "moderate" },
      { name: "Improving", timeframe: "1-2 weeks", symptoms: ["Sleep quality improving", "Appetite returning to normal", "Irritability decreasing", "Dreams still vivid but less disturbing", "Concentration improving", "Cravings less frequent"], severity: "mild" },
      { name: "Resolution", timeframe: "2-4 weeks", symptoms: ["Most physical symptoms resolved", "Sleep largely normalized", "Appetite normal", "Occasional cravings", "Mood stabilized", "Energy levels returned to baseline"], severity: "mild" },
    ],
    paws: "Cannabis PAWS is typically milder than other substances. Occasional cravings, mild mood fluctuations, and sleep disturbances may persist for a few weeks beyond acute withdrawal. Heavy, long-term users may experience symptoms for longer. Cannabis withdrawal is recognized in the DSM-5 as a clinical condition (Cannabis Withdrawal Syndrome).",
  },
  {
    key: "nicotine",
    name: "Nicotine",
    shortName: "Nicotine",
    dangerousWithdrawal: false,
    phases: [
      { name: "First Cravings", timeframe: "2-12 hours", symptoms: ["Cravings begin and intensify rapidly", "Irritability and frustration", "Anxiety and restlessness", "Difficulty concentrating", "Increased appetite", "Mild headache"], severity: "mild" },
      { name: "Peak Withdrawal", timeframe: "1-3 days", symptoms: ["Strongest cravings (every few minutes)", "Significant irritability and anger", "Headaches", "Increased appetite and weight gain beginning", "Severe restlessness", "Insomnia or disrupted sleep", "Depressed mood"], severity: "moderate" },
      { name: "Subsiding", timeframe: "3-7 days", symptoms: ["Cravings becoming less frequent (but still intense when they occur)", "Concentration improving", "Irritability decreasing", "Cough may increase temporarily (lungs clearing)", "Appetite still elevated", "Sleep improving"], severity: "mild" },
      { name: "Resolution", timeframe: "1-4 weeks", symptoms: ["Physical withdrawal largely resolved", "Cravings now situational (triggered by habits, not chemistry)", "Energy levels normalized", "Breathing noticeably improved", "Weight stabilization beginning", "Psychological cravings still occurring but manageable"], severity: "mild" },
    ],
    paws: "Nicotine PAWS primarily involves psychological and habitual cravings that can persist for months. Weight gain concerns are common (average 5-10 lbs). Situational triggers (after meals, with coffee, while driving) can provoke strong cravings long after physical withdrawal is over. These fade with time and new habit formation.",
    mat: "FDA-approved nicotine cessation medications include nicotine replacement therapy (patches, gum, lozenges, inhalers, nasal spray), varenicline (Chantix — reduces cravings and the rewarding effects of nicotine), and bupropion (Wellbutrin — an antidepressant that reduces cravings). Combining behavioral support with medication approximately doubles quit rates.",
  },
];

/* ── Main Component ───────────────────────────────────── */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function WithdrawalTimelineClient({ faqData }: Props) {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [shareMessage, setShareMessage] = useState("");

  const substance = selectedKey ? SUBSTANCES.find((s) => s.key === selectedKey) : null;

  const handlePrint = useCallback(() => window.print(), []);
  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/withdrawal-timeline";
    if (mode === "blank" || !substance) {
      if (navigator.share) {
        try { await navigator.share({ title: "Withdrawal Timeline Tool", text: "See detailed withdrawal timelines by substance — hour by hour and day by day. Free and private.", url }); return; } catch { /* cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    const summary = `Withdrawal Timeline: ${substance.name}\n${substance.phases.map((p) => `${p.timeframe}: ${p.name} (${SEVERITY_CONFIG[p.severity].label})`).join("\n")}\n\nSee the full timeline: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: `${substance.name} Withdrawal Timeline`, text: summary }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Timeline copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [substance]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Informational</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Withdrawal Timeline
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          Select a substance to see a detailed, phase-by-phase timeline of what to expect during withdrawal — from the first hours through post-acute symptoms.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\uD83D\uDCC5", text: "Phase by Phase" },
            { icon: "\u2139\uFE0F", text: "Informational" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>
      </header>

      {/* Always-visible medical warning */}
      <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-2xl p-5 mb-6">
        <p className="font-semibold text-crisis-700 dark:text-crisis-400 mb-2">Important Medical Notice</p>
        <p className="text-sm text-crisis-600 dark:text-crisis-400 leading-relaxed">
          This tool is <strong>informational only</strong>. Always consult a medical professional before stopping any substance. Withdrawal from <strong>alcohol and benzodiazepines can be life-threatening</strong> — never stop these substances abruptly without medical supervision. If you are experiencing a medical emergency, call <strong>911</strong> immediately.
        </p>
      </div>

      <AdSlot position="withdrawal-top" className="mb-6" />

      {/* Substance Selector */}
      <div className="card p-6 sm:p-8 mb-6">
        <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Select a Substance</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5">Choose the substance to view its withdrawal timeline.</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {SUBSTANCES.map((s) => (
            <button
              key={s.key}
              onClick={() => setSelectedKey(s.key === selectedKey ? null : s.key)}
              className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                selectedKey === s.key
                  ? "bg-sage-600 dark:bg-sage-500 text-white shadow-md"
                  : "bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
              } ${s.dangerousWithdrawal && selectedKey !== s.key ? "ring-1 ring-crisis-300 dark:ring-crisis-700" : ""}`}
              aria-pressed={selectedKey === s.key}
            >
              {s.shortName}
              {s.dangerousWithdrawal && selectedKey !== s.key && (
                <span className="block text-[10px] text-crisis-500 dark:text-crisis-400 font-normal mt-0.5">Medical detox</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Display */}
      {substance && (
        <div className="animate-fade-in space-y-6" aria-live="polite">
          {/* Dangerous withdrawal warning */}
          {substance.dangerousWithdrawal && substance.dangerWarning && (
            <div className="bg-crisis-100 dark:bg-crisis-950/40 border-2 border-crisis-400 dark:border-crisis-600 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0" aria-hidden="true">&#x26A0;&#xFE0F;</span>
                <div>
                  <p className="font-bold text-crisis-800 dark:text-crisis-200 mb-1">LIFE-THREATENING WITHDRAWAL</p>
                  <p className="text-sm text-crisis-700 dark:text-crisis-300 leading-relaxed">{substance.dangerWarning}</p>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Header */}
          <div className="card p-6 sm:p-8">
            <h2 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-1">
              {substance.name} Withdrawal Timeline
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
              {substance.phases.length} phases from onset through resolution. Individual experiences vary — this is a general guide based on medical literature.
            </p>

            {/* Severity Legend */}
            <div className="flex flex-wrap gap-3 mb-6 pb-4 border-b border-sand-200 dark:border-neutral-700">
              {(["mild", "moderate", "severe", "dangerous"] as Severity[]).map((sev) => {
                const c = SEVERITY_CONFIG[sev];
                return (
                  <div key={sev} className="flex items-center gap-1.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">{c.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Visual Timeline */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-sand-200 dark:bg-neutral-700" />

              <div className="space-y-0">
                {substance.phases.map((phase, idx) => {
                  const sev = SEVERITY_CONFIG[phase.severity];
                  return (
                    <div key={idx} className="relative pl-10 pb-6 last:pb-0">
                      {/* Dot on timeline */}
                      <div className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${sev.dot} ring-2 ring-white dark:ring-night-800 z-10`} />

                      {/* Phase content */}
                      <div className={`${sev.bg} border ${sev.border} rounded-xl p-4`}>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 text-sm">{phase.name}</h3>
                            <p className={`text-xs font-medium ${sev.text}`}>{phase.timeframe}</p>
                          </div>
                          <span className={`badge ${sev.bg} ${sev.text} text-[10px]`}>{sev.label}</span>
                        </div>
                        <ul className="space-y-1">
                          {phase.symptoms.map((symptom, si) => (
                            <li key={si} className="text-sm text-neutral-600 dark:text-neutral-300 flex gap-2">
                              <span className={`${sev.text} mt-0.5 shrink-0`}>&#x2022;</span>
                              <span className={symptom.startsWith("RISK") || symptom.startsWith("SEIZURE") || symptom.startsWith("Delirium") ? "font-semibold" : ""}>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* PAWS Section */}
          <div className="card p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
              Post-Acute Withdrawal (PAWS)
            </h3>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">Weeks to Months After Acute Withdrawal</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{substance.paws}</p>
            </div>
          </div>

          {/* MAT Section (if applicable) */}
          {substance.mat && (
            <div className="card p-6 sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Medication-Assisted Treatment (MAT)
              </h3>
              <div className="bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{substance.mat}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setSelectedKey(null)} className="btn-secondary text-sm flex-1 min-w-[120px]">
              Choose Another
            </button>
            <button onClick={handlePrint} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Print Timeline
            </button>
            <button onClick={() => handleShare("results")} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Share Timeline
            </button>
            <button onClick={() => handleShare("blank")} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Share Tool
            </button>
          </div>
          {shareMessage && (
            <p className="text-center text-sm font-medium text-sage-600 dark:text-sage-400 animate-fade-in">{shareMessage}</p>
          )}

          {/* Reflection */}
          {REFLECTION_PROMPTS["withdrawal-timeline"] && (
            <ReflectionPrompts
              prompts={REFLECTION_PROMPTS["withdrawal-timeline"].prompts}
              toolName={REFLECTION_PROMPTS["withdrawal-timeline"].toolName}
            />
          )}

          <AdSlot position="withdrawal-results" className="mt-6" />
        </div>
      )}

      {/* Educational Content */}
      <section className="mt-12 space-y-8 print:hidden">
        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is Withdrawal?
          </h2>
          <div className="prose-custom">
            <p>
              Withdrawal occurs when the body has adapted to the regular presence of a substance and then that substance is reduced or removed. The brain and body have adjusted their chemistry to function with the substance present — when it is taken away, a period of readjustment produces the symptoms we call withdrawal.
            </p>
            <p>
              The severity and duration of withdrawal depend on several factors: the substance used, how long it was used, the amount typically consumed, the method of use, individual physiology, and whether other substances are also being used. No two people experience identical withdrawal — the timelines above represent general medical guidelines, not exact predictions.
            </p>
            <p>
              The single most important thing to understand about withdrawal is that <strong>it is temporary</strong>. While the acute phase can be extremely uncomfortable — and in some cases dangerous — it does end. The body is remarkably capable of healing and recalibrating, given time and proper support.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            When to Seek Medical Help
          </h2>
          <div className="prose-custom">
            <p>
              Always seek medical supervision for withdrawal from <strong>alcohol</strong> and <strong>benzodiazepines</strong>. These are the two substance classes where withdrawal itself can be fatal. Medical detox facilities provide 24/7 monitoring, medications to prevent seizures, and immediate emergency response if complications arise.
            </p>
            <p>
              For opioid withdrawal, while not typically life-threatening, medical support with MAT significantly improves comfort and long-term outcomes. Severe dehydration from vomiting and diarrhea can become dangerous and may require IV fluids.
            </p>
            <p>
              Seek emergency medical attention (call 911) if you or someone you know experiences: seizures, severe confusion or disorientation, high fever, hallucinations, chest pain, difficulty breathing, or suicidal thoughts during withdrawal.
            </p>
            <p>
              SAMHSA&apos;s National Helpline (<strong>1-800-662-4357</strong>) can help you find medical detox and treatment facilities in your area. The service is free, confidential, and available 24/7.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Related Tools
          </h2>
          <div className="prose-custom">
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li><Link href="/health-recovery-timeline" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">Health Recovery Timeline</Link> — See what happens to your body as it heals after quitting</li>
              <li><Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">Sobriety Calculator</Link> — Track your recovery days and milestones</li>
              <li><Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">HALT Check-In</Link> — Daily recovery check-in for relapse prevention</li>
              <li><Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">AUDIT Alcohol Screen</Link> — Reflect on your relationship with alcohol</li>
              <li><Link href="/dast-10-drug-screening" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">DAST-10 Drug Screening</Link> — Screen for drug use concerns</li>
            </ul>
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
      <footer className="mt-12 space-y-4 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="bg-sand-50 dark:bg-night-800 rounded-2xl p-5 space-y-2">
          <p className="font-semibold text-neutral-500 dark:text-neutral-400">About This Tool</p>
          <p>
            The Withdrawal Timeline is an informational reference tool based on general medical literature about substance withdrawal.
            It is for <strong>educational purposes only</strong>. It is <strong>not</strong> medical advice, and it cannot replace
            professional medical assessment or supervised detoxification. Individual withdrawal experiences vary significantly based
            on duration of use, amount used, individual health, and other factors.
          </p>
          <p>
            <strong>Never attempt to stop alcohol or benzodiazepines without medical supervision.</strong> Withdrawal from these substances
            can cause seizures and death.
          </p>
          <p>
            All interactions with this tool are processed entirely in your browser. Nothing is stored, transmitted, or accessible to anyone.
          </p>
          <ToolReviewerBio />
        </div>

        <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-800 rounded-2xl p-5">
          <p className="font-semibold text-warm-700 dark:text-warm-300 mb-2">Need Help Now?</p>
          <ul className="space-y-1 text-warm-600 dark:text-warm-400">
            <li><strong>Emergency:</strong> Call 911 for seizures, chest pain, or medical emergencies</li>
            <li><strong>Poison Control:</strong> 1-800-222-1222</li>
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

        <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
          <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}
