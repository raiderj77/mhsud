import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AUDITClient } from "../audit-alcohol-test/AUDITClient";

const TOOL_URL = `${SITE_URL}/alcohol-screening-for-college-students`;

export const metadata: Metadata = createMetadata({
  path: "/alcohol-screening-for-college-students",
  title: "Alcohol Screening for College Students | Free AUDIT",
  description:
    "Free alcohol screening for college students using the WHO's AUDIT tool. 10 questions, private results, no sign-up. Understand your drinking patterns honestly.",
  keywords: [
    "alcohol screening college students", "college drinking test", "alcohol test for students",
    "binge drinking quiz", "college alcohol assessment", "audit test college",
    "am i drinking too much college", "student alcohol screening", "alcohol use test college",
    "college binge drinking test", "university alcohol screening", "drinking habits quiz",
    "college party drinking test", "alcohol self-assessment students", "free alcohol screening",
    "student drinking quiz", "college alcohol awareness",
  ],
  openGraph: {
    title: "Alcohol Screening for College Students | Free AUDIT",
    description: "Free, private alcohol screening for college students using the WHO's clinically validated AUDIT tool. Honest results in 3 minutes.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How much drinking is considered 'normal' in college?",
    answer: "While drinking is common on college campuses, 'normal' does not mean safe. According to the NIAAA, about 53% of full-time college students ages 18–22 drink alcohol, and about 33% engage in binge drinking. The AUDIT helps you evaluate your own patterns against clinical thresholds — not peer behavior — because what is common is not necessarily what is healthy.",
  },
  {
    question: "What counts as binge drinking?",
    answer: "Binge drinking is defined as a pattern that brings blood alcohol concentration to 0.08% or above. This typically happens when women consume 4 or more drinks, or men consume 5 or more drinks, within about 2 hours. Binge drinking significantly increases the risk of alcohol-related harm, even if it does not happen frequently.",
  },
  {
    question: "Will my results be shared with my school?",
    answer: "No. This tool runs entirely in your browser. Nothing you enter is stored, transmitted, or shared with any server, school, or third party. Your results are completely private — when you close this page, your responses are gone.",
  },
  {
    question: "I only drink on weekends — can that still be a problem?",
    answer: "Yes. The pattern of drinking matters as much as the frequency. Weekend-only drinking that involves binge episodes (4–5+ drinks in a sitting) carries significant health and safety risks, including alcohol poisoning, injury, impaired judgment, and academic consequences. The AUDIT evaluates both frequency and quantity.",
  },
  {
    question: "Where can college students get help with alcohol use?",
    answer: "Most colleges have a counseling center that offers free or low-cost confidential support. You can also contact SAMHSA's National Helpline at 1-800-662-4357 for free, confidential referrals 24/7. Many students find that even a single conversation with a counselor helps them make better-informed choices.",
  },
];

export default function AlcoholScreeningForCollegeStudentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Alcohol Screening for College Students — AUDIT",
              description: "A free, private alcohol screening tool for college students using the WHO's clinically validated AUDIT questionnaire. Assess drinking patterns honestly.",
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
              { name: "AUDIT Alcohol Test", url: `${SITE_URL}/audit-alcohol-test` },
              { name: "Alcohol Screening for College Students", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            WHO Validated (AUDIT)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            College Students
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Alcohol Screening for College Students
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
          College is a time of independence, social exploration — and often, increased alcohol exposure.
          Nearly <strong>1 in 3 college students</strong> engage in binge drinking. This free, private
          screening uses the AUDIT — the World Health Organization&apos;s gold-standard alcohol assessment
          — to help you honestly evaluate your drinking patterns. It is <strong>not a diagnosis</strong>,
          but it can help you understand where you stand.
        </p>

        {/* Quick Facts Box */}
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wide mb-3">
            College Drinking: Quick Facts
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• About <strong>1,519 college students</strong> ages 18–24 die each year from alcohol-related injuries (NIAAA)</li>
            <li>• Roughly <strong>33%</strong> of full-time college students engage in binge drinking</li>
            <li>• <strong>1 in 4</strong> college students report academic consequences from drinking</li>
            <li>• Many students overestimate how much their peers drink, which normalizes heavier use</li>
          </ul>
        </div>

        {/* Educational Content */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Why This Screening Matters for College Students
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
          <p>
            College environments often normalize heavy drinking through social events, peer pressure, and
            cultural traditions. It can be difficult to recognize when drinking has crossed from social to
            problematic. The AUDIT asks about your drinking frequency, quantity, and consequences — giving
            you an objective picture that cuts through the noise of campus culture.
          </p>
          <p>
            Alcohol misuse in college is linked to academic decline, increased risk of sexual assault,
            injuries, and the development of long-term alcohol use disorders. Research shows that drinking
            patterns established in college often persist into adulthood. Screening now can help you make
            informed choices during a critical period of your life.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can diagnose an alcohol use disorder. Your responses are processed
            entirely in your browser and are never stored or transmitted.
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
          Resources for College Students
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
              <strong>Your Campus Counseling Center:</strong> Most colleges offer free, confidential counseling — check your school&apos;s student health services
            </li>
            <li>
              <strong>NIAAA College Drinking Resources:</strong> Evidence-based information at{" "}
              <span className="font-medium">CollegeDrinkingPrevention.gov</span>
            </li>
          </ul>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT Alcohol Test →
          </Link>
          <Link href="/audit-c-alcohol-screen" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT-C Quick Screen →
          </Link>
          <Link href="/depression-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Test for Teens →
          </Link>
        </div>

        {/* Transition to Tool */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Take the AUDIT Alcohol Screening
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          The screening below takes about 3 minutes. Answer each question honestly based on your
          drinking over the past year. Your results are completely private — nothing is stored or
          shared.
        </p>
      </div>

      <AUDITClient faqData={FAQ_DATA} />
    </>
  );
}
