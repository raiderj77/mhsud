import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/compassion-fatigue-test`;

export const metadata: Metadata = createMetadata({
  path: "/compassion-fatigue-test",
  title: "Compassion Fatigue Test | Free Self-Assessment for Helpers & Caregivers",
  description:
    "Free compassion fatigue test for nurses, therapists, social workers, first responders, and family caregivers. Assess emotional exhaustion from helping others. Private, instant results.",
  keywords: [
    "compassion fatigue test", "compassion fatigue quiz", "compassion fatigue assessment",
    "compassion fatigue screening", "compassion fatigue self test", "do i have compassion fatigue",
    "compassion fatigue nurses", "compassion fatigue therapists", "compassion fatigue social workers",
    "compassion fatigue first responders", "secondary traumatic stress test",
    "vicarious trauma test", "helper burnout test", "caregiver compassion fatigue",
    "compassion fatigue symptoms quiz", "free compassion fatigue test",
    "compassion satisfaction test", "compassion fatigue scale online",
    "compassion fatigue healthcare workers", "burnout vs compassion fatigue",
  ],
  openGraph: {
    title: "Compassion Fatigue Test | Free Self-Assessment for Helpers & Caregivers",
    description:
      "Free compassion fatigue test for nurses, therapists, social workers, and caregivers. Assess emotional exhaustion from helping others. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is compassion fatigue?",
    answer:
      "Compassion fatigue is a form of emotional and physical exhaustion that results from the cumulative cost of caring for others who are suffering. Unlike burnout, which develops from general workplace stress, compassion fatigue is specifically linked to empathic engagement with others' pain, trauma, or distress. It is common among nurses, therapists, social workers, first responders, hospice workers, and family caregivers. Signs include emotional numbness, reduced empathy, intrusive thoughts about clients or patients, and a diminished sense of purpose.",
  },
  {
    question: "What's the difference between compassion fatigue and burnout?",
    answer:
      "Burnout develops from chronic workplace stress — overwork, lack of control, insufficient reward. Compassion fatigue is specifically caused by the emotional cost of empathizing with others' suffering. You can experience both simultaneously. Burnout tends to develop slowly; compassion fatigue can develop more rapidly after exposure to traumatic material. Both are serious and both are treatable.",
  },
  {
    question: "Who is most at risk for compassion fatigue?",
    answer:
      "Anyone in a helping role is at risk, but particularly: emergency nurses and physicians, mental health therapists and counselors, social workers, hospice and palliative care workers, paramedics and first responders, child protective services workers, trauma surgeons, and family caregivers of seriously ill loved ones. High caseloads, inadequate supervision, lack of organizational support, and personal trauma history all increase risk.",
  },
  {
    question: "What does this assessment measure?",
    answer:
      "This assessment uses a validated burnout scale measuring the three core dimensions most associated with compassion fatigue: emotional exhaustion (feeling depleted by your work with others), depersonalization (emotional distancing or cynicism as a protective response), and reduced personal accomplishment (feeling ineffective or questioning the value of your work). These dimensions overlap significantly with compassion fatigue as defined by Figley and Stamm's ProQOL model.",
  },
  {
    question: "What can I do about compassion fatigue?",
    answer:
      "Effective strategies include: regular clinical supervision or peer consultation, setting clear professional boundaries, building in recovery time between difficult cases, trauma-informed self-care practices, therapy (especially trauma-focused approaches), reducing caseload where possible, and organizational advocacy for better support structures. The Compassion Fatigue Awareness Project (compassionfatigue.org) offers resources specifically for helpers.",
  },
];

export default function CompassionFatigueTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Compassion Fatigue Test | Free Self-Assessment for Helpers & Caregivers",
              description:
                "A free, private compassion fatigue assessment for nurses, therapists, social workers, and caregivers.",
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
              { name: "Compassion Fatigue Test", url: TOOL_URL },
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
            Helpers &amp; Caregivers
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 100% Private
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Compassion Fatigue Test
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You chose this work because you care. But somewhere along the way, the caring
            started to cost more than it used to. Maybe you find yourself going through the
            motions. Maybe the stories that used to move you now feel like weight. Maybe
            you&apos;re tired in a way that a weekend off doesn&apos;t fix.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Compassion fatigue is the occupational hazard of empathy — and it&apos;s
            especially common among nurses, therapists, social workers, first responders,
            and family caregivers. It&apos;s not weakness. It&apos;s what happens when you
            absorb others&apos; pain without enough recovery.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            This free assessment checks for the core dimensions of compassion fatigue and
            burnout. Your answers are scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        {/* The Tool */}
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A compassion fatigue screening that measures the emotional cost of caring for others in distress, combining burnout and secondary trauma."
          who="Helping professionals, caregivers, and anyone in a caring role who feels emotionally drained by others' suffering."
          bottomLine="Compassion fatigue is an occupational hazard of caring — early recognition prevents deeper burnout. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>

      <section className="sr-only">
        <h2>What Is the Compassion Fatigue Test?</h2>
        <h2>How Is the Compassion Fatigue Test Scored?</h2>
        <h2>What Do My Compassion Fatigue Results Mean?</h2>
      </section>
<BurnoutClient faqData={FAQ_DATA} />

        {/* Compassion Fatigue vs Burnout Table */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Compassion Fatigue vs. Burnout
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tl-lg">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Compassion Fatigue</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tr-lg">Burnout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Cause</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Empathic engagement with others&apos; trauma</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Chronic workplace stress and overload</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Onset</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Can develop rapidly</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Develops gradually over time</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Key symptom</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Reduced empathy, intrusive thoughts</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Cynicism, detachment, exhaustion</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Who is affected</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Helpers, caregivers, trauma workers</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Anyone in a demanding job</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Treatment</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Supervision, trauma processing, boundaries</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Rest, workload reduction, systemic change</td>
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
            Crisis Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <strong>988</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong>{" "}
              <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This assessment is for educational purposes only — it is not a diagnosis. Only a
            qualified healthcare professional can assess compassion fatigue or related conditions.
            Your responses are processed entirely in your browser and are never stored or transmitted.
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
          <Link href="/caregiver-burnout-assessment" className="text-sky-600 dark:text-sky-400 hover:underline">
            Caregiver Burnout Assessment →
          </Link>
          <Link href="/burnout-test-for-nurses" className="text-sky-600 dark:text-sky-400 hover:underline">
            Burnout Test for Nurses →
          </Link>
          <Link href="/burnout-test-for-healthcare-workers" className="text-sky-600 dark:text-sky-400 hover:underline">
            Healthcare Worker Burnout →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
        </div>
      </div>
    </>
  );
}
