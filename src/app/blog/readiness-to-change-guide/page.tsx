import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/readiness-to-change-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "readiness-to-change-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/readiness-to-change-guide",
  title: "Readiness to Change: Assessing Where You Are in the Change Process",
  description:
    "The Transtheoretical Model identifies five stages of change. Learn how to assess your readiness, what helps at each stage, and why readiness fluctuates.",
  keywords: [
    "readiness to change",
    "stages of change assessment",
    "transtheoretical model",
    "am I ready to change",
    "motivation for change",
    "readiness ruler",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What are the stages of change?",
    answer:
      "The Transtheoretical Model identifies five stages: Precontemplation (not yet considering change), Contemplation (thinking about change but ambivalent), Preparation (planning to change soon), Action (actively making changes), and Maintenance (sustaining changes over time). These stages are not strictly linear \u2014 people move back and forth between them, and revisiting earlier stages is a normal part of the process rather than a failure. Each stage requires different strategies and support.",
  },
  {
    question: "Can you be in more than one stage at a time?",
    answer:
      "Yes. It is common to be in different stages for different behaviors or aspects of use. For example, someone might be in the action stage regarding their alcohol use but still in contemplation about their relationship with other substances. You might also fluctuate between stages within a single day \u2014 feeling motivated in the morning and ambivalent by evening. The stages describe a general orientation toward change rather than a rigid, fixed position.",
  },
  {
    question: "What if I&apos;m not ready to change?",
    answer:
      "Not being ready to change is not a personal failing \u2014 it is a stage in the change process. Precontemplation and contemplation are valid and important stages where meaningful internal work happens. The most helpful approaches at these stages include motivational interviewing (exploring your own values and concerns without pressure), education about the effects of substance use, and honest self-reflection. Pressure from others to change before you are ready typically increases resistance rather than motivation. The readiness assessment can help you clarify where you are right now.",
  },
  {
    question: "How does the readiness assessment work?",
    answer:
      "The MindCheck Tools readiness to change assessment asks a series of questions about your current thoughts, feelings, and behaviors related to substance use or the behavior you are considering changing. Based on your responses, it identifies which stage of change best describes your current position and provides tailored guidance for your stage \u2014 not a one-size-fits-all recommendation, but specific strategies matched to where you actually are. It is free, private, and your answers are processed entirely in your browser.",
  },
];

export default function ReadinessToChangeGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Readiness to Change: Assessing Where You Are in the Change Process", description: "Learn about the Transtheoretical Model, the five stages of change, and how to match your next step to where you actually are.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Readiness to Change Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Readiness to Change: Assessing Where You Are in the Change Process
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Change does not happen all at once. Prochaska and DiClemente&apos;s Transtheoretical Model &mdash; one of the most widely used frameworks in addiction treatment &mdash; describes change as a process that unfolds through predictable stages. Understanding which stage you are in allows you to match your next step to where you actually are, rather than where someone else thinks you should be. The <Link href="/readiness-to-change" className="text-sage-600 dark:text-sage-400 underline">readiness to change assessment</Link> helps you identify your current stage so you can take the most effective next step.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>The Transtheoretical Model: how change actually works</h2>
            <p>
              In the early 1980s, psychologists James Prochaska and Carlo DiClemente studied how people successfully change addictive behaviors &mdash; both with and without professional help. What they found challenged the prevailing assumption that change is a binary event (you either change or you do not). Instead, they discovered that change follows a predictable pattern of stages, and that people who succeed tend to use different strategies at different stages.
            </p>
            <p>
              This became the Transtheoretical Model (TTM), also known as the Stages of Change model. It has since become one of the most influential frameworks in addiction treatment, health behavior change, and motivational interviewing. The model is not a judgment of where you &quot;should&quot; be &mdash; it is a map that helps you understand where you are and what will actually help you move forward from there.
            </p>
          </section>

          <section>
            <h2>Stage 1: Precontemplation &mdash; not yet considering change</h2>
            <p>
              In precontemplation, you are not yet considering change. You may not believe there is a problem, or you may be aware of the problem but feel that change is impossible, unnecessary, or not worth the cost. Common characteristics include:
            </p>
            <ul>
              <li>Minimizing or denying the impact of substance use</li>
              <li>Feeling defensive when others express concern</li>
              <li>Believing that the benefits of use outweigh the consequences</li>
              <li>Feeling demoralized by past attempts at change</li>
            </ul>
            <p>
              <strong>What helps at this stage:</strong> Confrontation and pressure typically increase resistance. What works is non-judgmental information, empathic listening, and gentle exploration of values. Motivational interviewing is specifically designed for this stage &mdash; it helps people examine the gap between their current behavior and their deeper values without feeling pushed. The <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT alcohol screening</Link> or <Link href="/dast-10-drug-screening" className="text-sage-600 dark:text-sage-400 underline">DAST-10 drug screening</Link> can provide objective feedback that supports self-reflection without judgment.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Stage 2: Contemplation &mdash; thinking about change</h2>
            <p>
              In contemplation, you are aware that a problem exists and are seriously thinking about change, but you have not yet committed to action. This stage is defined by ambivalence &mdash; you can see both the reasons to change and the reasons to stay the same:
            </p>
            <ul>
              <li>Acknowledging that substance use is causing problems</li>
              <li>Weighing the pros and cons of changing</li>
              <li>Feeling both motivated and resistant at the same time</li>
              <li>Thinking about change &quot;someday&quot; but not setting a specific date</li>
            </ul>
            <p>
              <strong>What helps at this stage:</strong> Exploring ambivalence honestly is the most productive work at this stage. Decisional balance exercises (listing the pros and cons of both changing and not changing) help clarify your thinking. The <Link href="/readiness-to-change" className="text-sage-600 dark:text-sage-400 underline">readiness to change assessment</Link> can help you see where you stand and what questions might be worth sitting with. Forcing action at this stage often backfires &mdash; contemplation is not procrastination; it is a necessary part of the process.
            </p>
          </section>

          <section>
            <h2>Stage 3: Preparation &mdash; getting ready to act</h2>
            <p>
              In the preparation stage, you have decided to change and are beginning to plan how. You may have already taken small steps or set a target date. This stage is characterized by:
            </p>
            <ul>
              <li>Setting a quit date or reduction goal</li>
              <li>Telling trusted people about your plans</li>
              <li>Researching treatment options, support groups, or tools</li>
              <li>Making practical preparations (removing substances from your home, adjusting social plans)</li>
              <li>Building a support network</li>
            </ul>
            <p>
              <strong>What helps at this stage:</strong> Concrete planning and practical preparation. Build a <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">relapse prevention plan</Link> before you start so you have strategies ready for the challenges you will face. Identify your triggers, line up support, and develop your coping toolkit. The preparation stage is where the groundwork is laid for successful action.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Stage 4: Action &mdash; making the change</h2>
            <p>
              The action stage is what most people think of when they think of &quot;change.&quot; You are actively modifying your behavior, experiences, and environment. This is the most visible stage, but it is also the most demanding:
            </p>
            <ul>
              <li>Abstaining from substance use or following a structured reduction plan</li>
              <li>Attending treatment, therapy, or support group meetings</li>
              <li>Using coping skills to manage cravings and triggers</li>
              <li>Restructuring your daily routine, social circle, and environment</li>
              <li>Actively working on your recovery every day</li>
            </ul>
            <p>
              <strong>What helps at this stage:</strong> Behavioral strategies, social support, and practical tools. The <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline">HALT check-in</Link> helps you monitor vulnerability states daily. The <Link href="/coping-skills-randomizer" className="text-sage-600 dark:text-sage-400 underline">coping skills randomizer</Link> gives you strategies when you need them. Celebrate small wins &mdash; each day of action reinforces the neural pathways that support your new behavior.
            </p>
          </section>

          <section>
            <h2>Stage 5: Maintenance &mdash; sustaining the change</h2>
            <p>
              Maintenance is the stage where you work to sustain the changes you have made and prevent relapse. This stage begins after the initial action phase has stabilized (typically after about six months of sustained change) and, in the context of addiction recovery, often continues indefinitely:
            </p>
            <ul>
              <li>Continuing engagement with support systems (therapy, meetings, community)</li>
              <li>Maintaining healthy routines and coping strategies</li>
              <li>Recognizing and managing new triggers as they arise</li>
              <li>Building a life that supports sobriety &mdash; meaningful work, healthy relationships, purpose</li>
              <li>Ongoing self-monitoring and self-reflection</li>
            </ul>
            <p>
              <strong>What helps at this stage:</strong> Continued vigilance without hypervigilance. The greatest risk in maintenance is complacency &mdash; the belief that because things are going well, you no longer need your recovery practices. Ongoing engagement with support, regular self-reflection through tools like the <Link href="/daily-recovery-check-in" className="text-sage-600 dark:text-sage-400 underline">daily recovery check-in</Link>, and periodic reassessment of your relapse prevention plan all support sustained recovery.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Why readiness fluctuates &mdash; and that is normal</h2>
            <p>
              One of the most important insights from the Transtheoretical Model is that movement through the stages is not linear. People cycle through stages, revisit earlier stages, and sometimes move backward before moving forward again. This is not failure &mdash; it is the normal pattern of behavior change.
            </p>
            <p>
              Motivational interviewing, developed by William Miller and Stephen Rollnick, was designed specifically to work with this reality. Rather than pushing people toward action before they are ready, motivational interviewing helps people explore their own motivation at whatever stage they are in. The key principles include:
            </p>
            <ul>
              <li><strong>Express empathy:</strong> Understanding the person&apos;s perspective without judgment</li>
              <li><strong>Develop discrepancy:</strong> Helping the person see the gap between where they are and where they want to be</li>
              <li><strong>Roll with resistance:</strong> Not arguing against resistance but exploring it</li>
              <li><strong>Support self-efficacy:</strong> Reinforcing the person&apos;s belief that change is possible</li>
            </ul>
            <p>
              The <Link href="/readiness-to-change" className="text-sage-600 dark:text-sage-400 underline">readiness to change assessment</Link> is designed with these principles in mind. It does not tell you what you should do &mdash; it helps you see where you are so you can decide what makes sense for you right now.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Find out where you are in the change process</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The readiness assessment identifies your current stage and provides tailored guidance. Free, private, and non-judgmental.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/readiness-to-change" className="btn-primary text-sm">Take the Readiness Assessment</Link>
              <Link href="/relapse-prevention-plan" className="btn-primary text-sm">Build a Prevention Plan</Link>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

          {/* FAQ */}
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

          {/* Related Tools */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/readiness-to-change" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Readiness to Change Assessment</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Identify your current stage in the change process</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-developed alcohol use screening tool</p>
              </Link>
              <Link href="/dast-10-drug-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Drug Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10-question drug use screening assessment</p>
              </Link>
              <Link href="/relapse-prevention-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build a personalized relapse prevention strategy</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Stages of Change in Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The 5 stages of change model for addiction recovery</p>
              </Link>
              <Link href="/blog/relapse-prevention-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The three stages of relapse and how to intervene early</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
