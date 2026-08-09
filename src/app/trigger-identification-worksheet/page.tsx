import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { TriggerWorksheetClient } from "./TriggerWorksheetClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/trigger-identification-worksheet`;

export const metadata: Metadata = createMetadata({
  path: "/trigger-identification-worksheet",
  title: "Addiction Trigger Identification Worksheet | Free Browser Tool",
  description:
    "Use a browser-local worksheet to organize substance-use cues across six practical categories and review general response ideas. No signup; not a relapse-risk assessment.",
  keywords: [
    "addiction triggers worksheet", "identify my triggers",
    "relapse triggers list", "trigger identification worksheet",
    "substance use triggers", "recovery trigger worksheet",
    "people places things triggers", "coping plan for triggers",
  ],
  openGraph: {
    title: "Addiction Trigger Identification Worksheet",
    description: "Organize substance-use cues and review general response-planning ideas in a browser-local worksheet. Not a relapse-risk assessment.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What are substance-use triggers?",
    answer: "A trigger or cue is something associated with an urge to use a substance. NIAAA describes external triggers such as people, places, things, and times of day, and internal triggers such as thoughts, emotions, and physical sensations. A trigger does not predict what you will do, and this worksheet does not estimate relapse risk.",
  },
  {
    question: "Why does this worksheet use six categories?",
    answer: "People, places, emotions, situations, times, and sensory cues are practical organizing labels used by this MindCheck Tools worksheet. They are not a validated clinical scale or an exhaustive scientific classification. A cue can fit more than one category, and you may add a de-identified cue that is not listed.",
  },
  {
    question: "How should I use the response ideas?",
    answer: "Treat them as general prompts, not personalized treatment advice. NIAAA suggests recognizing cues, planning ahead, talking with someone you trust, choosing an alternative activity, and leaving a tempting situation when appropriate. A healthcare professional or substance-use counselor can help you decide what is safe and realistic for your circumstances.",
  },
  {
    question: "Can triggers change over time?",
    answer: "Your experiences and circumstances can change, so a list created today may not describe a later situation. There is no required schedule for repeating this worksheet. Review it when it is useful to you or with a qualified professional as part of a broader support or treatment plan.",
  },
  {
    question: "What if thinking about a trigger brings up a strong urge?",
    answer: "Pause the worksheet and use a support option that is appropriate for you. NIAAA cautions that recalling an urge experience can itself bring up an urge and recommends completing this kind of activity with a therapist, doctor, or trusted person if you are unsure about doing it alone. Immediate help links are provided below.",
  },
  {
    question: "Should I share or print my worksheet?",
    answer: "Only if you choose to, and only with someone you trust. The share button sends the tool name and link, not your entries. Printing or saving a copy can expose sensitive information to people with access to the printer, file, device, backups, or sync services, so use fictional or de-identified wording when possible.",
  },
];

export default function TriggerWorksheetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Addiction Trigger Identification Worksheet",
              description: "A browser-local educational worksheet for organizing substance-use cues across six practical categories and reviewing general response-planning ideas. It is not a clinical assessment or relapse-risk score.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: "2026-08-09",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Trigger Identification Worksheet", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 text-center">
          Addiction Trigger Identification Worksheet
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          Organize substance-use cues across six practical categories, then review general response-planning ideas. This educational worksheet is not a diagnostic test, treatment plan, or relapse-risk score.
        </p>
        <AnswerBlock
          what="A browser-local educational worksheet for organizing substance-use cues and reviewing general response-planning ideas."
          who="Adults who want a structured reflection aid for themselves or to discuss with a qualified professional."
          bottomLine="The item and category counts are organizational only. They do not measure severity, predict relapse, or replace professional care."
          lastUpdated="2026-08-09"
        />
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-08-09" />
      </div>

      <TriggerWorksheetClient faqData={FAQ_DATA} />
    </>
  );
}
