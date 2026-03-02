import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";

const TOOL_URL = `${SITE_URL}/depression-test-for-teens`;

export const metadata: Metadata = createMetadata({
  path: "/depression-test-for-teens",
  title: "Depression Test for Teens | Free PHQ-9 Screening",
  description:
    "Free depression test designed for teens. Uses the clinically validated PHQ-9. Private, no sign-up, instant results. A starting point — not a diagnosis.",
  keywords: [
    "depression test for teens", "teen depression test", "teenage depression screening",
    "adolescent depression quiz", "depression quiz for teenagers", "am i depressed teen",
    "teen mental health test", "youth depression screening", "phq-9 for teens",
    "teen depression symptoms", "signs of depression in teens", "teenage depression help",
    "depression self-assessment teens", "free teen depression test", "teen mental health check",
    "adolescent mental health screening", "depression test for adolescents",
  ],
  openGraph: {
    title: "Depression Test for Teens | Free PHQ-9 Screening",
    description: "Free, private depression screening for teens using the clinically validated PHQ-9. Instant results, no sign-up required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is this depression test appropriate for teenagers?",
    answer: "Yes. The PHQ-9 is widely used with adolescents ages 12 and older in clinical settings. Research supports its validity as a depression screening tool for teens. However, it is a screening instrument — not a diagnosis. A qualified healthcare professional should evaluate any teen showing signs of depression.",
  },
  {
    question: "How does depression in teens differ from adult depression?",
    answer: "Teen depression often looks different from adult depression. Adolescents may show more irritability than sadness, experience academic decline, withdraw from friends, sleep excessively, or have unexplained physical complaints like headaches or stomachaches. Mood swings that seem extreme or persistent may also be signs worth discussing with a professional.",
  },
  {
    question: "What should a parent do if their teen scores high?",
    answer: "A high score is a signal to have a calm, supportive conversation with your teen and to schedule an appointment with their pediatrician or a mental health professional. Avoid dismissing their feelings or overreacting. Early intervention leads to better outcomes. If your teen is in immediate danger, contact the 988 Suicide and Crisis Lifeline by calling or texting 988.",
  },
  {
    question: "Can a teen take this test on their own?",
    answer: "Yes. This screening is designed to be self-administered. Teens can take it privately in their browser — no data is stored or transmitted. However, if results suggest moderate or higher depression, we strongly encourage involving a trusted adult or healthcare professional.",
  },
  {
    question: "Are there crisis resources specifically for teens?",
    answer: "Yes. Teens can contact the 988 Suicide and Crisis Lifeline (call or text 988), the Crisis Text Line (text HOME to 741741), or the Trevor Project (for LGBTQ+ youth: call 1-866-488-7386 or text START to 678-678). All of these services are free, confidential, and available 24/7.",
  },
];

export default function DepressionTestForTeensPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Depression Test for Teens — PHQ-9 Screening",
              description: "A free, private depression screening tool for teenagers using the clinically validated PHQ-9 questionnaire. Designed for adolescents ages 12 and older.",
              url: TOOL_URL,
              datePublished: "2026-03-01",
              dateModified: "2026-03-01",
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
              { name: "Depression Test for Teens", url: TOOL_URL },
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">
            Ages 12+
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Depression Test for Teens
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Being a teenager is genuinely hard — and not in the way adults sometimes dismiss. The
            pressure of school, friendships that feel like everything, social media that never turns
            off, figuring out who you are while the world keeps demanding more. If you&apos;ve been
            feeling heavy, empty, or like nothing matters the way it used to, you&apos;re not being
            dramatic. Something real might be going on, and checking in with yourself is one of the
            bravest things you can do.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            If you&apos;re a parent reading this because you&apos;ve noticed changes in your
            teen — more irritability, pulling away, dropping grades, sleeping all the time — trust
            that instinct. This free, private screening uses the PHQ-9, the same tool doctors use,
            to help you understand what&apos;s happening. It is <strong>not a diagnosis</strong>,
            but it can be the start of an important conversation.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold text-base hover:bg-sky-700 transition-colors shadow-sm"
          >
            Start the Depression Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 3 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">4.1 million</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                U.S. adolescents (ages 12–17) experienced at least one major depressive episode in 2023.
                That&apos;s roughly <strong>1 in 6 teens</strong>.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">60% untreated</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Only about 40% of teens with major depression receive any treatment. The majority
                go through it without professional support.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">2nd leading cause</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Suicide is the 2nd leading cause of death for young people ages 10–14 and 3rd for ages 15–24.
                Early screening saves lives.
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
                This screening uses the <strong>PHQ-9</strong> (Patient Health Questionnaire-9), a
                9-question tool used by doctors, therapists, and school counselors worldwide.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>How it works:</strong> You&apos;ll answer 9 questions about how you&apos;ve been feeling over the past two weeks. Each answer is scored from 0 (not at all) to 3 (nearly every day).</p>
                <p><strong>Your score:</strong> Ranges from 0 to 27. Higher scores suggest more significant symptoms. You&apos;ll see what your score means and what the clinical ranges are.</p>
                <p><strong>What it&apos;s not:</strong> This is a screening tool, not a diagnosis. A high score doesn&apos;t mean you definitely have depression — and a low score doesn&apos;t mean everything is fine if you&apos;re struggling. Either way, talking to someone you trust is always a good next step.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. We don&apos;t see your answers, store your data, or share anything with anyone — not your school, not your parents, not anyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the PHQ-9 Depression Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how you&apos;ve been feeling over the past two weeks.
          </p>
        </div>
        <PHQ9Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to someone you trust</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A parent, school counselor, coach, older sibling, or any adult you feel safe with.
                You don&apos;t have to figure this out alone. Showing someone your results can
                be an easy way to start the conversation.
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Prefer texting? That works too.</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong> to
                connect with a trained crisis counselor. It&apos;s free, confidential, and available 24/7.
                Sometimes typing is easier than talking.
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">LGBTQ+ teens</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>The Trevor Project:</strong> Call <strong>1-866-488-7386</strong> or text
                START to <strong>678-678</strong>. Trained counselors who understand what you&apos;re
                going through. Free, confidential, 24/7.
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
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can diagnose depression. Your responses are processed entirely in your
            browser and are never stored or transmitted. Always consult a qualified healthcare professional
            for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Reviewed by a Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years
            of clinical experience in substance abuse counseling.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
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
