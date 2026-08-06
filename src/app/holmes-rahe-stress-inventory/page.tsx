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

const PAGE_PATH = "/holmes-rahe-stress-inventory";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Holmes-Rahe Stress Inventory Information and Rights Boundary",
  description:
    "Educational information about the Holmes-Rahe Social Readjustment Rating Scale, why it is not administered here, and non-equivalent public-use options.",
  keywords: [
    "Holmes-Rahe information",
    "Social Readjustment Rating Scale",
    "Holmes-Rahe rights",
    "life events stress research",
  ],
  openGraph: {
    title: "Holmes-Rahe Stress Inventory Information",
    description: "Research context and the public-web reproduction boundary for the Holmes-Rahe scale.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA: InformationFaq[] = [
  {
    question: "What is the Holmes-Rahe Social Readjustment Rating Scale?",
    answer:
      "It is a research instrument developed by Thomas Holmes and Richard Rahe to study associations between accumulated life changes and later illness. It describes population-level associations and cannot predict an individual's health outcome.",
  },
  {
    question: "Can I complete the Holmes-Rahe inventory on MindCheck Tools?",
    answer:
      "No. MindCheck Tools has not archived permission covering public electronic reproduction, automated calculation, or respondent-facing interpretation, so this route is educational only.",
  },
  {
    question: "Why are there no event weights, score bands, or health-risk percentages here?",
    answer:
      "Those elements are part of the instrument and its interpretation. Reproducing them without documented permission would cross the site's rights boundary, and applying population associations to an individual can also be misleading.",
  },
  {
    question: "Are the K6 or PHQ-4 equivalent to Holmes-Rahe?",
    answer:
      "No. K6 asks about nonspecific psychological distress and PHQ-4 screens recent depression and anxiety symptoms. Neither measures life-event readjustment or produces a Holmes-Rahe result.",
  },
  {
    question: "Can this page diagnose a stress-related condition?",
    answer:
      "No. This page is educational and does not assess symptoms, illness risk, or a diagnosis. A qualified healthcare professional can evaluate concerns in context.",
  },
];

export default function HolmesRaheInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "Holmes-Rahe Stress Inventory Information and Rights Boundary",
              description: "Educational research and rights information without questionnaire administration or scoring.",
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
              { name: "Holmes-Rahe Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <RightsBoundaryInformationPage
        title="Holmes-Rahe Stress Inventory Information"
        intro="MindCheck Tools does not reproduce, administer, score, or interpret the Holmes-Rahe Social Readjustment Rating Scale. This page preserves the public URL as a research and rights explainer."
        what="An educational overview of the Holmes-Rahe instrument, its research purpose, limitations, and public-web reproduction boundary."
        who="People seeking accurate context about the scale or a separately permitted way to reflect on recent distress."
        bottomLine="No public electronic reproduction permission is on file, so this page provides no inventory, weights, score, risk band, or individualized prediction. It is not diagnostic."
        boundaryHeading="Why the public inventory is not provided"
        boundaryParagraphs={[
          "The original publication is copyrighted and does not itself grant third parties permission to reproduce the instrument on a public consumer website.",
          "APA guidance also distinguishes research or teaching access from permission to post a test online. MindCheck Tools has not archived a rights-holder grant covering public electronic administration, scoring, or commercial context.",
          "The URL therefore remains publicly useful as an informational page while the protected inventory, event values, calculated result, and future-health claims are withheld.",
        ]}
        overviewHeading="What the research instrument was designed to study"
        overviewParagraphs={[
          "Holmes and Rahe developed the Social Readjustment Rating Scale to study whether accumulated life changes were associated with later illness across groups of people.",
          "An association observed in a research population is not a personal forecast. Health is influenced by many factors, and an inventory result cannot establish that stress caused or will cause an illness.",
        ]}
        alternatives={[
          {
            href: "/k6-distress-scale",
            name: "K6 Psychological Distress Self-Check",
            description: "A separately permitted screen for recent nonspecific distress. It does not measure life events or predict illness.",
          },
          {
            href: "/phq-4-anxiety-depression-screen",
            name: "PHQ-4 Depression and Anxiety Screen",
            description: "A brief, separately permitted symptom screener. It is not a life-change inventory and is not interchangeable with Holmes-Rahe.",
          },
        ]}
        sources={[
          {
            href: "https://pubmed.ncbi.nlm.nih.gov/6059863/",
            label: "PubMed: The Social Readjustment Rating Scale",
            detail: "Primary 1967 publication record by Holmes and Rahe.",
          },
          {
            href: "https://www.sciencedirect.com/science/article/pii/0022399967900104",
            label: "Elsevier: original article",
            detail: "Publisher record; access does not provide a public-web reproduction grant.",
          },
          {
            href: "https://blog.apapubs.org/2016/12/21/how-permissions-work-in-psyctests/",
            label: "APA PsycTests permissions guidance",
            detail: "Explains why permission for research or teaching does not automatically authorize online posting.",
          },
        ]}
        faq={FAQ_DATA}
        reviewer={<ToolReviewerBio lastReviewed="August 2, 2026" />}
      />
    </>
  );
}
