import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";

const TOOL_URL = `${SITE_URL}/burnout-test-for-nurses`;

export const metadata: Metadata = createMetadata({
  path: "/burnout-test-for-nurses",
  title: "Burnout Test for Nurses | Free Self-Assessment",
  description:
    "Free burnout screening for nurses — assess emotional exhaustion, compassion fatigue, and depersonalization. Private, instant results.",
  keywords: [
    "burnout test for nurses", "nurse burnout assessment", "nursing burnout quiz",
    "compassion fatigue test nurses", "nurse burnout screening", "healthcare burnout test",
    "nurse emotional exhaustion", "nursing stress test", "am i burned out nurse",
    "nurse burnout symptoms", "rn burnout test", "travel nurse burnout",
    "nurse burnout self-assessment", "nursing burnout scale", "free nurse burnout test",
    "healthcare worker burnout", "nurse mental health screening",
  ],
  openGraph: {
    title: "Burnout Test for Nurses | Free Self-Assessment",
    description: "Free, private burnout screening for nurses. Assess emotional exhaustion, compassion fatigue, and depersonalization with instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the difference between burnout and compassion fatigue in nursing?",
    answer: "Burnout develops gradually from chronic workplace stress — heavy patient loads, long shifts, and systemic issues. Compassion fatigue (sometimes called secondary traumatic stress) comes specifically from the emotional toll of caring for suffering patients. Nurses often experience both simultaneously. Burnout makes you feel depleted and cynical; compassion fatigue makes you feel emotionally numb to patients' pain.",
  },
  {
    question: "How common is burnout among nurses?",
    answer: "Nursing burnout rates are among the highest of any profession. Studies consistently report that 30–50% of nurses experience significant burnout symptoms at any given time. Following the COVID-19 pandemic, some surveys found burnout rates exceeding 60% among bedside nurses. Burnout is not a personal failing — it is a systemic issue.",
  },
  {
    question: "Can shift work make burnout worse?",
    answer: "Yes. Rotating shifts, 12-hour shifts, and night shifts all disrupt circadian rhythms, reduce sleep quality, and limit time for recovery and social connection. Research shows that nurses working night shifts or extended hours have significantly higher burnout rates. Fatigue compounds the emotional demands of patient care.",
  },
  {
    question: "What should I do if this screening suggests high burnout?",
    answer: "A high score is a signal to take seriously. Consider speaking with a mental health professional, your Employee Assistance Program (EAP), or a trusted colleague. Practical steps include setting firmer boundaries around overtime, prioritizing sleep, and exploring whether your workload is sustainable. Burnout is treatable, and seeking help is a sign of professional strength.",
  },
  {
    question: "Is nurse burnout something my employer should address?",
    answer: "Yes. While individual coping strategies help, research consistently shows that burnout is primarily driven by systemic factors — staffing ratios, workload, leadership support, and organizational culture. Effective burnout reduction requires both individual self-care and institutional change. This screening can help you understand your personal experience, but advocating for better working conditions is equally important.",
  },
];

export default function BurnoutTestForNursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Burnout Test for Nurses — Self-Assessment",
              description: "A free, private burnout screening tool for nurses assessing emotional exhaustion, depersonalization, and reduced personal accomplishment.",
              url: TOOL_URL,
              datePublished: "2026-03-01",
              dateModified: "2026-03-11",
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
              { name: "Burnout Test for Nurses", url: TOOL_URL },
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
            Nurses &amp; Healthcare Workers
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Burnout Test for Nurses
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You became a nurse because you care. And you&apos;ve kept showing up — through
            short staffing, 12-hour shifts that turn into 14, patients who need more than
            you can give, and a system that keeps asking for more while giving you less. If
            you&apos;re reading this on a break you probably shouldn&apos;t be taking, or at
            3 a.m. after a shift that won&apos;t leave your head, you already know something
            isn&apos;t right.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Burnout isn&apos;t weakness — it&apos;s what happens when good people are put in
            unsustainable situations for too long. You&apos;re not failing at nursing.
            The system is failing you. This free, private screening can help you put words to
            what you&apos;re feeling and figure out what to do next. It is{" "}
            <strong>not a diagnosis</strong>, but it can be the validation you need to take
            yourself as seriously as you take your patients.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold text-base hover:bg-rose-700 transition-colors shadow-sm"
          >
            Start the Burnout Screening
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
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">30–50% burned out</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Studies consistently find that 30–50% of nurses experience significant burnout at any
                given time. Post-pandemic surveys put that number above 60% for bedside nurses.
                <span className="text-slate-500 dark:text-slate-400"> — National Academy of Medicine</span>
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">100,000+ left</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                More than 100,000 registered nurses left the profession between 2020 and 2023,
                citing burnout, stress, and unsustainable working conditions.
                <span className="text-slate-500 dark:text-slate-400"> — NCSBN</span>
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">Patient safety</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Research links nurse burnout to higher patient mortality, increased medical errors,
                and more hospital-acquired infections. Taking care of yourself isn&apos;t selfish
                — it&apos;s part of taking care of your patients.
                <span className="text-slate-500 dark:text-slate-400"> — The Lancet</span>
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
                This screening assesses three core dimensions of burnout that are especially
                relevant for healthcare workers:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Emotional exhaustion:</strong> Feeling drained, depleted, and like you have nothing left to give — the most recognized dimension of burnout.</p>
                <p><strong>Depersonalization:</strong> Feeling detached from patients, treating them as tasks rather than people, or developing a cynical attitude you didn&apos;t used to have.</p>
                <p><strong>Reduced accomplishment:</strong> Feeling like your work doesn&apos;t matter, you&apos;re not making a difference, or you&apos;ve lost your sense of purpose.</p>
                <p><strong>Your results:</strong> You&apos;ll see where you fall on each dimension and overall. There are no &quot;pass/fail&quot; answers — this is about understanding where you are right now.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is stored, transmitted, or visible to your employer, coworkers, or anyone else.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Moral Distress in Nursing */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Moral Distress: When You Know What&apos;s Right but Can&apos;t Do It
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Moral distress occurs when you know the ethically correct action for your patient
              but institutional constraints prevent you from taking it. Short staffing means you
              can&apos;t give the care your patients need. Insurance denials force discharges you
              know are premature. You provide aggressive interventions for patients who expressed
              a wish for comfort care. You watch preventable harm happen because the system
              won&apos;t allocate the resources to stop it.
            </p>
            <p>
              Unlike burnout, which builds gradually from workload and exhaustion, moral distress
              creates acute psychological wounds each time it occurs — and those wounds
              accumulate. Research on the <strong>crescendo effect</strong> shows that moral
              distress compounds over a career: each new incident reactivates the residue from
              previous ones, lowering the threshold for the next episode. Nurses who leave the
              profession frequently cite moral distress — not just exhaustion — as the deciding
              factor.
            </p>
          </div>
        </div>

        {/* The Three Faces of Nursing Burnout */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Three Faces of Nursing Burnout
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Burnout is measured across three dimensions, and each one shows up differently on
              the unit:
            </p>
            <div className="space-y-3">
              <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Emotional exhaustion</h3>
                <p className="text-sm">
                  Dreading the alarm clock. Crying in the car before or after shifts. Counting
                  down the hours from the moment you clock in. Feeling like you&apos;re running
                  on empty but somehow keep showing up. Calling out more often — not because
                  you&apos;re sick, but because you genuinely cannot face another shift.
                </p>
              </div>
              <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Depersonalization</h3>
                <p className="text-sm">
                  Referring to patients by room number instead of name. Dark humor that used to
                  be a coping mechanism becoming something sharper. Feeling nothing when a patient
                  deteriorates. Going through the clinical motions while emotionally checked out.
                  This isn&apos;t who you went into nursing to be.
                </p>
              </div>
              <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Reduced accomplishment</h3>
                <p className="text-sm">
                  Questioning whether you make a difference. Feeling like &quot;anyone could do
                  this.&quot; Imposter syndrome despite years of experience. The &quot;making a
                  difference&quot; narrative that drew you to nursing now feels hollow. Wondering
                  if you chose the wrong career — or if nursing chose to break you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System vs Self */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            System vs. Self: Where the Problem Actually Lives
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              The wellness industry&apos;s answer to nursing burnout — yoga, meditation apps,
              resilience training — puts the burden on individual nurses to cope with
              fundamentally broken systems. These strategies help at the margins, but they cannot
              fix unsafe staffing ratios, mandatory overtime, or chronic underfunding. Research is
              unambiguous: burnout is primarily a workplace problem, not an individual one.
            </p>
            <p>
              California&apos;s landmark nurse-to-patient ratio law (the only mandated ratios in
              the U.S.) demonstrated that adequate staffing reduces burnout, decreases medical
              errors, and lowers patient mortality. Magnet-designated hospitals consistently
              report lower burnout and better patient outcomes. Shared governance models that give
              nurses decision-making power over practice conditions improve retention. The
              evidence is clear: systemic changes work. Individual self-care helps you survive
              while advocating for those changes — but it was never meant to be the solution.
            </p>
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
            Answer each question based on how you&apos;ve been feeling about your work.
          </p>
        </div>
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
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Use your EAP</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Most hospitals and healthcare systems offer a free <strong>Employee Assistance
                Program</strong> with confidential counseling sessions. Ask your HR department —
                it&apos;s usually 3–8 free sessions, and your employer doesn&apos;t know what
                you discuss. This exists specifically for situations like this.
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Peer support programs</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Many state nursing boards offer <strong>peer assistance programs</strong> specifically
                for nurses experiencing burnout, stress, or substance use concerns. These are
                confidential and run by nurses who understand your reality.
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Set one boundary this week</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                You can&apos;t fix the system overnight, but you can protect yourself. Say no to one
                overtime shift. Take your full lunch break. Leave on time once. Small boundaries
                aren&apos;t selfish — they&apos;re survival.
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
            healthcare professional can assess burnout or related conditions. Your responses are processed
            entirely in your browser and are never stored or transmitted. Always consult a qualified
            healthcare professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by <a href="/about/jason-ramirez">a Certified Drug and Alcohol Counselor (CADC-II)</a> with 11 years of clinical experience.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">
            Burnout Assessment Tool →
          </Link>
          <Link href="/work-stress-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Work Stress Check →
          </Link>
          <Link href="/sleep-and-mood-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Sleep &amp; Mood Check →
          </Link>
        </div>
      </div>
    </>
  );
}
