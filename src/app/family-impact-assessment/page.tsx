import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { FamilyImpactClient } from "./FamilyImpactClient";

const TOOL_URL = `${SITE_URL}/family-impact-assessment`;

export const metadata: Metadata = createMetadata({
  path: "/family-impact-assessment",
  title: "Family Impact Assessment | Is Addiction Affecting Your Family?",
  description:
    "Free, private assessment for families concerned about a loved one's substance use. See how addiction affects finances, relationships, children, and your wellbeing.",
  keywords: [
    "is my family member an addict quiz",
    "family impact of addiction",
    "concerned about someone's drinking",
    "how addiction affects families",
    "family member substance abuse quiz",
    "am I enabling an addict",
    "addiction family assessment",
    "loved one addiction quiz",
    "family impact of alcoholism",
    "addiction effects on family",
    "enabling behavior quiz",
    "al-anon quiz",
  ],
  openGraph: {
    title: "Family Impact Assessment | Is Addiction Affecting Your Family?",
    description:
      "Free, private assessment for families concerned about a loved one's substance use. See how addiction affects finances, relationships, children, and your wellbeing.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Who is this assessment for?",
    answer:
      "This assessment is for anyone who is concerned about a family member's, partner's, or close friend's substance use — including alcohol, drugs, or prescription medications. It does not evaluate your loved one. Instead, it helps you reflect on how their substance use is affecting your life across seven key areas: behavior changes you have noticed, financial impact, relationship impact, impact on children or dependents, emotional toll, safety concerns, and enabling behaviors. The goal is to give you clarity and point you toward appropriate support for yourself.",
  },
  {
    question: "Does a high score mean my loved one is an addict?",
    answer:
      "No. This assessment does not screen, evaluate, or label your loved one. It measures the impact on you and your family. A high score means that substance use — regardless of whether your loved one meets clinical criteria for a substance use disorder — is significantly affecting your quality of life, your relationships, and your wellbeing. What matters is that you are experiencing real harm, and you deserve support. Only a qualified professional can assess your loved one's substance use.",
  },
  {
    question: "What are enabling behaviors, and why does this assessment include them?",
    answer:
      "Enabling behaviors are things family members do — often out of love, fear, or habit — that unintentionally make it easier for a loved one to continue using substances. Examples include making excuses for their behavior, covering their financial obligations, or avoiding the topic to keep the peace. This assessment includes enabling questions not to blame you, but to build your awareness. Recognizing enabling patterns is the first step toward setting healthy boundaries, which research consistently shows helps both the family member and the person with substance use issues.",
  },
  {
    question: "What should I do if I have safety concerns?",
    answer:
      "If you or anyone in your household is in immediate danger, call 911. If the danger is not immediate but you have ongoing safety concerns — such as verbal aggression, threatening behavior, or erratic actions while using — you should develop a safety plan. The National Domestic Violence Hotline (1-800-799-7233) can help you create one. You can also reach the 988 Suicide and Crisis Lifeline by calling or texting 988 if your loved one is threatening self-harm. Safety always comes first, and seeking help is not a betrayal — it is an act of care for everyone involved.",
  },
  {
    question: "How is this different from the CAGE-AID or AUDIT screening tools?",
    answer:
      "The CAGE-AID and AUDIT are validated screening tools designed for the person who may have a substance use issue to answer about their own use. This Family Impact Assessment is different: it is designed for family members and loved ones, and it evaluates the impact on you — not on the person using substances. Both types of tools have value, but they serve different purposes. If your loved one is open to taking a self-assessment, you might share our CAGE-AID, AUDIT, or DAST-10 tools with them.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool. Your privacy is especially important given the sensitive nature of these questions.",
  },
];

export default function FamilyImpactAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Family Impact Assessment",
              description:
                "A free, private educational assessment for family members and loved ones concerned about someone's substance use. 18 questions across 7 domains: behavior changes, financial impact, relationship impact, impact on children, emotional toll, safety concerns, and enabling behaviors. Provides validation, psychoeducation, next steps (Al-Anon, Nar-Anon, family therapy), and self-care recommendations.",
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
              { name: "Family Impact Assessment", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Family Impact Assessment?</h2>
        <h2>How Does the Family Impact Assessment Work?</h2>
        <h2>What Do My Family Impact Results Mean?</h2>
      </section>
<FamilyImpactClient faqData={FAQ_DATA} />
    </>
  );
}
