import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { ASRSClient } from "../asrs-adhd-screening/ASRSClient";

const TOOL_URL = `${SITE_URL}/adhd-test-adults`;

export const metadata: Metadata = createMetadata({
  path: "/adhd-test-adults",
  title: "ADHD Test for Adults, Free ASRS Screening",
  description:
    "Free adult ADHD screening using the WHO ASRS. Private, instant results. No signup required.",
  keywords: [
    "adhd test for adults", "adult adhd screening", "asrs adhd test",
    "do i have adhd adult", "adhd self-assessment adults", "adult adhd quiz",
    "adhd symptoms adults", "undiagnosed adhd adults", "free adhd test online",
    "adhd in adults test", "adult attention deficit screening",
  ],
  openGraph: {
    title: "ADHD Test for Adults, Free ASRS Screening",
    description: "Free, private adult ADHD screening using the WHO ASRS. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Can adults have ADHD?",
    answer: "Yes. ADHD is not just a childhood condition. Research shows that about 4.4% of U.S. adults have ADHD, and many were never diagnosed as children. ADHD is a neurodevelopmental condition that persists into adulthood for the majority of people who had it in childhood. While hyperactivity may decrease with age, difficulties with attention, organization, time management, and emotional regulation often continue or even worsen as adult responsibilities increase.",
  },
  {
    question: "How is adult ADHD different from childhood ADHD?",
    answer: "In adults, ADHD often looks less like hyperactivity and more like internal restlessness, chronic disorganization, difficulty prioritizing, time blindness, procrastination, impulsive decisions, and emotional reactivity. Adults with ADHD may struggle with maintaining relationships, managing finances, meeting deadlines, or following through on projects. Many adults describe feeling like they are constantly underperforming despite being intelligent and capable.",
  },
  {
    question: "Why was I not diagnosed as a child?",
    answer: "Many adults with ADHD were missed as children, especially women, people of color, and those with the predominantly inattentive type (formerly called ADD). If you were a quiet daydreamer rather than a disruptive child, your ADHD may not have been noticed. High intelligence can also mask symptoms through compensation. Additionally, ADHD awareness and diagnostic criteria have improved significantly over the past two decades.",
  },
  {
    question: "Can you develop ADHD as an adult?",
    answer: "Current research suggests ADHD is a neurodevelopmental condition present from childhood, though it may not be recognized until adulthood. What often happens is that coping strategies that worked in childhood (parental structure, simpler demands) break down under adult responsibilities. Some researchers are exploring whether ADHD-like symptoms can emerge in adulthood, but the current consensus is that adult-onset symptoms usually reflect previously undiagnosed childhood ADHD.",
  },
  {
    question: "How do I get formally tested for ADHD as an adult?",
    answer: "Start with your primary care provider, who can refer you to a psychiatrist, psychologist, or neuropsychologist for comprehensive evaluation. The evaluation typically includes clinical interviews, symptom questionnaires (like the ASRS used here), cognitive testing, and review of your history. Some telehealth services now offer ADHD evaluations. Expect the process to take 1-3 sessions. Bring examples of how symptoms affect your daily life.",
  },
  {
    question: "Does ADHD affect relationships?",
    answer: "Yes, significantly. Untreated ADHD can lead to forgetfulness about important dates or commitments, difficulty listening during conversations, impulsive comments, emotional reactivity, and inconsistent follow-through on promises. Partners may feel ignored, unsupported, or frustrated. The good news is that understanding ADHD as the source of these patterns, rather than seeing them as character flaws, can transform relationships. Many couples benefit from ADHD-informed couples therapy.",
  },
  {
    question: "What are the treatment options for adult ADHD?",
    answer: "Treatment typically includes medication (stimulants like methylphenidate or amphetamines, or non-stimulants like atomoxetine), behavioral strategies, coaching, and sometimes therapy. Medication is effective for 70-80% of adults with ADHD. Environmental modifications, external reminders, simplified systems, body doubling, time blocking, also help. Exercise, sleep hygiene, and nutrition support overall functioning. Most people benefit from a combination approach.",
  },
  {
    question: "Is ADHD real or just an excuse?",
    answer: "ADHD is a well-established neurodevelopmental condition recognized by every major medical and psychological organization worldwide, including the WHO, APA, and NHS. Brain imaging studies consistently show differences in the prefrontal cortex, dopamine pathways, and default mode network in people with ADHD. It is not a character flaw, a lack of effort, or a cultural invention. Dismissing ADHD as an excuse prevents millions of people from accessing effective treatment.",
  },
];

export default function AdhdTestAdultsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      ...toolPageJsonLd({ name: "ADHD Test for Adults, ASRS Screening", description: "A free, private ADHD screening tool for adults using the WHO Adult ADHD Self-Report Scale (ASRS).", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-05-06" }),
      reviewedBy: { "@type": "Person", "name": "Jason Ramirez", "jobTitle": "Certified Drug and Alcohol Counselor (CADC-II)", "url": "https://mindchecktools.com/about/jason-ramirez" },
    }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "ASRS ADHD Screening", url: `${SITE_URL}/asrs-adhd-screening` }, { name: "ADHD Test for Adults", url: TOOL_URL }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      ...medicalWebPageJsonLd({ name: "ADHD Test for Adults, ASRS Screening", description: "A free, private ADHD screening tool for adults using the WHO Adult ADHD Self-Report Scale (ASRS).", url: TOOL_URL, lastReviewed: "2026-05-06" }),
      reviewedBy: { "@type": "Person", "name": "Jason Ramirez", "jobTitle": "Certified Drug and Alcohol Counselor (CADC-II)", "url": "https://mindchecktools.com/about/jason-ramirez" },
    }) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (ASRS)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300">Adults 18+</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">ADHD Test for Adults</h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You&apos;ve always felt like your brain works differently. Maybe you&apos;re brilliant in
            a crisis but can&apos;t seem to pay a bill on time. Maybe you start a dozen projects and
            finish none. Maybe you&apos;ve been called lazy, careless, or &quot;not living up to your
            potential&quot; your entire life, and you&apos;ve started to believe it.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            What if it&apos;s not a character flaw? ADHD affects roughly 4.4% of adults, and millions
            go undiagnosed. This free screening uses the <strong>ASRS</strong> (Adult ADHD Self-Report
            Scale), developed by the World Health Organization. It is <strong>not a diagnosis</strong>,
            but it can help you decide whether a professional evaluation is worth pursuing.
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-violet-600 text-white font-semibold text-base hover:bg-violet-700 transition-colors shadow-sm">Start the ADHD Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 3 minutes. Completely private, nothing is stored or shared.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-violet-700 dark:text-violet-300 mb-1">4.4% of adults</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">have ADHD, but the majority were never diagnosed as children. Many don&apos;t discover it until their 30s, 40s, or later., <a href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 hover:underline">NIMH</a></p>
            </div>
            <div className="bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-violet-700 dark:text-violet-300 mb-1">75% undiagnosed</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">An estimated 75-80% of adults with ADHD have never received a diagnosis, especially women and minorities.<span className="text-slate-500 dark:text-slate-400">, CHADD</span></p>
            </div>
            <div className="bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-violet-700 dark:text-violet-300 mb-1">Highly treatable</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">ADHD medication is effective for 70-80% of adults. Combined with behavioral strategies, most people see significant improvement.<span className="text-slate-500 dark:text-slate-400">, APA</span></p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding ADHD in Adults</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>Adult ADHD is one of the most underdiagnosed conditions in mental health. Unlike the hyperactive child bouncing off walls, adult ADHD often looks like chronic lateness, piles of unfinished tasks, difficulty sustaining attention in meetings, impulsive spending, emotional outbursts that seem disproportionate, and a persistent sense that you should be doing better than you are.</p>
            <p>Many adults with undiagnosed ADHD develop anxiety and depression as secondary conditions, not because of a separate illness, but because years of struggling without understanding why takes a toll on self-esteem. The relief of finally getting a diagnosis is often described as life-changing: suddenly, decades of &quot;failures&quot; make sense.</p>
            <p>ADHD also has a significant connection to substance use. Adults with untreated ADHD are 2-3 times more likely to develop substance use problems, often because stimulants like caffeine, nicotine, or other substances temporarily improve focus and self-regulation. Understanding this link is important for both ADHD treatment and recovery.</p>
            <p>If this screening suggests ADHD may be present, the next step is a formal evaluation with a psychiatrist, psychologist, or neuropsychologist. Many adults describe the process of getting diagnosed as both validating and empowering, it opens the door to strategies and treatments that can genuinely change your life.</p>
          </div>
        </div>

        {/* ASRS instrument and Kessler validation */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            About the ASRS: WHO-Validated Screening Instrument
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              The Adult ADHD Self-Report Scale (ASRS v1.1) was developed by the{" "}
              <a href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 hover:underline">
                World Health Organization
              </a>{" "}
              in collaboration with researchers led by Ronald Kessler at Harvard Medical School. The
              pivotal validation study, {" "}
              <a href="https://pubmed.ncbi.nlm.nih.gov/15841678/" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 hover:underline">
                Kessler et al. (2005), published in Psychological Medicine
              </a>{" "}, found that the 6-item Part A screener correctly identified 68.7% of adults with ADHD,
              with a sensitivity of 68.7% and specificity of 99.5% for adult ADHD diagnosis. This makes
              it one of the most specific brief ADHD screening tools available. The full 18-item ASRS
              provides additional symptom detail used in clinical evaluation.
            </p>
            <p>
              A critical finding from the Kessler research: ADHD in adults is vastly underdiagnosed.
              Prevalence estimates suggest 4–5% of adults globally meet diagnostic criteria, but the
              majority remain undiagnosed. Per the{" "}
              <a href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 hover:underline">
                National Institute of Mental Health
              </a>
              , ADHD often persists from childhood into adulthood in approximately 60% of cases, though many adults were never identified as children.
            </p>
            <p>
              One of the most common misdiagnosis patterns: adults with ADHD being treated for anxiety
              or depression while the underlying ADHD goes unaddressed. Inattention, emotional dysregulation,
              and time blindness can all look like anxiety symptoms. The chronic failures and social
              consequences of untreated ADHD can produce depressive symptoms. Comorbidity is the rule
              rather than the exception, research indicates that 60–70% of adults with ADHD have at
              least one other psychiatric condition. If you have been treated for anxiety or depression
              without adequate response, ADHD evaluation may be warranted.{" "}
              <a href="https://www.cdc.gov/ncbddd/adhd/data.html" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 hover:underline">
                CDC surveillance data
              </a>{" "}
              confirm that ADHD remains significantly underdiagnosed in adults across all demographics,
              with women and people of color disproportionately missed.
            </p>
            <p>
              If you score positive on this screening, the next step is a comprehensive evaluation, not just a second screening. A psychiatrist, psychologist, or neuropsychologist can
              conduct a structured clinical interview, review your developmental and academic history,
              and rule out other conditions. For those who have struggled for years without a clear
              answer,{" "}
              <a href="https://www.samhsa.gov/mental-health" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 hover:underline">
                SAMHSA&apos;s behavioral health treatment locator
              </a>{" "}
              can help identify providers with ADHD evaluation expertise in your area.
            </p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the ASRS ADHD Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve felt and behaved over the past 6 months.</p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A free ASRS-based ADHD screening for adults that assesses attention, hyperactivity, and executive function symptoms."
          who="Adults who suspect they may have ADHD and want a validated self-screening before talking to a provider."
          bottomLine="This screening indicates whether ADHD symptoms are present, only a clinician can diagnose ADHD. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
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
        <time dateTime="2026-03-20">
          {new Date("2026-03-20T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>
      <section className="sr-only">
        <h2>What Is the Adult ADHD Screening?</h2>
        <h2>How Is the Adult ADHD Test Scored?</h2>
        <h2>What Do My ADHD Screening Results Mean?</h2>
      </section>
<section className="max-w-2xl mx-auto px-4 sm:px-6 py-8" aria-label="Frequently Asked Questions">
  <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Frequently Asked Questions</h2>
  <div className="space-y-6">
    {FAQ_DATA.map((item) => (
      <div key={item.question}>
        <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">{item.question}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.answer}</p>
      </div>
    ))}
  </div>
</section>
<ASRSClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong>, free, 24/7, confidential</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong>, free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only, it is not a diagnosis. Only a qualified healthcare professional can diagnose ADHD. Your responses are processed entirely in your browser and are never stored or transmitted.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Compiled by Jason Ramirez, CADC-II. Clinical content drawn from NIMH and CDC. For ADHD evaluation, consult a licensed psychologist or psychiatrist.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/asrs-adhd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">ASRS ADHD Screening →</Link>
          <Link href="/adhd-test-women" className="text-sky-600 dark:text-sky-400 hover:underline">ADHD Test for Women →</Link>
          <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline">DASS-21 Stress Screen →</Link>
        </div>
      </div>
    </>
  );
}
