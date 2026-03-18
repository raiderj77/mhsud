import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";

const TOOL_URL = `${SITE_URL}/caregiver-burnout-assessment`;

export const metadata: Metadata = createMetadata({
  path: "/caregiver-burnout-assessment",
  title: "Caregiver Burnout Assessment | Free Self-Check for Family Caregivers",
  description:
    "Free burnout assessment for family caregivers. Are you exhausted, resentful, or losing yourself? Take our private, validated screening. Instant results, no sign-up.",
  keywords: [
    "caregiver burnout assessment", "caregiver burnout test", "caregiver burnout quiz",
    "family caregiver burnout", "am i burned out as a caregiver", "caregiver exhaustion test",
    "caregiver stress test", "caregiver burnout symptoms", "caregiver burnout screening",
    "caring for elderly parent burnout", "caregiver fatigue test", "caregiver mental health test",
    "burnout test for caregivers", "caregiver self-assessment", "free caregiver burnout test",
    "caregiver compassion fatigue", "sandwich generation burnout", "dementia caregiver burnout",
    "caregiver wellbeing assessment", "caregiver support resources",
  ],
  openGraph: {
    title: "Caregiver Burnout Assessment | Free Self-Check for Family Caregivers",
    description:
      "Free burnout assessment for family caregivers. Check for emotional exhaustion, compassion fatigue, and caregiver stress. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is caregiver burnout?",
    answer:
      "Caregiver burnout is a state of physical, emotional, and mental exhaustion that can develop when you spend a great deal of time caring for someone else — a parent with dementia, a spouse with a chronic illness, a child with special needs, or any loved one who requires ongoing support. It often develops gradually as the demands of caregiving outpace your ability to recover. Signs include chronic fatigue, resentment, withdrawal from your own life, and feeling like you have nothing left to give.",
  },
  {
    question: "How is caregiver burnout different from regular stress?",
    answer:
      "Regular stress is temporary and usually resolves when the stressor is removed. Caregiver burnout is cumulative — it builds over months or years of sustained caregiving without adequate support or respite. Unlike work stress that ends when you leave the office, caregiving often has no clear boundaries. Burnout involves a deeper depletion: emotional numbness, loss of empathy, and a sense that you've lost yourself in the role.",
  },
  {
    question: "Is it normal to feel resentful or angry as a caregiver?",
    answer:
      "Yes, and it's more common than most caregivers admit. Resentment and anger are natural responses to an unsustainable situation — not signs that you're a bad person or that you don't love the person you're caring for. These feelings are often signals that you need more support, respite, or help. Suppressing them without addressing the underlying situation tends to worsen burnout over time.",
  },
  {
    question: "What can I do about caregiver burnout?",
    answer:
      "The most important step is accepting that you cannot pour from an empty cup. Practical strategies include: accepting help from others (even when it's hard), scheduling regular respite time, joining a caregiver support group, speaking with a therapist who understands caregiver issues, exploring respite care services, and being honest with your doctor about your own health. The ARCH National Respite Network (archrespite.org) and the Caregiver Action Network (caregiveraction.org) are excellent starting points.",
  },
  {
    question: "When should a caregiver seek professional help?",
    answer:
      "Seek professional help if you are experiencing persistent depression or anxiety, thoughts of harming yourself or the person you care for, inability to perform basic self-care, or if your own health is deteriorating. These are signs that the caregiving situation has exceeded what one person can manage alone, and professional support — whether therapy, respite care, or a care team — is needed.",
  },
];

export default function CaregiverBurnoutAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Caregiver Burnout Assessment | Free Self-Check for Family Caregivers",
              description:
                "A free, private burnout assessment for family caregivers. Check for emotional exhaustion, compassion fatigue, and caregiver stress.",
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
              { name: "Burnout Assessment Tool", url: `${SITE_URL}/burnout-assessment-tool` },
              { name: "Caregiver Burnout Assessment", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Validated Burnout Scale
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            Family Caregivers
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 100% Private
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Caregiver Burnout Assessment
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You&apos;ve been showing up — for doctor&apos;s appointments, medication schedules,
            sleepless nights, difficult conversations. You&apos;ve rearranged your life around
            someone else&apos;s needs, often without anyone asking how <em>you</em> are doing.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Caregiver burnout is real, it&apos;s common, and it&apos;s not a sign that you
            don&apos;t love the person you care for. It&apos;s a sign that you&apos;ve been
            giving more than you&apos;ve been able to replenish.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            This free assessment checks for emotional exhaustion, depersonalization, and
            reduced personal accomplishment — the three core dimensions of burnout. Your
            answers are scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        {/* The Tool */}
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Caregiver Burnout Assessment?</h2>
        <h2>How Is the Caregiver Burnout Assessment Scored?</h2>
        <h2>What Do My Caregiver Burnout Results Mean?</h2>
      </section>
<BurnoutClient faqData={FAQ_DATA} />

        {/* Warning Signs Section */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Signs of Caregiver Burnout
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Constant exhaustion that sleep doesn't fix",
              "Feeling resentful or trapped in the role",
              "Withdrawing from friends and your own interests",
              "Feeling like nothing you do is ever enough",
              "Emotional numbness or detachment",
              "Neglecting your own health and medical needs",
              "Increased irritability or short temper",
              "Feeling hopeless about the situation",
              "Using alcohol, food, or other substances to cope",
              "Thoughts of 'I can't do this anymore'",
            ].map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-4 py-3"
              >
                <span className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0">•</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{sign}</span>
              </div>
            ))}
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
            Support Resources for Caregivers
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <strong>988</strong> — if you are in crisis
            </li>
            <li>
              <strong>Caregiver Action Network:</strong>{" "}
              <strong>caregiveraction.org</strong> — education, peer support, and resources
            </li>
            <li>
              <strong>ARCH National Respite Network:</strong>{" "}
              <strong>archrespite.org</strong> — find respite care in your area
            </li>
            <li>
              <strong>Eldercare Locator:</strong> <strong>1-800-677-1116</strong> — local services for older adults and their caregivers
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This assessment is for educational purposes only — it is not a diagnosis. Only a
            qualified healthcare professional can assess burnout or related conditions. Your
            responses are processed entirely in your browser and are never stored or transmitted.
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
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">
            General Burnout Assessment →
          </Link>
          <Link href="/compassion-fatigue-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            Compassion Fatigue Test →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
          <Link href="/family-impact-assessment" className="text-sky-600 dark:text-sky-400 hover:underline">
            Family Impact Assessment →
          </Link>
          <Link href="/sleep-and-mood-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Sleep &amp; Mood Check →
          </Link>
        </div>
      </div>
    </>
  );
}
