import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { MDQClient } from "../mdq-bipolar-screening/MDQClient";

const TOOL_URL = `${SITE_URL}/bipolar-test-young-adults`;

export const metadata: Metadata = createMetadata({
  path: "/bipolar-test-young-adults",
  title: "Bipolar Test for Young Adults — Free MDQ Screen",
  description:
    "Free bipolar screening for young adults using the MDQ. Private, instant results. No signup.",
  keywords: [
    "bipolar test young adults", "bipolar screening young people", "mdq bipolar test",
    "am i bipolar quiz", "bipolar disorder test", "young adult bipolar screening",
    "bipolar test college students", "bipolar mood disorder quiz", "mood swings test young adults",
    "bipolar self-assessment", "bipolar screening questionnaire", "mdq screening tool",
    "bipolar symptoms young adults", "hypomania test", "free bipolar test",
  ],
  openGraph: {
    title: "Bipolar Test for Young Adults — Free MDQ Screen",
    description: "Free, private bipolar screening for young adults using the clinically validated MDQ. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Am I bipolar or just moody?",
    answer: "Normal mood fluctuations happen to everyone, especially during stressful periods. Bipolar disorder involves distinct episodes that last days to weeks — not just hour-to-hour shifts. Manic or hypomanic episodes include unusually high energy, decreased need for sleep, racing thoughts, and impulsive behavior that is clearly different from your baseline. If your mood shifts are causing significant problems in your relationships, school, or work, that is worth discussing with a professional.",
  },
  {
    question: "What age does bipolar disorder typically start?",
    answer: "Bipolar disorder most commonly emerges in the late teens to mid-20s, though it can appear earlier or later. The average age of onset is 25 years old. Because this overlaps with major life transitions like college and early career, symptoms are often dismissed as stress, adjustment issues, or personality traits. Early identification leads to better long-term outcomes.",
  },
  {
    question: "How is bipolar disorder different from depression?",
    answer: "Depression involves persistent low mood, loss of interest, fatigue, and hopelessness. Bipolar disorder includes depressive episodes but also manic or hypomanic episodes — periods of unusually elevated mood, energy, and activity. Many people with bipolar disorder are initially misdiagnosed with depression because they seek help during depressive episodes and may not recognize hypomanic periods as abnormal.",
  },
  {
    question: "What is hypomania?",
    answer: "Hypomania is a less severe form of mania found in bipolar II disorder. During hypomanic episodes, you may feel unusually energetic, productive, confident, or social — but without the extreme impairment of full mania. It can actually feel good, which is why many people do not report it. However, hypomania often precedes depressive crashes and can lead to impulsive decisions with lasting consequences.",
  },
  {
    question: "Can bipolar disorder be treated?",
    answer: "Yes. Bipolar disorder is highly treatable with a combination of medication (such as mood stabilizers or atypical antipsychotics) and therapy (such as cognitive behavioral therapy or interpersonal and social rhythm therapy). Many people with bipolar disorder live full, productive lives with proper treatment. Early intervention tends to produce better outcomes.",
  },
  {
    question: "Will I need medication forever?",
    answer: "Treatment plans vary by individual. Many people with bipolar disorder benefit from long-term medication to prevent episodes, but treatment is always a conversation between you and your healthcare provider. Some people adjust medications over time as their needs change. Stopping medication without professional guidance can increase the risk of relapse.",
  },
  {
    question: "How does bipolar disorder affect relationships?",
    answer: "Bipolar disorder can strain relationships through mood unpredictability, impulsive behavior during manic episodes, and withdrawal during depressive episodes. Partners and friends may feel confused or hurt. Education, open communication, and treatment significantly improve relationship outcomes. Couples or family therapy can also be helpful.",
  },
  {
    question: "How do I get diagnosed with bipolar disorder?",
    answer: "Diagnosis requires evaluation by a qualified mental health professional — typically a psychiatrist, psychologist, or licensed clinical social worker. They will review your mood history, family history, sleep patterns, and behavior over time. Screening tools like the MDQ can help start the conversation, but only a professional can make a formal assessment.",
  },
];

export default function BipolarTestYoungAdultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Bipolar Test for Young Adults — Free MDQ Screen",
              description: "A free, private bipolar screening tool for young adults using the clinically validated Mood Disorder Questionnaire (MDQ).",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-03-05",
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
              { name: "MDQ Bipolar Screening", url: `${SITE_URL}/mdq-bipolar-screening` },
              { name: "Bipolar Test for Young Adults", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (MDQ)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
            Young Adults 18–30
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Bipolar Test for Young Adults
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Maybe you&apos;ve noticed that your mood doesn&apos;t just shift — it transforms.
            Weeks of feeling unstoppable, barely needing sleep, ideas racing faster than you
            can act on them. Then, without warning, everything goes dark. The energy vanishes.
            Getting out of bed feels impossible. People around you say &quot;everyone has ups
            and downs,&quot; but this feels different. Deeper. More extreme. And it&apos;s
            starting to affect your school, your work, your relationships, your sense of who
            you actually are.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Bipolar disorder most commonly appears in the late teens to mid-20s — right when
            life is already overwhelming. If you&apos;ve been wondering whether what you&apos;re
            experiencing is more than stress, this free screening can help you find clarity.
            It uses the <strong>Mood Disorder Questionnaire (MDQ)</strong>, a validated tool
            used in clinical settings. It is <strong>not a diagnosis</strong>, but it can help
            you decide whether to talk to a professional — and give you the words to start
            that conversation.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold text-base hover:bg-purple-700 transition-colors shadow-sm"
          >
            Start the Bipolar Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 5 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">Onset: late teens to mid-20s</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Bipolar disorder most commonly emerges between ages 15 and 25, overlapping with
                critical life transitions like college, first jobs, and forming adult relationships.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">10-year average delay</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                On average, it takes 10 years from first symptoms to correct diagnosis. Many people
                are initially misdiagnosed with depression alone, delaying effective treatment.
                <span className="text-slate-500 dark:text-slate-400"> — Depression and Bipolar Support Alliance</span>
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">Often misdiagnosed</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Up to 69% of people with bipolar disorder are initially misdiagnosed, most commonly
                with unipolar depression. Screening tools like the MDQ help identify the manic side
                that often goes unreported.
                <span className="text-slate-500 dark:text-slate-400"> — American Journal of Psychiatry</span>
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
                This screening uses the <strong>Mood Disorder Questionnaire (MDQ)</strong>, a
                validated tool designed to identify signs of bipolar spectrum disorders.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Bipolar I vs. Bipolar II:</strong> Bipolar I involves full manic episodes — extreme highs that may include psychosis, risky behavior, or hospitalization. Bipolar II involves hypomanic episodes (less severe highs) and more pronounced depressive episodes. Both are serious and treatable.</p>
                <p><strong>Hypomania vs. mania:</strong> Hypomania can feel productive and enjoyable, which is why many people never report it. But it often escalates or crashes into depression. Recognizing these patterns is key to getting the right help.</p>
                <p><strong>College and career impact:</strong> Undiagnosed bipolar disorder in young adults frequently leads to academic struggles, job instability, financial impulsivity, and relationship conflict. These are not character flaws — they are symptoms.</p>
                <p><strong>Substance use connection:</strong> Up to 60% of people with bipolar disorder also experience substance use issues, often as a form of self-medication. If you&apos;ve been using alcohol or drugs to manage your moods, that pattern is worth examining.</p>
                <p><strong>Mood tracking matters:</strong> Keeping a daily mood log — even a simple 1-to-10 rating — can reveal patterns that are invisible day-to-day but obvious over weeks. This information is invaluable if you decide to see a professional.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is stored, transmitted, or visible to anyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the MDQ Bipolar Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on your experiences throughout your life.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is Bipolar Screening for Young Adults?</h2>
        <h2>How Is the Bipolar Screening Scored?</h2>
        <h2>What Do My Bipolar Screening Results Mean?</h2>
      </section>
<MDQClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Start a mood journal</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Track your mood, sleep, and energy daily for at least two weeks. Simple ratings
                work — you don&apos;t need paragraphs. This data is incredibly helpful if you
                decide to see a professional. Patterns that are invisible day-to-day become
                clear over time.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to a professional</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A psychiatrist or psychologist can provide a thorough evaluation. If you&apos;re
                in college, your campus counseling center is a good starting point — many offer
                free initial assessments. Bring your screening results and any mood tracking data.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Learn about bipolar disorder</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Knowledge reduces fear. The <strong>Depression and Bipolar Support Alliance
                (DBSA)</strong> and <strong>NAMI</strong> offer free resources, support groups,
                and peer connections. Understanding what bipolar disorder actually is — and
                isn&apos;t — can be empowering.
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
            healthcare professional can assess bipolar disorder or related conditions. Your responses are
            processed entirely in your browser and are never stored or transmitted. Always consult a
            qualified healthcare professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/mdq-bipolar-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            MDQ Bipolar Screening →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
          <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline">
            DASS-21 Depression, Anxiety &amp; Stress →
          </Link>
        </div>
      </div>
    </>
  );
}
