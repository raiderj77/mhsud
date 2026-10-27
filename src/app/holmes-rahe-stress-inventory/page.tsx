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
  {
    question: "Is life change the same thing as feeling distressed?",
    answer: "No. Life change describes adjustment demands, while distress describes an experience that someone reports. A person may need to reorganize routines without feeling overwhelmed, or may feel distressed by ongoing circumstances that a checklist does not describe well. Neither topic can stand in for the other. A qualified professional can consider both experiences and circumstances without treating them as equivalent measurements.",
  },
  {
    question: "What context is useful beyond a list of changes?",
    answer: "Useful context can include which demands are still active, what daily tasks have become harder, and whether practical or social support is available. It can also include what the person finds manageable and what help they would welcome. These are open conversation topics, not substitute questionnaire items or a way to estimate an inventory result. They support a fuller account without assigning weights, calculating a total, or forecasting illness.",
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
          "Life-event research asks a different question from a conversation about how someone feels today. Its focus is on changes that call for adjustment across a period of life. The general idea of life change units was to describe readjustment demands in a common research framework, rather than assuming that only changes a person dislikes require adaptation. This page discusses that idea without reproducing event descriptions, numerical values, or a calculation method. A common framework can help organize a research question, but it cannot make different people's circumstances equivalent or establish what a particular change means for one person.",
          "Appraisal and context matter when thinking about life changes. Appraisal means how someone understands an experience: whether it feels manageable, uncertain, welcome, threatening, or some mixture of these. Context includes the resources, relationships, and ongoing demands around the experience. Two people can describe a similar change while facing very different practical consequences. Even for one person, the timing of a change may affect what support is available. These distinctions are useful when reading life-event research because a checklist description cannot include the full meaning of an experience. They also explain why a conversation should leave room for the person's own account rather than treating a category as a complete story.",
          "Checklist totals compress information. They can leave out how long a difficulty has continued, whether several demands overlap, and whether circumstances have settled or remain uncertain. Remembering past events also involves judgment about timing and significance. When considering a research finding, ask who participated, what period was examined, and how health outcomes were established. An observed relationship does not by itself explain a mechanism or show that changing a checklist total would change an outcome. For personal reflection, describing current demands and practical support needs is a separate activity from administering this instrument. It does not require reconstructing a protected inventory, and it is not a substitute for professional care.",
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
