import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "@/lib/metadata";
import { AUTHOR_SCHEMA, SITE_AUTHOR } from "@/config/author";
import { getToolClassification } from "@/lib/toolClassifications";
import { CATEGORIES, CLINICAL_GUIDES, EVIDENCE_ANCHORS } from "@/lib/screeningDirectory";

const PAGE_PATH = "/screening-tools";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TODAY = "2026-08-05";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Mental Health Screening Tools, Information, and Self-Checks",
  description:
    "Browse maintained mental health and substance use screening instruments, educational self-checks, calculators, and coping tools. Each page states its source, purpose, and limits.",
  keywords: [
    "free mental health screening",
    "validated mental health self-check",
    "PHQ-9 GAD-7 AUDIT online",
    "depression anxiety screening tools",
    "free PTSD ADHD screening",
  ],
});

const INFORMATION_ONLY_PATHS = new Set([
  "/dass-21-depression-anxiety-stress",
  "/spin-social-anxiety-test",
  "/ace-questionnaire",
  "/cage-aid-substance-abuse-screening",
  "/crafft-substance-screening",
  "/scoff-eating-disorder-screening",
  "/msi-bpd-screening",
  "/aq-10-autism-screening",
  "/attachment-style-quiz",
  "/holmes-rahe-stress-inventory",
  "/ucla-loneliness-scale",
  "/brief-resilience-scale",
  "/athens-insomnia-scale",
  "/who-assist-substance-screening",
]);

function toolBasis(href: string) {
  return getToolClassification(href)?.classification ?? "Manual classification required";
}

const PRACTICAL_TOOLS = [
  { name: "Mental Load Calculator", href: "/mental-load-calculator", description: "Estimate the cognitive and emotional load you carry across household and care domains." },
  { name: "Sobriety Calculator", href: "/sobriety-calculator", description: "Track days, months, and years sober from a chosen quit date." },
  { name: "Money Saved Recovery Calculator", href: "/money-saved-recovery-calculator", description: "Estimate money saved by stopping or reducing alcohol or other drug use." },
  { name: "Treatment Cost Estimator", href: "/treatment-cost-estimator", description: "Ballpark estimate for inpatient, outpatient, and ongoing treatment costs in the United States." },
  { name: "BAC Calculator", href: "/bac-calculator", description: "Educational estimate of blood alcohol concentration based on drinks, weight, and time. Not a substitute for a breathalyzer." },
  { name: "Standard Drinks Calculator", href: "/standard-drinks-calculator", description: "Convert beer, wine, and spirits into United States standard drink units." },
  { name: "Withdrawal Timeline", href: "/withdrawal-timeline", description: "Educational timeline of typical withdrawal phases for several substances." },
  { name: "Health Recovery Timeline", href: "/health-recovery-timeline", description: "Educational timeline of physical recovery milestones after stopping alcohol or other drug use." },
];

const COPING_TOOLS = [
  { name: "Box Breathing Exercise", href: "/box-breathing-exercise", description: "Four-by-four breath pacing used in stress regulation." },
  { name: "Five Senses Grounding", href: "/five-senses-grounding", description: "Sensory grounding exercise for acute distress and dissociation." },
  { name: "CBT Thought Record", href: "/cbt-thought-record", description: "Structured CBT worksheet for situation, thought, feeling, evidence, and balanced thought." },
  { name: "Cognitive Distortion Identifier", href: "/cognitive-distortion-identifier", description: "Explore 16 common thinking patterns with examples and guided reframing prompts." },
  { name: "DBT Crisis Skills", href: "/dbt-crisis-skills", description: "DBT distress tolerance and TIP skills reference for high-distress moments." },
  { name: "Urge Surfing Timer", href: "/urge-surfing-timer", description: "Timer-based urge surfing practice from relapse prevention work." },
  { name: "HALT Check-In", href: "/halt-check-in", description: "Hungry, angry, lonely, tired self-check used in recovery support." },
  { name: "Worry Time Scheduler", href: "/worry-time-scheduler", description: "Structured worry-postponement exercise with mixed online evidence." },
  { name: "Daily Recovery Check-In", href: "/daily-recovery-check-in", description: "Brief daily reflection on cravings, triggers, gratitude, and plan." },
  { name: "Coping Skills Randomizer", href: "/coping-skills-randomizer", description: "Random prompt across distraction, soothing, and connection categories." },
  { name: "Addiction Trigger Identification Worksheet", href: "/trigger-identification-worksheet", description: "Organize substance-use cues and review general planning ideas; not a relapse-risk assessment." },
  { name: "Relapse Prevention Plan", href: "/relapse-prevention-plan", description: "Build a written plan covering warning signs, supports, and steps." },
  { name: "Safety Plan", href: "/safety-plan", description: "Stanley-Brown style suicide safety plan template." },
  { name: "Readiness to Change", href: "/readiness-to-change", description: "Stages of change reflection used in motivational interviewing." },
  { name: "Family Impact Assessment", href: "/family-impact-assessment", description: "Reflective check for how a substance use or mental health pattern is affecting family relationships." },
];

const TOOL_CHOOSER_ROWS = [
  {
    concern: "Low mood, reduced interest, or other depressive symptoms over the past two weeks",
    tool: "PHQ-9",
    href: "/phq-9-depression-test",
    detail: "A published nine-item depression symptom screener for adults.",
    evidence: "phq-9",
  },
  {
    concern: "Persistent worry or generalized anxiety symptoms over the past two weeks",
    tool: "GAD-7",
    href: "/gad-7-anxiety-test",
    detail: "A published seven-item generalized anxiety symptom screener.",
    evidence: "gad-7",
  },
  {
    concern: "A very brief combined check for depression and anxiety symptoms",
    tool: "PHQ-4",
    href: "/phq-4-anxiety-depression-screen",
    detail: "Four items: two about depressive symptoms and two about anxiety symptoms.",
    evidence: "phq-4",
  },
  {
    concern: "A brief initial check for PTSD symptoms after a potentially traumatic event",
    tool: "PC-PTSD-5",
    href: "/pc-ptsd-5-screening",
    detail: "A published five-item primary-care PTSD screen for adults.",
    evidence: "pc-ptsd-5",
  },
  {
    concern: "A more detailed review of PTSD symptoms over the past month",
    tool: "PCL-5",
    href: "/pcl-5-ptsd-screening",
    detail: "A published 20-item PTSD symptom checklist for adults.",
    evidence: "pcl-5",
  },
  {
    concern: "Alcohol use patterns and possible alcohol-related risk",
    tool: "AUDIT",
    href: "/audit-alcohol-test",
    detail: "The World Health Organization's full 10-item alcohol use screen.",
    evidence: "audit",
  },
  {
    concern: "A brief check focused on alcohol consumption",
    tool: "AUDIT-C",
    href: "/audit-c-alcohol-screen",
    detail: "The three consumption items from the full AUDIT.",
    evidence: "audit-c",
  },
  {
    concern: "Learning about brief screening for alcohol or other drug-use concerns",
    tool: "CAGE-AID information",
    href: "/cage-aid-substance-abuse-screening",
    detail: "An informational overview only; MindCheck Tools does not administer or score this rights-unresolved instrument.",
    evidence: "cage-aid",
  },
  {
    concern: "Adult ADHD symptoms",
    tool: "ASRS",
    href: "/asrs-adhd-screening",
    detail: "An adult self-report symptom checklist for people age 18 and older.",
    evidence: "asrs",
  },
] as const;

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mental Health Screening Tools, Information, and Self-Checks",
    description:
      "Index of maintained interactive screeners, rights-limited instrument information, and educational self-checks on MindCheck Tools, organized by topic and limitations.",
    datePublished: "2026-04-26",
    dateModified: TODAY,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    reviewedBy: AUTHOR_SCHEMA,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: PAGE_URL,
  };
}

function itemListJsonLd() {
  const items: { "@type": string; position: number; url: string; name: string }[] = [];
  let pos = 1;
  for (const cat of CATEGORIES) {
    for (const tool of cat.tools) {
      items.push({
        "@type": "ListItem",
        position: pos++,
        url: `${SITE_URL}${tool.href}`,
        name: tool.acronym ? `${tool.name} (${tool.acronym})` : tool.name,
      });
    }
  }
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mental Health Screening Tools, Information, and Self-Checks",
    description: "Maintained interactive screeners, instrument information pages, and educational self-checks indexed on MindCheck Tools.",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export default function ScreeningToolsIndexPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Screening tools", url: PAGE_URL },
  ]);
  const totalEntries = CATEGORIES.reduce((acc, c) => acc + c.tools.length, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd()) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-6"
      >
        <Link href="/" className="hover:text-sage-700 dark:hover:text-sage-400">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-neutral-700 dark:text-neutral-300">Screening tools</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight mb-3">
        Mental Health Screening Tools, Information, and Self-Checks
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Last updated: August 5, 2026. Reviewed by{" "}
        <Link href="/about/jason-ramirez" className="text-sage-700 dark:text-sage-400 hover:underline">
          {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
        </Link>
        .
      </p>

      <div
        role="alert"
        className="mb-6 px-4 py-3 rounded-lg border border-crisis-200 bg-crisis-50 dark:border-crisis-800 dark:bg-crisis-950/30 text-sm text-crisis-800 dark:text-crisis-200"
      >
        <strong>If you are in crisis:</strong> call or text{" "}
        <strong>988</strong> (Suicide and Crisis Lifeline, United States), text{" "}
        <strong>HOME to 741741</strong> (Crisis Text Line), or call SAMHSA at{" "}
        <strong>1-800-662-4357</strong>. International:{" "}
        <a
          href="https://findahelpline.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          findahelpline.com
        </a>
        .
      </div>

      <div
        role="note"
        className="mb-8 px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 text-sm text-amber-800 dark:text-amber-300"
      >
        <strong>Choose by page type:</strong> Published screeners offer a questionnaire.
        Information-only pages explain an instrument but have no questionnaire or score.
        Original educational self-checks support reflection and are not clinically validated.
        No result is a diagnosis.
      </div>

      <section className="mb-10 prose-medical text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          MindCheck Tools currently lists {totalEntries} maintained screening,
          instrument-information, and self-check pages, plus practical calculators,
          worksheets, and coping-skill tools. Some instruments are information-only
          because permission to offer their questionnaire online has not been established.
        </p>
        <p>
          For source studies, validated populations, reported accuracy, and
          licensing notes for the published instruments we document, see the{" "}
          <Link href="/clinical-evidence" className="text-sage-700 dark:text-sage-400 hover:underline">
            clinical evidence
          </Link>{" "}
          page. For how the site selects instruments, preserves scoring, and
          handles your responses, see the{" "}
          <Link href="/methodology" className="text-sage-700 dark:text-sage-400 hover:underline">
            methodology
          </Link>{" "}
          page.
        </p>
      </section>

      <section id="choose-a-tool" className="mb-10 scroll-mt-24">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
          Which mental health screening tool should I use?
        </h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          Start with the concern you want to explore. This table maps common concerns to
          published screening instruments; it is not a diagnosis or a personalized clinical
          recommendation. A healthcare professional may choose a different tool based on age,
          history, safety, symptoms, and care setting.
        </p>
        <p className="mb-2 text-xs text-neutral-600 dark:text-neutral-400 sm:hidden">
          Swipe horizontally to see what each tool covers and its evidence source.
        </p>
        <div
          role="region"
          aria-label="Concern-to-screening-tool guide"
          tabIndex={0}
          className="overflow-x-auto rounded-xl border border-sand-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-sage-500"
        >
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">Common concerns and screening tools that may fit them</caption>
            <thead className="bg-sand-50 dark:bg-night-800">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">Concern</th>
                <th scope="col" className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">Start with</th>
                <th scope="col" className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">What it covers</th>
                <th scope="col" className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-200 dark:divide-neutral-700">
              {TOOL_CHOOSER_ROWS.map((row) => (
                <tr key={row.href} className="bg-white dark:bg-night-900 align-top">
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">{row.concern}</td>
                  <td className="px-4 py-3">
                    <Link href={row.href} className="font-semibold text-sage-700 dark:text-sage-400 hover:underline">
                      {row.tool}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">{row.detail}</td>
                  <td className="px-4 py-3">
                    <Link href={`/clinical-evidence#${row.evidence}`} className="text-sage-700 dark:text-sage-400 hover:underline">
                      Evidence
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Comparing related tools? See{" "}
          <Link href="/phq-9-vs-gad-7" className="text-sage-700 dark:text-sage-400 hover:underline">
            PHQ-9 vs GAD-7
          </Link>{" "}
          or{" "}
          <Link href="/audit-vs-audit-c" className="text-sage-700 dark:text-sage-400 hover:underline">
            AUDIT vs AUDIT-C
          </Link>
          .
        </p>
      </section>

      <nav aria-label="Categories" className="mb-10 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-800 p-5">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Jump to a category
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          <li>
            <a href="#choose-a-tool" className="text-sage-700 dark:text-sage-400 hover:underline">
              Choose a screening tool
            </a>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="text-sage-700 dark:text-sage-400 hover:underline">
                {c.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#clinical-guides" className="text-sage-700 dark:text-sage-400 hover:underline">
              Clinical guides and comparisons
            </a>
          </li>
          <li>
            <a href="#recovery-tools" className="text-sage-700 dark:text-sage-400 hover:underline">
              Recovery calculators and practical tools
            </a>
          </li>
          <li>
            <a href="#coping" className="text-sage-700 dark:text-sage-400 hover:underline">
              Coping and skills practice
            </a>
          </li>
        </ul>
      </nav>

      {[...CATEGORIES.map((cat) => ({ ...cat, tools: cat.tools.filter((tool) => !INFORMATION_ONLY_PATHS.has(tool.href)) })), {
        id: "restricted-instruments",
        title: "About restricted instruments",
        intro: "Information only: these pages have no questionnaire or score.",
        tools: CATEGORIES.flatMap((cat) => cat.tools.filter((tool) => INFORMATION_ONLY_PATHS.has(tool.href))),
      }].map((cat) => (
        <section key={cat.id} id={cat.id} className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            {cat.title}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            {cat.intro}
          </p>
          {cat.tools.length === 0 && <p className="mb-4"><a href="#restricted-instruments" className="text-sage-700 underline dark:text-sage-400">Read about restricted instruments below.</a></p>}
          <ul className="space-y-4">
            {cat.tools.map((tool) => (
              <li
                key={tool.href}
                className="rounded-xl border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-900 p-5"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    <Link href={tool.href} className="text-sage-700 dark:text-sage-400 hover:underline">
                      {tool.name}
                    </Link>
                  </h3>
                  {tool.acronym && (
                    <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {tool.acronym}
                    </span>
                  )}
                  <span className="inline-flex items-center rounded-full bg-sand-100 dark:bg-night-800 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                    {toolBasis(tool.href)}
                  </span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                  {tool.description}
                </p>
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400 mb-3">
                  <div>
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-300">Population</dt>
                    <dd>{tool.population}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-300">Length</dt>
                    <dd>{tool.items}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-300">Time</dt>
                    <dd>{tool.time}</dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <Link href={tool.href} className="text-sage-700 dark:text-sage-400 hover:underline font-medium">
                    {INFORMATION_ONLY_PATHS.has(tool.href) ? "Read instrument information" : "Take the self-check"}
                  </Link>
                  {tool.scoreInterpHref && (
                    <Link href={tool.scoreInterpHref} className="text-sage-700 dark:text-sage-400 hover:underline">
                      Score interpretation
                    </Link>
                  )}
                  {EVIDENCE_ANCHORS[tool.href] && (
                    <Link
                      href={`/clinical-evidence#${EVIDENCE_ANCHORS[tool.href]}`}
                      className="text-sage-700 dark:text-sage-400 hover:underline"
                    >
                      Evidence and source
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section id="clinical-guides" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Clinical guides and comparisons
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          Use these guides to choose an appropriate screener, understand how
          related instruments differ, and prepare to discuss a result with a
          healthcare professional.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CLINICAL_GUIDES.map((guide) => (
            <li
              key={guide.href}
              className="rounded-xl border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-900 p-4"
            >
              <Link href={guide.href} className="text-sage-700 dark:text-sage-400 hover:underline font-semibold text-sm">
                {guide.name}
              </Link>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                {guide.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="recovery-tools" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Recovery calculators and practical tools
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          Browser-local planning calculators and source-linked recovery reference timelines, plus one household mental-load calculator. These are not screening instruments and do not produce a score against published clinical cutoffs.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRACTICAL_TOOLS.map((t) => (
            <li
              key={t.href}
              className="rounded-xl border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-900 p-4"
            >
              <Link href={t.href} className="text-sage-700 dark:text-sage-400 hover:underline font-semibold text-sm">
                {t.name}
              </Link>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                {t.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="coping" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Coping and skills practice
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          Brief skills tools drawn from CBT, DBT, motivational interviewing,
          and relapse prevention literature. They are practice aids, not
          screeners and not therapy.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COPING_TOOLS.map((t) => (
            <li
              key={t.href}
              className="rounded-xl border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-900 p-4"
            >
              <Link href={t.href} className="text-sage-700 dark:text-sage-400 hover:underline font-semibold text-sm">
                {t.name}
              </Link>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                {t.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-800 p-5">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          About this index
        </h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Published and maintained by MindCheck Tools. Reviewed for source alignment, limitations, and safety language by{" "}
          <Link href="/about/jason-ramirez" className="text-sage-700 dark:text-sage-400 hover:underline">
            {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
          </Link>
          . For instrument source studies see the{" "}
          <Link href="/clinical-evidence" className="text-sage-700 dark:text-sage-400 hover:underline">
            clinical evidence
          </Link>{" "}
          page. For selection and scoring standards see the{" "}
          <Link href="/methodology" className="text-sage-700 dark:text-sage-400 hover:underline">
            methodology
          </Link>{" "}
          page. To report an error,{" "}
          <Link href="/contact" className="text-sage-700 dark:text-sage-400 hover:underline">
            contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
