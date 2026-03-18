import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/depression-teens-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "depression-teens-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/depression-teens-guide",
  title: "Depression in Teenagers: Signs Parents Should Know",
  description:
    "About 20% of teens experience depression before adulthood. Learn the warning signs, how teen depression differs from adult depression, risk factors, and how a free screening can help.",
  keywords: [
    "teen depression",
    "depression in teenagers",
    "signs of depression in teens",
    "teenage depression symptoms",
    "depression test for teens",
    "adolescent depression",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How common is depression in teenagers?",
    answer:
      "According to the National Institute of Mental Health (NIMH), approximately 20% of adolescents experience a major depressive episode before reaching adulthood. In 2022, an estimated 3.7 million adolescents aged 12\u201317 had at least one major depressive episode. Rates are higher among girls and LGBTQ+ youth. Depression is one of the leading causes of disability among adolescents worldwide.",
  },
  {
    question: "How is teen depression different from adult depression?",
    answer:
      "Teen depression often presents differently than adult depression. While adults typically show sadness and low energy, teens are more likely to display irritability, anger, and hostility. Teens may also show academic decline, social withdrawal from peers, increased risk-taking behavior, and physical complaints like headaches or stomachaches. These differences can make teen depression harder to recognize.",
  },
  {
    question: "Is my teenager depressed or just moody?",
    answer:
      "Normal teen moodiness is temporary and situation-specific \u2014 a bad day, a fight with a friend, or hormone fluctuations. Depression persists for two weeks or more and affects multiple areas of functioning: school, friendships, family relationships, sleep, and appetite. Key red flags include withdrawal from activities they used to enjoy, persistent irritability or sadness, changes in sleep or appetite, and declining grades. A screening tool can help you identify patterns worth discussing with a provider.",
  },
  {
    question: "What should I do if my teenager seems depressed?",
    answer:
      "Start by having an open, non-judgmental conversation. Express concern without accusations. Listen more than you talk. Take a free depression screening together to create a shared starting point. Contact your teen\u2019s pediatrician or a mental health professional for evaluation. If your teen expresses thoughts of self-harm or suicide, take it seriously \u2014 call 988 (Suicide & Crisis Lifeline) or go to the nearest emergency room. Early intervention significantly improves outcomes.",
  },
];

export default function DepressionTeensGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Depression in Teenagers: Signs Parents Should Know", description: "About 20% of teens experience depression before adulthood. Learn the warning signs, how teen depression differs from adult depression, and how screening can help.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Depression in Teenagers", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Depression in Teenagers: Signs Parents Should Know
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            About 20% of teenagers experience a major depressive episode before reaching adulthood, according to the National Institute of Mental Health. But teen depression rarely looks the way most parents expect. It is less likely to appear as sadness and more likely to show up as irritability, academic decline, social withdrawal, or risky behavior. Understanding what depression looks like in adolescents is the first step toward getting your teen the support they need.
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
            <h2>Why teen depression is so often missed</h2>
            <p>
              When most people picture depression, they imagine someone who is visibly sad, tearful, and withdrawn. While that can happen in teenagers, depression in adolescents more commonly presents as:
            </p>
            <ul>
              <li><strong>Irritability and anger:</strong> Instead of sadness, teens often become hostile, argumentative, or easily frustrated. This is one of the most consistent differences between adolescent and adult depression.</li>
              <li><strong>Academic decline:</strong> A sudden drop in grades, loss of interest in schoolwork, or increased absences can signal depression rather than laziness or defiance.</li>
              <li><strong>Social withdrawal from peers:</strong> Pulling away from friends &mdash; not just family &mdash; is a significant red flag. Teens are developmentally wired to connect with peers, so isolating from them suggests something deeper.</li>
              <li><strong>Sleep changes:</strong> Sleeping far more than usual (hypersomnia) or struggling with insomnia. While teenagers naturally shift toward later sleep schedules, dramatic changes in sleep patterns deserve attention.</li>
              <li><strong>Physical complaints:</strong> Frequent stomachaches, headaches, or other somatic symptoms without a clear medical cause are common in depressed teens.</li>
              <li><strong>Risky behavior:</strong> Reckless driving, substance use, unsafe sexual activity, or self-harm may represent a teen&apos;s attempt to cope with or escape from emotional pain.</li>
            </ul>
            <p>
              Because these symptoms can look like &quot;normal teenager behavior,&quot; parents, teachers, and even healthcare providers may dismiss them. The key distinction is <strong>duration</strong> and <strong>functional impairment</strong>. When irritability, withdrawal, or academic decline persists for two weeks or more and interferes with daily functioning, it warrants professional evaluation.
            </p>
          </section>

          <section>
            <h2>Risk factors for adolescent depression</h2>
            <p>
              Depression does not have a single cause. It results from an interaction of biological, psychological, and environmental factors. Research has identified several risk factors that increase the likelihood of teen depression:
            </p>
            <ul>
              <li><strong>Family history:</strong> Having a parent or sibling with depression increases a teen&apos;s risk two to three times. This reflects both genetic predisposition and environmental exposure.</li>
              <li><strong>Trauma and adverse childhood experiences (ACEs):</strong> Physical, emotional, or sexual abuse, neglect, household dysfunction, and community violence all increase depression risk substantially.</li>
              <li><strong>Bullying:</strong> Both in-person bullying and cyberbullying are strongly associated with depression, anxiety, and suicidal ideation in adolescents. Victims of bullying are 2&ndash;9 times more likely to consider suicide.</li>
              <li><strong>Social media and screen time:</strong> While the relationship is complex and still being studied, heavy social media use is associated with increased rates of depression and anxiety in teens, particularly among girls. Social comparison, cyberbullying, sleep disruption, and reduced in-person connection all play a role.</li>
              <li><strong>Identity development stress:</strong> Adolescence involves forming identity around gender, sexuality, values, and independence. Conflict or lack of support during this process increases vulnerability.</li>
              <li><strong>LGBTQ+ identity:</strong> LGBTQ+ youth are approximately three times more likely to experience depression than their heterosexual peers, primarily due to minority stress &mdash; stigma, discrimination, family rejection, and victimization. The depression itself is not caused by identity but by how that identity is received.</li>
              <li><strong>Chronic illness or disability:</strong> Managing an ongoing health condition during adolescence adds stress, social challenges, and identity concerns that elevate depression risk.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>The stakes are higher than most people realize</h2>
            <p>
              Suicide is the second leading cause of death among people aged 10&ndash;24 in the United States, according to the CDC. This is not a statistic meant to frighten &mdash; it is a reason to take teen depression seriously and act on warning signs rather than waiting to see if they pass.
            </p>
            <p>
              Warning signs that a teen may be thinking about suicide include:
            </p>
            <ul>
              <li>Talking about wanting to die, being a burden, or having no reason to live</li>
              <li>Giving away valued possessions</li>
              <li>Withdrawing from everyone &mdash; friends, family, activities</li>
              <li>Sudden calmness after a period of depression (may indicate a decision has been made)</li>
              <li>Increased substance use</li>
              <li>Searching online for methods of self-harm</li>
              <li>Previous suicide attempts (the strongest single predictor of future attempts)</li>
            </ul>
            <p>
              If you observe these signs, do not hesitate to ask directly: &quot;Are you thinking about hurting yourself?&quot; Research consistently shows that asking does not plant the idea &mdash; it opens a door. If the answer is yes, call 988, go to the nearest emergency room, or contact a crisis service immediately. You can also use the <Link href="/safety-plan" className="text-sage-600 dark:text-sage-400 underline">Safety Plan tool</Link> to create a structured crisis plan together.
            </p>
          </section>

          <section>
            <h2>How screening helps parents and teens</h2>
            <p>
              The <Link href="/depression-test-for-teens" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools depression screening for teens</Link> is a free, private self-assessment that helps identify patterns of depressive symptoms. It takes just a few minutes, runs entirely in the browser, and no data is stored or shared.
            </p>
            <p>
              A screening is not a substitute for professional evaluation. What it does is provide a structured starting point &mdash; a way to move beyond &quot;I think something might be wrong&quot; to &quot;here are the specific patterns I&apos;m noticing.&quot; You can take the screening together with your teen or have them take it privately and discuss the results afterward.
            </p>
            <p>
              If the screening suggests elevated symptoms, bring the results to your teen&apos;s pediatrician or a mental health professional. Having data to share makes the conversation easier and helps the provider understand the situation more quickly.
            </p>
            <p>
              The <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> is the most widely used depression screening tool in clinical settings and may also be helpful for older teens (16+) and parents who want to check in on their own mental health.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What parents can do right now</h2>
            <p>
              If you are reading this article, you are already doing something important: paying attention. Here are concrete steps you can take:
            </p>
            <ul>
              <li><strong>Start with a conversation, not a confrontation.</strong> Say &quot;I&apos;ve noticed you seem more stressed/irritable/withdrawn lately. I&apos;m not mad &mdash; I&apos;m concerned. Can we talk about it?&quot;</li>
              <li><strong>Listen more than you solve.</strong> Teens need to feel heard before they are ready for solutions. Resist the urge to immediately fix things.</li>
              <li><strong>Take a screening together.</strong> The <Link href="/depression-test-for-teens" className="text-sage-600 dark:text-sage-400 underline">teen depression screening</Link> can create a shared language for what your teen is experiencing.</li>
              <li><strong>Contact your teen&apos;s pediatrician.</strong> Describe the symptoms you have observed. Primary care providers screen for depression routinely and can refer to specialists.</li>
              <li><strong>Do not minimize or dismiss.</strong> Phrases like &quot;everyone goes through this&quot; or &quot;you have nothing to be depressed about&quot; shut down communication. Depression is not a choice or a phase.</li>
              <li><strong>Monitor, but respect privacy.</strong> Check in regularly without being invasive. Let your teen know you are available without demanding they share everything.</li>
              <li><strong>Take care of yourself.</strong> Parenting a teen who may be depressed is emotionally demanding. Your own well-being matters &mdash; both for your sake and for your ability to support your child.</li>
            </ul>
          </section>

          <section>
            <h2>Evidence-based approaches that help teens</h2>
            <p>
              If your teen is evaluated and a mental health professional identifies depressive symptoms, several evidence-based approaches have strong research support:
            </p>
            <ul>
              <li><strong>Cognitive-behavioral therapy (CBT):</strong> Helps teens identify and challenge negative thought patterns. CBT is one of the most well-studied and effective approaches for adolescent depression.</li>
              <li><strong>Interpersonal therapy for adolescents (IPT-A):</strong> Focuses on improving relationships and communication skills &mdash; areas central to adolescent development.</li>
              <li><strong>Family involvement:</strong> Depression affects the whole family. Family therapy or parent coaching can improve communication, reduce conflict, and create a more supportive home environment.</li>
              <li><strong>Medication:</strong> In moderate to severe cases, a provider may discuss SSRIs. These are most effective when combined with therapy rather than used alone.</li>
              <li><strong>Lifestyle factors:</strong> Regular physical activity, adequate sleep, social connection, and reduced social media use all support recovery alongside professional care.</li>
            </ul>
            <p>
              Early intervention makes a significant difference. The sooner depression is identified and addressed, the better the outcomes &mdash; both in the short term and for long-term mental health.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check in on your teen&apos;s mood</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/depression-test-for-teens" className="btn-primary text-sm">Take the Teen Depression Screening</Link>
              <Link href="/safety-plan" className="btn-primary text-sm">Create a Safety Plan</Link>
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
              <Link href="/depression-test-for-teens" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Teen Depression Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Depression screening designed for adolescents</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated depression screening for adults and older teens</p>
              </Link>
              <Link href="/safety-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Safety Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Create a structured crisis safety plan</p>
              </Link>
              <Link href="/crisis-resources" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Crisis Resources</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">24/7 crisis hotlines and support services</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/depression-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">PHQ-9 assessment, USPSTF guidelines, and treatment options</p>
              </Link>
              <Link href="/blog/safety-planning-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Safety Planning Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Step-by-step guide to creating a crisis plan</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
