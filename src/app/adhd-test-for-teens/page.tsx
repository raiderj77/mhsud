import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ASRSClient } from "../asrs-adhd-screening/ASRSClient";

const TOOL_URL = `${SITE_URL}/adhd-test-for-teens`;

export const metadata: Metadata = createMetadata({
  path: "/adhd-test-for-teens",
  title: "ADHD Test for Teens — Free ASRS Screening",
  description: "Free ADHD screening for teenagers using the ASRS. Private, instant results. No signup.",
  keywords: [
    "adhd test for teens", "adhd screening teenagers", "teen adhd quiz",
    "adhd symptoms teens", "adhd in adolescents", "adhd test adolescent",
    "teen adhd signs", "adhd school problems", "adhd teenager test",
    "asrs adhd screening teens", "free adhd test teens", "adhd high school",
  ],
  openGraph: {
    title: "ADHD Test for Teens — Free ASRS Screening",
    description: "Free, private ADHD screening for teenagers using the ASRS. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How is ADHD different in teens versus younger children?",
    answer: "In younger children, ADHD often shows up as obvious hyperactivity — running, climbing, inability to sit still. In teenagers, hyperactivity typically shifts to internal restlessness, fidgeting, and feeling driven. The bigger challenges become inattention, disorganization, poor time management, and difficulty with tasks requiring sustained mental effort. These executive function demands increase dramatically in middle and high school.",
  },
  {
    question: "Can ADHD cause school problems even if you're smart?",
    answer: "Absolutely. ADHD is not an intelligence issue — it's an attention and executive function issue. Many teens with ADHD are very bright but struggle with homework completion, test preparation, organization, and long-term projects. This gap between ability and performance is one of the hallmark signs of ADHD and is incredibly frustrating for the teen experiencing it.",
  },
  {
    question: "Is ADHD overdiagnosed in teens?",
    answer: "Research suggests ADHD is actually both overdiagnosed in some populations and underdiagnosed in others. Girls, teens of color, and teens with predominantly inattentive symptoms are frequently missed. A thorough evaluation by a qualified professional considers multiple sources of information and rules out other explanations for symptoms.",
  },
  {
    question: "What does ADHD treatment look like for teenagers?",
    answer: "Treatment typically includes behavioral strategies, academic accommodations (504 plan or IEP), and sometimes medication. Many teens benefit from organizational coaching, structured routines, and learning to use external tools like planners and timers. Medication (stimulant and non-stimulant options) is effective for about 70-80% of people with ADHD. Treatment should be individualized.",
  },
  {
    question: "Can teens grow out of ADHD?",
    answer: "About one-third of children with ADHD see significant symptom improvement by adulthood. However, the majority continue to experience symptoms, though they may develop better coping strategies. ADHD does not simply disappear — but with the right support, teens can learn to manage it effectively and thrive.",
  },
];

export default function AdhdTestForTeensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "ADHD Test for Teens — ASRS Screening", description: "A free, private ADHD screening tool for teenagers using the clinically validated ASRS.", url: TOOL_URL, datePublished: "2026-03-08", dateModified: "2026-03-08" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "ASRS ADHD Screening", url: `${SITE_URL}/asrs-adhd-screening` }, { name: "ADHD Test for Teens", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (ASRS)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Teens 13–19</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">ADHD Test for Teens</h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            School is getting harder — and not because you&apos;re not smart enough. In high school,
            the demands for self-organization, time management, and sustained attention increase
            dramatically. If you&apos;ve always been told you&apos;re &quot;not working up to
            potential,&quot; if your backpack is a black hole, if you can hyperfocus on things you
            love but cannot force yourself to start a paper that&apos;s due tomorrow — ADHD might be
            the missing piece. Whether you&apos;re a teen wondering what&apos;s going on or a parent
            watching your child struggle, this screening can help start the conversation.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free screening can help you understand what you&apos;re experiencing. It is <strong>not
            a diagnosis</strong> — it&apos;s a starting point. Everything is completely private. Your
            answers are processed in your browser and never stored or shared with anyone.
          </p>
        </div>

        {/* ASRS age note */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> This screening uses the ASRS, which was developed for adults 18+.
            For teens under 18, results should be interpreted as a starting point for conversation
            with a healthcare provider, not as a standalone assessment. Adolescent-specific tools
            like the Conners scales may provide more age-appropriate evaluation.
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold text-base hover:bg-amber-700 transition-colors shadow-sm">Start the ADHD Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 3 minutes. Completely private — nothing is stored or shared.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">9.8% of U.S. children</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">ADHD is one of the most common neurodevelopmental conditions, affecting approximately 9.8% of children and adolescents in the United States.<span className="text-slate-500 dark:text-slate-400"> — CDC</span></p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">Average 3-year delay</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Many teens aren&apos;t identified until symptoms cause significant academic or social problems, with an average delay of 3 years from symptom onset to assessment.<span className="text-slate-500 dark:text-slate-400"> — AAP</span></p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">Symptoms shift in adolescence</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Hyperactivity often decreases in teens while inattention, disorganization, and emotional dysregulation become more prominent — making ADHD harder to spot.<span className="text-slate-500 dark:text-slate-400"> — CHADD</span></p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding ADHD in Teenagers</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>ADHD changes shape in adolescence. The child who couldn&apos;t sit still in elementary school may no longer be bouncing off the walls — but that doesn&apos;t mean ADHD has gone away. Instead, hyperactivity often becomes internal restlessness: a constant feeling of being &quot;on edge,&quot; fidgeting, tapping, or an inability to relax. Meanwhile, inattention and executive function problems become far more visible as academic demands increase. The structure that elementary school provided — one teacher, one classroom, clear daily routines — disappears in middle and high school, and teens with ADHD often struggle to fill that organizational gap on their own.</p>
            <p>The school impact can be significant and deeply frustrating. Teens with ADHD may have difficulty completing homework (or turning it in even when it&apos;s done), preparing for tests, managing long-term projects, taking organized notes, and keeping track of materials across multiple classes. Because they are often capable of doing the work when they can focus, this inconsistency is frequently misread as laziness, lack of motivation, or &quot;not caring.&quot; Nothing could be further from the truth — most teens with ADHD care deeply and feel enormous frustration at the gap between what they want to do and what they can consistently execute.</p>
            <p>The social and emotional impact is equally important. Impulsivity in social situations — blurting things out, interrupting, missing social cues, or acting without thinking — can strain friendships. Many teens with ADHD experience emotional intensity and rejection sensitivity, meaning they feel social slights more deeply and recover from them more slowly. This combination of social difficulty and emotional pain can lead to social isolation, low self-esteem, anxiety, and depression. These are not separate problems — they are often downstream effects of unidentified ADHD.</p>
            <p>Teen ADHD is different from adult ADHD in important ways. Teens have far less autonomy over their environment — they cannot choose their schedule, their teachers, or their workload. They face constant external evaluation through grades and test scores. And their executive function skills are still developing, which means they are dealing with ADHD using a brain that has not yet fully matured in the areas ADHD affects most. This can make ADHD more impactful during adolescence than at any other life stage, and it is why early identification and support matter so much.</p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the ASRS ADHD Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve been feeling over the past six months.</p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Teen ADHD Screening?</h2>
        <h2>How Is the Teen ADHD Test Scored?</h2>
        <h2>What Do My ADHD Results Mean?</h2>
      </section>
<ASRSClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Your Next Steps</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to a parent or trusted adult</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">Share your concerns and screening results. They can help you get a professional evaluation, which is the only way to know for sure whether ADHD is part of the picture.</p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to your school counselor</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">Schools can provide accommodations through a <strong>504 plan</strong> or <strong>IEP</strong> that make a real difference — things like extended test time, preferential seating, organizational support, and modified assignments.</p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Learn about ADHD</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300"><strong>CHADD</strong> (<a href="https://chadd.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline">chadd.org</a>) and <strong>ADDitude Magazine</strong> have teen-specific resources, articles, and communities where you can connect with others who understand.</p>
            </div>
          </div>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. The ASRS was designed for adults; teens should discuss results with a healthcare provider. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026 by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/asrs-adhd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">ASRS ADHD Screening →</Link>
          <Link href="/anxiety-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">Anxiety Test for Teens →</Link>
          <Link href="/depression-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">Depression Test for Teens →</Link>
        </div>
      </div>
    </>
  );
}
