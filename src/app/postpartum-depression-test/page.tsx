import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";

const TOOL_URL = `${SITE_URL}/postpartum-depression-test`;

export const metadata: Metadata = createMetadata({
  path: "/postpartum-depression-test",
  title: "Postpartum Depression Test | Free Screening for New Moms",
  description:
    "Free postpartum depression screening for new mothers. Uses the PHQ-9, validated for perinatal use. Private, instant results. If something feels wrong after birth, this is a safe place to check.",
  keywords: [
    "postpartum depression test", "postpartum depression quiz", "ppd test free",
    "postpartum depression screening", "am i depressed after baby", "postpartum depression symptoms quiz",
    "baby blues vs postpartum depression test", "ppd quiz", "new mom depression test",
    "postpartum depression self test", "free postpartum depression test",
    "postpartum anxiety test", "perinatal depression screening", "after baby depression quiz",
    "postpartum mental health test", "ppd screening online", "postpartum depression check",
    "mom depression test", "postpartum depression assessment", "phq-9 postpartum",
  ],
  openGraph: {
    title: "Postpartum Depression Test | Free Screening for New Moms",
    description:
      "Free postpartum depression screening for new mothers using the PHQ-9. Private, instant results. No sign-up required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the difference between baby blues and postpartum depression?",
    answer:
      "Baby blues are extremely common — affecting up to 80% of new mothers — and typically involve mood swings, tearfulness, anxiety, and irritability in the first 1–2 weeks after birth. They resolve on their own as hormones stabilize. Postpartum depression (PPD) is more intense, lasts longer (beyond 2 weeks), and significantly interferes with daily functioning. PPD can develop any time in the first year after birth. If your symptoms are severe, persistent, or getting worse rather than better, please speak with your OB-GYN or midwife.",
  },
  {
    question: "How common is postpartum depression?",
    answer:
      "Postpartum depression affects approximately 1 in 7 new mothers (about 15%). It is one of the most common complications of childbirth. It can also affect fathers and non-birthing partners (paternal postpartum depression affects about 10% of new fathers). Despite being common, PPD is frequently underdiagnosed because many mothers feel shame about not feeling happy after birth, or because symptoms are attributed to normal new-parent exhaustion.",
  },
  {
    question: "Can postpartum depression start months after birth?",
    answer:
      "Yes. While PPD most commonly develops within the first few weeks to months after birth, it can develop at any point in the first year postpartum. Some mothers experience a delayed onset, particularly around the time they stop breastfeeding (due to hormonal changes) or return to work. If you are within the first year of giving birth and experiencing depression symptoms, postpartum depression is a possible explanation worth discussing with your healthcare provider.",
  },
  {
    question: "Is it safe to take antidepressants while breastfeeding?",
    answer:
      "Several antidepressants are considered compatible with breastfeeding, including sertraline and paroxetine, which have low transfer into breast milk. This is a decision to make with your prescribing doctor or psychiatrist, who can weigh the risks and benefits for your specific situation. Untreated postpartum depression also carries risks — for you and for your baby's development. You don't have to choose between treating your depression and breastfeeding.",
  },
  {
    question: "What should I do if my score suggests postpartum depression?",
    answer:
      "Contact your OB-GYN, midwife, or primary care doctor as soon as possible. Postpartum depression is highly treatable with therapy (especially CBT and interpersonal therapy), medication, and support. Postpartum Support International (postpartum.net, 1-800-944-4773) offers a helpline, support groups, and a provider directory. If you are having thoughts of harming yourself or your baby, please call 988 or go to your nearest emergency room immediately.",
  },
  {
    question: "Can fathers or non-birthing partners get postpartum depression?",
    answer:
      "Yes. Paternal postpartum depression affects approximately 10% of new fathers, with rates highest in the 3–6 months after birth. Partners can experience depression, anxiety, irritability, and withdrawal. Risk factors include a partner with PPD, financial stress, relationship conflict, and lack of social support. This quiz can be used by any new parent, regardless of gender or birth role.",
  },
];

export default function PostpartumDepressionTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Postpartum Depression Test | Free Screening for New Moms",
              description:
                "A free, private postpartum depression screening using the PHQ-9, validated for perinatal use.",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-03-08",
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
              { name: "Postpartum Depression Test", url: TOOL_URL },
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">
            New Parents
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 100% Private
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Postpartum Depression Test
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You were supposed to feel joy. And maybe you do, sometimes — but underneath it
            there&apos;s something else. Exhaustion that goes beyond sleep deprivation.
            A sadness that doesn&apos;t lift. Feeling disconnected from your baby, or from
            yourself. Wondering if you made a terrible mistake. Feeling like you&apos;re
            failing at the one thing you were supposed to do.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            These feelings are not a reflection of your love for your child. They are symptoms
            of a medical condition — postpartum depression — that affects 1 in 7 new mothers.
            It is not your fault. And it is treatable.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            This free screening uses the PHQ-9, validated for use in the perinatal period.
            Your answers are scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        {/* The Tool */}
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Postpartum Depression Test?</h2>
        <h2>How Is the Postpartum Depression Test Scored?</h2>
        <h2>What Do My Postpartum Depression Results Mean?</h2>
      </section>
<PHQ9Client faqData={FAQ_DATA} />

        {/* Baby Blues vs PPD */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Baby Blues vs. Postpartum Depression
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tl-lg">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Baby Blues</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tr-lg">Postpartum Depression</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">How common</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Up to 80% of new mothers</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">About 1 in 7 (15%)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">When it starts</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Days 2–5 after birth</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Any time in first year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">How long it lasts</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">1–2 weeks, resolves on its own</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Weeks to months without treatment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Severity</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Mild mood swings, tearfulness</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Significant impairment in daily life</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Treatment needed</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Support, rest, time</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Therapy, medication, professional support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item) => (
              <div
                key={item.question}
                className="border border-slate-200 dark:border-slate-700 rounded-xl p-5"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Crisis &amp; Support Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <strong>988</strong> — if you are having thoughts of harming yourself or your baby
            </li>
            <li>
              <strong>Postpartum Support International:</strong>{" "}
              <strong>1-800-944-4773</strong> — helpline, support groups, provider directory
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong>
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening is for educational purposes only — it is not a diagnosis. Only a
            licensed healthcare professional can diagnose postpartum depression. If you are
            having thoughts of harming yourself or your baby, please seek immediate help.
            Your responses are processed entirely in your browser and are never stored or transmitted.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
          <Link href="/depression-test-for-new-moms" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Test for New Moms →
          </Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/anxiety-test-for-women" className="text-sky-600 dark:text-sky-400 hover:underline">
            Anxiety Test for Women →
          </Link>
          <Link href="/sleep-and-mood-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Sleep &amp; Mood Check →
          </Link>
        </div>
      </div>
    </>
  );
}
