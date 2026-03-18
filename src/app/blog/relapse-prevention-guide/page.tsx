import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/relapse-prevention-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "relapse-prevention-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/relapse-prevention-guide",
  title: "Relapse Prevention: The Three Stages and How to Intervene Early",
  description:
    "Relapse is a process, not an event. Learn the three stages \u2014 emotional, mental, and physical \u2014 how to recognize warning signs early, and evidence-based strategies that work.",
  keywords: [
    "relapse prevention",
    "stages of relapse",
    "relapse warning signs",
    "how to prevent relapse",
    "relapse prevention strategies",
    "addiction relapse",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What are the three stages of relapse?",
    answer:
      "Relapse unfolds in three stages: emotional relapse (poor self-care, bottling emotions, isolation), mental relapse (thinking about using, romanticizing past use, bargaining), and physical relapse (obtaining and using the substance). Recognizing the early emotional and mental stages gives you the best chance of intervening before use occurs.",
  },
  {
    question: "Does relapse mean treatment failed?",
    answer:
      "No. NIDA compares addiction relapse rates (40\u201360%) to those of other chronic conditions like hypertension and asthma. Relapse is a signal that your treatment plan needs adjustment, not that recovery is impossible. Many people in long-term recovery experienced one or more setbacks along the way. The key is reconnecting with support quickly.",
  },
  {
    question: "What is the most common cause of relapse?",
    answer:
      "Research by Marlatt and Gordon identified negative emotional states as the leading trigger for relapse, accounting for roughly 35% of initial relapse episodes. Other common triggers include social pressure, interpersonal conflict, and encountering environmental cues associated with past use. A relapse prevention plan helps you prepare for your personal high-risk situations.",
  },
  {
    question: "How long does relapse risk last?",
    answer:
      "Risk is highest in the first 90 days of recovery and remains elevated through the first year. After one year of sustained recovery, relapse risk decreases substantially but never reaches zero. Ongoing engagement with support \u2014 therapy, mutual aid, healthy routines \u2014 provides a durable buffer against relapse at any stage.",
  },
];

export default function RelapsePreventionGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Relapse Prevention: The Three Stages and How to Intervene Early", description: "Learn the three stages of relapse, how to recognize warning signs early, and evidence-based prevention strategies.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Relapse Prevention Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Relapse Prevention: The Three Stages and How to Intervene Early
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Relapse is not a single moment of weakness. It is a process that unfolds over days or weeks, moving through recognizable stages before substance use actually occurs. Understanding these stages &mdash; and recognizing where you are in the process &mdash; gives you the opportunity to intervene before the final stage. Relapse prevention is one of the most studied areas in addiction treatment, and the strategies that work are well-established.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>The three stages of relapse</h2>
            <p>
              Terence Gorski and Marlatt &amp; Gordon&apos;s research identified relapse as a gradual process with distinct stages. Recognizing the early stages is the foundation of prevention.
            </p>

            <h3>Stage 1: Emotional relapse</h3>
            <p>You are not thinking about using yet, but your emotions and behaviors are setting up conditions that increase vulnerability:</p>
            <ul>
              <li>Bottling up emotions rather than expressing them</li>
              <li>Isolating from support systems</li>
              <li>Skipping meetings, therapy, or recovery activities</li>
              <li>Poor self-care &mdash; irregular sleep, poor diet, no exercise</li>
              <li>Increased irritability, anxiety, or mood swings</li>
              <li>Denying that anything is wrong</li>
            </ul>

            <h3>Stage 2: Mental relapse</h3>
            <p>An internal tug-of-war begins &mdash; part of you wants to use and part of you does not:</p>
            <ul>
              <li>Thinking about people, places, and things associated with past use</li>
              <li>Romanticizing past use while minimizing consequences</li>
              <li>Bargaining (&quot;I&apos;ll just use once,&quot; &quot;I can control it this time&quot;)</li>
              <li>Planning how you could use without getting caught</li>
              <li>Fantasizing about using</li>
            </ul>

            <h3>Stage 3: Physical relapse</h3>
            <p>
              Obtaining and using the substance. Once mental relapse has progressed far enough without intervention, physical relapse becomes increasingly difficult to resist through willpower alone.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Evidence-based prevention strategies</h2>
            <p>Effective relapse prevention combines awareness of your personal risk factors with practical coping strategies:</p>
            <ul>
              <li><strong>Know your triggers:</strong> Identify the people, places, emotions, and situations that increase your urge to use. The <Link href="/trigger-identification-worksheet" className="text-sage-600 dark:text-sage-400 underline">trigger identification worksheet</Link> helps you map these systematically.</li>
              <li><strong>Build a daily routine:</strong> Structure reduces the idle time and decision fatigue that leave room for cravings. The <Link href="/daily-recovery-check-in" className="text-sage-600 dark:text-sage-400 underline">daily recovery check-in</Link> anchors your day with a structured reflection.</li>
              <li><strong>Use the HALT check:</strong> Regularly ask yourself if you are Hungry, Angry, Lonely, or Tired &mdash; four states that increase vulnerability.</li>
              <li><strong>Maintain your support network:</strong> Isolation is one of the strongest predictors of relapse. Stay connected to your therapist, sponsor, support group, or trusted people.</li>
              <li><strong>Practice urge surfing:</strong> When cravings arise, observe them without acting. Cravings peak and pass within 15&ndash;30 minutes.</li>
              <li><strong>Have a written plan:</strong> A <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">relapse prevention plan</Link> gives you specific steps for specific situations, decided in advance when you are thinking clearly.</li>
            </ul>
          </section>

          <section>
            <h2>How the MindCheck Tools relapse prevention plan helps</h2>
            <p>
              The <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools relapse prevention plan builder</Link> walks you through creating a personalized, written plan that includes your triggers, warning signs, coping strategies, and emergency contacts. It is free, private, and runs entirely in your browser.
            </p>
            <p>
              A written plan is more effective than a mental one because it removes the need to think clearly in a crisis &mdash; the plan has already done the thinking for you. Research shows that people with written relapse prevention plans have significantly better outcomes than those without one.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>When to seek professional help</h2>
            <p>Reach out to a professional if:</p>
            <ul>
              <li>You recognize you are in the mental relapse stage and struggling to resist</li>
              <li>You have relapsed and need support getting back on track</li>
              <li>Your current treatment plan does not feel adequate for your level of risk</li>
              <li>Co-occurring mental health symptoms (depression, anxiety, trauma) are intensifying</li>
              <li>You feel isolated and disconnected from your support system</li>
            </ul>
            <p>
              SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals 24/7. A relapse does not mean starting over &mdash; it means adjusting your approach.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Build your relapse prevention plan now</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/relapse-prevention-plan" className="btn-primary text-sm">Build Your Plan</Link>
              <Link href="/trigger-identification-worksheet" className="btn-primary text-sm">Identify Your Triggers</Link>
            </div>
          </div>

          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

          <section className="not-prose mt-12">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">Frequently Asked Questions</h2>
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="card mb-2 group">
                <summary className="p-4 cursor-pointer flex justify-between items-center text-sm font-semibold text-neutral-700 dark:text-neutral-200 list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </section>

          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/relapse-prevention-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan Builder</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Create your personalized written plan</p>
              </Link>
              <Link href="/trigger-identification-worksheet" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Trigger Identification Worksheet</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Map your personal relapse triggers</p>
              </Link>
              <Link href="/halt-check-in" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">HALT Check-In</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick vulnerability state assessment</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Build a Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Step-by-step plan-building guide</p>
              </Link>
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Stages of Change in Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding where you are in the change process</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
