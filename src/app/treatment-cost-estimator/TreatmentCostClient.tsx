"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Types & Data ─────────────────────────────────────── */

interface TreatmentOption {
  key: string;
  name: string;
  shortName: string;
  category: string;
  costLow: number;
  costHigh: number;
  costPer: string;
  duration: string;
  description: string;
  includes: string[];
  intensity: "low" | "medium" | "high" | "highest";
}

const TREATMENTS: TreatmentOption[] = [
  {
    key: "outpatient",
    name: "Outpatient Counseling",
    shortName: "Outpatient",
    category: "Outpatient",
    costLow: 100,
    costHigh: 200,
    costPer: "per session",
    duration: "1-3 sessions per week, ongoing",
    description: "Individual or group therapy sessions while living at home. Typically 1-3 hours per session, scheduled around work and family.",
    includes: ["Individual therapy sessions", "Group therapy options", "Relapse prevention planning", "Referrals to support groups", "Flexible scheduling"],
    intensity: "low",
  },
  {
    key: "iop",
    name: "Intensive Outpatient Program (IOP)",
    shortName: "IOP",
    category: "Outpatient",
    costLow: 3000,
    costHigh: 10000,
    costPer: "total (8-12 weeks)",
    duration: "9-19 hours per week for 8-12 weeks",
    description: "Structured programming 3-5 days per week while living at home. Includes group therapy, individual sessions, and skill-building.",
    includes: ["Group therapy (3-5 days/week)", "Individual counseling", "Psychoeducation groups", "Drug testing", "Family programming", "Discharge planning"],
    intensity: "medium",
  },
  {
    key: "php",
    name: "Partial Hospitalization Program (PHP)",
    shortName: "PHP",
    category: "Outpatient",
    costLow: 7000,
    costHigh: 15000,
    costPer: "total (4-6 weeks)",
    duration: "20+ hours per week for 4-6 weeks",
    description: "Day program with hospital-level services — 6-8 hours per day, 5-7 days per week. Return home or to sober living at night.",
    includes: ["Full-day programming", "Psychiatric evaluation", "Medication management", "Group and individual therapy", "Medical monitoring", "Meals during program hours"],
    intensity: "high",
  },
  {
    key: "residential-30",
    name: "Residential / Inpatient (30 Days)",
    shortName: "Residential 30d",
    category: "Residential",
    costLow: 10000,
    costHigh: 30000,
    costPer: "total (30 days)",
    duration: "30 days, 24/7 supervised care",
    description: "Live-in treatment with round-the-clock care. Fully immersive environment away from triggers and daily stressors.",
    includes: ["24/7 supervised care", "Room and meals", "Individual and group therapy", "Psychiatric evaluation", "Medical monitoring", "Recreational activities", "Discharge planning"],
    intensity: "highest",
  },
  {
    key: "residential-60",
    name: "Residential / Inpatient (60 Days)",
    shortName: "Residential 60d",
    category: "Residential",
    costLow: 20000,
    costHigh: 60000,
    costPer: "total (60 days)",
    duration: "60 days, 24/7 supervised care",
    description: "Extended residential stay allowing deeper therapeutic work. Recommended for severe substance use disorders or co-occurring conditions.",
    includes: ["Everything in 30-day program", "Extended individual therapy", "Deeper trauma processing", "Life skills development", "Vocational planning", "Extended family programming"],
    intensity: "highest",
  },
  {
    key: "residential-90",
    name: "Residential / Inpatient (90 Days)",
    shortName: "Residential 90d",
    category: "Residential",
    costLow: 30000,
    costHigh: 90000,
    costPer: "total (90 days)",
    duration: "90 days, 24/7 supervised care",
    description: "Research suggests 90 days is the minimum for lasting behavior change. Provides comprehensive, long-term immersive care.",
    includes: ["Everything in 60-day program", "Long-term behavioral stabilization", "Comprehensive aftercare planning", "Community reintegration support", "Alumni program enrollment"],
    intensity: "highest",
  },
  {
    key: "detox",
    name: "Medical Detox",
    shortName: "Medical Detox",
    category: "Medical",
    costLow: 1000,
    costHigh: 5000,
    costPer: "total (3-10 days)",
    duration: "3-10 days depending on substance",
    description: "Medically supervised withdrawal management. Essential for alcohol and benzodiazepine withdrawal, which can be life-threatening.",
    includes: ["24/7 medical monitoring", "Vital signs monitoring", "Medication to manage symptoms", "Seizure prevention (alcohol/benzos)", "IV fluids if needed", "Transition planning to next level of care"],
    intensity: "highest",
  },
  {
    key: "mat-suboxone",
    name: "MAT — Buprenorphine (Suboxone)",
    shortName: "MAT: Suboxone",
    category: "MAT",
    costLow: 200,
    costHigh: 600,
    costPer: "per month",
    duration: "Ongoing — months to years",
    description: "Partial opioid agonist prescribed by qualified providers. Can be taken at home. Considered gold standard for opioid use disorder.",
    includes: ["Monthly prescriber visits", "Medication (buprenorphine/naloxone)", "Urine drug screens", "Counseling (often required)", "Dosage adjustments"],
    intensity: "low",
  },
  {
    key: "mat-methadone",
    name: "MAT — Methadone",
    shortName: "MAT: Methadone",
    category: "MAT",
    costLow: 100,
    costHigh: 400,
    costPer: "per month",
    duration: "Ongoing — daily clinic visits initially",
    description: "Full opioid agonist dispensed through licensed clinics. Requires daily visits initially, with take-home privileges earned over time.",
    includes: ["Daily clinic visits (initially)", "Medication dispensing", "Counseling services", "Drug testing", "Gradual take-home privileges"],
    intensity: "medium",
  },
  {
    key: "mat-vivitrol",
    name: "MAT — Naltrexone (Vivitrol)",
    shortName: "MAT: Vivitrol",
    category: "MAT",
    costLow: 1000,
    costHigh: 1500,
    costPer: "per month",
    duration: "Monthly injection, ongoing",
    description: "Opioid blocker given as a monthly injection. Requires full detox before starting. Also FDA-approved for alcohol use disorder.",
    includes: ["Monthly injection", "Prescriber visit", "Pre-treatment detox (required)", "Lab work", "Counseling (recommended)"],
    intensity: "low",
  },
  {
    key: "sober-living",
    name: "Sober Living / Halfway House",
    shortName: "Sober Living",
    category: "Housing",
    costLow: 500,
    costHigh: 2500,
    costPer: "per month",
    duration: "3-12+ months typical",
    description: "Structured, substance-free housing with house rules, peer support, and accountability. Residents typically work or attend school.",
    includes: ["Shared housing (furnished)", "House rules and structure", "Peer accountability", "Drug testing", "House meetings", "Connection to outpatient services"],
    intensity: "low",
  },
];

const INTENSITY_COLORS: Record<string, { bg: string; text: string }> = {
  low: { bg: "bg-sage-50 dark:bg-sage-950/30", text: "text-sage-700 dark:text-sage-400" },
  medium: { bg: "bg-amber-50 dark:bg-amber-950/30", text: "text-amber-700 dark:text-amber-400" },
  high: { bg: "bg-orange-50 dark:bg-orange-950/30", text: "text-orange-700 dark:text-orange-400" },
  highest: { bg: "bg-crisis-50 dark:bg-crisis-950/30", text: "text-crisis-700 dark:text-crisis-400" },
};

const INTENSITY_LABELS: Record<string, string> = {
  low: "Lower Intensity",
  medium: "Moderate Intensity",
  high: "High Intensity",
  highest: "Highest Intensity",
};

function formatCost(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

/* ── Main Component ───────────────────────────────────── */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function TreatmentCostClient({ faqData }: Props) {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [shareMessage, setShareMessage] = useState("");

  const selected = selectedKey ? TREATMENTS.find((t) => t.key === selectedKey) : null;

  const handlePrint = useCallback(() => window.print(), []);
  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/treatment-cost-estimator";
    if (mode === "blank" || !selected) {
      if (navigator.share) {
        try { await navigator.share({ title: "Treatment Cost Estimator", text: "See estimated costs for addiction treatment by type. Free and private.", url }); return; } catch { /* cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    const summary = `Treatment Cost Estimate: ${selected.name}\nEstimated: ${formatCost(selected.costLow)} - ${formatCost(selected.costHigh)} ${selected.costPer}\nDuration: ${selected.duration}\n\nGet estimates for all treatment types: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "Treatment Cost Estimate", text: summary }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Estimate copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [selected]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Informational</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Treatment Cost Estimator
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          How much does addiction treatment cost? Select a treatment type below to see estimated cost ranges, what is typically included, and options for paying.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\uD83D\uDCB0", text: "Cost Ranges" },
            { icon: "\u2139\uFE0F", text: "Estimates Only" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Last reviewed: March 2026</p>
      </header>

      {/* Cost disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 mb-6">
        <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
          <strong>These are general national estimates.</strong> Actual costs vary significantly by geographic location, facility type (standard vs. luxury), specific services offered, and individual circumstances. Always contact facilities directly for accurate pricing. Many facilities offer free assessments.
        </p>
      </div>

      <AdSlot position="cost-top" className="mb-6" />

      {/* Treatment Type Selector */}
      <div className="card p-6 sm:p-8 mb-6">
        <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Select Treatment Type</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5">Choose a type to see cost details and what is included.</p>

        <div className="space-y-3">
          {["Outpatient", "Residential", "Medical", "MAT", "Housing"].map((category) => (
            <div key={category}>
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">{category === "MAT" ? "Medication-Assisted Treatment" : category}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {TREATMENTS.filter((t) => t.category === category).map((t) => {
                  return (
                    <button
                      key={t.key}
                      onClick={() => setSelectedKey(t.key === selectedKey ? null : t.key)}
                      className={`text-left px-4 py-3 rounded-xl text-sm transition-all border ${
                        selectedKey === t.key
                          ? "bg-sage-600 dark:bg-sage-500 text-white border-sage-600 dark:border-sage-500 shadow-md"
                          : "bg-sand-50 dark:bg-night-700 text-neutral-700 dark:text-neutral-200 border-sand-200 dark:border-neutral-700 hover:border-sage-300 dark:hover:border-sage-700"
                      }`}
                      aria-pressed={selectedKey === t.key}
                    >
                      <span className="font-semibold block">{t.shortName}</span>
                      <span className={`text-xs ${selectedKey === t.key ? "text-sage-100" : "text-neutral-400 dark:text-neutral-500"}`}>
                        {formatCost(t.costLow)} - {formatCost(t.costHigh)} {t.costPer}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Treatment Details */}
      {selected && (
        <div className="animate-fade-in space-y-6" aria-live="polite">
          {/* Cost Display */}
          <div className="card p-6 sm:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50">{selected.name}</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{selected.duration}</p>
              </div>
              <span className={`badge ${INTENSITY_COLORS[selected.intensity].bg} ${INTENSITY_COLORS[selected.intensity].text} text-xs`}>
                {INTENSITY_LABELS[selected.intensity]}
              </span>
            </div>

            {/* Big cost range */}
            <div className="bg-sand-50 dark:bg-night-700 rounded-2xl p-5 mb-5">
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">Estimated Cost Range</p>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-50">{formatCost(selected.costLow)}</span>
                <span className="text-neutral-400 dark:text-neutral-500 text-lg">—</span>
                <span className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-50">{formatCost(selected.costHigh)}</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{selected.costPer}</p>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">{selected.description}</p>

            {/* What is included */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-3">Typically Includes</h3>
              <ul className="space-y-1.5">
                {selected.includes.map((item) => (
                  <li key={item} className="text-sm text-neutral-600 dark:text-neutral-300 flex gap-2">
                    <span className="text-sage-500 mt-0.5 shrink-0">&#x2713;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Insurance Coverage */}
          <div className="card p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Insurance Coverage</h3>
            <div className="bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4 mb-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                The <strong>Mental Health Parity and Addiction Equity Act (MHPAEA)</strong> requires most insurance plans to cover substance use disorder treatment at the same level as medical conditions. This includes employer-sponsored plans, ACA Marketplace plans, Medicaid, and Medicare.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li className="flex gap-2"><span className="text-sage-500 shrink-0">1.</span>Call the number on your insurance card</li>
              <li className="flex gap-2"><span className="text-sage-500 shrink-0">2.</span>Ask about &ldquo;substance use disorder benefits&rdquo; or &ldquo;behavioral health coverage&rdquo;</li>
              <li className="flex gap-2"><span className="text-sage-500 shrink-0">3.</span>Ask about deductibles, copays, and prior authorization requirements</li>
              <li className="flex gap-2"><span className="text-sage-500 shrink-0">4.</span>Ask if they have a list of in-network treatment providers</li>
            </ul>
          </div>

          {/* Financial Assistance */}
          <div className="card p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Financial Assistance Options</h3>
            <div className="space-y-3">
              {[
                { title: "Sliding Scale Fees", desc: "Many facilities adjust costs based on your income. Ask about reduced rates during your initial call." },
                { title: "Medicaid", desc: "Covers substance abuse treatment in all states. Income-based eligibility has expanded under the ACA. Apply at healthcare.gov or your state Medicaid office." },
                { title: "State-Funded Programs", desc: "Every state has substance abuse treatment programs funded by federal block grants. Call SAMHSA at 1-800-662-4357 for referrals." },
                { title: "Treatment Scholarships", desc: "Some facilities and nonprofits offer scholarships or grants for treatment. Ask facilities directly about financial aid programs." },
                { title: "Payment Plans", desc: "Many treatment centers offer monthly payment plans to spread costs over time without requiring full payment upfront." },
              ].map((opt) => (
                <div key={opt.title} className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                  <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-200 mb-1">{opt.title}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SAMHSA Treatment Locator */}
          <div className="bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-2xl p-5">
            <p className="font-semibold text-sage-800 dark:text-sage-200 mb-2">Find Treatment Near You</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
              SAMHSA&apos;s Treatment Locator is a free, confidential service that helps you find facilities in your area. Available 24/7.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-sage-700 dark:text-sage-400"><strong>Call:</strong> 1-800-662-4357 (SAMHSA National Helpline)</p>
              <p className="text-sage-700 dark:text-sage-400"><strong>Online:</strong> findtreatment.gov</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setSelectedKey(null)} className="btn-secondary text-sm flex-1 min-w-[120px]">
              Compare Options
            </button>
            <button onClick={handlePrint} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Print Estimate
            </button>
            <button onClick={() => handleShare("results")} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Share Estimate
            </button>
            <button onClick={() => handleShare("blank")} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Share Tool
            </button>
          </div>
          {shareMessage && (
            <p className="text-center text-sm font-medium text-sage-600 dark:text-sage-400 animate-fade-in">{shareMessage}</p>
          )}

          {/* Reflection */}
          {REFLECTION_PROMPTS["treatment-cost-estimator"] && (
            <ReflectionPrompts
              prompts={REFLECTION_PROMPTS["treatment-cost-estimator"].prompts}
              toolName={REFLECTION_PROMPTS["treatment-cost-estimator"].toolName}
            />
          )}

          <AdSlot position="cost-results" className="mt-6" />
        </div>
      )}

      {/* Comparison Table (always visible) */}
      <section className="mt-12 print:hidden">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Cost Comparison at a Glance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-sand-200 dark:border-neutral-700">
                <th scope="col" className="text-left py-3 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Treatment Type</th>
                <th scope="col" className="text-left py-3 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Cost Range</th>
                <th scope="col" className="text-left py-3 font-semibold text-neutral-700 dark:text-neutral-200 hidden sm:table-cell">Duration</th>
              </tr>
            </thead>
            <tbody>
              {TREATMENTS.map((t) => (
                <tr
                  key={t.key}
                  className={`border-b border-sand-100 dark:border-neutral-800 cursor-pointer hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors ${selectedKey === t.key ? "bg-sage-50 dark:bg-sage-950/20" : ""}`}
                  onClick={() => setSelectedKey(t.key)}
                >
                  <td className="py-2.5 pr-4 text-neutral-700 dark:text-neutral-200">{t.shortName}</td>
                  <td className="py-2.5 pr-4 text-neutral-600 dark:text-neutral-300 whitespace-nowrap">
                    {formatCost(t.costLow)} - {formatCost(t.costHigh)}
                    <span className="text-neutral-400 dark:text-neutral-500 text-xs ml-1">/{t.costPer.replace("per ", "").replace("total ", "")}</span>
                  </td>
                  <td className="py-2.5 text-neutral-500 dark:text-neutral-400 hidden sm:table-cell">{t.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3">Click any row to see details. All costs are general national estimates without insurance.</p>
      </section>

      {/* Educational Content */}
      <section className="mt-12 space-y-8 print:hidden">
        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Understanding Levels of Care
          </h2>
          <div className="prose-custom">
            <p>
              Addiction treatment is not one-size-fits-all. The American Society of Addiction Medicine (ASAM) defines a continuum of care from least to most intensive. The appropriate level depends on the severity of the substance use disorder, co-occurring mental health conditions, medical needs, recovery environment, and readiness to change.
            </p>
            <p>
              Most people benefit from starting at the level recommended by a professional assessment, then stepping down to less intensive care as they stabilize. For example, someone might start with medical detox, transition to residential treatment, step down to IOP, and eventually move to outpatient counseling and support groups.
            </p>
            <p>
              Cost should not be the only factor in choosing treatment. Research from the National Institute on Drug Abuse (NIDA) suggests that <strong>90 days is the minimum duration for lasting behavior change</strong> in residential settings, and that longer treatment is associated with better outcomes across all treatment types. The most expensive option is not always the best, and free or low-cost programs can be highly effective.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            The True Cost of Not Getting Help
          </h2>
          <div className="prose-custom">
            <p>
              While treatment costs can feel daunting, the cost of untreated addiction is far higher. Studies estimate that substance use disorders cost the United States over <strong>$600 billion annually</strong> in healthcare expenses, lost productivity, criminal justice costs, and other societal impacts. On a personal level, active addiction costs individuals through lost income, legal problems, medical emergencies, relationship damage, and reduced quality of life.
            </p>
            <p>
              Treatment works. According to NIDA, treatment reduces drug use by 40-60%, comparable to treatment success rates for chronic conditions like diabetes and hypertension. Every dollar invested in treatment yields an estimated $4-7 in savings from reduced drug-related crime, criminal justice costs, and theft alone. When healthcare savings are included, total savings can exceed costs by a ratio of 12 to 1.
            </p>
            <p>
              If cost is a barrier, explore the <Link href="/money-saved-recovery-calculator" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">Money Saved in Recovery Calculator</Link> to see how recovery pays for itself over time, or check the <Link href="/withdrawal-timeline" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">Withdrawal Timeline</Link> to understand what to expect when you stop using.
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
      <footer className="mt-12 space-y-4 text-xs text-neutral-400 dark:text-neutral-500">
        <div className="bg-sand-50 dark:bg-night-800 rounded-2xl p-5 space-y-2">
          <p className="font-semibold text-neutral-500 dark:text-neutral-400">About This Tool</p>
          <p>
            The Treatment Cost Estimator provides <strong>general national cost estimates</strong> for informational purposes only.
            These are not quotes, and actual costs vary significantly based on geographic location, facility type, specific services,
            insurance coverage, and individual circumstances. Always contact treatment facilities directly for accurate pricing.
          </p>
          <p>
            This tool does not provide medical advice or treatment recommendations. The appropriate level of care should be determined
            by a qualified healthcare professional based on a comprehensive assessment.
          </p>
          <p>
            All interactions are processed entirely in your browser. Nothing is stored or transmitted.
          </p>
          <ToolReviewerBio />
        </div>

        <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-800 rounded-2xl p-5">
          <p className="font-semibold text-warm-700 dark:text-warm-300 mb-2">Need Help Now?</p>
          <ul className="space-y-1 text-warm-600 dark:text-warm-400">
            <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (free, confidential, 24/7)</li>
            <li><strong>SAMHSA Treatment Locator:</strong> findtreatment.gov</li>
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
