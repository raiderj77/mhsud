import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { GAD7Client } from "../gad-7-anxiety-test/GAD7Client";

const TOOL_URL = `${SITE_URL}/anxiety-test-for-women`;

export const metadata: Metadata = createMetadata({
  path: "/anxiety-test-for-women",
  title: "Anxiety Test for Women | Free GAD-7 Screening",
  description:
    "Free anxiety screening for women using the GAD-7. Learn how hormones and life stages affect anxiety. Private, instant results.",
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
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Anxiety Test for Women
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You know that feeling — the tightness in your chest when you wake up, the racing
            thoughts at 2 a.m., the way you can&apos;t stop worrying even when you know
            logically that things are probably fine. You hold it together for everyone around
            you, but inside, the worry doesn&apos;t stop. You might wonder if this is just
            how life is, or if something more is going on.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            It&apos;s not &quot;just stress.&quot; Women experience anxiety disorders at
            nearly <strong>twice the rate of men</strong>, shaped by a unique mix of hormonal
            changes, life demands, and expectations that pile up over time. This free, private
            screening can help you understand whether what you&apos;re experiencing goes
            beyond everyday worry. It is <strong>not a diagnosis</strong>, but it can give you
            clarity — and permission to take the next step.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold text-base hover:bg-purple-700 transition-colors shadow-sm"
          >
            Start the Anxiety Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 2 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">2x the risk</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Women are twice as likely as men to be diagnosed with generalized anxiety disorder.
                It&apos;s not a matter of being &quot;more sensitive&quot; — biology, hormones, and social
                factors create real differences.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">1 in 5 women</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Approximately 23% of women experience an anxiety disorder in any given year. That means
                if you&apos;re struggling, you&apos;re far from alone.
                <span className="text-slate-500 dark:text-slate-400"> — ADAA</span>
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">Up to 20%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Perinatal anxiety affects up to 15–20% of women during pregnancy and the
                postpartum period — yet it often goes unrecognized because the focus is on
                postpartum depression.
                <span className="text-slate-500 dark:text-slate-400"> — ACOG</span>
              </p>
            </div>
          </div>
        </div>

        {/* What To Expect */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            What To Expect
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                This screening uses the <strong>GAD-7</strong> (Generalized Anxiety Disorder-7),
                a 7-question tool used by primary care doctors, therapists, and OB-GYNs worldwide.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>How it works:</strong> You&apos;ll answer 7 questions about how often you&apos;ve been bothered by specific anxiety symptoms over the past two weeks. Each answer is scored from 0 (not at all) to 3 (nearly every day).</p>
                <p><strong>Your score:</strong> Ranges from 0 to 21. Scores of 5, 10, and 15 represent mild, moderate, and severe anxiety thresholds. You&apos;ll see exactly what your score means.</p>
                <p><strong>What it&apos;s not:</strong> This is a screening, not a diagnosis. It can&apos;t tell you <em>why</em> you&apos;re anxious (hormones, life stress, a clinical disorder, or all three). A healthcare provider can help you figure that out.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Your answers are never stored, transmitted, or visible to anyone but you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the GAD-7 Anxiety Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how you&apos;ve been feeling over the past two weeks.
          </p>
        </div>
        <GAD7Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to your doctor</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Your primary care doctor or OB-GYN is a great first step. Bring your screening
                results — it gives them something concrete to discuss. Anxiety disorders are highly
                treatable with therapy, lifestyle changes, and sometimes medication.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pregnant or postpartum?</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Postpartum Support International:</strong> Call <strong>1-800-944-4773</strong> or
                text <strong>503-894-4773</strong>. Trained counselors who specialize in perinatal
                mood and anxiety disorders. Free, confidential.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Find a therapist</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Cognitive Behavioral Therapy (CBT) is one of the most effective treatments for anxiety.
                Ask your insurance for in-network therapists, or check if your employer offers an
                Employee Assistance Program (EAP) with free sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Crisis Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can diagnose an anxiety disorder. Your responses are processed entirely in
            your browser and are never stored or transmitted. Always consult a qualified healthcare professional
            for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Reviewed by a Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years
            of clinical experience in substance abuse counseling.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
          <Link href="/sleep-and-mood-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Sleep &amp; Mood Check →
          </Link>
        </div>
      </div>
    </>
  );
}
