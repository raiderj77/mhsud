import Link from "next/link";
import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, faqJsonLd, SITE_URL } from "@/lib/metadata";
import { ToolGrid } from "@/components/ToolGrid";
import type { ToolCategory, Tool } from "@/components/ToolGrid";
import { SITE_AUTHOR } from "@/config/author";

export const metadata: Metadata = createMetadata({
  path: "/",
  title: "MindCheck Tools | Free, Private Mental Health Self-Checks",
  description:
    "Free mental health screening and self-reflection tools from MindCheck Tools. No signup; interactive answers are processed in your browser and not intentionally sent to us.",
});

const TOOL_CATEGORIES: ToolCategory[] = [
  "Depression & Mood",
  "Anxiety & Stress",
  "PTSD & Trauma",
  "Substance Use & Addiction",
  "Other Conditions",
  "Stress, Burnout & Well-Being",
  "Recovery Tools",
];

const TOOLS: Tool[] = [
  {
    href: "/phq-9-depression-test",
    title: "PHQ-9 Depression Self-Check",
    description: "9-question validated depression screener used worldwide by clinicians and researchers.",
    badge: "Validated",
    time: "~2 min",
    questions: 9,
    color: "sage",
    status: "live",
    category: "Depression & Mood",
  },
  {
    href: "/ces-d-depression-scale",
    title: "CES-D Depression Scale",
    description: "20-item NIMH depression screener covering mood, guilt, hopelessness, appetite, and sleep. Includes 4 reverse-scored positive items. Cutoff of 16+.",
    badge: "Validated",
    time: "~5 min",
    questions: 20,
    color: "sage",
    status: "live",
    category: "Depression & Mood",
  },
  {
    href: "/gad-7-anxiety-test",
    title: "GAD-7 Anxiety Self-Check",
    description: "7-question validated anxiety screener for generalized anxiety symptoms.",
    badge: "Validated",
    time: "~2 min",
    questions: 7,
    color: "sage",
    status: "live",
    category: "Anxiety & Stress",
  },
  {
    href: "/dass-21-depression-anxiety-stress",
    title: "DASS-21 Information",
    description: "Why this site does not administer or score the DASS-21 publicly, with citations and non-equivalent screening alternatives.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Anxiety & Stress",
  },
  {
    href: "/spin-social-anxiety-test",
    title: "SPIN Social Anxiety Information",
    description: "Evidence, licensing limits, and non-equivalent permitted options without reproducing, administering, or scoring the SPIN.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Anxiety & Stress",
  },
  {
    href: "/k6-distress-scale",
    title: "K6 Psychological Distress Scale",
    description: "6-item measure of nonspecific psychological distress used in national health surveys. Past 30 days. Score of 13+ = serious psychological distress.",
    badge: "Validated",
    time: "~2 min",
    questions: 6,
    color: "sage",
    status: "live",
    category: "Anxiety & Stress",
  },
  {
    href: "/holmes-rahe-stress-inventory",
    title: "Holmes-Rahe Inventory Information",
    description: "Evidence and reuse limits for the Holmes-Rahe inventory without displaying events, weights, scores, or health-risk tiers.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Anxiety & Stress",
  },
  {
    href: "/pcl-5-ptsd-screening",
    title: "PCL-5 PTSD Screening",
    description: "20-item validated PTSD screening measure developed by the National Center for PTSD.",
    badge: "Validated",
    time: "~5 min",
    questions: 20,
    color: "sage",
    status: "live",
    category: "PTSD & Trauma",
  },
  {
    href: "/pc-ptsd-5-screening",
    title: "PC-PTSD-5 PTSD Screen",
    description: "5-item yes/no PTSD screen developed by the VA National Center for PTSD. Quick first-step screen with trauma exposure gate question. Cutoff of 3+ is positive.",
    badge: "Validated",
    time: "~1 min",
    questions: 5,
    color: "sage",
    status: "live",
    category: "PTSD & Trauma",
  },
  {
    href: "/ace-questionnaire",
    title: "ACE Questionnaire Information",
    description: "Trauma-informed evidence and provenance limits without collecting childhood-experience answers or calculating an ACE score.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "PTSD & Trauma",
  },
  {
    href: "/audit-alcohol-test",
    title: "AUDIT Alcohol Use Screen",
    description: "10-item WHO alcohol screening tool to reflect on your relationship with alcohol.",
    badge: "WHO",
    time: "~3 min",
    questions: 10,
    color: "sage",
    status: "live",
    category: "Substance Use & Addiction",
  },
  {
    href: "/audit-c-alcohol-screen",
    title: "AUDIT-C Quick Screen",
    description: "3-question brief alcohol screen used in primary care settings worldwide.",
    badge: "Quick",
    time: "~1 min",
    questions: 3,
    color: "sage",
    status: "live",
    category: "Substance Use & Addiction",
  },
  {
    href: "/cage-aid-substance-abuse-screening",
    title: "CAGE-AID Screening Information",
    description: "Evidence and reproduction-rights context without displaying questions, collecting substance-use answers, or returning a score.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Substance Use & Addiction",
  },
  {
    href: "/crafft-substance-screening",
    title: "CRAFFT Youth Screening Information",
    description: "Youth-appropriate evidence and reproduction-approval requirements without administering or scoring the CRAFFT.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Substance Use & Addiction",
  },
  {
    href: "/who-assist-substance-screening",
    title: "WHO ASSIST Information",
    description: "Evidence and WHO public-use limits without reproducing the questionnaire, collecting answers, or returning intervention guidance.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Substance Use & Addiction",
  },
  {
    href: "/bac-calculator",
    title: "BAC Calculator",
    description: "Estimate blood alcohol content using the Widmark formula. See BAC level, effects, legal status, and time until sober.",
    badge: "Original",
    time: "~1 min",
    questions: 4,
    color: "sage",
    status: "live",
    category: "Substance Use & Addiction",
  },
  {
    href: "/standard-drinks-calculator",
    title: "Standard Drinks Calculator",
    description: "Calculate how many standard drinks are in any beverage. 16 presets with visual comparison bars show that many common drinks are more than one standard drink.",
    badge: "Original",
    time: "~1 min",
    questions: 2,
    color: "sage",
    status: "live",
    category: "Substance Use & Addiction",
  },
  {
    href: "/asrs-adhd-screening",
    title: "ASRS ADHD Screening",
    description: "6-item WHO-developed screening tool for adult ADHD using research-validated thresholds.",
    badge: "WHO",
    time: "~2 min",
    questions: 6,
    color: "sage",
    status: "live",
    category: "Other Conditions",
  },

  {
    href: "/scoff-eating-disorder-screening",
    title: "SCOFF Screening Information",
    description: "Eating-disorder screening evidence and permissions context without displaying questions, collecting answers, or scoring.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Other Conditions",
  },
  {
    href: "/msi-bpd-screening",
    title: "MSI-BPD Screening Information",
    description: "Evidence, limitations, and unresolved reuse terms without administering the MSI-BPD or assigning likelihood ranges.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Other Conditions",
  },
  {
    href: "/aq-10-autism-screening",
    title: "Adult AQ-10 Information",
    description: "Evidence and commercial/electronic-use limits without reproducing questions, scoring traits, or returning an autism result.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Other Conditions",
  },
  {
    href: "/athens-insomnia-scale",
    title: "Athens Insomnia Scale Information",
    description: "Validation and permissions context without displaying scale items, calculating a score, or assigning insomnia severity.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Other Conditions",
  },
  {
    href: "/ucla-loneliness-scale",
    title: "UCLA Loneliness Scale Information",
    description: "Evidence and noncommercial-use limits without reproducing the scale, collecting answers, or labeling a loneliness level.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Other Conditions",
  },
  {
    href: "/rosenberg-self-esteem-scale",
    title: "Rosenberg Self-Esteem Scale",
    description: "10-item research measure of global self-esteem (Rosenberg, 1965). Four-point scale with five reverse-scored items; it is not a diagnostic instrument.",
    badge: "Validated",
    time: "~2 min",
    questions: 10,
    color: "sage",
    status: "live",
    category: "Other Conditions",
  },
  {
    href: "/who-5-wellbeing-index",
    title: "WHO-5 Well-Being Index",
    description: "5-item positive wellbeing measure from the WHO. Percentage score 0-100. Below 50% suggests further evaluation; below 28% suggests depression screening.",
    badge: "WHO",
    time: "~2 min",
    questions: 5,
    color: "sage",
    status: "live",
    category: "Stress, Burnout & Well-Being",
  },
  {
    href: "/work-stress-check",
    title: "Work Stress & Burnout",
    description: "12 original questions about work demands, control, support, and recovery.",
    badge: "Original",
    time: "~3 min",
    questions: 12,
    color: "sage",
    status: "live",
    category: "Stress, Burnout & Well-Being",
  },
  {
    href: "/burnout-assessment-tool",
    title: "Burnout Reflection",
    description: "15 original questions for educational reflection on exhaustion, detachment, and sense of effectiveness. Score bands are not clinical cutoffs.",
    badge: "Original",
    time: "~3 min",
    questions: 15,
    color: "sage",
    status: "live",
    category: "Stress, Burnout & Well-Being",
  },
  {
    href: "/mental-load-calculator",
    title: "Mental Load Calculator",
    description: "See how planning, remembering, and organizing is distributed at home.",
    badge: "Original",
    time: "~3 min",
    questions: 24,
    color: "sage",
    status: "live",
    category: "Stress, Burnout & Well-Being",
  },
  {
    href: "/sleep-and-mood-check",
    title: "Sleep & Mood Reflection",
    description: "Explore how your sleep quality, habits, and mood affect each other.",
    badge: "Original",
    time: "~2 min",
    questions: 10,
    color: "sage",
    status: "live",
    category: "Stress, Burnout & Well-Being",
  },
  {
    href: "/attachment-style-quiz",
    title: "ECR-R Attachment Information",
    description: "Dimensional attachment research and commercial-use limits without administering the ECR-R or assigning categorical styles.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Stress, Burnout & Well-Being",
  },
  {
    href: "/big-five-personality-test",
    title: "Big Five Personality Test (IPIP-NEO-50)",
    description: "50-item personality assessment measuring Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism based on the IPIP-NEO framework.",
    badge: "Validated",
    time: "~8 min",
    questions: 50,
    color: "sage",
    status: "live",
    category: "Stress, Burnout & Well-Being",
  },
  {
    href: "/brief-resilience-scale",
    title: "Brief Resilience Scale Information",
    description: "Validation evidence and unresolved reuse terms without reproducing items, reverse keys, scores, or resilience tiers.",
    badge: "Information",
    time: "~3 min read",
    questions: null,
    color: "sage",
    status: "live",
    category: "Stress, Burnout & Well-Being",
  },
  {
    href: "/sobriety-calculator",
    title: "Sobriety Calculator",
    description: "Track days sober, hit milestones, and estimate money saved. Your date saves locally and persists between visits.",
    badge: "Original",
    time: "~1 min",
    questions: 1,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/money-saved-recovery-calculator",
    title: "Money Saved in Recovery",
    description: "Calculate how much you've saved by not drinking or using. Preset averages by substance with projections and comparisons.",
    badge: "Original",
    time: "~2 min",
    questions: 3,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/health-recovery-timeline",
    title: "Health Recovery Timeline",
    description: "See what happens to your body after you quit. Interactive timeline based on medical research for alcohol, nicotine, and opioids.",
    badge: "Original",
    time: "~1 min",
    questions: 2,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/halt-check-in",
    title: "HALT Check-In",
    description: "Educational HALT reflection for Hungry, Angry, Lonely, and Tired needs. Ratings stay separate and do not estimate relapse risk.",
    badge: "Original",
    time: "~1 min",
    questions: 4,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/withdrawal-timeline",
    title: "Withdrawal Timeline",
    description: "See what to expect during withdrawal from alcohol, opioids, benzos, stimulants, meth, cannabis, or nicotine. Phase-by-phase symptoms with severity ratings.",
    badge: "Original",
    time: "~2 min",
    questions: 1,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/treatment-cost-estimator",
    title: "Treatment Cost Estimator",
    description: "See estimated costs for addiction treatment: outpatient, IOP, residential rehab, detox, MAT, and sober living. Insurance and financial aid info included.",
    badge: "Original",
    time: "~2 min",
    questions: 1,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/relapse-prevention-plan",
    title: "Relapse Prevention Plan Builder",
    description: "Build a personalized relapse prevention plan. Identify triggers, warning signs, coping strategies, emergency contacts, safe activities, and a craving action plan.",
    badge: "Original",
    time: "~10 min",
    questions: 7,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/urge-surfing-timer",
    title: "Urge Surfing Timer",
    description: "Ride out cravings with a guided mindfulness timer. Wave animation, box breathing, and rotating prompts based on Alan Marlatt's urge surfing technique.",
    badge: "Original",
    time: "~15 min",
    questions: 1,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/readiness-to-change",
    title: "Readiness to Change Assessment",
    description: "Identify your Stage of Change based on Prochaska & DiClemente's model. 15 statements with stage-specific next steps and resources.",
    badge: "Original",
    time: "~5 min",
    questions: 15,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/trigger-identification-worksheet",
    title: "Addiction Trigger Identification Worksheet",
    description: "Organize substance-use cues across six practical categories and review general response-planning ideas. Educational worksheet, not a relapse-risk assessment.",
    badge: "Original",
    time: "~8 min",
    questions: 6,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/coping-skills-randomizer",
    title: "Coping Skills Randomizer",
    description: "Get a random healthy coping skill when you are struggling. 51 evidence-based skills across 6 categories with instructions. Filter by category, save favorites.",
    badge: "Original",
    time: "~1 min",
    questions: 1,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/daily-recovery-check-in",
    title: "Daily Recovery Check-In",
    description: "Quick daily wellness check: mood, cravings, sleep, stress, connection, physical health. Track trends over 7 and 30 days with a streak counter. Saves locally.",
    badge: "Original",
    time: "~2 min",
    questions: 8,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
  {
    href: "/family-impact-assessment",
    title: "Family Impact Assessment",
    description: "For families concerned about a loved one's substance use. 18 questions across 7 domains: behavior changes, finances, relationships, children, emotional toll, safety, and enabling behaviors.",
    badge: "Original",
    time: "~5 min",
    questions: 18,
    color: "sage",
    status: "live",
    category: "Recovery Tools",
  },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Local Browser Processing",
    text: "Screening answers and scores are processed locally and are not intentionally sent to MindCheck Tools. No account or login is required. Ordinary website requests can still create hosting records that include the page requested.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Evidence-Based",
    text: "Core pages implement published screening instruments such as the PHQ-9, GAD-7, and AUDIT, with sources and limitations shown.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Education, Not Diagnosis",
    text: "Every result includes clear context about what the score means and, importantly, what it cannot tell you. We always encourage professional follow-up.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Home", url: SITE_URL }])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "@id": `${SITE_URL}/#application`,
            name: "MindCheck Tools",
            alternateName: "MindCheck",
            url: SITE_URL,
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            isAccessibleForFree: true,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            dateModified: "2026-08-09",
            description:
              "Free, private published screening instruments and original educational self-checks. Screening answers are processed in the browser and are not sent to MindCheck Tools.",
            provider: {
              "@id": `${SITE_URL}/#organization`,
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
            Free &amp; Private
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            MindCheck Tools: private mental health{" "}
            <span className="text-sage-600 dark:text-sage-400">self-checks</span>
          </h1>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            MindCheck Tools provides published mental health and substance use screening instruments alongside original educational self-checks and practical tools. Each page identifies its basis, sources, scoring approach, and limits.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5">
            Maintained by MindCheck Tools. Screening content is reviewed within the stated credential scope by{" "}
            <Link
              href="/about/jason-ramirez"
              className="underline hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
            </Link>
            .
          </p>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-xl">
            Use published screeners and clearly labeled educational tools in the privacy of your browser. No account or login is required, and screening answers are not sent to MindCheck Tools.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/screening-tools#alcohol-substance" className="btn-primary text-base">
              Substance use &amp; recovery
            </Link>
            <Link href="/screening-tools" className="btn-secondary text-base">
              Browse screening tools
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16" aria-labelledby="choose-a-path">
        <h2 id="choose-a-path" className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Choose the path that fits what you need
        </h2>
        <p className="max-w-3xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-7">
          Start with a published screener, an original educational exercise, practical recovery support, or implementation resources for professional teams. Every tool states its evidence, ownership, privacy behavior, and limits.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border-2 border-sage-500 bg-sage-50 p-6 shadow-sm dark:border-sage-600 dark:bg-sage-950/30 md:row-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-sage-700 dark:text-sage-300">Primary focus</p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Substance use and recovery</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Use rights-aware alcohol screening information, browser-local recovery planning tools, withdrawal-safety education, and practical worksheets. These resources do not diagnose a substance use disorder or replace treatment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/screening-tools#alcohol-substance" className="btn-primary">Alcohol and substance-use tools</Link>
              <Link href="/screening-tools#recovery-tools" className="btn-secondary">Recovery calculators and plans</Link>
            </div>
          </article>
          <article className="card p-6">
            <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50">Published mental-health screeners</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">Explore source-linked screeners and information-only instrument pages. A screening result is not a diagnosis.</p>
            <Link href="/screening-tools#choose-a-tool" className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-sage-700 hover:underline dark:text-sage-400">Choose a screener &rarr;</Link>
          </article>
          <article className="card p-6">
            <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50">Educational self-checks and skills</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">Use clearly labeled original exercises for reflection, coping practice, planning, and everyday well-being.</p>
            <Link href="/screening-tools#coping" className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-sage-700 hover:underline dark:text-sage-400">Browse educational tools &rarr;</Link>
          </article>
          <article className="card p-6 md:col-start-2">
            <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50">For professional teams</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">Review a fixed-scope, no-health-data screening implementation readiness service and a fictional sample deliverable.</p>
            <Link href="/for-professionals" className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-sage-700 hover:underline dark:text-sage-400">Professional resources &rarr;</Link>
          </article>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="sr-only">Why trust our tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-sage-50 dark:bg-sage-950/30 text-sage-600 dark:text-sage-400 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Answer-first brand and navigation summary */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16" aria-labelledby="what-is-mindcheck-tools">
        <div className="card p-6 sm:p-8">
          <h2 id="what-is-mindcheck-tools" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            What is MindCheck Tools?
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
            MindCheck Tools is a free, no-signup collection of published mental health and substance use screeners, clearly labeled educational self-reflection tools, and practical worksheets. Interactive answers are processed in your browser and are not intentionally sent to MindCheck Tools.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
            These resources provide education and screening context, not a diagnosis, medical advice, treatment, or emergency care. Instrument sources, reuse boundaries, scoring methods, and limitations are disclosed on the relevant pages.
          </p>
          <nav aria-label="MindCheck Tools overview" className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <Link href="/screening-tools" className="font-semibold text-sage-700 dark:text-sage-400 underline underline-offset-2">
              Browse all maintained tools
            </Link>
            <Link href="/methodology" className="font-semibold text-sage-700 dark:text-sage-400 underline underline-offset-2">
              How content is reviewed
            </Link>
            <Link href="/clinical-evidence" className="font-semibold text-sage-700 dark:text-sage-400 underline underline-offset-2">
              Review source evidence
            </Link>
            <Link href="/for-professionals" className="font-semibold text-sage-700 dark:text-sage-400 underline underline-offset-2">
              Professional implementation resources
            </Link>
          </nav>
        </div>
      </section>


      {/* Tools Grid + Targeted Screenings (client component for search/filter) */}
      <ToolGrid
        tools={TOOLS}
        toolCategories={TOOL_CATEGORIES}
        targetedScreenings={[]}
      />

      {/* GEO Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        <section>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How do mental health screening tools work?
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            Published screeners use established questionnaires and source-based scoring. Original tools are labeled as educational self-checks with site-defined reflection ranges. Neither type provides a diagnosis.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
            Instruments such as the PHQ-9 and GAD-7 have published validation studies and are used as one part of clinical screening. Their accuracy varies by population and setting, so a score should be interpreted with symptoms, functioning, history, and professional judgment. See the{" "}
            <Link href="/clinical-evidence" className="text-sage-600 dark:text-sage-400 underline underline-offset-2">clinical evidence directory</Link>{" "}
            for source studies and reported limitations.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            On MindCheck Tools, screening answers and scores are processed locally and are not intentionally sent to us. A few optional worksheets and recovery tools save entries in local browser storage only when their page says so.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What is the difference between a screening tool and a diagnosis?
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            A screening tool identifies patterns that may suggest a condition. Only a licensed clinician can provide a diagnosis after a comprehensive evaluation.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
            Screening results can support a more informed conversation with a healthcare provider, but they are only a starting point. A clinician can consider context the questionnaire cannot capture, including medical conditions, medications, duration, functioning, and safety.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            If symptoms persist, interfere with daily life, or concern you even when a score is low, seek professional evaluation. Do not wait for a questionnaire result when there is an urgent safety concern.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Are these screening tools free and confidential?
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            Yes. Tools can be used without payment or an account. Screening answers and scores are processed locally and are not intentionally sent to MindCheck Tools.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Scoring logic runs locally using client-side JavaScript. Some optional worksheets and recovery trackers can retain entries in your browser so they work across visits; those pages disclose local storage before use.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            When should I seek immediate help?
          </h2>
          <p className="text-base font-semibold text-red-700 dark:text-red-400 leading-relaxed mb-4">
            In the United States, call or text the 988 Suicide &amp; Crisis Lifeline for crisis support. If there is immediate danger, call your local emergency number. Outside the U.S., use local crisis services.
          </p>
          <ul className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2 mb-6">
            <li>
              <strong>988 Suicide and Crisis Lifeline (U.S.)</strong>, call{" "}
              <a href="tel:988" className="text-sage-600 dark:text-sage-400 underline underline-offset-2">988</a>
              {" "}or <a href="sms:988" className="text-sage-600 dark:text-sage-400 underline underline-offset-2">text 988</a> (free, 24/7)
            </li>
            <li>
              <strong>Crisis Text Line (U.S.)</strong>, text HOME to{" "}
              <a href="sms:741741" className="text-sage-600 dark:text-sage-400 underline underline-offset-2">741741</a>
              {" "}(free, 24/7)
            </li>
            <li>
              <strong>SAMHSA National Helpline (U.S.)</strong>, {" "}
              <a href="tel:18006624357" className="text-sage-600 dark:text-sage-400 underline underline-offset-2">1-800-662-4357</a>
              {" "}(free, confidential, 24/7 treatment referrals)
            </li>
          </ul>
          <p className="text-sm mb-6">
            <a href="/crisis-resources" className="inline-flex min-h-[44px] items-center underline underline-offset-2">Find U.S. and international crisis resources</a>
          </p>
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 text-sm mb-3">Further reading</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="https://www.nimh.nih.gov" target="_blank" rel="nofollow noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline underline-offset-2">
                  National Institute of Mental Health (NIMH)
                </a>
                {" "}, nimh.nih.gov
              </li>
              <li>
                <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="nofollow noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline underline-offset-2">
                  SAMHSA National Helpline
                </a>
                {" "}, samhsa.gov
              </li>
              <li>
                <a href="https://www.who.int/health-topics/mental-health" target="_blank" rel="nofollow noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline underline-offset-2">
                  WHO Mental Health Resources
                </a>
                {" "}, who.int/mental_health
              </li>
            </ul>
          </div>
        </section>

      </div>

      {/* Privacy Callout */}
      <section className="bg-sage-600 dark:bg-sage-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              How local processing works
            </h2>
            <p className="text-white/80 leading-relaxed mb-3">
              Screening answers and scores are processed locally and are not intentionally sent to MindCheck Tools. Optional local-saving tools disclose when an entry can remain in this browser. Ordinary website requests can still create hosting records. Prints, downloads, copies, device or browser sync, backups, and shared-browser or device access are outside this boundary.
            </p>
            <p className="text-white/60 text-sm">
              MindCheck Tools does not display ads or use Google Analytics. Cookie-free aggregate measurement is limited to selected non-sensitive pages and receives no screening answers or scores. No account or login is required. Ordinary website request records are described in the notice below.
            </p>
            <p className="mt-4 text-sm">
              <Link
                href="/consumer-health-data-privacy"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Read our Consumer Health Data Privacy Notice
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-8">
          Frequently Asked Questions About Mental Health Screenings
        </h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              faqJsonLd([
                {
                  question: "Which pages use published screening instruments?",
                  answer: "Pages such as the PHQ-9, GAD-7, AUDIT, and AUDIT-C implement published screening instruments with their source-based questions and scoring. Other pages are explicitly labeled as original educational self-checks. Neither type replaces professional evaluation.",
                },
                {
                  question: "What is the PHQ-9 used for?",
                  answer: "The PHQ-9 (Patient Health Questionnaire-9) is a 9-question depression symptom screener. Scores range from 0 to 27, with higher scores reflecting more self-reported symptoms. A score of 10 is a commonly studied screening cutoff, but symptoms, functioning, and safety matter at every score. This tool does not provide a diagnosis.",
                },
                {
                  question: "What is the difference between the AUDIT and AUDIT-C?",
                  answer: "The AUDIT is a 10-question alcohol-risk screening instrument developed through a World Health Organization collaborative project. The AUDIT-C is a separately studied 3-question subset focused on consumption. Both are screens, not alcohol use disorder diagnoses.",
                },
                {
                  question: "Who should use these mental health screening tools?",
                  answer: "These tools are for adults who want to better understand their mental health or substance use patterns. They are not intended for use by children, as diagnostic tools, or as a replacement for professional clinical assessment. In the United States, call or text 988 for crisis support. Elsewhere, use local crisis services. In immediate danger, call your local emergency number.",
                },
                {
                  question: "What should I do if my screening score is high?",
                  answer: "A high score indicates that your symptoms may warrant professional evaluation, it does not mean you have a diagnosis. We recommend sharing your results with a licensed mental health professional, your primary care physician, or, in the United States, calling SAMHSA's National Helpline at 1-800-662-4357 for free, confidential treatment referrals.",
                },
              ])
            ),
          }}
        />
        <div className="space-y-6">
          {[
            {
              q: "Which pages use published screening instruments?",
              a: "Pages such as the PHQ-9, GAD-7, AUDIT, and AUDIT-C implement published screening instruments with their source-based questions and scoring. Other pages are explicitly labeled as original educational self-checks. Neither type replaces professional evaluation.",
            },
            {
              q: "What is the PHQ-9 used for?",
              a: "The PHQ-9 (Patient Health Questionnaire-9) is a 9-question depression symptom screener. Scores range from 0 to 27, with higher scores reflecting more self-reported symptoms. A score of 10 is a commonly studied screening cutoff, but symptoms, functioning, and safety matter at every score. This tool does not provide a diagnosis.",
            },
            {
              q: "What is the difference between the AUDIT and AUDIT-C?",
              a: "The AUDIT is a 10-question alcohol-risk screening instrument developed through a World Health Organization collaborative project. The AUDIT-C is a separately studied 3-question subset focused on consumption. Both are screens, not alcohol use disorder diagnoses.",
            },
            {
              q: "Who should use these mental health screening tools?",
              a: "These tools are for adults who want to better understand their mental health or substance use patterns. They are not intended for use by children, as diagnostic tools, or as a replacement for professional clinical assessment. In the United States, call or text 988 for crisis support. Elsewhere, use local crisis services. In immediate danger, call your local emergency number.",
            },
            {
              q: "What should I do if my screening score is high?",
              a: "A high score indicates that your symptoms may warrant professional evaluation, it does not mean you have a diagnosis. We recommend sharing your results with a licensed mental health professional, your primary care physician, or, in the United States, calling SAMHSA's National Helpline at 1-800-662-4357 for free, confidential treatment referrals.",
            },
          ].map((faq) => (
            <div key={faq.q} className="card p-5 sm:p-6">
              <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                {faq.q}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
