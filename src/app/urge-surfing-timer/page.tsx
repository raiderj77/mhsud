import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { UrgeSurfingClient } from "./UrgeSurfingClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/urge-surfing-timer`;

export const metadata: Metadata = createMetadata({
  path: "/urge-surfing-timer",
  title: "Urge Surfing Timer for Cravings | Free, Private Guided Tool",
  description:
    "Use a free, private urge surfing timer to pause, notice craving sensations, and practice observing an urge without acting on it. Includes optional breathing prompts.",
  keywords: [
    "urge surfing", "urge surfing timer", "craving timer",
    "urge surfing technique", "craving mindfulness",
    "substance craving coping tool", "mindfulness for cravings",
  ],
  openGraph: {
    title: "Urge Surfing Timer for Cravings | Free, Private Guided Tool",
    description: "Pause and observe a craving with a private guided timer, body-awareness prompts, and optional paced breathing.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is urge surfing?",
    answer: "Urge surfing is a coping exercise that treats an urge like a wave: notice where you feel it, describe the sensations, and observe how they change without automatically acting on the urge. The U.S. Department of Veterans Affairs and SAMHSA both publish urge-surfing exercises for substance-use treatment settings.",
  },
  {
    question: "How long does a craving last?",
    answer: "There is no single reliable duration for every person or craving. The timer offers several practice intervals, but it does not predict when an urge will peak or end. If the urge remains strong, use another part of your support or treatment plan rather than treating the timer as a guarantee.",
  },
  {
    question: "Does urge surfing make a craving disappear?",
    answer: "Not necessarily. The VA explains that the purpose is to experience a craving in a new way, not to force it to disappear. Some people notice an urge changing or fading during practice; others may need additional coping strategies or support.",
  },
  {
    question: "What should I do if the urge is still strong?",
    answer: "Pause the exercise and follow your treatment or relapse-prevention plan, change to a safer environment, or contact a trusted support person or qualified professional. If you may harm yourself or someone else, call emergency services. In the United States, call or text 988 for crisis support.",
  },
];

export default function UrgeSurfingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Urge Surfing Timer for Cravings",
              description: "A private guided timer for pausing, noticing craving sensations, and practicing the urge-surfing exercise without a fixed-duration or outcome guarantee.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: "2026-07-17",
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
              { name: "Urge Surfing Timer", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A private guided timer for pausing, noticing craving sensations, and observing how an urge changes without automatically acting on it."
          who="People who want to practice urge surfing as one coping skill within a broader recovery or support plan."
          bottomLine="Choose a manageable practice interval. The timer does not predict when a craving will end and is not a replacement for treatment, crisis support, or a relapse-prevention plan."
          lastUpdated="2026-07-17"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-07-17" />
      </div>

      <UrgeSurfingClient faqData={FAQ_DATA} />
    </>
  );
}
