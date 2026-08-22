export type ToolClassification =
  | "Published Screener"
  | "Original Educational Tool"
  | "Information Only";

export type ToolReference = {
  label: string;
  href: string;
};

export type ToolClassificationRecord = {
  route: string;
  name: string;
  classification: ToolClassification;
  intendedAudience: string;
  purpose: string;
  sourceOwnership: string;
  rightsStatus: string;
  validationStatus: string;
  scoringCutoffStatus: string;
  diagnosticLimits: string;
  clinicalReviewStatus: string;
  privacyBehavior: string;
  citationLinks: ToolReference[];
  relatedGuideLinks: ToolReference[];
  lastVerifiedDate: string;
  manualReviewRequired: boolean;
};

type ToolSeed = Pick<ToolClassificationRecord, "route" | "name"> &
  Partial<Omit<ToolClassificationRecord, "route" | "name" | "classification">>;

const VERIFIED_DATE = "2026-08-22";
const LOCAL_PRIVACY =
  "Interactive answers and scores are processed in the browser and are not intentionally sent to MindCheck Tools. The route is excluded from optional analytics and advertising.";
const INFORMATION_PRIVACY =
  "This page asks no instrument questions and produces no score. The route is excluded from optional analytics and advertising.";
const ORIGINAL_SOURCE =
  "MindCheck Tools original content; it is not a reproduced published screening instrument.";
const ORIGINAL_LIMIT =
  "For education and personal reflection only. It cannot diagnose, rule out, or treat any condition.";

const published = (seed: ToolSeed): ToolClassificationRecord => ({
  intendedAudience: "Adults seeking a brief, private orientation before speaking with a qualified professional.",
  purpose: "Educational self-screening using a published measure.",
  sourceOwnership: "Published instrument; ownership and attribution are identified in the linked source record.",
  rightsStatus: "Public use is limited to the terms documented by the instrument owner or publisher.",
  validationStatus: "Published validation evidence exists; accuracy varies by population and setting.",
  scoringCutoffStatus: "Uses the source-based scoring described on the tool page; a threshold is a screening signal, not a diagnosis.",
  diagnosticLimits: "A score cannot diagnose or rule out a condition and does not replace a comprehensive evaluation.",
  clinicalReviewStatus: "Source alignment and safety language reviewed within the stated CADC-II credential scope; topic-specialist sign-off is not represented unless explicitly documented.",
  privacyBehavior: LOCAL_PRIVACY,
  citationLinks: [{ label: "Clinical evidence directory", href: "/clinical-evidence" }],
  relatedGuideLinks: [{ label: "How MindCheck Tools reviews tools", href: "/methodology" }],
  lastVerifiedDate: VERIFIED_DATE,
  manualReviewRequired: true,
  ...seed,
  classification: "Published Screener",
});

const original = (seed: ToolSeed): ToolClassificationRecord => ({
  intendedAudience: "Adults using a private educational exercise for personal reflection.",
  purpose: "Education, planning, calculation, or structured self-reflection.",
  sourceOwnership: ORIGINAL_SOURCE,
  rightsStatus: "MindCheck Tools owns the original page content; cited external resources remain subject to their own terms.",
  validationStatus: "Not clinically validated and not presented as a published screening instrument.",
  scoringCutoffStatus: "Any calculation or reflection range is site-defined and is not a validated clinical cutoff.",
  diagnosticLimits: ORIGINAL_LIMIT,
  clinicalReviewStatus: "Reviewed for educational and safety framing within the stated CADC-II credential scope; no broader clinical certification is claimed.",
  privacyBehavior: LOCAL_PRIVACY,
  citationLinks: [{ label: "Methodology and review limits", href: "/methodology" }],
  relatedGuideLinks: [{ label: "Browse tools by purpose", href: "/screening-tools" }],
  lastVerifiedDate: VERIFIED_DATE,
  manualReviewRequired: false,
  ...seed,
  classification: "Original Educational Tool",
});

const information = (seed: ToolSeed): ToolClassificationRecord => ({
  intendedAudience: "People researching an instrument, its evidence, limits, and lawful-use boundary.",
  purpose: "Explain a published instrument without administering it, collecting answers, scoring, or returning a result.",
  sourceOwnership: "The named instrument belongs to its owner or publisher; MindCheck Tools provides original explanatory content only.",
  rightsStatus: "Public administration is prohibited, permission-gated, paid, noncommercial-only, or unresolved as described on the page.",
  validationStatus: "The page discusses published evidence but does not validate a MindCheck Tools questionnaire because no questionnaire is offered.",
  scoringCutoffStatus: "No questionnaire, automated score, cutoff, severity band, or result journey is provided.",
  diagnosticLimits: "The page provides general education only and cannot diagnose, screen, or rule out a condition.",
  clinicalReviewStatus: "Rights, sources, and safety framing reviewed within the stated CADC-II credential scope; topic-specialist approval is not implied.",
  privacyBehavior: INFORMATION_PRIVACY,
  citationLinks: [{ label: "Instrument evidence and rights", href: "/clinical-evidence" }],
  relatedGuideLinks: [{ label: "Instrument rights guide", href: "/for-professionals/screening-instrument-rights-guide" }],
  lastVerifiedDate: VERIFIED_DATE,
  manualReviewRequired: true,
  ...seed,
  classification: "Information Only",
});

const PHQ_SOURCE: ToolReference = { label: "Official PHQ Screeners terms", href: "https://www.phqscreeners.com/select-screener" };
const VA_PCL_SOURCE: ToolReference = { label: "VA PCL-5 source", href: "https://www.ptsd.va.gov/professional/assessment/adult-sr/ptsd-checklist.asp" };
const VA_PCPTSD_SOURCE: ToolReference = { label: "VA PC-PTSD-5 source", href: "https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp" };

const records: ToolClassificationRecord[] = [
  published({ route: "/phq-9-depression-test", name: "PHQ-9 Depression Self-Check", citationLinks: [PHQ_SOURCE] }),
  published({ route: "/phq-4-anxiety-depression-screen", name: "PHQ-4 Anxiety and Depression Screen", citationLinks: [PHQ_SOURCE] }),
  published({ route: "/postpartum-depression-test", name: "Postpartum PHQ-9 Self-Screen", intendedAudience: "Adults in the postpartum period; urgent parent or infant safety concerns require immediate professional help.", citationLinks: [PHQ_SOURCE] }),
  published({ route: "/grief-assessment", name: "Grief and Mood PHQ-9 Check", purpose: "Screen for depression symptoms during grief; it does not assess prolonged grief disorder.", citationLinks: [PHQ_SOURCE] }),
  published({ route: "/ces-d-depression-scale", name: "CES-D Depression Scale", citationLinks: [{ label: "SAMHSA CES-D form", href: "https://www.ncbi.nlm.nih.gov/books/NBK64063/" }] }),
  published({ route: "/gad-7-anxiety-test", name: "GAD-7 Anxiety Self-Check", citationLinks: [PHQ_SOURCE] }),
  published({ route: "/pcl-5-ptsd-screening", name: "PCL-5 PTSD Screening", intendedAudience: "Adults; the VA identifies qualified health professionals and researchers as intended users, so direct-to-consumer use requires manual trauma-specialist review.", citationLinks: [VA_PCL_SOURCE] }),
  published({ route: "/pc-ptsd-5-screening", name: "PC-PTSD-5 Screen", intendedAudience: "Adults; the VA identifies qualified health professionals and researchers as intended users, so direct-to-consumer use requires manual trauma-specialist review.", citationLinks: [VA_PCPTSD_SOURCE] }),
  published({ route: "/audit-alcohol-test", name: "AUDIT Alcohol Use Screen", rightsStatus: "WHO permits the documented noncommercial use; this route must remain ad-free and outside paid or affiliate flows.", citationLinks: [{ label: "WHO AUDIT manual", href: "https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a" }] }),
  published({ route: "/audit-c-alcohol-screen", name: "AUDIT-C Quick Screen", rightsStatus: "Conservatively treated under the WHO AUDIT noncommercial boundary pending written clarification.", citationLinks: [{ label: "NIAAA screening guidance", href: "https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/screen-and-assess-use-quick-effective-methods" }] }),
  published({ route: "/asrs-adhd-screening", name: "ASRS v1.1 Six-Question Screener", rightsStatus: "The six-question screener may be recreated electronically only with exact wording, response options, scoring, and shading preserved.", citationLinks: [{ label: "Official ASRS terms", href: "https://www.hcp.med.harvard.edu/ncs/asrs.php" }] }),
  published({ route: "/rosenberg-self-esteem-scale", name: "Rosenberg Self-Esteem Scale", citationLinks: [{ label: "University of Maryland source", href: "https://socy.umd.edu/about-us/rosenberg-self-esteem-scale" }] }),
  published({ route: "/k6-distress-scale", name: "K6 Psychological Distress Scale", citationLinks: [{ label: "Official K6 and K10 source", href: "https://www.hcp.med.harvard.edu/ncs/k6_scales.php" }] }),
  published({ route: "/who-5-wellbeing-index", name: "WHO-5 Well-Being Index", rightsStatus: "WHO publishes the form under a noncommercial licence; this route must remain ad-free and outside paid or affiliate flows.", citationLinks: [{ label: "WHO-5 form and scoring guide", href: "https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01" }] }),
  published({ route: "/big-five-personality-test", name: "IPIP Big Five Personality Measure", diagnosticLimits: "A personality-trait estimate is not a mental-health diagnosis and should not be used for employment, education, or other high-stakes decisions.", citationLinks: [{ label: "International Personality Item Pool", href: "https://ipip.ori.org/" }] }),

  information({ route: "/dass-21-depression-anxiety-stress", name: "DASS-21 Information", rightsStatus: "UNSW prohibits administration on a website or app open to the public; this route must remain information-only.", citationLinks: [{ label: "UNSW DASS FAQ", href: "https://dass.psy.unsw.edu.au/DASSFAQ.htm" }] }),
  information({ route: "/spin-social-anxiety-test", name: "SPIN Information", rightsStatus: "Public electronic use requires permission and a user fee; no licence is on file.", citationLinks: [{ label: "APTA SPIN record", href: "https://www.apta.org/patient-care/evidence-based-practice-resources/test-measures/social-phobia-inventory-spin" }] }),
  information({ route: "/ace-questionnaire", name: "ACE Questionnaire Information", rightsStatus: "The site's former simplified version has not been matched exactly to an authoritative public-domain form.", citationLinks: [{ label: "CDC ACE study", href: "https://www.cdc.gov/violenceprevention/aces/about.html" }] }),
  information({ route: "/cage-aid-substance-abuse-screening", name: "CAGE-AID Information", rightsStatus: "No authoritative grant for public commercial electronic reproduction is on file.", citationLinks: [{ label: "University of Washington overview", href: "https://www.hiv.uw.edu/page/substance-use/cage-aid" }] }),
  information({ route: "/crafft-substance-screening", name: "CRAFFT Information", intendedAudience: "People researching adolescent substance-use screening; no youth answers are collected.", rightsStatus: "The owner requires exact-copy review and written approval before electronic administration.", citationLinks: [{ label: "Official CRAFFT terms", href: "https://crafft.org/get-the-crafft/" }] }),
  information({ route: "/scoff-eating-disorder-screening", name: "SCOFF Information", rightsStatus: "Written permission for public electronic reproduction is not on file.", citationLinks: [{ label: "Original BMJ article", href: "https://www.bmj.com/content/319/7223/1467" }] }),
  information({ route: "/msi-bpd-screening", name: "MSI-BPD Information", rightsStatus: "No authoritative public-commercial web grant is on file.", citationLinks: [{ label: "Validation record", href: "https://pubmed.ncbi.nlm.nih.gov/14744082/" }] }),
  information({ route: "/aq-10-autism-screening", name: "Adult AQ-10 Information", rightsStatus: "Commercial or IT use may require an Autism Research Centre licence and fees; no licence is on file.", citationLinks: [{ label: "Autism Research Centre terms", href: "https://www.autismresearchcentre.com/tests/autism-spectrum-quotient-10-items-aq-10-adult/" }] }),
  information({ route: "/attachment-style-quiz", name: "ECR-R Attachment Information", rightsStatus: "Commercial web-administration rights are unresolved.", citationLinks: [{ label: "Instrument rights register", href: "/for-professionals/screening-instrument-rights-guide" }] }),
  information({ route: "/holmes-rahe-stress-inventory", name: "Holmes-Rahe Information", rightsStatus: "No public-web reproduction grant for the inventory and weights is on file.", citationLinks: [{ label: "Original publisher record", href: "https://www.sciencedirect.com/science/article/pii/0022399967900104" }] }),
  information({ route: "/ucla-loneliness-scale", name: "UCLA Loneliness Scale Information", rightsStatus: "The author-controlled permission covers nonprofit research, not this commercial-site context.", citationLinks: [{ label: "UCLA author source", href: "https://peplau.psych.ucla.edu/loneliness/" }] }),
  information({ route: "/brief-resilience-scale", name: "Brief Resilience Scale Information", rightsStatus: "Public electronic commercial-use rights remain unresolved.", citationLinks: [{ label: "Validation record", href: "https://pubmed.ncbi.nlm.nih.gov/18696313/" }] }),
  information({ route: "/athens-insomnia-scale", name: "Athens Insomnia Scale Information", rightsStatus: "A transferable public electronic reproduction grant is not on file.", citationLinks: [{ label: "Correct validation record", href: "https://pubmed.ncbi.nlm.nih.gov/11311689/" }] }),
  information({ route: "/who-assist-substance-screening", name: "WHO ASSIST Information", rightsStatus: "WHO's primary-care photocopy permission does not establish public consumer-web or commercial administration rights.", citationLinks: [{ label: "WHO ASSIST manual", href: "https://www.who.int/publications/i/item/978924159938-2" }] }),

  original({ route: "/work-stress-check", name: "Work Stress Reflection", purpose: "Reflect on twelve site-written prompts about demands, control, support, engagement, recovery, and impact.", scoringCutoffStatus: "A site-defined 0–36 reflection total is shown without severity bands or clinical cutoffs; higher totals only mean more frequent endorsement of these prompts.", manualReviewRequired: true, citationLinks: [{ label: "WHO mental health at work", href: "https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work" }, { label: "NIOSH stress and work", href: "https://www.cdc.gov/niosh/stress/about/index.html" }] }),
  original({ route: "/burnout-assessment-tool", name: "Burnout Educational Check-In", manualReviewRequired: true }),
  original({ route: "/compassion-fatigue-test", name: "Compassion Fatigue Educational Check-In", manualReviewRequired: true }),
  original({ route: "/caregiver-burnout-assessment", name: "Caregiver Burnout Educational Check-In", manualReviewRequired: true }),
  original({ route: "/mental-load-calculator", name: "Mental Load Calculator" }),
  original({ route: "/sleep-and-mood-check", name: "Sleep and Mood Reflection", manualReviewRequired: true }),
  original({ route: "/bac-calculator", name: "BAC Estimate Calculator", diagnosticLimits: "This is an estimate, not a breath or blood test, and must never be used to decide whether it is safe or legal to drive.", manualReviewRequired: true }),
  original({ route: "/standard-drinks-calculator", name: "Standard Drinks Calculator", manualReviewRequired: true }),
  original({ route: "/box-breathing-exercise", name: "Box Breathing Exercise" }),
  original({ route: "/five-senses-grounding", name: "5-4-3-2-1 Grounding Exercise" }),
  original({ route: "/cognitive-distortion-identifier", name: "Thought Pattern Identifier" }),
  original({ route: "/safety-plan", name: "Personal Safety Plan", intendedAudience: "Adults preparing a personal support plan; it is not emergency response or clinical crisis planning.", manualReviewRequired: true }),
  original({ route: "/cbt-thought-record", name: "CBT Thought Record" }),
  original({ route: "/worry-time-scheduler", name: "Worry Time Scheduler" }),
  original({ route: "/values-card-sort", name: "Values Card Sort" }),
  original({ route: "/dbt-crisis-skills", name: "DBT Crisis Skills Reference", intendedAudience: "Adults seeking educational skills practice; people in immediate danger need emergency or crisis support.", manualReviewRequired: true }),
  original({ route: "/sobriety-calculator", name: "Sobriety Date Calculator" }),
  original({ route: "/money-saved-recovery-calculator", name: "Money Saved in Recovery Calculator" }),
  original({ route: "/health-recovery-timeline", name: "Health Recovery Timeline", purpose: "Provide general, source-linked recovery education; individual timelines vary and this is not a prognosis.", manualReviewRequired: true }),
  original({ route: "/halt-check-in", name: "HALT Check-In", scoringCutoffStatus: "Four separate site-defined ratings are shown; there is no composite relapse-risk score or clinical cutoff." }),
  original({ route: "/withdrawal-timeline", name: "Withdrawal Timeline", intendedAudience: "Adults seeking general withdrawal-safety education; severe or uncertain symptoms require urgent medical advice.", diagnosticLimits: "General education only. It cannot predict an individual's withdrawal course or make unsupervised withdrawal safe.", manualReviewRequired: true }),
  original({ route: "/treatment-cost-estimator", name: "Treatment Cost Estimator", diagnosticLimits: "Provides a planning estimate, not medical, insurance, legal, or financial advice." }),
  original({ route: "/relapse-prevention-plan", name: "Relapse Prevention Plan" }),
  original({ route: "/urge-surfing-timer", name: "Urge Surfing Timer" }),
  original({ route: "/readiness-to-change", name: "Readiness to Change Reflection" }),
  original({ route: "/trigger-identification-worksheet", name: "Trigger Identification Worksheet" }),
  original({ route: "/coping-skills-randomizer", name: "Coping Skills Randomizer" }),
  original({ route: "/daily-recovery-check-in", name: "Daily Recovery Check-In" }),
  original({ route: "/family-impact-assessment", name: "Family Impact Reflection", manualReviewRequired: true }),
];

export const TOOL_CLASSIFICATIONS = Object.freeze(
  Object.fromEntries(records.map((record) => [record.route, Object.freeze(record)])),
) as Readonly<Record<string, Readonly<ToolClassificationRecord>>>;

export const TOOL_CLASSIFICATION_ROUTES = Object.freeze(records.map((record) => record.route));

export function getToolClassification(pathname: string): Readonly<ToolClassificationRecord> | undefined {
  const route = (pathname.split(/[?#]/, 1)[0] || "/").replace(/\/+$/, "") || "/";
  return TOOL_CLASSIFICATIONS[route];
}
