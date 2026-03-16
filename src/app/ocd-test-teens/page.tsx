import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { OCIRClient } from "../oci-r-ocd-screening/OCIRClient";

const TOOL_URL = `${SITE_URL}/ocd-test-teens`;

export const metadata: Metadata = createMetadata({
  path: "/ocd-test-teens",
  title: "OCD Test for Teens — Free OCI-R Screening",
  description: "Free OCD screening for teenagers using the OCI-R. Private, instant results. No signup required.",
  keywords: ["ocd test for teens", "teen ocd screening", "ocd quiz teenagers", "adolescent ocd test", "ocd symptoms teens", "oci-r teens", "teen ocd signs", "ocd screening adolescents", "free ocd test teens"],
  openGraph: { title: "OCD Test for Teens — Free OCI-R Screening", description: "Free, private OCD screening for teenagers using the OCI-R. Instant results, no signup.", url: TOOL_URL, type: "website" },
});

const FAQ_DATA = [
  { question: "Is OCD common in teenagers?", answer: "Yes. OCD affects about 1-2% of children and adolescents, with the average age of onset around 10-12 years old. A second peak occurs during late adolescence. OCD is the fourth most common mental health condition in young people. Many teens suffer in silence for years before being diagnosed, with the average delay to treatment being 7-10 years." },
  { question: "How is OCD different from normal teenage worrying?", answer: "Normal worry is about realistic concerns (tests, friendships, the future) and can be managed. OCD involves intrusive, unwanted thoughts (obsessions) that cause intense distress and lead to repetitive behaviors or mental rituals (compulsions) performed to reduce that distress. The key difference is that OCD thoughts feel alien and unwanted, the distress is disproportionate, and the compulsions provide only temporary relief before the cycle starts again." },
  { question: "What does OCD look like in teens?", answer: "Common OCD themes in teens include contamination fears and excessive handwashing, fear of harm to self or loved ones, need for symmetry or exactness, sexual or religious obsessions that feel deeply disturbing, checking behaviors (doors, locks, homework), and mental rituals (counting, repeating phrases). Teens may also experience 'just right' OCD — a feeling that something is not right that they cannot explain. Many teens hide their symptoms out of shame." },
  { question: "Can OCD affect school performance?", answer: "Significantly. OCD can cause difficulty concentrating (intrusive thoughts interrupt focus), perfectionism that slows work to a crawl, avoidance of certain subjects or activities, excessive time on homework (rewriting, rechecking), tardiness due to rituals, and school refusal. Many teens with OCD are intelligent and capable but cannot perform to their ability. School accommodations (504 plan or IEP) may be appropriate." },
  { question: "Should I tell my parents about my OCD?", answer: "If you feel safe doing so, telling a parent or trusted adult is an important step toward getting help. You might say: 'I've been having really stressful thoughts that I can't control, and I think I might need to talk to someone.' If talking to parents feels impossible, consider a school counselor, trusted teacher, or the Crisis Text Line (text HOME to 741741). OCD is highly treatable, but it rarely improves without professional support." },
  { question: "What is ERP therapy for OCD?", answer: "Exposure and Response Prevention (ERP) is the gold-standard treatment for OCD. It involves gradually facing feared situations (exposures) while resisting the urge to perform compulsions (response prevention). For example, a teen with contamination OCD might touch a doorknob and resist washing their hands, learning that the anxiety naturally decreases on its own. ERP is effective for 60-80% of people with OCD and is available through OCD-specialized therapists." },
  { question: "Does OCD go away on its own?", answer: "OCD rarely resolves without treatment. Symptoms may fluctuate in severity — worsening during periods of stress and improving during calmer times — but the underlying condition typically persists. Without treatment, OCD tends to become more entrenched over time as avoidance patterns deepen. The earlier treatment begins, the better the outcomes. ERP therapy combined with medication (when needed) is highly effective." },
  { question: "Where can teens get OCD treatment?", answer: "The International OCD Foundation (iocdf.org) maintains a therapist directory of OCD specialists, including those who work with adolescents. Many therapists offer telehealth sessions. For crisis support, text HOME to 741741 (Crisis Text Line). Your pediatrician can also provide referrals. Look for therapists trained specifically in ERP — general therapy without ERP is much less effective for OCD." },
];

export default function OcdTestTeensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "OCD Test for Teens — OCI-R Screening", description: "A free, private OCD screening tool for teenagers using the OCI-R.", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-03-05" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "OCI-R OCD Screening", url: `${SITE_URL}/oci-r-ocd-screening` }, { name: "OCD Test for Teens", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (OCI-R)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">Ages 12+</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">OCD Test for Teens</h1>
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">If your brain gets stuck on certain thoughts — thoughts that scare you, disgust you, or just won&apos;t go away no matter what you do — and you find yourself doing things over and over to try to make them stop, you might be dealing with OCD. It&apos;s not about being &quot;neat&quot; or &quot;organized.&quot; OCD is a real condition, and it affects about 1-2% of teenagers.</p>
          <p className="text-lg text-slate-600 dark:text-slate-300">This screening uses the <strong>OCI-R</strong>, a validated OCD assessment. It is <strong>not a diagnosis</strong>, but it can help you understand what you&apos;re experiencing and whether it&apos;s worth talking to someone about.</p>
        </div>
        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold text-base hover:bg-sky-700 transition-colors shadow-sm">Start the OCD Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 3 minutes. Completely private — nothing is stored or shared.</p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding OCD in Teenagers</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>OCD often begins in adolescence, when the brain is undergoing significant development. Unlike the popular misconception of OCD as a preference for cleanliness, true OCD involves intrusive thoughts that are deeply distressing and compulsive behaviors performed to manage that distress. Common themes in teens include contamination, harm to self or others, symmetry, religious or moral scrupulosity, and unwanted sexual thoughts.</p>
            <p>Many teens with OCD hide their symptoms because the thoughts feel shameful or frightening. A teen with harm OCD may worry they are dangerous, while a teen with sexual obsessions may fear something is fundamentally wrong with them. These thoughts are ego-dystonic — meaning they go against who the person actually is — which is precisely what makes them so distressing.</p>
            <p>OCD can significantly impact academic performance, social relationships, and family life. Teens may spend hours on rituals, avoid triggering situations, or become irritable and withdrawn. Parents may notice increased time in the bathroom, repeated questions seeking reassurance, or emotional meltdowns that seem disproportionate to the situation.</p>
            <p>The good news: OCD is highly treatable. Exposure and Response Prevention (ERP) therapy is effective for 60-80% of people with OCD. Finding a therapist specifically trained in ERP (not just general therapy) is important. The International OCD Foundation at iocdf.org is an excellent starting resource.</p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the OCI-R OCD Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Rate how much each experience has bothered you during the past month.</p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Teen OCD Screening?</h2>
        <h2>How Is the Teen OCD Test Scored?</h2>
        <h2>What Do My OCD Screening Results Mean?</h2>
      </section>
<OCIRClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong></li>
            <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li><strong>IOCDF:</strong> <strong>iocdf.org</strong> — OCD therapist directory</li>
            <li><strong>SAMHSA:</strong> <strong>1-800-662-4357</strong></li>
          </ul>
        </div>
        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified healthcare professional can assess OCD. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026 by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.</p>
        </div>
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/oci-r-ocd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">OCI-R OCD Screening →</Link>
          <Link href="/anxiety-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">Anxiety Test for Teens →</Link>
          <Link href="/depression-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">Depression Test for Teens →</Link>
        </div>
      </div>
    </>
  );
}
