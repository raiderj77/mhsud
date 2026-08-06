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

const PAGE_PATH = "/who-assist-substance-screening";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "WHO ASSIST Information and Public-Web Permission Boundary",
  description:
    "Educational information about WHO ASSIST, why MindCheck Tools does not administer it publicly, and non-equivalent alcohol-screening options.",
  keywords: [
    "WHO ASSIST information",
    "WHO ASSIST permission",
    "substance involvement screening information",
    "WHO ASSIST public use",
  ],
  openGraph: {
    title: "WHO ASSIST Information and Permission Boundary",
    description: "Official-source context without public questionnaire administration, scoring, or individualized intervention statements.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA: InformationFaq[] = [
  {
    question: "What is WHO ASSIST?",
    answer:
      "The World Health Organization developed ASSIST for trained use in health-care settings to identify substance-related concerns and support an appropriate clinical conversation or intervention.",
  },
  {
    question: "Can I complete WHO ASSIST on MindCheck Tools?",
    answer:
      "No. The official manual describes free use in primary-care and treatment settings, but MindCheck Tools has not obtained a WHO grant covering direct-to-consumer public-web administration, automated scoring, or commercial-site use.",
  },
  {
    question: "Why are the questions, scores, and intervention categories omitted?",
    answer:
      "Those materials are withheld until WHO grants the contemplated use. Automated respondent-facing interpretation also cannot replace a trained assessment of substance use, safety, withdrawal risk, medications, and other health factors.",
  },
  {
    question: "Are AUDIT or AUDIT-C equivalent to WHO ASSIST?",
    answer:
      "No. AUDIT and AUDIT-C address alcohol use only and have different scopes and scoring. They do not assess other substances and cannot reproduce an ASSIST result.",
  },
  {
    question: "Can this page diagnose a substance use disorder?",
    answer:
      "No. This page collects no substance-use information and provides no result. Diagnosis requires an evaluation by an appropriately qualified healthcare professional.",
  },
];

export default function WhoAssistInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "WHO ASSIST Information and Public-Web Permission Boundary",
              description: "Official-source educational and rights information without public questionnaire administration or scoring.",
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
              { name: "WHO ASSIST Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <RightsBoundaryInformationPage
        title="WHO ASSIST Information"
        intro="MindCheck Tools does not reproduce, administer, score, or interpret the WHO Alcohol, Smoking and Substance Involvement Screening Test. This page explains its clinical purpose and the current public-web permission boundary."
        what="An educational overview of WHO ASSIST, its intended health-care context, limitations, and public electronic-use permission boundary."
        who="People seeking official-source information about the instrument or a separately permitted alcohol-only screening option."
        bottomLine="WHO permission for direct-to-consumer public-web administration is not on file. This page provides no questionnaire, score, or intervention category and cannot diagnose a substance use disorder."
        boundaryHeading="Why the public questionnaire is not provided"
        boundaryParagraphs={[
          "WHO's official manual permits specified use in primary-care and treatment settings. That limited context does not clearly grant a commercial public website the right to reproduce the instrument and deliver automated results directly to consumers.",
          "MindCheck Tools has not archived written WHO permission covering public electronic administration, scoring, respondent-facing interpretation, traffic, geography, modifications, or the site's commercial context.",
          "The established URL therefore remains an ad-free informational resource while questionnaire content, substance-specific scoring, risk categories, and individualized intervention statements are withheld.",
        ]}
        overviewHeading="What WHO ASSIST was designed to support"
        overviewParagraphs={[
          "WHO developed ASSIST to help trained health-care workers identify substance involvement and guide a clinical conversation or appropriate intervention across more than one substance category.",
          "A responsible evaluation also considers current intoxication or withdrawal, medications, physical and mental health, safety, pregnancy, age, and local treatment resources. An automated public result cannot supply that context.",
        ]}
        alternatives={[
          {
            href: "/audit-alcohol-test",
            name: "AUDIT Alcohol Use Screen",
            description: "A separately permitted, noncommercial alcohol-only screen. It does not assess other substances and is not equivalent to WHO ASSIST.",
          },
          {
            href: "/audit-c-alcohol-screen",
            name: "AUDIT-C Quick Alcohol Screen",
            description: "A brief alcohol-consumption screen with a narrower purpose. It cannot replace the multi-substance ASSIST instrument.",
          },
        ]}
        sources={[
          {
            href: "https://www.who.int/publications/i/item/978924159938-2",
            label: "WHO: ASSIST manual",
            detail: "Official manual describing the instrument's health-care setting and stated reproduction context.",
          },
          {
            href: "https://www.who.int/about/policies/publishing/copyright",
            label: "WHO copyright and licensing policy",
            detail: "Official route for reuse requests beyond the permission stated in a WHO publication.",
          },
          {
            href: "https://www.samhsa.gov/find-support",
            label: "SAMHSA Find Support",
            detail: "U.S. treatment and support information; it does not provide or replace an ASSIST result.",
          },
        ]}
        faq={FAQ_DATA}
        reviewer={<ToolReviewerBio lastReviewed="August 2, 2026" />}
      />
    </>
  );
}
