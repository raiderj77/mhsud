import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/safety-planning-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "safety-planning-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/safety-planning-guide",
  title: "Safety Planning: A Step-by-Step Guide to Creating Your Crisis Plan",
  description:
    "A safety plan is a written list of coping strategies and resources for when you are in crisis. Learn the 6 steps of the Stanley-Brown model.",
  keywords: [
    "safety plan",
    "crisis safety plan",
    "suicide safety plan",
    "safety planning intervention",
    "Stanley-Brown safety plan",
    "crisis plan",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is a safety plan?",
    answer:
      "A safety plan is a written, prioritized list of coping strategies and resources that you can use when you are experiencing a suicidal crisis or overwhelming emotional distress. It is designed to be used in the moment \u2014 when your thinking may be clouded and decision-making is impaired. The plan walks you through a series of steps, starting with internal strategies and escalating to professional help, so you always have a next step to try.",
  },
  {
    question: "Is a safety plan the same as a no-suicide contract?",
    answer:
      "No. A no-suicide contract (or \u201Ccontract for safety\u201D) is an agreement where a person promises not to attempt suicide. Research has shown that no-suicide contracts are NOT effective at reducing suicide risk and may actually create a false sense of security for clinicians. The Stanley-Brown Safety Planning Intervention, by contrast, is an evidence-based tool that provides actionable coping strategies. Safety plans reduce suicide attempts; no-suicide contracts do not.",
  },
  {
    question: "When should I use my safety plan?",
    answer:
      "Use your safety plan at the earliest sign of a crisis \u2014 when you first notice warning signs such as increasing hopelessness, withdrawal from others, racing thoughts about death or self-harm, or overwhelming emotional pain. The earlier you engage with your safety plan, the more effective it is. You do not need to wait until you are in acute danger to start using it.",
  },
  {
    question: "Should I create a safety plan with a therapist?",
    answer:
      "Ideally, yes. Research shows that safety plans are most effective when created collaboratively with a trained clinician who can help you identify specific, personalized coping strategies and ensure the plan is thorough. However, having any safety plan is better than having none. If you do not currently have a therapist, you can create an initial plan on your own and refine it later with professional support.",
  },
];

export default function SafetyPlanningGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Safety Planning: A Step-by-Step Guide to Creating Your Crisis Plan", description: "Learn the 6 steps of the Stanley-Brown Safety Planning Intervention and how to create your own crisis safety plan.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Safety Planning Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Safety Planning: A Step-by-Step Guide to Creating Your Crisis Plan
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            A crisis does not wait for you to be ready. When overwhelming emotional pain strikes, your ability to think clearly and make decisions is impaired &mdash; which is exactly when you need a plan the most. A safety plan is a written, step-by-step guide you create in advance so that when a crisis arrives, you do not have to figure out what to do in the moment. You already know. The plan is already there.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis right now</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              You do not need to be in immediate danger to reach out. These services are available for anyone experiencing emotional distress.
            </p>
          </div>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational and educational purposes only and does not constitute medical or mental health advice. Safety plans are most effective when created collaboratively with a trained clinician. If you are experiencing suicidal thoughts, please contact 988 or go to your nearest emergency room.
            </p>
          </div>

          <section>
            <h2>What is a safety plan?</h2>
            <p>
              A safety plan is a written, prioritized list of coping strategies and resources you can turn to when experiencing a suicidal crisis or overwhelming emotional distress. It is designed to be brief, specific, and actionable &mdash; something you can pull out and follow step by step when your thinking is clouded by pain.
            </p>
            <p>
              The most widely used and researched model is the Stanley-Brown Safety Planning Intervention (SPI), developed by Barbara Stanley, Ph.D., and Gregory Brown, Ph.D. A 2018 study published in <em>JAMA Psychiatry</em> (Stanley et al.) found that safety planning combined with structured follow-up reduced suicide attempts by 45% among veterans presenting to emergency departments with suicidal ideation.
            </p>
            <p>
              Safety planning is now recommended by the National Action Alliance for Suicide Prevention, the Joint Commission, and the Department of Veterans Affairs as a standard of care for individuals at risk. It is one of the most effective brief interventions available for suicide prevention.
            </p>
          </section>

          <section>
            <h2>The 6 steps of the Stanley-Brown Safety Plan</h2>
            <p>
              The Stanley-Brown model follows a specific sequence, starting with things you can do on your own and escalating to external support. This structure is intentional &mdash; it gives you multiple options before reaching the point of needing emergency intervention.
            </p>

            <h3>Step 1: Recognize your warning signs</h3>
            <p>
              What are the early signals that a crisis may be developing? These are the thoughts, feelings, behaviors, or situations that typically precede your worst moments. Examples include increasing isolation, persistent thoughts of being a burden, disrupted sleep, or a specific emotional state like hopelessness or rage.
            </p>
            <p>
              Being specific is critical. &quot;Feeling bad&quot; is too vague. &quot;Staying in bed past noon and not responding to messages for two days&quot; is actionable &mdash; it tells you exactly when to pull out the plan.
            </p>

            <h3>Step 2: Use internal coping strategies</h3>
            <p>
              These are things you can do on your own, without contacting anyone, to manage the crisis. The goal is to create enough time and space to let the intensity pass. Examples include:
            </p>
            <ul>
              <li>Going for a walk or engaging in physical movement</li>
              <li>Deep breathing or progressive muscle relaxation</li>
              <li>Taking a cold shower or holding ice cubes (grounding techniques)</li>
              <li>Listening to a specific playlist or watching a comfort show</li>
              <li>Writing in a journal or doing a <Link href="/dbt-crisis-skills" className="text-sage-600 dark:text-sage-400 underline">DBT distress tolerance exercise</Link></li>
            </ul>

            <h3>Step 3: Contact people and places for distraction</h3>
            <p>
              If internal strategies are not enough, the next step is putting yourself around other people &mdash; not necessarily to talk about your crisis, but to interrupt isolation. This might mean going to a coffee shop, gym, library, or place of worship. It might mean calling a friend to talk about anything other than how you are feeling.
            </p>

            <h3>Step 4: Ask someone for help</h3>
            <p>
              This step involves reaching out to specific, trusted people and telling them what you are experiencing. Write down names and phone numbers. Have at least two or three people listed so that if one is unavailable, you have backups. Include a brief script if that would help: &quot;I am having a really hard time right now and I need to talk.&quot;
            </p>

            <h3>Step 5: Contact professionals and agencies</h3>
            <p>
              List the professionals and crisis services you can contact. Include your therapist&apos;s name and number, your psychiatrist, the 988 Suicide &amp; Crisis Lifeline (call or text 988), Crisis Text Line (text HOME to 741741), and the nearest emergency room address. SAMHSA&apos;s National Helpline (1-800-662-4357) is also available 24/7.
            </p>

            <h3>Step 6: Make the environment safe</h3>
            <p>
              This step involves reducing access to lethal means during a crisis. Research consistently shows that means restriction is one of the most effective suicide prevention strategies &mdash; most suicidal crises are temporary, and if lethal means are not accessible during the crisis period, the person often survives. This might involve asking a trusted person to temporarily hold medications, firearms, or other items.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Why safety plans work</h2>
            <p>
              Safety plans work because they address the core problem of suicidal crises: impaired decision-making during extreme emotional pain. When someone is in crisis, their cognitive field narrows &mdash; a phenomenon called cognitive constriction. Options that seem obvious during calm moments become invisible during a crisis.
            </p>
            <p>
              A written safety plan bypasses this impairment. You do not need to generate solutions in the moment because the solutions are already written down. You just need to follow the steps. The sequential structure means there is always a next thing to try, which counteracts the feeling that nothing can help.
            </p>
            <p>
              The evidence base is strong. Beyond the 45% reduction in suicide attempts found by Stanley et al. (2018), a systematic review by Nuij et al. (2021) found consistent evidence that safety planning is associated with reduced suicidal ideation and behavior. The intervention is brief (can be completed in 20&ndash;45 minutes), low-cost, and effective across diverse populations.
            </p>
          </section>

          <section>
            <h2>Safety plans are not no-suicide contracts</h2>
            <p>
              It is important to understand what a safety plan is not. For years, clinicians used &quot;no-suicide contracts&quot; or &quot;contracts for safety&quot; &mdash; verbal or written agreements where a patient promised not to harm themselves. These contracts have no evidence supporting their effectiveness and may actually increase risk by creating a false sense of security.
            </p>
            <p>
              A safety plan is fundamentally different. It does not ask you to promise anything. Instead, it gives you concrete tools and a clear path of escalation. It acknowledges that crises will happen and prepares for them rather than pretending a promise can prevent them.
            </p>
            <p>
              The <Link href="/safety-plan" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools safety plan builder</Link> walks you through each of the six Stanley-Brown steps in a structured format. Your plan is created privately in your browser and can be saved or printed for easy access.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How to create your safety plan</h2>
            <p>
              The best time to create a safety plan is when you are not in crisis. This gives you the clarity to think carefully about what works for you and the ability to be specific and thorough.
            </p>
            <ul>
              <li><strong>Be specific.</strong> &quot;Call someone&quot; is less useful than &quot;Call Sarah at 555-0142.&quot; Specificity removes decision-making from a moment when you cannot think clearly.</li>
              <li><strong>Make it personal.</strong> Use coping strategies that have actually worked for you in the past, not generic suggestions. If going for a run has never helped you, do not put it on your plan.</li>
              <li><strong>Keep it accessible.</strong> Your safety plan should be easy to find when you need it. Keep a copy on your phone, in your wallet, on your nightstand. The <Link href="/safety-plan" className="text-sage-600 dark:text-sage-400 underline">digital safety plan tool</Link> lets you save and access your plan anytime.</li>
              <li><strong>Share it.</strong> Give a copy to your therapist, a trusted friend, or a family member so they know how to support you.</li>
              <li><strong>Review and update regularly.</strong> Phone numbers change, relationships shift, and you learn new coping skills. Review your plan with your therapist at least every few months.</li>
            </ul>
          </section>

          <section>
            <h2>When to seek professional support</h2>
            <p>
              A safety plan is a tool for managing crises, not a replacement for ongoing mental health support. If you are experiencing recurring suicidal thoughts, persistent hopelessness, or emotional crises, working with a trained mental health professional is strongly recommended.
            </p>
            <p>
              A therapist can help you create a more thorough safety plan, address the underlying issues contributing to crisis episodes, and provide evidence-based treatments such as Dialectical Behavior Therapy (DBT), Cognitive Behavioral Therapy for Suicide Prevention (CBT-SP), or the Collaborative Assessment and Management of Suicidality (CAMS).
            </p>
            <p>
              If you do not currently have a therapist, SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals. You do not need to be in crisis to call &mdash; they can help you find a provider in your area.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Create your safety plan now</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. Walk through the 6 steps and save your plan.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/safety-plan" className="btn-primary text-sm">Build Your Safety Plan</Link>
              <Link href="/dbt-crisis-skills" className="btn-primary text-sm">Learn DBT Crisis Skills</Link>
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
              <Link href="/safety-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Safety Plan Builder</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Create your personalized crisis safety plan</p>
              </Link>
              <Link href="/dbt-crisis-skills" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DBT Crisis Skills</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Distress tolerance techniques for crisis moments</p>
              </Link>
              <Link href="/crisis-resources" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Crisis Resources</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Complete list of helplines and emergency contacts</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/dbt-skills-beginners" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DBT Skills for Everyday Life</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Mindfulness, distress tolerance, and emotional regulation</p>
              </Link>
              <Link href="/blog/when-should-i-see-a-therapist" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">When Should I See a Therapist?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10 signs it may be time to talk to a professional</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
