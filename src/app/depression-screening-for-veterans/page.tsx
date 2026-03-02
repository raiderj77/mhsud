import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";

const TOOL_URL = `${SITE_URL}/depression-screening-for-veterans`;

export const metadata: Metadata = createMetadata({
  path: "/depression-screening-for-veterans",
  title: "Depression Screening for Veterans | Free PHQ-9",
  description:
    "Free depression screening for veterans using the PHQ-9. Understand military-related depression, PTSD connections, and VA resources. Private, instant results.",
  keywords: [
    "depression screening veterans", "veteran depression test", "military depression screening",
    "ptsd depression test veterans", "va depression screening", "veteran mental health test",
    "military to civilian depression", "combat veteran depression", "veteran phq-9",
    "depression test for military", "veteran mental health assessment", "post military depression",
    "veteran suicide prevention", "free veteran depression test", "military depression quiz",
    "veteran mental health screening", "service member depression test",
  ],
  openGraph: {
    title: "Depression Screening for Veterans | Free PHQ-9",
    description: "Free, private depression screening for veterans using the clinically validated PHQ-9. Includes VA resources and veteran-specific information.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How common is depression among veterans?",
    answer: "Depression affects veterans at significantly higher rates than the general population. The VA reports that roughly 1 in 3 veterans visiting VA primary care clinics screen positive for depression. Risk factors include combat exposure, traumatic brain injury, chronic pain, military sexual trauma, and the challenges of transitioning to civilian life. Depression in veterans is treatable, and seeking help is a sign of strength.",
  },
  {
    question: "What is the connection between PTSD and depression in veterans?",
    answer: "PTSD and depression frequently co-occur in veterans. Studies estimate that approximately 50% of veterans with PTSD also have depression. The conditions share overlapping symptoms — sleep disturbance, difficulty concentrating, loss of interest, and emotional numbness. This screening focuses on depression, but if you suspect PTSD, discussing both with a healthcare provider is important.",
  },
  {
    question: "Is this screening tool used by the VA?",
    answer: "Yes. The PHQ-9 is one of the standard depression screening instruments used across VA healthcare facilities. Taking it here gives you the same clinically validated assessment in a private, no-pressure environment. You can share your results with your VA provider or use them as a starting point for a conversation.",
  },
  {
    question: "Will my results affect my VA benefits or disability rating?",
    answer: "No. This screening is completely private and runs entirely in your browser. Nothing is stored, transmitted, or shared with anyone — including the VA. Your results here have no connection to your VA records, benefits, or disability claims.",
  },
  {
    question: "What veteran-specific mental health resources are available?",
    answer: "Veterans have access to several dedicated resources: the Veterans Crisis Line (dial 988 then press 1, or text 838255), VA mental health services (no combat experience or VA enrollment required for crisis care), Vet Centers for readjustment counseling, and the VA's online self-help resources. The SAMHSA National Helpline (1-800-662-4357) also provides free, confidential referrals 24/7.",
  },
];

export default function DepressionScreeningForVeteransPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Depression Screening for Veterans — PHQ-9",
              description: "A free, private depression screening tool for veterans using the clinically validated PHQ-9 questionnaire. Includes VA resources and veteran-specific mental health information.",
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
              { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` },
              { name: "Depression Screening for Veterans", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (PHQ-9)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            Veterans &amp; Service Members
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Depression Screening for Veterans
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
          Veterans face unique mental health challenges — from combat exposure and moral injury to the
          difficult transition back to civilian life. Depression affects roughly <strong>1 in 3
          veterans</strong> who visit VA primary care. This free, private screening uses the PHQ-9,
          the same tool used across VA facilities, to help you understand your symptoms. It is{" "}
          <strong>not a diagnosis</strong>, but it can be a first step toward getting support you&apos;ve
          earned.
        </p>

        {/* Quick Facts Box */}
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-green-800 dark:text-green-300 uppercase tracking-wide mb-3">
            Veteran Depression: Quick Facts
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• Roughly <strong>1 in 3 veterans</strong> in VA primary care screen positive for depression</li>
            <li>• About <strong>50%</strong> of veterans with PTSD also have co-occurring depression</li>
            <li>• Veterans are at <strong>1.5x higher risk</strong> for suicide compared to non-veteran adults</li>
            <li>• Depression is highly treatable — the VA offers mental health services with no out-of-pocket cost for eligible veterans</li>
          </ul>
        </div>

        {/* Educational Content */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Why This Screening Matters for Veterans
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
          <p>
            Military culture emphasizes toughness and self-reliance — qualities that serve well in combat
            but can become barriers to seeking mental health support. Many veterans view depression as
            weakness or believe they should be able to handle it on their own. The reality is that
            depression is a medical condition, often influenced by traumatic brain injury, chronic pain,
            sleep disorders, and the neurological effects of prolonged stress.
          </p>
          <p>
            The transition from military to civilian life brings its own risk factors: loss of purpose and
            identity, separation from the close-knit military community, difficulty relating to civilians,
            and navigating a very different daily structure. These stressors can trigger or worsen
            depression, even years after separation. The PHQ-9 gives you a structured, private way to
            check in with yourself — no judgment, no paperwork, no one watching.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can diagnose depression. Your responses are processed entirely in your
            browser and are never stored or transmitted.
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
          Resources for Veterans
        </h2>
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>Veterans Crisis Line:</strong> Dial <strong>988</strong> then press <strong>1</strong> — or text <strong>838255</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — available to everyone
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
            <li>
              <strong>VA Mental Health Services:</strong> Veterans enrolled in VA healthcare can access mental health services — contact your local VA facility or call <strong>1-877-222-8387</strong>
            </li>
            <li>
              <strong>Vet Centers:</strong> Readjustment counseling for combat veterans and their families — no VA enrollment required
            </li>
          </ul>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/depression-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Test for Teens →
          </Link>
        </div>

        {/* Transition to Tool */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Take the PHQ-9 Depression Screening
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          The screening below takes about 3 minutes. Answer each question based on how you&apos;ve been
          feeling over the past two weeks. Your results are completely private — nothing is stored or
          shared with anyone, including the VA.
        </p>
      </div>

      <PHQ9Client faqData={FAQ_DATA} />
    </>
  );
}
