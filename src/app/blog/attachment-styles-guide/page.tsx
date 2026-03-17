import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/attachment-styles-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "attachment-styles-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/attachment-styles-guide",
  title: "Understanding Attachment Styles: How Early Bonds Shape Adult Relationships",
  description:
    "Attachment styles affect how you connect in relationships. Learn the four styles \u2014 secure, anxious, avoidant, and disorganized \u2014 and how a self-assessment can help.",
  keywords: [
    "attachment styles",
    "attachment style quiz",
    "anxious attachment",
    "avoidant attachment",
    "disorganized attachment",
    "attachment theory",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can your attachment style change?",
    answer:
      "Yes. Attachment styles are relatively stable patterns, but they are not fixed traits. Through therapy \u2014 particularly emotionally focused therapy (EFT), schema therapy, or psychodynamic approaches \u2014 and through sustained secure relationships, people can develop what researchers call \u201Cearned security.\u201D This process typically takes time and intentional effort, but meaningful change is well-documented in the research.",
  },
  {
    question: "What is the most common attachment style?",
    answer:
      "Secure attachment is the most common, estimated at approximately 56% of the adult population. Avoidant attachment accounts for roughly 23%, anxious attachment for about 19%, and disorganized (fearful-avoidant) attachment for approximately 5%. These percentages vary by study and population.",
  },
  {
    question: "How does attachment style affect romantic relationships?",
    answer:
      "Attachment style shapes how you respond to closeness, conflict, and emotional vulnerability. Securely attached people tend to communicate needs directly and manage conflict constructively. Anxious individuals may seek excessive reassurance. Avoidant individuals may withdraw when things get emotionally intense. Understanding your style helps you recognize patterns rather than just react to them.",
  },
  {
    question: "Is disorganized attachment the same as fearful-avoidant?",
    answer:
      "Yes \u2014 they refer to the same pattern. \u201CDisorganized\u201D is the term used in developmental research (from Main and Solomon\u2019s work with infants), while \u201Cfearful-avoidant\u201D comes from Bartholomew and Horowitz\u2019s adult attachment model. Both describe a pattern of wanting closeness while simultaneously fearing it, often rooted in early experiences where a caregiver was both a source of comfort and fear.",
  },
];

export default function AttachmentStylesGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Understanding Attachment Styles: How Early Bonds Shape Adult Relationships", description: "Learn the four attachment styles, how they form in childhood, and how they affect adult relationships. Includes a free self-assessment.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Attachment Styles Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Understanding Attachment Styles: How Early Bonds Shape Adult Relationships
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Attachment theory, developed by John Bowlby and Mary Ainsworth, describes how our earliest relationships with caregivers shape the way we connect with others throughout life. Your attachment style influences how you handle closeness, respond to conflict, and navigate emotional vulnerability in relationships. Understanding your style is a starting point for self-awareness &mdash; not a label or a limitation.
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

          {/* Section 1 */}
          <section>
            <h2>What is attachment theory?</h2>
            <p>
              Attachment theory emerged from the work of British psychiatrist John Bowlby in the 1960s and 1970s. Bowlby proposed that children have an innate need to form a close bond with at least one primary caregiver for healthy emotional development. This bond &mdash; the attachment relationship &mdash; creates an internal working model of how relationships function.
            </p>
            <p>
              Mary Ainsworth built on Bowlby&apos;s work with the &quot;Strange Situation&quot; experiment in the 1970s, observing how infants responded to brief separations from and reunions with their caregivers. Her research identified three distinct attachment patterns: secure, anxious-resistant, and anxious-avoidant. A fourth pattern &mdash; disorganized &mdash; was later identified by Mary Main and Judith Solomon in 1986.
            </p>
            <p>
              In the late 1980s, Hazan and Shaver extended attachment theory to adult romantic relationships, demonstrating that the same patterns observed in infant-caregiver bonds appear in how adults approach intimacy, conflict, and emotional closeness.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>The four attachment styles</h2>

            <h3>Secure attachment (~56% of adults)</h3>
            <p>
              Securely attached people are generally comfortable with intimacy and emotional closeness while maintaining a healthy sense of independence. They tend to communicate needs directly, handle conflict constructively, and trust that relationships can weather disagreements.
            </p>
            <ul>
              <li>Comfortable with vulnerability and emotional closeness</li>
              <li>Can ask for support without excessive anxiety about being a burden</li>
              <li>Generally trusting of partners and friends</li>
              <li>Able to set boundaries while staying emotionally available</li>
              <li>Resilient in response to relationship stress</li>
            </ul>

            <h3>Anxious (preoccupied) attachment (~19% of adults)</h3>
            <p>
              Anxious attachment develops when caregiving is inconsistent &mdash; sometimes responsive, sometimes unavailable. This pattern creates a heightened sensitivity to signs of rejection and a strong need for reassurance.
            </p>
            <ul>
              <li>Fear of abandonment or rejection</li>
              <li>Hypervigilance to a partner&apos;s mood, tone, or availability</li>
              <li>Need for frequent reassurance that the relationship is okay</li>
              <li>Tendency to ruminate on relationship status and meaning</li>
              <li>Protest behaviors when feeling disconnected (excessive texting, jealousy, testing)</li>
              <li>Difficulty self-soothing when a partner is unavailable</li>
            </ul>

            <h3>Avoidant (dismissive) attachment (~23% of adults)</h3>
            <p>
              Avoidant attachment develops when a caregiver is emotionally unavailable or consistently rejecting of the child&apos;s emotional needs. The child learns to suppress attachment needs and rely on themselves.
            </p>
            <ul>
              <li>Strong value placed on independence and self-sufficiency</li>
              <li>Discomfort with emotional closeness or vulnerability</li>
              <li>Tendency to withdraw or shut down during conflict</li>
              <li>May intellectualize emotions rather than feeling them</li>
              <li>Deactivating strategies: focusing on a partner&apos;s flaws, pulling away when things get close</li>
              <li>May seem emotionally distant or self-contained</li>
            </ul>

            <h3>Disorganized (fearful-avoidant) attachment (~5% of adults)</h3>
            <p>
              Disorganized attachment arises when a caregiver is both a source of comfort and a source of fear &mdash; often in situations involving trauma, abuse, or a caregiver&apos;s own unresolved loss. This creates conflicting impulses: wanting closeness while being afraid of it.
            </p>
            <ul>
              <li>Contradictory desires for and fear of intimacy</li>
              <li>Oscillation between anxious and avoidant behaviors</li>
              <li>Difficulty regulating emotions in relationships</li>
              <li>Higher association with dissociation and mental health challenges</li>
              <li>Push-pull dynamics &mdash; may sabotage relationships as they become close</li>
              <li>Most strongly correlated with early trauma history</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 3 */}
          <section>
            <h2>How the MindCheck Tools attachment style quiz can help</h2>
            <p>
              The <Link href="/attachment-style-quiz" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools attachment style quiz</Link> is a free, private self-assessment that helps you identify which attachment pattern most closely describes your relational tendencies. Your answers are scored in your browser and never stored or transmitted.
            </p>
            <p>
              Understanding your attachment style is not about labeling yourself or assigning blame. It is about recognizing patterns &mdash; why you react the way you do in certain relationship situations, what triggers your anxiety or withdrawal, and what you actually need from the people close to you.
            </p>
            <p>
              If you are in a relationship and want to explore how your patterns interact with your partner&apos;s, the <Link href="/attachment-style-test-for-couples" className="text-sage-600 dark:text-sage-400 underline">attachment style test for couples</Link> can provide additional insight.
            </p>
            <p>
              These are self-awareness tools, not clinical assessments. For a comprehensive attachment evaluation, a therapist trained in attachment-focused approaches can provide much deeper insight.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2>Can attachment styles change?</h2>
            <p>
              Yes &mdash; and this is one of the most important findings in attachment research. Attachment styles are relatively stable over time but are <strong>not permanent traits</strong>. Change is possible through several pathways:
            </p>
            <ul>
              <li><strong>Therapy:</strong> Emotionally focused therapy (EFT), schema therapy, psychodynamic therapy, and EMDR (for trauma-related attachment) all have evidence for shifting attachment patterns</li>
              <li><strong>Secure relationships:</strong> A long-term relationship with a securely attached partner can gradually shift insecure patterns through what therapists call &quot;corrective emotional experiences&quot;</li>
              <li><strong>Self-awareness:</strong> Understanding your patterns is the necessary first step, though awareness alone is usually not sufficient for deep change</li>
              <li><strong>&quot;Earned security&quot;:</strong> People who had insecure childhoods but developed secure attachment through intentional work function similarly to those who were always securely attached</li>
            </ul>
            <p>
              The <Link href="/attachment-style-quiz" className="text-sage-600 dark:text-sage-400 underline">attachment style quiz</Link> can serve as a baseline &mdash; a snapshot of where you are now &mdash; that you can revisit over time as you work on your relational patterns.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 5 */}
          <section>
            <h2>When to seek professional help</h2>
            <p>Consider working with a therapist if:</p>
            <ul>
              <li>You notice the same painful patterns repeating across multiple relationships</li>
              <li>Fear of abandonment or fear of intimacy is significantly affecting your quality of life</li>
              <li>You find it very difficult to trust others or to let people get close</li>
              <li>Relationship conflict consistently escalates to a level that feels unmanageable</li>
              <li>You recognize that early experiences (trauma, neglect, loss) may be shaping your current relational patterns</li>
              <li>You are experiencing depression, anxiety, or substance use alongside relationship difficulties</li>
            </ul>
            <p>
              A therapist who specializes in attachment can help you understand the roots of your patterns and develop more secure ways of relating. If you are also experiencing symptoms of depression or anxiety, the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> can help you assess those dimensions.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Curious about your attachment style?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/attachment-style-quiz" className="btn-primary text-sm">Take the Attachment Style Quiz</Link>
              <Link href="/attachment-style-test-for-couples" className="btn-primary text-sm">Couples Attachment Test</Link>
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
              <Link href="/attachment-style-quiz" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Attachment Style Quiz</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Identify your attachment pattern</p>
              </Link>
              <Link href="/attachment-style-test-for-couples" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Couples Attachment Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Explore attachment dynamics in your relationship</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/how-to-find-a-therapist" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Find a Therapist</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">A practical step-by-step guide to finding the right fit</p>
              </Link>
              <Link href="/blog/depression-vs-anxiety" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression vs. Anxiety: What&apos;s the Difference?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding how depression and anxiety overlap and differ</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
