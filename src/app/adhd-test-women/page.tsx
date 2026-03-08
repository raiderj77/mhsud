import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ASRSClient } from "../asrs-adhd-screening/ASRSClient";

const TOOL_URL = `${SITE_URL}/adhd-test-women`;

export const metadata: Metadata = createMetadata({
  path: "/adhd-test-women",
  title: "ADHD Test for Women — Free ASRS Screening",
  description: "Free ADHD screening for women using the WHO ASRS. Private, instant results. No signup.",
  keywords: [
    "adhd test for women", "adhd in women", "female adhd screening",
    "adhd symptoms women", "undiagnosed adhd women", "adhd women quiz",
    "inattentive adhd women", "adhd masking women", "adhd and hormones",
    "late diagnosis adhd women", "adhd perimenopause", "free adhd test women",
  ],
  openGraph: {
    title: "ADHD Test for Women — Free ASRS Screening",
    description: "Free, private ADHD screening for women using the WHO ASRS. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Why is ADHD underdiagnosed in women?",
    answer: "ADHD research was historically conducted primarily on hyperactive boys, creating diagnostic criteria and clinical expectations biased toward male presentations. Women and girls are more likely to have the predominantly inattentive type — they daydream rather than disrupt class. They also develop sophisticated masking and compensation strategies that hide their struggles. Teachers and parents are less likely to refer quiet, struggling girls for evaluation. As a result, women are diagnosed 2-3 times less often than men, and many are not diagnosed until their 30s, 40s, or later.",
  },
  {
    question: "How does ADHD present differently in women?",
    answer: "Women with ADHD often experience more internalized symptoms: difficulty with organization and time management, chronic feelings of overwhelm, emotional sensitivity, rejection sensitivity dysphoria, difficulty maintaining friendships, mental exhaustion from masking, and a deep sense of underachievement. Rather than external hyperactivity, women may have racing thoughts, restless minds, and compulsive talking. Many are initially misdiagnosed with anxiety or depression because those are the symptoms most visible to clinicians.",
  },
  {
    question: "Can hormones affect ADHD symptoms?",
    answer: "Yes, significantly. Estrogen influences dopamine activity in the brain, and dopamine is the neurotransmitter most implicated in ADHD. Many women report that ADHD symptoms worsen during the luteal phase of their menstrual cycle (the week before their period), during pregnancy, postpartum, and especially during perimenopause. Declining estrogen levels in perimenopause can make previously manageable ADHD symptoms suddenly unmanageable, which is why many women are first diagnosed in their 40s.",
  },
  {
    question: "What is ADHD masking?",
    answer: "Masking is the effort women with ADHD put into appearing neurotypical — staying up late to meet deadlines, over-preparing to compensate for disorganization, suppressing impulses in social situations, and maintaining a functioning exterior while internally drowning. Masking is exhausting and contributes to chronic stress, burnout, anxiety, and depression. Many women do not realize they have been masking until they receive an ADHD diagnosis and recognize the enormous energy they have spent compensating.",
  },
  {
    question: "Does ADHD worsen during perimenopause?",
    answer: "Many women experience a significant worsening of ADHD symptoms during perimenopause (typically ages 40-55). As estrogen levels fluctuate and decline, the dopamine system is affected, which can amplify attention difficulties, memory problems, emotional dysregulation, and executive function challenges. Women who previously managed their ADHD without medication may find they suddenly need support. If you are in perimenopause and experiencing new or worsening focus/memory issues, ADHD is worth exploring.",
  },
  {
    question: "How is ADHD different from anxiety in women?",
    answer: "ADHD and anxiety frequently co-occur in women, making differential diagnosis challenging. Key differences: ADHD involves difficulty sustaining attention even when you want to focus, while anxiety involves difficulty concentrating because of worry. ADHD disorganization is chronic and lifelong; anxiety-driven disorganization is episodic. ADHD restlessness is driven by understimulation; anxiety restlessness is driven by fear. Many women have both conditions, and treating the underlying ADHD often reduces anxiety significantly.",
  },
  {
    question: "Where can women get tested for ADHD?",
    answer: "Start with your primary care provider or a psychiatrist who has experience with adult ADHD, particularly in women. Neuropsychological testing provides the most comprehensive evaluation. Increasingly, telehealth platforms offer ADHD evaluations. When seeking assessment, look for clinicians who understand how ADHD presents differently in women — not all providers are up to date on this research. CHADD (chadd.org) maintains a provider directory.",
  },
  {
    question: "Is this screening accurate for women?",
    answer: "The ASRS was validated on mixed-gender adult populations and is considered appropriate for women. However, because women tend to underreport symptoms (normalizing their struggles or attributing them to personality rather than neurology), scores may underestimate severity. If your score is borderline, or if you strongly relate to the descriptions on this page even with a low score, a professional evaluation is still worthwhile.",
  },
];

export default function AdhdTestWomenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "ADHD Test for Women — ASRS Screening", description: "A free, private ADHD screening tool for women using the WHO Adult ADHD Self-Report Scale (ASRS).", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-03-05" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "ASRS ADHD Screening", url: `${SITE_URL}/asrs-adhd-screening` }, { name: "ADHD Test for Women", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (ASRS)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">Women &amp; AFAB</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">ADHD Test for Women</h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You&apos;re not lazy. You&apos;re not &quot;too sensitive.&quot; You&apos;re not failing
            at being an adult. If you&apos;ve spent your life feeling like everyone else got a manual
            you missed — compensating, masking, staying up until 2 a.m. to finish what should have
            taken an hour, forgetting appointments, losing track of conversations — there might be
            an explanation that changes everything.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            ADHD in women is wildly underdiagnosed. Women are 2-3 times less likely to be identified
            than men, and many aren&apos;t diagnosed until their 30s, 40s, or later. This free
            screening uses the <strong>ASRS</strong> developed by the WHO. It is <strong>not a
            diagnosis</strong>, but it might be the first step toward understanding yourself in a
            whole new way.
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pink-600 text-white font-semibold text-base hover:bg-pink-700 transition-colors shadow-sm">Start the ADHD Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 3 minutes. Completely private — nothing is stored or shared.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">50-75% missed</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">An estimated 50-75% of women with ADHD are never diagnosed. Many are misdiagnosed with anxiety or depression first.<span className="text-slate-500 dark:text-slate-400"> — ADDitude / CHADD</span></p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">Average age 36</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">The average age of ADHD diagnosis in women is 36 — compared to age 7 for boys. That&apos;s decades of struggling without understanding why.<span className="text-slate-500 dark:text-slate-400"> — Journal of Clinical Psychology</span></p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">Hormones matter</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Estrogen affects dopamine. Many women notice ADHD symptoms worsen premenstrually, postpartum, and during perimenopause.<span className="text-slate-500 dark:text-slate-400"> — Harvard Women&apos;s Health Watch</span></p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding ADHD in Women</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>ADHD was long considered a &quot;boy&apos;s disorder&quot; — hyperactive children disrupting classrooms. But ADHD in women and girls often looks completely different. Instead of external hyperactivity, women typically experience internal restlessness: racing thoughts, chronic overwhelm, emotional intensity, and an exhausting effort to appear &quot;together&quot; on the outside while falling apart internally.</p>
            <p>The concept of masking is central to understanding women with ADHD. From childhood, girls learn to compensate — working twice as hard to achieve the same results, developing elaborate organizational systems that require constant maintenance, suppressing impulses, and internalizing failure as a personal deficiency rather than a neurological difference. This masking is effective enough to avoid diagnosis but comes at an enormous cost: chronic exhaustion, anxiety, depression, and burnout.</p>
            <p>Hormonal changes add another layer of complexity unique to women. Estrogen plays a role in dopamine regulation, and fluctuations across the menstrual cycle, pregnancy, postpartum, and perimenopause can significantly affect ADHD symptoms. Many women who managed their symptoms adequately for years find them suddenly unmanageable during perimenopause — which is why a wave of women are being diagnosed with ADHD in their 40s and 50s.</p>
            <p>If this screening resonates with you, know that diagnosis is not a label — it is a key that unlocks understanding, self-compassion, and effective strategies. Many women describe their ADHD diagnosis as one of the most important moments of their lives.</p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the ASRS ADHD Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve felt and behaved over the past 6 months.</p>
        </div>
        <ASRSClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified healthcare professional can diagnose ADHD. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400"><strong>Reviewed by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years of clinical experience in substance abuse counseling.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026 by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/asrs-adhd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">ASRS ADHD Screening →</Link>
          <Link href="/adhd-test-adults" className="text-sky-600 dark:text-sky-400 hover:underline">ADHD Test for Adults →</Link>
          <Link href="/anxiety-test-for-women" className="text-sky-600 dark:text-sky-400 hover:underline">Anxiety Test for Women →</Link>
        </div>
      </div>
    </>
  );
}
