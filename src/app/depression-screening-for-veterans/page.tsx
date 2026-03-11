import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";

const TOOL_URL = `${SITE_URL}/depression-screening-for-veterans`;

export const metadata: Metadata = createMetadata({
  path: "/depression-screening-for-veterans",
  title: "Depression Screening for Veterans | Free PHQ-9",
  description:
    "Free depression screening for veterans using the PHQ-9. Includes VA resources and PTSD info. Private, instant results.",
  keywords: [
    "depression screening veterans", "veteran depression test", "military depression screening",
    "ptsd depression test veterans", "va depression screening", "veteran mental health test",
    "military to civilian depression", "combat veteran depression", "veteran phq-9",
    "depression test for military", "veteran mental health assessment", "post military depression",
    "veteran suicide prevention", "free veteran depression test", "military depression quiz",
    "veteran mental health screening", "service member depression test",
  ],
  openGraph: {
    title: "Depression Screening for Veterans | Free PHQ-9",
    description: "Free, private depression screening for veterans using the clinically validated PHQ-9. Includes VA resources and veteran-specific information.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How common is depression among veterans?",
    answer: "Depression affects veterans at significantly higher rates than the general population. The VA reports that roughly 1 in 3 veterans visiting VA primary care clinics screen positive for depression. Risk factors include combat exposure, traumatic brain injury, chronic pain, military sexual trauma, and the challenges of transitioning to civilian life. Depression in veterans is treatable, and seeking help is a sign of strength.",
  },
  {
    question: "What is the connection between PTSD and depression in veterans?",
    answer: "PTSD and depression frequently co-occur in veterans. Studies estimate that approximately 50% of veterans with PTSD also have depression. The conditions share overlapping symptoms — sleep disturbance, difficulty concentrating, loss of interest, and emotional numbness. This screening focuses on depression, but if you suspect PTSD, discussing both with a healthcare provider is important.",
  },
  {
    question: "Is this screening tool used by the VA?",
    answer: "Yes. The PHQ-9 is one of the standard depression screening instruments used across VA healthcare facilities. Taking it here gives you the same clinically validated assessment in a private, no-pressure environment. You can share your results with your VA provider or use them as a starting point for a conversation.",
  },
  {
    question: "Will my results affect my VA benefits or disability rating?",
    answer: "No. This screening is completely private and runs entirely in your browser. Nothing is stored, transmitted, or shared with anyone — including the VA. Your results here have no connection to your VA records, benefits, or disability claims.",
  },
  {
    question: "What veteran-specific mental health resources are available?",
    answer: "Veterans have access to several dedicated resources: the Veterans Crisis Line (dial 988 then press 1, or text 838255), VA mental health services (no combat experience or VA enrollment required for crisis care), Vet Centers for readjustment counseling, and the VA's online self-help resources. The SAMHSA National Helpline (1-800-662-4357) also provides free, confidential referrals 24/7.",
  },
];

export default function DepressionScreeningForVeteransPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Depression Screening for Veterans — PHQ-9",
              description: "A free, private depression screening tool for veterans using the clinically validated PHQ-9 questionnaire. Includes VA resources and veteran-specific mental health information.",
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
              { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` },
              { name: "Depression Screening for Veterans", url: TOOL_URL },
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            Veterans &amp; Service Members
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Depression Screening for Veterans
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You served. You did what was asked of you, and you did it well. But coming home
            doesn&apos;t always feel like the relief everyone said it would. Maybe the things
            that used to matter don&apos;t anymore. Maybe you&apos;re going through the motions
            but can&apos;t feel much of anything. Maybe you&apos;re carrying something heavy
            and you&apos;re not sure what to call it. You don&apos;t have to call it anything
            yet — you just have to be honest with yourself for a few minutes.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            The military trained you to push through pain. But depression isn&apos;t a mission
            you can power through — and recognizing that isn&apos;t weakness. It&apos;s the
            same awareness that kept you and your team alive. This free, private screening uses
            the <strong>PHQ-9</strong>, the exact same tool used across VA facilities, to help
            you understand what&apos;s going on. It is <strong>not a diagnosis</strong>,
            and it has absolutely no connection to your VA records, benefits, or disability
            rating. No one sees your results but you.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-700 text-white font-semibold text-base hover:bg-green-800 transition-colors shadow-sm"
          >
            Start the Depression Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 3 minutes. Completely private — not connected to the VA in any way.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-green-700 dark:text-green-300 mb-1">1 in 3 veterans</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Roughly one in three veterans visiting VA primary care clinics screen positive for
                depression. It&apos;s far more common than most people — including many
                veterans — realize.
                <span className="text-slate-500 dark:text-slate-400"> — VA/DOD Clinical Practice Guidelines</span>
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-green-700 dark:text-green-300 mb-1">50% overlap with PTSD</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                About half of veterans diagnosed with PTSD also have co-occurring depression.
                The two conditions share symptoms like sleep problems, emotional numbness, and
                loss of interest — which means depression can hide behind a PTSD diagnosis.
                <span className="text-slate-500 dark:text-slate-400"> — RAND Corporation</span>
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-green-700 dark:text-green-300 mb-1">1.5x suicide risk</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Veterans are 1.5 times more likely to die by suicide compared to non-veteran adults.
                Early screening and connection to care are among the most effective prevention strategies.
                <span className="text-slate-500 dark:text-slate-400"> — VA National Veteran Suicide Prevention Report</span>
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
                This screening uses the <strong>PHQ-9</strong> (Patient Health Questionnaire-9),
                the same 9-question tool used at VA medical centers across the country.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>How it works:</strong> You&apos;ll answer 9 questions about how you&apos;ve been feeling over the past two weeks. Each answer is scored from 0 (not at all) to 3 (nearly every day). Straightforward, no tricks.</p>
                <p><strong>Your score:</strong> Ranges from 0 to 27. Higher scores suggest more significant symptoms. You&apos;ll see the clinical ranges and what your score means in plain language.</p>
                <p><strong>What it&apos;s not:</strong> This is a screening, not a diagnosis. It can&apos;t distinguish between depression, PTSD, TBI-related symptoms, or grief. A healthcare provider can help sort that out — this gives you a starting point.</p>
                <p><strong>Your privacy:</strong> This has no connection to the VA, DOD, or any government system. Nothing is stored or transmitted. No one can access your results — not the VA, not your chain of command, not anyone. When you close this page, your data is gone.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Moral Injury and Depression */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Moral Injury: The Depression That Doesn&apos;t Look Like PTSD
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Not all service-related depression comes from fear or danger. <strong>Moral
              injury</strong> — the deep psychological wound from participating in, witnessing,
              or failing to prevent events that violate your moral code — manifests primarily as
              depression, not the hyperarousal and flashbacks of classic PTSD. Veterans with
              moral injury describe pervasive shame, self-condemnation, withdrawal from
              relationships, and a collapse of the belief systems that once gave life meaning.
            </p>
            <p>
              Standard PTSD treatments (prolonged exposure, CPT) are designed for fear-based
              trauma and may not fully address moral injury. Emerging approaches like Adaptive
              Disclosure Therapy and Impact of Killing — developed specifically for moral injury
              — address the guilt, shame, and existential questions directly. If your depression
              feels more like punishment you are inflicting on yourself than fear of external
              threats, moral injury is worth exploring with a provider who understands it.
            </p>
          </div>
        </div>

        {/* The Transition Identity Gap */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Transition Gap: Losing Your Military Identity
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              The military gave you rank, mission, belonging, and a clear place in the world.
              Separation removes all of that simultaneously. Many veterans describe the
              transition to civilian life as an identity crisis: you know who you were in
              uniform, but you don&apos;t know who you are without it. Civilian workplaces lack
              the camaraderie and shared purpose of military service. Social dynamics feel
              confusing. The skills that made you exceptional in service don&apos;t always
              translate in ways employers recognize.
            </p>
            <p>
              Research shows that depression risk peaks during the first two years after
              separation, regardless of combat exposure. The loss is not just a job — it is a
              community, a structure, and an identity built over years or decades. Programs like
              the VA&apos;s Solid Start initiative, which proactively contacts recently separated
              veterans, exist because this transition window is so critical. If you separated
              within the last three years and are feeling lost, disconnected, or purposeless,
              those feelings have a name and they are shared by many who served alongside you.
            </p>
          </div>
        </div>

        {/* When Standard Treatments Aren't Enough */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            When Standard Approaches Aren&apos;t Enough: Advanced Options
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              If you have tried therapy and medication without adequate relief, you are not out
              of options. The VA has expanded access to several advanced approaches for
              treatment-resistant depression: <strong>esketamine (Spravato)</strong>, a nasal
              spray approved for treatment-resistant depression that works through a different
              brain pathway than traditional antidepressants; intensive outpatient programs that
              combine multiple modalities over 2-3 weeks; and complementary approaches including
              yoga, acupuncture, and meditation that are now offered at many VA facilities.
            </p>
            <p>
              The VA also runs clinical trials for emerging treatments. Peer support specialists
              — veterans who have navigated their own mental health recovery and are trained to
              support others — are available through many VA facilities and veteran service
              organizations like Team Red White &amp; Blue, Wounded Warrior Project, and Give an
              Hour. Sometimes the most effective support comes from someone who has carried the
              same weight and found a way forward.
            </p>
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
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Veterans Crisis Line</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Dial <strong>988</strong> then press <strong>1</strong> — or text <strong>838255</strong>.
                Free, confidential, 24/7. Staffed by people who understand military experience.
                You don&apos;t need to be in immediate danger to call — they&apos;re there for
                any level of distress.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">VA Mental Health Services</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Call <strong>1-877-222-8387</strong> to connect with VA mental health services.
                If you&apos;re enrolled in VA healthcare, mental health services come at no
                out-of-pocket cost. Even if you&apos;re not enrolled, the VA provides crisis
                care regardless of enrollment status or discharge type.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Vet Centers</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Readjustment counseling for combat veterans, their families, and survivors of military
                sexual trauma. <strong>No VA enrollment required.</strong> These are community-based,
                staffed by veterans, and separate from VA medical centers. There are over 300 locations
                nationwide.
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
              <strong>Veterans Crisis Line:</strong> Dial <strong>988</strong> then press <strong>1</strong> — or text <strong>838255</strong>
            </li>
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — available to everyone, 24/7
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
            Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
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
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">
            Burnout Assessment Tool →
          </Link>
        </div>
      </div>
    </>
  );
}
