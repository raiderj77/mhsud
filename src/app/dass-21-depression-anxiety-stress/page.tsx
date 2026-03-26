import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { DASS21Client } from "./DASS21Client";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/dass-21-depression-anxiety-stress`;

export const metadata: Metadata = createMetadata({
  path: "/dass-21-depression-anxiety-stress",
  title: "DASS-21 Depression Anxiety Stress Test",
  description:
    "Take the free DASS-21 screening. 21 questions, 4 minutes. Screens depression, anxiety, and stress in one test. Private, instant results.",
  keywords: [
    "dass-21", "dass 21 test", "depression anxiety stress test",
    "dass-21 screening", "dass test online", "depression anxiety stress scales",
    "dass-21 free", "dass-21 scoring", "stress test online",
    "am i depressed or stressed", "anxiety and depression test",
    "dass-21 questionnaire", "dass screening tool", "mental health screening",
    "dass-21 self-assessment",
  ],
  openGraph: {
    title: "DASS-21 Depression Anxiety Stress Test",
    description: "Take the free DASS-21 screening. 21 questions, 4 minutes. Screens depression, anxiety, and stress in one test.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What does the DASS-21 measure?", answer: "The DASS-21 (Depression Anxiety Stress Scales) simultaneously measures three related but distinct emotional states: depression (low mood, hopelessness, loss of interest), anxiety (physical arousal, panic, fear), and stress (tension, irritability, difficulty relaxing). Each is scored on a separate subscale with its own severity cutoffs. This makes the DASS-21 especially useful because many people experience overlapping symptoms and benefit from understanding which dimensions are most elevated." },
  { question: "What is the difference between depression, anxiety, and stress?", answer: "While these conditions often co-occur and share some symptoms, they have distinct features. Depression is characterized by persistent low mood, loss of pleasure, hopelessness, and feelings of worthlessness. Anxiety involves excessive worry, physical symptoms of arousal (rapid heartbeat, breathing difficulty, trembling), and fear-based avoidance. Stress involves tension, irritability, difficulty relaxing, and feeling overwhelmed by demands. The DASS-21 helps differentiate these by measuring each dimension separately, which can guide more targeted conversations with healthcare providers." },
  { question: "Why screen for all three at once?", answer: "Depression, anxiety, and stress frequently co-occur. Research shows that approximately 60% of people with depression also experience significant anxiety, and chronic stress is a risk factor for both conditions. Screening for all three simultaneously provides a more complete picture of emotional well-being and can help identify patterns that single-condition screens might miss. For example, someone might score low on depression but high on stress, suggesting a different conversation with their provider than someone who scores high on both." },
  { question: "How is the DASS-21 scored?", answer: "The DASS-21 is the short form of the original 42-item DASS. Each of the 21 items is rated 0-3. The 7 items for each subscale are summed, then multiplied by 2 to match the full DASS-42 scale. This gives final scores of 0-42 for each subscale. Each subscale has its own severity cutoffs: for example, a depression score of 14-20 is moderate, while an anxiety score of 10-14 is moderate — the thresholds differ because the three conditions have different distributions in the population." },
  { question: "Is the DASS-21 accurate?", answer: "The DASS-21 has been extensively validated across clinical and non-clinical populations worldwide (Lovibond & Lovibond, 1995; Antony et al., 1998). It demonstrates strong internal consistency, good test-retest reliability, and meaningful differentiation between its three subscales. It is widely used in both research and clinical settings. However, like all screening tools, it can produce false positives and false negatives, which is why professional evaluation is always recommended when scores are elevated." },
  { question: "How is the DASS-21 different from the PHQ-9 or GAD-7?", answer: "The PHQ-9 screens specifically for depression and the GAD-7 screens specifically for generalized anxiety — each providing a detailed assessment of one condition. The DASS-21 screens for depression, anxiety, AND stress simultaneously, providing a broader snapshot of emotional well-being. The DASS-21 anxiety subscale also captures more physical anxiety symptoms (panic, trembling) compared to the GAD-7's focus on worry. The tools complement each other well: the DASS-21 provides a broad overview, while the PHQ-9 and GAD-7 provide deeper assessment of specific conditions." },
  { question: "What should I do with my DASS-21 results?", answer: "If any of your three subscale scores fall in the moderate, severe, or extremely severe range, speaking with a healthcare provider or mental health professional is recommended. Your results can be a useful starting point for that conversation — the subscale breakdown helps identify which dimensions are most elevated. The SAMHSA National Helpline (1-800-662-4357) provides free, confidential referrals 24/7. If you are in crisis, call or text 988 to reach the Suicide and Crisis Lifeline." },
];

export default function DASS21Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "DASS-21 Depression Anxiety Stress Screening Test",
              description: "A free online implementation of the DASS-21 (Depression Anxiety Stress Scales), a validated 21-item screening tool that simultaneously measures depression, anxiety, and stress.",
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
              { name: "DASS-21 Depression Anxiety Stress Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "DASS-21 Depression Anxiety Stress Screening Test",
              description: "A free online implementation of the DASS-21 (Depression Anxiety Stress Scales), a validated 21-item screening tool that simultaneously measures depression, anxiety, and stress.",
              url: TOOL_URL,
              lastReviewed: "2026-03-07",
            })
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The DASS-21, a 21-item screening that simultaneously measures depression, anxiety, and stress severity on three separate scales."
          who="Anyone who wants to assess depression, anxiety, and stress levels together using a single validated instrument."
          bottomLine="The DASS-21 provides three separate scores — you may score differently on each subscale. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>


      <section className="sr-only">
        <h2>What Is the DASS-21 Screening?</h2>
        <h2>How Is the DASS-21 Scored?</h2>
        <h2>What Do My DASS-21 Results Mean?</h2>
      </section>
            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
<DASS21Client faqData={FAQ_DATA} />

      {/* Related Tools */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/dass-21-score-interpretation" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Score Guide</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand what your DASS-21 scores mean</p>
          </Link>
          <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Focused depression screening tool</p>
          </Link>
          <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Test</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Focused anxiety screening tool</p>
          </Link>
        </div>
      </div>
    </>
  );
}
