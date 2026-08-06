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

const PAGE_PATH = "/athens-insomnia-scale";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Athens Insomnia Scale Information and Permission Boundary",
  description:
    "Educational information about the Athens Insomnia Scale, why it is not administered here, and non-equivalent public-use options for sleep and mood reflection.",
  keywords: [
    "Athens Insomnia Scale information",
    "Athens Insomnia Scale permission",
    "insomnia research instrument",
    "AIS rights",
  ],
  openGraph: {
    title: "Athens Insomnia Scale Information",
    description: "Research context and the permission boundary for public electronic administration of the Athens Insomnia Scale.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA: InformationFaq[] = [
  {
    question: "What is the Athens Insomnia Scale?",
    answer:
      "It is a self-report research and clinical instrument developed by Constantin Soldatos and colleagues to assess insomnia-related sleep difficulty and daytime impact within its intended professional context.",
  },
  {
    question: "Can I take the Athens Insomnia Scale on MindCheck Tools?",
    answer:
      "No. MindCheck Tools has not archived written permission from the current rights holder for public consumer-web reproduction, electronic administration, or automated scoring.",
  },
  {
    question: "Why are the questions, score, and threshold omitted?",
    answer:
      "Those elements are part of the instrument and are withheld until the appropriate electronic/public-use permission is documented. A self-report threshold also cannot establish an insomnia diagnosis.",
  },
  {
    question: "Is the Sleep and Mood Check an Athens Insomnia Scale substitute?",
    answer:
      "No. It is an original educational reflection with different content and no validated insomnia cutoff. PHQ-4 is also a separate depression and anxiety screen, not a sleep-disorder assessment.",
  },
  {
    question: "How is insomnia diagnosed?",
    answer:
      "A qualified healthcare professional evaluates sleep pattern, duration, daytime effects, medical and medication factors, other sleep disorders, and the person's circumstances. An online self-check cannot complete that evaluation.",
  },
];

export default function AthensInsomniaInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "Athens Insomnia Scale Information and Permission Boundary",
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
              { name: "Athens Insomnia Scale Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <RightsBoundaryInformationPage
        title="Athens Insomnia Scale Information"
        intro="MindCheck Tools does not reproduce, administer, score, or interpret the Athens Insomnia Scale. This page preserves accurate research context and the current permission boundary."
        what="An educational overview of the Athens Insomnia Scale, its intended purpose, limitations, and public electronic-use permission boundary."
        who="People seeking accurate information about the instrument or a separately permitted educational sleep or symptom reflection."
        bottomLine="Written public-web permission is not on file. This page provides no questionnaire, score, threshold, or insomnia result and cannot diagnose a sleep disorder."
        boundaryHeading="Why the public scale is not provided"
        boundaryParagraphs={[
          "The primary publication establishes the instrument's evidence base but does not grant third parties a right to reproduce it on a public website.",
          "A University of Pennsylvania clinical compilation records that its reproduction was made with Elsevier permission. That permission applies to that publication and does not transfer to MindCheck Tools.",
          "Until the current rights holder grants the contemplated electronic use, this route remains informational and withholds questionnaire content, response choices, scoring, thresholds, and automated interpretation.",
        ]}
        overviewHeading="What the instrument was designed to assess"
        overviewParagraphs={[
          "The Athens Insomnia Scale was developed to assess sleep difficulty and related daytime effects within a standardized professional framework.",
          "Sleep problems can have medical, medication, circadian, breathing-related, behavioral, or mental-health contributors. A questionnaire result cannot determine the cause or replace a clinical sleep history.",
        ]}
        alternatives={[
          {
            href: "/sleep-and-mood-check",
            name: "Sleep and Mood Check",
            description: "An original educational reflection with no validated insomnia cutoff. It does not reproduce or replace the Athens scale.",
          },
          {
            href: "/phq-4-anxiety-depression-screen",
            name: "PHQ-4 Depression and Anxiety Screen",
            description: "A separately permitted symptom screen for depression and anxiety concerns. It is not a sleep assessment.",
          },
        ]}
        sources={[
          {
            href: "https://pubmed.ncbi.nlm.nih.gov/11091029/",
            label: "PubMed: Athens Insomnia Scale validation",
            detail: "Primary publication record by Soldatos and colleagues.",
          },
          {
            href: "https://doi.org/10.1016/S1389-9457(00)00055-X",
            label: "Publisher DOI record",
            detail: "Original Sleep Medicine article record; publication access is not a public-web reproduction grant.",
          },
          {
            href: "https://www.med.upenn.edu/cbti/assets/user-content/documents/Sleep_Instruments_book_3_.pdf",
            label: "University of Pennsylvania sleep-instruments compilation",
            detail: "Records Elsevier permission for that compilation, demonstrating that its permission is publication-specific.",
          },
        ]}
        faq={FAQ_DATA}
        reviewer={<ToolReviewerBio lastReviewed="August 2, 2026" />}
      />
    </>
  );
}
