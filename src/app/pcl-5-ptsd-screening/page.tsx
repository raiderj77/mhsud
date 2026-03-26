import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { PCL5Client } from "./PCL5Client";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/pcl-5-ptsd-screening`;

export const metadata: Metadata = createMetadata({
  path: "/pcl-5-ptsd-screening",
  title: "PCL-5 PTSD Screening Test | Free Self-Check",
  description:
    "Take the free PCL-5 PTSD screening test. 20 questions, 5 minutes. Used by the VA and clinicians worldwide. Private, instant results with cluster breakdown.",
  keywords: [
    "pcl-5", "pcl 5", "ptsd screening test", "ptsd checklist",
    "pcl-5 test", "ptsd test", "ptsd self-assessment", "pcl-5 questionnaire",
    "ptsd screening", "pcl-5 score", "ptsd checklist dsm-5",
    "free ptsd test", "ptsd screening online", "post traumatic stress test",
    "pcl-5 online free",
  ],
  openGraph: {
    title: "PCL-5 PTSD Screening Test | Free Self-Check",
    description: "Take the free PCL-5 PTSD screening test. 20 questions, 5 minutes. Used by the VA and clinicians worldwide. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the PCL-5?", answer: "The PCL-5 (PTSD Checklist for DSM-5) is a 20-item self-report measure developed by the National Center for PTSD at the U.S. Department of Veterans Affairs. It assesses the 20 DSM-5 symptoms of PTSD across four clusters: intrusion, avoidance, negative alterations in cognitions and mood, and alterations in arousal and reactivity. It is widely used by clinicians, researchers, and the VA system worldwide." },
  { question: "How is the PCL-5 scored?", answer: "Each of the 20 items is rated on a 0\u20134 scale (Not at all, A little bit, Moderately, Quite a bit, Extremely). The total score ranges from 0 to 80. A score of 33 or higher is the commonly used cutoff suggesting probable PTSD warranting further professional evaluation. The tool also provides scores for each of the four DSM-5 symptom clusters." },
  { question: "What does a PCL-5 score of 33 or higher mean?", answer: "A total score of 33 or higher on the PCL-5 is the research-supported cutoff that suggests a probable PTSD presentation. However, this is a screening tool, not a clinical assessment. A score above 33 means professional evaluation is strongly recommended \u2014 it does not confirm or rule out PTSD. Only a qualified mental health professional can properly evaluate trauma-related symptoms through a comprehensive clinical interview." },
  { question: "Is PTSD the same as a normal stress response?", answer: "No. It is normal to experience distress after a traumatic event, and most people recover naturally over weeks to months. PTSD is characterized by symptoms that persist beyond the initial response period (typically more than one month), are severe enough to interfere with daily functioning, and include specific patterns of re-experiencing, avoidance, negative mood changes, and heightened reactivity. The PCL-5 helps identify when these symptoms may have reached a level that warrants professional attention." },
  { question: "Where can I get help for PTSD?", answer: "If your PCL-5 results suggest elevated PTSD symptoms, consider reaching out to a mental health professional who specializes in trauma. Veterans can contact the Veterans Crisis Line at 1-800-273-8255 (Press 1) or the VA for specialized PTSD services. Anyone can call the SAMHSA National Helpline at 1-800-662-4357 for free referrals, or contact the 988 Suicide and Crisis Lifeline by calling or texting 988." },
  { question: "What is the difference between the PCL-5 and the older PCL-C?", answer: "The PCL-C (PTSD Checklist \u2014 Civilian Version) was based on the DSM-IV criteria and had 17 items. The PCL-5 is the updated version aligned with DSM-5 criteria, which expanded to 20 items and reorganized PTSD symptoms into four clusters (previously three). The PCL-5 is now the standard version recommended for clinical and research use." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
];

export default function PCL5Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "PCL-5 PTSD Screening Test",
              description: "A free online implementation of the PCL-5 (PTSD Checklist for DSM-5), a validated 20-item PTSD screening measure developed by the National Center for PTSD.",
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
              { name: "PCL-5 PTSD Screening Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "PCL-5 PTSD Screening Test",
              description: "A free online implementation of the PCL-5 (PTSD Checklist for DSM-5), a validated 20-item PTSD screening measure developed by the National Center for PTSD.",
              url: TOOL_URL,
              lastReviewed: "2026-03-07",
            })
          ),
        }}
      />

      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The PCL-5, a comprehensive 20-item PTSD screening that maps directly to DSM-5 diagnostic criteria."
          who="Anyone who has experienced trauma and wants a detailed assessment of PTSD symptom severity across all four symptom clusters."
          bottomLine="The PCL-5 is the gold standard PTSD self-report — scores of 31-33 or above suggest probable PTSD. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>

      <section className="sr-only">
        <h2>What Is the PCL-5 PTSD Screening?</h2>
        <h2>How Is the PCL-5 Scored?</h2>
        <h2>What Do My PCL-5 Results Mean?</h2>
      </section>
      <PCL5Client faqData={FAQ_DATA} />

      {/* Related Tools */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/pcl-5-score-interpretation" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 Score Guide</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand what your PCL-5 PTSD score means</p>
          </Link>
          <Link href="/pc-ptsd-5-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PC-PTSD-5 Brief Screen</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick 5-question PTSD screening</p>
          </Link>
          <Link href="/ptsd-test-veterans" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PTSD Test for Veterans</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Veteran-focused PTSD screening with VA resources</p>
          </Link>
        </div>
      </div>
    </>
  );
}
