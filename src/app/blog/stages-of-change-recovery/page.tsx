import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/stages-of-change-recovery`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "stages-of-change-recovery")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/stages-of-change-recovery",
  title: "Stages of Change in Addiction Recovery",
  description:
    "Understand the 5 stages of change model for addiction recovery. Learn what helps at each stage and how relapse fits in. Evidence-based guide.",
  keywords: [
    "stages of change model", "stages of change addiction", "transtheoretical model",
    "prochaska diclemente model", "readiness to change", "addiction recovery stages",
    "relapse prevention", "motivational interviewing", "stages of recovery",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is relapse part of recovery?",
    answer: "Yes. In the stages of change model, relapse is considered a normal part of the change process rather than a failure. Most people cycle through the stages several times before maintaining long-term change. Research shows that the average person makes multiple attempts before sustaining recovery. Each attempt builds self-knowledge, coping skills, and motivation that contribute to eventual success. If you experience a relapse, the most important step is to re-engage with the process rather than give up.",
  },
  {
    question: "What stage am I in?",
    answer: "Your stage depends on your current relationship with change. If you don&apos;t think you have a problem, you may be in precontemplation. If you&apos;re weighing the pros and cons of changing, you may be in contemplation. If you&apos;re making a plan, you&apos;re likely in preparation. If you&apos;re actively making changes, you&apos;re in the action stage. If you&apos;ve been maintaining changes for six months or more, you&apos;re in maintenance. Our Readiness to Change self-check can help you identify where you are right now.",
  },
  {
    question: "Can you skip stages?",
    answer: "Generally, no. The stages of change model describes a process that most people move through sequentially. Jumping from precontemplation directly to action, for example, often leads to changes that don&apos;t stick because the internal motivation and planning haven&apos;t been developed. However, the time spent in each stage varies widely from person to person. Some people move through contemplation quickly, while others remain there for months or years. The key is that each stage builds readiness for the next.",
  },
  {
    question: "How long does each stage last?",
    answer: "There is no fixed timeline for any stage. Some people spend years in precontemplation or contemplation before becoming ready for change. Others move through preparation and into action within weeks. Maintenance is generally considered to begin after six months of sustained change, but building a new lifestyle is an ongoing process. The model emphasizes that change happens at an individual pace and that pressuring someone to move faster than they are ready often backfires.",
  },
  {
    question: "What is motivational interviewing?",
    answer: "Motivational interviewing (MI) is a counseling approach developed by William Miller and Stephen Rollnick that helps people explore and resolve ambivalence about change. Rather than telling someone what to do, an MI practitioner asks open-ended questions, reflects back what they hear, and supports the person in finding their own reasons to change. MI is especially effective in the precontemplation and contemplation stages, where people are not yet ready for action but may benefit from exploring their feelings about their current situation.",
  },
];

export default function StagesOfChangeRecoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "The Stages of Change in Addiction Recovery", description: "Understand the 5 stages of change model for addiction recovery. Learn what helps at each stage and how relapse fits in.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Stages of Change in Recovery", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            The Stages of Change in Addiction Recovery
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Recovery is not a single decision — it is a process that unfolds over time. The stages of change model helps you understand where you are, what helps at each point, and why setbacks are a normal part of the journey.
          </p>
          <div className="mt-6">
            <Link href="/readiness-to-change" className="btn-primary text-sm">Take the Readiness to Change Self-Check &rarr;</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Prochaska &amp; DiClemente&apos;s Transtheoretical Model</h2>
            <p>
              In the early 1980s, psychologists James Prochaska and Carlo DiClemente studied how people successfully change addictive behaviors. They noticed that change did not happen all at once. Instead, people moved through a predictable series of stages — sometimes forward, sometimes backward, but always in a recognizable pattern.
            </p>
            <p>
              Their research became the Transtheoretical Model of Change, commonly known as the stages of change model. It has since become one of the most widely used frameworks in addiction counseling, public health, and behavioral medicine. The model applies not only to substance use but to any significant behavior change — from quitting smoking to starting an exercise routine.
            </p>
            <p>
              What makes this model powerful is that it meets people where they are. Rather than assuming everyone is ready to take action, it recognizes that readiness itself develops over time — and that different kinds of support are helpful at different points in the process.
            </p>
          </section>

          <section>
            <h2>The 5 Stages Explained</h2>
            <p>
              The stages of change model describes five distinct phases that people typically move through when changing a behavior. Understanding each stage can help you recognize where you are and what might help you move forward.
            </p>

            <h3>1. Precontemplation: &quot;I don&apos;t have a problem&quot;</h3>
            <p>
              In precontemplation, a person does not believe their substance use is a problem — or may not have considered it at all. They are not thinking about change because, from their perspective, there is nothing to change. Friends, family, or colleagues may see the issue clearly, but the person themselves does not.
            </p>
            <p>
              This stage often feels like denial from the outside. On the inside, it may feel like confusion about why others are concerned, frustration with people who &quot;won&apos;t leave it alone,&quot; or genuine unawareness that use has escalated. A person in precontemplation might say, &quot;I only drink on weekends&quot; or &quot;Everyone I know uses — it&apos;s not a big deal.&quot;
            </p>

            <h3>2. Contemplation: &quot;Maybe I should change&quot;</h3>
            <p>
              Contemplation begins when a person starts to recognize that their substance use may be causing problems. They are not ready to act, but they are thinking about it. This stage is characterized by ambivalence — weighing the benefits of change against the comfort of the status quo.
            </p>
            <p>
              Someone in contemplation might think, &quot;I know my drinking is affecting my relationship, but I&apos;m not sure I can stop&quot; or &quot;I&apos;ve been spending too much on substances, but they help me cope with stress.&quot; This internal back-and-forth can last weeks, months, or even years.
            </p>

            <h3>3. Preparation: &quot;I&apos;m getting ready&quot;</h3>
            <p>
              In the preparation stage, a person has decided to make a change and is taking initial steps. They might be researching treatment options, talking to a counselor, setting a quit date, or telling trusted people about their plan. The intention is clear, and small actions are beginning.
            </p>
            <p>
              This stage feels like planning and anticipation. Someone might download a <Link href="/sobriety-calculator">sobriety tracker</Link>, call a treatment center, or attend their first support group meeting. The key marker of preparation is that the person intends to take action within the next 30 days.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h3>4. Action: &quot;I&apos;m doing it&quot;</h3>
            <p>
              The action stage is when a person is actively modifying their behavior. They have stopped or significantly reduced their substance use and are implementing new strategies — attending counseling, using coping skills, avoiding triggers, and building a recovery-supportive lifestyle.
            </p>
            <p>
              Action is the most visible stage, but it is not the beginning of change — it is built on the foundation laid in the earlier stages. This phase is often intense. It requires significant effort, energy, and support. New routines are fragile, and the risk of returning to old patterns is high. The action stage is generally considered to last from the point of initial change up to about six months.
            </p>

            <h3>5. Maintenance: &quot;I&apos;m keeping it going&quot;</h3>
            <p>
              Maintenance begins after approximately six months of sustained change. The focus shifts from making changes to keeping them. A person in maintenance is consolidating new habits, strengthening coping skills, and building a life that supports continued recovery.
            </p>
            <p>
              This stage can feel deceptively calm. The urgency of early recovery fades, and complacency can become a risk. Ongoing relapse prevention strategies, continued engagement with support systems, and attention to overall well-being are essential during maintenance. For many people, this stage continues indefinitely as they build an increasingly stable and fulfilling life without substances.
            </p>
          </section>

          <section>
            <h2>How Relapse Fits Into the Model</h2>
            <p>
              One of the most important contributions of the stages of change model is its treatment of relapse. Rather than viewing a return to substance use as a failure, the model recognizes relapse as a common and often expected part of the change process. Research consistently shows that most people cycle through the stages multiple times before achieving lasting change.
            </p>
            <p>
              When relapse occurs, a person typically returns to an earlier stage — often contemplation or preparation — rather than starting from zero. The skills, insights, and self-knowledge gained in previous attempts are not lost. Each cycle through the stages builds a stronger foundation for the next attempt.
            </p>
            <p>
              This perspective is clinically important because shame and self-blame after relapse are among the biggest barriers to re-engaging with recovery. Understanding that setbacks are part of the process — not evidence of personal weakness — can make the difference between giving up and trying again.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What Helps at Each Stage</h2>
            <p>
              Different stages call for different kinds of support. One reason traditional &quot;one-size-fits-all&quot; approaches to addiction sometimes fall short is that they offer action-stage interventions to people who are still in precontemplation or contemplation.
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { stage: "Precontemplation", help: "Gentle awareness-building, non-judgmental information sharing, motivational interviewing to explore discrepancies" },
                { stage: "Contemplation", help: "Motivational interviewing, decisional balance exercises, exploring values and goals, addressing ambivalence" },
                { stage: "Preparation", help: "Action planning, identifying support systems, setting specific goals and timelines, removing barriers" },
                { stage: "Action", help: "Counseling, skill-building, trigger management, peer support groups, celebrating milestones" },
                { stage: "Maintenance", help: "Relapse prevention planning, lifestyle balance, ongoing support, addressing complacency, building meaning" },
              ].map((r) => (
                <div key={r.stage} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-32 flex-shrink-0">{r.stage}</span>
                  <div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{r.help}</span>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Motivational interviewing is particularly effective in the early stages because it does not pressure people to change before they are ready. Instead, it helps them discover their own motivation — which is far more sustainable than externally imposed demands.
            </p>
          </section>

          <section>
            <h2>Why Understanding Your Stage Matters</h2>
            <p>
              Knowing where you are in the stages of change can reduce frustration and guide your next step. If you are in contemplation, you do not need to have all the answers — you just need to keep exploring. If you are in preparation, the most helpful thing may be making a concrete plan rather than gathering more information.
            </p>
            <p>
              Understanding your stage also helps the people around you provide better support. A family member who recognizes that their loved one is in precontemplation can focus on maintaining the relationship rather than pushing for immediate action — which often pushes the person further away.
            </p>
          </section>

          <section>
            <h2>How the Readiness to Change Tool Maps to the Model</h2>
            <p>
              Our <Link href="/readiness-to-change">Readiness to Change self-check</Link> is based on this model. It asks questions designed to help you identify which stage you may currently be in. Your results can indicate whether you are still exploring the idea of change, actively preparing, or already taking steps.
            </p>
            <p>
              The screening does not tell you what to do — it helps you understand where you are so you can seek the kind of support that matches your readiness. Someone in contemplation benefits from different resources than someone in action, and the tool helps clarify that distinction.
            </p>
          </section>

          <section>
            <h2>How Counselors Use the Model</h2>
            <p>
              Clinicians trained in the stages of change model tailor their approach to each client&apos;s current stage. Rather than applying the same intervention to everyone, they assess readiness and adjust accordingly. A counselor working with someone in precontemplation might focus on building rapport and gently raising awareness, while a counselor working with someone in action might focus on skill-building and relapse prevention.
            </p>
            <p>
              This stage-matched approach is supported by decades of research. Studies show that interventions matched to a person&apos;s stage of change are significantly more effective than mismatched interventions. According to <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer">SAMHSA</a>, integrating the stages of change framework into substance use treatment improves engagement, retention, and outcomes.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>The Non-Linear Nature of Recovery</h2>
            <p>
              Perhaps the most important thing to understand about the stages of change model is that recovery is not a straight line. People move forward and backward through the stages, sometimes multiple times. Someone might progress from contemplation to action, experience a setback, return to contemplation, and eventually move through to maintenance.
            </p>
            <p>
              This non-linear pattern is normal, not pathological. Each pass through the stages builds resilience, self-awareness, and practical skills. The person who has cycled through the stages three times is not weaker than someone who moved through once — they may simply be facing more complex circumstances, deeper-rooted patterns, or fewer external supports.
            </p>
            <p>
              Recovery is a process of learning what works for you as an individual. The stages of change model provides a map — but every person&apos;s journey through that map is unique. What matters most is continuing to engage with the process, seeking support when you need it, and recognizing that every step forward counts, even if the path is not straight.
            </p>
          </section>

          {/* Disclaimer */}
          <div className="card p-5 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose text-sm text-neutral-600 dark:text-neutral-400">
            <p className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p>This article is for educational purposes only. It is not a diagnosis or treatment recommendation. The stages of change model is a framework for understanding behavior change — it is not a substitute for professional evaluation. Always consult a qualified healthcare professional for concerns about substance use.</p>
            <p className="mt-2">If you or someone you know is struggling with substance use, call SAMHSA&apos;s National Helpline: <strong>1-800-662-4357</strong> (free, confidential, 24/7). If you are in crisis, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline).</p>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Where are you in the stages of change?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Our free Readiness to Change self-check can help you find out. Private, takes about 3 minutes. Your answers never leave your browser.</p>
            <Link href="/readiness-to-change" className="btn-primary text-sm">Take the Readiness to Change Self-Check</Link>
          </div>

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
                <div className="px-4 pb-4"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </section>

          {/* Related Tools */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/readiness-to-change" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Readiness to Change Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Identify your current stage of change readiness</p>
              </Link>
              <Link href="/sobriety-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Sobriety Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Track your recovery milestones and progress</p>
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build a practical plan for maintaining recovery</p>
              </Link>
              <Link href="/blog/dast-10-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Scoring &amp; Interpretation Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the drug abuse screening test</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
