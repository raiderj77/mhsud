import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PCL5Client } from "../pcl-5-ptsd-screening/PCL5Client";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/ptsd-test-veterans`;

export const metadata: Metadata = createMetadata({
  path: "/ptsd-test-veterans",
  title: "PTSD Test for Veterans — Free PCL-5 Screening",
  description:
    "Free PTSD screening for veterans using the validated PCL-5. Private, instant results. No signup.",
  keywords: [
    "ptsd test for veterans", "veteran ptsd screening", "pcl-5 veterans",
    "military ptsd test", "combat ptsd screening", "va ptsd test",
    "veteran ptsd quiz", "ptsd self-assessment veterans", "free ptsd test military",
    "veteran mental health screening", "ptsd symptoms veterans",
  ],
  openGraph: {
    title: "PTSD Test for Veterans — Free PCL-5 Screening",
    description: "Free, private PTSD screening for veterans using the clinically validated PCL-5. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How common is PTSD in veterans?",
    answer: "PTSD rates vary by service era. Among veterans of Operations Iraqi Freedom and Enduring Freedom (OIF/OEF), an estimated 11-20% experience PTSD in a given year. Gulf War veterans have rates around 12%, and estimates for Vietnam veterans range up to 15% over their lifetime. Military sexual trauma (MST) is another significant risk factor, affecting both men and women in service. These rates are substantially higher than the general civilian population (about 6-7% lifetime).",
  },
  {
    question: "Can PTSD develop years after military service?",
    answer: "Yes. Delayed-onset PTSD is well-documented in veterans. Some individuals may not develop full PTSD symptoms until months, years, or even decades after their traumatic experiences. Major life transitions — retirement, loss of a spouse, health problems, or other stressors — can trigger symptoms that were previously managed or suppressed. If you are a veteran experiencing new symptoms years after service, this is not unusual and you deserve support.",
  },
  {
    question: "What is the difference between PTSD and combat stress?",
    answer: "Combat stress (also called combat operational stress reaction) is a normal, temporary response to the extreme demands of warfare. Most service members recover from combat stress within days to weeks with rest and support. PTSD is a longer-lasting condition where symptoms like re-experiencing, avoidance, negative mood changes, and hyperarousal persist for more than a month and significantly interfere with daily life. Not everyone who experiences combat stress develops PTSD, but persistent symptoms warrant evaluation.",
  },
  {
    question: "Will the VA treat my PTSD?",
    answer: "Yes. The VA provides PTSD treatment regardless of whether you have a service-connected disability rating. VA medical centers offer evidence-based therapies including Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR). You can also access the VA PTSD consultation line at 1-802-296-6300 and the Veterans Crisis Line at 988 (press 1). Many Vet Centers also provide free readjustment counseling in community-based settings.",
  },
  {
    question: "Does a PTSD screening affect VA benefits or disability ratings?",
    answer: "Taking this online screening has no effect on your VA benefits — it is completely private and no data is stored or transmitted. If you seek formal evaluation through the VA, a PTSD diagnosis can support a service-connected disability claim. The VA rates PTSD from 0% to 100% based on symptom severity and functional impairment. Seeking help for PTSD does not negatively affect your benefits; in fact, it may help establish documentation for a claim.",
  },
  {
    question: "Is PTSD treatment effective for veterans?",
    answer: "Yes. Research strongly supports the effectiveness of PTSD treatment for veterans. CPT and PE therapy, both offered at VA facilities, have been shown to significantly reduce PTSD symptoms in 60-80% of veterans who complete treatment. EMDR is also effective. Many veterans see meaningful improvement within 8-15 sessions. Medication (such as SSRIs) can also help, especially when combined with therapy. The key is starting — many veterans delay treatment for years, but it is never too late to benefit.",
  },
  {
    question: "What about moral injury — is that the same as PTSD?",
    answer: "Moral injury and PTSD are related but distinct. Moral injury refers to the lasting psychological impact of actions (or failures to act) that violate a person's deeply held moral beliefs — such as harming civilians, following orders that felt wrong, or being unable to save a fellow service member. While moral injury can co-occur with PTSD, it involves more shame, guilt, and existential questioning than the fear-based symptoms of PTSD. Both are treatable, and VA clinicians are increasingly trained to address moral injury.",
  },
  {
    question: "Can I take this screening for a family member?",
    answer: "This screening is designed to be self-administered, but a family member can use it to better understand what their veteran may be experiencing. However, only the individual can accurately report their own symptoms. If you are concerned about a veteran in your life, encourage them to take the screening themselves or to contact the Veterans Crisis Line (call 988, press 1) or the VA PTSD consultation line (1-802-296-6300).",
  },
];

export default function PtsdTestVeteransPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "PTSD Test for Veterans — PCL-5 Screening",
              description: "A free, private PTSD screening tool for veterans using the clinically validated PCL-5 questionnaire.",
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
              { name: "PTSD Test for Veterans", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (PCL-5)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">
            Veterans &amp; Service Members
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          PTSD Test for Veterans
        </h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You served. You came home. But part of you might still be over there — replaying
            moments you can&apos;t shake, staying on high alert in places that should feel safe,
            or numbing out just to get through the day. If that sounds familiar, you&apos;re not
            broken. What you&apos;re experiencing has a name, it&apos;s well understood, and it&apos;s
            treatable.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free, private screening uses the <strong>PCL-5</strong>, the same PTSD checklist
            used by the VA and military clinicians worldwide. It takes about 5 minutes, your
            answers never leave your browser, and it can help you understand whether what
            you&apos;re feeling may be PTSD. This is <strong>not a diagnosis</strong> — but it
            can be the first step toward getting the support you earned.
          </p>
        </div>

        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold text-base hover:bg-sky-700 transition-colors shadow-sm"
          >
            Start the PTSD Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 5 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">11–20%</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                of veterans who served in OIF/OEF experience PTSD in a given year. Rates for
                Vietnam-era veterans are estimated at up to 15% over their lifetime.
                <span className="text-slate-500 dark:text-slate-400"> — VA National Center for PTSD</span>
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">Delayed onset</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                PTSD can develop months, years, or decades after military service. Life
                transitions like retirement or loss often trigger symptoms that were suppressed.
                <span className="text-slate-500 dark:text-slate-400"> — VA National Center for PTSD</span>
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">60–80% improve</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Evidence-based therapies like CPT and PE lead to significant symptom reduction
                in the majority of veterans who complete treatment. It is never too late to start.
                <span className="text-slate-500 dark:text-slate-400"> — American Psychological Association</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Understanding PTSD in Veterans
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Post-traumatic stress is not a sign of weakness — it is a normal response to abnormal
              experiences. Combat exposure, military sexual trauma (MST), blast injuries, witnessing
              death, and moral injury are among the most intense stressors any human can face. The
              fact that some service members develop PTSD reflects the severity of what they endured,
              not a character flaw.
            </p>
            <p>
              PTSD in veterans often co-occurs with other challenges. Substance use disorders are
              common — roughly 20% of veterans with PTSD also meet criteria for alcohol or drug use
              problems. Depression, chronic pain, traumatic brain injury (TBI), and sleep disorders
              frequently overlap with PTSD symptoms. This means screening is important even if you
              think your primary struggle is something else.
            </p>
            <p>
              One of the biggest barriers to care is stigma. Many veterans worry that seeking help
              will be seen as weakness, affect their career, or mean they are &quot;not handling
              it.&quot; The truth is that the strongest thing you can do is acknowledge when something
              is wrong and take action. The VA, Vet Centers, and community providers all offer
              confidential PTSD treatment, and seeking help does not negatively affect benefits or
              disability ratings.
            </p>
            <p>
              If you are a veteran experiencing nightmares, flashbacks, hypervigilance, emotional
              numbness, avoidance of reminders, difficulty trusting others, or feeling constantly
              on edge, this screening can help you understand whether your symptoms align with PTSD.
              It uses the PCL-5, the gold-standard screening tool recommended by the VA National
              Center for PTSD.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Moral Injury: Beyond Fear-Based PTSD
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Standard PTSD models are built around fear — a threat was perceived, the nervous system
              encoded it, and now it activates inappropriately. But a significant portion of veteran
              PTSD involves something different: <strong>moral injury</strong>.
            </p>
            <p>
              Moral injury occurs when a service member participates in, witnesses, fails to prevent,
              or learns about actions that violate their deeply held moral beliefs. It is not fear of
              death — it is the psychological weight of what happened, what was done, or what
              wasn&apos;t done. Common sources include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Following orders that resulted in civilian casualties</li>
              <li>Failing to save a fellow service member</li>
              <li>Witnessing atrocities without ability to intervene</li>
              <li>Being ordered to do something that felt morally wrong</li>
              <li>Surviving when others did not (survivor guilt)</li>
            </ul>
            <p>
              Moral injury produces guilt, shame, spiritual distress, and a fractured sense of
              self — not the hypervigilance and flashbacks that define classic PTSD. Standard trauma
              treatments like Prolonged Exposure address fear-based PTSD effectively; they address
              moral injury only partially.
            </p>
            <p>
              If your PTSD symptoms center more on guilt, shame, &quot;what I did&quot; or &quot;what
              I failed to do&quot; rather than fear of re-experiencing, tell your clinician
              explicitly. Adaptive Disclosure therapy and spiritually-integrated approaches are
              specifically designed for moral injury and are increasingly available through VA and
              community providers.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            TBI and PTSD: The Overlapping Picture
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Approximately <strong>22% of veterans with PTSD</strong> also have a comorbid traumatic
              brain injury from blast exposure. This matters clinically because TBI and PTSD produce
              nearly identical symptom profiles:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-600">
                    <th className="text-left py-2 pr-4 font-semibold">Symptom</th>
                    <th className="text-center py-2 px-4 font-semibold">PTSD</th>
                    <th className="text-center py-2 pl-4 font-semibold">TBI</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-400">
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Irritability and anger</td>
                    <td className="text-center py-2 px-4">&#x2713;</td>
                    <td className="text-center py-2 pl-4">&#x2713;</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Difficulty concentrating</td>
                    <td className="text-center py-2 px-4">&#x2713;</td>
                    <td className="text-center py-2 pl-4">&#x2713;</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Sleep disruption</td>
                    <td className="text-center py-2 px-4">&#x2713;</td>
                    <td className="text-center py-2 pl-4">&#x2713;</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Memory problems</td>
                    <td className="text-center py-2 px-4">&#x2713;</td>
                    <td className="text-center py-2 pl-4">&#x2713;</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Headaches</td>
                    <td className="text-center py-2 px-4">—</td>
                    <td className="text-center py-2 pl-4">&#x2713;</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Emotional numbing</td>
                    <td className="text-center py-2 px-4">&#x2713;</td>
                    <td className="text-center py-2 pl-4">—</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4">Flashbacks</td>
                    <td className="text-center py-2 px-4">&#x2713;</td>
                    <td className="text-center py-2 pl-4">—</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Light/noise sensitivity</td>
                    <td className="text-center py-2 px-4">—</td>
                    <td className="text-center py-2 pl-4">&#x2713;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              When both are present, treating only one produces incomplete results. A comprehensive
              evaluation at a VA Polytrauma center — which specializes in co-occurring TBI/PTSD — is
              the appropriate standard of care if you sustained blast exposure during service.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Military Sexual Trauma (MST)
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Military sexual trauma — sexual assault or sexual harassment during military
              service — affects approximately <strong>23% of women and 1% of men</strong> who have
              used VA care (VA, 2023). MST is among the strongest predictors of PTSD in veterans.
            </p>
            <p>Key facts every veteran should know:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>VA care for MST is available regardless of discharge status or service
                length.</strong> Veterans who experienced MST are entitled to free VA mental health
                treatment for MST-related conditions, even if they are otherwise ineligible for VA
                care.
              </li>
              <li>
                MST does not have to have been reported at the time of service to qualify for VA
                care or disability benefits.
              </li>
              <li>
                The VA has MST Coordinators at every VA medical center — a specific point of contact
                for navigating MST-related care.
              </li>
              <li>
                PTSD stemming from MST often presents differently than combat PTSD and responds best
                to clinicians with specific MST training.
              </li>
            </ul>
            <p>
              If MST is part of your history, contact the MST Coordinator at your nearest VA
              facility. You can find yours at va.gov/find-locations.
            </p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the PCL-5 PTSD Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how much you&apos;ve been bothered by each problem in the past month.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A PCL-5-based PTSD screening with military-specific context, combat trauma considerations, and VA resources."
          who="Veterans and active duty service members who want to screen for PTSD with relevant military support resources."
          bottomLine="PTSD affects an estimated 11-20% of veterans — the VA offers free, confidential PTSD treatment. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is PTSD Screening for Veterans?</h2>
        <h2>How Is the Veteran PTSD Test Scored?</h2>
        <h2>What Do My PTSD Screening Results Mean?</h2>
      </section>
<PCL5Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Veterans Crisis Line</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Call <strong>988</strong> and press <strong>1</strong>, or text <strong>838255</strong>.
                Trained responders who understand military experience. Free, confidential, 24/7.
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">VA PTSD Treatment</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Contact your local VA medical center or call the <strong>VA Health Benefits Hotline
                at 1-877-222-8387</strong>. VA offers evidence-based PTSD therapies (CPT, PE, EMDR)
                at no or low cost. Vet Centers also provide free readjustment counseling.
              </p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Make the Connection</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Visit <strong>maketheconnection.net</strong> to hear from other veterans who have
                been through PTSD treatment and come out the other side. Real stories, real recovery.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Veterans Crisis Line:</strong> Call <strong>988</strong>, press 1 — or text <strong>838255</strong></li>
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess PTSD. Your responses are processed entirely in your browser
            and are never stored or transmitted. Always consult a qualified healthcare professional for
            medical advice.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/pcl-5-ptsd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            PCL-5 PTSD Screening →
          </Link>
          <Link href="/depression-screening-for-veterans" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Test for Veterans →
          </Link>
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            AUDIT Alcohol Test →
          </Link>
        </div>
      </div>
    </>
  );
}
