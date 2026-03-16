import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PCL5Client } from "../pcl-5-ptsd-screening/PCL5Client";

const TOOL_URL = `${SITE_URL}/do-i-have-ptsd-quiz`;

export const metadata: Metadata = createMetadata({
  path: "/do-i-have-ptsd-quiz",
  title: "Do I Have PTSD? Free Quiz | PCL-5 Trauma Screening",
  description:
    "Wondering 'do I have PTSD?' Take our free, private PCL-5 quiz — the gold-standard PTSD screening tool used by the VA and clinicians worldwide. 20 questions, instant results.",
  keywords: [
    "do i have ptsd quiz", "do i have ptsd test", "ptsd quiz free",
    "ptsd self test", "ptsd symptoms quiz", "am i traumatized quiz",
    "ptsd test online free", "do i have ptsd", "ptsd screening quiz",
    "trauma symptoms quiz", "ptsd self-assessment", "free ptsd quiz",
    "ptsd checklist online", "pcl-5 quiz", "ptsd symptoms test",
    "trauma test free", "signs of ptsd quiz", "ptsd diagnosis quiz",
    "complex ptsd quiz", "ptsd online test",
  ],
  openGraph: {
    title: "Do I Have PTSD? Free Quiz | PCL-5 Trauma Screening",
    description:
      "Wondering if you have PTSD? Take our free, private PCL-5 quiz — the gold-standard used by the VA. 20 questions, instant results, no sign-up.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is PTSD and how does it develop?",
    answer:
      "Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event — such as combat, sexual assault, a serious accident, natural disaster, or the sudden death of a loved one. Not everyone who experiences trauma develops PTSD. Risk factors include the severity and duration of the trauma, lack of social support, prior trauma history, and biological factors. PTSD is not a sign of weakness — it is the brain's response to an overwhelming experience.",
  },
  {
    question: "What does this quiz measure?",
    answer:
      "This quiz uses the PCL-5 (PTSD Checklist for DSM-5), developed by the National Center for PTSD at the U.S. Department of Veterans Affairs. It is the gold-standard PTSD screening tool used in VA settings, clinical research, and primary care. The PCL-5 measures 20 PTSD symptoms across four clusters: intrusion (re-experiencing), avoidance, negative alterations in cognition and mood, and alterations in arousal and reactivity.",
  },
  {
    question: "What score suggests PTSD?",
    answer:
      "A total PCL-5 score of 31–33 or above is commonly used as a threshold for a probable PTSD diagnosis, though the optimal cutoff varies by population. The National Center for PTSD recommends a cutoff of 31–33 for primary care settings. However, scores should always be interpreted by a qualified clinician in the context of a full clinical interview.",
  },
  {
    question: "Can I have PTSD from emotional abuse or neglect?",
    answer:
      "Yes. While PTSD was originally associated with combat and acute physical trauma, research has established that emotional abuse, neglect, childhood adversity, and chronic interpersonal trauma can also cause PTSD — sometimes called Complex PTSD (C-PTSD). The PCL-5 measures symptoms regardless of the type of trauma. If your trauma was relational or prolonged, a clinician experienced in complex trauma is especially helpful.",
  },
  {
    question: "What should I do if my score is high?",
    answer:
      "A high score suggests significant PTSD symptoms that warrant professional evaluation. Effective treatments for PTSD include Prolonged Exposure (PE), Cognitive Processing Therapy (CPT), and EMDR (Eye Movement Desensitization and Reprocessing). These are evidence-based therapies with strong research support. If you are a veteran, the VA offers specialized PTSD treatment programs. If you are in crisis, contact the 988 Suicide and Crisis Lifeline by calling or texting 988.",
  },
  {
    question: "Is this quiz private?",
    answer:
      "Yes. Your answers are scored entirely in your browser. Nothing is sent to any server, stored in a database, or connected to your identity. There is no account, no login, and no way for anyone to see your results.",
  },
];

export default function DoIHavePTSDQuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Do I Have PTSD? Free Quiz | PCL-5 Trauma Screening",
              description:
                "A free, private PTSD quiz using the clinically validated PCL-5. 20 questions, instant results.",
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
              { name: "PCL-5 PTSD Screening", url: `${SITE_URL}/pcl-5-ptsd-screening` },
              { name: "Do I Have PTSD Quiz", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            VA Gold Standard (PCL-5)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            20 Questions · ~5 min
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 100% Private
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Do I Have PTSD? Free Quiz
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Something happened — and it won&apos;t stay in the past. Maybe you find yourself
            replaying it without wanting to. Maybe certain sounds, smells, or situations
            send you right back there. Maybe you&apos;ve been avoiding things that used to
            be normal, or feeling numb and disconnected from people you love.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            This free quiz uses the <strong>PCL-5</strong> — the gold-standard PTSD screening
            tool developed by the National Center for PTSD at the U.S. Department of Veterans
            Affairs. It&apos;s used in VA hospitals, primary care offices, and research
            settings worldwide.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Your answers are scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        {/* The Tool */}
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the PTSD Self-Assessment Quiz?</h2>
        <h2>How Is the PTSD Quiz Scored?</h2>
        <h2>What Do My PTSD Quiz Results Mean?</h2>
      </section>
<PCL5Client faqData={FAQ_DATA} />

        {/* PTSD Symptom Clusters */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            The Four PTSD Symptom Clusters
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                cluster: "Intrusion",
                color: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
                symptoms: ["Flashbacks", "Nightmares", "Intrusive memories", "Emotional distress at reminders", "Physical reactions to reminders"],
              },
              {
                cluster: "Avoidance",
                color: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
                symptoms: ["Avoiding trauma-related thoughts", "Avoiding trauma-related places, people, or situations"],
              },
              {
                cluster: "Negative Thoughts & Mood",
                color: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800",
                symptoms: ["Memory gaps about the trauma", "Negative beliefs about self or world", "Blame of self or others", "Persistent negative emotions", "Loss of interest", "Feeling detached", "Inability to feel positive emotions"],
              },
              {
                cluster: "Arousal & Reactivity",
                color: "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800",
                symptoms: ["Irritability or angry outbursts", "Reckless behavior", "Hypervigilance", "Exaggerated startle response", "Concentration problems", "Sleep disturbance"],
              },
            ].map((c) => (
              <div key={c.cluster} className={`border rounded-xl p-4 ${c.color}`}>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{c.cluster}</h3>
                <ul className="space-y-1">
                  {c.symptoms.map((s) => (
                    <li key={s} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                      <span className="mt-1 shrink-0">•</span>{s}
                    </li>
                  ))}
                </ul>
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
            Crisis Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <strong>988</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>Veterans Crisis Line:</strong> Call <strong>988, then press 1</strong> — or text 838255
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong>
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This quiz is for educational and informational purposes only — it is not a diagnosis.
            Only a licensed healthcare professional can diagnose PTSD. Your responses are
            processed entirely in your browser and are never stored or transmitted.
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
          <Link href="/pcl-5-ptsd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            PCL-5 PTSD Screening →
          </Link>
          <Link href="/pc-ptsd-5-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            PC-PTSD-5 Brief Screen →
          </Link>
          <Link href="/ptsd-test-veterans" className="text-sky-600 dark:text-sky-400 hover:underline">
            PTSD Test for Veterans →
          </Link>
          <Link href="/ptsd-test-first-responders" className="text-sky-600 dark:text-sky-400 hover:underline">
            PTSD Test for First Responders →
          </Link>
          <Link href="/blog/ptsd-screening-guide" className="text-sky-600 dark:text-sky-400 hover:underline">
            PTSD Screening Guide →
          </Link>
        </div>
      </div>
    </>
  );
}
