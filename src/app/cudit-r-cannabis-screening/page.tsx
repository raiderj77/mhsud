import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";
import { CUDITRClient } from "./CUDITRClient";

const PATH = "/cudit-r-cannabis-screening";
const TOOL_URL = `${SITE_URL}${PATH}`;
const TITLE = "CUDIT-R Cannabis Screen | Free 8-Question Test";
const DESCRIPTION = "Take the free CUDIT-R cannabis screen. Scores of 8+ flag hazardous use and 12+ flag possible cannabis use disorder. Answers are processed locally in your browser. No sign-up.";

export const metadata: Metadata = createMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "cudit-r", "cudit-r test", "cudit-r score", "cannabis use disorder test",
    "cannabis screening test", "cannabis use test", "cudit", "marijuana screening",
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: TOOL_URL, type: "website" },
});

const FAQ_DATA = [
  { question: "What is the CUDIT-R test?", answer: "The Cannabis Use Disorders Identification Test–Revised (CUDIT-R) is an eight-question screening tool. It asks about cannabis use and related experiences, primarily over the past six months." },
  { question: "What is a positive CUDIT-R score?", answer: "A score of 8 or more meets the hazardous-use screening threshold. A score of 12 or more flags possible cannabis use disorder and suggests a professional assessment." },
  { question: "Can the CUDIT-R diagnose cannabis use disorder?", answer: "No. A score can flag concerns for follow-up, and a qualified clinician can assess whether diagnostic criteria are met." },
  { question: "Who should take the CUDIT-R?", answer: "This version is for adults 18 and older who used cannabis in the past six months. Adolescents should use an age-appropriate screening tool with a qualified professional." },
  { question: "How is the CUDIT-R different from the original CUDIT?", answer: "The 2010 revision reduced the original 10 items to eight. It rebalanced the questions across consumption, problems, dependence, and psychological features." },
  { question: "Is the CUDIT-R private?", answer: "Your screening answers and score are processed locally in your browser and are not intentionally sent to MindCheck Tools. The screening does not require an account." },
];

const RELATED = [
  { href: "/what-is-the-cudit-r-test", title: "CUDIT-R Guide", description: "Understand the scoring, cut points, and limitations." },
  { href: "/clinical-evidence#cudit-r", title: "CUDIT-R Clinical Evidence", description: "Review the validation study and evidence notes." },
  { href: "/audit-c-alcohol-screen", title: "AUDIT-C Alcohol Screen", description: "Check your alcohol use with a three-question screen." },
  { href: "/who-assist-substance-screening", title: "WHO ASSIST Information", description: "Learn about the WHO multi-substance screening instrument." },
];

export default function CUDITRPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "CUDIT-R Cannabis Screen", description: DESCRIPTION, url: TOOL_URL, datePublished: "2026-11-26", dateModified: "2026-11-26" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "CUDIT-R Cannabis Screen", url: TOOL_URL }])) }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The CUDIT-R is a validated eight-question screening tool for hazardous cannabis use and possible cannabis use disorder."
          who="Adults 18 and older who have used cannabis in the past six months."
          bottomLine="Scores of 8 or more flag hazardous use. Scores of 12 or more flag possible cannabis use disorder and suggest a professional assessment. The score cannot establish a diagnosis."
          lastUpdated="2026-11-26"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2026-11-26" modifiedDate="2026-11-26" />
      </div>
      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">Last updated: November 26, 2026</p>
      <CUDITRClient faqData={FAQ_DATA} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RELATED.map(({ href, title, description }) => (
            <Link key={href} href={href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{title}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
