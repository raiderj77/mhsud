import Link from "next/link";
import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/",
  title: "MindCheck Tools — Free, Private Mental Health Self-Checks",
  description:
    "Take free, private mental health and substance use self-checks. PHQ-9 depression screening, GAD-7 anxiety test, AUDIT alcohol screening — scored in your browser, answers never stored.",
});

const TOOLS = [
  {
    href: "/phq-9-depression-test",
    title: "PHQ-9 Depression Self-Check",
    description: "9-question validated depression screener used worldwide by clinicians and researchers.",
    badge: "Validated",
    time: "~2 min",
    questions: 9,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/ces-d-depression-scale",
    title: "CES-D Depression Scale",
    description: "20-item NIMH depression screener covering mood, guilt, hopelessness, appetite, and sleep. Includes 4 reverse-scored positive items. Cutoff of 16+.",
    badge: "Validated",
    time: "~5 min",
    questions: 20,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/gad-7-anxiety-test",
    title: "GAD-7 Anxiety Self-Check",
    description: "7-question validated anxiety screener for generalized anxiety symptoms.",
    badge: "Validated",
    time: "~2 min",
    questions: 7,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/audit-alcohol-test",
    title: "AUDIT Alcohol Use Screen",
    description: "10-item WHO alcohol screening tool to reflect on your relationship with alcohol.",
    badge: "WHO",
    time: "~3 min",
    questions: 10,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/audit-c-alcohol-screen",
    title: "AUDIT-C Quick Screen",
    description: "3-question brief alcohol screen used in primary care settings worldwide.",
    badge: "Quick",
    time: "~1 min",
    questions: 3,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/dast-10-drug-screening",
    title: "DAST-10 Drug Screening",
    description: "10-item validated drug use screening test to reflect on drug use patterns and their impact.",
    badge: "Validated",
    time: "~2 min",
    questions: 10,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/cage-aid-substance-abuse-screening",
    title: "CAGE-AID Substance Use Screen",
    description: "4-question validated screening for both alcohol and drug use concerns.",
    badge: "Quick",
    time: "~1 min",
    questions: 4,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/pcl-5-ptsd-screening",
    title: "PCL-5 PTSD Screening",
    description: "20-item validated PTSD screening measure developed by the National Center for PTSD.",
    badge: "Validated",
    time: "~5 min",
    questions: 20,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/pc-ptsd-5-screening",
    title: "PC-PTSD-5 PTSD Screen",
    description: "5-item yes/no PTSD screen developed by the VA National Center for PTSD. Quick first-step screen with trauma exposure gate question. Cutoff of 3+ is positive.",
    badge: "Validated",
    time: "~1 min",
    questions: 5,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/asrs-adhd-screening",
    title: "ASRS ADHD Screening",
    description: "6-item WHO-developed screening tool for adult ADHD using research-validated thresholds.",
    badge: "WHO",
    time: "~2 min",
    questions: 6,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/mdq-bipolar-screening",
    title: "MDQ Bipolar Screening",
    description: "Validated 3-part screening tool for bipolar spectrum disorders. Assesses symptoms, co-occurrence, and functional impact.",
    badge: "Validated",
    time: "~3 min",
    questions: 15,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/oci-r-ocd-screening",
    title: "OCI-R OCD Screening",
    description: "18-item validated OCD screening with 6 subscales: Hoarding, Checking, Ordering, Neutralizing, Washing, Obsessing.",
    badge: "Validated",
    time: "~3 min",
    questions: 18,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/dass-21-depression-anxiety-stress",
    title: "DASS-21 Depression/Anxiety/Stress",
    description: "One test, three answers. Screens depression, anxiety, and stress simultaneously with separate severity ratings.",
    badge: "3-in-1",
    time: "~4 min",
    questions: 21,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/who-5-wellbeing-index",
    title: "WHO-5 Well-Being Index",
    description: "5-item positive wellbeing measure from the WHO. Percentage score 0-100. Below 50% suggests further evaluation; below 28% suggests depression screening.",
    badge: "WHO",
    time: "~2 min",
    questions: 5,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/k6-distress-scale",
    title: "K6 Psychological Distress Scale",
    description: "6-item measure of nonspecific psychological distress used in national health surveys. Past 30 days. Score of 13+ = serious psychological distress.",
    badge: "Validated",
    time: "~2 min",
    questions: 6,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/scoff-eating-disorder-screening",
    title: "SCOFF Eating Disorder Screen",
    description: "5-question validated screener for anorexia, bulimia, and other eating disorders. Quick Yes/No format.",
    badge: "Quick",
    time: "~1 min",
    questions: 5,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/aq-10-autism-screening",
    title: "AQ-10 Autism Spectrum Screen",
    description: "10-item validated screening tool for autism spectrum traits in adults. Developed at the University of Cambridge.",
    badge: "Validated",
    time: "~2 min",
    questions: 10,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/sobriety-calculator",
    title: "Sobriety Calculator",
    description: "Track days sober, hit milestones, and estimate money saved. Your date saves locally and persists between visits.",
    badge: "Original",
    time: "~1 min",
    questions: 1,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/money-saved-recovery-calculator",
    title: "Money Saved in Recovery",
    description: "Calculate how much you've saved by not drinking or using. Preset averages by substance with projections and comparisons.",
    badge: "Original",
    time: "~2 min",
    questions: 3,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/health-recovery-timeline",
    title: "Health Recovery Timeline",
    description: "See what happens to your body after you quit. Interactive timeline based on medical research for alcohol, nicotine, and opioids.",
    badge: "Original",
    time: "~1 min",
    questions: 2,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/bac-calculator",
    title: "BAC Calculator",
    description: "Estimate blood alcohol content using the Widmark formula. See BAC level, effects, legal status, and time until sober.",
    badge: "Original",
    time: "~1 min",
    questions: 4,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/standard-drinks-calculator",
    title: "Standard Drinks Calculator",
    description: "Calculate how many standard drinks are in any beverage. 16 presets with visual comparison bars show that many common drinks are more than one standard drink.",
    badge: "Original",
    time: "~1 min",
    questions: 2,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/halt-check-in",
    title: "HALT Check-In",
    description: "Daily recovery check-in based on the HALT acronym. Rate Hungry, Angry, Lonely, Tired and see your vulnerability level with coping suggestions.",
    badge: "Original",
    time: "~1 min",
    questions: 4,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/withdrawal-timeline",
    title: "Withdrawal Timeline",
    description: "See what to expect during withdrawal from alcohol, opioids, benzos, stimulants, meth, cannabis, or nicotine. Phase-by-phase symptoms with severity ratings.",
    badge: "Original",
    time: "~2 min",
    questions: 1,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/treatment-cost-estimator",
    title: "Treatment Cost Estimator",
    description: "See estimated costs for addiction treatment: outpatient, IOP, residential rehab, detox, MAT, and sober living. Insurance and financial aid info included.",
    badge: "Original",
    time: "~2 min",
    questions: 1,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/relapse-prevention-plan",
    title: "Relapse Prevention Plan Builder",
    description: "Build a personalized relapse prevention plan. Identify triggers, warning signs, coping strategies, emergency contacts, safe activities, and a craving action plan.",
    badge: "Original",
    time: "~10 min",
    questions: 7,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/urge-surfing-timer",
    title: "Urge Surfing Timer",
    description: "Ride out cravings with a guided mindfulness timer. Wave animation, box breathing, and rotating prompts based on Alan Marlatt's urge surfing technique.",
    badge: "Original",
    time: "~15 min",
    questions: 1,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/readiness-to-change",
    title: "Readiness to Change Assessment",
    description: "Identify your Stage of Change based on Prochaska & DiClemente's model. 15 statements with stage-specific next steps and resources.",
    badge: "Original",
    time: "~5 min",
    questions: 15,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/trigger-identification-worksheet",
    title: "Trigger Identification Worksheet",
    description: "Identify your personal triggers across 6 categories: people, places, emotions, situations, times, and sensory cues. Get a printable trigger profile with coping strategies.",
    badge: "Original",
    time: "~8 min",
    questions: 6,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/coping-skills-randomizer",
    title: "Coping Skills Randomizer",
    description: "Get a random healthy coping skill when you are struggling. 51 evidence-based skills across 6 categories with instructions. Filter by category, save favorites.",
    badge: "Original",
    time: "~1 min",
    questions: 1,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/daily-recovery-check-in",
    title: "Daily Recovery Check-In",
    description: "Quick daily wellness check: mood, cravings, sleep, stress, connection, physical health. Track trends over 7 and 30 days with a streak counter. Saves locally.",
    badge: "Original",
    time: "~2 min",
    questions: 8,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/family-impact-assessment",
    title: "Family Impact Assessment",
    description: "For families concerned about a loved one's substance use. 18 questions across 7 domains: behavior changes, finances, relationships, children, emotional toll, safety, and enabling behaviors.",
    badge: "Original",
    time: "~5 min",
    questions: 18,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/crafft-substance-screening",
    title: "CRAFFT Screening for Teens",
    description: "Validated substance use screening for ages 12-21 (CRAFFT 2.1+N). Part A gates Part B yes/no CRAFFT questions. Score of 2+ is positive screen. Includes nicotine screening.",
    badge: "Validated",
    time: "~2 min",
    questions: 10,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/who-assist-substance-screening",
    title: "WHO ASSIST Substance Screening",
    description: "Comprehensive WHO screening covering 10 substance categories. Stepped wizard with per-substance risk scores (0-39). Three risk levels with intervention recommendations.",
    badge: "WHO",
    time: "~5–10 min",
    questions: 67,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/ace-questionnaire",
    title: "ACE Questionnaire",
    description: "10-item Adverse Childhood Experiences questionnaire from the CDC-Kaiser study. Yes/no format with resilience framing and protective factors. Score 0-10.",
    badge: "CDC",
    time: "~2 min",
    questions: 10,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/spin-social-anxiety-test",
    title: "SPIN Social Anxiety Test",
    description: "17-item Social Phobia Inventory (Connor et al., 2000). Three subscales: Fear, Avoidance, and Physiological. Total 0-68. Clinical cutoff of 19+ for social anxiety disorder.",
    badge: "Validated",
    time: "~3 min",
    questions: 17,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/holmes-rahe-stress-inventory",
    title: "Holmes-Rahe Stress Inventory",
    description: "43-item life stress checklist from Holmes & Rahe (1967). Check events from the past 12 months, scored in Life Change Units. Three risk tiers.",
    badge: "Validated",
    time: "~3 min",
    questions: 43,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/rosenberg-self-esteem-scale",
    title: "Rosenberg Self-Esteem Scale",
    description: "10-item measure of global self-esteem (Rosenberg, 1965). 4-point scale with 5 reverse-scored items. Score 0-30. Below 15 suggests low self-esteem.",
    badge: "Validated",
    time: "~2 min",
    questions: 10,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/ucla-loneliness-scale",
    title: "UCLA Loneliness Scale",
    description: "20-item measure of subjective loneliness (Russell, 1996). Rated 1-4 with 9 reverse-scored items. Score 20-80. Research cutoff 44+ for elevated loneliness.",
    badge: "Validated",
    time: "~5 min",
    questions: 20,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/athens-insomnia-scale",
    title: "Athens Insomnia Scale",
    description: "8-item insomnia severity measure based on ICD-10 criteria (Soldatos et al., 2000). Past month. Score 0-24. Cutoff of 6+ for insomnia (93% sensitivity).",
    badge: "Validated",
    time: "~2 min",
    questions: 8,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/work-stress-check",
    title: "Work Stress & Burnout",
    description: "12 original questions about work demands, control, support, and recovery.",
    badge: "Original",
    time: "~3 min",
    questions: 12,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/mental-load-calculator",
    title: "Mental Load Calculator",
    description: "See how planning, remembering, and organizing is distributed at home.",
    badge: "Original",
    time: "~3 min",
    questions: 24,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
  {
    href: "/sleep-and-mood-check",
    title: "Sleep & Mood Reflection",
    description: "Explore how your sleep quality, habits, and mood affect each other.",
    badge: "Original",
    time: "~2 min",
    questions: 10,
    color: "sage" as const,
    status: "live" as "live" | "coming",
  },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Completely Private",
    text: "Your screening answers are scored in your browser and never sent to any server. No accounts, no login, no way to connect your results to you.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Evidence-Based",
    text: "Our core tools use validated, public-domain instruments trusted by clinicians worldwide — the PHQ-9, GAD-7, and AUDIT.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Education, Not Diagnosis",
    text: "Every result includes clear context about what the score means and — importantly — what it cannot tell you. We always encourage professional follow-up.",
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

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
            Free &amp; Private
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-5">
            Mental health self-checks you can{" "}
            <span className="text-sage-600 dark:text-sage-400">trust</span>
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-xl">
            Take validated, evidence-based screening tools in the privacy of your browser. No accounts, no login, no judgment — your answers are scored locally and never stored.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/phq-9-depression-test" className="btn-primary text-base">
              Take the PHQ-9
            </Link>
            <Link href="#tools" className="btn-secondary text-base">
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
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

      {/* Tools Grid */}
      <section id="tools" className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            Self-Check Tools
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Choose a screening tool to get started. Each one runs entirely in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.status === "live" ? tool.href : "#"}
              className={`card p-6 group transition-all hover:shadow-md hover:border-sage-300 dark:hover:border-sage-700 ${
                tool.status === "coming" ? "opacity-60 pointer-events-none" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex gap-2">
                  <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">
                    {tool.badge}
                  </span>
                  {tool.status === "coming" && (
                    <span className="badge bg-warm-50 dark:bg-warm-950/30 text-warm-700 dark:text-warm-400">
                      Coming Soon
                    </span>
                  )}
                </div>
                <svg className="w-5 h-5 text-neutral-300 dark:text-neutral-600 group-hover:text-sage-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-lg text-neutral-800 dark:text-neutral-100 mb-1.5 group-hover:text-sage-700 dark:group-hover:text-sage-400 transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                {tool.description}
              </p>
              <div className="flex gap-4 text-xs text-neutral-400 dark:text-neutral-500">
                <span>{tool.questions} questions</span>
                <span>{tool.time}</span>
                <span>🔒 Private</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Targeted Screenings */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            Screenings for Specific Groups
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            The same validated tools, with educational context tailored to your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              href: "/depression-test-for-teens",
              title: "Depression Test for Teens",
              description: "PHQ-9 screening with teen-specific info on signs, stats, and youth crisis resources.",
              badge: "Teens",
            },
            {
              href: "/anxiety-test-for-women",
              title: "Anxiety Test for Women",
              description: "GAD-7 screening plus context on hormonal factors, life stages, and women\u2019s mental health.",
              badge: "Women",
            },
            {
              href: "/alcohol-screening-for-college-students",
              title: "Alcohol Screening for College Students",
              description: "AUDIT screening with college drinking stats, binge drinking info, and campus resources.",
              badge: "College",
            },
            {
              href: "/burnout-test-for-nurses",
              title: "Burnout Test for Nurses",
              description: "Burnout assessment with nursing-specific info on compassion fatigue and shift work impact.",
              badge: "Nurses",
            },
            {
              href: "/depression-screening-for-veterans",
              title: "Depression Screening for Veterans",
              description: "PHQ-9 screening with veteran-specific context on PTSD, transition, and VA resources.",
              badge: "Veterans",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card p-5 group hover:shadow-md hover:border-sage-300 dark:hover:border-sage-700 transition-all"
            >
              <span className="badge bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 mb-3 inline-block">
                {item.badge}
              </span>
              <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-1.5 group-hover:text-sage-700 dark:group-hover:text-sage-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Privacy Callout */}
      <section className="bg-sage-600 dark:bg-sage-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              Your privacy is not negotiable
            </h2>
            <p className="text-sage-100/80 leading-relaxed mb-3">
              Every answer you give is processed entirely in your browser using client-side JavaScript. We have no server, no database, and no way to see your responses. When you close the page, your data is gone.
            </p>
            <p className="text-sage-200/60 text-sm">
              We use analytics and may display ads — but they never have access to your screening responses. No accounts. No login. No answer data ever leaves your device.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-2">
              Guides &amp; Education
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400">
              Understand the tools, the science behind them, and when to seek help.
            </p>
          </div>
          <Link href="/blog" className="hidden sm:inline-flex text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              title: "PHQ-9 Explained: How Clinicians Use This Depression Questionnaire",
              slug: "phq-9-guide",
              excerpt: "Learn what the PHQ-9 measures, how scores are interpreted, and why it's only a starting point.",
            },
            {
              title: "GAD-7 Anxiety Scale: What It Measures and How Doctors Interpret Scores",
              slug: "gad-7-guide",
              excerpt: "A plain-language guide to the world's most common anxiety screener.",
            },
            {
              title: "AUDIT Alcohol Screening: How It Works and Why Clinicians Use It",
              slug: "audit-guide",
              excerpt: "Understanding the WHO's alcohol screening tool and what your score can and can't tell you.",
            },
          ].map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <span className="text-xs font-medium text-sage-600 dark:text-sage-400 mb-2 block">Guide</span>
              <h3 className="font-serif font-semibold text-neutral-800 dark:text-neutral-100 mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-3 text-xs text-sage-600 dark:text-sage-400 font-medium hover:underline">Read guide →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
