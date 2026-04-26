import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";
import { AUDITClient } from "../audit-alcohol-test/AUDITClient";

const TOOL_URL = `${SITE_URL}/alcohol-screening-for-college-students`;

export const metadata: Metadata = createMetadata({
  path: "/alcohol-screening-for-college-students",
  title: "Alcohol Screening for College Students | Free AUDIT",
  description:
    "Free alcohol screening for college students — WHO AUDIT tool. 10 questions, private results, no sign-up. Understand your drinking patterns.",
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
              dateModified: new Date().toISOString().substring(0,10),
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
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Alcohol Screening for College Students
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Let&apos;s be honest — in college, drinking is everywhere. The pregames, the parties,
            the tailgates, the &quot;just one more.&quot; Everyone around you seems fine, so it&apos;s
            easy to think your drinking is fine too. But if you&apos;re here, some part of you is
            wondering. Maybe you blacked out and don&apos;t want to admit it. Maybe you&apos;re
            spending more money on alcohol than food. Maybe you just want to know where the line is.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Asking that question takes more courage than most people realize. This screening
            uses the <strong>AUDIT</strong> — the World Health Organization&apos;s gold-standard
            alcohol assessment — to give you an honest, private look at your drinking patterns.
            No judgment, no lectures, no one watching. It is <strong>not a diagnosis</strong>,
            just a clear-eyed check-in with yourself.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold text-base hover:bg-amber-700 transition-colors shadow-sm"
          >
            Start the Alcohol Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 3 minutes. Completely private — nothing is stored or shared with your school.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">1,519 deaths per year</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                An estimated 1,519 college students ages 18–24 die each year from alcohol-related
                unintentional injuries, including motor vehicle crashes.
                <span className="text-slate-500 dark:text-slate-400"> — NIAAA</span>
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">1 in 3 binge drink</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                About 33% of full-time college students engage in binge drinking — but students
                consistently <em>overestimate</em> how much their peers drink, which makes heavy
                drinking feel more normal than it is.
                <span className="text-slate-500 dark:text-slate-400"> — NIAAA/SAMHSA</span>
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">1 in 4 affected academically</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                25% of college students report academic consequences from drinking — missed classes,
                falling behind, lower grades. The impact goes beyond the party.
                <span className="text-slate-500 dark:text-slate-400"> — NIAAA</span>
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
                This screening uses the <strong>AUDIT</strong> (Alcohol Use Disorders Identification Test),
                a 10-question tool developed by the World Health Organization and used in healthcare
                settings around the world.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>How it works:</strong> You&apos;ll answer 10 questions about your drinking frequency, quantity, and any consequences you&apos;ve experienced. The questions cover the past year of your drinking.</p>
                <p><strong>Your score:</strong> Ranges from 0 to 40. Scores of 8 or above suggest hazardous or harmful drinking patterns. You&apos;ll see exactly what your score means and what the clinical thresholds are.</p>
                <p><strong>Be honest:</strong> This only works if you&apos;re honest with yourself. Nobody else sees your answers. There&apos;s no &quot;right&quot; answer — just your actual experience.</p>
                <p><strong>Your privacy:</strong> This runs entirely in your browser. Nothing is stored, sent to a server, or shared with your school, parents, or anyone else. When you close the page, it&apos;s gone.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Cannabis and Anxiety: What Students Need to Know
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Cannabis is widely used by college students for anxiety management — and the short-term
              effect is real. Cannabis acutely reduces anxiety for many people. This is why it feels
              like a solution.
            </p>
            <p>The longer-term picture is more complicated:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Regular cannabis use is associated with <strong>worsened anxiety over time</strong> — not
                improved. The relief is real; the rebound and tolerance progression erode it.
              </li>
              <li>
                The potency of commercially available cannabis has increased dramatically. Average THC
                content in flower was approximately 4% in the 1990s; it now routinely exceeds 20–25%.
                The anxiety-reducing effects of lower-potency cannabis don&apos;t scale linearly with
                higher potency.
              </li>
              <li>
                Cannabis use disorder affects approximately <strong>1 in 6 people</strong> who start
                using before age 18, and rates are elevated in frequent college-age users. The
                developing brain is more vulnerable to dependency patterns.
              </li>
              <li>
                High-potency cannabis and concentrates are associated with <strong>cannabis-induced
                anxiety and panic</strong> — the substance that was being used to manage anxiety can
                trigger it at higher doses.
              </li>
            </ul>
            <p>
              If you&apos;re using cannabis regularly to manage anxiety, the anxiety and the use
              pattern both deserve clinical attention. The{" "}
              <Link href="/audit-c-alcohol-screen" className="text-sky-600 dark:text-sky-400 hover:underline">AUDIT-C</Link>{" "}
              screens for alcohol; the{" "}
              <Link href="/dast-10-drug-screening" className="text-sky-600 dark:text-sky-400 hover:underline">DAST-10</Link>{" "}
              can help you assess your cannabis use pattern.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Binge Drinking and the College Context
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              The AUDIT defines a &quot;heavy drinking occasion&quot; as 6+ standard drinks. The
              National College Health Assessment defines binge drinking as 5+ drinks in a sitting for
              men, 4+ for women.
            </p>
            <p>
              By either definition, binge drinking is the dominant pattern in college drinking
              culture — not daily dependence. The AUDIT and AUDIT-C are calibrated to detect both
              patterns, but scores can be elevated by infrequent heavy drinking even without daily use.
            </p>
            <p>What the research shows about college binge drinking:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Acute risks — impaired judgment, accidents, sexual assault, alcohol poisoning — are
                concentrated in binge episodes, not moderate regular drinking
              </li>
              <li>
                The pattern established in college predicts drinking trajectory in young adulthood
              </li>
              <li>
                Students who binge drink to manage social anxiety often find the anxiety worsens as
                tolerance to alcohol&apos;s social lubricating effect develops
              </li>
            </ul>
            <p>
              If your AUDIT score is elevated primarily because of weekend binge patterns rather than
              daily use, that&apos;s still clinically relevant — it just points to a different kind of
              conversation.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Cost-Effective Help Options for Students
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Cost and access are the most common barriers to mental health care for college students
              after stigma. Specific options:
            </p>
            <div className="space-y-3">
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">Campus counseling centers</p>
                <p className="text-sm">
                  Free to enrolled students. Wait times vary — access early in the semester, not at
                  finals. Most campuses now offer same-day crisis triage even when scheduled
                  appointments are backed up.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">Open Path Collective</p>
                <p className="text-sm">
                  openpathcollective.org — Reduced-cost therapy at $30–$80 per session for
                  income-qualifying individuals. Legitimate licensed therapists, not interns.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">Community mental health centers</p>
                <p className="text-sm">
                  Most cities and counties have sliding-scale outpatient mental health services.
                  SAMHSA&apos;s treatment locator at findtreatment.gov filters by location and payment
                  type.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">Telehealth</p>
                <p className="text-sm">
                  BetterHelp, Talkspace, and similar platforms offer faster access than campus
                  waitlists. Many student health insurance plans now cover telehealth mental
                  health — check your coverage before paying out of pocket.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">The JED Foundation</p>
                <p className="text-sm">
                  jedfoundation.org — Specific mental health resources for college students and young
                  adults, including a treatment finder and crisis support.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">Academic accommodations</p>
                <p className="text-sm">
                  Documented anxiety disorders may qualify for extended test time, reduced-distraction
                  testing environments, and attendance flexibility through disability services.
                  Documentation from a clinician is required — worth pursuing if anxiety is affecting
                  academic performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the AUDIT Alcohol Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question honestly based on your drinking over the past year.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="An AUDIT-based alcohol screening tailored for college students with campus-specific context and resources."
          who="College students who want to evaluate their drinking patterns against evidence-based risk thresholds."
          bottomLine="College drinking norms can mask risky patterns — your score reflects clinical risk levels. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>
      <section className="sr-only">
        <h2>What Is the College Alcohol Screening?</h2>
        <h2>How Is the College Alcohol Screen Scored?</h2>
        <h2>What Do My Alcohol Screening Results Mean?</h2>
      </section>
<AUDITClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Your campus counseling center</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Most colleges offer free, confidential counseling — and you don&apos;t need to be in
                crisis to use it. Even one session can help you think through your relationship with
                alcohol. Check your school&apos;s student health services website.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to someone you trust</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                An RA, a friend, a professor, a family member. You don&apos;t have to have all the
                answers — just saying &quot;I&apos;m worried about my drinking&quot; out loud
                can be a powerful first step.
              </p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Free confidential help</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free,
                confidential, 24/7 treatment referrals and information. They can help you find
                local resources, including programs specifically for young adults.
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
            healthcare professional can diagnose an alcohol use disorder. Your responses are processed
            entirely in your browser and are never stored or transmitted. Always consult a qualified
            healthcare professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT Alcohol Test →
          </Link>
          <Link href="/audit-c-alcohol-screen" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT-C Quick Screen →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
        </div>
      </div>
    </>
  );
}
