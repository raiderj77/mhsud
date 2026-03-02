import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { GAD7Client } from "../gad-7-anxiety-test/GAD7Client";

const TOOL_URL = `${SITE_URL}/anxiety-test-for-women`;

export const metadata: Metadata = createMetadata({
  path: "/anxiety-test-for-women",
  title: "Anxiety Test for Women | Free GAD-7 Screening",
  description:
    "Free anxiety screening for women using the clinically validated GAD-7. Understand how hormones, life stages, and stress affect anxiety. Private, instant results.",
  keywords: [
    "anxiety test for women", "women anxiety screening", "female anxiety test",
    "anxiety quiz for women", "gad-7 for women", "womens mental health test",
    "postpartum anxiety test", "perimenopause anxiety", "anxiety during pregnancy",
    "hormonal anxiety test", "anxiety self-assessment women", "free anxiety test women",
    "women anxiety symptoms", "anxiety in women over 40", "female anxiety disorder test",
    "women mental health screening", "anxiety screening for females",
  ],
  openGraph: {
    title: "Anxiety Test for Women | Free GAD-7 Screening",
    description: "Free, private anxiety screening for women using the clinically validated GAD-7. Understand how hormones and life stages affect anxiety.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Why are women more likely to experience anxiety disorders?",
    answer: "Women are approximately twice as likely as men to be diagnosed with generalized anxiety disorder. Contributing factors include hormonal fluctuations (estrogen and progesterone affect brain chemistry), higher rates of trauma exposure, societal expectations, and the cumulative stress of managing multiple roles. Biology, psychology, and social factors all play a part.",
  },
  {
    question: "Can hormonal changes cause anxiety symptoms?",
    answer: "Yes. Hormonal shifts during the menstrual cycle, pregnancy, postpartum, and perimenopause can all influence anxiety levels. Estrogen and progesterone interact with neurotransmitters like serotonin and GABA that regulate mood and anxiety. This does not mean anxiety is 'just hormones' — it means hormones can be one contributing factor worth discussing with a healthcare provider.",
  },
  {
    question: "Is this test valid for postpartum anxiety?",
    answer: "The GAD-7 is a general anxiety screening tool and can detect elevated anxiety symptoms in the postpartum period. However, it is not specifically designed for postpartum anxiety. If you are experiencing anxiety after childbirth, please share your results with your OB-GYN or midwife for a more targeted evaluation.",
  },
  {
    question: "How does anxiety differ from normal stress?",
    answer: "Stress is typically a response to a specific situation and resolves when the stressor is removed. Anxiety involves persistent, excessive worry that may not be tied to a specific cause. When anxiety begins to interfere with daily life — sleep, relationships, work, or physical health — it may be time to speak with a healthcare professional.",
  },
  {
    question: "What should I do if my GAD-7 score is high?",
    answer: "A score of 10 or above suggests moderate to severe anxiety symptoms. Consider scheduling an appointment with your primary care doctor, a therapist, or a psychiatrist. Anxiety disorders are highly treatable with therapy, lifestyle changes, and sometimes medication. If you are in crisis, contact the 988 Suicide and Crisis Lifeline by calling or texting 988.",
  },
];

export default function AnxietyTestForWomenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Anxiety Test for Women — GAD-7 Screening",
              description: "A free, private anxiety screening tool for women using the clinically validated GAD-7 questionnaire. Includes information on hormonal and life-stage factors.",
              url: TOOL_URL,
              datePublished: "2026-03-01",
              dateModified: "2026-03-01",
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
              { name: "GAD-7 Anxiety Test", url: `${SITE_URL}/gad-7-anxiety-test` },
              { name: "Anxiety Test for Women", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (GAD-7)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
            Women&apos;s Health
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Anxiety Test for Women
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
          Women are <strong>twice as likely</strong> as men to experience generalized anxiety disorder.
          Hormonal changes, caregiving demands, and life transitions can all intensify anxiety. This
          free, private screening uses the GAD-7 — the same tool doctors use — to help you understand
          your symptoms. It is <strong>not a diagnosis</strong>, but a starting point for a conversation
          with a healthcare provider.
        </p>

        {/* Quick Facts Box */}
        <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-purple-800 dark:text-purple-300 uppercase tracking-wide mb-3">
            Anxiety in Women: Quick Facts
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• Women are <strong>2x more likely</strong> to be diagnosed with an anxiety disorder than men (NIMH)</li>
            <li>• Anxiety often first appears or worsens during hormonal transitions — puberty, pregnancy, postpartum, perimenopause</li>
            <li>• Approximately <strong>1 in 5 women</strong> will experience an anxiety disorder in any given year</li>
            <li>• Anxiety disorders are highly treatable, yet many women wait years before seeking help</li>
          </ul>
        </div>

        {/* Educational Content */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Why This Screening Matters for Women
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
          <p>
            Anxiety in women is influenced by a unique combination of biological, psychological, and social
            factors. Fluctuations in estrogen and progesterone — during the menstrual cycle, pregnancy,
            postpartum recovery, and perimenopause — directly affect neurotransmitters that regulate mood
            and anxiety. This means anxiety symptoms can shift throughout different life stages.
          </p>
          <p>
            Beyond hormones, women often carry disproportionate caregiving responsibilities, face workplace
            inequality, and are more likely to experience certain types of trauma. These stressors can
            compound anxiety over time. The GAD-7 provides a structured way to assess your current anxiety
            level so you can make informed decisions about your next steps.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can diagnose an anxiety disorder. Your responses are processed entirely in
            your browser and are never stored or transmitted.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Reviewed by a Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years
            of clinical experience in substance abuse counseling.
          </p>
        </div>

        {/* Additional Resources */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Resources for Women
        </h2>
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
            <li>
              <strong>Postpartum Support International:</strong> Call <strong>1-800-944-4773</strong> or text <strong>503-894-9453</strong> — support for perinatal mood and anxiety disorders
            </li>
          </ul>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
          <Link href="/depression-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Test for Teens →
          </Link>
        </div>

        {/* Transition to Tool */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Take the GAD-7 Anxiety Screening
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          The screening below takes about 2 minutes. Answer each question based on how you&apos;ve been
          feeling over the past two weeks. Your results are completely private.
        </p>
      </div>

      <GAD7Client faqData={FAQ_DATA} />
    </>
  );
}
