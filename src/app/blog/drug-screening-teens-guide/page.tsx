import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/drug-screening-teens-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "drug-screening-teens-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/drug-screening-teens-guide",
  title: "Substance Use Screening for Teens: What Parents and Adolescents Should Know",
  description:
    "About 15% of high school students report illicit drug use. Learn about the CRAFFT screening, common teen substances, risk factors, and how to start a conversation.",
  keywords: [
    "teen drug screening",
    "teen substance use",
    "CRAFFT screening",
    "signs of drug use in teens",
    "teen drug test",
    "adolescent substance use screening",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is the CRAFFT screening?",
    answer:
      "The CRAFFT is a validated substance use screening tool designed specifically for adolescents aged 12\u201321. The name is an acronym for six key questions about Car, Relax, Alone, Forget, Friends, and Trouble \u2014 all related to substance use patterns and consequences. A score of 2 or higher suggests a pattern that warrants further conversation with a healthcare provider. It is widely used in pediatric and adolescent medicine and is recommended by the American Academy of Pediatrics.",
  },
  {
    question: "How common is teen substance use?",
    answer:
      "According to the CDC\u2019s Youth Risk Behavior Surveillance System (YRBSS), approximately 15% of high school students report using illicit drugs. Cannabis is the most commonly used substance after alcohol. Vaping and nicotine use have surged in recent years. The Monitoring the Future survey shows that while some substance use has declined, fentanyl contamination has made experimentation significantly more dangerous than in previous generations.",
  },
  {
    question: "What should I do if the screening suggests a problem?",
    answer:
      "A positive screening does not mean your teen has a substance use disorder \u2014 it means there is a pattern worth exploring further. Start with a calm, non-judgmental conversation. Express concern, not anger. Contact your teen\u2019s pediatrician for a professional evaluation. If substance use is confirmed, treatment options range from outpatient counseling to intensive programs depending on severity. The SAMHSA helpline (1-800-662-4357) provides free referrals 24/7. Early intervention dramatically improves outcomes.",
  },
  {
    question: "How do I talk to my teenager about drug use?",
    answer:
      "Use a motivational interviewing approach: ask open-ended questions, listen without judgment, and express curiosity rather than accusations. Avoid lecturing, which shuts down communication. Start with \u201cI\u2019ve noticed...\u201d or \u201cI\u2019m curious about...\u201d rather than \u201cAre you using drugs?\u201d Share factual information about risks without exaggeration (teens can spot dishonesty). Take a screening together to create a structured, less confrontational way to discuss patterns. Make it clear that your goal is safety, not punishment.",
  },
];

export default function DrugScreeningTeensGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Substance Use Screening for Teens: What Parents and Adolescents Should Know", description: "About 15% of high school students report illicit drug use. Learn about the CRAFFT screening, common teen substances, and how to start a conversation.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Teen Substance Use Screening", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Substance Use Screening for Teens: What Parents and Adolescents Should Know
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Approximately 15% of high school students report using illicit drugs, according to the CDC&apos;s Youth Risk Behavior Surveillance System. But substance use screening for adolescents is not about catching or punishing &mdash; it is about opening a conversation. The adolescent brain is uniquely vulnerable to the effects of substances because the prefrontal cortex, responsible for judgment and impulse control, does not fully develop until around age 25. Early identification through screening can change the trajectory of a young person&apos;s life.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you or your teen are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
            </p>
          </div>

          <section>
            <h2>Why adolescent substance use screening matters</h2>
            <p>
              The adolescent brain is still under construction. The prefrontal cortex &mdash; the region responsible for decision-making, impulse control, risk assessment, and long-term planning &mdash; does not fully mature until approximately age 25. Meanwhile, the brain&apos;s reward system is already fully active, creating a neurological setup that makes teens more likely to seek novel experiences and less able to evaluate consequences.
            </p>
            <p>
              This is not a character flaw. It is developmental neuroscience. And it has a direct implication: adolescents who use substances are significantly more vulnerable to developing substance use disorders later in life. Research from the National Institute on Drug Abuse (NIDA) shows that the earlier substance use begins, the greater the risk of developing addiction. A person who first uses substances at age 13 is far more likely to develop a substance use disorder than someone who begins at 21.
            </p>
            <p>
              Screening provides a structured, evidence-based way to identify patterns before they escalate. The goal is not to label or shame &mdash; it is to start a conversation that could prevent years of struggle.
            </p>
          </section>

          <section>
            <h2>What substances are teens using?</h2>
            <p>
              The substance landscape for today&apos;s teens has shifted significantly from previous generations:
            </p>
            <ul>
              <li><strong>Cannabis:</strong> The most commonly used illicit substance among adolescents. With legalization in many states, teens often perceive cannabis as low-risk. However, regular use during adolescence is associated with cognitive impairment, reduced academic performance, and increased risk of psychosis in genetically vulnerable individuals.</li>
              <li><strong>Alcohol:</strong> Still the most widely used substance overall. About 29% of high school students report drinking alcohol, and 14% report binge drinking (YRBSS). Adolescent binge drinking is associated with lasting effects on brain development.</li>
              <li><strong>Vaping and nicotine:</strong> E-cigarette use has surged among teens. Nicotine is highly addictive at any age, but adolescent brains are especially susceptible. Vaping can also serve as a gateway to other substance use.</li>
              <li><strong>Prescription drug misuse:</strong> Stimulants (Adderall, Ritalin), opioids, and benzodiazepines are misused by some teens &mdash; often obtained from family medicine cabinets or peers.</li>
              <li><strong>Fentanyl contamination:</strong> This is the most dangerous development in the current drug landscape. Counterfeit pills sold as Xanax, Percocet, or other medications increasingly contain fentanyl, a synthetic opioid that can be lethal in microscopic doses. Teens who think they are taking a prescription pill may unknowingly be taking fentanyl. This makes any experimentation with pills of unknown origin potentially fatal.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Risk factors for teen substance use</h2>
            <p>
              Substance use in adolescents is driven by a combination of biological, psychological, and environmental factors:
            </p>
            <ul>
              <li><strong>Family history:</strong> Genetic predisposition accounts for approximately 40&ndash;60% of addiction vulnerability. Having a parent or close relative with a substance use disorder significantly increases risk.</li>
              <li><strong>Trauma and adverse childhood experiences (ACEs):</strong> Teens with higher ACE scores are more likely to use substances as a coping mechanism for unresolved pain, anxiety, or emotional dysregulation.</li>
              <li><strong>Mental health co-occurrence:</strong> Depression, anxiety, ADHD, PTSD, and other mental health conditions frequently co-occur with substance use. Teens may self-medicate symptoms they do not have words for or access to treatment for.</li>
              <li><strong>Peer influence:</strong> Adolescents are highly attuned to social norms. If substance use is normalized in a teen&apos;s peer group, the pressure to participate is significant.</li>
              <li><strong>Lack of parental monitoring:</strong> Not overbearing control, but consistent awareness of where a teen is, who they are with, and what they are doing. Research consistently links appropriate parental monitoring with lower substance use rates.</li>
              <li><strong>Early onset:</strong> Using any substance before age 14 is one of the strongest predictors of developing a substance use disorder later in life.</li>
            </ul>
          </section>

          <section>
            <h2>How the CRAFFT screening works</h2>
            <p>
              The <Link href="/drug-screening-teens" className="text-sage-600 dark:text-sage-400 underline">CRAFFT screening on MindCheck Tools</Link> is based on the CRAFFT, a validated substance use screening tool designed specifically for adolescents aged 12&ndash;21. It is recommended by the American Academy of Pediatrics and is the most widely used adolescent substance use screening in clinical settings.
            </p>
            <p>
              CRAFFT stands for six key assessment areas:
            </p>
            <ul>
              <li><strong>C</strong> &mdash; Have you ever ridden in a <strong>Car</strong> driven by someone (including yourself) who was high or had been using alcohol or drugs?</li>
              <li><strong>R</strong> &mdash; Do you ever use alcohol or drugs to <strong>Relax</strong>, feel better about yourself, or fit in?</li>
              <li><strong>A</strong> &mdash; Do you ever use alcohol or drugs while you are by yourself, or <strong>Alone</strong>?</li>
              <li><strong>F</strong> &mdash; Do you ever <strong>Forget</strong> things you did while using alcohol or drugs?</li>
              <li><strong>F</strong> &mdash; Do your family or <strong>Friends</strong> ever tell you that you should cut down on your drinking or drug use?</li>
              <li><strong>T</strong> &mdash; Have you ever gotten into <strong>Trouble</strong> while you were using alcohol or drugs?</li>
            </ul>
            <p>
              A score of 2 or higher on the CRAFFT questions indicates patterns that may warrant further evaluation. The screening is free, takes a few minutes, runs entirely in the browser, and stores no data. You can take it together with your teen as a conversation starter, or a teen can take it privately.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How to talk to your teen about substance use</h2>
            <p>
              The most effective approach is rooted in motivational interviewing &mdash; a clinical communication style designed to elicit change from within rather than imposing it from outside. Here are practical applications for parents:
            </p>
            <ul>
              <li><strong>Ask, do not accuse.</strong> &quot;I&apos;ve noticed some changes lately, and I want to understand what&apos;s going on&quot; opens a door. &quot;Are you doing drugs?&quot; slams it shut.</li>
              <li><strong>Listen more than you talk.</strong> Your teen is more likely to share if they feel heard. Resist the urge to lecture immediately.</li>
              <li><strong>Be honest about risks without exaggerating.</strong> Teens can detect dishonesty. Overstating risks undermines your credibility. Share factual information &mdash; especially about fentanyl contamination, which is a genuinely novel danger their friends may not understand.</li>
              <li><strong>Separate the behavior from the person.</strong> &quot;I love you. I&apos;m concerned about this behavior&quot; is different from &quot;I&apos;m disappointed in you.&quot;</li>
              <li><strong>Use the <Link href="/drug-screening-teens" className="text-sage-600 dark:text-sage-400 underline">teen substance use screening</Link> as a tool.</strong> Taking a screening together removes the confrontational dynamic and creates a structured, less emotional way to explore patterns.</li>
              <li><strong>Make it clear: safety over punishment.</strong> If your teen knows that coming to you for help will result in support rather than punishment, they are far more likely to reach out when it matters most.</li>
            </ul>
          </section>

          <section>
            <h2>What to do if screening suggests a concern</h2>
            <p>
              A positive screening result does not mean your teen has a substance use disorder. It means there are patterns worth exploring with professional guidance. Here are concrete next steps:
            </p>
            <ul>
              <li><strong>Stay calm.</strong> Your reaction matters. Panic, anger, or overreaction will shut down communication.</li>
              <li><strong>Have a follow-up conversation.</strong> Ask your teen about their experience and what they think the results mean. Their perspective matters.</li>
              <li><strong>Contact your teen&apos;s pediatrician.</strong> Primary care providers routinely screen for substance use and can assess severity and recommend next steps.</li>
              <li><strong>Consider additional screenings.</strong> The <Link href="/crafft-substance-screening" className="text-sage-600 dark:text-sage-400 underline">CRAFFT screening</Link>, <Link href="/dast-10-drug-screening" className="text-sage-600 dark:text-sage-400 underline">DAST-10</Link>, and <Link href="/cage-aid-substance-abuse-screening" className="text-sage-600 dark:text-sage-400 underline">CAGE-AID</Link> provide different perspectives on substance use patterns.</li>
              <li><strong>Call SAMHSA.</strong> The SAMHSA National Helpline (1-800-662-4357) is free, confidential, and available 24/7. They provide referrals to local treatment programs and support groups.</li>
              <li><strong>Address underlying issues.</strong> Substance use often co-occurs with depression, anxiety, trauma, or other mental health conditions. Treating only the substance use without addressing underlying factors is less effective.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Screen for teen substance use patterns</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/drug-screening-teens" className="btn-primary text-sm">Take the Teen Drug Screening</Link>
              <Link href="/crafft-substance-screening" className="btn-primary text-sm">CRAFFT Screening</Link>
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
              <Link href="/drug-screening-teens" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Teen Drug Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Substance use screening for adolescents</p>
              </Link>
              <Link href="/crafft-substance-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CRAFFT Substance Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated adolescent substance use assessment</p>
              </Link>
              <Link href="/dast-10-drug-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Drug Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10-question drug abuse screening test</p>
              </Link>
              <Link href="/cage-aid-substance-abuse-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Substance abuse screening adapted for drugs</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-are-substance-use-disorders" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Are Substance Use Disorders?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Signs, diagnosis, and treatment options</p>
              </Link>
              <Link href="/blog/dast-10-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Scoring Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding DAST-10 scores and interpretation</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
