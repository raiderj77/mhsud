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

export const EVIDENCE_ANCHORS: Record<string, string> = {
  "/phq-9-depression-test": "phq-9",
  "/phq-4-anxiety-depression-screen": "phq-4",
  "/gad-7-anxiety-test": "gad-7",
  "/dass-21-depression-anxiety-stress": "dass-21",
  "/spin-social-anxiety-test": "spin",
  "/pcl-5-ptsd-screening": "pcl-5",
  "/pc-ptsd-5-screening": "pc-ptsd-5",
  "/ace-questionnaire": "ace",
  "/audit-alcohol-test": "audit",
  "/audit-c-alcohol-screen": "audit-c",
  "/nicotine-dependence-test": "ftnd",
  "/cage-aid-substance-abuse-screening": "cage-aid",
  "/crafft-substance-screening": "crafft",
  "/asrs-adhd-screening": "asrs",
  "/scoff-eating-disorder-screening": "scoff",
  "/msi-bpd-screening": "msi-bpd",
  "/aq-10-autism-screening": "aq-10",
  "/rosenberg-self-esteem-scale": "rosenberg",
  "/k6-distress-scale": "k6",
  "/holmes-rahe-stress-inventory": "holmes-rahe",
  "/who-5-wellbeing-index": "who-5",
  "/ucla-loneliness-scale": "ucla-loneliness",
  "/attachment-style-quiz": "ecr-r",
  "/brief-resilience-scale": "brief-resilience",
  "/athens-insomnia-scale": "athens-insomnia",
  "/who-assist-substance-screening": "who-assist",
};

export const CATEGORIES: Category[] = [
  {
    id: "depression",
    title: "Depression",
    intro:
      "Self-checks for depressive symptoms in the past two weeks, including population-specific versions. Scores are educational and do not diagnose major depressive disorder.",
    tools: [
      { name: "PHQ-9 Depression Test", acronym: "PHQ-9", href: "/phq-9-depression-test", scoreInterpHref: "/phq-9-score-interpretation", description: "Nine-item screen for depressive symptom severity used widely in primary care.", population: "General adults", items: "9 items", time: "About 3 minutes" },
      { name: "PHQ-4 Quick Screen", acronym: "PHQ-4", href: "/phq-4-anxiety-depression-screen", description: "Ultra-brief combined depression and anxiety screen, 2 items each.", population: "General adults", items: "4 items", time: "Under 2 minutes" },
      { name: "CES-D Depression Scale", acronym: "CES-D", href: "/ces-d-depression-scale", description: "Twenty-item depression scale used in community and research settings.", population: "General adults", items: "20 items", time: "About 5 minutes" },
      { name: "Postpartum Depression Test", href: "/postpartum-depression-test", description: "PHQ-9-based depression self-screen with postpartum-specific safety and next-step guidance.", population: "Postpartum adults", items: "9 items", time: "About 3 minutes" },
    ],
  },
  {
    id: "anxiety",
    title: "Anxiety and stress",
    intro:
      "A maintained generalized-anxiety self-check plus information about rights-limited DASS-21 and social-anxiety instruments. None can diagnose an anxiety or stress-related disorder.",
    tools: [
      { name: "GAD-7 Anxiety Test", acronym: "GAD-7", href: "/gad-7-anxiety-test", scoreInterpHref: "/gad-7-score-interpretation", description: "Seven-item generalized anxiety screen used widely in primary care.", population: "General adults", items: "7 items", time: "About 2 minutes" },
      { name: "DASS-21 Information and Public-Use Boundary", acronym: "DASS-21", href: "/dass-21-depression-anxiety-stress", description: "Evidence and public-use limits without questionnaire administration, automated scoring, or interpretation.", population: "People researching depression, anxiety, and stress measures", items: "No questionnaire", time: "About 3 minutes to read" },
      { name: "SPIN Social Anxiety Information", acronym: "SPIN", href: "/spin-social-anxiety-test", description: "Evidence and licensing limits without public questionnaire administration or scoring.", population: "People researching social-anxiety screening", items: "No questionnaire", time: "About 3 minutes to read" },
    ],
  },
  {
    id: "trauma-ptsd",
    title: "Trauma and PTSD",
    intro:
      "Interactive post-traumatic stress symptom checks plus trauma-informed ACE research information without an ACE questionnaire or score. PTSD diagnosis requires a clinical interview.",
    tools: [
      { name: "PCL-5 PTSD Checklist", acronym: "PCL-5", href: "/pcl-5-ptsd-screening", scoreInterpHref: "/pcl-5-score-interpretation", description: "Twenty-item DSM-5-aligned PTSD symptom checklist.", population: "General adults", items: "20 items", time: "About 6 minutes" },
      { name: "PC-PTSD-5 Primary Care PTSD Screen", acronym: "PC-PTSD-5", href: "/pc-ptsd-5-screening", description: "Five-item brief PTSD screen used in primary care.", population: "General adults", items: "5 items", time: "Under 2 minutes" },
      { name: "ACE Questionnaire Information", acronym: "ACE", href: "/ace-questionnaire", description: "Trauma-informed evidence and exact-version limits without collecting childhood-experience answers or producing a score.", population: "People researching adverse childhood experiences", items: "No questionnaire", time: "About 3 minutes to read" },
    ],
  },
  {
    id: "alcohol-substance",
    title: "Alcohol and substance use",
    intro:
      "Maintained alcohol, cannabis, and nicotine screens plus information-only pages for rights-limited substance-use instruments. Information entries ask no substance-use questions and produce no score or result.",
    tools: [
      { name: "AUDIT Alcohol Use Disorders Identification Test", acronym: "AUDIT", href: "/audit-alcohol-test", scoreInterpHref: "/audit-score-interpretation", description: "Ten-item alcohol use screen developed by the World Health Organization.", population: "General adults", items: "10 items", time: "About 3 minutes" },
      { name: "AUDIT-C Quick Alcohol Screen", acronym: "AUDIT-C", href: "/audit-c-alcohol-screen", scoreInterpHref: "/audit-c-score-interpretation", description: "Three-item brief version of the AUDIT focused on consumption.", population: "General adults", items: "3 items", time: "Under 2 minutes" },
      { name: "FTND Fagerström Test for Nicotine Dependence", acronym: "FTND", href: "/nicotine-dependence-test", scoreInterpHref: "/what-is-the-ftnd-test", description: "Six-item test of physical nicotine dependence for people who smoke cigarettes.", population: "Adults who currently smoke cigarettes", items: "6 items", time: "About 1 minute" },
      { name: "CAGE-AID Screening Information", acronym: "CAGE-AID", href: "/cage-aid-substance-abuse-screening", description: "Evidence and reproduction-rights context without displaying questions, collecting answers, or scoring.", population: "People researching substance-use screening", items: "No questionnaire", time: "About 3 minutes to read" },
      { name: "CRAFFT Youth Screening Information", acronym: "CRAFFT", href: "/crafft-substance-screening", description: "Youth-screening evidence and the approval required before a third-party electronic implementation.", population: "Young people, caregivers, educators, and clinicians", items: "No questionnaire", time: "About 3 minutes to read" },
      { name: "WHO ASSIST Information", acronym: "ASSIST", href: "/who-assist-substance-screening", description: "WHO evidence and public-use limits without questionnaire reproduction, scoring, or individualized intervention guidance.", population: "People researching multi-substance screening", items: "No questionnaire", time: "About 3 minutes to read" },
    ],
  },
  {
    id: "adhd",
    title: "ADHD",
    intro:
      "Adult ADHD screens including the ASRS plus population-framed versions. ADHD diagnosis requires a clinical evaluation, including history and rule-outs.",
    tools: [
      { name: "ASRS Adult ADHD Self-Report Scale", acronym: "ASRS", href: "/asrs-adhd-screening", scoreInterpHref: "/asrs-score-interpretation", description: "Eighteen-item adult ADHD symptom checklist with a six-item screener subset, developed with the World Health Organization.", population: "Adults 18+", items: "18 items (6-item screener)", time: "About 5 minutes" },
    ],
  },
  {
    id: "eating-disorders",
    title: "Eating disorders",
    intro:
      "Evidence and permissions information about eating-disorder screening without an on-site questionnaire or result. Diagnosis requires evaluation by a trained clinician.",
    tools: [
      { name: "SCOFF Screening Information", acronym: "SCOFF", href: "/scoff-eating-disorder-screening", description: "Eating-disorder screening evidence and permissions context without displaying or scoring the instrument.", population: "People researching eating-disorder screening", items: "No questionnaire", time: "About 3 minutes to read" },
    ],
  },
  {
    id: "bpd",
    title: "Borderline personality",
    intro:
      "Evidence and rights-status information about the MSI-BPD without an on-site questionnaire or result. BPD diagnosis requires a structured clinical evaluation and longitudinal context.",
    tools: [
      { name: "MSI-BPD Screening Information", acronym: "MSI-BPD", href: "/msi-bpd-screening", description: "Validation evidence and unresolved reuse terms without questionnaire administration or diagnostic-sounding ranges.", population: "People researching BPD screening", items: "No questionnaire", time: "About 3 minutes to read" },
    ],
  },
  {
    id: "autism",
    title: "Autism spectrum",
    intro:
      "Adult AQ-10 evidence and licensing information without an on-site questionnaire or autism result. Autism assessment requires a qualified clinician and broader developmental context.",
    tools: [
      { name: "Adult AQ-10 Information", acronym: "AQ-10", href: "/aq-10-autism-screening", description: "Validation and commercial/electronic-use limits without collecting answers or returning an autism result.", population: "Adults and people researching autism screening", items: "No questionnaire", time: "About 3 minutes to read" },
    ],
  },
  {
    id: "personality",
    title: "Personality and self-concept",
    intro:
      "Educational self-reflection tools plus an information-only ECR-R entry. These are not clinical diagnostics and should not be used for hiring, custody, or other consequential decisions.",
    tools: [
      { name: "Big Five Personality Test", href: "/big-five-personality-test", description: "Trait-level personality reflection across openness, conscientiousness, extraversion, agreeableness, and neuroticism.", population: "General adults", items: "About 50 items", time: "About 8 minutes" },
      { name: "ECR-R Attachment Information", href: "/attachment-style-quiz", description: "Dimensional attachment research and commercial-use limits without administering the ECR-R or assigning categorical styles.", population: "People researching adult attachment measures", items: "No questionnaire", time: "About 3 minutes to read" },
      { name: "Rosenberg Self-Esteem Scale", acronym: "RSES", href: "/rosenberg-self-esteem-scale", description: "Ten-item global self-esteem scale, widely used in research and education.", population: "Adolescents and adults", items: "10 items", time: "About 3 minutes" },
      { name: "Values Card Sort", href: "/values-card-sort", description: "Reflective sort of personal values, used in motivational interviewing and ACT-based work.", population: "General adults", items: "Card sort", time: "About 10 minutes" },
    ],
  },
  {
    id: "stress-burnout",
    title: "Stress, burnout, and resilience",
    intro:
      "Interactive distress and burnout reflections plus information-only Holmes-Rahe and resilience entries. Information entries contain no inventory, questionnaire, score, or result.",
    tools: [
      { name: "K6 Psychological Distress Scale", acronym: "K6", href: "/k6-distress-scale", description: "Six-item nonspecific psychological distress scale used in population health.", population: "General adults", items: "6 items", time: "Under 2 minutes" },
      { name: "Holmes-Rahe Inventory Information", href: "/holmes-rahe-stress-inventory", description: "Evidence and reuse limits without displaying events, weights, scores, or future-health risk tiers.", population: "People researching life-event stress measures", items: "No inventory", time: "About 3 minutes to read" },
      { name: "Brief Resilience Scale Information", acronym: "BRS", href: "/brief-resilience-scale", description: "Validation evidence and unresolved reuse terms without reproducing items, scoring keys, or resilience tiers.", population: "People researching resilience measures", items: "No questionnaire", time: "About 3 minutes to read" },
      { name: "Burnout Reflection", href: "/burnout-assessment-tool", description: "Original educational self-check covering exhaustion, detachment, and sense of effectiveness. Its score bands are not clinical cutoffs.", population: "Working adults", items: "15 items", time: "About 5 minutes" },
      { name: "Compassion Fatigue Reflection", href: "/compassion-fatigue-test", description: "General educational reflection for people in helping roles; not a validated compassion-fatigue instrument.", population: "Helping professionals and caregivers", items: "15 items", time: "About 5 minutes" },
      { name: "Caregiver Burnout Reflection", href: "/caregiver-burnout-assessment", description: "General educational self-check for unpaid family or chosen-family caregivers; not a validated caregiver-burnout instrument.", population: "Family caregivers", items: "15 items", time: "About 5 minutes" },
      { name: "Work Stress Check", href: "/work-stress-check", description: "Workplace stress self-check covering demands, control, and support.", population: "Working adults", items: "About 15 items", time: "About 4 minutes" },
    ],
  },
  {
    id: "wellbeing",
    title: "General mental health and wellbeing",
    intro:
      "Brief positive-functioning checks. These complement deficit-focused screens by tracking what is going well.",
    tools: [
      { name: "WHO-5 Well-Being Index", acronym: "WHO-5", href: "/who-5-wellbeing-index", description: "Five-item wellbeing scale developed by the World Health Organization, often used as a general mental health barometer.", population: "General adults and adolescents", items: "5 items", time: "Under 2 minutes" },
    ],
  },
  {
    id: "loneliness",
    title: "Loneliness and social",
    intro:
      "Research and permissions information about the UCLA Loneliness Scale without an on-site questionnaire, score, or loneliness label.",
    tools: [
      { name: "UCLA Loneliness Scale Information", href: "/ucla-loneliness-scale", description: "Evidence and noncommercial-use limits without reproducing the scale, collecting answers, or labeling a loneliness level.", population: "People researching loneliness measures", items: "No questionnaire", time: "About 3 minutes to read" },
    ],
  },
  {
    id: "sleep",
    title: "Sleep",
    intro:
      "An educational sleep-and-mood reflection plus Athens Insomnia Scale information without an on-site questionnaire or result. Insomnia diagnosis requires clinical evaluation.",
    tools: [
      { name: "Athens Insomnia Scale Information", acronym: "AIS", href: "/athens-insomnia-scale", description: "Validation and permissions context without displaying items, calculating a score, or assigning insomnia severity.", population: "People researching insomnia screening", items: "No questionnaire", time: "About 3 minutes to read" },
      { name: "Sleep and Mood Check", href: "/sleep-and-mood-check", description: "Combined sleep and mood reflection for tracking the bidirectional link between the two.", population: "General adults", items: "About 12 items", time: "About 3 minutes" },
    ],
  },
  {
    id: "grief",
    title: "Grief",
    intro:
      "Grief self-reflection. Most grief is not a disorder. Prolonged grief disorder, defined in the DSM-5-TR, requires clinical evaluation.",
    tools: [
      { name: "Grief and Mood Check", href: "/grief-assessment", description: "PHQ-9 depression self-screen with grief-specific context. It does not assess prolonged grief disorder.", population: "Bereaved adults", items: "9 items", time: "About 3 minutes" },
    ],
  },
];

export const CLINICAL_GUIDES = [
  { name: "Maternal Mental Health", href: "/maternal-mental-health", description: "Screening options, warning signs, and care pathways during pregnancy and postpartum." },
  { name: "PHQ-2 to PHQ-9: When to Continue", href: "/phq-2-to-phq-9-when-to-escalate", description: "How the two-item depression screen is used before the full PHQ-9." },
  { name: "PHQ-9 vs GAD-7", href: "/phq-9-vs-gad-7", description: "Choose the depression screen, anxiety screen, or both based on the concern." },
  { name: "AUDIT vs AUDIT-C", href: "/audit-vs-audit-c", description: "Compare the three-item alcohol screen with the full ten-item AUDIT." },
  { name: "How to Talk to Your Doctor", href: "/how-to-talk-to-your-doctor-about-mental-health", description: "Turn a screening result into a clear, practical clinical conversation." },
];

