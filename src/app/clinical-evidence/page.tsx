import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AUTHOR_SCHEMA, SITE_AUTHOR } from "@/config/author";

const PAGE_URL = `${SITE_URL}/clinical-evidence`;
const TODAY = "2026-08-05";

export const metadata: Metadata = createMetadata({
  path: "/clinical-evidence",
  title: "Clinical Evidence and Rights Status for Published Instruments",
  description:
    "Evidence and rights-status directory for published instruments documented by MindCheck Tools, including primary sources, validation populations, reuse boundaries, and whether a page is interactive or information-only.",
  keywords: [
    "clinical evidence",
    "validated screening instruments",
    "PHQ-9 validation study",
    "GAD-7 validation",
    "AUDIT validation",
    "PCL-5 validation",
    "ACE study",
    "mental health screening evidence",
  ],
  openGraph: {
    title: "Clinical Evidence and Rights Status for Published Instruments",
    description:
      "Primary sources, validation context, and current public-site availability for published instruments documented by MindCheck Tools.",
    url: PAGE_URL,
    type: "article",
  },
});

type Instrument = {
  slug: string;
  acronym: string;
  fullName: string;
  liveOn?: string;
  year: number;
  authors: string;
  journal: string;
  pubmedUrl: string | null;
  pubmedId: string | null;
  sourceLabel?: string;
  population: string;
  items: string;
  scoringRange: string;
  threshold?: string;
  sensitivity: string;
  specificity: string;
  license: string;
  citationStatus: "Verified on PubMed" | "Source verified (book, not on PubMed)" | "Primary source verified";
  notes?: string;
};

const INFORMATION_ONLY_SLUGS = new Set([
  "cage-aid",
  "crafft",
  "scoff",
  "ace",
  "dass-21",
  "msi-bpd",
  "aq-10",
  "spin",
  "holmes-rahe",
  "ucla-loneliness",
  "ecr-r",
  "brief-resilience",
  "athens-insomnia",
  "who-assist",
]);

const INSTRUMENTS: Instrument[] = [
  {
    slug: "phq-9",
    acronym: "PHQ-9",
    fullName: "Patient Health Questionnaire-9",
    liveOn: "/phq-9-depression-test",
    year: 2001,
    authors: "Kroenke K, Spitzer RL, Williams JBW",
    journal: "Journal of General Internal Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/11556941/",
    pubmedId: "11556941",
    population: "3,000 adult primary care patients and 3,000 obstetrics-gynecology patients (PHQ validation cohorts)",
    items: "9",
    scoringRange: "0 to 27",
    threshold: "Cut score of 10 commonly used; severity bands at 5 (mild), 10 (moderate), 15 (moderately severe), 20 (severe).",
    sensitivity: "88% at cut score of 10 (per the original validation paper)",
    specificity: "88% at cut score of 10",
    license: "Free for clinical and research use; released by Pfizer with no permission required for use.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "phq-4",
    acronym: "PHQ-4",
    fullName: "Patient Health Questionnaire-4",
    liveOn: "/phq-4-anxiety-depression-screen",
    year: 2009,
    authors: "Kroenke K, Spitzer RL, Williams JBW, Löwe B",
    journal: "Psychosomatics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/19996233/",
    pubmedId: "19996233",
    population: "Validated in a German general-population sample of 2,149 adults.",
    items: "4 (two PHQ-2 depression items plus two GAD-2 anxiety items)",
    scoringRange: "0 to 12 (each subscale 0 to 6)",
    threshold: "A score of 3 or higher on either the depression or anxiety subscale is commonly used as a positive screen.",
    sensitivity: "Reported across multiple cut-points and validation samples; refer to the original paper.",
    specificity: "Reported across multiple cut-points and validation samples; refer to the original paper.",
    license: "Free for clinical and research use; released by Pfizer.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "gad-7",
    acronym: "GAD-7",
    fullName: "Generalized Anxiety Disorder 7-item scale",
    liveOn: "/gad-7-anxiety-test",
    year: 2006,
    authors: "Spitzer RL, Kroenke K, Williams JBW, Löwe B",
    journal: "Archives of Internal Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/16717171/",
    pubmedId: "16717171",
    population: "2,740 adult primary care patients across 15 clinics.",
    items: "7",
    scoringRange: "0 to 21",
    threshold: "Severity cut points at 5 (mild), 10 (moderate), and 15 (severe). A cut of 10 commonly used to flag clinically significant anxiety.",
    sensitivity: "89% (at cut score of 10 for generalized anxiety disorder)",
    specificity: "82% (at cut score of 10)",
    license: "Free for clinical and research use; released by Pfizer.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "audit",
    acronym: "AUDIT",
    fullName: "Alcohol Use Disorders Identification Test",
    liveOn: "/audit-alcohol-test",
    year: 1993,
    authors: "Saunders JB, Aasland OG, Babor TF, de la Fuente JR, Grant M",
    journal: "Addiction",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/8329970/",
    pubmedId: "8329970",
    population: "WHO collaborative project across 6 countries; primary health care patients.",
    items: "10",
    scoringRange: "0 to 40",
    threshold: "Cut of 8 for hazardous drinking in men; the WHO manual recommends a lower cut (7) for women and adults over 65.",
    sensitivity: "92% of harmful drinkers had AUDIT scores of 8 or more (per original paper)",
    specificity: "94% of non-hazardous drinkers had AUDIT scores under 8",
    license: "WHO public domain.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "audit-c",
    acronym: "AUDIT-C",
    fullName: "AUDIT Consumption (3-item brief screen)",
    liveOn: "/audit-c-alcohol-screen",
    year: 1998,
    authors: "Bush K, Kivlahan DR, McDonell MB, Fihn SD, Bradley KA",
    journal: "Archives of Internal Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/9738608/",
    pubmedId: "9738608",
    population: "243 male outpatients at a Veterans Affairs general medical clinic.",
    items: "3",
    scoringRange: "0 to 12",
    threshold: "4 or higher in men, 3 or higher in women (commonly used in U.S. VA practice).",
    sensitivity: "Area under the ROC curve of 0.88 to 0.89 in the original sample; cut-specific sensitivity varies by population.",
    specificity: "Cut-specific specificity varies; see original paper.",
    license: "WHO public domain (derived from AUDIT).",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "cage-aid",
    acronym: "CAGE-AID",
    fullName: "CAGE Adapted to Include Drugs",
    liveOn: "/cage-aid-substance-abuse-screening",
    year: 1995,
    authors: "Brown RL, Rounds LA",
    journal: "Wisconsin Medical Journal",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/7778330/",
    pubmedId: "7778330",
    population: "124 primary care patients.",
    items: "4",
    scoringRange: "0 to 4",
    threshold: "1 or more is sometimes used to indicate need for further assessment; 2 or more is the more specific cut.",
    sensitivity: "Reported as more sensitive than the original CAGE; specific values reported in the paper.",
    specificity: "Reported as somewhat less specific than the original CAGE.",
    license: "Information only on this site. A University of Washington clinical source page is not a transferable grant for public commercial electronic administration; no rights-holder grant covering this implementation is on file.",
    citationStatus: "Verified on PubMed",
    notes: "Adapted from the original CAGE questionnaire (Ewing JA, JAMA 1984, PMID 6471323).",
  },
  {
    slug: "dast-10",
    acronym: "DAST-10",
    fullName: "Drug Abuse Screening Test, 10-item short form",
    year: 1982,
    authors: "Skinner HA",
    journal: "Addictive Behaviors",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/7183189/",
    pubmedId: "7183189",
    population: "256 clients seeking help for alcohol or drug problems (original 28-item DAST). The 10-item short form was derived from this instrument.",
    items: "10 in the short form (DAST-10); 28 in the original DAST",
    scoringRange: "0 to 10 (DAST-10)",
    sensitivity: "Reported across later validation studies; varies by population.",
    specificity: "Varies by population and threshold.",
    license: "Copyright H.A. Skinner / Centre for Addiction and Mental Health (CAMH); free for clinical use, permission required for commercial reuse.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "crafft",
    acronym: "CRAFFT",
    fullName: "Car, Relax, Alone, Forget, Friends, Trouble",
    liveOn: "/crafft-substance-screening",
    year: 1999,
    authors: "Knight JR, Shrier LA, Bravender TD, Farrell M, Vander Bilt J, Shaffer HJ",
    journal: "Archives of Pediatrics & Adolescent Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/10357299/",
    pubmedId: "10357299",
    population: "Adolescents in a hospital-based clinic (development sample). A subsequent validation paper (Knight et al. 2002, PMID 12038895) studied 538 patients aged 14 to 18.",
    items: "6 (with 3 opening frequency items)",
    scoringRange: "0 to 6",
    threshold: "2 or more indicates a positive screen.",
    sensitivity: "0.76 at the cut of 2 in the 2002 validation cohort.",
    specificity: "0.94 at the cut of 2 in the 2002 validation cohort.",
    license: "Information only on this site. Boston Children's Hospital requires submission of the intended reproduction and an official approval letter; no approval for this public electronic implementation is on file.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "scoff",
    acronym: "SCOFF",
    fullName: "Sick, Control, One stone, Fat, Food",
    liveOn: "/scoff-eating-disorder-screening",
    year: 1999,
    authors: "Morgan JF, Reid F, Lacey JH",
    journal: "BMJ",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/10582927/",
    pubmedId: "10582927",
    population: "116 women with established eating disorders and 96 controls.",
    items: "5",
    scoringRange: "0 to 5",
    threshold: "2 or more indicates a positive screen warranting further assessment.",
    sensitivity: "Originally reported at 100% for anorexia and bulimia in the development sample; has been lower in subsequent population samples. Refer to follow-up validation papers.",
    specificity: "Originally reported at 87.5%; varies in follow-up studies.",
    license: "Information only on this site. Publication in BMJ establishes an evidence source, not a public commercial-web reproduction grant; current permission for this implementation is not on file.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "pcl-5",
    acronym: "PCL-5",
    fullName: "PTSD Checklist for DSM-5",
    liveOn: "/pcl-5-ptsd-screening",
    year: 2016,
    authors: "Bovin MJ, Marx BP, Weathers FW, Gallagher MW, Rodriguez P, Schnurr PP, Keane TM",
    journal: "Psychological Assessment",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/26653052/",
    pubmedId: "26653052",
    population: "Two veteran samples in U.S. Department of Veterans Affairs settings.",
    items: "20",
    scoringRange: "0 to 80",
    threshold: "A provisional cut of 31 to 33 was reported as optimally efficient in the validation paper. Different cuts may be appropriate for different populations.",
    sensitivity: "Cut-specific values reported in the paper; see referenced abstract.",
    specificity: "Cut-specific values reported in the paper.",
    license: "Public domain. Distributed by the U.S. Department of Veterans Affairs National Center for PTSD.",
    citationStatus: "Verified on PubMed",
    notes: "An additional psychometric validation by Blevins et al. (2015), Journal of Traumatic Stress, PMID 26606250, is also widely cited.",
  },
  {
    slug: "pc-ptsd-5",
    acronym: "PC-PTSD-5",
    fullName: "Primary Care PTSD Screen for DSM-5",
    liveOn: "/pc-ptsd-5-screening",
    year: 2016,
    authors: "Prins A, Bovin MJ, Smolenski DJ, Marx BP, Kimerling R, Jenkins-Guarnieri MA, Kaloupek DG, Schnurr PP, Pless Kaiser A, Leyva YE, Tiet QQ",
    journal: "Journal of General Internal Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27170304/",
    pubmedId: "27170304",
    population: "396 veterans receiving Veterans Affairs primary care.",
    items: "5",
    scoringRange: "0 to 5",
    threshold: "A cut of 3 maximizes sensitivity, 4 balances sensitivity and specificity, 5 maximizes specificity.",
    sensitivity: "Area under the ROC curve of 0.941 reported in the abstract; cut-specific values in the paper.",
    specificity: "Cut-specific specificity reported in the paper.",
    license: "Public domain. Distributed by the U.S. Department of Veterans Affairs National Center for PTSD.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "ace",
    acronym: "ACE Questionnaire",
    fullName: "Adverse Childhood Experiences (original ACE Study)",
    liveOn: "/ace-questionnaire",
    year: 1998,
    authors: "Felitti VJ, Anda RF, Nordenberg D, Williamson DF, Spitz AM, Edwards V, Koss MP, Marks JS",
    journal: "American Journal of Preventive Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/9635069/",
    pubmedId: "9635069",
    population: "9,508 adult Kaiser Permanente HMO members in San Diego.",
    items: "10 in the commonly used ACE Questionnaire (covering 7 categories of adversity in the original study, expanded to 10 categories in later versions)",
    scoringRange: "0 to 10",
    threshold: "An ACE score of 4 or more is frequently cited as a marker of substantially elevated risk for adult health problems, but this is a research-derived risk indicator, not a diagnostic threshold.",
    sensitivity: "Not applicable. The ACE questionnaire is a retrospective risk-factor inventory, not a diagnostic screening test.",
    specificity: "Not applicable.",
    license: "Information only on this site. CDC identifies specific CDC-Kaiser questionnaire versions as not copyrighted and without a use fee, but the former simplified site form was not verified as an exact published version.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "dass-21",
    acronym: "DASS-21",
    fullName: "Depression Anxiety Stress Scales, 21-item",
    liveOn: "/dass-21-depression-anxiety-stress",
    year: 2005,
    authors: "Henry JD, Crawford JR",
    journal: "British Journal of Clinical Psychology",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/16004657/",
    pubmedId: "16004657",
    population: "1,794 adults in a UK general-population sample.",
    items: "21 (7 per subscale: Depression, Anxiety, Stress)",
    scoringRange: "Three separate dimensional subscales; scoring mechanics are not reproduced because this public site does not administer or score the DASS-21.",
    threshold: "The official manual contains contextual severity labels; this site does not reproduce them or provide respondent-facing DASS interpretation.",
    sensitivity: "DASS-21 is psychometric rather than diagnostic; sens/spec values vary by comparator and threshold.",
    specificity: "Refer to the original paper and the DASS manual.",
    license: "The form is public domain, but current UNSW guidance prohibits administration on a website or app open to the public and prohibits returning automated scores or interpretations to respondents. The linked route is informational only.",
    citationStatus: "Verified on PubMed",
    notes: "Original DASS-42: Lovibond SH & Lovibond PF, Behaviour Research and Therapy 1995, PMID 7726811.",
  },
  {
    slug: "mdq",
    acronym: "MDQ",
    fullName: "Mood Disorder Questionnaire",
    year: 2000,
    authors: "Hirschfeld RM, Williams JB, Spitzer RL, Calabrese JR, Flynn L, Keck PE Jr, Lewis L, McElroy SL, Post RM, Rapport DJ, Russell JM, Sachs GS, Zajecka J",
    journal: "American Journal of Psychiatry",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/11058490/",
    pubmedId: "11058490",
    population: "198 patients across 5 outpatient clinics.",
    items: "13 yes/no symptom items, plus a co-occurrence item and a functional impairment item.",
    scoringRange: "0 to 13 on the symptom items.",
    sensitivity: "0.73 (per the original validation paper)",
    specificity: "0.90 (per the original validation paper)",
    license: "Free for clinical use.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "msi-bpd",
    acronym: "MSI-BPD",
    fullName: "McLean Screening Instrument for Borderline Personality Disorder",
    liveOn: "/msi-bpd-screening",
    year: 2003,
    authors: "Zanarini MC, Vujanovic AA, Parachini EA, Boulanger JL, Frankenburg FR, Hennen J",
    journal: "Journal of Personality Disorders",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/14744082/",
    pubmedId: "14744082",
    population: "200 treatment-seeking adults aged 18 to 59.",
    items: "10",
    scoringRange: "0 to 10",
    threshold: "7 or more is the recommended cut.",
    sensitivity: "0.81 in the full sample at cut of 7; 0.90 in subjects 25 and younger.",
    specificity: "0.85 in the full sample at cut of 7; 0.93 in subjects 25 and younger.",
    license: "Information only on this site. The validation publication is not a reuse licence, and no authoritative grant for public electronic reproduction, scoring, or commercial use is on file.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "oci-r",
    acronym: "OCI-R",
    fullName: "Obsessive-Compulsive Inventory, Revised",
    year: 2002,
    authors: "Foa EB, Huppert JD, Leiberg S, Langner R, Kichic R, Hajcak G, Salkovskis PM",
    journal: "Psychological Assessment",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/12501574/",
    pubmedId: "12501574",
    population: "215 patients with OCD plus comparison groups (PTSD, generalized anxiety disorder, social phobia, and non-anxious controls).",
    items: "18",
    scoringRange: "0 to 72",
    sensitivity: "ROC-derived values reported in the paper.",
    specificity: "ROC-derived values reported in the paper.",
    license: "Free for clinical and research use.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "asrs",
    acronym: "ASRS",
    fullName: "Adult ADHD Self-Report Scale (WHO)",
    liveOn: "/asrs-adhd-screening",
    year: 2005,
    authors: "Kessler RC, Adler L, Ames M, Demler O, Faraone S, Hiripi E, Howes MJ, Jin R, Secnik K, Spencer T, Ustun TB, Walters EE",
    journal: "Psychological Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/15841682/",
    pubmedId: "15841682",
    population: "154 respondents from the U.S. National Comorbidity Survey Replication clinical reappraisal sample.",
    items: "6 (ASRS Screener) or 18 (full ASRS v1.1)",
    scoringRange: "0 to 6 on the screener; the screener uses 4 darkly-shaded threshold responses.",
    threshold: "4 or more darkly-shaded responses on the 6-item screener indicates likelihood of adult ADHD.",
    sensitivity: "68.7% (6-item screener); 56.3% (18-item full).",
    specificity: "99.5% (6-item screener); 98.3% (18-item full).",
    license: "WHO public domain.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "aq-10",
    acronym: "AQ-10",
    fullName: "Autism Spectrum Quotient, 10-item",
    liveOn: "/aq-10-autism-screening",
    year: 2012,
    authors: "Allison C, Auyeung B, Baron-Cohen S",
    journal: "Journal of the American Academy of Child & Adolescent Psychiatry",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/22265366/",
    pubmedId: "22265366",
    population: "1,000 individuals with autism spectrum conditions and 3,000 controls, across toddler, child, adolescent, and adult forms.",
    items: "10 in each age form.",
    scoringRange: "0 to 10",
    threshold: "6 or more on the Adult, Adolescent, and Child AQ-10 forms.",
    sensitivity: "0.88 (Adult), 0.93 (Adolescent), 0.95 (Child) at the cut of 6.",
    specificity: "0.91 (Adult), 0.95 (Adolescent), 0.97 (Child) at the cut of 6.",
    license: "Information only on this site. The Autism Research Centre permits specified non-profit research and educational uses; commercial and information-technology uses may require a licence and fees, and no applicable licence is on file.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "spin",
    acronym: "SPIN",
    fullName: "Social Phobia Inventory",
    liveOn: "/spin-social-anxiety-test",
    year: 2000,
    authors: "Connor KM, Davidson JR, Churchill LE, Sherwood A, Foa E, Weisler RH",
    journal: "British Journal of Psychiatry",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/10827888/",
    pubmedId: "10827888",
    population: "Social phobia patients compared to non-clinical and other-anxiety-disorder controls.",
    items: "17",
    scoringRange: "0 to 68",
    threshold: "19 or higher distinguishes social phobia from controls in the original validation sample.",
    sensitivity: "Reported in the original paper; varies by threshold.",
    specificity: "Reported in the original paper; varies by threshold.",
    license: "Information only on this site. Current rights information directs prospective users to the copyright holder for permission and a possible user fee; no public electronic-use licence is on file.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "k6",
    acronym: "K6",
    fullName: "Kessler Psychological Distress Scale (6-item)",
    liveOn: "/k6-distress-scale",
    year: 2002,
    authors: "Kessler RC, Andrews G, Colpe LJ, Hiripi E, Mroczek DK, Normand SL, Walters EE, Zaslavsky AM",
    journal: "Psychological Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/12214795/",
    pubmedId: "12214795",
    population: "Validation in U.S. National Health Interview Survey samples.",
    items: "6 (K6); a 10-item version (K10) also exists.",
    scoringRange: "0 to 24 on the K6.",
    threshold: "13 or higher on the K6 commonly used as an indicator of probable serious mental illness in U.S. epidemiologic surveillance.",
    sensitivity: "Area under the ROC curve of 0.87 to 0.96 across analyses.",
    specificity: "Refer to the paper for cut-specific values.",
    license: "Free for non-commercial research and clinical use.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "who-5",
    acronym: "WHO-5",
    fullName: "World Health Organization Five Well-Being Index",
    liveOn: "/who-5-wellbeing-index",
    year: 2015,
    authors: "Topp CW, Østergaard SD, Søndergaard S, Bech P",
    journal: "Psychotherapy and Psychosomatics",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/25831962/",
    pubmedId: "25831962",
    population: "Systematic review across multiple populations and clinical conditions. The WHO-5 itself was originally developed by the WHO Regional Office for Europe in 1998.",
    items: "5",
    scoringRange: "Raw 0 to 25; commonly converted to 0 to 100 by multiplying by 4.",
    threshold: "A score of 50 or below (raw 13 or below) is commonly used to suggest poor wellbeing or to prompt depression screening.",
    sensitivity: "Described as sensitive and specific for depression screening across the reviewed literature; cut-specific values reported in the cited primary studies.",
    specificity: "Refer to the primary studies cited within the systematic review.",
    license: "WHO public domain.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "holmes-rahe",
    acronym: "Holmes-Rahe SRRS",
    fullName: "Social Readjustment Rating Scale",
    liveOn: "/holmes-rahe-stress-inventory",
    year: 1967,
    authors: "Holmes TH, Rahe RH",
    journal: "Journal of Psychosomatic Research",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/6059863/",
    pubmedId: "6059863",
    population: "394 subjects in the original development sample.",
    items: "43 life events",
    scoringRange: "Sum of weighted Life Change Units (LCUs) for endorsed events.",
    threshold: "Under 150 LCUs commonly considered low risk; 150 to 299 moderate; 300 or more major life crisis.",
    sensitivity: "Not applicable. The SRRS is a life-event index, not a diagnostic screen.",
    specificity: "Not applicable.",
    license: "Information only on this site. The primary publication does not grant public-web reproduction rights, and no current rights-holder permission covering electronic administration, calculation, or commercial use is on file.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "rosenberg",
    acronym: "Rosenberg SES",
    fullName: "Rosenberg Self-Esteem Scale",
    liveOn: "/rosenberg-self-esteem-scale",
    year: 1965,
    authors: "Rosenberg M",
    journal: "Society and the Adolescent Self-Image (Princeton University Press, 1965)",
    pubmedUrl: null,
    pubmedId: null,
    population: "5,024 high school juniors and seniors in New York State (original 1965 monograph).",
    items: "10",
    scoringRange: "0 to 30 (or 10 to 40, depending on the scoring convention used).",
    threshold: "On the 0 to 30 scoring, scores under 15 are commonly described as indicating low self-esteem. The scale is typically used as a continuous measure of trait self-esteem rather than a diagnostic cutoff.",
    sensitivity: "Not applicable. The RSES is a trait self-esteem measure, not a diagnostic screening test.",
    specificity: "Not applicable.",
    license: "Public domain. Distributed by the University of Maryland (Rosenberg legacy archive); freely available for research and clinical use.",
    citationStatus: "Source verified (book, not on PubMed)",
    notes: "The original publication is a 1965 book monograph and is not indexed in PubMed by design. The scale has been re-validated in dozens of subsequent peer-reviewed papers.",
  },
  {
    slug: "ucla-loneliness",
    acronym: "UCLA Loneliness Scale",
    fullName: "UCLA Loneliness Scale, Version 3",
    liveOn: "/ucla-loneliness-scale",
    year: 1996,
    authors: "Russell DW",
    journal: "Journal of Personality Assessment",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/8576833/",
    pubmedId: "8576833",
    population: "Multiple samples including college students, nurses, teachers, and elderly adults.",
    items: "20",
    scoringRange: "20 to 80",
    threshold: "There is no formal diagnostic cutoff; higher scores indicate greater self-reported loneliness. Studies often dichotomize at the population mean for descriptive comparisons.",
    sensitivity: "Not applicable. Trait loneliness measure, not a diagnostic test.",
    specificity: "Not applicable.",
    license: "Information only on this site. The author-controlled resource permits specified nonprofit research use; no written grant covering this public consumer website and commercial context is on file.",
    citationStatus: "Verified on PubMed",
    notes: "Original 1978 UCLA Loneliness Scale: Russell D, Peplau LA, Ferguson ML, Journal of Personality Assessment, PMID 660402.",
  },
  {
    slug: "ecr-r",
    acronym: "ECR-R",
    fullName: "Experiences in Close Relationships-Revised",
    liveOn: "/attachment-style-quiz",
    year: 2000,
    authors: "Fraley RC, Waller NG, Brennan KA",
    journal: "Journal of Personality and Social Psychology",
    pubmedUrl: "https://doi.org/10.1037/0022-3514.78.2.350",
    pubmedId: null,
    sourceLabel: "Publisher DOI 10.1037/0022-3514.78.2.350",
    population: "Adult attachment self-report data analyzed in the primary instrument-development publication.",
    items: "Not reproduced on this site.",
    scoringRange: "Not provided on this information-only page.",
    sensitivity: "Not applicable. The ECR-R is a dimensional research measure, not a diagnostic test.",
    specificity: "Not applicable.",
    license: "Information only on this site. The author permits noncommercial academic research use without a separate request and requires permission for commercial use; no commercial public electronic-use grant is on file.",
    citationStatus: "Primary source verified",
    notes: "The author recommends dimensional interpretation and cautions against forcing results into attachment categories. This site provides no questionnaire, scoring, category, or personal result.",
  },
  {
    slug: "brief-resilience",
    acronym: "BRS",
    fullName: "Brief Resilience Scale",
    liveOn: "/brief-resilience-scale",
    year: 2008,
    authors: "Smith BW, Dalen J, Wiggins K, Tooley E, Christopher P, Bernard J",
    journal: "International Journal of Behavioral Medicine",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/18696313/",
    pubmedId: "18696313",
    population: "Multiple adult samples described in the original validation publication.",
    items: "Not reproduced on this site.",
    scoringRange: "Not provided on this information-only page.",
    sensitivity: "Not applicable. The BRS is a resilience research measure, not a diagnostic test.",
    specificity: "Not applicable.",
    license: "Information only on this site. The primary publication does not itself grant public consumer-web reproduction and automated-scoring rights, and no authoritative applicable grant is on file.",
    citationStatus: "Verified on PubMed",
    notes: "This site provides no questionnaire, score, resilience band, or personal result.",
  },
  {
    slug: "athens-insomnia",
    acronym: "AIS",
    fullName: "Athens Insomnia Scale",
    liveOn: "/athens-insomnia-scale",
    year: 2000,
    authors: "Soldatos CR, Dikeos DG, Paparrigopoulos TJ",
    journal: "Journal of Psychosomatic Research",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/11033374/",
    pubmedId: "11033374",
    population: "Adults evaluated in the original validation publication.",
    items: "Not reproduced on this site.",
    scoringRange: "Not provided on this information-only page.",
    sensitivity: "Reported in the primary validation literature; not used to generate a result on this site.",
    specificity: "Reported in the primary validation literature; not used to generate a result on this site.",
    license: "Information only on this site. A University of Pennsylvania compilation records Elsevier permission for that publication, but that permission is not transferable; no written permission for this implementation is on file.",
    citationStatus: "Verified on PubMed",
    notes: "This site provides no questionnaire, score, threshold, severity label, or personal insomnia result.",
  },
  {
    slug: "who-assist",
    acronym: "WHO ASSIST",
    fullName: "Alcohol, Smoking and Substance Involvement Screening Test",
    liveOn: "/who-assist-substance-screening",
    year: 2010,
    authors: "World Health Organization",
    journal: "The ASSIST-linked brief intervention for hazardous and harmful substance use: manual for use in primary care",
    pubmedUrl: "https://www.who.int/publications/i/item/978924159938-2",
    pubmedId: null,
    sourceLabel: "Official WHO ASSIST manual",
    population: "Designed by WHO for primary-care and treatment settings; see the official manual for development and validation context.",
    items: "Not reproduced on this site.",
    scoringRange: "Not provided on this information-only page.",
    sensitivity: "See the official manual and cited validation literature; no result is generated on this site.",
    specificity: "See the official manual and cited validation literature; no result is generated on this site.",
    license: "Information only on this site. The official manual describes free use in specified primary-care and treatment settings, but no WHO grant covering direct-to-consumer public-web administration, automated results, or the site's commercial context is on file.",
    citationStatus: "Primary source verified",
    notes: "This site provides no questionnaire, score, intervention category, individualized guidance, or diagnosis.",
  },
];

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Clinical Evidence and Rights Status for Published Instruments",
    description:
      "Primary sources, validation context, and current public-site availability for published instruments documented by MindCheck Tools.",
    datePublished: "2026-04-26",
    dateModified: TODAY,
    author: { "@type": "Organization", name: "MindCheck Tools" },
    reviewedBy: AUTHOR_SCHEMA,
    publisher: {
      "@type": "Organization",
      name: "MindCheck Tools",
      url: SITE_URL,
    },
    mainEntityOfPage: PAGE_URL,
  };
}

function definedTermSetJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Published Screening Instruments Documented by MindCheck Tools",
    description:
      "Published screening instruments documented by MindCheck Tools, with primary-source citations and scope notes.",
    hasDefinedTerm: INSTRUMENTS.map((i) => ({
      "@type": "DefinedTerm",
      "@id": `${PAGE_URL}#${i.slug}`,
      name: i.acronym,
      alternateName: i.fullName,
      description: `${i.fullName} (${i.acronym}). ${i.authors}, ${i.year}, ${i.journal}.`,
      inDefinedTermSet: PAGE_URL,
      url: i.pubmedUrl ?? PAGE_URL,
    })),
  };
}

export default function ClinicalEvidencePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: "Clinical Evidence", url: PAGE_URL },
  ]);

  return (
    <div className="bg-sand-50 dark:bg-night-950 min-h-screen">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd()) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-6"
        >
          <Link href="/" className="hover:text-sage-600 dark:hover:text-sage-400">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-700 dark:text-neutral-200">Clinical Evidence</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight mb-3">
            Clinical Evidence and Rights Status for Published Instruments
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            Last updated: August 5, 2026. Reviewed by{" "}
            <Link href="/about/jason-ramirez" className="text-sage-700 dark:text-sage-400 underline">
              {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
            </Link>
            .
          </p>
        </header>

        <div
          role="alert"
          className="mb-6 px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 text-sm text-amber-800 dark:text-amber-200"
        >
          <p className="font-semibold mb-1">Clinical disclaimer</p>
          <p>
            Interactive screening tools are not diagnostic, and information-only
            instrument pages do not administer a questionnaire or produce a result.
            Both are educational and do not replace a qualified professional. If
            you are in crisis, call or text <strong>988</strong> (U.S. Suicide
            and Crisis Lifeline), text <strong>HOME</strong> to{" "}
            <strong>741741</strong> (Crisis Text Line), or call{" "}
            <strong>1-800-662-4357</strong> (SAMHSA National Helpline).
          </p>
        </div>

        <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Why we publish per-instrument evidence
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            A published screening instrument is different from an original
            educational quiz or reflection tool. MindCheck Tools labels those
            categories separately. This directory covers the published
            instruments listed below; it is not a claim that every tool on the
            site is clinically validated or appropriate for every population.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            This page currently documents {INSTRUMENTS.length} instruments. Each
            entry identifies the developers, publication, validation population,
            public-site status, reuse boundary, and a primary-source link.
            Instrument mechanics and validation metrics are shown only for
            maintained interactive implementations. Information-only entries
            intentionally omit questionnaire, score, cutoff, and result mechanics.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Reuse and license notes are informational, not legal permission.
            Anyone republishing an instrument should confirm current terms with
            the author or rights holder.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            For an overview of how the site uses these instruments, including
            scoring, privacy, and the role of the clinical reviewer, see the{" "}
            <Link href="/methodology" className="text-sage-700 dark:text-sage-400 underline">
              methodology page
            </Link>
            .
          </p>
        </section>

        <nav
          aria-label="Instruments on this page"
          className="mb-10 rounded-xl border border-sand-200 dark:border-neutral-800 bg-white dark:bg-night-900 p-5"
        >
          <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Instruments documented on this page
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-neutral-700 dark:text-neutral-300 list-decimal list-inside">
            {INSTRUMENTS.map((i) => (
              <li key={i.slug}>
                <a
                  href={`#${i.slug}`}
                  className="text-sage-700 dark:text-sage-400 hover:underline"
                >
                  {i.acronym}
                </a>{" "}
                <span className="text-neutral-500 dark:text-neutral-400">
                  ({i.fullName.split("(")[0].trim()})
                </span>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10">
          {INSTRUMENTS.map((i) => (
            <section
              key={i.slug}
              id={i.slug}
              className="rounded-xl border border-sand-200 dark:border-neutral-800 bg-white dark:bg-night-900 p-6 scroll-mt-20"
            >
              <header className="mb-4">
                <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                  {i.acronym}{" "}
                  <span className="text-base font-normal text-neutral-500 dark:text-neutral-400">
                    {i.fullName}
                  </span>
                </h2>
                {i.liveOn && (
                  <p className="text-sm">
                    <Link
                      href={i.liveOn}
                      className="text-sage-700 dark:text-sage-400 hover:underline"
                    >
                      {INFORMATION_ONLY_SLUGS.has(i.slug)
                        ? `Read the ${i.acronym} information and rights-status page`
                        : `Open the ${i.acronym} self-check page`}
                    </Link>
                  </p>
                )}
                {INFORMATION_ONLY_SLUGS.has(i.slug) && (
                  <p className="mt-2 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                    Information only: no questionnaire, answers, score, cutoff, or personal result
                  </p>
                )}
              </header>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">First published</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.year}</dd>
                </div>
                {INFORMATION_ONLY_SLUGS.has(i.slug) ? (
                  <div className="sm:col-span-2">
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Public site status</dt>
                    <dd className="text-neutral-600 dark:text-neutral-300">
                      Information only. MindCheck Tools does not reproduce, administer, score, or interpret this instrument.
                    </dd>
                  </div>
                ) : (
                  <>
                    <div>
                      <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Items</dt>
                      <dd className="text-neutral-600 dark:text-neutral-300">{i.items}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Score range</dt>
                      <dd className="text-neutral-600 dark:text-neutral-300">{i.scoringRange}</dd>
                    </div>
                  </>
                )}
              </dl>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Original developers</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.authors}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Population validated on</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.population}</dd>
                </div>
                {!INFORMATION_ONLY_SLUGS.has(i.slug) && i.threshold && (
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Recommended threshold</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.threshold}</dd>
                </div>
                )}
                {INFORMATION_ONLY_SLUGS.has(i.slug) ? (
                  <div>
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Validation evidence</dt>
                    <dd className="text-neutral-600 dark:text-neutral-300">
                      See the cited primary source for study-specific psychometrics. They are not used to generate an on-site result.
                    </dd>
                  </div>
                ) : (
                  <>
                  <div className="sm:inline-block sm:w-1/2 sm:pr-2 sm:align-top">
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Sensitivity</dt>
                    <dd className="text-neutral-600 dark:text-neutral-300">{i.sensitivity}</dd>
                  </div>
                  <div className="sm:inline-block sm:w-1/2 sm:pl-2 sm:align-top">
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Specificity</dt>
                    <dd className="text-neutral-600 dark:text-neutral-300">{i.specificity}</dd>
                  </div>
                  </>
                )}
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Availability / reuse note</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.license}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Primary source citation</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">
                    {i.authors}. {i.fullName}. <em>{i.journal}</em>, {i.year}.{" "}
                    {i.pubmedUrl ? (
                      <>
                        <a
                          href={i.pubmedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sage-700 dark:text-sage-400 underline"
                        >
                          {i.sourceLabel ?? `PMID ${i.pubmedId}`}
                        </a>
                      </>
                    ) : (
                      <span className="text-neutral-500 dark:text-neutral-400">
                        Not indexed in PubMed (book monograph).
                      </span>
                    )}
                    .{" "}
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      [{i.citationStatus}]
                    </span>
                  </dd>
                </div>
                {i.notes && (
                  <div>
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Notes</dt>
                    <dd className="text-neutral-600 dark:text-neutral-300">{i.notes}</dd>
                  </div>
                )}
              </dl>
            </section>
          ))}
        </div>

        <section className="mt-12 prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Why this matters
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Peer-reviewed validation is what separates a clinical screening
            tool from an internet quiz. A validated instrument has been
            administered to a defined population, scored against an external
            reference standard (often a structured diagnostic interview), and
            published with reported psychometric properties such as
            sensitivity and specificity at specific cut points. Other
            researchers and clinicians can then use that evidence to decide
            whether the instrument fits their setting and to interpret a
            patient&apos;s score within a known error band.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Sensitivity is the proportion of people with the condition whose
            score falls at or above the cut point: a high-sensitivity test is
            useful for ruling out a condition when the score is low.
            Specificity is the proportion of people without the condition
            whose score falls below the cut point: a high-specificity test is
            useful for confirming a positive screen warrants further
            evaluation. No screening test is both perfectly sensitive and
            perfectly specific. That is one reason a positive screen is the
            beginning of a clinical conversation, not the end of one.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Availability varies by instrument, version, use case, and rights
            holder. The reuse note in each entry is a starting point for due
            diligence, not a substitute for checking the current terms. This is
            especially important for commercial reuse, translations, modified
            wording, or redistribution outside the original clinical context.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Where the published abstract did not state a sensitivity or
            specificity value, this page says so directly. The validation
            literature on some instruments is large and evolving, so values
            stated here reflect the original validation paper. Subsequent
            studies in different populations may report different operating
            characteristics, and clinical guidelines change over time.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-sand-200 dark:border-neutral-800 bg-white dark:bg-night-900 p-5" aria-labelledby="awareness-guides">
          <h2 id="awareness-guides" className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2">Related public-education guides</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li><Link href="/awareness/fentanyl-prevention-awareness-day" className="text-sage-700 dark:text-sage-400 underline">August 21: Fentanyl Prevention and Awareness Day</Link></li>
            <li><Link href="/awareness/overdose-awareness-month-day" className="text-sage-700 dark:text-sage-400 underline">Overdose awareness in August: dates and respectful action</Link></li>
          </ul>
        </section>

        <section className="mt-10 rounded-xl border border-sand-200 dark:border-neutral-800 bg-white dark:bg-night-900 p-5">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            About this review
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Citation details are checked against the linked PubMed record or
            identified source publication. Threshold and availability notes
            reflect the cited publication, instrument manual, or an identified
            secondary source when the abstract does not state them. The
            Rosenberg Self-Esteem Scale (1965) is a book monograph and is not
            indexed in PubMed. For details about how the site applies these
            instruments, see the{" "}
            <Link href="/methodology" className="text-sage-700 dark:text-sage-400 underline">
              methodology page
            </Link>
            . Review covers source alignment, scoring limitations, and safety
            language. Clinical reviewer:{" "}
            <Link
              href="/about/jason-ramirez"
              className="text-sage-700 dark:text-sage-400 underline"
            >
              Jason Ramirez, CADC-II
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
