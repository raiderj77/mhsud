import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/family-impact-addiction-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "family-impact-addiction-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/family-impact-addiction-guide",
  title: "How Addiction Affects Families: Understanding the Ripple Effects",
  description:
    "Addiction affects every family member. Learn about family roles, codependency patterns, impact on children, and how families can begin their own recovery process.",
  keywords: [
    "how addiction affects families",
    "family impact of addiction",
    "codependency addiction",
    "family roles in addiction",
    "family recovery",
    "addiction family assessment",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What are the family roles in addiction?",
    answer:
      "Claudia Black and Sharon Wegscheider-Cruse identified four primary roles that family members adopt in response to addiction: the Hero (overachiever who tries to make the family look normal), the Scapegoat (acts out to draw attention away from the real problem), the Lost Child (withdraws and becomes invisible to avoid conflict), and the Mascot (uses humor to deflect tension). These roles develop unconsciously as survival strategies and often persist into adulthood, affecting relationships and self-identity long after the addiction is addressed.",
  },
  {
    question: "Is codependency a real condition?",
    answer:
      "Codependency is not a formal clinical diagnosis in the DSM-5, but it describes a well-recognized pattern of behavior where a person prioritizes another\u2019s needs at the expense of their own, often in the context of a relationship with someone who has a substance use problem. Codependency involves difficulty setting boundaries, people-pleasing, low self-worth tied to caretaking, and enabling behaviors. While the term has been debated in clinical circles, the patterns it describes are real and can cause significant emotional harm. Therapy, particularly with a counselor experienced in family systems, can help.",
  },
  {
    question: "How can families support recovery without enabling?",
    answer:
      "The line between support and enabling can be difficult to navigate. Support means encouraging recovery efforts, maintaining healthy boundaries, attending your own therapy or support groups, and allowing natural consequences for substance use. Enabling means shielding someone from the consequences of their use \u2014 making excuses, covering financially, minimizing the problem, or avoiding difficult conversations. The key distinction is whether your actions help the person face reality or help them avoid it. Programs like Al-Anon and Nar-Anon help families learn this balance through shared experience.",
  },
  {
    question: "Should families go to therapy too?",
    answer:
      "Yes. Family therapy is strongly recommended as part of a comprehensive recovery approach. Addiction disrupts family systems in ways that do not automatically resolve when the person stops using. Unresolved resentment, broken trust, dysfunctional communication patterns, and codependency require their own healing process. Family therapy modalities like Behavioral Couples Therapy and the Community Reinforcement and Family Training (CRAFT) approach have strong research support. Individual therapy for affected family members is also valuable, especially for processing grief, anger, and trauma.",
  },
];

export default function FamilyImpactAddictionGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "How Addiction Affects Families: Understanding the Ripple Effects", description: "Addiction affects every family member. Learn about family roles, codependency, impact on children, and paths to family recovery.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Family Impact of Addiction Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Family Support</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How Addiction Affects Families: Understanding the Ripple Effects
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Addiction is often called a family disease, and for good reason. When one person struggles with substance use, the effects ripple outward to touch every family member &mdash; spouses, parents, children, and siblings. Relationships shift, roles change, trust erodes, and the emotional toll can be devastating. Understanding these ripple effects is the first step toward healing &mdash; not just for the person using, but for the entire family system. The <Link href="/family-impact-assessment" className="text-sage-600 dark:text-sage-400 underline">family impact assessment</Link> helps families see how they have been affected.
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
            <h2>Family roles in addiction: how the system adapts</h2>
            <p>
              Claudia Black&apos;s groundbreaking research on families affected by addiction identified a pattern that repeats across cultures and demographics: family members unconsciously adopt specific roles to maintain stability in a chaotic environment. Sharon Wegscheider-Cruse further developed this framework into four primary roles:
            </p>
            <ul>
              <li><strong>The Hero:</strong> Often the oldest child, the hero overachieves to compensate for the family&apos;s dysfunction. They maintain high grades, excel at work, and present a &quot;normal&quot; face to the outside world. Internally, they carry enormous pressure and often struggle with perfectionism and anxiety into adulthood.</li>
              <li><strong>The Scapegoat:</strong> This family member acts out &mdash; getting in trouble at school, displaying defiance, or engaging in risky behavior. The scapegoat draws attention away from the addiction and toward themselves, which paradoxically protects the family from confronting the real problem.</li>
              <li><strong>The Lost Child:</strong> The lost child copes by disappearing. They withdraw into their room, avoid family conflict, and become as invisible as possible. While this strategy reduces their exposure to chaos, it also leads to chronic loneliness, difficulty forming relationships, and a deep sense of being overlooked.</li>
              <li><strong>The Mascot:</strong> Often the youngest child, the mascot uses humor and charm to defuse tension. They become the &quot;class clown&quot; &mdash; entertaining the family to distract from the pain. Beneath the humor, they often carry unprocessed anxiety and fear.</li>
            </ul>
            <p>
              These roles are survival strategies, not character flaws. They develop because the family needs them to function. But they persist long after they are needed and can create problems in adult relationships, work, and self-identity.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Codependency: when helping becomes harmful</h2>
            <p>
              Codependency describes a pattern where a family member &mdash; most often a spouse or parent &mdash; becomes so focused on the person with the addiction that they lose sight of their own needs, identity, and well-being. Common codependency patterns include:
            </p>
            <ul>
              <li><strong>Enabling:</strong> Making excuses for the person&apos;s behavior, covering up consequences, paying bills or bailing them out, calling in sick for them, or minimizing the severity of the problem.</li>
              <li><strong>Caretaking at personal expense:</strong> Neglecting your own health, relationships, career, and emotional needs to manage the crisis of another person&apos;s addiction.</li>
              <li><strong>People-pleasing:</strong> Avoiding conflict at all costs, saying yes when you mean no, and suppressing your own feelings to keep the peace.</li>
              <li><strong>Control:</strong> Attempting to manage the person&apos;s substance use through monitoring, restricting access, or issuing ultimatums &mdash; strategies that rarely work and often escalate conflict.</li>
              <li><strong>Low self-worth tied to caretaking:</strong> Deriving your sense of purpose and identity from being needed, which creates a painful dynamic where the addiction&apos;s continuation serves your emotional needs as well.</li>
            </ul>
            <p>
              Codependency is not a formal clinical diagnosis, but the patterns it describes are real and can cause significant harm. Breaking these patterns typically requires professional support and community &mdash; programs like Al-Anon and CoDA (Co-Dependents Anonymous) provide both.
            </p>
          </section>

          <section>
            <h2>How addiction impacts children</h2>
            <p>
              Children who grow up in homes affected by addiction face unique challenges that can have lasting effects into adulthood. The Adverse Childhood Experiences (ACE) study established a clear connection between household substance use and negative outcomes across the lifespan:
            </p>
            <ul>
              <li><strong>Emotional instability:</strong> Children experience unpredictable emotional environments &mdash; a parent who is loving one moment and absent or volatile the next. This unpredictability undermines the sense of safety that children need to develop secure attachment.</li>
              <li><strong>Parentification:</strong> Children may take on adult responsibilities &mdash; caring for younger siblings, managing household tasks, or emotionally supporting a non-using parent. This premature responsibility robs them of their childhood and creates patterns of caretaking that persist into adulthood.</li>
              <li><strong>Secrecy and shame:</strong> Families affected by addiction often operate under an unspoken rule: &quot;Don&apos;t talk about it.&quot; Children learn to keep secrets, which breeds shame and makes it difficult to seek help or form trusting relationships.</li>
              <li><strong>Increased risk:</strong> Children of parents with substance use disorders are statistically more likely to develop substance use problems themselves &mdash; not because of a single &quot;addiction gene,&quot; but because of a combination of genetic predisposition, learned behavior, and environmental stress.</li>
            </ul>
            <p>
              The <Link href="/ace-questionnaire" className="text-sage-600 dark:text-sage-400 underline">ACE questionnaire</Link> helps adults understand how childhood experiences may be affecting their current health and well-being.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Financial, emotional, and relational damage</h2>
            <p>
              The impact of addiction on families extends beyond emotional pain. It creates tangible, measurable damage across multiple dimensions:
            </p>
            <ul>
              <li><strong>Financial strain:</strong> Money spent on substances, lost income from job instability, legal costs, medical bills, and the financial consequences of impaired decision-making can devastate a family&apos;s economic stability.</li>
              <li><strong>Erosion of trust:</strong> Repeated broken promises, lying about use, and unpredictable behavior destroy the trust that relationships require. Rebuilding trust is often one of the longest and most difficult aspects of family recovery.</li>
              <li><strong>Communication breakdown:</strong> Families affected by addiction often develop dysfunctional communication patterns &mdash; avoidance, blame, manipulation, and conflict &mdash; that persist even after the substance use stops.</li>
              <li><strong>Mental health impact:</strong> Family members frequently develop their own mental health challenges in response to the stress of living with addiction, including anxiety, depression, and trauma symptoms. The <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression screener</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 anxiety screener</Link> can help family members assess their own mental health needs.</li>
            </ul>
          </section>

          <section>
            <h2>Boundaries vs. enabling: finding the line</h2>
            <p>
              One of the most difficult challenges for families is distinguishing between supporting their loved one&apos;s recovery and enabling continued substance use. The difference comes down to consequences:
            </p>
            <ul>
              <li><strong>Support</strong> means encouraging recovery efforts while allowing the person to experience the natural consequences of their choices. It includes attending your own therapy, setting clear boundaries, expressing love without rescuing, and taking care of your own well-being.</li>
              <li><strong>Enabling</strong> means shielding the person from the consequences of their use &mdash; making excuses, covering financially, minimizing the problem, or avoiding difficult conversations. Enabling is usually motivated by love and fear, but it removes the natural feedback that can motivate change.</li>
            </ul>
            <p>
              Setting boundaries is not about punishment or control. It is about defining what you are and are not willing to accept, and then following through consistently. Boundaries protect your well-being and create clarity for everyone involved. The <Link href="/family-impact-assessment" className="text-sage-600 dark:text-sage-400 underline">family impact assessment</Link> can help you see how your family system has been affected and where boundary work may be needed.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Family recovery is possible</h2>
            <p>
              The damage that addiction causes to families is real, but it is not permanent. Family recovery is a process &mdash; one that often runs parallel to but is distinct from the individual&apos;s recovery. Families have their own healing to do, regardless of whether the person with the addiction is in recovery or not.
            </p>
            <p>
              Resources for family recovery include:
            </p>
            <ul>
              <li><strong>Al-Anon and Nar-Anon:</strong> Free mutual support groups for family members and friends of people with substance use problems. These groups provide community, shared experience, and practical tools for coping and healing.</li>
              <li><strong>Family therapy:</strong> Modalities like the Community Reinforcement and Family Training (CRAFT) approach, Behavioral Couples Therapy, and Multidimensional Family Therapy have strong research support. Family therapy addresses the systemic issues that individual therapy cannot.</li>
              <li><strong>Individual therapy for family members:</strong> Processing your own grief, anger, trauma, and codependency patterns with a qualified therapist is essential. Your healing is not dependent on the other person&apos;s recovery.</li>
              <li><strong>Education:</strong> Understanding addiction as a chronic condition &mdash; not a moral failing &mdash; changes how families respond to it. Knowledge reduces shame and increases compassion, both of which support healthier family dynamics.</li>
            </ul>
            <p>
              The <Link href="/family-impact-assessment" className="text-sage-600 dark:text-sage-400 underline">family impact assessment tool</Link> provides a starting point for understanding how your family has been affected and what areas might benefit from attention and support.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Assess how addiction has affected your family</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The family impact assessment helps you see the ripple effects and identify areas for healing. Free, private, and anonymous.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/family-impact-assessment" className="btn-primary text-sm">Take the Family Impact Assessment</Link>
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Check Your Own Mental Health</Link>
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
              <Link href="/family-impact-assessment" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Family Impact Assessment</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand how addiction has affected your family</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Screener</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for depression symptoms with a validated tool</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Screener</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for anxiety symptoms with a validated tool</p>
              </Link>
              <Link href="/ace-questionnaire" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Questionnaire</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Adverse childhood experiences screening</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/helping-family-member-addiction" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Help a Family Member with Addiction</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Practical guidance on boundaries, enabling, and support</p>
              </Link>
              <Link href="/blog/ace-score-meaning" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Scores and Your Health</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How childhood experiences affect adult well-being</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
