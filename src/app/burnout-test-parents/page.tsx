import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";

const TOOL_URL = `${SITE_URL}/burnout-test-parents`;

export const metadata: Metadata = createMetadata({
  path: "/burnout-test-parents",
  title: "Burnout Test for Parents — Free Assessment",
  description:
    "Free parental burnout assessment. Evaluate exhaustion, detachment, and overwhelm. Private results.",
  keywords: [
    "burnout test parents", "parental burnout assessment", "parent burnout quiz",
    "am i burned out parent", "parenting burnout test", "parental exhaustion screening",
    "mom burnout test", "dad burnout quiz", "parenting stress assessment",
    "parental burnout symptoms", "caregiver burnout parents", "parenting overwhelm test",
    "stay at home parent burnout", "working parent burnout", "free parental burnout test",
  ],
  openGraph: {
    title: "Burnout Test for Parents — Free Assessment",
    description: "Free, private parental burnout assessment. Evaluate exhaustion, detachment, and overwhelm with instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is parental burnout a real condition?",
    answer: "Yes. Parental burnout is a researched and clinically recognized condition distinct from general burnout or typical parenting stress. It was formally defined by researchers in 2017 and involves three core dimensions: overwhelming exhaustion related to parenting, emotional distancing from your children, and a sense of ineffectiveness as a parent. It is not laziness, ingratitude, or a character flaw.",
  },
  {
    question: "How is parental burnout different from just being tired?",
    answer: "Normal parenting fatigue comes and goes — a bad night, a tough week, a stressful phase. Parental burnout is chronic and pervasive. It involves feeling emotionally drained to the point where you have nothing left to give, feeling detached from your children (going through the motions without emotional presence), and losing your sense of identity as a parent. If rest does not restore you, that distinction matters.",
  },
  {
    question: "What causes parental burnout?",
    answer: "Parental burnout typically results from a chronic imbalance between parenting demands and available resources. Contributing factors include lack of support from a partner or community, perfectionist parenting expectations, financial stress, parenting a child with special needs or behavioral challenges, sleep deprivation, loss of personal identity outside of parenting, and the relentless nature of caregiving without adequate breaks.",
  },
  {
    question: "Can parental burnout affect my children?",
    answer: "Research shows that parental burnout can lead to increased emotional neglect and, in some cases, harsher parenting behaviors — not because parents are bad people, but because they are depleted beyond their capacity. Children of burned-out parents may experience more emotional and behavioral difficulties. This is not meant to add guilt — it is meant to underscore that addressing your burnout is also an act of care for your children.",
  },
  {
    question: "Does being burned out mean I am a bad parent?",
    answer: "No. Parental burnout most often affects parents who care deeply about doing a good job. The exhaustion comes precisely because you have been giving everything you have. Burnout is not a reflection of how much you love your children — it is a reflection of how much you have been carrying without enough support. Acknowledging burnout is responsible parenting, not a failure of it.",
  },
  {
    question: "How can I reduce parental burnout?",
    answer: "Start by identifying one area where you can reduce demands or increase support. This might mean lowering standards on housework, asking for help from family or friends, arranging childcare even for a few hours weekly, or letting go of extracurricular schedules that serve expectations more than joy. Professional support — therapy, parenting groups, or coaching — can help you develop sustainable strategies without guilt.",
  },
  {
    question: "When should I seek professional help for parental burnout?",
    answer: "Seek help if you feel chronically exhausted despite adequate sleep, feel emotionally disconnected from your children, dread the daily routine of parenting, notice yourself becoming harsher or more withdrawn than you want to be, or feel like you have lost yourself entirely to the parenting role. A therapist familiar with parental burnout can help — and seeking help is not selfish, it is necessary.",
  },
  {
    question: "Is parental burnout more common in certain parents?",
    answer: "Research shows parental burnout can affect any parent, but certain factors increase risk: single parenting, parenting without extended family support, having a child with special needs or chronic illness, high perfectionism around parenting, financial stress, and lack of childcare resources. Both mothers and fathers experience parental burnout, though mothers report it more frequently, likely due to disproportionate caregiving responsibilities.",
  },
];

export default function BurnoutTestParentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Burnout Test for Parents — Free Assessment",
              description: "A free, private parental burnout assessment tool evaluating exhaustion, detachment, and overwhelm in parents.",
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
              { name: "Burnout Assessment Tool", url: `${SITE_URL}/burnout-assessment-tool` },
              { name: "Burnout Test for Parents", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Informed
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
            Parents &amp; Caregivers
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Burnout Test for Parents
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You love your children. That has never been the question. The question is why
            you feel so empty. Why the sound of &quot;Mom&quot; or &quot;Dad&quot; being called
            for the hundredth time today makes something inside you shut down instead of
            respond. Why you go through bedtime routines on autopilot, feeling more like a
            machine than a parent. Why you hide in the bathroom for five minutes of silence
            and feel guilty about needing even that. You&apos;re not ungrateful. You&apos;re
            not a bad parent. You&apos;re burned out — and you&apos;re far from alone.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Parental burnout affects an estimated 5-20% of parents and is distinct from
            everyday parenting fatigue. It involves chronic exhaustion that rest cannot fix,
            emotional detachment from your children, and a loss of fulfillment in the
            parenting role. This free, private assessment can help you understand what
            you&apos;re experiencing. It is <strong>not a diagnosis</strong>, but it can
            help you take yourself seriously — because you deserve the same care you give
            everyone else.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold text-base hover:bg-rose-700 transition-colors shadow-sm"
          >
            Start the Burnout Assessment
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
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">5–20% of parents</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Research estimates that 5–20% of parents meet criteria for parental burnout at
                any given time. The range reflects cultural, economic, and support system
                differences — but the condition exists across all demographics.
                <span className="text-slate-500 dark:text-slate-400"> — Clinical Psychological Science</span>
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">Distinct from general burnout</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Parental burnout is a specific condition — not just workplace burnout that
                happens to parents. It involves exhaustion, emotional distancing, and loss of
                parental fulfillment specifically tied to the caregiving role.
                <span className="text-slate-500 dark:text-slate-400"> — Frontiers in Psychology</span>
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">The guilt cycle</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Burned-out parents often feel intense guilt about their exhaustion, which
                increases stress, which deepens burnout. Breaking this cycle requires
                recognizing that burnout is a signal to change something — not evidence
                that you are failing.
                <span className="text-slate-500 dark:text-slate-400"> — Journal of Child and Family Studies</span>
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
                This assessment evaluates core dimensions of burnout that are relevant to the
                parenting experience: exhaustion, detachment, and reduced sense of
                accomplishment.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Perfectionism and parenting:</strong> Social media, parenting books, and cultural expectations create an impossible standard. When you believe you should be endlessly patient, creatively stimulating, emotionally available, and professionally successful — all at once — burnout is almost inevitable. Letting go of the &quot;perfect parent&quot; ideal is not giving up. It is survival.</p>
                <p><strong>Lack of support:</strong> Parental burnout is strongly linked to insufficient support — from partners, extended family, friends, or community resources. Parenting was never meant to be done in isolation. If you are doing it largely alone, your exhaustion makes complete sense.</p>
                <p><strong>Single parenting:</strong> Single parents face significantly higher burnout risk because every responsibility falls on one person with minimal or no daily relief. The constant nature of solo caregiving — no one to hand off to, no one to share the mental load with — creates chronic depletion.</p>
                <p><strong>Special needs parenting:</strong> Parents of children with disabilities, chronic illness, or behavioral challenges face additional demands that compound burnout risk. The advocacy, appointments, therapies, and emotional labor involved go far beyond typical parenting.</p>
                <p><strong>Financial stress:</strong> Money worries amplify every other parenting stressor. When you are worried about paying for childcare, food, housing, or medical care, there is less emotional bandwidth available for everything else.</p>
                <p><strong>Self-care without guilt:</strong> Self-care for parents is not spa days and bubble baths — it is basic human needs. Sleep, time alone, adult conversation, physical movement, and mental health support are not luxuries. They are requirements for sustainable parenting.</p>
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
            Take the Burnout Assessment
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how you&apos;ve been feeling about your role as a parent.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Parental Burnout Screening?</h2>
        <h2>How Is the Parental Burnout Test Scored?</h2>
        <h2>What Do My Parental Burnout Results Mean?</h2>
      </section>
<BurnoutClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Lower one standard this week</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Pick one thing that does not actually matter as much as it feels like it does.
                The house does not need to be spotless. Dinner can be cereal. The kids can
                watch an extra show while you sit in silence for 20 minutes. You cannot pour
                from an empty cup — and lowering one expectation is not failure, it&apos;s
                triage.
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Ask for one specific help</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Vague requests (&quot;I need help&quot;) are hard for others to act on. Specific
                requests work better: &quot;Can you take the kids Saturday morning so I can
                sleep in?&quot; or &quot;Can you handle bedtime tonight?&quot; If you do not
                have a partner to ask, reach out to a friend, neighbor, or family member.
                Most people want to help — they just do not know how.
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to a therapist</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A therapist who understands parental burnout can help you identify what is
                driving your exhaustion and develop sustainable changes. Many offer telehealth
                sessions that fit around childcare schedules. If cost is a barrier, ask about
                sliding scale fees or check whether your insurance covers mental health visits.
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
            This assessment tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess burnout or related conditions. Your responses are processed
            entirely in your browser and are never stored or transmitted. Always consult a qualified
            healthcare professional for medical advice.
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
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">
            Burnout Assessment Tool →
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
