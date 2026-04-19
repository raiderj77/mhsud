import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";
import { AUDITClient } from "../audit-alcohol-test/AUDITClient";

const TOOL_URL = `${SITE_URL}/am-i-an-alcoholic-quiz`;


export const metadata: Metadata = createMetadata({
  path: "/am-i-an-alcoholic-quiz",
  title: "Am I an Alcoholic? Free Quiz | WHO AUDIT Alcohol Screening",
  description:
    "Wondering 'am I an alcoholic?' Take our free, private WHO AUDIT quiz — the gold-standard alcohol screening tool used worldwide. 10 questions, honest results, no sign-up.",
  keywords: [
    "am i an alcoholic quiz", "am i an alcoholic test", "alcoholic quiz free",
    "do i have a drinking problem quiz", "am i drinking too much quiz",
    "alcohol use disorder test", "alcoholism self test", "am i alcoholic",
    "drinking problem quiz", "alcohol dependency test", "am i addicted to alcohol quiz",
    "free alcoholic quiz", "alcohol screening quiz", "audit alcohol test",
    "am i an alcoholic online test", "signs of alcoholism quiz",
    "alcohol abuse test free", "do i drink too much quiz",
    "alcohol use disorder quiz", "problem drinking quiz",
  ],
  openGraph: {
    title: "Am I an Alcoholic? Free Quiz | WHO AUDIT Alcohol Screening",
    description:
      "Wondering if you have a drinking problem? Take our free, private WHO AUDIT quiz. 10 questions, honest results, no sign-up required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What's the difference between heavy drinking and alcoholism?",
    answer:
      "Heavy drinking refers to consuming more than recommended limits (more than 14 drinks per week or 4 per occasion for men; 7 per week or 3 per occasion for women). Alcohol Use Disorder (AUD) — what's commonly called alcoholism — is a medical diagnosis that involves a pattern of alcohol use causing significant impairment or distress, including loss of control, cravings, continued use despite consequences, and physical dependence. Heavy drinking increases the risk of developing AUD, but not all heavy drinkers have AUD.",
  },
  {
    question: "What does this quiz measure?",
    answer:
      "This quiz uses the AUDIT (Alcohol Use Disorders Identification Test), developed by the World Health Organization (WHO). It is the most widely validated alcohol screening tool in the world, used in primary care, emergency departments, and research settings globally. The AUDIT measures alcohol consumption, drinking behavior, and alcohol-related problems over the past year. Scores range from 0 to 40.",
  },
  {
    question: "What do the AUDIT scores mean?",
    answer:
      "Scores are interpreted as: 0–7 (low risk), 8–15 (hazardous use — consider reducing), 16–19 (harmful use — consider counseling), 20+ (possible dependence — professional evaluation recommended). The AUDIT is a screening tool, not a diagnosis. A score of 8 or above suggests that alcohol use may be affecting your health and is worth discussing with a healthcare provider.",
  },
  {
    question: "Can I have a drinking problem without being 'an alcoholic'?",
    answer:
      "Yes. The term 'alcoholic' is not a clinical diagnosis. The medical diagnosis is Alcohol Use Disorder (AUD), which exists on a spectrum from mild to moderate to severe. Many people have problematic drinking patterns — drinking more than intended, using alcohol to cope with stress, experiencing consequences — without meeting criteria for severe AUD. Any level of AUD is worth addressing, and earlier intervention leads to better outcomes.",
  },
  {
    question: "What should I do if my score is high?",
    answer:
      "A score of 8 or above suggests your drinking may be affecting your health. Consider speaking with your primary care doctor, who can provide a confidential assessment and discuss options. Effective treatments include brief counseling, motivational interviewing, cognitive-behavioral therapy, medications (naltrexone, acamprosate, disulfiram), and peer support programs like AA or SMART Recovery. You don't have to be at rock bottom to get help.",
  },
  {
    question: "Is this quiz private?",
    answer:
      "Yes. Your answers are scored entirely in your browser. Nothing is sent to any server, stored in a database, or connected to your identity. There is no account, no login, and no way for anyone to see your results.",
  },
];

export default function AmIAnAlcoholicQuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Am I an Alcoholic? Free Quiz | WHO AUDIT Alcohol Screening",
              description:
                "A free, private alcohol quiz using the WHO AUDIT — the gold-standard alcohol screening tool. 10 questions, honest results.",
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
              { name: "AUDIT Alcohol Test", url: `${SITE_URL}/audit-alcohol-test` },
              { name: "Am I an Alcoholic Quiz", url: TOOL_URL },
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            10 Questions · ~3 min
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 100% Private
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Am I an Alcoholic? Free Quiz
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Most people who wonder &quot;am I an alcoholic?&quot; are asking because something
            has shifted — maybe you&apos;re drinking more than you planned to, or you&apos;ve
            noticed you reach for a drink when you&apos;re stressed, or someone close to you
            has said something. That question takes courage to ask.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            This free quiz uses the <strong>AUDIT</strong> (Alcohol Use Disorders Identification
            Test) — the gold-standard alcohol screening tool developed by the World Health
            Organization, used in primary care offices and hospitals worldwide. It gives you
            an honest, evidence-based picture of your relationship with alcohol.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Your answers are scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        {/* The Tool */}
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The WHO AUDIT screening presented in a direct, accessible format to help you evaluate your relationship with alcohol."
          who="Anyone asking themselves whether their drinking has become a problem and wanting an honest, evidence-based check."
          bottomLine="Alcohol use disorder exists on a spectrum — your score shows where you fall on validated clinical measures. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>
      <section className="sr-only">
        <h2>What Is the Alcohol Self-Assessment Quiz?</h2>
        <h2>How Is the Alcohol Quiz Scored?</h2>
        <h2>What Do My Alcohol Quiz Results Mean?</h2>
      </section>
<AUDITClient faqData={FAQ_DATA} />

        {/* Warning Signs Section */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Warning Signs of a Drinking Problem
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Drinking more or longer than you intended",
              "Trying to cut down but not being able to",
              "Spending a lot of time drinking or recovering",
              "Craving alcohol when you're not drinking",
              "Drinking interfering with work, family, or responsibilities",
              "Continuing to drink despite relationship problems it causes",
              "Giving up activities you used to enjoy to drink",
              "Drinking in situations where it's physically dangerous",
              "Continuing to drink despite health problems",
              "Needing more alcohol to feel the same effect (tolerance)",
              "Experiencing withdrawal symptoms when you stop",
              "Drinking to relieve or avoid withdrawal symptoms",
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
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 italic">
            Experiencing 2–3 of these symptoms suggests mild Alcohol Use Disorder; 4–5 suggests
            moderate; 6 or more suggests severe AUD. Any level is worth addressing.
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
              <strong>SAMHSA National Helpline:</strong>{" "}
              <strong>1-800-662-4357</strong> — free, confidential, 24/7 treatment referrals
            </li>
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <strong>988</strong> — if alcohol use is connected to thoughts of self-harm
            </li>
            <li>
              <strong>Alcoholics Anonymous:</strong>{" "}
              <strong>aa.org</strong> — find local meetings
            </li>
            <li>
              <strong>SMART Recovery:</strong>{" "}
              <strong>smartrecovery.org</strong> — science-based alternative to AA
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This quiz is for educational and informational purposes only — it is not a diagnosis.
            Only a licensed healthcare professional can diagnose Alcohol Use Disorder. Your
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
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            Full AUDIT Alcohol Test →
          </Link>
          <Link href="/audit-c-alcohol-screen" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT-C Quick Screen (3 Questions) →
          </Link>
          <Link href="/cage-aid-substance-abuse-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            CAGE-AID Substance Screen →
          </Link>
          <Link href="/sobriety-calculator" className="text-sky-600 dark:text-sky-400 hover:underline">
            Sobriety Calculator →
          </Link>
          <Link href="/blog/audit-guide" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT Score Guide →
          </Link>
        </div>
      </div>
    </>
  );
}
