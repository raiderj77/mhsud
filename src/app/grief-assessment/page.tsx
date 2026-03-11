import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";

const TOOL_URL = `${SITE_URL}/grief-assessment`;

export const metadata: Metadata = createMetadata({
  path: "/grief-assessment",
  title: "Grief Assessment | Free Screening for Complicated Grief & Loss",
  description:
    "Free grief assessment to check if your grief has become complicated or prolonged. Uses the PHQ-9 to screen for grief-related depression. Private, instant results, no sign-up.",
  keywords: [
    "grief assessment", "grief assessment free", "complicated grief test",
    "prolonged grief disorder test", "grief screening", "grief quiz",
    "am i grieving normally", "grief self assessment", "grief test online",
    "complicated grief quiz", "grief depression test", "loss and grief assessment",
    "grief mental health test", "free grief assessment", "grief screening tool",
    "prolonged grief assessment", "grief disorder quiz", "grief and depression test",
    "grief self-check", "bereavement assessment",
  ],
  openGraph: {
    title: "Grief Assessment | Free Screening for Complicated Grief & Loss",
    description:
      "Free grief assessment to check if your grief has become complicated or prolonged. Private, instant results, no sign-up.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the difference between normal grief and complicated grief?",
    answer:
      "Normal grief is a natural, painful response to loss that evolves over time. While there is no set timeline, most people find that grief — though it never fully disappears — becomes less acute and more integrated over months to years. Complicated grief (also called Prolonged Grief Disorder, or PGD) is characterized by grief that remains intensely debilitating beyond 12 months after the loss (6 months for children), with persistent yearning, difficulty accepting the loss, bitterness, and inability to engage in life. PGD affects approximately 10–15% of bereaved people.",
  },
  {
    question: "How do I know if my grief is 'normal'?",
    answer:
      "There is no single timeline for grief. Factors that suggest grief may have become complicated include: inability to accept the reality of the loss even months later, persistent inability to engage in normal activities or relationships, intense longing that doesn't diminish over time, feeling that life is meaningless without the person, bitterness or anger that doesn't ease, and avoiding reminders of the person to a degree that interferes with daily life. If grief is significantly impairing your functioning more than a year after the loss, it's worth speaking with a grief-informed therapist.",
  },
  {
    question: "Can grief cause depression?",
    answer:
      "Yes. Grief and depression share many symptoms — sadness, sleep changes, appetite changes, difficulty concentrating, loss of interest. However, they are distinct conditions. Grief is typically focused on the loss and includes waves of intense longing, while depression is more pervasive. Grief can also trigger a major depressive episode, especially in those with a history of depression. The PHQ-9 used in this assessment screens for depression symptoms that may be grief-related or co-occurring with grief.",
  },
  {
    question: "Is there treatment for complicated grief?",
    answer:
      "Yes. Complicated Grief Treatment (CGT), developed by Dr. Katherine Shear at Columbia University, is a specialized therapy with strong evidence for Prolonged Grief Disorder. It combines elements of cognitive-behavioral therapy and interpersonal therapy with grief-specific techniques. Standard CBT and interpersonal therapy are also effective. Medication may help with co-occurring depression or anxiety. The Center for Complicated Grief (complicatedgrief.columbia.edu) offers resources and a therapist directory.",
  },
  {
    question: "Can grief affect physical health?",
    answer:
      "Yes. Grief is associated with increased risk of cardiovascular events (the 'broken heart' effect is real — risk of heart attack increases significantly in the days after a major loss), immune suppression, sleep disruption, and increased mortality in older adults. These effects are most pronounced in the first year after bereavement and in cases of complicated grief. Taking care of your physical health during grief — sleep, nutrition, medical appointments — is not optional.",
  },
];

export default function GriefAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Grief Assessment | Free Screening for Complicated Grief & Loss",
              description:
                "A free, private grief assessment screening for complicated or prolonged grief using the PHQ-9.",
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
              { name: "Grief Assessment", url: TOOL_URL },
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-900/40 dark:text-slate-300">
            Loss &amp; Bereavement
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 100% Private
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Grief Assessment
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Grief is not something you get over. It&apos;s something you carry — and over time,
            for most people, it becomes lighter. But sometimes grief doesn&apos;t ease. It
            stays as raw and consuming as the day it began, or it quietly hollows out your
            life until you realize you&apos;ve stopped living it.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            This free assessment uses the PHQ-9 to screen for depression symptoms that
            commonly accompany grief — and that, when persistent, may indicate complicated
            or prolonged grief disorder. It won&apos;t measure the depth of your love or
            the magnitude of your loss. But it can help you understand whether what you&apos;re
            experiencing may benefit from professional support.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Your answers are scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        {/* The Tool */}
        <PHQ9Client faqData={FAQ_DATA} />

        {/* Grief Warning Signs */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Signs That Grief May Have Become Complicated
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Intense longing that hasn't eased after many months",
              "Difficulty accepting that the person is gone",
              "Feeling that life is meaningless without them",
              "Bitterness or anger that doesn't diminish",
              "Avoiding reminders to the point of isolation",
              "Inability to trust others since the loss",
              "Feeling emotionally numb or detached from life",
              "Difficulty engaging in normal activities or relationships",
              "Feeling that a part of yourself died with them",
              "Thoughts that you cannot or should not move forward",
            ].map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-4 py-3"
              >
                <span className="text-slate-500 dark:text-slate-400 mt-0.5 shrink-0">•</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{sign}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 italic">
            Prolonged Grief Disorder (PGD) is diagnosed when these symptoms persist at a
            clinically significant level for more than 12 months after the loss (6 months
            for children). It affects approximately 10–15% of bereaved people.
          </p>
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
              <strong>988</strong> — if grief has brought thoughts of suicide
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong>
            </li>
            <li>
              <strong>GriefShare:</strong>{" "}
              <strong>griefshare.org</strong> — grief support groups nationwide
            </li>
            <li>
              <strong>Center for Complicated Grief:</strong>{" "}
              <strong>complicatedgrief.columbia.edu</strong> — specialized treatment resources
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This assessment is for educational purposes only — it is not a diagnosis. Only a
            licensed healthcare professional can diagnose complicated grief or related conditions.
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
          <Link href="/am-i-depressed-quiz" className="text-sky-600 dark:text-sky-400 hover:underline">
            Am I Depressed Quiz →
          </Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/sleep-and-mood-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Sleep &amp; Mood Check →
          </Link>
          <Link href="/safety-plan" className="text-sky-600 dark:text-sky-400 hover:underline">
            Safety Plan Builder →
          </Link>
        </div>
      </div>
    </>
  );
}
