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
  {
    question: "How are resilience resources different from perceived recovery?",
    answer: "Resources are the supports and circumstances someone can draw on, such as dependable relationships, time, practical help, or a stable place to rest. Perceived recovery concerns how someone understands their ability to recover after stress. These are related topics, but they are not interchangeable. Having support does not mean a difficult experience will feel easy, and a person's account of coping does not reveal every resource available to them.",
  },
  {
    question: "Why would one number leave out important support needs?",
    answer: "A single summary cannot describe whether help is accessible, whether daily demands have changed, or what kind of support someone wants. It also cannot explain barriers such as competing responsibilities or an unsafe environment. For a conversation with a qualified professional, concrete descriptions of current demands and available help may provide useful context. No score is needed to ask for support, and this page does not calculate or interpret one.",
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
          "Thinking about resilience as a process leaves room for changing circumstances. Recovering after one difficult experience does not mean that another experience will feel manageable, and struggling during a demanding period is not a character judgment. There is a difference between describing how recovery feels at a particular time and explaining everything that makes recovery possible. A useful discussion can include what happened, what demands remain, what support is available, and what the person considers recovery to mean. None of those questions requires assigning someone a permanent label such as strong or weak.",
          "Self-report offers a person's perspective rather than a direct observation of every part of their life. Someone answering during an unsettled week may have different experiences in mind than someone reflecting after a period of stability. People can also understand words such as recovery differently: returning to a routine, feeling less overwhelmed, or being able to ask for help are not identical experiences. When reading resilience research, look for the population studied, the setting, and the timing of measurement. Those details help explain what the findings address and where their relevance may be limited. A brief measure alone cannot supply that missing context.",
          "In general, research measures turn a defined concept into something investigators can examine consistently across participants. That can support questions about relationships between perceived recovery and other reported experiences, while leaving important questions unanswered about causes and individual needs. Reading the original study is therefore different from taking a public self-check: a study has a particular purpose, participant group, and method. Educational discussion should keep those boundaries visible rather than treating the existence of a research measure as proof that everyone needs a personal result. This page is not a substitute for professional care; concerns about coping can be discussed with a qualified professional without completing this instrument.",
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
