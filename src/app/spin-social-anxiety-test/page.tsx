import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SpinClient } from "./SpinClient";

const TOOL_URL = `${SITE_URL}/spin-social-anxiety-test`;

export const metadata: Metadata = createMetadata({
  path: "/spin-social-anxiety-test",
  title: "SPIN Social Anxiety Test | Free Social Phobia Screen",
  description:
    "Free 17-item Social Phobia Inventory (SPIN) based on Connor et al. (2000). Check social anxiety symptoms privately in your browser.",
  keywords: [
    "SPIN", "Social Phobia Inventory", "SPIN social anxiety test",
    "social anxiety screening", "social phobia test",
    "SPIN questionnaire", "social anxiety disorder test",
    "SPIN score", "social anxiety self-check",
    "social phobia screening", "SPIN test online free",
    "social anxiety assessment",
  ],
  openGraph: {
    title: "SPIN Social Anxiety Test | Free Social Phobia Screen",
    description:
      "Free 17-item Social Phobia Inventory (SPIN) based on Connor et al. (2000). Check social anxiety symptoms privately in your browser.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the SPIN?",
    answer:
      "The Social Phobia Inventory (SPIN) is a 17-item self-report questionnaire developed by Connor, Davidson, Churchill, Sherwood, Foa, and Weisler (2000) at Duke University Medical Center. It was designed to measure the severity of social anxiety disorder across three symptom domains: fear of social situations, avoidance of social situations, and physiological symptoms (blushing, sweating, trembling, heart palpitations). It is one of the most widely used and well-validated measures of social anxiety in both clinical and research settings.",
  },
  {
    question: "How is the SPIN scored?",
    answer:
      "Each of the 17 items is rated on a 5-point scale from 0 (Not at all) to 4 (Extremely) based on how much the statement has bothered you during the past week. The total score ranges from 0 to 68. Higher scores indicate more severe social anxiety. The three subscale scores are: Fear (6 items, range 0-24), Avoidance (7 items, range 0-28), and Physiological (4 items, range 0-16). A total score of 19 or higher is the recommended clinical cutoff for social anxiety disorder.",
  },
  {
    question: "What do the severity levels mean?",
    answer:
      "SPIN total scores fall into five severity ranges: 0-20 is none to mild, 21-30 is moderate, 31-40 is severe, 41-50 is very severe, and 51-68 is extremely severe. A score of 19 or higher has been identified as the optimal cutoff for distinguishing people with social anxiety disorder from those without it, with good sensitivity (73%) and specificity (80%). These cutoffs are guidelines — only a qualified professional can make a clinical determination.",
  },
  {
    question: "What are the three subscales?",
    answer:
      "The SPIN measures three dimensions of social anxiety: (1) Fear — anxiety or fear triggered by social situations like being judged, criticized, or being the center of attention; (2) Avoidance — the tendency to avoid social situations, speaking up, or doing things where others might watch; (3) Physiological — physical symptoms like blushing, sweating, trembling, and heart palpitations in social situations. Looking at your subscale scores can help you understand which aspects of social anxiety are most prominent for you.",
  },
  {
    question: "How is the SPIN different from the GAD-7?",
    answer:
      "The GAD-7 measures generalized anxiety — persistent, excessive worry about many different things. The SPIN specifically measures social anxiety — fear, avoidance, and physical symptoms in social or performance situations. Someone can score high on one and low on the other. The GAD-7 is a broader anxiety screen, while the SPIN provides focused information about social anxiety specifically. If you score high on the SPIN, taking the GAD-7 as well can help clarify whether your anxiety extends beyond social situations.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function SpinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "SPIN Social Phobia Inventory",
              description:
                "A free online implementation of the Social Phobia Inventory (SPIN), a 17-item measure of social anxiety developed by Connor et al. (2000). Scores 0-68 with three subscales: Fear, Avoidance, and Physiological. Clinical cutoff of 19+ for social anxiety disorder.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString().split("T")[0],
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
              { name: "SPIN Social Anxiety Test", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the SPIN Social Anxiety Test?</h2>
        <h2>How Is the SPIN Scored?</h2>
        <h2>What Do My SPIN Results Mean?</h2>
      </section>
<SpinClient faqData={FAQ_DATA} />
    </>
  );
}
