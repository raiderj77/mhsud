import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AUTHOR_SCHEMA } from "@/config/author";

const PAGE_URL = `${SITE_URL}/clinical-evidence`;
const TODAY = new Date().toISOString().substring(0, 10);

export const metadata: Metadata = createMetadata({
  path: "/clinical-evidence",
  title: "Clinical Evidence: Source Studies for Every Screening Tool",
  description:
    "Per-instrument clinical evidence base for the validated screening tools used on MindCheck Tools. Original developers, validation populations, sensitivity and specificity values, peer-reviewed source citations on PubMed, and license status.",
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
    title: "Clinical Evidence: Source Studies for Every Screening Tool",
    description:
      "The peer-reviewed validation studies behind every screening instrument on MindCheck Tools, with PubMed citations.",
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
  population: string;
  items: string;
  scoringRange: string;
  threshold: string;
  sensitivity: string;
  specificity: string;
  license: string;
  citationStatus: "Verified on PubMed" | "Source verified (book, not on PubMed)";
  notes?: string;
};

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
    license: "Free for clinical use.",
    citationStatus: "Verified on PubMed",
    notes: "Adapted from the original CAGE questionnaire (Ewing JA, JAMA 1984, PMID 6471323).",
  },
  {
    slug: "dast-10",
    acronym: "DAST-10",
    fullName: "Drug Abuse Screening Test, 10-item short form",
    liveOn: "/dast-10-drug-screening",
    year: 1982,
    authors: "Skinner HA",
    journal: "Addictive Behaviors",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/7183189/",
    pubmedId: "7183189",
    population: "256 clients seeking help for alcohol or drug problems (original 28-item DAST). The 10-item short form was derived from this instrument.",
    items: "10 in the short form (DAST-10); 28 in the original DAST",
    scoringRange: "0 to 10 (DAST-10)",
    threshold: "1 to 2 = low level concern; 3 to 5 = moderate; 6 to 8 = substantial; 9 to 10 = severe.",
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
    license: "Free for clinical use; copyright Children's Hospital Boston / John R. Knight, MD.",
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
    license: "Free for clinical use; published in BMJ.",
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
    license: "Public domain. The ACE Questionnaire is freely distributed by the U.S. Centers for Disease Control and Prevention and the Felitti / Anda research collaboration.",
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
    scoringRange: "0 to 63 total; subscale scores 0 to 21, multiplied by 2 for comparability with the original 42-item DASS.",
    threshold: "Severity bands per the Lovibond DASS manual (Normal, Mild, Moderate, Severe, Extremely Severe).",
    sensitivity: "DASS-21 is psychometric rather than diagnostic; sens/spec values vary by comparator and threshold.",
    specificity: "Refer to the original paper and the DASS manual.",
    license: "Free for research and clinical use; copyright the Psychology Foundation of Australia / Lovibond.",
    citationStatus: "Verified on PubMed",
    notes: "Original DASS-42: Lovibond SH & Lovibond PF, Behaviour Research and Therapy 1995, PMID 7726811.",
  },
  {
    slug: "mdq",
    acronym: "MDQ",
    fullName: "Mood Disorder Questionnaire",
    liveOn: "/mdq-bipolar-screening",
    year: 2000,
    authors: "Hirschfeld RM, Williams JB, Spitzer RL, Calabrese JR, Flynn L, Keck PE Jr, Lewis L, McElroy SL, Post RM, Rapport DJ, Russell JM, Sachs GS, Zajecka J",
    journal: "American Journal of Psychiatry",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/11058490/",
    pubmedId: "11058490",
    population: "198 patients across 5 outpatient clinics.",
    items: "13 yes/no symptom items, plus a co-occurrence item and a functional impairment item.",
    scoringRange: "0 to 13 on the symptom items.",
    threshold: "A positive screen is 7 or more symptom items, with co-occurrence, plus moderate or serious functional impairment.",
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
    license: "Free for clinical use; copyright McLean Hospital / Zanarini.",
    citationStatus: "Verified on PubMed",
  },
  {
    slug: "oci-r",
    acronym: "OCI-R",
    fullName: "Obsessive-Compulsive Inventory, Revised",
    liveOn: "/oci-r-ocd-screening",
    year: 2002,
    authors: "Foa EB, Huppert JD, Leiberg S, Langner R, Kichic R, Hajcak G, Salkovskis PM",
    journal: "Psychological Assessment",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/12501574/",
    pubmedId: "12501574",
    population: "215 patients with OCD plus comparison groups (PTSD, generalized anxiety disorder, social phobia, and non-anxious controls).",
    items: "18",
    scoringRange: "0 to 72",
    threshold: "21 or higher commonly used as a clinical cut for OCD.",
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
    license: "Free for clinical use; copyright Autism Research Centre, University of Cambridge.",
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
    license: "Copyright Connor & Davidson; free for clinical and research use.",
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
    license: "Free for educational and clinical use; widely reproduced in the public literature.",
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
    license: "Free for research use; copyright D. Russell / UCLA.",
    citationStatus: "Verified on PubMed",
    notes: "Original 1978 UCLA Loneliness Scale: Russell D, Peplau LA, Ferguson ML, Journal of Personality Assessment, PMID 660402.",
  },
];

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Clinical Evidence: Source Studies for Every Screening Tool",
    description:
      "Per-instrument clinical evidence base for the validated screening tools used on MindCheck Tools, with PubMed citations.",
    datePublished: "2026-04-26",
    dateModified: TODAY,
    author: AUTHOR_SCHEMA,
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
    name: "Validated Mental Health Screening Instruments",
    description:
      "Peer-reviewed validated screening instruments used on MindCheck Tools, with primary source citations.",
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
    <main className="bg-sand-50 dark:bg-night-950 min-h-screen">
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
            Clinical Evidence: Source Studies for Every Screening Tool
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            Last updated: {TODAY}. Reviewed by Jason Ramirez, CADC-II.
          </p>
        </header>

        <div
          role="alert"
          className="mb-6 px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 text-sm text-amber-800 dark:text-amber-200"
        >
          <p className="font-semibold mb-1">Clinical disclaimer</p>
          <p>
            Screening tools are not diagnostic. They support conversations with
            qualified mental health professionals; they do not replace them. If
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
            Most mental health quizzes on the open web are not validated
            screening tools. They are personality tests, marketing funnels, or
            symptom lists assembled without peer-reviewed evidence behind their
            scoring. MindCheck Tools uses only screening instruments that have
            been published in peer-reviewed journals, scored using thresholds
            published by their original authors, and never modified.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            This page documents, for every instrument live on the site: who
            developed it, when and where it was first published, the population
            it was validated on, the published sensitivity and specificity
            values where reported, the recommended scoring threshold, the
            license status, and a direct link to the original validation paper
            on PubMed. Every PubMed citation below has been verified by
            fetching the linked record. Where a value is not stated in the
            published abstract, we mark it as such rather than estimating.
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
                      Take the {i.acronym} self-check on this site
                    </Link>
                  </p>
                )}
              </header>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">First published</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.year}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Items</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.items}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Score range</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.scoringRange}</dd>
                </div>
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
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Recommended threshold</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.threshold}</dd>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Sensitivity</dt>
                    <dd className="text-neutral-600 dark:text-neutral-300">{i.sensitivity}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Specificity</dt>
                    <dd className="text-neutral-600 dark:text-neutral-300">{i.specificity}</dd>
                  </div>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">License / availability</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{i.license}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-700 dark:text-neutral-200">Primary source citation</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">
                    {i.authors}. {i.fullName}. <em>{i.journal}</em>, {i.year}.{" "}
                    {i.pubmedUrl ? (
                      <>
                        PMID:{" "}
                        <a
                          href={i.pubmedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sage-700 dark:text-sage-400 underline"
                        >
                          {i.pubmedId}
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
            We also list license status because that affects what you, a
            clinician, or a researcher can do with an instrument. Pfizer-released
            tools (PHQ-9, PHQ-4, GAD-7) are free to use without permission. WHO
            instruments (AUDIT, AUDIT-C, ASRS, WHO-5) are public domain. U.S.
            Department of Veterans Affairs instruments (PCL-5, PC-PTSD-5) are
            in the public domain. Some instruments, such as DAST-10, retain
            copyright with the original author or institution and require
            permission for commercial reuse.
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

        <section className="mt-10 rounded-xl border border-sand-200 dark:border-neutral-800 bg-white dark:bg-night-900 p-5">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            About this review
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Citations on this page were verified by fetching the linked
            PubMed record and confirming the title, authors, journal, and
            year. Threshold and license details reflect the published
            instrument manuals and widely cited secondary sources where the
            primary abstract did not state them. The Rosenberg Self-Esteem
            Scale (1965) is published as a book monograph and is not indexed
            in PubMed; we cite the original publication directly. For details
            about how the site applies these instruments, see the{" "}
            <Link href="/methodology" className="text-sage-700 dark:text-sage-400 underline">
              methodology page
            </Link>
            . Clinical reviewer:{" "}
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
    </main>
  );
}
