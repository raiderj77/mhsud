import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AUDITClient } from "../audit-alcohol-test/AUDITClient";

const TOOL_URL = `${SITE_URL}/alcohol-screening-military`;

export const metadata: Metadata = createMetadata({
  path: "/alcohol-screening-military",
  title: "Alcohol Screening for Military — Free AUDIT",
  description:
    "Free confidential alcohol screening for military and veterans. AUDIT tool. Private, instant.",
  keywords: [
    "alcohol screening military", "military alcohol test", "veteran alcohol screening",
    "audit military", "military drinking test", "veteran alcohol assessment",
    "military substance use screening", "military alcohol use", "veteran drinking assessment",
    "armed forces alcohol test", "military binge drinking", "veteran substance abuse screening",
    "free military alcohol test", "confidential military alcohol screening",
    "service member alcohol assessment",
  ],
  openGraph: {
    title: "Alcohol Screening for Military — Free AUDIT",
    description: "Free, confidential alcohol screening for military service members and veterans using the AUDIT tool. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is heavy drinking common in the military?",
    answer: "Yes. Military culture has historically normalized heavy drinking, and rates of alcohol use are significantly higher than among civilians. Studies show that approximately 30% of active-duty service members meet criteria for hazardous drinking, compared to about 17% of the general population. Drinking often begins as social bonding but can escalate under the stress of service, deployments, and transitions.",
  },
  {
    question: "Will seeking help for alcohol use affect my security clearance?",
    answer: "Voluntarily seeking help for alcohol use generally does not negatively affect your security clearance. In fact, the Department of Defense has stated that self-referral for substance use treatment is viewed favorably and demonstrates responsibility. What can affect your clearance is untreated alcohol problems that lead to incidents, legal issues, or impaired duty performance. Getting help protects your career — avoiding it puts it at risk.",
  },
  {
    question: "Will getting help for alcohol use affect my military career?",
    answer: "Self-referral for alcohol treatment is protected under military policy and is generally not career-ending. The military has invested in substance abuse treatment programs specifically because it wants to retain trained personnel. Command-directed referrals (after an incident) carry more career implications than voluntary self-referral. Seeking help early, before problems escalate, is the strongest career-protective move you can make.",
  },
  {
    question: "What is the connection between PTSD and alcohol use?",
    answer: "PTSD and alcohol use are closely linked in military populations. Approximately 20% of veterans with PTSD also have a substance use disorder, and many use alcohol to self-medicate — to numb intrusive memories, reduce hypervigilance, or help with sleep. While alcohol may provide temporary relief, it worsens PTSD symptoms over time and creates a cycle that is difficult to break without professional support.",
  },
  {
    question: "What alcohol treatment does the VA offer?",
    answer: "The VA offers a range of alcohol treatment services at no cost to eligible veterans, including outpatient counseling, intensive outpatient programs, residential treatment, medication-assisted treatment, and support groups. Many VA facilities also offer integrated treatment for co-occurring conditions like PTSD. You can contact any VA medical center or call the Veterans Crisis Line (988, press 1) to get started.",
  },
  {
    question: "Is this screening confidential?",
    answer: "Yes, completely. This screening runs entirely in your browser. No data is stored, transmitted, or accessible to the military, the VA, your command, or anyone else. Your answers never leave your device. This is a private self-check that only you can see.",
  },
  {
    question: "What counts as binge drinking in the military?",
    answer: "Binge drinking is defined as consuming 5 or more drinks on one occasion for men, or 4 or more for women. In military populations, binge drinking rates are significantly higher than among civilians — approximately 65% of military drinkers report binge drinking, often tied to unit culture, post-deployment periods, and social environments that normalize heavy consumption.",
  },
  {
    question: "What are signs that my drinking may be a problem?",
    answer: "Signs include drinking more than you intended, needing more alcohol to feel the same effect, drinking to cope with stress or emotions, others expressing concern about your drinking, experiencing blackouts, missing duties or responsibilities due to alcohol, and feeling irritable or anxious when you cannot drink. If you are wondering whether your drinking is a problem, that question itself is worth exploring honestly.",
  },
];

export default function AlcoholScreeningMilitaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Alcohol Screening for Military — Free AUDIT Assessment",
              description: "A free, confidential alcohol screening tool for military service members and veterans using the clinically validated AUDIT questionnaire.",
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
              { name: "AUDIT Alcohol Test", url: `${SITE_URL}/audit-alcohol-test` },
              { name: "Alcohol Screening for Military", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (AUDIT)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">
            Military &amp; Veterans
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Alcohol Screening for Military
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You have carried things most people will never understand — the weight of service,
            the things you saw, the things you did, and the things you could not do. If drinking
            has become how you decompress, sleep, or quiet the noise, you are not alone. Alcohol
            use in the military is not just common — it is woven into the culture. But when
            &quot;having a few&quot; turns into something you need rather than choose, it
            deserves an honest look.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free, completely private screening uses the AUDIT (Alcohol Use Disorders
            Identification Test), a tool developed by the World Health Organization and used
            worldwide. It is <strong>not a diagnosis</strong>, and no one — not your command,
            the VA, or anyone else — will see your answers. Everything stays in your browser.
            This is between you and the screen.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold text-base hover:bg-sky-700 transition-colors shadow-sm"
          >
            Start the Alcohol Screening
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
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">Higher rates than civilians</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Military service members and veterans drink at significantly higher rates than the
                general population, with approximately 30% of active-duty personnel meeting criteria
                for hazardous drinking.
                <span className="text-slate-500 dark:text-slate-400"> — Department of Defense Health Survey</span>
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">65% binge drinking</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Approximately 65% of military drinkers report binge drinking episodes — nearly
                double the civilian rate. This pattern is often normalized within unit culture but
                carries serious health and safety risks.
                <span className="text-slate-500 dark:text-slate-400"> — RAND Corporation</span>
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">PTSD comorbidity ~20%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Approximately 20% of veterans with PTSD also have a substance use disorder. Alcohol
                is the most common substance used to self-medicate combat-related trauma, creating a
                cycle that worsens both conditions.
                <span className="text-slate-500 dark:text-slate-400"> — National Center for PTSD</span>
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
                This screening uses the <strong>AUDIT</strong> (Alcohol Use Disorders Identification
                Test), a 10-question tool developed by the World Health Organization and validated
                across military and veteran populations.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Drinking patterns:</strong> The AUDIT looks at how often you drink, how much, and whether your drinking has escalated — patterns that are especially important to recognize in military culture where heavy drinking is normalized.</p>
                <p><strong>Consequences:</strong> Questions about blackouts, injuries, and others&apos; concern help you see whether drinking is affecting areas of your life you may have been minimizing.</p>
                <p><strong>Combat and transition:</strong> Many service members and veterans increase drinking during deployments, post-deployment, or during the transition to civilian life. This screening can help you take stock of where you are now.</p>
                <p><strong>What it&apos;s not:</strong> This is a screening tool, not a diagnosis or a judgment. A high score does not mean you are an &quot;alcoholic&quot; — it means your drinking pattern may benefit from professional guidance.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is reported to your command, the VA, your security clearance review, or anyone else. Period.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the AUDIT Alcohol Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question honestly based on your drinking over the past year.
          </p>
        </div>
        <AUDITClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Veterans Crisis Line</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Call <strong>988, then press 1</strong> to reach the Veterans Crisis Line. Trained
                responders who understand military culture are available 24/7. You can also text
                838255 or chat online at veteranscrisisline.net. You do not have to be in immediate
                danger to call.
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Military OneSource</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Call <strong>1-800-342-9647</strong> for free, confidential counseling and referrals
                available to active-duty, Guard, Reserve, and their families. Military OneSource
                provides up to 12 free non-medical counseling sessions and can connect you with
                substance use resources.
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">VA substance use treatment</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The VA offers free alcohol treatment for eligible veterans, including outpatient
                counseling, intensive programs, residential treatment, and medication-assisted
                treatment. Many VA facilities provide integrated care for alcohol use and PTSD.
                Contact your local VA or call the VA health benefits hotline at 1-877-222-8387.
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
              <strong>Veterans Crisis Line:</strong> Call <strong>988, press 1</strong> — or text <strong>838255</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>Military OneSource:</strong> <strong>1-800-342-9647</strong> — free counseling and referrals, 24/7
            </li>
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
            healthcare professional can assess alcohol use disorders. Your responses are processed entirely
            in your browser and are never stored or transmitted. This screening is not affiliated with the
            Department of Defense, the VA, or any military branch. Always consult a qualified healthcare
            professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Reviewed by a Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years
            of clinical experience in substance abuse counseling.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT Alcohol Test →
          </Link>
          <Link href="/ptsd-test-veterans" className="text-sky-600 dark:text-sky-400 hover:underline">
            PTSD Test for Veterans →
          </Link>
          <Link href="/dast-10-drug-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            DAST-10 Drug Screening →
          </Link>
        </div>
      </div>
    </>
  );
}
