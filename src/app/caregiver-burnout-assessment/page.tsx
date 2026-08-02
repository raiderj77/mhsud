import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, medicalWebPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/caregiver-burnout-assessment`;

export const metadata: Metadata = createMetadata({
  path: "/caregiver-burnout-assessment",
  title: "Caregiver Burnout Self-Check | Free Educational Check-In",
  description:
    "Original educational check-in for family and professional caregivers. Reflect on current role-related strain with private in-browser scoring and no signup.",
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
    title: "Caregiver Burnout Self-Check | Free Educational Check-In",
    description:
      "Use an original educational check-in about energy, recovery, connection, patience, confidence, and meaning. Not a validated caregiver-burden instrument.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is caregiver burnout?",
    answer:
      "Caregiver burnout is a state of physical, emotional, and mental exhaustion that can develop when you spend a great deal of time caring for someone else, a parent with dementia, a spouse with a chronic illness, a child with special needs, or any loved one who requires ongoing support. It often develops gradually as the demands of caregiving outpace your ability to recover. Signs include chronic fatigue, resentment, withdrawal from your own life, and feeling like you have nothing left to give.",
  },
  {
    question: "How is caregiver burnout different from regular stress?",
    answer:
      "Caregiving stress can be brief or long-lasting. The term caregiver burnout is often used when sustained demands and limited recovery are accompanied by persistent exhaustion, detachment, irritability, or reduced capacity to manage the role. These experiences overlap with depression, anxiety, sleep problems, grief, and medical conditions, so a self-check cannot determine the cause.",
  },
  {
    question: "Is it normal to feel resentful or angry as a caregiver?",
    answer:
      "Resentment or anger can occur when caregiving demands exceed the time, support, or recovery available. Those feelings do not by themselves mean that you do not care about the person you support. If they are persistent, frightening, or affecting anyone's safety, step away when possible and seek help from a trusted person, respite resource, or qualified professional.",
  },
  {
    question: "What can I do about caregiver burnout?",
    answer:
      "The most important step is accepting that you cannot pour from an empty cup. Practical strategies include: accepting help from others (even when it's hard), scheduling regular respite time, joining a caregiver support group, speaking with a therapist who understands caregiver issues, exploring respite care services, and being honest with your doctor about your own health. The ARCH National Respite Network (archrespite.org) and the Caregiver Action Network (caregiveraction.org) are excellent starting points.",
  },
  {
    question: "When should a caregiver seek professional help?",
    answer:
      "Seek professional help if you are experiencing persistent depression or anxiety, thoughts of harming yourself or the person you care for, inability to perform basic self-care, or if your own health is deteriorating. These are signs that the caregiving situation has exceeded what one person can manage alone, and professional support, whether therapy, respite care, or a care team, is needed.",
  },
  {
    question: "Does this page use a validated caregiver-burden scale?",
    answer:
      "No. It does not administer the Zarit Burden Interview or another validated caregiver-burden instrument. It uses MindCheck Tools' original 15-item educational check-in about energy and recovery, connection and patience, and confidence and meaning. Its score bands are site-defined reflection ranges, not clinical cutoffs.",
  },
];

export default function CaregiverBurnoutAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Caregiver Burnout Educational Self-Check",
              description:
                "An original educational check-in for caregivers. Its site-defined score bands are not validated clinical cutoffs and cannot diagnose caregiver burnout.",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-08-02",
            }),
    }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...medicalWebPageJsonLd({
              name: "Caregiver Burnout Educational Self-Check",
              description: "Educational information about caregiver strain with an original, non-diagnostic self-check. The page does not administer a validated caregiver-burden scale.",
              url: TOOL_URL,
              lastReviewed: "2026-08-02",
            }),
    }),
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
              { name: "Burnout Educational Check-In", url: `${SITE_URL}/burnout-assessment-tool` },
              { name: "Caregiver Burnout Self-Check", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Original Educational Check-In
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
          Caregiver Burnout Self-Check
        </h1>

        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          This page does not administer the Zarit Burden Interview or another validated caregiver-burden scale. It uses MindCheck Tools&apos; original 15-item educational check-in. Its score bands were created for reflection and are not validated clinical cutoffs.
        </p>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You&apos;ve been showing up, for doctor&apos;s appointments, medication schedules,
            sleepless nights, difficult conversations. You&apos;ve rearranged your life around
            someone else&apos;s needs, often without anyone asking how <em>you</em> are doing.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Caregiver burnout is real, it&apos;s common, and it&apos;s not a sign that you
            don&apos;t love the person you care for. It&apos;s a sign that you&apos;ve been
            giving more than you&apos;ve been able to replenish.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            This educational check-in asks about energy and recovery, connection and patience,
            and confidence and meaning across a work or caregiving role. It is not tailored or validated specifically for caregivers and cannot determine a burnout level. The <a href="https://www.nia.nih.gov/health/caregiving" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 underline">National Institute on Aging</a> provides caregiver support and self-care resources. Your
            answers are scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        {/* The Tool */}
        <a href="#screening" className="btn-primary inline-flex mb-6">
          Start the caregiver burnout check-in
        </a>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 2, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="An original educational check-in about energy and recovery, connection and patience, and confidence and meaning. It is not a caregiver-specific clinical instrument."
          who="Family and professional caregivers who want to reflect on current role-related strain without receiving a diagnosis or a validated caregiver-burden score."
          bottomLine="The questions and score bands are site-defined and have not been clinically validated. They are not diagnostic cutoffs or a substitute for professional evaluation."
          lastUpdated="2026-08-02"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools
    </p>
    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
      <span>
        Published:{" "}
        <time dateTime="2025-01-01">
          {new Date("2025-01-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
      <span>
        Last reviewed:{" "}
        <time dateTime="2026-08-02">
          {new Date("2026-08-02T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>

      <section className="sr-only">
        <h2>What Is the Caregiver Burnout Educational Check-In?</h2>
        <h2>How Is the Caregiver Check-In Scored?</h2>
        <h2>What Does My Caregiver Check-In Summary Mean?</h2>
      </section>
<div id="screening"><BurnoutClient faqData={FAQ_DATA} embedded /></div>

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
              <strong>988</strong>, if you are in crisis
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong>{" "}
              <a href="tel:1-800-662-4357" className="font-bold">1-800-662-4357</a>, free referrals, 24/7
            </li>
            <li>
              <strong>Caregiver Action Network:</strong>{" "}
              <a href="https://www.caregiveraction.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline">caregiveraction.org</a>, education, peer support, and resources
            </li>
            <li>
              <strong>ARCH National Respite Network:</strong>{" "}
              <a href="https://archrespite.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline">archrespite.org</a>, find respite care in your area
            </li>
            <li>
              <strong>Eldercare Locator:</strong> <strong>1-800-677-1116</strong>, local services for older adults and their caregivers
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This check-in is for educational purposes only and is not a diagnosis. Its original
            questions and site-defined score bands have not been clinically validated. A qualified
            healthcare professional can evaluate persistent or concerning experiences. Your
            responses are processed entirely in your browser and are never stored or transmitted.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by Jason Ramirez, CADC-II. The questions and score ranges are original, site-defined educational content, not a validated clinical assessment.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: August 2, 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">
            General Burnout Check-In →
          </Link>
          <Link href="/compassion-fatigue-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            Compassion Fatigue Self-Check →
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
