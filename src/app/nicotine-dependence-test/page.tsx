import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";
import { FTNDClient } from "./FTNDClient";

const TOOL_URL = `${SITE_URL}/nicotine-dependence-test`;
const TITLE = "FTND Nicotine Dependence Test | Free 6-Question Test";
const DESCRIPTION = "Take the Fagerström Test for Nicotine Dependence for adults who smoke cigarettes. Six questions give a score of 0 to 10 across five dependence levels. Private, with no sign-up.";

export const metadata: Metadata = createMetadata({
  path: "/nicotine-dependence-test",
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ftnd", "fagerstrom test", "nicotine dependence test",
    "fagerstrom test for nicotine dependence", "nicotine addiction test",
    "how addicted am I to nicotine", "ftnd score",
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: TOOL_URL, type: "website" },
});

const FAQ_DATA = [
  { question: "What is the FTND?", answer: "The Fagerström Test for Nicotine Dependence is a six-question screener for adults who smoke cigarettes. It grades physical dependence on cigarettes on a scale from 0 to 10." },
  { question: "What is a high FTND score?", answer: "A score of 6 or 7 out of 10 falls in the high dependence range. Scores of 8 to 10 fall in the very high range." },
  { question: "What is \"time to first cigarette\" and why does it matter?", answer: "It is the time between waking up and smoking your first cigarette. It is the strongest single sign of dependence measured by the FTND, with shorter times contributing more points." },
  { question: "Does the FTND work for vaping or other nicotine products?", answer: "The FTND was developed and validated for cigarettes. In 2012, Fagerström renamed it the Test for Cigarette Dependence to make that focus explicit." },
  { question: "Can the FTND diagnose tobacco use disorder?", answer: "The FTND grades physical dependence on cigarettes. A diagnosis of tobacco use disorder requires a broader clinical assessment." },
  { question: "Is the FTND private?", answer: "Your answers and score are processed locally in your browser. You can use the test without signing up." },
];

export default function FTNDPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({
        name: "FTND Nicotine Dependence Test",
        description: DESCRIPTION,
        url: TOOL_URL,
        datePublished: "2026-11-26",
        dateModified: "2026-11-26",
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
        { name: "Home", url: SITE_URL },
        { name: "FTND Nicotine Dependence Test", url: TOOL_URL },
      ])) }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The Fagerström Test for Nicotine Dependence uses six questions to grade physical dependence on cigarettes."
          who="Adults who smoke cigarettes."
          bottomLine="Scores range from 0 to 10 across five dependence levels. The score cannot diagnose tobacco use disorder, and a low score does not mean smoking is safe."
          lastUpdated="2026-11-26"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2026-11-26" modifiedDate="2026-11-26" />
      </div>
      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">Last updated: November 26, 2026</p>
      <FTNDClient faqData={FAQ_DATA} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/what-is-the-ftnd-test", title: "FTND Guide", description: "How the score works and what each range means" },
            { href: "/clinical-evidence#ftnd", title: "FTND Clinical Evidence", description: "Source study, scoring, and limitations" },
            { href: "/cudit-r-cannabis-screening", title: "CUDIT-R Cannabis Screen", description: "Screen for cannabis use concerns" },
            { href: "/audit-c-alcohol-screen", title: "AUDIT-C Alcohol Screen", description: "Brief alcohol screening" },
          ].map(({ href, title, description }) => (
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
