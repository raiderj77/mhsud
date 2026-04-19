import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { DASS21Client } from "../dass-21-depression-anxiety-stress/DASS21Client";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/stress-test-college-students`;

export const metadata: Metadata = createMetadata({
  path: "/stress-test-college-students",
  title: "Stress Test for College Students — Free Screen",
  description:
    "Free stress, anxiety, and depression screening for college students. DASS-21. Private, instant.",
  keywords: [
    "stress test college students", "college student stress screening", "student mental health test",
    "dass-21 college", "college anxiety test", "campus mental health", "student depression screening",
    "college stress assessment", "university student mental health", "academic stress test",
    "college burnout test", "student anxiety screening", "free college stress test",
    "college student mental health check", "student wellness screening",
  ],
  openGraph: {
    title: "Stress Test for College Students — Free Screen",
    description: "Free, private stress, anxiety, and depression screening for college students using the DASS-21. Instant results, no sign-up required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is stress in college normal?",
    answer: "Some stress in college is completely normal — exams, deadlines, and adjusting to independence are genuinely challenging. But when stress becomes constant, overwhelming, or starts affecting your sleep, grades, relationships, or ability to function, it has crossed into something that deserves attention. The line between normal stress and a mental health concern is not always obvious, which is why screening can help.",
  },
  {
    question: "When does college stress become a mental health issue?",
    answer: "Stress becomes a mental health concern when it is persistent (lasting weeks, not just around finals), when it interferes with daily functioning (skipping classes, withdrawing from friends, not eating or sleeping properly), or when it is accompanied by feelings of hopelessness, panic, or thoughts of self-harm. If stress feels inescapable rather than temporary, it is worth taking seriously.",
  },
  {
    question: "How do I know if I need professional help?",
    answer: "If you are struggling to keep up with basic responsibilities, feeling anxious or sad most days, using substances to cope, having trouble sleeping for weeks, or experiencing thoughts of self-harm, those are signals to reach out. You do not need to be in crisis to deserve help. Most campus counseling centers see students with a wide range of concerns — you do not need to wait until things are at their worst.",
  },
  {
    question: "Does my college offer free counseling?",
    answer: "Most colleges and universities offer free or low-cost counseling through their campus counseling center. These services are typically confidential and included in your tuition or student fees. Wait times can vary, so if there is a delay, ask about group sessions, workshops, or referrals to community providers. Many campuses also offer crisis walk-in hours for urgent concerns.",
  },
  {
    question: "Can stress affect my grades?",
    answer: "Yes, significantly. Chronic stress impairs concentration, memory, and decision-making — the exact cognitive functions you need for academic performance. Research shows that students with high stress levels have lower GPAs, higher dropout rates, and more academic probation. Addressing stress is not a distraction from academics — it is essential to academic success.",
  },
  {
    question: "What is the difference between college stress and burnout?",
    answer: "Stress is the feeling of being overwhelmed by demands. Burnout is what happens when stress goes unaddressed for too long — it includes emotional exhaustion, cynicism about your studies, and a sense that nothing you do matters. Stress says you have too much on your plate. Burnout says you have lost the ability to care. Both are addressable, but burnout typically requires more significant changes.",
  },
  {
    question: "Can I take a leave of absence for mental health?",
    answer: "Yes. Most colleges have medical or personal leave of absence policies that include mental health. Taking a leave is not giving up — it is protecting your long-term success. Talk to your academic advisor, dean of students, or counseling center about your options. Many students who take leave return stronger and more focused.",
  },
  {
    question: "What does the DASS-21 measure?",
    answer: "The DASS-21 (Depression, Anxiety, and Stress Scales) measures three related but distinct dimensions of emotional distress: depression (hopelessness, low motivation, lack of pleasure), anxiety (panic, worry, physical tension), and stress (irritability, difficulty relaxing, being easily upset). It helps you understand which areas are most affected and how severe your symptoms may be.",
  },
];

export default function StressTestCollegeStudentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Stress Test for College Students — DASS-21 Screening",
              description: "A free, private stress, anxiety, and depression screening tool for college students using the clinically validated DASS-21.",
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
              { name: "DASS-21 Depression Anxiety Stress", url: `${SITE_URL}/dass-21-depression-anxiety-stress` },
              { name: "Stress Test for College Students", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (DASS-21)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
            College Students
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Stress Test for College Students
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            College is supposed to be the best years of your life — at least that&apos;s what
            everyone keeps saying. But between the academic pressure, financial stress, social
            expectations, sleep deprivation, and the constant feeling that everyone else has it
            figured out, &quot;best years&quot; can feel like a cruel joke. If you&apos;re
            running on caffeine and anxiety, crying in your dorm, or just going through the
            motions — you&apos;re not alone, and you&apos;re not weak.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free, private screening uses the DASS-21, a clinically validated tool that
            measures depression, anxiety, and stress separately — so you can understand exactly
            what you&apos;re dealing with. It is <strong>not a diagnosis</strong>, but it can
            help you figure out whether what you&apos;re feeling is typical college stress or
            something that deserves professional support.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Start the Stress Screening
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
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">60%+ overwhelming anxiety</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                More than 60% of college students report overwhelming anxiety, making it the most
                common mental health concern on campuses nationwide.
                <span className="text-slate-500 dark:text-slate-400"> — American College Health Association</span>
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">Counseling underused</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Despite high rates of distress, only a fraction of struggling students access campus
                counseling services. Stigma, lack of awareness, and wait times remain significant barriers.
                <span className="text-slate-500 dark:text-slate-400"> — Healthy Minds Study</span>
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">73% mental health crisis</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                73% of college students report experiencing a mental health crisis during their
                college years. This is not a niche problem — it is the college experience for
                most students.
                <span className="text-slate-500 dark:text-slate-400"> — Boston University Study</span>
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
                This screening uses the <strong>DASS-21</strong> (Depression, Anxiety, and Stress
                Scales), a 21-question tool used by counselors and psychologists worldwide.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Three separate scores:</strong> Unlike a single stress quiz, the DASS-21 gives you separate scores for depression, anxiety, and stress — so you know exactly what&apos;s driving your distress.</p>
                <p><strong>Academic pressure:</strong> The screening captures symptoms common in college life — difficulty concentrating, feeling overwhelmed, irritability, and loss of motivation.</p>
                <p><strong>Imposter syndrome:</strong> Feeling like you don&apos;t belong or aren&apos;t smart enough is incredibly common in college. This screening can help you see whether those feelings are connected to broader anxiety or depression.</p>
                <p><strong>What it&apos;s not:</strong> This is a screening tool, not a diagnosis. A high score is a reason to seek support, not a label. A low score does not mean you should ignore ongoing struggles.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. No data is stored, transmitted, or visible to your school, parents, or anyone else.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the DASS-21 Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how you&apos;ve been feeling over the past week.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A stress assessment tailored for college students covering academic, social, financial, and identity-related stressors."
          who="College students who feel overwhelmed and want to evaluate whether their stress level has reached concerning thresholds."
          bottomLine="College stress is real and measurable — high scores mean it is time to use campus support resources. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is the College Stress Screening?</h2>
        <h2>How Is the College Stress Test Scored?</h2>
        <h2>What Do My Stress Screening Results Mean?</h2>
      </section>
<DASS21Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Visit your campus counseling center</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Most colleges offer <strong>free counseling</strong> included in your tuition or
                student fees. You do not need to be in crisis to make an appointment. Many centers
                also offer group sessions, workshops, and same-day crisis appointments.
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">JED Foundation &amp; Active Minds</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The <strong>JED Foundation</strong> (jedfoundation.org) provides mental health resources
                specifically for college students. <strong>Active Minds</strong> (activeminds.org) runs
                student-led chapters on hundreds of campuses. Both organizations offer free resources,
                peer support, and crisis information.
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Start with one thing</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                You do not have to fix everything at once. Pick one thing: talk to a friend, email
                your advisor about an extension, go to bed before midnight tonight, or just take a
                walk without your phone. Small steps count, especially when everything feels overwhelming.
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
            <li>
              <strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong> — free, 24/7
            </li>
            <li>
              <strong>JED Foundation:</strong> <strong>jedfoundation.org</strong> — college student mental health resources
            </li>
            <li>
              <strong>Active Minds:</strong> <strong>activeminds.org</strong> — student-led mental health advocacy
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess depression, anxiety, or stress disorders. Your responses are
            processed entirely in your browser and are never stored or transmitted. Always consult a qualified
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
          <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline">
            DASS-21 Screening Tool →
          </Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/sleep-and-mood-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Sleep &amp; Mood Check →
          </Link>
        </div>
      </div>
    </>
  );
}
