import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/helping-family-member-addiction`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "helping-family-member-addiction")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/helping-family-member-addiction",
  title: "How to Help a Family Member with Addiction",
  description:
    "Practical guidance for families dealing with a loved one's addiction. Learn about boundaries, enabling, self-care, and support resources.",
  keywords: [
    "how to help an addict", "helping a family member with addiction", "enabling vs helping",
    "family addiction support", "codependency addiction", "setting boundaries addiction",
    "Al-Anon", "Nar-Anon", "family impact of addiction", "loved one substance abuse",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can I force someone to go to rehab?",
    answer: "In most cases, no. Involuntary commitment laws vary by state, and even where they exist, they are used only in extreme circumstances involving immediate danger. Forced treatment also tends to be less effective than treatment a person enters voluntarily. What you can do is set clear boundaries, express your concern, provide information about treatment options, and let your loved one know you will support them when they are ready. Sometimes the natural consequences of substance use — not being shielded from them — are what eventually motivate a person to seek help.",
  },
  {
    question: "Am I enabling my loved one?",
    answer: "Enabling means doing things that protect your loved one from the natural consequences of their substance use. Common examples include making excuses for their behavior, covering their financial obligations, calling in sick to work on their behalf, or minimizing the severity of the problem. If you find yourself repeatedly rescuing your loved one from situations caused by their use, you may be enabling. This does not mean you are a bad person — enabling usually comes from love and a desire to help. But recognizing the pattern is an important first step toward changing it.",
  },
  {
    question: "What is codependency?",
    answer: "Codependency is a pattern of behavior in which a person becomes excessively focused on a loved one&apos;s needs, problems, or well-being at the expense of their own. In families affected by addiction, codependency often develops as a coping mechanism. A codependent person may feel responsible for their loved one&apos;s emotions, cover up their behavior, suppress their own needs, or derive their sense of self-worth from being needed. Codependency is not a clinical diagnosis, but it describes a real and common pattern that can be addressed through therapy, support groups like Al-Anon or Nar-Anon, and self-education.",
  },
  {
    question: "Should I go to Al-Anon?",
    answer: "Al-Anon is designed for anyone whose life has been affected by someone else&apos;s drinking. You do not need a referral, and meetings are free. Many family members find that Al-Anon helps them understand their own patterns, set healthier boundaries, and connect with others who share similar experiences. You do not have to wait until things are &quot;bad enough&quot; to attend. If your loved one&apos;s alcohol use is causing you stress, worry, or conflict, Al-Anon may be a helpful resource. Nar-Anon offers similar support for families affected by drug use. You can reach Al-Anon at 1-888-425-2666 or visit al-anon.org.",
  },
  {
    question: "What if they don't want help?",
    answer: "It is common for people struggling with addiction to resist help, especially in the early stages. This does not mean the situation is hopeless. You cannot force sobriety, but you can take steps that may influence the process over time: set and maintain clear boundaries, stop enabling behaviors, express your concern honestly and without judgment, take care of your own mental health, and let your loved one know that support is available when they are ready. Many people eventually seek help after experiencing natural consequences and seeing that their loved ones are serious about boundaries. In the meantime, focusing on your own well-being is not selfish — it is essential.",
  },
];

export default function HelpingFamilyMemberAddictionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "How to Help a Family Member with Addiction", description: "Practical guidance for families dealing with a loved one's addiction. Learn about boundaries, enabling, self-care, and support resources.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Helping a Family Member with Addiction", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Family Support</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How to Help a Family Member with Addiction
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Watching someone you love struggle with addiction is one of the most painful experiences a family can face. You want to help, but you may not know how — or whether the things you are doing are actually making things worse. This guide offers practical, evidence-based guidance for families navigating this difficult situation.
          </p>
          <div className="mt-6">
            <Link href="/family-impact-assessment" className="btn-primary text-sm">Take the Family Impact Assessment &rarr;</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Understanding Addiction as a Chronic Brain Condition</h2>
            <p>
              One of the most important things a family can understand is that addiction is not a moral failing. It is a chronic condition that affects the brain&apos;s reward system, decision-making, and impulse control. The National Institute on Drug Abuse and <a href="https://www.samhsa.gov/families" target="_blank" rel="noopener noreferrer">SAMHSA</a> both classify substance use disorders as treatable medical conditions — not character defects.
            </p>
            <p>
              This distinction matters because it changes how you respond. If you view addiction as a choice, you are more likely to use shame, anger, or punishment — approaches that research consistently shows are ineffective and often counterproductive. If you understand addiction as a condition that alters brain chemistry and behavior, you can approach your loved one with compassion while still holding firm boundaries.
            </p>
            <p>
              Addiction often develops through a combination of genetic vulnerability, environmental factors, trauma, and mental health conditions. Your loved one did not choose to become addicted any more than someone chooses to develop diabetes. But like diabetes, addiction requires ongoing management — and the person living with it must ultimately be the one to engage in their own recovery.
            </p>
          </section>

          <section>
            <h2>Recognizing the Signs</h2>
            <p>
              Families often sense that something is wrong before they can name it. Common signs that a loved one may be struggling with substance use include changes in behavior, mood, or appearance; withdrawal from family activities; financial problems; secrecy; missed work or school; and changes in social circles. You may notice that they become defensive or angry when the topic comes up.
            </p>
            <p>
              It is important to note that these signs may indicate substance use concerns, but they are not a diagnosis. Many of these behaviors can also be related to depression, anxiety, or other conditions. If you are unsure, a screening tool like the <Link href="/cage-aid-substance-abuse-screening">CAGE-AID Substance Abuse Screening</Link> can help you better understand what you are observing. The key is to pay attention to patterns rather than isolated incidents.
            </p>
          </section>

          <section>
            <h2>The Difference Between Helping and Enabling</h2>
            <p>
              This is one of the most critical distinctions for families to understand. Helping means doing something for someone that they genuinely cannot do for themselves. Enabling means doing something for someone that they could and should do for themselves — effectively shielding them from the consequences of their substance use.
            </p>
            <p>
              The line between helping and enabling can be blurry, especially when you love someone. Most enabling comes from a place of genuine care. But enabling keeps the cycle of addiction going by removing the natural consequences that might otherwise motivate change.
            </p>

            <h3>What Enabling Looks Like</h3>
            <p>
              Enabling takes many forms, and it often feels like the right thing to do in the moment. Common examples include:
            </p>
            <ul>
              <li><strong>Making excuses</strong> — calling their employer to say they are sick when they are actually hung over or using, or explaining away their behavior to other family members.</li>
              <li><strong>Bailing them out</strong> — paying their rent, covering legal fees, or handling responsibilities they have neglected because of their use.</li>
              <li><strong>Avoiding the topic</strong> — not bringing up concerns about their substance use because you fear conflict or do not want to &quot;rock the boat.&quot;</li>
              <li><strong>Giving money</strong> — providing cash that you suspect may be used to buy substances, or continuing to financially support a lifestyle that revolves around use.</li>
              <li><strong>Minimizing the problem</strong> — telling yourself or others that it is not that bad, that they are just going through a phase, or that everyone drinks or uses that much.</li>
            </ul>
            <p>
              Recognizing enabling patterns in yourself is not about blame — it is about awareness. Once you see the pattern, you can begin to make different choices.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Setting Boundaries with Compassion</h2>
            <p>
              Boundaries are not about punishing your loved one. They are about defining what you will and will not accept in your own life. A boundary is something you set for yourself — not something you impose on someone else. For example, &quot;I will not lend you money&quot; is a boundary. &quot;You need to stop drinking&quot; is a demand.
            </p>
            <p>
              Effective boundaries are clear, consistent, and communicated with care. They might sound like: &quot;I love you, and I will not have alcohol in our home.&quot; Or: &quot;I care about you deeply, and I am not willing to cover your rent when you spend your paycheck on substances.&quot; The key is to follow through. A boundary you do not enforce is not a boundary — it is a suggestion.
            </p>
            <p>
              Setting boundaries often feels uncomfortable, especially if you are used to accommodating your loved one&apos;s behavior. You may feel guilty, selfish, or afraid that they will be angry. These feelings are normal. Boundaries are an act of love — both for your loved one and for yourself.
            </p>
          </section>

          <section>
            <h2>How to Have the Conversation</h2>
            <p>
              Talking to a loved one about their substance use is one of the hardest conversations you may ever have. How you approach it can make a significant difference in how it is received.
            </p>
            <ul>
              <li><strong>Choose the right time.</strong> Do not bring it up when your loved one is intoxicated, in withdrawal, or in the middle of a crisis. Find a calm, private moment when you are both relatively clear-headed.</li>
              <li><strong>Use &quot;I&quot; statements.</strong> Instead of &quot;You always...&quot; or &quot;You never...&quot;, try &quot;I feel worried when...&quot; or &quot;I&apos;ve noticed that...&quot; This reduces defensiveness and keeps the focus on your experience.</li>
              <li><strong>Express concern, not judgment.</strong> Lead with love. &quot;I&apos;m bringing this up because I care about you&quot; lands very differently than &quot;You have a problem and you need to fix it.&quot;</li>
              <li><strong>Avoid ultimatums you will not follow through on.</strong> Threatening consequences you are not prepared to enforce undermines your credibility and teaches your loved one that your words do not carry weight.</li>
              <li><strong>Be prepared for resistance.</strong> Your loved one may deny, deflect, or become angry. This does not mean the conversation failed. Planting a seed of awareness can have effects that show up weeks or months later.</li>
            </ul>
          </section>

          <section>
            <h2>What NOT to Do</h2>
            <p>
              Even with the best intentions, certain approaches tend to make things worse rather than better:
            </p>
            <ul>
              <li><strong>Do not argue when they are intoxicated.</strong> A person under the influence cannot process information, regulate emotions, or make rational decisions. Save the conversation for when they are sober.</li>
              <li><strong>Do not take it personally.</strong> Addiction changes how the brain works. The hurtful things your loved one says or does while in active addiction are driven by the condition, not by how they feel about you.</li>
              <li><strong>Do not try to control their recovery.</strong> You cannot manage their sobriety for them. Recovery must be something they engage in for themselves. Your role is to support, not to direct.</li>
              <li><strong>Do not use guilt or shame.</strong> Statements like &quot;Look what you&apos;re doing to this family&quot; may feel justified, but shame is one of the biggest barriers to seeking help.</li>
            </ul>
          </section>

          <section>
            <h2>Understanding You Cannot Force Sobriety</h2>
            <p>
              This may be the hardest truth for families to accept: you cannot make someone stop using. No amount of love, logic, pleading, or consequences can force another person to change if they are not ready. The stages of change model shows that readiness develops over time, and pushing too hard can actually delay the process.
            </p>
            <p>
              What you can control is your own behavior. You can stop enabling. You can set boundaries. You can take care of your own health. You can educate yourself. And you can make it clear that when your loved one is ready to seek help, you will be there to support them.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Taking Care of Yourself First</h2>
            <p>
              Living with a loved one&apos;s addiction takes an enormous toll on your own mental and physical health. Anxiety, depression, sleep problems, relationship strain, and emotional exhaustion are all common among family members. You cannot pour from an empty cup — taking care of yourself is not selfish, it is necessary.
            </p>
            <p>
              Support resources for family members include:
            </p>
            <ul>
              <li><strong><a href="https://al-anon.org" target="_blank" rel="noopener noreferrer">Al-Anon</a></strong> — support groups for families and friends of people with alcohol problems. Call <strong>1-888-425-2666</strong> or visit al-anon.org.</li>
              <li><strong><a href="https://www.nar-anon.org" target="_blank" rel="noopener noreferrer">Nar-Anon</a></strong> — support groups for families and friends of people affected by drug use. Call <strong>1-800-477-6291</strong> or visit nar-anon.org.</li>
              <li><strong>Individual therapy</strong> — working with a therapist who specializes in family systems or codependency can help you process your emotions and develop healthier patterns.</li>
              <li><strong>Support groups</strong> — both in-person and online groups provide connection with others who understand what you are going through.</li>
            </ul>
            <p>
              You deserve support just as much as your loved one does. Seeking help for yourself is one of the most powerful things you can do — both for your own well-being and for the health of your family system.
            </p>
          </section>

          <section>
            <h2>The Family Impact Assessment Tool</h2>
            <p>
              Our <Link href="/family-impact-assessment">Family Impact Assessment</Link> is a free, private screening designed to help you understand how a loved one&apos;s substance use may be affecting your family. It is not a diagnosis — it is a starting point for reflection. The screening looks at areas like emotional well-being, relationship quality, financial stress, and daily functioning.
            </p>
            <p>
              All responses are processed in your browser and never stored or transmitted. The results may indicate areas where additional support could be helpful, and they can serve as a conversation starter with a therapist or counselor.
            </p>
          </section>

          <section>
            <h2>When Professional Intervention Is Needed</h2>
            <p>
              Sometimes the situation requires professional help beyond what a family can provide on its own. Consider reaching out to a professional interventionist, addiction counselor, or treatment facility if your loved one&apos;s substance use is escalating, they are in physical danger, they have co-occurring mental health conditions, or previous conversations have not led to change.
            </p>
            <p>
              A professional interventionist can help the family plan and carry out a structured conversation that maximizes the chance of your loved one accepting help. This is different from the confrontational interventions sometimes shown on television — modern, evidence-based interventions are grounded in compassion and preparation.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Resources for Families</h2>
            <p>
              You do not have to navigate this alone. The following resources provide free, confidential support for families affected by addiction:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { name: "SAMHSA National Helpline", detail: "1-800-662-4357 — Free, confidential, 24/7 information and referrals", url: "https://www.samhsa.gov/find-help/national-helpline" },
                { name: "988 Suicide & Crisis Lifeline", detail: "Call or text 988 — 24/7 crisis support", url: "https://988lifeline.org" },
                { name: "Al-Anon Family Groups", detail: "1-888-425-2666 — Support for families affected by alcohol", url: "https://al-anon.org" },
                { name: "Nar-Anon Family Groups", detail: "1-800-477-6291 — Support for families affected by drug use", url: "https://www.nar-anon.org" },
                { name: "SAMHSA Family Resources", detail: "Guides, toolkits, and information for families", url: "https://www.samhsa.gov/families" },
              ].map((r) => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 card hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <div>
                    <span className="text-sm font-semibold text-sage-600 dark:text-sage-400">{r.name}</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{r.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="card p-5 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose text-sm text-neutral-600 dark:text-neutral-400">
            <p className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p>This article is for educational purposes only. It is not a diagnosis or treatment recommendation. The information provided is intended to help families understand addiction and find support — it is not a substitute for professional evaluation or counseling.</p>
            <p className="mt-2">If you or someone you know is struggling with substance use, call SAMHSA&apos;s National Helpline: <strong>1-800-662-4357</strong> (free, confidential, 24/7). If you are in crisis, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline). For family support, contact <strong>Al-Anon: 1-888-425-2666</strong> or <strong>Nar-Anon: 1-800-477-6291</strong>.</p>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">How is your family being affected?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Our free Family Impact Assessment can help you understand the ways a loved one&apos;s substance use may be affecting your family. Private, takes about 5 minutes. Your answers never leave your browser.</p>
            <Link href="/family-impact-assessment" className="btn-primary text-sm">Take the Family Impact Assessment</Link>
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
              <Link href="/family-impact-assessment" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Family Impact Assessment</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand how a loved one&apos;s substance use affects your family</p>
              </Link>
              <Link href="/cage-aid-substance-abuse-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Substance Abuse Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick screening for substance use concerns</p>
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Stages of Change in Addiction Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand the 5 stages of change model for recovery</p>
              </Link>
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build a practical plan for maintaining recovery</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
