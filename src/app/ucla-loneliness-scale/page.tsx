import type { Metadata } from "next";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import {
  breadcrumbJsonLd,
  createMetadata,
  faqJsonLd,
  medicalWebPageJsonLd,
  SITE_URL,
} from "@/lib/metadata";
import {
  RightsBoundaryInformationPage,
  type InformationFaq,
} from "@/app/_components/RightsBoundaryInformationPage";

const PAGE_PATH = "/ucla-loneliness-scale";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "UCLA Loneliness Scale Information and Permission Boundary",
  description:
    "Educational information about the UCLA Loneliness Scale, its public-web permission boundary, and non-equivalent public-use screening options.",
  keywords: [
    "UCLA Loneliness Scale information",
    "UCLA Loneliness Scale permission",
    "loneliness research measure",
    "subjective loneliness information",
  ],
  openGraph: {
    title: "UCLA Loneliness Scale Information",
    description: "Research context and the permission boundary for public electronic administration of the UCLA Loneliness Scale.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA: InformationFaq[] = [
  {
    question: "What is the UCLA Loneliness Scale?",
    answer:
      "It is a self-report research measure developed to study subjective loneliness and perceived social disconnection. The author-controlled UCLA page describes its research use and available versions.",
  },
  {
    question: "Can I take the UCLA Loneliness Scale on MindCheck Tools?",
    answer:
      "No. The author's published permission covers specified nonprofit research uses, but MindCheck Tools has not obtained a written grant for this public consumer website and commercial-site context.",
  },
  {
    question: "Why does this page omit questions, scoring, and a loneliness cutoff?",
    answer:
      "Those materials are not reproduced without the appropriate rights grant. The research measure also does not provide a universal diagnostic cutoff for an individual's loneliness or mental health.",
  },
  {
    question: "Are K6 or PHQ-4 replacements for the UCLA Loneliness Scale?",
    answer:
      "No. They screen different symptom domains and do not measure or score loneliness. They are linked only as separately permitted options for people concerned about distress, depression, or anxiety.",
  },
  {
    question: "Does feeling lonely mean I have a mental health diagnosis?",
    answer:
      "No. Loneliness is an experience, not a diagnosis by itself. Persistent distress or changes in daily functioning can be discussed with a qualified healthcare professional.",
  },
];

export default function UCLALonelinessInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "UCLA Loneliness Scale Information and Permission Boundary",
              description: "Educational research and rights information without public questionnaire administration or scoring.",
              url: PAGE_URL,
              lastReviewed: "2026-08-02",
            }),
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "UCLA Loneliness Scale Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <RightsBoundaryInformationPage
        title="UCLA Loneliness Scale Information"
        intro="MindCheck Tools does not reproduce, administer, score, or interpret the UCLA Loneliness Scale. This page explains the measure's purpose and the permission boundary while keeping the established URL publicly useful."
        what="An educational overview of the UCLA Loneliness Scale, its research purpose, limitations, and public-use permission boundary."
        who="People seeking reliable context about loneliness research or a separately permitted symptom self-check."
        bottomLine="A public commercial-web permission grant is not on file. This page has no questionnaire, score, cutoff, or personal loneliness result and cannot provide a diagnosis."
        boundaryHeading="Why the public questionnaire is not provided"
        boundaryParagraphs={[
          "The author-controlled UCLA resource permits use without permission for specified nonprofit research purposes. That statement does not grant a commercial public website the right to reproduce and score the scale for consumers.",
          "MindCheck Tools has not archived written permission covering public electronic administration, automated scoring, traffic, adaptations, or the site's commercial context.",
          "Until that permission exists, this route remains informational and withholds questionnaire text, response choices, scoring, thresholds, and respondent-facing interpretation.",
        ]}
        overviewHeading="What the scale was designed to measure"
        overviewParagraphs={[
          "The UCLA Loneliness Scale is used in research to measure subjective loneliness: the perceived gap between the social connection a person wants and experiences.",
          "Loneliness and objective social isolation are related but not identical. A research score is not a diagnosis and should not be used by itself to make medical, employment, educational, or relationship decisions.",
        ]}
        alternatives={[
          {
            href: "/k6-distress-scale",
            name: "K6 Psychological Distress Self-Check",
            description: "A separately permitted screen for recent nonspecific distress. It does not assess loneliness or social connection.",
          },
          {
            href: "/phq-4-anxiety-depression-screen",
            name: "PHQ-4 Depression and Anxiety Screen",
            description: "A brief, separately permitted symptom screen. It is not a loneliness scale and cannot reproduce a UCLA result.",
          },
        ]}
        sources={[
          {
            href: "https://peplau.psych.ucla.edu/loneliness/",
            label: "UCLA author-controlled loneliness resource",
            detail: "Describes the measure and its nonprofit research-use permission boundary.",
          },
          {
            href: "https://pubmed.ncbi.nlm.nih.gov/8576833/",
            label: "PubMed: UCLA Loneliness Scale Version 3",
            detail: "Primary reliability, validity, and factor-structure publication record.",
          },
          {
            href: "https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf",
            label: "U.S. Surgeon General advisory on social connection",
            detail: "Public-health context for loneliness and social connection; it is not a substitute for the instrument.",
          },
        ]}
        faq={FAQ_DATA}
        reviewer={<ToolReviewerBio lastReviewed="August 2, 2026" />}
      />
    </>
  );
}
