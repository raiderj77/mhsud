import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";

const TOOL_URL = `${SITE_URL}/burnout-test-for-teachers`;

export const metadata: Metadata = createMetadata({
  path: "/burnout-test-for-teachers",
  title: "Burnout Test for Teachers — Free Assessment",
  description: "Free teacher burnout assessment. Evaluate exhaustion, detachment, and effectiveness. Private results.",
  keywords: ["burnout test for teachers", "teacher burnout assessment", "teacher burnout quiz", "am i burned out teacher", "teaching burnout test", "educator burnout screening", "teacher stress test", "teacher mental health", "free teacher burnout test"],
  openGraph: { title: "Burnout Test for Teachers — Free Assessment", description: "Free, private burnout assessment for teachers and educators. Instant results, no signup.", url: TOOL_URL, type: "website" },
});

const FAQ_DATA = [
  { question: "How common is teacher burnout?", answer: "Teacher burnout has reached crisis levels. Surveys consistently show that 44% or more of K-12 teachers report feeling burned out, and over half say they are considering leaving the profession. These numbers have worsened significantly since the pandemic. Burnout rates are highest among special education teachers, early-career teachers, and those in under-resourced schools. Teacher burnout is not an individual failing — it is a systemic crisis." },
  { question: "What causes teacher burnout?", answer: "Teacher burnout results from chronic imbalance between demands and resources. Key factors include: large class sizes, excessive administrative tasks, lack of planning time, emotional labor of supporting struggling students, parental pressure and conflict, low compensation relative to workload, lack of autonomy, constant policy changes, standardized testing pressure, and insufficient support from administration. The pandemic added technology demands, learning loss recovery, and student mental health crises." },
  { question: "Is burnout the same as being tired?", answer: "No. Being tired resolves with rest. Burnout is a state of chronic physical, emotional, and mental exhaustion accompanied by feelings of cynicism, detachment, and reduced effectiveness. A tired teacher recovers over the weekend; a burned-out teacher dreads Monday starting on Friday evening. Burnout involves a fundamental loss of purpose and meaning — the feeling that no matter how hard you try, it will never be enough." },
  { question: "Can burnout affect my teaching?", answer: "Yes. Research shows that teacher burnout leads to decreased instructional quality, reduced patience, more negative interactions with students, higher absenteeism, and lower student achievement. Burned-out teachers are more likely to use controlling rather than supportive teaching styles. This is not about caring less — it is about having less to give. Recognizing burnout is the first step toward protecting both yourself and your students." },
  { question: "Is teacher burnout the same as depression?", answer: "They share symptoms (exhaustion, withdrawal, hopelessness) but are distinct. Burnout is specifically tied to work context — a burned-out teacher may still enjoy activities outside school. Depression is pervasive and affects all areas of life. However, chronic burnout significantly increases the risk of developing clinical depression. If your symptoms extend beyond work into all areas of your life, screening for depression is also recommended." },
  { question: "Should I talk to my principal about burnout?", answer: "This depends on your relationship with your administration. Some principals are supportive and may be able to reduce demands or provide resources. Others may not respond constructively. Consider starting with your EAP (Employee Assistance Program), which provides free confidential counseling. Connecting with trusted colleagues who understand your experience can also help. Teacher unions and professional organizations may offer additional support resources." },
  { question: "How can teachers prevent or reduce burnout?", answer: "Individual strategies include setting firm boundaries (no email after 7 PM), protecting non-work time, connecting with supportive colleagues, regular exercise, saying no to extra committees, and seeking therapy. Systemic solutions matter more: advocating for smaller class sizes, planning time, mental health support, fair compensation, and reduced administrative burden. Teacher burnout is fundamentally a systems problem that requires systems solutions." },
  { question: "When should I consider taking leave?", answer: "Consider leave if: you are experiencing physical symptoms (chronic illness, insomnia, panic attacks), you dread going to work every day, you feel emotionally disconnected from your students, your personal relationships are suffering, or you have been told by a healthcare provider that your stress is affecting your health. FMLA may protect your position. Talk to your doctor and HR about options including medical leave, reduced schedule, or sabbatical." },
];

export default function BurnoutTestForTeachersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Burnout Test for Teachers — Self-Assessment", description: "A free, private burnout screening tool for teachers and educators.", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-03-05" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Burnout Assessment Tool", url: `${SITE_URL}/burnout-assessment-tool` }, { name: "Burnout Test for Teachers", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Informed</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Teachers &amp; Educators</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Burnout Test for Teachers</h1>
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">You went into teaching to make a difference. But somewhere between the lesson plans, the grading, the parent emails, the meetings that could have been emails, and the students who need more than any one person can give — you started running on empty. If Sunday nights fill you with dread and you can&apos;t remember the last time teaching felt meaningful, you are not alone.</p>
          <p className="text-lg text-slate-600 dark:text-slate-300">This free assessment can help you understand where you are. It is <strong>not a diagnosis</strong>, but it can validate what you&apos;re feeling and help you decide what to do next.</p>
        </div>
        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold text-base hover:bg-amber-700 transition-colors shadow-sm">Start the Burnout Assessment</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 5 minutes. Completely private — nothing is stored or shared.</p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding Teacher Burnout</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>Teacher burnout is a systemic crisis, not an individual failure. When 44% of teachers report feeling burned out and over half consider leaving the profession, the problem is not that teachers are not resilient enough — it is that the demands placed on them have become unsustainable. Large class sizes, endless administrative tasks, emotional labor, parental pressure, and compensation that does not match the workload all contribute.</p>
            <p>The emotional labor of teaching is particularly draining. Teachers are expected to be educators, counselors, social workers, technology specialists, and advocates — often simultaneously. Supporting students through trauma, behavioral challenges, and mental health crises takes a toll that is rarely acknowledged or compensated. Compassion fatigue — emotional exhaustion from caring for others — is common among teachers.</p>
            <p>Burnout manifests in three dimensions: emotional exhaustion (feeling drained and depleted), depersonalization (feeling detached from students, treating them as problems rather than people), and reduced personal accomplishment (feeling like your work does not matter). If you recognize yourself in any of these, this assessment can help quantify what you are experiencing.</p>
            <p>Recovery from teacher burnout is possible. It may involve individual strategies (boundaries, therapy, self-care), systemic advocacy (union involvement, policy change), or difficult decisions (changing schools, roles, or careers). The first step is honest assessment of where you stand.</p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the Burnout Assessment</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve been feeling about your work.</p>
        </div>
        <BurnoutClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong></li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong></li>
          </ul>
        </div>
        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026 by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.</p>
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
