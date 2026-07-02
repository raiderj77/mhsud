import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, medicalWebPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";

const TOOL_URL = `${SITE_URL}/burnout-test-for-healthcare-workers`;

export const metadata: Metadata = createMetadata({
  path: "/burnout-test-for-healthcare-workers",
  title: "Burnout Test for Healthcare Workers, Free",
  description:
    "Free burnout assessment for nurses, doctors, and healthcare staff. Private, instant results.",
  keywords: [
    "burnout test healthcare workers", "healthcare burnout assessment", "nurse burnout",
    "doctor burnout", "compassion fatigue test", "healthcare worker mental health",
    "medical professional burnout", "healthcare burnout screening", "physician burnout test",
    "hospital worker burnout", "healthcare staff burnout", "frontline worker burnout",
    "medical burnout assessment", "free healthcare burnout test", "healthcare worker stress test",
  ],
  openGraph: {
    title: "Burnout Test for Healthcare Workers, Free",
    description: "Free, private burnout assessment for nurses, doctors, and healthcare staff. Instant results, no sign-up required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How common is burnout among healthcare workers post-pandemic?",
    answer: "Burnout among healthcare workers has reached crisis levels since the COVID-19 pandemic. Studies consistently show that more than 50% of physicians, nurses, and other healthcare staff report significant burnout symptoms. Some specialties, emergency medicine, critical care, and primary care, report rates above 60%. This is not a personal failing; it is a systemic crisis affecting the entire healthcare workforce.",
  },
  {
    question: "What is the difference between burnout and compassion fatigue?",
    answer: "Burnout develops gradually from chronic workplace stress, long hours, administrative burden, staffing shortages, and feeling undervalued. Compassion fatigue (also called secondary traumatic stress) comes specifically from the emotional cost of caring for suffering and dying patients. Healthcare workers often experience both simultaneously. Burnout leaves you feeling depleted and cynical; compassion fatigue leaves you emotionally numb to the pain you once felt deeply.",
  },
  {
    question: "What is moral injury in healthcare?",
    answer: "Moral injury occurs when healthcare workers are forced to act against their values, when you know what a patient needs but cannot provide it due to staffing, policies, insurance restrictions, or resource limitations. It is the distress of being unable to give the care you were trained to give. Moral injury is increasingly recognized as a distinct and significant contributor to healthcare worker distress, separate from but often coexisting with burnout.",
  },
  {
    question: "Can burnout affect the quality of patient care?",
    answer: "Yes. Research consistently links healthcare worker burnout to higher rates of medical errors, increased hospital-acquired infections, lower patient satisfaction, and higher patient mortality. Burned-out clinicians are also more likely to reduce their hours or leave the profession entirely, worsening staffing shortages. Taking care of yourself is not selfish, it is directly connected to patient safety.",
  },
  {
    question: "Should I tell my employer I am experiencing burnout?",
    answer: "This is a personal decision that depends on your workplace culture and leadership. Many healthcare organizations now have Employee Assistance Programs (EAPs) that are confidential and free. Some employers have peer support programs specifically for clinical staff. If you are unsure about your workplace culture, consider starting with your EAP or an outside therapist. You can also contact the Dr. Lorna Breen Heroes Foundation for resources tailored to healthcare workers.",
  },
  {
    question: "How did COVID-19 impact healthcare worker burnout?",
    answer: "The pandemic dramatically accelerated burnout across all healthcare roles. Workers faced unprecedented patient volumes, PPE shortages, rapidly changing protocols, moral distress from resource allocation decisions, personal infection risk, and the trauma of mass patient deaths. Many also experienced social isolation, public hostility, and grief. More than 100,000 registered nurses left the profession between 2020 and 2023, and physician burnout rates reached historic highs.",
  },
  {
    question: "Does burnout mean I should change careers?",
    answer: "Not necessarily. Burnout is often driven by systemic factors, workload, staffing, leadership, and organizational culture, rather than the work itself. Many healthcare workers who address burnout through therapy, boundary-setting, schedule changes, or moving to a different setting find renewed purpose. However, if you have explored these options and the environment remains unsustainable, a career change is a legitimate and healthy choice. There is no shame in protecting yourself.",
  },
  {
    question: "What resources exist specifically for healthcare worker burnout?",
    answer: "The Dr. Lorna Breen Heroes Foundation offers free resources, advocacy, and support specifically for healthcare workers. Many state medical and nursing boards have confidential peer assistance programs. The National Academy of Medicine Action Collaborative on Clinician Well-Being provides evidence-based resources. Your hospital or clinic likely offers an Employee Assistance Program (EAP) with free, confidential counseling sessions.",
  },
];

export default function BurnoutTestForHealthcareWorkersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Burnout Test for Healthcare Workers, Free Assessment",
              description: "A free, private burnout screening tool for nurses, doctors, and healthcare staff assessing emotional exhaustion, depersonalization, and reduced personal accomplishment.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-05-08",
            }),
      reviewedBy: { "@type": "Organization", "name": "Your Friendly Developer LLC" },
    }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...medicalWebPageJsonLd({
              name: "Burnout Test for Healthcare Workers",
              description: "A clinically informed burnout screening for physicians, nurses, therapists, EMTs, social workers, and medical residents covering all three Maslach burnout dimensions, moral injury, and post-pandemic workforce context.",
              url: TOOL_URL,
              lastReviewed: "2026-05-08",
            }),
      reviewedBy: { "@type": "Organization", "name": "Your Friendly Developer LLC" },
    }),
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
              { name: "Burnout Test for Healthcare Workers", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Informed
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
            Healthcare Workers
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Burnout Test for Healthcare Workers
        </h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You went into healthcare to help people. You trained for years, took on debt, worked
            through nights and holidays, because this work matters to you. But somewhere between
            the 14-hour shifts, the staffing shortages, the patients you couldn&apos;t save, and
            the paperwork that never ends, you started running on empty. If you&apos;re reading
            this between patients, after a brutal shift, or on a rare day off that doesn&apos;t
            feel like rest, you already know something has to change.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Burnout in healthcare isn&apos;t a personal failure, it&apos;s the predictable result
            of a system that asks too much and gives too little back. Whether you&apos;re a nurse,
            physician, therapist, EMT, or any other healthcare professional, this free, private
            screening can help you understand what you&apos;re experiencing and what to do next.
            It is <strong>not a diagnosis</strong>, but it can be the first step toward taking
            yourself as seriously as you take your patients.
          </p>
        </div>

        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold text-base hover:bg-rose-700 transition-colors shadow-sm"
          >
            Start the Burnout Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 5 minutes. Completely private, nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">50%+ burned out</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                More than half of healthcare workers report significant burnout symptoms post-pandemic.
                In some specialties, rates exceed 60%. This is a workforce crisis, not a personal one.
                <span className="text-slate-500 dark:text-slate-400">, National Academy of Medicine (2022)</span>
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">100K+ left the profession</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                More than 100,000 registered nurses left healthcare between 2020 and 2023, with
                thousands of physicians following. Burnout, moral injury, and unsustainable conditions
                are driving the exodus.
                <span className="text-slate-500 dark:text-slate-400">, NCSBN</span>
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">Patient safety link</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Research connects healthcare worker burnout to higher medical error rates, increased
                hospital-acquired infections, and higher patient mortality. Your well-being and your
                patients&apos; safety are inseparable.
                <span className="text-slate-500 dark:text-slate-400">, The Lancet</span>
              </p>
            </div>
          </div>
        </div>

        {/* The NAM Report */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">The National Academy of Medicine Report: What the Data Shows</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              The 2022 National Academy of Medicine report <em>Implementing High-Quality Primary Care</em> and the follow-up <em>Taking Action Against Clinician Burnout</em> represent the most comprehensive federal examination of healthcare worker mental health to date. The NAM identified burnout not as a workforce attitude problem but as a systems design failure, one that could be measured, attributed to specific organizational factors, and addressed through structural intervention. The core finding: the healthcare system is architected around patient throughput in ways that are fundamentally incompatible with clinician well-being.
            </p>
            <p>
              The NAM data showed that physicians die by suicide at rates 1.4 times higher than the general population (men) and 2.27 times higher (women). These figures, drawn from AMA Masterfile mortality data, represent the endpoint of a long chain of unaddressed distress, and they underscore why burnout screening in healthcare is not a wellness initiative but a patient safety and workforce survival issue. The report specifically called for removal of licensing and credentialing barriers to seeking mental health treatment, which historically have deterred physicians and nurses from getting help due to fear of reporting requirements.
            </p>
            <p>
              The CDC/NIOSH <em>Impact of COVID-19 on the Healthcare Workforce</em> survey, which followed more than 46,000 healthcare workers across all roles, found that burnout symptoms were not confined to clinical roles. Administrators, medical assistants, technicians, and support staff reported comparable rates of emotional exhaustion and intent to leave. This is a whole-workforce crisis, it is not limited to physicians and nurses who are most visible in the data.
            </p>
          </div>
        </div>

        {/* Moral Injury vs Burnout */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Moral Injury: The Construct Burnout Doesn&apos;t Fully Capture</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Burnout and moral injury are frequently conflated in healthcare discussions, but they are distinct constructs that respond to different interventions. Burnout, as defined by the Maslach framework, is the result of chronic exposure to high demands with insufficient resources. The locus is organizational: too much work, too little support, insufficient autonomy. The symptoms are exhaustion, cynicism, and reduced efficacy.
            </p>
            <p>
              Moral injury is the psychological wound caused by participating in, witnessing, or failing to prevent actions that violate one&apos;s moral code. In healthcare, the classic moral injury scenario is the clinician who knows what a patient needs, an additional day in the ICU, a specialist consultation, a medication that insurance will not cover, and is forced by system constraints to provide less. The distress is not from being overworked; it is from being complicit in a system that delivers inadequate care. This distinction matters clinically because moral injury does not respond to burnout prevention strategies like mindfulness, schedule optimization, or self-care. It requires addressing the ethical wound directly, through processing the specific incidents, finding meaning, and often engaging in systemic advocacy.
            </p>
            <p>
              EMTs and emergency responders carry a specific moral injury burden related to mass casualty events, resource triage decisions, and the gap between pre-hospital interventions and definitive care outcomes. Social workers face moral injury from caseload constraints that prevent adequate service delivery. Medical residents face it from supervision structures that limit their ability to advocate for patients. Recognizing which construct applies to your distress, burnout, compassion fatigue, or moral injury, is the first step toward choosing the right response.
            </p>
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
                This screening assesses the core dimensions of burnout that are especially
                relevant for healthcare professionals:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Emotional exhaustion:</strong> Feeling drained, depleted, and like you have nothing left to give, compounded by shift work, patient deaths, and the relentless pace of healthcare.</p>
                <p><strong>Depersonalization:</strong> Feeling detached from patients, treating them as cases rather than people, or developing a cynicism that doesn&apos;t feel like you.</p>
                <p><strong>Reduced accomplishment:</strong> Feeling like your work doesn&apos;t matter, that the system swallows your effort, or that you&apos;ve lost the purpose that brought you to healthcare.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is stored, transmitted, or visible to your employer, licensing board, or anyone else.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Citations */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Clinical References</h2>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="https://www.cdc.gov/niosh/docs/2023-114/default.html" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">CDC/NIOSH, Impact of COVID-19 on the Healthcare Workforce (2023)</a></li>
            <li><a href="https://www.samhsa.gov/workplace/resources" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">SAMHSA, Workplace Wellness and Clinician Mental Health Resources</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/31157115/" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">Shanafelt &amp; Noseworthy, Executive Leadership and Physician Well-Being (PubMed)</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/30379552/" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">Dutheil et al., Suicide among physicians and healthcare workers: a systematic review (PubMed)</a></li>
            <li><a href="https://www.nimh.nih.gov/health/topics/depression" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">NIMH, Depression (burnout-depression co-occurrence in clinicians)</a></li>
          </ul>
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
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: May 8, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6"><AnswerBlock what="A burnout screening tailored for healthcare professionals with context specific to clinical care environments." who="Doctors, nurses, therapists, and other healthcare workers experiencing exhaustion, compassion fatigue, or detachment." bottomLine="Healthcare worker burnout affects patient care, addressing your wellbeing is not selfish, it is essential. This tool is for informational purposes only. Not a substitute for professional mental health treatment." lastUpdated="2026-05-08" /></div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools &middot; Your Friendly Developer LLC
    </p>
    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
      <span>
        Published:{" "}
        <time dateTime="2025-01-01">
          {new Date("2025-01-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
      <span>
        Last reviewed:{" "}
        <time dateTime="2026-05-08">
          {new Date("2026-05-08T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>
      <section className="sr-only">
        <h2>What Is Healthcare Worker Burnout Screening?</h2>
        <h2>How Is the Burnout Test Scored?</h2>
        <h2>What Do My Burnout Screening Results Mean?</h2>
      </section>
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
                Program</strong> with confidential counseling sessions. Your employer does not know
                what you discuss. This is one of the most underused resources in healthcare, and it
                exists for exactly this situation.
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Dr. Lorna Breen Heroes Foundation</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Named after Dr. Lorna Breen, an ER physician who died by suicide during COVID-19,
                this foundation advocates for healthcare worker mental health and provides free
                resources, training, and support. Visit{" "}
                <strong>drlornabreen.org</strong> for tools designed specifically for you.
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Address the system, not just yourself</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Individual coping strategies matter, but burnout is primarily a systemic problem.
                Advocate for better staffing ratios, reasonable schedules, and leadership that
                prioritizes clinician well-being. You deserve a workplace that sustains you, not
                one that consumes you.
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
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong>, free, 24/7, confidential
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text HOME to <strong>741741</strong>, free, 24/7
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong>, free referrals, 24/7
            </li>
            <li>
              <strong>Dr. Lorna Breen Heroes Foundation:</strong> <strong>drlornabreen.org</strong>, resources and advocacy for healthcare worker mental health
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only, it is not a diagnosis. Only a qualified
            healthcare professional can assess burnout or related conditions. Your responses are processed
            entirely in your browser and are never stored or transmitted. Always consult a qualified
            healthcare professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Compiled by Jason Ramirez, CADC-II. Clinical content drawn from WHO, CDC NIOSH, and NIMH. This is a self-reflection tool, not a clinical assessment.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: May 2026
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
