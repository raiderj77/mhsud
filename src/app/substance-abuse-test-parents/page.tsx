import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CAGEAIDClient } from "../cage-aid-substance-abuse-screening/CAGEAIDClient";

const TOOL_URL = `${SITE_URL}/substance-abuse-test-parents`;

export const metadata: Metadata = createMetadata({
  path: "/substance-abuse-test-parents",
  title: "Substance Abuse Test for Parents — Free Screen",
  description:
    "Free substance use screening for parents. CAGE-AID assessment. Private, instant results.",
  keywords: [
    "substance abuse test parents", "parent substance use screening", "cage-aid parents",
    "parent alcoholism test", "am i drinking too much parent", "parent addiction screening",
    "parenting and substance use", "parent alcohol test", "parent drug screening",
    "mom drinking too much", "dad substance use", "parent substance abuse assessment",
    "free parent substance test", "parenting and alcohol", "parent addiction test",
  ],
  openGraph: {
    title: "Substance Abuse Test for Parents — Free Screen",
    description: "Free, private substance use screening for parents using the CAGE-AID assessment. Instant results, no sign-up required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How does parental substance use affect children?",
    answer: "Children of parents with substance use disorders face significantly higher risks for emotional, behavioral, and developmental challenges. Research on Adverse Childhood Experiences (ACEs) consistently shows that parental substance use is one of the most impactful childhood adversities. Children may experience anxiety, confusion, inconsistent parenting, role reversal, and difficulty trusting others. This is not meant to add guilt — it is meant to underscore why getting help matters so much.",
  },
  {
    question: "Will I lose custody of my children if I seek help?",
    answer: "Voluntarily seeking help for substance use is generally viewed positively by courts and child protective services — not as a reason to remove children. In fact, proactively addressing substance use demonstrates responsible parenting. Courts are far more concerned about untreated substance use that puts children at risk. Family treatment courts and many programs are specifically designed to keep families together while parents get help.",
  },
  {
    question: "Is a glass of wine every night a problem?",
    answer: "A nightly glass of wine is culturally normalized, especially among parents, but whether it is a problem depends on the pattern. Questions to consider: Has one glass become two or three? Do you feel anxious or irritable if you cannot have it? Are you drinking to cope with stress rather than for enjoyment? Is it affecting your sleep, patience, or presence with your children? If you are asking this question, it is worth exploring honestly.",
  },
  {
    question: "Can prescription medications become an addiction?",
    answer: "Yes. Prescription medications — particularly opioid pain relievers, benzodiazepines (anxiety medications), and stimulants — can lead to physical dependence and substance use disorders, even when taken as prescribed. Parents may be especially vulnerable after surgeries, injuries, or when managing chronic pain or anxiety. If you find yourself taking more than prescribed, running out early, or feeling unable to function without the medication, it is important to talk to your prescriber.",
  },
  {
    question: "How do I find treatment as a parent?",
    answer: "Many treatment programs are designed specifically for parents and offer childcare assistance, flexible scheduling, and family-inclusive therapy. SAMHSA maintains a free treatment locator at findtreatment.gov or by calling 1-800-662-4357. When calling, ask specifically about programs for parents or programs that accommodate families. Outpatient treatment is often the first step, allowing you to continue caring for your children while getting help.",
  },
  {
    question: "Are there family-friendly treatment programs?",
    answer: "Yes. Family-friendly treatment programs are growing across the country. Some residential programs allow children to stay with parents during treatment. Many outpatient programs offer evening and weekend hours, telehealth options, and integrated family therapy. Some programs specifically address parenting skills alongside substance use recovery. Ask your local SAMHSA helpline (1-800-662-4357) about family-accommodating options in your area.",
  },
  {
    question: "What is the CAGE-AID screening tool?",
    answer: "The CAGE-AID (Cut down, Annoyed, Guilty, Eye-opener — Adapted to Include Drugs) is a brief, clinically validated screening tool that assesses patterns of alcohol and drug use. It asks four straightforward questions about whether you have felt the need to cut down, been annoyed by criticism of your use, felt guilty, or needed a substance first thing in the morning. It is designed to identify patterns that may warrant further evaluation.",
  },
  {
    question: "How accurate is the CAGE-AID?",
    answer: "The CAGE-AID is a well-validated screening tool with good sensitivity for identifying substance use disorders. However, like all screening tools, it is a starting point — not a definitive assessment. A positive screen means further evaluation with a healthcare professional is recommended. A negative screen does not guarantee there is no problem, especially if you are concerned about your use. Trust your instincts alongside the results.",
  },
];

export default function SubstanceAbuseTestParentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Substance Abuse Test for Parents — Free CAGE-AID Screening",
              description: "A free, private substance use screening tool for parents using the clinically validated CAGE-AID assessment.",
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
              { name: "CAGE-AID Substance Abuse Screening", url: `${SITE_URL}/cage-aid-substance-abuse-screening` },
              { name: "Substance Abuse Test for Parents", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (CAGE-AID)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
            Parents &amp; Caregivers
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Substance Abuse Test for Parents
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Being a parent is relentless — the pressure to provide, to be patient, to hold it
            all together when you&apos;re barely holding yourself. If a drink at the end of the
            day has become the only thing getting you through, or if you&apos;ve started wondering
            whether your use of alcohol, prescriptions, or other substances has crossed a line,
            you are not a bad parent for asking. You are a parent who cares enough to look honestly
            at something most people avoid.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free, private screening uses the CAGE-AID, a brief tool used by healthcare
            professionals to identify substance use patterns that may need attention. It is{" "}
            <strong>not a diagnosis</strong>, and no one will see your answers — not your family,
            not child services, not anyone. Everything stays in your browser. This is a private
            moment of honesty with yourself, for yourself and your family.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold text-base hover:bg-emerald-700 transition-colors shadow-sm"
          >
            Start the Substance Use Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 2 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">1 in 8 children</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Approximately 1 in 8 children in the United States lives with a parent who has a
                substance use disorder. These children face higher risks for anxiety, depression,
                and substance use themselves.
                <span className="text-slate-500 dark:text-slate-400"> — SAMHSA</span>
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">Generational cycles</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Children of parents with substance use disorders are 2 to 4 times more likely to
                develop substance use disorders themselves. Breaking this cycle is one of the most
                powerful things a parent can do — for themselves and their children.
                <span className="text-slate-500 dark:text-slate-400"> — American Academy of Child &amp; Adolescent Psychiatry</span>
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">ACEs connection</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Parental substance use is one of the original Adverse Childhood Experiences (ACEs)
                identified by the landmark CDC-Kaiser study. Higher ACE scores are linked to
                increased risk of chronic disease, mental illness, and substance use across a
                lifetime. Addressing your substance use reduces your children&apos;s ACE exposure.
                <span className="text-slate-500 dark:text-slate-400"> — CDC</span>
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
                This screening uses the <strong>CAGE-AID</strong> (Cut down, Annoyed, Guilty,
                Eye-opener — Adapted to Include Drugs), a brief tool used in medical offices
                and clinical settings worldwide.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Four key questions:</strong> The CAGE-AID asks whether you have felt the need to cut down, been annoyed by others&apos; comments about your use, felt guilty, or needed a substance first thing in the morning. These patterns are more revealing than how much or how often you use.</p>
                <p><strong>Alcohol and drugs:</strong> Unlike some tools that only screen for alcohol, the CAGE-AID covers all substances — including prescription medications, which are an increasingly common concern for parents managing pain, anxiety, or sleep issues.</p>
                <p><strong>Wine culture and normalization:</strong> Our culture normalizes parental drinking — &quot;mommy wine culture,&quot; &quot;dad needs a beer&quot; — making it harder to see when use has become a problem. This screening cuts through that noise.</p>
                <p><strong>What it&apos;s not:</strong> This is a screening tool, not a judgment on your parenting. A positive screen means it is worth having a conversation with a professional — not that you are a bad parent.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is stored, transmitted, or visible to child protective services, your family, or anyone else.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the CAGE-AID Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question honestly based on your experience with alcohol or drugs.
          </p>
        </div>
        <CAGEAIDClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to your doctor</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Your primary care doctor can discuss your screening results, evaluate your substance
                use in the context of your overall health, and connect you with appropriate resources.
                Doctor-patient confidentiality protects these conversations. You do not have to have
                a crisis to bring this up.
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">SAMHSA treatment locator</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Call <strong>1-800-662-4357</strong> (free, 24/7) or visit findtreatment.gov to
                find programs near you. Ask specifically about <strong>programs for parents</strong> or
                family-friendly treatment options. Many programs offer childcare assistance, flexible
                hours, and family therapy as part of treatment.
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">You will not lose your children</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                This is the fear that keeps many parents from seeking help. The truth: voluntarily
                getting treatment is viewed as responsible parenting, not grounds for removal. Courts
                and child protective services are far more concerned about untreated substance use.
                Getting help protects your family — avoiding it is what puts it at risk.
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
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals and treatment locator, 24/7
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess substance use disorders. Your responses are processed entirely
            in your browser and are never stored or transmitted. Always consult a qualified healthcare
            professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by <a href="/about/jason-ramirez">Jason Ramirez, CADC-II</a>, Certified Drug and Alcohol Counselor with 11 years of clinical experience.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/cage-aid-substance-abuse-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            CAGE-AID Screening Tool →
          </Link>
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT Alcohol Test →
          </Link>
          <Link href="/family-impact-assessment" className="text-sky-600 dark:text-sky-400 hover:underline">
            Family Impact Assessment →
          </Link>
        </div>
      </div>
    </>
  );
}
