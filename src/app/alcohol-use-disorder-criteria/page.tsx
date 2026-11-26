import type { Metadata } from "next";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, SITE_URL, toolPageJsonLd } from "@/lib/metadata";
import { AUDCriteriaClient } from "./AUDCriteriaClient";

const TOOL_NAME = "Alcohol Use Disorder Criteria Self-Check";
const TOOL_PATH = "/alcohol-use-disorder-criteria";
const TOOL_URL = `${SITE_URL}${TOOL_PATH}`;
const TITLE = "Alcohol Use Disorder Criteria | 11-Criteria Self-Check";
const DESCRIPTION = "Count how many of the 11 plain-language statements applied to your drinking in the past 12 months. Educational only, with no diagnosis or sign-up. Answers are processed locally in your browser.";
const DATE = "2026-11-26";

export const metadata: Metadata = createMetadata({
  path: TOOL_PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "alcohol use disorder criteria",
    "dsm-5 alcohol use disorder criteria",
    "11 criteria of alcohol use disorder",
    "alcohol use disorder self-check",
    "how many criteria for alcohol use disorder",
    "mild moderate severe alcohol use disorder",
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: TOOL_URL, type: "website" },
});

const FAQ_DATA = [
  {
    question: "Is this the DSM-5 test?",
    answer: "No. This is an original MindCheck Tools self-check in plain language. The DSM-5-TR is a clinical manual that clinicians use when evaluating someone in an interview.",
  },
  {
    question: "What does my count mean?",
    answer: "Your count shows how many statements you answered Yes to. When a clinician confirms criteria in an interview, 0 to 1 is below the diagnostic threshold, 2 to 3 is mild, 4 to 5 is moderate, and 6 or more is severe. This self-check cannot confirm criteria or establish a diagnosis.",
  },
  {
    question: "Can this diagnose alcohol use disorder?",
    answer: "No. Only a clinician who interviews you can diagnose alcohol use disorder. They consider timing, context, and other conditions alongside the criteria.",
  },
  {
    question: "How is this different from the AUDIT?",
    answer: "The AUDIT screens for drinking patterns and their consequences on a scale from 0 to 40. This self-check counts Yes answers to 11 statements based on the criteria clinicians consider in a diagnostic interview.",
  },
  {
    question: "What should I do if I count 2 or more?",
    answer: "Consider taking the full AUDIT and talking with a qualified professional about your drinking. If you reported withdrawal symptoms and drink heavily, get medical guidance before stopping suddenly because alcohol withdrawal can be medically serious.",
  },
  {
    question: "Is this private?",
    answer: "Your answers and count are processed locally in your browser and are not intentionally sent to MindCheck Tools. You do not need to sign up.",
  },
];

const RELATED = [
  { href: "/signs-of-alcoholism", label: "The 11 Signs, Explained", description: "Read the companion guide in plain language." },
  { href: "/audit-alcohol-test", label: "Full AUDIT Test", description: "Take the 10-question WHO alcohol screen." },
  { href: "/what-is-the-audit-test", label: "What Is the AUDIT Test?", description: "Learn what the AUDIT measures and how it is scored." },
  { href: "/audit-vs-audit-c", label: "AUDIT vs. AUDIT-C", description: "Compare the full and brief alcohol screens." },
];

export default function AUDCriteriaPage() {
  const toolSchema = toolPageJsonLd({
    name: TOOL_NAME,
    description: DESCRIPTION,
    url: TOOL_URL,
    datePublished: DATE,
    dateModified: DATE,
  });
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: TOOL_NAME, url: TOOL_URL },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="Count how many of 11 plain-language statements about alcohol applied to you in the past 12 months."
          who="Adults 18 and older who want to reflect on their own drinking."
          bottomLine="This educational self-check uses MindCheck Tools' own words. It is neither the DSM-5 nor a diagnosis. A diagnosis requires a clinician's interview."
          lastUpdated={DATE}
        />
        <div className="mt-4">
          <AuthorByline publishedDate={DATE} modifiedDate={DATE} />
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-6 text-center">Last updated: November 26, 2026</p>
      </div>

      <AUDCriteriaClient faqData={FAQ_DATA} />

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RELATED.map(({ href, label, description }) => (
            <Link key={href} href={href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700">
              <p className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-1">{label}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
