import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/how-to-support-someone-with-mental-health-condition`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "how-to-support-someone-with-mental-health-condition")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/how-to-support-someone-with-mental-health-condition",
  title: "How to Support Someone With a Mental Health Condition",
  description:
    "Supporting someone with depression, anxiety, PTSD, or another mental health condition can be hard to get right. Here\u2019s what actually helps \u2014 and what to avoid.",
  keywords: [
    "how to support someone with mental health issues",
    "helping someone with depression",
    "how to help someone with anxiety",
    "supporting mental health",
    "what to say to someone struggling",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What if the person doesn\u2019t want help?",
    answer:
      "You cannot force someone to accept help, and attempting to usually damages the relationship. Stay connected, express care without conditions, share resources without pressure, and take care of yourself. Sustained connection from someone who isn\u2019t going anywhere is the most powerful long-term influence you have.",
  },
  {
    question: "Is it okay to ask someone directly if they\u2019re thinking about suicide?",
    answer:
      "Yes. Research is clear that asking about suicide does not increase risk \u2014 it opens the door for someone who may be hoping someone will notice. Ask directly and calmly: \u201cAre you having thoughts of hurting yourself?\u201d Then listen without panic. Your calm presence matters more than perfect words.",
  },
  {
    question: "How do I avoid saying the wrong thing?",
    answer:
      "You will say imperfect things \u2014 everyone does. The relationship, not individual words, is what provides support. What matters most is that the person trusts you, knows you won\u2019t judge them, and believes you\u2019ll be there tomorrow. Consistent presence over time matters more than any perfectly crafted sentence.",
  },
  {
    question: "How long does supporting someone with a mental health condition usually take?",
    answer:
      "It varies. Some episodes are time-limited; some conditions are chronic and require ongoing support. Supporting someone means committing to a relationship, not a defined timeline. Long-term support requires sustainable habits on your end \u2014 which is why taking care of yourself is non-negotiable.",
  },
];

export default function HowToSupportSomeonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "How to Support Someone With a Mental Health Condition", description: "Supporting someone with depression, anxiety, PTSD, or another mental health condition. Here\u2019s what actually helps \u2014 and what to avoid.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "How to Support Someone With a Mental Health Condition", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">15 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How to Support Someone With a Mental Health Condition
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Supporting someone with a mental health condition means being present without trying to fix, listening without minimizing, and showing up consistently without taking over. The most helpful support is usually not grand gestures &mdash; it is sustained, low-pressure presence that communicates &ldquo;I&rsquo;m here and I&rsquo;m not going anywhere.&rdquo; Getting this right is genuinely difficult, and most people who care deeply still make mistakes. This guide covers what the research and clinical experience show actually helps.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What Most People Get Wrong First</h2>
            <p>
              The instinct when someone we love is struggling is to fix it. We offer solutions, silver linings, and reassurance. This is well-intentioned &mdash; and it often misses the mark.
            </p>
            <p>
              People with mental health conditions have usually already tried the obvious things. They know exercise helps depression; they&rsquo;ve been told to think positive. What they often need first is not a solution &mdash; it&rsquo;s acknowledgment that what they&rsquo;re experiencing is real, hard, and understandable.
            </p>
            <p>
              The single most common support mistake is <strong>jumping to problem-solving before validation</strong>. A person who shares that they&rsquo;re struggling with anxiety and is immediately met with &ldquo;have you tried meditation?&rdquo; often feels more alone, not less &mdash; as though their experience is a simple problem with an obvious solution they&rsquo;ve failed to implement.
            </p>
            <p><strong>Validate before you advise.</strong> Always.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>What Validation Looks Like</h2>
            <p>
              Validation is communicating that you understand why the person feels the way they do &mdash; not that you agree with every thought or that the situation is objectively as bad as it feels, but that the emotional experience makes sense given their context.
            </p>
            <p><strong>Validating responses:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>&ldquo;That sounds really hard.&rdquo;</li>
              <li>&ldquo;I can understand why you&rsquo;re feeling overwhelmed &mdash; that&rsquo;s a lot.&rdquo;</li>
              <li>&ldquo;It makes sense you&rsquo;d feel that way.&rdquo;</li>
              <li>&ldquo;I&rsquo;m so glad you told me.&rdquo;</li>
              <li>Sitting quietly, without filling the silence.</li>
            </ul>
            <p><strong>Invalidating responses (even when well-intentioned):</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>&ldquo;But you have so much to be grateful for.&rdquo;</li>
              <li>&ldquo;At least it&rsquo;s not as bad as...&rdquo;</li>
              <li>&ldquo;Just try to think positive.&rdquo;</li>
              <li>&ldquo;Why are you letting it affect you this much?&rdquo;</li>
              <li>&ldquo;You need to snap out of it.&rdquo;</li>
              <li>&ldquo;I went through something similar and I was fine.&rdquo;</li>
            </ul>
            <p>Validation doesn&rsquo;t mean endorsing hopelessness. It means meeting the person where they are before going anywhere else.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What to Say (and What Not to Say)</h2>
            <h3>What Helps</h3>
            <p>
              <strong>&ldquo;I&rsquo;m here.&rdquo;</strong> Simple, low-pressure, no expectations attached. One of the most powerful things you can say.
            </p>
            <p>
              <strong>&ldquo;You don&rsquo;t have to explain anything &mdash; I just wanted you to know I&rsquo;m thinking about you.&rdquo;</strong> Removes the pressure to perform or articulate suffering clearly.
            </p>
            <p>
              <strong>&ldquo;What would be most helpful right now?&rdquo;</strong> Asks rather than assumes. The answer might be &ldquo;nothing&rdquo; or &ldquo;just talk to me&rdquo; or something very specific.
            </p>
            <p>
              <strong>&ldquo;I don&rsquo;t know what to say, but I care about you and I&rsquo;m not going anywhere.&rdquo;</strong> Honesty about not having answers, combined with commitment to presence.
            </p>
            <p>
              <strong>&ldquo;Would it be okay if I checked in on you tomorrow?&rdquo;</strong> Creates continuity without pressure.
            </p>
            <h3>What to Avoid</h3>
            <p>
              <strong>&ldquo;Have you tried...&rdquo;</strong> Unless directly asked for suggestions, unsolicited advice often feels dismissive.
            </p>
            <p>
              <strong>&ldquo;You just need to...&rdquo;</strong> Implies the solution is simple and the person isn&rsquo;t trying hard enough.
            </p>
            <p>
              <strong>&ldquo;I know exactly how you feel.&rdquo;</strong> You don&rsquo;t &mdash; and claiming you do often shuts conversation down.
            </p>
            <p>
              <strong>&ldquo;But you have a great life.&rdquo;</strong> Invalidates the experience and implies they have no right to struggle.
            </p>
            <p>
              <strong>&ldquo;Everyone feels like that sometimes.&rdquo;</strong> True, but minimizing &mdash; what the person is experiencing may be qualitatively different from ordinary sadness or stress.
            </p>
            <p>
              <strong>&ldquo;Have you thought about seeing someone?&rdquo;</strong> This can be useful &mdash; once, gently. Repeating it when the person isn&rsquo;t ready often feels like pressure to fix themselves for your comfort.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>The Difference Between Supporting and Enabling</h2>
            <p>This is one of the most challenging distinctions for people supporting someone with a mental health condition.</p>
            <p>
              <strong>Supporting</strong> means helping someone move toward their own wellbeing and treatment goals. It includes: listening, accompanying them to appointments, reducing practical barriers, expressing care, holding hope when they can&rsquo;t.
            </p>
            <p>
              <strong>Enabling</strong> means doing things that allow the person to avoid addressing the condition &mdash; accommodating avoidance patterns, covering for consequences, or taking over responsibilities in ways that prevent the person from engaging with their own life and treatment.
            </p>
            <p>Examples that are genuinely difficult:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>If a partner has social anxiety, should you always make phone calls for them? (Short-term: kind. Long-term: maintains the avoidance.)</li>
              <li>If a family member with depression cancels plans repeatedly, should you always let it go? (Isolation worsens depression; gentle persistence matters.)</li>
              <li>If someone with substance use disorder asks for money, should you provide it? (If it funds substance use: enabling. If it funds treatment: supporting.)</li>
            </ul>
            <p>
              There are no universal answers to these questions. A therapist or counselor &mdash; including family-focused resources like CRAFT (Community Reinforcement and Family Training) &mdash; can help navigate the specifics of your situation.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>How to Encourage Professional Help Without Pressure</h2>
            <p>At some point, supporting someone well means encouraging them toward professional help. Doing this effectively requires care:</p>
            <p>
              <strong>Once, clearly, gently.</strong> Share your concern and your suggestion once. &ldquo;I&rsquo;ve noticed you&rsquo;ve been struggling, and I really think talking to a professional could help. I&rsquo;m happy to help you find someone if that would be useful.&rdquo;
            </p>
            <p>
              <strong>Offer specific help.</strong> &ldquo;Would it help if I helped you look up therapists?&rdquo; or &ldquo;I could go with you to the first appointment if that would make it easier&rdquo; &mdash; specific offers reduce friction more than general encouragement.
            </p>
            <p>
              <strong>Don&rsquo;t make it a condition.</strong> Ultimatums around treatment (&ldquo;I can&rsquo;t keep supporting you if you don&rsquo;t get help&rdquo;) are occasionally necessary in severe situations but frequently damage the relationship and backfire.
            </p>
            <p>
              <strong>Respect their timeline.</strong> People change when they&rsquo;re ready, not when others want them to. Continuing to express care while respecting their autonomy is more likely to lead to treatment than pressure.
            </p>
            <p>
              <strong>Share resources without pressure.</strong> &ldquo;I came across this screening tool &mdash; it only takes two minutes if you&rsquo;re ever curious where things stand&rdquo; is different from &ldquo;you need to take this test.&rdquo;
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>Supporting Someone in a Mental Health Crisis</h2>
            <p>
              A mental health crisis &mdash; involving thoughts of suicide or self-harm, severe dissociation, psychosis, or inability to care for oneself &mdash; requires a different approach.
            </p>
            <p><strong>What to do:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stay calm. Your calm is regulated &mdash; it communicates safety.</li>
              <li>Ask directly: &ldquo;Are you thinking about hurting yourself?&rdquo; Research consistently shows that asking about suicide does not plant the idea &mdash; it opens the door.</li>
              <li>Listen without judgment.</li>
              <li>Help them contact crisis resources: 988 (call or text), Crisis Text Line (text HOME to 741741).</li>
              <li>If there is immediate danger, contact emergency services.</li>
            </ul>
            <p><strong>What not to do:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Leave the person alone</li>
              <li>Promise not to tell anyone (you may need to break this promise to keep them safe)</li>
              <li>Minimize (&ldquo;you&rsquo;re just having a bad day&rdquo;)</li>
              <li>Debate or argue with the content of crisis thinking</li>
            </ul>
            <p>
              <strong>After the crisis:</strong> Follow up. Show up. The period after a mental health crisis is high-risk &mdash; connection and ongoing support matter enormously.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Taking Care of Yourself While Supporting Someone Else</h2>
            <p>
              Supporting someone with a mental health condition is not emotionally neutral. Compassion fatigue &mdash; the depletion that comes from sustained emotional caregiving &mdash; is real.
            </p>
            <p>Signs you may be experiencing compassion fatigue:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Feeling emotionally numb or detached</li>
              <li>Dreading interactions with the person you&rsquo;re supporting</li>
              <li>Neglecting your own needs, relationships, and activities</li>
              <li>Physical exhaustion that sleep doesn&rsquo;t fix</li>
              <li>Resentment emerging alongside care</li>
            </ul>
            <p>
              Your own wellbeing is not a luxury or a betrayal of the person you&rsquo;re supporting &mdash; it is a prerequisite for sustained support. You cannot pour from an empty cup, and unsustainable support often leads to abrupt withdrawal that harms both parties.
            </p>
            <p>Concrete steps:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maintain your own support network &mdash; don&rsquo;t let your social life shrink to the person you&rsquo;re supporting</li>
              <li>Set limits on what you can offer (&ldquo;I can talk for an hour but I need to sleep after that&rdquo;)</li>
              <li>Consider your own therapy &mdash; supporting someone with a mental health condition is a legitimate reason to seek professional support yourself</li>
              <li>Use family and caregiver support resources: NAMI Family Support Group, CRAFT, Al-Anon</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>Condition-Specific Notes</h2>
            <p>
              <strong>Supporting someone with depression:</strong> The withdrawal, reduced communication, and cancelled plans of depression are not rejection &mdash; but they can feel that way. Consistent, low-pressure contact (&ldquo;just wanted to say I&rsquo;m thinking about you &mdash; no need to reply&rdquo;) matters more than big gestures. Help with practical tasks without taking over; depression makes everything harder.
            </p>
            <p>
              <strong>Supporting someone with anxiety:</strong> Avoid accommodating avoidance &mdash; it maintains anxiety long-term. Gentle encouragement toward rather than away from feared situations is kinder in the long run than permanent accommodation. Don&rsquo;t provide excessive reassurance; it functions like a compulsion for anxiety.
            </p>
            <p>
              <strong>Supporting someone with PTSD:</strong> Trauma responses &mdash; startle, dissociation, avoidance, emotional numbness &mdash; make sense as responses to what happened. Don&rsquo;t push for disclosure before the person is ready. Learn their triggers if they share them. Don&rsquo;t interpret PTSD symptoms as personal rejection.
            </p>
            <p>
              <strong>Supporting someone with substance use disorder:</strong> CRAFT (Community Reinforcement and Family Training) is the most evidence-based family support approach. Loving someone with SUD is exhausting and complicated. SAMHSA&rsquo;s helpline (1-800-662-4357) provides family support referrals.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This article is for informational and educational purposes only. It is not a substitute for professional guidance on supporting someone with a mental health condition. If the person you&rsquo;re supporting is in crisis, please help them contact the 988 Suicide &amp; Crisis Lifeline (call or text 988) immediately.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5">
            <p className="text-sm text-red-900 dark:text-red-200 font-semibold mb-2">Crisis Resources</p>
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              If the person you&rsquo;re supporting is in crisis right now:
            </p>
            <ul className="text-sm text-red-800 dark:text-red-300 space-y-1">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 p-6 text-center">
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Free Mental Health Screening Tools</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              Share these free, confidential screening tools with someone you care about &mdash; no account needed.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">GAD-7 Anxiety Check</Link>
              <Link href="/audit-alcohol-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">AUDIT Alcohol Screening</Link>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

          {/* FAQ */}
          <section>
            <h2>Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQ_DATA.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="cursor-pointer font-semibold text-neutral-900 dark:text-neutral-100 hover:text-orange-600 dark:hover:text-orange-400 transition">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section>
            <h2>Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/phq-9-depression-test", label: "PHQ-9 Depression Self-Check" },
                { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Screening" },
                { href: "/audit-alcohol-test", label: "AUDIT Alcohol Screening" },
                { href: "/pcl-5-ptsd-screening", label: "PCL-5 PTSD Screening" },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="block rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:border-orange-300 dark:hover:border-orange-700 transition">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{tool.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section>
            <h2>Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((p) =>
                ["helping-family-member-addiction", "how-to-find-a-therapist", "how-to-talk-to-doctor-about-mental-health", "mental-health-stigma"].includes(p.slug)
              ).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:border-orange-300 dark:hover:border-orange-700 transition">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{post.title}</span>
                  <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-1">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
