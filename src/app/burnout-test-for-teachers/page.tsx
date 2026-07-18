import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, medicalWebPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/burnout-test-for-teachers`;

export const metadata: Metadata = createMetadata({
  path: "/burnout-test-for-teachers",
  title: "Burnout Test for Teachers, Free Assessment",
  description: "Free teacher burnout assessment. Evaluate exhaustion, detachment, and effectiveness. Private results.",
  keywords: ["burnout test for teachers", "teacher burnout assessment", "teacher burnout quiz", "am i burned out teacher", "teaching burnout test", "educator burnout screening", "teacher stress test", "teacher mental health", "free teacher burnout test"],
  openGraph: { title: "Burnout Test for Teachers, Free Assessment", description: "Free, private burnout assessment for teachers and educators. Instant results, no signup.", url: TOOL_URL, type: "website" },
});

const FAQ_DATA = [
  { question: "How common is teacher burnout?", answer: "Teacher burnout has reached crisis levels. Surveys consistently show that 44% or more of K-12 teachers report feeling burned out, and over half say they are considering leaving the profession. These numbers have worsened significantly since the pandemic. Burnout rates are highest among special education teachers, early-career teachers, and those in under-resourced schools. Teacher burnout is not an individual failing, it is a systemic crisis." },
  { question: "What causes teacher burnout?", answer: "Teacher burnout results from chronic imbalance between demands and resources. Key factors include: large class sizes, excessive administrative tasks, lack of planning time, emotional labor of supporting struggling students, parental pressure and conflict, low compensation relative to workload, lack of autonomy, constant policy changes, standardized testing pressure, and insufficient support from administration. The pandemic added technology demands, learning loss recovery, and student mental health crises." },
  { question: "Is burnout the same as being tired?", answer: "No. Being tired resolves with rest. Burnout is a state of chronic physical, emotional, and mental exhaustion accompanied by feelings of cynicism, detachment, and reduced effectiveness. A tired teacher recovers over the weekend; a burned-out teacher dreads Monday starting on Friday evening. Burnout involves a fundamental loss of purpose and meaning, the feeling that no matter how hard you try, it will never be enough." },
  { question: "Is teacher burnout the same as compassion fatigue?", answer: "They are related but distinct. Burnout is driven by chronic workplace demands, class size, administrative load, lack of autonomy. Compassion fatigue is driven specifically by emotional exposure to others' suffering and trauma: absorbing a student's abuse situation, a family's crisis, a classmate's death. A teacher can have burnout without compassion fatigue, compassion fatigue without full burnout, or both simultaneously. This assessment measures burnout dimensions; compassion fatigue requires a separate instrument (typically the ProQOL)." },
  { question: "Can burnout affect my teaching?", answer: "Yes. Research shows that teacher burnout leads to decreased instructional quality, reduced patience, more negative interactions with students, higher absenteeism, and lower student achievement. Burned-out teachers are more likely to use controlling rather than supportive teaching styles. This is not about caring less, it is about having less to give. Recognizing burnout is the first step toward protecting both yourself and your students." },
  { question: "Is teacher burnout the same as depression?", answer: "They share symptoms (exhaustion, withdrawal, hopelessness) but are distinct. Burnout is specifically tied to work context, a burned-out teacher may still enjoy activities outside school. Depression is pervasive and affects all areas of life. However, chronic burnout significantly increases the risk of developing clinical depression. If your symptoms extend beyond work into all areas of your life, screening for depression is also recommended." },
  { question: "Should I talk to my principal about burnout?", answer: "This depends on your relationship with your administration. Some principals are supportive and may be able to reduce demands or provide resources. Others may not respond constructively. Consider starting with your EAP (Employee Assistance Program), which provides free confidential counseling. Connecting with trusted colleagues who understand your experience can also help. Teacher unions and professional organizations may offer additional support resources." },
  { question: "How can teachers prevent or reduce burnout?", answer: "Individual strategies include setting firm boundaries (no email after 7 PM), protecting non-work time, connecting with supportive colleagues, regular exercise, saying no to extra committees, and seeking therapy. Systemic solutions matter more: advocating for smaller class sizes, planning time, mental health support, fair compensation, and reduced administrative burden. Teacher burnout is fundamentally a systems problem that requires systems solutions." },
  { question: "When should I consider taking leave?", answer: "Consider leave if: you are experiencing physical symptoms (chronic illness, insomnia, panic attacks), you dread going to work every day, you feel emotionally disconnected from your students, your personal relationships are suffering, or you have been told by a healthcare provider that your stress is affecting your health. FMLA may protect your position. Talk to your doctor and HR about options including medical leave, reduced schedule, or sabbatical." },
];

export default function BurnoutTestForTeachersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      ...toolPageJsonLd({ name: "Burnout Test for Teachers, Self-Assessment", description: "A free, private burnout screening tool for teachers and educators.", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-05-08" }),
      reviewedBy: { "@type": "Person", "name": "Jason Ramirez", "jobTitle": "Certified Drug and Alcohol Counselor (CADC-II)", "url": "https://mindchecktools.com/about/jason-ramirez" },
    }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      ...medicalWebPageJsonLd({ name: "Burnout Test for Teachers", description: "A clinically informed burnout screening for K-12 and higher education teachers covering the three dimensions of burnout: emotional exhaustion, depersonalization, and reduced personal accomplishment.", url: TOOL_URL, lastReviewed: "2026-05-08" }),
      reviewedBy: { "@type": "Person", "name": "Jason Ramirez", "jobTitle": "Certified Drug and Alcohol Counselor (CADC-II)", "url": "https://mindchecktools.com/about/jason-ramirez" },
    }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Burnout Assessment Tool", url: `${SITE_URL}/burnout-assessment-tool` }, { name: "Burnout Test for Teachers", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Informed</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Teachers &amp; Educators</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Burnout Test for Teachers</h1>
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">You went into teaching to make a difference. But somewhere between the lesson plans, the grading, the parent emails, the meetings that could have been emails, and the students who need more than any one person can give, you started running on empty. If Sunday nights fill you with dread and you can&apos;t remember the last time teaching felt meaningful, you are not alone.</p>
          <p className="text-lg text-slate-600 dark:text-slate-300">This free assessment can help you understand where you are. It is <strong>not a diagnosis</strong>, but it can validate what you&apos;re feeling and help you decide what to do next.</p>
        </div>
        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold text-base hover:bg-amber-700 transition-colors shadow-sm">Start the Burnout Assessment</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 5 minutes. Completely private, nothing is stored or shared.</p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">44%+ of teachers</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Report feeling burned out, a rate that has climbed sharply since the pandemic. Special education teachers and those in under-resourced schools report even higher rates.<span className="text-slate-500 dark:text-slate-400">, RAND American Teacher Panel</span></p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">Over half</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Of teachers who report burnout say they are considering leaving the profession. The U.S. is losing experienced educators faster than it can replace them, not because teachers lack dedication, but because the system demands more than any person can sustainably give.<span className="text-slate-500 dark:text-slate-400">, National Education Association</span></p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">$8.5 billion</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Estimated annual cost of teacher turnover in the U.S. The hidden cost is paid by students, research consistently shows that teacher burnout reduces instructional quality, increases absenteeism, and lowers student achievement.<span className="text-slate-500 dark:text-slate-400">, Learning Policy Institute</span></p>
            </div>
          </div>
        </div>

        {/* Understanding Teacher Burnout */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding Teacher Burnout</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              The clinical framework for burnout, developed by psychologist Christina Maslach, identifies three core dimensions: <strong>emotional exhaustion</strong> (feeling drained and depleted), <strong>depersonalization</strong> (growing cynical or detached from students, treating them as burdens rather than people), and <strong>reduced personal accomplishment</strong> (feeling like your efforts don&apos;t matter). A teacher can experience one, two, or all three simultaneously. This assessment measures all three to give you a complete picture rather than a single score.
            </p>
            <p>
              For teachers, emotional exhaustion is typically the first dimension to activate. The workday does not end at 3 PM, it extends into evenings and weekends through grading, lesson planning, parent communication, and compliance paperwork. The CDC/NIOSH framework on occupational stress identifies chronic overwork combined with low autonomy as among the highest-risk conditions for burnout, and teaching scores poorly on both. Teachers rarely control their schedules, their curriculum mandates, or their class sizes, yet they are held individually accountable for outcomes shaped by dozens of variables outside their control.
            </p>
            <p>
              Depersonalization, often described as the most painful phase, is not a character flaw. It is a survival mechanism. When emotional resources are depleted, the psyche begins protecting itself by creating distance. A teacher who once stayed late to help struggling students starts watching the clock. The student who seemed fascinating last year now seems like an obstacle. This is not who you are; it is what chronic depletion does to human beings.
            </p>
            <p>
              The <strong>summer-recovery myth</strong> deserves specific attention. Many teachers internalize the idea that summer will fix everything, that two months off will reset them. For teachers in early-to-moderate burnout, summer may provide partial relief. For teachers in severe burnout, the first few weeks of the following school year can feel worse than where they left off, because the relief was insufficient and the demands return unchanged. Summer is not a cure for a systemic problem; it is a temporary pause.
            </p>
            <p>
              Administrative compliance creep, the steady expansion of mandatory documentation, data entry, IEP meetings, professional development hours, and reporting requirements, now consumes an estimated 40–50% of many teachers&apos; working hours. Time spent on compliance is time not spent teaching, connecting with students, or recovering. When teachers report that they did not sign up for this, they are clinically correct: the job has expanded in ways that were not part of the original professional contract.
            </p>
          </div>
        </div>

        {/* Burnout vs Compassion Fatigue */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Burnout vs. Compassion Fatigue: Why the Distinction Matters</h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
              <p>Teachers frequently experience both burnout and compassion fatigue, and the terms are often conflated. They require different interventions.</p>
              <div className="grid gap-3">
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Burnout</p>
                  <p>Driven by chronic workplace overload, low autonomy, and resource-demand imbalance. The source is the system. Recovery involves structural change: workload reduction, boundary-setting, role restructuring, or leaving the environment.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Compassion Fatigue</p>
                  <p>Driven by repeated empathic exposure to others&apos; suffering and trauma, absorbing a student&apos;s abuse situation, a family in crisis, a peer&apos;s death. The source is emotional contagion. Recovery involves processing the secondary trauma through therapy, supervision, or peer support rather than just rest.</p>
                </div>
              </div>
              <p>This assessment measures burnout. If you recognize compassion fatigue, feeling emotionally numb specifically from caring for others&apos; pain, the ProQOL (Professional Quality of Life) scale is the validated instrument for that construct. Many teachers need both assessments.</p>
            </div>
          </div>
        </div>

        {/* What To Expect */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">What To Expect From This Assessment</h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <p>This tool uses questions drawn from established burnout research to measure all three Maslach dimensions. You will answer questions about how often you feel emotionally drained, how connected you feel to your students, and whether your work feels effective and meaningful.</p>
              <p><strong>Scoring:</strong> Results are returned across the three dimensions, emotional exhaustion, depersonalization, and personal accomplishment, so you can see which areas are most affected rather than receiving a single opaque number.</p>
              <p><strong>Privacy:</strong> Everything runs in your browser. Nothing is stored, transmitted, or shared. No employer, union, or administration has access to your results.</p>
              <p><strong>What it is not:</strong> This is a screening, not a clinical diagnosis. A psychologist or counselor can provide a comprehensive assessment and a personalized recovery plan. This tool can help you decide whether that conversation is warranted.</p>
            </div>
          </div>
        </div>

        {/* Citations */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Clinical References</h2>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="https://www.cdc.gov/niosh/stress/about/index.html" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">CDC/NIOSH, About Stress at Work</a></li>
            <li><a href="https://www.samhsa.gov/workplace/resources" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">SAMHSA, Workplace Wellness and Burnout Resources</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/21823769/" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">Maslach &amp; Leiter (2016), Burnout: A multidimensional perspective (PubMed)</a></li>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/29093379/" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">Hultell et al., Teacher burnout longitudinal study (PubMed)</a></li>
            <li><a href="https://www.nimh.nih.gov/health/topics/depression" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">NIMH, Depression (burnout-depression overlap)</a></li>
          </ul>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the Burnout Assessment</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve been feeling about your work.</p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: May 8, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A burnout screening for educators covering classroom stress, administrative burden, and emotional exhaustion."
          who="Teachers and educators who feel depleted and want to measure how their work stress compares to burnout thresholds."
          bottomLine="Teacher burnout is a systemic issue, understanding your score is the first step toward sustainable change. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-05-08"
        />
      </div>
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
        <h2>What Is the Teacher Burnout Screening?</h2>
        <h2>How Is the Teacher Burnout Test Scored?</h2>
        <h2>What Do My Burnout Screening Results Mean?</h2>
      </section>
<BurnoutClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong></li>
            <li><strong>Crisis Text Line:</strong> Text HOME to <strong>741741</strong></li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong></li>
          </ul>
        </div>
        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only, it is not a diagnosis. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Compiled by Jason Ramirez, CADC-II. Clinical content drawn from WHO, CDC NIOSH, and NIMH. This is a self-reflection tool, not a clinical assessment.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: May 2026</p>
        </div>
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">Burnout Assessment Tool →</Link>
          <Link href="/work-stress-check" className="text-sky-600 dark:text-sky-400 hover:underline">Work Stress Check →</Link>
          <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline">DASS-21 →</Link>
        </div>
      </div>
    </>
  );
}
