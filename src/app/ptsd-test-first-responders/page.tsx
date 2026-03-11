import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PCL5Client } from "../pcl-5-ptsd-screening/PCL5Client";

const TOOL_URL = `${SITE_URL}/ptsd-test-first-responders`;

export const metadata: Metadata = createMetadata({
  path: "/ptsd-test-first-responders",
  title: "PTSD Test for First Responders — Free PCL-5",
  description:
    "Free PTSD screening for police, firefighters, EMTs, and dispatchers. Private, instant results.",
  keywords: [
    "ptsd test first responders", "first responder ptsd screening", "police ptsd test",
    "firefighter ptsd screening", "emt ptsd test", "pcl-5 first responders",
    "first responder mental health test", "law enforcement ptsd screening",
    "paramedic ptsd test", "dispatcher ptsd screening", "first responder trauma test",
    "police officer mental health", "firefighter mental health screening",
    "ems ptsd assessment", "free ptsd test first responders",
  ],
  openGraph: {
    title: "PTSD Test for First Responders — Free PCL-5",
    description: "Free, private PTSD screening for police, firefighters, EMTs, and dispatchers using the clinically validated PCL-5. Instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How common is PTSD among first responders?",
    answer: "PTSD rates among first responders are significantly higher than the general population. Research estimates that up to 32% of first responders develop PTSD at some point in their careers, compared to about 6-7% of the general population. Rates vary by role — dispatchers, who are often overlooked, show rates comparable to field personnel because they process traumatic calls without the ability to take physical action.",
  },
  {
    question: "Does having PTSD mean I am weak?",
    answer: "No. PTSD is a neurological response to abnormal levels of trauma exposure — it is not a character flaw or a sign of weakness. First responders are exposed to more traumatic events in their first year on the job than most civilians experience in a lifetime. Your brain is responding normally to abnormal circumstances. Seeking help is a sign of strength and self-awareness, not weakness.",
  },
  {
    question: "Will PTSD affect my ability to do my job?",
    answer: "Untreated PTSD can affect job performance through hypervigilance, difficulty concentrating, sleep disruption, irritability, and emotional numbing. However, treated PTSD often allows people to continue working effectively. Many first responders manage PTSD while maintaining successful careers. Early intervention tends to produce better outcomes and shorter recovery times.",
  },
  {
    question: "Will seeking help affect my career?",
    answer: "This is a common and understandable concern. Many departments have become more supportive of mental health care in recent years. Confidential resources like Employee Assistance Programs (EAPs), peer support teams, and programs like Safe Call Now are specifically designed to protect your privacy. In many jurisdictions, mental health treatment records are protected. Check your department policies and consider starting with a confidential resource.",
  },
  {
    question: "What types of trauma do first responders face?",
    answer: "First responders face a unique combination of critical incident trauma (specific horrific events) and cumulative trauma (the daily toll of repeated exposure). Critical incidents include line-of-duty deaths, pediatric calls, mass casualty events, and suicide calls. Cumulative trauma comes from the relentless exposure to human suffering, even in calls that do not seem individually severe.",
  },
  {
    question: "What is cumulative PTSD?",
    answer: "Cumulative PTSD develops not from a single traumatic event but from repeated exposure to traumatic situations over time. First responders may not identify a single triggering event because the trauma built up gradually — call after call, shift after shift. This is why some responders develop symptoms years into their career without a clear precipitating incident.",
  },
  {
    question: "What treatment options are available for first responders?",
    answer: "Evidence-based treatments include Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR). Many first responders benefit from clinicians who specialize in first responder trauma because they understand the culture, the job, and the specific types of exposure. Peer support programs and Critical Incident Stress Management (CISM) are also valuable.",
  },
  {
    question: "Are there programs specifically for first responders?",
    answer: "Yes. Safe Call Now (1-206-459-3020) provides 24/7 crisis support specifically for first responders. The Code Green Campaign focuses on first responder mental health awareness. The First Responder Support Network offers residential treatment programs. Many states also have first responder-specific peer support networks and treatment programs.",
  },
];

export default function PTSDTestFirstRespondersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "PTSD Test for First Responders — Free PCL-5",
              description: "A free, private PTSD screening tool for police officers, firefighters, EMTs, and dispatchers using the clinically validated PCL-5.",
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
              { name: "PCL-5 PTSD Screening", url: `${SITE_URL}/pcl-5-ptsd-screening` },
              { name: "PTSD Test for First Responders", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (PCL-5)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">
            First Responders
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          PTSD Test for First Responders
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You signed up to help people on their worst days. What nobody told you is that
            those days don&apos;t leave when the shift ends. The pediatric call that went
            wrong. The scene you can still smell. The face you see when you close your eyes.
            You push through because that&apos;s what the job demands — but the nightmares,
            the hypervigilance, the way you snap at people you love, the feeling of being
            permanently on edge — that&apos;s not &quot;just part of the job.&quot; That&apos;s
            your mind telling you something needs attention.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Up to 32% of first responders develop PTSD — and dispatchers, who are too often
            overlooked, face rates just as high. Whether you&apos;re police, fire, EMS, or
            dispatch, your trauma is real and it deserves real support. This free, private
            screening uses the <strong>PCL-5</strong>, the same tool used in clinical and
            VA settings. It is <strong>not a diagnosis</strong>, but it can help you see
            what&apos;s happening clearly — and decide what to do about it. Nobody from
            your department will ever see your results.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold text-base hover:bg-sky-700 transition-colors shadow-sm"
          >
            Start the PTSD Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 5–10 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">Up to 32% PTSD rates</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                First responders develop PTSD at rates 4-5 times higher than the general
                population. The nature of the work — repeated, unpredictable trauma exposure —
                makes this an occupational hazard, not a personal failing.
                <span className="text-slate-500 dark:text-slate-400"> — Journal of Traumatic Stress</span>
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">Cumulative trauma</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Unlike single-event PTSD, first responder PTSD often builds gradually from
                hundreds of traumatic exposures. There may be no single &quot;worst call&quot; —
                the weight accumulates until the system can no longer compensate.
                <span className="text-slate-500 dark:text-slate-400"> — International Journal of Emergency Mental Health</span>
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">Dispatchers overlooked</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                911 dispatchers experience PTSD at rates comparable to field personnel but are
                often excluded from first responder mental health programs. They process traumatic
                calls without the ability to take physical action, creating a unique form of
                helplessness-related trauma.
                <span className="text-slate-500 dark:text-slate-400"> — Journal of Emergency Dispatch</span>
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
                This screening uses the <strong>PCL-5 (PTSD Checklist for DSM-5)</strong>, a
                20-item questionnaire used in clinical, military, and VA settings to assess
                PTSD symptom severity.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Critical incidents:</strong> Line-of-duty deaths, pediatric fatalities, mass casualty events, officer-involved shootings, and suicide calls are among the most frequently cited critical incidents. But any call can become the one that stays with you — trauma does not follow a predictable script.</p>
                <p><strong>Organizational stressors:</strong> PTSD in first responders is compounded by shift work, mandatory overtime, administrative pressure, public scrutiny, and leadership that may not prioritize mental health. The job itself is stressful even without the trauma.</p>
                <p><strong>Stigma in the culture:</strong> First responder culture often equates emotional struggle with weakness. This stigma prevents many from seeking help until symptoms become severe. Recognizing that PTSD is a neurological response — not a character flaw — is the first step toward breaking that cycle.</p>
                <p><strong>Sleep disruption:</strong> Shift work combined with PTSD creates severe sleep disruption. Nightmares, hypervigilance at bedtime, and irregular schedules compound each other. Sleep restoration is often a critical early focus of treatment.</p>
                <p><strong>Substance use as coping:</strong> First responders have elevated rates of alcohol and substance use, often as a way to manage symptoms they cannot or will not address directly. If you are using substances to cope with what you have seen, that pattern is important to examine honestly.</p>
                <p><strong>Peer support matters:</strong> Talking to someone who has been on similar calls and understands the culture can be more effective than general therapy. Many departments now have formal peer support teams, and organizations like Safe Call Now provide confidential support from fellow first responders.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is stored, transmitted, or visible to your department, command staff, or anyone else.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Cumulative Trauma vs. Single-Incident PTSD
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Most first responders don&apos;t develop PTSD from one catastrophic event — they develop
              it from the accumulated weight of thousands of difficult calls over a career. This
              distinction matters because it changes how the condition presents and how it&apos;s
              explained to yourself and others.
            </p>
            <p>
              <strong>Single-incident PTSD</strong> has a clear &quot;before&quot; — a specific event
              that changed things. The person can often point to it.
            </p>
            <p>
              <strong>Cumulative trauma</strong> builds slowly and invisibly. There&apos;s no single
              event to point to. The firefighter who has worked pediatric codes for 15 years, the
              dispatcher who has managed active shooter calls, the EMT whose 3,000th overdose call
              feels exactly like the first — this is cumulative critical incident stress, and it
              produces the same PTSD symptom profile without the clear origin story.
            </p>
            <p>
              This creates a specific barrier: many first responders don&apos;t believe they
              &quot;qualify&quot; for PTSD because nothing happened that seemed bad enough on its own.
              The cumulative weight doesn&apos;t feel like a trauma — it feels like the job. This is
              the operational normalization of traumatic load, and it&apos;s one of the reasons first
              responder PTSD goes unrecognized for so long.
            </p>
            <p>
              If you can&apos;t point to a specific event but recognize the symptom pattern on this
              screen, the absence of a clear incident doesn&apos;t invalidate what you&apos;re
              experiencing.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Operational Hypervigilance Problem
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              First responders are trained to maintain tactical awareness — scanning environments,
              positioning near exits, reading rooms for threats. These skills are professional assets
              in operational contexts.
            </p>
            <p>
              The problem: the nervous system doesn&apos;t switch these off when you&apos;re off duty.
              Hypervigilance that kept you alive on the job becomes hypervigilance at your kid&apos;s
              birthday party, at a restaurant, at a family gathering. What was adaptive becomes
              exhausting and relationship-damaging.
            </p>
            <p>
              Many first responders interpret this as &quot;just how I am now&quot; — a personality
              change, a consequence of the job they&apos;ve accepted. It is neither. It is a clinical
              symptom that responds to treatment. Prolonged Exposure and CPT both include specific
              components that address hypervigilance and help the nervous system recalibrate threat
              assessment between operational and civilian contexts.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Crisis and Support Resources Built for First Responders
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              These resources are specifically designed for public safety and emergency services
              professionals — staffed by people who understand the culture:
            </p>
            <div className="space-y-3">
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">Safe Call Now: <strong>1-206-459-3020</strong></p>
                <p className="text-sm">Confidential 24/7 crisis referral line specifically for public safety and emergency services. Staffed by former first responders and mental health professionals with first responder experience.</p>
              </div>
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">First H.E.L.P.</p>
                <p className="text-sm">firsthelp.org — Peer support and survivor assistance for first responders with PTSD and suicide history. Specific survivor support program.</p>
              </div>
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">Badge of Life</p>
                <p className="text-sm">badgeoflife.com — Psychological survival resources specifically for law enforcement.</p>
              </div>
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">IAFF Center of Excellence</p>
                <p className="text-sm">iaff-coe.org — Residential treatment program with specific programming for firefighters and their families.</p>
              </div>
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">Code Green Campaign</p>
                <p className="text-sm">codegreencampaign.org — Mental health awareness resources for EMS and fire; provider directory for clinicians with first responder experience.</p>
              </div>
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <p className="font-semibold text-slate-900 dark:text-white">SAMHSA First Responder Resources</p>
                <p className="text-sm">samhsa.gov/first-responders — Federal treatment locator and resources with first responder filter.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the PCL-5 PTSD Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how much you&apos;ve been bothered by each problem in the past month.
          </p>
        </div>
        <PCL5Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Call Safe Call Now</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>1-206-459-3020</strong> — a 24/7 crisis line staffed by and for first
                responders. They understand the job, the culture, and the specific challenges
                you face. Completely confidential. You can also visit safecallnow.org.
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Connect with peer support</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The <strong>Code Green Campaign</strong> and <strong>First Responder Support
                Network</strong> offer peer support, residential treatment programs, and
                resources specifically designed for first responders. Talking to someone who
                has been where you are can be the most effective first step.
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Find a first responder-informed therapist</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Not all therapists understand first responder culture. Look for clinicians
                who specialize in <strong>first responder trauma</strong> and use evidence-based
                approaches like CPT, PE, or EMDR. Your EAP can often provide referrals, and
                many programs now offer telehealth options for added privacy.
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
              <strong>Safe Call Now:</strong> <strong>1-206-459-3020</strong> — 24/7 crisis line for first responders
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess PTSD or related conditions. Your responses are processed
            entirely in your browser and are never stored or transmitted. Always consult a qualified
            healthcare professional for medical advice.
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
          <Link href="/pcl-5-ptsd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            PCL-5 PTSD Screening →
          </Link>
          <Link href="/ptsd-test-veterans" className="text-sky-600 dark:text-sky-400 hover:underline">
            PTSD Test for Veterans →
          </Link>
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT Alcohol Test →
          </Link>
        </div>
      </div>
    </>
  );
}
