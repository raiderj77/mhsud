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

const PAGE_PATH = "/brief-resilience-scale";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Brief Resilience Scale Information and Rights Status",
  description:
    "Educational information about the Brief Resilience Scale, why MindCheck Tools does not administer it publicly, and non-equivalent public-use options.",
  keywords: [
    "Brief Resilience Scale information",
    "BRS rights",
    "resilience research measure",
    "resilience scale permission",
  ],
  openGraph: {
    title: "Brief Resilience Scale Information",
    description: "Research context and the unresolved public-web reproduction boundary for the Brief Resilience Scale.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA: InformationFaq[] = [
  {
    question: "What is the Brief Resilience Scale?",
    answer:
      "It is a research measure developed by Bruce Smith and colleagues to study a person's perceived ability to recover or bounce back after stress.",
  },
  {
    question: "Can I complete the Brief Resilience Scale on MindCheck Tools?",
    answer:
      "No. MindCheck Tools found the primary research publication but did not find and archive an authoritative grant covering public consumer-web reproduction and automated scoring.",
  },
  {
    question: "Why are there no questionnaire items, score, or resilience bands?",
    answer:
      "The site withholds those elements until ownership, version, scoring provenance, and public-use permission are resolved. It also avoids presenting unsupported bands as clinical cutoffs.",
  },
  {
    question: "Are K6 or WHO-5 equivalent resilience scales?",
    answer:
      "No. K6 screens nonspecific distress and WHO-5 measures recent well-being. Neither measures resilience or produces a Brief Resilience Scale result.",
  },
  {
    question: "Can a resilience score diagnose a condition or predict coping?",
    answer:
      "No. Resilience is context-dependent, and a self-report measure cannot diagnose a condition or predict how an individual will respond to future adversity.",
  },
];

export default function BriefResilienceInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "Brief Resilience Scale Information and Rights Status",
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
              { name: "Brief Resilience Scale Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <RightsBoundaryInformationPage
        title="Brief Resilience Scale Information"
        intro="MindCheck Tools does not reproduce, administer, score, or interpret the Brief Resilience Scale. This page explains the research purpose and unresolved public-use rights status."
        what="An educational overview of the Brief Resilience Scale and the evidence and rights checks required before public electronic administration."
        who="People seeking reliable information about resilience research or a separately permitted distress or well-being self-check."
        bottomLine="No authoritative public-web reproduction grant is on file. This page provides no questionnaire, score, resilience band, or personal result and is not diagnostic."
        boundaryHeading="Why the public scale is not provided"
        boundaryParagraphs={[
          "The primary validation publication establishes the research measure, but a published article is not by itself permission for a third party to reproduce and score the scale on a public consumer website.",
          "MindCheck Tools has not identified and archived a current authoritative grant covering public electronic use, commercial context, modifications, or automated results.",
          "The route remains a useful information page while the questionnaire, response choices, scoring, and unsupported resilience categories are withheld.",
        ]}
        overviewHeading="What the scale was designed to study"
        overviewParagraphs={[
          "The Brief Resilience Scale was designed to measure perceived ability to recover from stress rather than cataloging resources, personality traits, or a clinical disorder.",
          "Resilience can change with context, health, support, resources, and experience. A self-report result should not be treated as a fixed trait, diagnosis, or forecast of future coping.",
        ]}
        alternatives={[
          {
            href: "/k6-distress-scale",
            name: "K6 Psychological Distress Self-Check",
            description: "A separately permitted screen for recent nonspecific distress. It does not measure resilience or coping capacity.",
          },
          {
            href: "/who-5-wellbeing-index",
            name: "WHO-5 Well-Being Index",
            description: "A separately permitted noncommercial well-being measure. It is not a resilience scale and cannot reproduce a BRS result.",
          },
        ]}
        sources={[
          {
            href: "https://pubmed.ncbi.nlm.nih.gov/18696313/",
            label: "PubMed: The Brief Resilience Scale",
            detail: "Primary 2008 validation publication record by Smith and colleagues.",
          },
          {
            href: "https://doi.org/10.1080/10705500802222972",
            label: "Publisher DOI record",
            detail: "Original article record; publication access does not establish a public-web reproduction grant.",
          },
        ]}
        faq={FAQ_DATA}
        reviewer={<ToolReviewerBio lastReviewed="August 2, 2026" />}
      />
    </>
  );
}
