import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CrafftClient } from "../crafft-substance-screening/CrafftClient";

const TOOL_URL = `${SITE_URL}/drug-screening-teens`;

export const metadata: Metadata = createMetadata({
  path: "/drug-screening-teens",
  title: "Drug Screening for Teens — Free CRAFFT Test",
  description:
    "Free substance use screening for teens 12-21 using the CRAFFT. Private, instant results.",
  keywords: [
    "drug screening teens", "teen substance use test", "crafft test", "teen drug test",
    "adolescent substance screening", "teen alcohol drug test", "youth substance use screening",
    "teen drug assessment", "adolescent drug screening", "teen substance abuse test",
    "crafft screening tool", "youth drug test", "free teen drug screening",
    "teen substance use assessment", "adolescent crafft test",
  ],
  openGraph: {
    title: "Drug Screening for Teens — Free CRAFFT Test",
    description: "Free, private substance use screening for teens ages 12-21 using the clinically validated CRAFFT. Instant results, no sign-up.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is experimenting with substances normal for teens?",
    answer: "Many teens try alcohol or other substances at some point, and experimentation alone does not mean someone has a substance use disorder. However, the teen brain is still developing — particularly the areas responsible for decision-making, impulse control, and risk assessment — which makes early substance use riskier than it would be for adults. What matters is the pattern: how often, how much, and whether it is affecting your life. This screening helps you look at those patterns honestly.",
  },
  {
    question: "What does the CRAFFT screen for?",
    answer: "The CRAFFT is a clinically validated screening tool designed specifically for young people ages 12 to 21. It screens for risky substance use patterns including alcohol, marijuana, and other drugs. The name stands for Car, Relax, Alone, Forget, Friends, and Trouble — each representing a key risk behavior. It does not diagnose addiction; it identifies whether your substance use patterns may benefit from further evaluation.",
  },
  {
    question: "Does a high score mean I am an addict?",
    answer: "No. A high score on the CRAFFT does not mean you are addicted or that there is something wrong with you as a person. It means your pattern of substance use may be putting you at risk, and it would be worth talking to someone you trust — a counselor, doctor, or other trusted adult. Substance use exists on a spectrum, and catching concerning patterns early gives you the most options and the best outcomes.",
  },
  {
    question: "Will my results be shared with anyone?",
    answer: "No. This screening runs entirely in your browser. Nothing is stored, saved, or sent anywhere. No one — not your parents, school, or anyone else — can see your answers or results. This is a private check-in with yourself. What you do with the information is completely your choice.",
  },
  {
    question: "Should I tell my parents about my substance use?",
    answer: "That depends on your situation and your relationship with your parents. If you feel safe talking to them, it can be a relief to have their support. If you are not ready, consider talking to another trusted adult — a school counselor, doctor, coach, relative, or therapist. You do not have to figure this out alone, and you get to choose who you talk to first.",
  },
  {
    question: "What if I think I need help?",
    answer: "Recognizing that you might need help is a brave and important step. You can talk to your school counselor, your doctor, or call the Teen Line at 1-800-852-8336 (6 PM to 10 PM PST). You can also text HOME to 741741 to reach the Crisis Text Line anytime. If you are in immediate danger, call 988. Help is available, it is confidential, and asking for it is a sign of strength, not weakness.",
  },
  {
    question: "What does teen substance use treatment look like?",
    answer: "Treatment for teens is different from adult treatment and is designed to be age-appropriate. It may include individual therapy, family therapy, group sessions with other teens, and education about the developing brain. Most teen treatment is outpatient, meaning you can continue going to school. The goal is not punishment — it is giving you tools and support to make choices that protect your future.",
  },
  {
    question: "How does substance use affect the developing brain?",
    answer: "The brain continues developing until approximately age 25, with the prefrontal cortex (responsible for judgment, planning, and impulse control) being the last area to mature. Substance use during this critical period can interfere with brain development, affect memory and learning, increase the risk of developing a substance use disorder later in life, and impact mental health. This is not meant to scare you — it is meant to help you make informed choices.",
  },
];

export default function DrugScreeningTeensPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Drug Screening for Teens — Free CRAFFT Test",
              description: "A free, private substance use screening tool for teens ages 12-21 using the clinically validated CRAFFT questionnaire.",
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
              { name: "CRAFFT Substance Screening", url: `${SITE_URL}/crafft-substance-screening` },
              { name: "Drug Screening for Teens", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (CRAFFT)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300">
            Ages 12–21
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Drug Screening for Teens
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            If you&apos;re here, you&apos;re already doing something that takes courage — being
            honest with yourself. Maybe you&apos;ve been using substances and wondering if it&apos;s
            becoming a problem. Maybe a friend or family member suggested you check in. Maybe
            you&apos;re just curious. Whatever brought you here, there is no judgment — only
            information that can help you understand where you stand.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free, private screening uses the CRAFFT, a tool designed specifically for young
            people ages 12 to 21. It is used by doctors and counselors to understand substance
            use patterns — not to label or punish. It is <strong>not a diagnosis</strong>, and
            no one will see your answers. Everything stays in your browser. This is just for you.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold text-base hover:bg-teal-700 transition-colors shadow-sm"
          >
            Start the CRAFFT Screening
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
            <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-1">Teen substance use is common</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                By 12th grade, approximately half of teens have tried an illicit substance and
                more than 60% have tried alcohol. You are not alone, and there is no shame in
                checking in with yourself.
                <span className="text-slate-500 dark:text-slate-400"> — Monitoring the Future Survey</span>
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-1">Developing brain vulnerability</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The teen brain is still developing until approximately age 25. Substance use during
                this window carries higher risks for lasting effects on memory, learning, and
                mental health than at any other time in life.
                <span className="text-slate-500 dark:text-slate-400"> — National Institute on Drug Abuse</span>
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-teal-700 dark:text-teal-300 mb-1">Early intervention works</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Catching concerning patterns early leads to significantly better outcomes. Teens
                who receive support before substance use becomes entrenched have far more options
                and far better long-term results.
                <span className="text-slate-500 dark:text-slate-400"> — SAMHSA</span>
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
                This screening uses the <strong>CRAFFT</strong>, the most widely used substance
                use screening tool for young people. It was developed at Boston Children&apos;s
                Hospital and is recommended by the American Academy of Pediatrics.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>What it asks:</strong> Short, straightforward questions about your substance use and related behaviors — like riding in a car with someone who had been using, using substances to relax, or getting into trouble because of substance use.</p>
                <p><strong>No trick questions:</strong> The CRAFFT is not trying to catch you or make you feel bad. It is designed to help you see patterns you might not have noticed.</p>
                <p><strong>Risk factors it considers:</strong> Peer pressure, stress, trauma, mental health, and the natural risk-taking that comes with being young. These are not excuses — they are context that matters.</p>
                <p><strong>What it&apos;s not:</strong> This is a screening tool, not a diagnosis. A high score does not make you a bad person or an &quot;addict.&quot; It means talking to someone could help.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. No one — not your parents, school, doctor, or anyone else — can see your answers. This is 100% private.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the CRAFFT Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question honestly. There are no right or wrong answers.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Teen Drug Screening?</h2>
        <h2>How Is the Teen Drug Screening Scored?</h2>
        <h2>What Do My Drug Screening Results Mean?</h2>
      </section>
<CrafftClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to someone you trust</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A parent, school counselor, coach, older sibling, doctor, or any adult you feel
                safe with. You do not have to figure this out alone. If you&apos;re not sure how
                to start the conversation, showing them your results can be an easy way in.
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Teen Line</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Call <strong>1-800-852-8336</strong> (6 PM to 10 PM PST) to talk with another teen
                who has been trained to listen. Sometimes it is easier to talk to someone your own
                age first. You can also text TEEN to 839863 or visit teenline.org.
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Crisis Text Line</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Text <strong>HOME</strong> to <strong>741741</strong> to connect with a trained
                crisis counselor anytime, day or night. It is free, confidential, and available
                24/7. If texting feels easier than talking, this is a great option.
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
              <strong>Teen Line:</strong> <strong>1-800-852-8336</strong> — teen-to-teen support, 6 PM–10 PM PST
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong> — free, 24/7
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
            Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/crafft-substance-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            CRAFFT Substance Screening →
          </Link>
          <Link href="/anxiety-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">
            Anxiety Test for Teens →
          </Link>
          <Link href="/depression-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Test for Teens →
          </Link>
        </div>
      </div>
    </>
  );
}
