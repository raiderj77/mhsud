import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";
import { AttachmentStyleClient } from "./AttachmentStyleClient";

const TOOL_URL = `${SITE_URL}/attachment-style-quiz`;

export const metadata: Metadata = createMetadata({
  path: "/attachment-style-quiz",
  title: "Attachment Style Quiz — ECR-R Test",
  description:
    "Discover your attachment style with the free ECR-R quiz. Secure, anxious, avoidant, or disorganized — understand how you connect in relationships.",
  keywords: [
    "attachment style quiz", "ecr-r", "attachment style test",
    "attachment test", "relationship attachment style",
    "experiences in close relationships", "ecr-r questionnaire",
    "anxious attachment test", "avoidant attachment test",
    "secure attachment quiz", "attachment style assessment",
    "free attachment quiz", "relationship style test",
    "fearful avoidant test", "dismissive avoidant quiz",
  ],
  openGraph: {
    title: "Attachment Style Quiz — ECR-R Test",
    description: "Take the free ECR-R attachment style quiz. 36 questions, 5 minutes. Discover your attachment style. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the ECR-R attachment style quiz?", answer: "The ECR-R (Experiences in Close Relationships - Revised) is a 36-item questionnaire developed by Fraley, Waller, and Brennan (2000). It measures two dimensions of adult romantic attachment: attachment-related anxiety and attachment-related avoidance. These two dimensions combine to identify four attachment styles: Secure, Preoccupied, Dismissing-Avoidant, and Fearful-Avoidant." },
  { question: "How is the ECR-R scored?", answer: "Each item is rated on a 7-point scale from Strongly Disagree to Strongly Agree. Some items are reverse-scored. The Anxiety subscale is the mean of items 1 through 18, and the Avoidance subscale is the mean of items 19 through 36. Higher scores indicate greater anxiety or avoidance in close relationships." },
  { question: "What are the four attachment styles?", answer: "Secure (low anxiety, low avoidance): comfortable with intimacy and independence. Preoccupied (high anxiety, low avoidance): desires closeness but worries about rejection. Dismissing-Avoidant (low anxiety, high avoidance): values independence and tends to suppress attachment needs. Fearful-Avoidant (high anxiety, high avoidance): desires closeness but fears rejection and finds it difficult to trust." },
  { question: "Can my attachment style change over time?", answer: "Yes. Research shows that attachment styles can shift over time through new relationship experiences, personal growth, and therapy. Attachment patterns are tendencies, not fixed traits. Many people develop more secure attachment through supportive relationships and self-awareness." },
  { question: "Is this quiz a clinical assessment?", answer: "No. The ECR-R is a self-report research measure widely used in attachment studies. While it has strong psychometric properties, it is a screening and self-reflection tool, not a clinical assessment. A licensed therapist can provide a more comprehensive evaluation of your attachment patterns." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
];

export default function AttachmentStylePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "ECR-R Attachment Style Quiz",
              description: "A free online implementation of the Experiences in Close Relationships - Revised (ECR-R), a validated 36-item attachment style questionnaire by Fraley, Waller, and Brennan (2000).",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-04-14",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ_DATA)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Attachment Style Quiz", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "ECR-R Attachment Style Quiz",
              description: "A free online implementation of the Experiences in Close Relationships - Revised (ECR-R), a validated 36-item attachment style questionnaire by Fraley, Waller, and Brennan (2000).",
              url: TOOL_URL,
              lastReviewed: "2026-03-08",
            })
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="An attachment style assessment that identifies your primary attachment pattern: secure, anxious, avoidant, or fearful-avoidant."
          who="Anyone curious about how their attachment style may influence their relationships and emotional responses."
          bottomLine="Attachment styles can shift with awareness and effort — understanding yours is the first step. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>
      <p className="text-sm text-gray-500 mt-2 mb-0 text-center">Last reviewed: April 2026</p>

      <section className="sr-only">
        <h2>What Is the ECR-R Attachment Style Quiz?</h2>
        <h2>How Is the ECR-R Scored?</h2>
        <h2>What Do My Attachment Style Results Mean?</h2>
      </section>
            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
<AttachmentStyleClient faqData={FAQ_DATA} />
    </>
  );
}
