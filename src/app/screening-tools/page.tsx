import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "@/lib/metadata";

const PAGE_PATH = "/screening-tools";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TODAY = new Date().toISOString().substring(0, 10);

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "All Free Mental Health Screening Tools and Self-Checks",
  description:
    "A complete index of validated mental health screening tools on MindCheck Tools: depression, anxiety, PTSD, alcohol and substance use, ADHD, eating disorders, OCD, bipolar, BPD, autism, stress, sleep, loneliness, and more. All free and private.",
  keywords: [
    "free mental health screening",
    "validated mental health self-check",
    "PHQ-9 GAD-7 AUDIT online",
    "depression anxiety screening tools",
    "free PTSD ADHD screening",
  ],
});

type Tool = {
  name: string;
  acronym?: string;
  href: string;
  scoreInterpHref?: string;
  description: string;
  population: string;
  items: string;
  time: string;
};

type Category = {
  id: string;
  title: string;
  intro: string;
  tools: Tool[];
};

const CATEGORIES: Category[] = [
  {
    id: "depression",
    title: "Depression",
    intro:
      "Self-checks for depressive symptoms in the past two weeks, including population-specific versions. Scores are educational and do not diagnose major depressive disorder.",
    tools: [
      { name: "PHQ-9 Depression Test", acronym: "PHQ-9", href: "/phq-9-depression-test", scoreInterpHref: "/phq-9-score-interpretation", description: "Nine-item screen for depressive symptom severity used widely in primary care.", population: "General adults", items: "9 items", time: "About 3 minutes" },
      { name: "PHQ-4 Quick Screen", acronym: "PHQ-4", href: "/phq-4-anxiety-depression-screen", description: "Ultra-brief combined depression and anxiety screen, 2 items each.", population: "General adults", items: "4 items", time: "Under 2 minutes" },
      { name: "Am I Depressed Quiz", href: "/am-i-depressed-quiz", description: "Plain-language entry point that walks you through the same depressive symptom set as PHQ-9.", population: "General adults", items: "9 items", time: "About 3 minutes" },
      { name: "CES-D Depression Scale", acronym: "CES-D", href: "/ces-d-depression-scale", description: "Twenty-item depression scale used in community and research settings.", population: "General adults", items: "20 items", time: "About 5 minutes" },
      { name: "Depression Test for Men", href: "/depression-test-for-men", description: "PHQ-9-based check framed for symptom presentations more common in men.", population: "Adult men", items: "9 items", time: "About 3 minutes" },
      { name: "Depression Screening for Men", href: "/depression-screening-for-men", description: "Companion landing page focused on how men often experience depression.", population: "Adult men", items: "9 items", time: "About 3 minutes" },
      { name: "Depression Test for New Moms", href: "/depression-test-for-new-moms", description: "Postpartum-aware depression check for the first year after childbirth.", population: "Postpartum mothers", items: "10 items", time: "About 3 minutes" },
      { name: "Postpartum Depression Test", href: "/postpartum-depression-test", description: "Edinburgh-style postpartum depression screen for the perinatal period.", population: "Perinatal women", items: "10 items", time: "About 3 minutes" },
      { name: "Depression Test for Seniors", href: "/depression-test-for-seniors", description: "Depression screen calibrated for older adults, including somatic and grief-related framing.", population: "Adults 65+", items: "9 items", time: "About 4 minutes" },
      { name: "Depression Test for Teens", href: "/depression-test-for-teens", description: "Adolescent-framed depression screen, parent-aware language.", population: "Adolescents 12 to 17", items: "9 items", time: "About 3 minutes" },
      { name: "Depression Screening for Veterans", href: "/depression-screening-for-veterans", description: "PHQ-9-based screen with veteran-aware context, paired with PTSD resources.", population: "Veterans and active duty", items: "9 items", time: "About 3 minutes" },
    ],
  },
  {
    id: "anxiety",
    title: "Anxiety",
    intro:
      "Generalized anxiety, social anxiety, and combined depression-anxiety-stress checks. Useful as a starting point for a conversation with a clinician about anxious symptoms.",
    tools: [
      { name: "GAD-7 Anxiety Test", acronym: "GAD-7", href: "/gad-7-anxiety-test", scoreInterpHref: "/gad-7-score-interpretation", description: "Seven-item generalized anxiety screen used widely in primary care.", population: "General adults", items: "7 items", time: "About 2 minutes" },
      { name: "DASS-21 Depression, Anxiety, and Stress Scale", acronym: "DASS-21", href: "/dass-21-depression-anxiety-stress", scoreInterpHref: "/dass-21-score-interpretation", description: "Twenty-one-item scale that scores depression, anxiety, and stress separately.", population: "General adults", items: "21 items", time: "About 5 minutes" },
      { name: "SPIN Social Anxiety Test", acronym: "SPIN", href: "/spin-social-anxiety-test", description: "Seventeen-item screen for social anxiety symptoms across fear, avoidance, and physiologic items.", population: "General adults", items: "17 items", time: "About 4 minutes" },
      { name: "Anxiety Test for Men", href: "/anxiety-test-for-men", description: "GAD-7-based check with framing aligned to common male symptom presentations.", population: "Adult men", items: "7 items", time: "About 2 minutes" },
      { name: "Anxiety Test for Women", href: "/anxiety-test-for-women", description: "GAD-7-based check with framing aligned to common female symptom presentations.", population: "Adult women", items: "7 items", time: "About 2 minutes" },
      { name: "Anxiety Test for Teens", href: "/anxiety-test-for-teens", description: "Adolescent-framed anxiety screen.", population: "Adolescents 12 to 17", items: "7 items", time: "About 2 minutes" },
      { name: "Social Anxiety Test for College", href: "/social-anxiety-test-college", description: "Social anxiety screen with college-context examples.", population: "College students", items: "17 items", time: "About 4 minutes" },
    ],
  },
  {
    id: "trauma-ptsd",
    title: "Trauma and PTSD",
    intro:
      "Post-traumatic stress symptom checks plus a screen for adverse childhood experiences. PTSD diagnosis requires a clinical interview, not a self-report screen.",
    tools: [
      { name: "PCL-5 PTSD Checklist", acronym: "PCL-5", href: "/pcl-5-ptsd-screening", scoreInterpHref: "/pcl-5-score-interpretation", description: "Twenty-item DSM-5-aligned PTSD symptom checklist.", population: "General adults", items: "20 items", time: "About 6 minutes" },
      { name: "PC-PTSD-5 Primary Care PTSD Screen", acronym: "PC-PTSD-5", href: "/pc-ptsd-5-screening", description: "Five-item brief PTSD screen used in primary care.", population: "General adults", items: "5 items", time: "Under 2 minutes" },
      { name: "Do I Have PTSD Quiz", href: "/do-i-have-ptsd-quiz", description: "Plain-language entry point built on the PC-PTSD-5 and PCL-5 frameworks.", population: "General adults", items: "5 to 20 items", time: "2 to 6 minutes" },
      { name: "PTSD Test for First Responders", href: "/ptsd-test-first-responders", description: "PTSD screen with examples specific to police, fire, EMS, and dispatch contexts.", population: "First responders", items: "20 items", time: "About 6 minutes" },
      { name: "PTSD Test for Veterans", href: "/ptsd-test-veterans", description: "PTSD screen with combat-related and military-context framing.", population: "Veterans and active duty", items: "20 items", time: "About 6 minutes" },
      { name: "ACE Questionnaire", acronym: "ACE", href: "/ace-questionnaire", scoreInterpHref: "/ace-score-interpretation", description: "Ten-item Adverse Childhood Experiences screen used in trauma-informed care.", population: "Adults reflecting on childhood before age 18", items: "10 items", time: "About 4 minutes" },
    ],
  },
  {
    id: "alcohol-substance",
    title: "Alcohol and substance use",
    intro:
      "Brief screens used in primary care, addiction medicine, and recovery support. Screening identifies risk patterns, not a substance use disorder diagnosis.",
    tools: [
      { name: "AUDIT Alcohol Use Disorders Identification Test", acronym: "AUDIT", href: "/audit-alcohol-test", scoreInterpHref: "/audit-score-interpretation", description: "Ten-item alcohol use screen developed by the World Health Organization.", population: "General adults", items: "10 items", time: "About 3 minutes" },
      { name: "AUDIT-C Quick Alcohol Screen", acronym: "AUDIT-C", href: "/audit-c-alcohol-screen", scoreInterpHref: "/audit-c-score-interpretation", description: "Three-item brief version of the AUDIT focused on consumption.", population: "General adults", items: "3 items", time: "Under 2 minutes" },
      { name: "CAGE-AID Substance Use Screen", acronym: "CAGE-AID", href: "/cage-aid-substance-abuse-screening", description: "Four-item screen for alcohol and other drug problems.", population: "General adults", items: "4 items", time: "Under 2 minutes" },
      { name: "DAST-10 Drug Abuse Screening Test", acronym: "DAST-10", href: "/dast-10-drug-screening", scoreInterpHref: "/dast-10-score-interpretation", description: "Ten-item screen for non-medical drug use problems in the past 12 months.", population: "General adults", items: "10 items", time: "About 3 minutes" },
      { name: "CRAFFT Substance Use Screen", acronym: "CRAFFT", href: "/crafft-substance-screening", description: "Adolescent substance use screen used in pediatric and school-based care.", population: "Adolescents 12 to 21", items: "6 to 9 items", time: "About 3 minutes" },
      { name: "WHO ASSIST Substance Use Screen", acronym: "ASSIST", href: "/who-assist-substance-screening", description: "World Health Organization screen across tobacco, alcohol, and other substances.", population: "General adults", items: "Up to 8 items per substance", time: "5 to 10 minutes" },
      { name: "Am I an Alcoholic Quiz", href: "/am-i-an-alcoholic-quiz", description: "Plain-language entry point built on the AUDIT framework.", population: "General adults", items: "10 items", time: "About 3 minutes" },
      { name: "Alcohol Screening for College Students", href: "/alcohol-screening-for-college-students", description: "AUDIT-based screen with examples specific to college drinking patterns.", population: "College students", items: "10 items", time: "About 3 minutes" },
      { name: "Alcohol Screening for Women", href: "/alcohol-screening-for-women", description: "AUDIT-based screen using the recommended lower threshold for women.", population: "Adult women", items: "10 items", time: "About 3 minutes" },
      { name: "Alcohol Screening for Military", href: "/alcohol-screening-military", description: "AUDIT-based screen with active-duty and veteran context.", population: "Active duty and veterans", items: "10 items", time: "About 3 minutes" },
      { name: "Drug Screening for Teens", href: "/drug-screening-teens", description: "CRAFFT-based teen substance use screen.", population: "Adolescents 12 to 17", items: "6 to 9 items", time: "About 3 minutes" },
      { name: "Substance Abuse Test for Parents", href: "/substance-abuse-test-parents", description: "Reflective screen for parents about their own substance use and family impact.", population: "Parents", items: "10 items", time: "About 3 minutes" },
    ],
  },
  {
    id: "adhd",
    title: "ADHD",
    intro:
      "Adult ADHD screens including the ASRS plus population-framed versions. ADHD diagnosis requires a clinical evaluation, including history and rule-outs.",
    tools: [
      { name: "ASRS Adult ADHD Self-Report Scale", acronym: "ASRS", href: "/asrs-adhd-screening", scoreInterpHref: "/asrs-score-interpretation", description: "Eighteen-item adult ADHD symptom checklist with a six-item screener subset, developed with the World Health Organization.", population: "Adults 18+", items: "18 items (6-item screener)", time: "About 5 minutes" },
      { name: "ADHD Test for Adults", href: "/adhd-test-adults", description: "ASRS-based check framed for first-time adult ADHD self-screening.", population: "Adults 18+", items: "18 items", time: "About 5 minutes" },
      { name: "ADHD Test for Women", href: "/adhd-test-women", description: "ASRS-based screen with framing for inattentive and internalizing presentations more often missed in women.", population: "Adult women", items: "18 items", time: "About 5 minutes" },
      { name: "ADHD Test for Teens", href: "/adhd-test-for-teens", description: "Adolescent-framed ADHD screen.", population: "Adolescents 12 to 17", items: "18 items", time: "About 5 minutes" },
    ],
  },
  {
    id: "eating-disorders",
    title: "Eating disorders",
    intro:
      "Brief screens to surface possible disordered eating. Eating disorder diagnosis requires evaluation by a clinician with training in eating disorders.",
    tools: [
      { name: "SCOFF Eating Disorder Screen", acronym: "SCOFF", href: "/scoff-eating-disorder-screening", description: "Five-item brief screen for anorexia nervosa and bulimia nervosa.", population: "General adults and adolescents", items: "5 items", time: "Under 2 minutes" },
      { name: "Eating Disorder Test for Athletes", href: "/eating-disorder-test-athletes", description: "Disordered-eating screen with athlete-context items including weight-class and aesthetic-sport pressures.", population: "Athletes", items: "5 to 10 items", time: "About 3 minutes" },
    ],
  },
  {
    id: "ocd",
    title: "OCD",
    intro:
      "Obsessive-compulsive symptom screens. OCD diagnosis requires a clinical interview that distinguishes OCD from related disorders.",
    tools: [
      { name: "OCI-R Obsessive Compulsive Inventory Revised", acronym: "OCI-R", href: "/oci-r-ocd-screening", description: "Eighteen-item OCD symptom screen across six subscales.", population: "General adults", items: "18 items", time: "About 4 minutes" },
      { name: "OCD Test for Teens", href: "/ocd-test-teens", description: "Adolescent-framed OCD symptom screen.", population: "Adolescents 12 to 17", items: "18 items", time: "About 4 minutes" },
    ],
  },
  {
    id: "bipolar",
    title: "Bipolar",
    intro:
      "Bipolar spectrum screens focus on lifetime hypomanic or manic episodes. A positive screen is not a bipolar diagnosis and should be reviewed with a clinician.",
    tools: [
      { name: "MDQ Mood Disorder Questionnaire", acronym: "MDQ", href: "/mdq-bipolar-screening", scoreInterpHref: "/mdq-score-interpretation", description: "Thirteen-item bipolar spectrum screen plus impairment and co-occurrence items.", population: "General adults", items: "15 items", time: "About 4 minutes" },
      { name: "Bipolar Test for Young Adults", href: "/bipolar-test-young-adults", description: "MDQ-based screen with framing common to first-episode presentations in young adults.", population: "Young adults 18 to 25", items: "15 items", time: "About 4 minutes" },
    ],
  },
  {
    id: "bpd",
    title: "Borderline personality",
    intro:
      "Brief screens for borderline personality traits. BPD diagnosis requires a structured clinical interview and longitudinal observation, not a self-report screen.",
    tools: [
      { name: "MSI-BPD McLean Screening Instrument for BPD", acronym: "MSI-BPD", href: "/msi-bpd-screening", description: "Ten-item brief screen for borderline personality features.", population: "General adults", items: "10 items", time: "About 3 minutes" },
      { name: "BPD Screening for Young Adults", href: "/bpd-screening-for-young-adults", description: "MSI-BPD-based screen framed for the developmental period when BPD often first presents.", population: "Young adults 18 to 25", items: "10 items", time: "About 3 minutes" },
      { name: "BPD Test for Women", href: "/bpd-test-for-women", description: "MSI-BPD-based screen with framing for presentations commonly missed or mislabeled in women.", population: "Adult women", items: "10 items", time: "About 3 minutes" },
    ],
  },
  {
    id: "autism",
    title: "Autism spectrum",
    intro:
      "Adult autism screening. A positive screen suggests further evaluation by a clinician experienced in autism spectrum assessment, not a diagnosis.",
    tools: [
      { name: "AQ-10 Autism Spectrum Quotient (Short)", acronym: "AQ-10", href: "/aq-10-autism-screening", description: "Ten-item brief autism spectrum screen for adults.", population: "Adults 16+", items: "10 items", time: "About 3 minutes" },
    ],
  },
  {
    id: "personality",
    title: "Personality and self-concept",
    intro:
      "Educational self-reflection tools. These are not clinical diagnostics. They are intended for personal insight and conversation, not for hiring, custody, or other consequential decisions.",
    tools: [
      { name: "Big Five Personality Test", href: "/big-five-personality-test", description: "Trait-level personality reflection across openness, conscientiousness, extraversion, agreeableness, and neuroticism.", population: "General adults", items: "About 50 items", time: "About 8 minutes" },
      { name: "Attachment Style Quiz", href: "/attachment-style-quiz", description: "Educational reflection on attachment patterns in close relationships.", population: "General adults", items: "About 30 items", time: "About 6 minutes" },
      { name: "Attachment Style Test for Couples", href: "/attachment-style-test-for-couples", description: "Same framework applied to a current relationship for joint reflection.", population: "Couples", items: "About 30 items each", time: "About 10 minutes for both" },
      { name: "Rosenberg Self-Esteem Scale", acronym: "RSES", href: "/rosenberg-self-esteem-scale", description: "Ten-item global self-esteem scale, widely used in research and education.", population: "Adolescents and adults", items: "10 items", time: "About 3 minutes" },
      { name: "Values Card Sort", href: "/values-card-sort", description: "Reflective sort of personal values, used in motivational interviewing and ACT-based work.", population: "General adults", items: "Card sort", time: "About 10 minutes" },
    ],
  },
  {
    id: "stress-burnout",
    title: "Stress, burnout, and resilience",
    intro:
      "Stress load, burnout, and resilience checks. Burnout is a workplace phenomenon described by the World Health Organization, not a medical diagnosis on its own.",
    tools: [
      { name: "K6 Psychological Distress Scale", acronym: "K6", href: "/k6-distress-scale", description: "Six-item nonspecific psychological distress scale used in population health.", population: "General adults", items: "6 items", time: "Under 2 minutes" },
      { name: "Holmes-Rahe Life Stress Inventory", href: "/holmes-rahe-stress-inventory", description: "Life-events stress inventory totaling Life Change Units across the past year.", population: "General adults", items: "43 events", time: "About 5 minutes" },
      { name: "Brief Resilience Scale", acronym: "BRS", href: "/brief-resilience-scale", description: "Six-item scale of bounce-back style resilience.", population: "General adults", items: "6 items", time: "Under 2 minutes" },
      { name: "Burnout Assessment Tool", href: "/burnout-assessment-tool", description: "Multi-domain burnout reflection covering exhaustion, mental distance, and impairment.", population: "Working adults", items: "About 23 items", time: "About 5 minutes" },
      { name: "Burnout Test for Healthcare Workers", href: "/burnout-test-for-healthcare-workers", description: "Burnout reflection with healthcare-specific examples.", population: "Healthcare workers", items: "About 22 items", time: "About 5 minutes" },
      { name: "Burnout Test for Nurses", href: "/burnout-test-for-nurses", description: "Burnout reflection framed for nursing workloads and shift patterns.", population: "Nurses", items: "About 22 items", time: "About 5 minutes" },
      { name: "Burnout Test for Teachers", href: "/burnout-test-for-teachers", description: "Burnout reflection framed for K to 12 and higher-education educators.", population: "Teachers", items: "About 22 items", time: "About 5 minutes" },
      { name: "Burnout Test for Parents", href: "/burnout-test-parents", description: "Parental burnout reflection covering exhaustion, distancing, and contrast with prior self.", population: "Parents", items: "About 22 items", time: "About 5 minutes" },
      { name: "Compassion Fatigue Test", href: "/compassion-fatigue-test", description: "Reflection on secondary traumatic stress and compassion satisfaction.", population: "Helping professionals and caregivers", items: "About 30 items", time: "About 7 minutes" },
      { name: "Caregiver Burnout Assessment", href: "/caregiver-burnout-assessment", description: "Self-check for unpaid family or chosen-family caregivers.", population: "Family caregivers", items: "About 22 items", time: "About 5 minutes" },
      { name: "Work Stress Check", href: "/work-stress-check", description: "Workplace stress self-check covering demands, control, and support.", population: "Working adults", items: "About 15 items", time: "About 4 minutes" },
      { name: "Stress Test for College Students", href: "/stress-test-college-students", description: "Stress check framed for academic, social, and financial pressures of college life.", population: "College students", items: "About 15 items", time: "About 4 minutes" },
    ],
  },
  {
    id: "wellbeing",
    title: "General mental health and wellbeing",
    intro:
      "Brief positive-functioning checks. These complement deficit-focused screens by tracking what is going well.",
    tools: [
      { name: "WHO-5 Well-Being Index", acronym: "WHO-5", href: "/who-5-wellbeing-index", description: "Five-item wellbeing scale developed by the World Health Organization, often used as a general mental health barometer.", population: "General adults and adolescents", items: "5 items", time: "Under 2 minutes" },
      { name: "PHQ-4 Combined Quick Screen", acronym: "PHQ-4", href: "/phq-4-anxiety-depression-screen", description: "Two-item depression plus two-item anxiety quick screen.", population: "General adults", items: "4 items", time: "Under 2 minutes" },
    ],
  },
  {
    id: "loneliness",
    title: "Loneliness and social",
    intro:
      "Loneliness self-checks. The UCLA scale is the most cited measure of loneliness in research.",
    tools: [
      { name: "UCLA Loneliness Scale (Version 3)", href: "/ucla-loneliness-scale", description: "Twenty-item self-report scale of loneliness across connection, belonging, and isolation.", population: "Adolescents and adults", items: "20 items", time: "About 5 minutes" },
      { name: "Loneliness Test for Seniors", href: "/loneliness-test-seniors", description: "Loneliness check framed for older adults, including bereavement and mobility-related social loss.", population: "Adults 65+", items: "20 items", time: "About 5 minutes" },
    ],
  },
  {
    id: "sleep",
    title: "Sleep",
    intro:
      "Brief sleep self-checks. Insomnia diagnosis requires a clinical interview that includes sleep schedule, daytime impairment, and rule-outs.",
    tools: [
      { name: "Athens Insomnia Scale", acronym: "AIS", href: "/athens-insomnia-scale", description: "Eight-item insomnia symptom scale aligned with ICD-10 sleep criteria.", population: "Adolescents and adults", items: "8 items", time: "Under 3 minutes" },
      { name: "Sleep and Mood Check", href: "/sleep-and-mood-check", description: "Combined sleep and mood reflection for tracking the bidirectional link between the two.", population: "General adults", items: "About 12 items", time: "About 3 minutes" },
    ],
  },
  {
    id: "grief",
    title: "Grief",
    intro:
      "Grief self-reflection. Most grief is not a disorder. Prolonged grief disorder, defined in the DSM-5-TR, requires clinical evaluation.",
    tools: [
      { name: "Grief Assessment", href: "/grief-assessment", description: "Reflection on grief intensity, function, and time since loss.", population: "Bereaved adults", items: "About 12 items", time: "About 4 minutes" },
    ],
  },
];

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
  { name: "Cognitive Distortion Identifier", href: "/cognitive-distortion-identifier", description: "Spot common cognitive distortions in your own thinking." },
  { name: "DBT Crisis Skills", href: "/dbt-crisis-skills", description: "DBT distress tolerance and TIP skills reference for high-distress moments." },
  { name: "Urge Surfing Timer", href: "/urge-surfing-timer", description: "Timer-based urge surfing practice from relapse prevention work." },
  { name: "HALT Check-In", href: "/halt-check-in", description: "Hungry, angry, lonely, tired self-check used in recovery support." },
  { name: "Worry Time Scheduler", href: "/worry-time-scheduler", description: "CBT-based stimulus-control technique for chronic worry." },
  { name: "Daily Recovery Check-In", href: "/daily-recovery-check-in", description: "Brief daily reflection on cravings, triggers, gratitude, and plan." },
  { name: "Coping Skills Randomizer", href: "/coping-skills-randomizer", description: "Random prompt across distraction, soothing, and connection categories." },
  { name: "Trigger Identification Worksheet", href: "/trigger-identification-worksheet", description: "Map internal and external triggers and pair them with planned responses." },
  { name: "Relapse Prevention Plan", href: "/relapse-prevention-plan", description: "Build a written plan covering warning signs, supports, and steps." },
  { name: "Safety Plan", href: "/safety-plan", description: "Stanley-Brown style suicide safety plan template." },
  { name: "Readiness to Change", href: "/readiness-to-change", description: "Stages of change reflection used in motivational interviewing." },
  { name: "Family Impact Assessment", href: "/family-impact-assessment", description: "Reflective check for how a substance use or mental health pattern is affecting family relationships." },
];

function authorPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jason Ramirez",
    jobTitle: "CADC-II Certified Drug and Alcohol Counselor",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "CADC-II",
    },
    url: `${SITE_URL}/about/jason-ramirez`,
    worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "All Free Mental Health Screening Tools and Self-Checks",
    description:
      "Index of validated mental health screening tools available free on MindCheck Tools, organized by clinical category, with population, length, and links to score interpretation pages.",
    datePublished: "2026-04-26",
    dateModified: TODAY,
    author: authorPersonJsonLd(),
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
    name: "Free Mental Health Screening Tools",
    description: "Validated mental health screening instruments and self-checks indexed on MindCheck Tools.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export default function ScreeningToolsIndexPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Screening tools", url: PAGE_URL },
  ]);
  const totalScreeners = CATEGORIES.reduce((acc, c) => acc + c.tools.length, 0);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
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
        All Free Mental Health Screening Tools and Self-Checks
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Last updated: {TODAY}. Reviewed by Jason Ramirez, CADC-II.
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
        <strong>Important:</strong> The screeners below are educational
        self-checks, not diagnostic instruments. A score is a starting point
        for a conversation with a qualified clinician, not a diagnosis.
      </div>

      <section className="mb-10 prose-medical text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          MindCheck Tools hosts {totalScreeners} validated mental health
          screening instruments plus practical calculators and coping skill
          tools. Every screener listed in this index is reproduced from a
          published, peer-reviewed instrument, scored according to the source
          paper, and reviewed by a CADC-II clinical reviewer before going live.
        </p>
        <p>
          For the source study, validated population, sensitivity and
          specificity, and licensing status of each instrument, see the{" "}
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

      <nav aria-label="Categories" className="mb-10 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-800 p-5">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
          Jump to a category
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="text-sage-700 dark:text-sage-400 hover:underline">
                {c.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#practical" className="text-sage-700 dark:text-sage-400 hover:underline">
              Calculators and practical tools
            </a>
          </li>
          <li>
            <a href="#coping" className="text-sage-700 dark:text-sage-400 hover:underline">
              Coping and skills practice
            </a>
          </li>
        </ul>
      </nav>

      {CATEGORIES.map((cat) => (
        <section key={cat.id} id={cat.id} className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            {cat.title}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            {cat.intro}
          </p>
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
                    Take the self-check
                  </Link>
                  {tool.scoreInterpHref && (
                    <Link href={tool.scoreInterpHref} className="text-sage-700 dark:text-sage-400 hover:underline">
                      Score interpretation
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section id="practical" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Calculators and practical tools
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          Educational calculators and reference timelines. These are not
          screening instruments and do not produce a score against published
          cutoffs.
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
          Reviewed by{" "}
          <Link href="/about/jason-ramirez" className="text-sage-700 dark:text-sage-400 hover:underline">
            Jason Ramirez, CADC-II
          </Link>
          , a Certified Drug and Alcohol Counselor with 11 years of clinical
          experience. For instrument source studies see the{" "}
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
    </main>
  );
}
