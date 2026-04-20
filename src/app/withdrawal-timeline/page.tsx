import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { WithdrawalTimelineClient } from "./WithdrawalTimelineClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/withdrawal-timeline`;

export const metadata: Metadata = createMetadata({
  path: "/withdrawal-timeline",
  title: "Withdrawal Timeline by Substance",
  description:
    "See what to expect during withdrawal by substance. Alcohol, opioids, stimulants, and more — day-by-day timeline reviewed by a CADC-II counselor.",
  keywords: [
    "withdrawal timeline", "alcohol withdrawal timeline",
    "opioid withdrawal timeline", "how long does withdrawal last",
    "drug withdrawal symptoms", "benzo withdrawal timeline",
    "nicotine withdrawal timeline", "cocaine withdrawal symptoms",
    "methamphetamine withdrawal", "cannabis withdrawal timeline",
    "withdrawal symptoms day by day", "detox timeline",
  ],
  openGraph: {
    title: "Withdrawal Timeline by Substance",
    description: "Detailed withdrawal timelines for 8 substances. See symptoms phase by phase with severity ratings and safety warnings.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "How long does withdrawal last?", answer: "Withdrawal duration varies significantly by substance. Nicotine and stimulant withdrawal typically peaks within 1-3 days and resolves within 1-2 weeks. Opioid withdrawal from short-acting drugs like heroin peaks at 36-72 hours and largely resolves within a week, while prescription opioids may take longer. Alcohol withdrawal can last 5-7 days for acute symptoms. Benzodiazepine withdrawal is the longest — acute symptoms can last 2-4 weeks, and some people experience protracted symptoms for months. All substances can cause post-acute withdrawal syndrome (PAWS), with intermittent symptoms lasting weeks to months after acute withdrawal resolves." },
  { question: "Which withdrawal types are medically dangerous?", answer: "Alcohol and benzodiazepine withdrawal can be life-threatening and should never be attempted without medical supervision. Both can cause seizures, and alcohol withdrawal can progress to delirium tremens (DTs), which has a mortality rate of up to 5% without treatment. Opioid withdrawal is intensely uncomfortable but rarely life-threatening in otherwise healthy adults, though dehydration from vomiting and diarrhea requires monitoring. Stimulant, cannabis, and nicotine withdrawal are not physically dangerous but can cause significant psychological distress. If you are considering stopping any substance, consult a medical professional first." },
  { question: "What is medical detox and when is it needed?", answer: "Medical detox is a supervised process where healthcare professionals monitor and manage withdrawal symptoms, often using medications to reduce discomfort and prevent dangerous complications. Medical detox is strongly recommended — and often essential — for alcohol, benzodiazepines, and high-dose opioid withdrawal. It typically takes place in a hospital, inpatient facility, or specialized detox center. During medical detox, vital signs are monitored, medications are administered as needed, and complications like seizures can be treated immediately. SAMHSA can help you find a detox facility near you at 1-800-662-4357." },
  { question: "What is post-acute withdrawal syndrome (PAWS)?", answer: "Post-acute withdrawal syndrome (PAWS) refers to a set of symptoms that persist after acute withdrawal has resolved. PAWS can include mood swings, anxiety, depression, sleep disturbances, fatigue, difficulty concentrating, and intermittent cravings. Symptoms tend to come in waves — you may feel fine for days or weeks, then experience a flare-up. PAWS is most common with alcohol, opioids, and benzodiazepines, but can occur with any substance. It can last from a few weeks to over a year, depending on the substance, duration of use, and individual factors. Understanding PAWS helps people in early recovery recognize that these symptoms are normal and temporary." },
  { question: "What is Medication-Assisted Treatment (MAT)?", answer: "Medication-Assisted Treatment (MAT) combines FDA-approved medications with counseling and behavioral therapies to treat substance use disorders. For opioid use disorder, MAT medications include methadone, buprenorphine (Suboxone), and naltrexone (Vivitrol). For alcohol use disorder, options include naltrexone, acamprosate, and disulfiram. For nicotine, options include nicotine replacement therapy (patches, gum, lozenges), varenicline (Chantix), and bupropion (Wellbutrin). Research consistently shows that MAT reduces relapse rates, overdose deaths, and criminal activity while improving treatment retention. MAT is considered the gold standard for opioid use disorder by SAMHSA, NIDA, and the WHO." },
  { question: "Can I stop taking a substance cold turkey?", answer: "It depends on the substance. You should NEVER stop alcohol or benzodiazepines abruptly if you have been using heavily or for a prolonged period — doing so can cause seizures and death. These substances require a medical taper under professional supervision. Opioid withdrawal is generally not life-threatening, but it is extremely uncomfortable, and medical supervision with MAT greatly improves outcomes. Stimulant, cannabis, and nicotine withdrawal are generally safe to manage without medical detox, though professional support improves success rates. Regardless of the substance, consulting a healthcare professional before stopping is always the safest approach." },
];

export default function WithdrawalTimelinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Withdrawal Timeline Tool",
              description: "An informational tool showing detailed withdrawal timelines for alcohol, opioids, benzodiazepines, stimulants, methamphetamine, cannabis, and nicotine. Includes hour-by-hour and day-by-day symptom phases, severity ratings, safety warnings, and post-acute withdrawal information.",
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
              { name: "Withdrawal Timeline", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A timeline showing expected withdrawal symptoms and their duration for alcohol, opioids, benzodiazepines, and stimulants."
          who="Anyone considering stopping substance use who wants to understand what withdrawal may look like and how long it lasts."
          bottomLine="Some withdrawals can be medically dangerous — always consult a healthcare provider before stopping abruptly. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>


      <section className="sr-only">
        <h2>What Is the Withdrawal Timeline Tool?</h2>
        <h2>How Does the Withdrawal Timeline Work?</h2>
        <h2>What Do My Withdrawal Timeline Results Mean?</h2>
      </section>

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
<WithdrawalTimelineClient faqData={FAQ_DATA} />
    </>
  );
}
