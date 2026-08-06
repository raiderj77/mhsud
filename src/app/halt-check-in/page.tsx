import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { HALTClient } from "./HALTClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/halt-check-in`;

export const metadata: Metadata = createMetadata({
  path: "/halt-check-in",
  title: "HALT Recovery Check-In: Hungry, Angry, Lonely, Tired",
  description:
    "Use a free 60-second HALT recovery check-in to notice hunger, anger, loneliness, and tiredness, then review practical next steps. Educational only.",
  keywords: [
    "HALT recovery tool", "HALT check in",
    "recovery reflection tool", "recovery self check",
    "HALT acronym recovery", "hungry angry lonely tired",
    "daily recovery check in", "sobriety check in tool",
    "HALT needs check in", "HALT self reflection",
    "recovery support check in", "addiction recovery tools",
  ],
  openGraph: {
    title: "HALT Recovery Check-In: Hungry, Angry, Lonely, Tired",
    description: "Rate hunger, anger, loneliness, and tiredness, then review practical next steps. A 60-second educational recovery reflection, not a relapse predictor.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What does HALT stand for in recovery?", answer: "HALT stands for Hungry, Angry, Lonely, Tired. SAMHSA presents it as a memory aid for noticing important needs and choosing an appropriate response. It is not a validated relapse-risk scale, and this check-in cannot predict or prevent relapse." },
  { question: "How do I use the HALT check-in?", answer: "Rate hungry, angry, lonely, and tired from 1 to 5 as a moment-in-time reflection. The page shows the four ratings separately and offers optional ideas for needs you marked as difficult. The ratings and suggestions are educational, not a clinical score or treatment recommendation." },
  { question: "Does research show that HALT predicts relapse?", answer: "No validated HALT cutoff or composite relapse-risk score was identified. A 2026 peer-reviewed mini-review describes direct scientific research on HALT as scant and calls for more evaluation. SAMHSA includes HALT as a counseling memory aid, which is narrower than claiming it predicts an individual's relapse risk." },
  { question: "How often should I do a HALT check-in?", answer: "There is no validated schedule. Some people use the mnemonic when stressed or experiencing a craving; others may not find it useful. Choose a frequency that supports reflection without replacing professional care or a recovery plan." },
  { question: "What should I do if I rate multiple needs as difficult?", answer: "The ratings do not indicate a risk category. You can consider one practical need and contact a trusted support person or qualified professional. If you are experiencing cravings, thoughts of using, or a crisis, use professional or crisis support rather than relying on this check-in." },
  { question: "Is the HALT check-in a clinical assessment?", answer: "No. The HALT check-in is a self-reflection tool, not a validated clinical instrument. It is based on the HALT concept widely used in recovery programs, but this specific tool was created for educational and self-awareness purposes. It is not a substitute for professional assessment, and it cannot predict or prevent relapse on its own. If you are experiencing cravings, thoughts of using, or are in crisis, please contact SAMHSA at 1-800-662-4357 or call/text 988 for immediate support. The HALT check-in is most useful as one part of a broader recovery practice that includes professional support." },
];

export default function HALTPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "HALT Check-In Tool",
              description: "An educational reflection based on the HALT acronym (Hungry, Angry, Lonely, Tired). Rate each need separately and review optional ideas; not a validated risk score.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: "2026-08-05",
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
              { name: "HALT Check-In", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 5, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="An educational check-in for four states used in recovery reflection: hungry, angry, lonely, and tired."
          who="Adults in recovery who want to pause and notice basic physical or emotional needs before choosing a next step."
          bottomLine="HALT can support reflection, but it cannot predict or prevent relapse and is not a clinical assessment, treatment plan, or emergency service."
          lastUpdated="2026-08-05"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-08-05" />
      </div>

<HALTClient faqData={FAQ_DATA} />
    </>
  );
}
