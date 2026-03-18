import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/dast-10-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "dast-10-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/dast-10-guide",
  title: "DAST-10 Scoring & Interpretation: Complete Guide",
  description:
    "Learn how the DAST-10 drug screening is scored, what each level means, and how it compares to the CAGE-AID. Evidence-based guide with FAQ.",
  keywords: [
    "DAST-10 scoring interpretation", "DAST-10 guide", "drug abuse screening test",
    "DAST-10 score meaning", "DAST-10 vs CAGE-AID", "DAST-10 vs AUDIT",
    "drug screening tool", "substance use screening", "DAST-10 questions explained",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is a DAST-10 score of 3?",
    answer: "A score of 3 falls in the moderate level (3\u20135), indicating drug use may be affecting your life in some areas. Further evaluation by a healthcare professional is recommended at this level. It is not a diagnosis \u2014 it is a screening result that warrants a conversation with your provider about what it may mean for you.",
  },
  {
    question: "Is the DAST-10 a diagnosis?",
    answer: "No. The DAST-10 is a screening tool, not a diagnostic instrument. It identifies the possibility and severity of drug-related problems but cannot diagnose a substance use disorder. A clinical diagnosis requires a comprehensive evaluation by a qualified healthcare professional who considers your full history, circumstances, and clinical criteria.",
  },
  {
    question: "How is the DAST-10 different from the CAGE-AID?",
    answer: "The DAST-10 focuses on drug use only (excluding alcohol and tobacco) and provides a severity score from 0\u201310 across five levels. The CAGE-AID screens for both alcohol and drug use with just 4 questions and a simpler positive/negative result. The DAST-10 gives more detail about drug-related problems, while the CAGE-AID is a quicker combined screen.",
  },
  {
    question: "Can I take the DAST-10 for someone else?",
    answer: "The DAST-10 is a self-report tool \u2014 each question asks about your own experiences. Answering for someone else reduces accuracy since many questions involve internal experiences like guilt, cravings, or withdrawal symptoms that are difficult to observe externally. If you are concerned about a loved one, consider using our Family Impact Assessment tool instead.",
  },
  {
    question: "What should I do if I score high on the DAST-10?",
    answer: "A high score (6\u20138 substantial, 9\u201310 severe) suggests drug use may be significantly impacting your life. The most important next step is speaking with a healthcare professional \u2014 your primary care provider, counselor, or substance use specialist. You can also call SAMHSA at 1-800-662-4357 for free, confidential referrals 24/7. A screening score is a starting point, not a final answer.",
  },
  {
    question: "Does the DAST-10 include alcohol or tobacco?",
    answer: "No. The DAST-10 specifically excludes alcohol and tobacco. It asks you to consider only drug use, including prescription medications used outside their prescribed purpose, over-the-counter medications used in excess, and illicit substances. For alcohol screening, consider the AUDIT. For a combined alcohol and drug screen, consider the CAGE-AID.",
  },
];

export default function DAST10GuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "DAST-10 Scoring & Interpretation: Complete Guide", description: "Learn how the DAST-10 drug screening is scored, what each level means, and how it compares to the CAGE-AID.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "DAST-10 Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Tool Guide</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">8 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Understanding the DAST-10: Scoring, Interpretation & What Your Results Mean
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The DAST-10 is one of the most widely used drug screening tools in clinical settings. Here&apos;s what it measures, how scoring works, and what to do with your results.
          </p>
          <div className="mt-6">
            <Link href="/dast-10-drug-screening" className="btn-primary text-sm">Take the DAST-10 Self-Check &rarr;</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is the DAST-10?</h2>
            <p>
              The Drug Abuse Screening Test (DAST-10) is a 10-item self-report questionnaire developed by Dr. Harvey Skinner in 1982. It was designed to be a brief, practical tool for identifying individuals whose drug use may have reached a level that warrants clinical attention.
            </p>
            <p>
              The DAST-10 is the shortened version of the original 28-item DAST. Research has shown that the 10-item version retains strong validity while being faster to administer — making it ideal for primary care, emergency departments, and community health settings. It is available in the public domain and has been translated into multiple languages.
            </p>
            <p>
              Importantly, the DAST-10 focuses exclusively on drug use. It does not screen for alcohol or tobacco — those are addressed by separate tools like the <Link href="/audit-alcohol-test">AUDIT</Link> (alcohol) and other instruments. When the DAST-10 says &quot;drugs,&quot; it includes prescription medications used outside their intended purpose, over-the-counter medications used in excess, and illicit substances.
            </p>
          </section>

          <section>
            <h2>Who developed it and why?</h2>
            <p>
              Dr. Harvey Skinner at the Addiction Research Foundation in Toronto created the DAST in response to a need for a standardized, efficient drug screening instrument. Before the DAST, clinicians often relied on clinical intuition or lengthy interviews to identify drug problems — approaches that varied widely and missed many people who needed help.
            </p>
            <p>
              The tool was modeled after the Michigan Alcoholism Screening Test (MAST), adapting its approach to drugs rather than alcohol. According to the National Institute on Drug Abuse (NIDA), brief validated screening instruments like the DAST-10 significantly improve early identification of substance use problems in healthcare settings.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>What the DAST-10 screens for</h2>
            <p>
              Each of the 10 questions explores a different dimension of how drug use may be affecting your life:
            </p>
            <ul>
              <li><strong>Drug use patterns</strong> — whether you use drugs for non-medical reasons</li>
              <li><strong>Loss of control</strong> — difficulty stopping drug use once started</li>
              <li><strong>Blackouts or flashbacks</strong> — memory gaps related to drug use</li>
              <li><strong>Guilt or discomfort</strong> — negative feelings about your drug use</li>
              <li><strong>Complaints from others</strong> — whether people close to you have expressed concern</li>
              <li><strong>Neglected responsibilities</strong> — family, work, or school being affected</li>
              <li><strong>Illegal activity</strong> — engaging in illegal behavior to obtain drugs</li>
              <li><strong>Withdrawal symptoms</strong> — physical symptoms when reducing or stopping use</li>
              <li><strong>Medical complications</strong> — health problems related to drug use</li>
              <li><strong>Help-seeking</strong> — whether you have sought help for a drug problem</li>
            </ul>
            <p>
              Each question is answered yes or no. One item (question 3, about being able to stop using drugs) is reverse-scored — a &quot;no&quot; answer counts as a point rather than &quot;yes.&quot;
            </p>
          </section>

          <section>
            <h2>How the DAST-10 is scored</h2>
            <p>
              The total score ranges from 0 to 10. Research has established five severity levels:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { range: "0", level: "No problems reported", note: "No drug-related concerns identified by this screening" },
                { range: "1-2", level: "Low level", note: "Some drug use; monitoring and brief education may be appropriate" },
                { range: "3-5", level: "Moderate level", note: "Drug use may be causing problems; further evaluation recommended" },
                { range: "6-8", level: "Substantial level", note: "Significant drug-related problems likely; professional assessment strongly encouraged" },
                { range: "9-10", level: "Severe level", note: "High likelihood of serious drug-related problems; intensive assessment and intervention recommended" },
              ].map((r) => (
                <div key={r.range} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">{r.range}</span>
                  <div>
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{r.level}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400"> &mdash; {r.note}</span>
                  </div>
                </div>
              ))}
            </div>
            <p>
              These ranges provide general guidance, not rigid cutoffs. Someone scoring a 2 who is deeply troubled by their drug use may need support just as much as someone scoring a 5 who is less aware of the impact. Context always matters.
            </p>
          </section>

          <section>
            <h2>How the DAST-10 differs from the AUDIT</h2>
            <p>
              The <Link href="/audit-alcohol-test">AUDIT</Link> (Alcohol Use Disorders Identification Test) was developed by the World Health Organization specifically for alcohol. The DAST-10 covers drugs but excludes alcohol and tobacco. They are complementary tools — clinicians frequently administer both to get a complete picture of substance use.
            </p>
            <p>
              The AUDIT uses a more nuanced scoring system (0-40, with questions about quantity, frequency, and consequences), while the DAST-10 uses simpler yes/no questions. Both are screening tools, not diagnostic instruments.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How the DAST-10 differs from the CAGE-AID</h2>
            <p>
              The <Link href="/cage-aid-substance-abuse-screening">CAGE-AID</Link> is an adapted version of the original CAGE questionnaire that screens for both alcohol and drug use combined. It has just 4 questions and produces a simple positive/negative result (a score of 2 or more is a positive screen).
            </p>
            <p>
              The DAST-10 provides more granularity — its 10 questions and five severity levels give a more detailed picture of the degree of drug-related problems. If you want a quick combined substance screen, the CAGE-AID is efficient. If you want more detail specifically about drug use, the DAST-10 is more informative.
            </p>
          </section>

          <section>
            <h2>When clinicians use the DAST-10</h2>
            <p>
              The DAST-10 is commonly used in several settings:
            </p>
            <ul>
              <li><strong>Primary care</strong> — as part of routine health screenings or when a provider suspects drug-related concerns</li>
              <li><strong>Emergency departments</strong> — to identify patients whose visit may be related to drug use</li>
              <li><strong>Substance use treatment programs</strong> — as an intake assessment to establish a baseline</li>
              <li><strong>Criminal justice settings</strong> — to identify individuals who may benefit from treatment rather than incarceration</li>
              <li><strong>Workplace and employee assistance programs</strong> — as part of voluntary wellness assessments</li>
            </ul>
            <p>
              Research published by SAMHSA supports integrating brief screening tools like the DAST-10 into routine healthcare, as early identification dramatically improves outcomes for substance use disorders.
            </p>
          </section>

          <section>
            <h2>What to do after getting your results</h2>
            <p>
              If your score is 0, no immediate action is typically needed — but awareness is still valuable. Understanding what the screening measures means you can recognize changes over time.
            </p>
            <p>
              For scores of 1-2, consider reflecting on your drug use patterns and whether they align with your values and goals. Brief conversations with a healthcare provider can be helpful even at this level.
            </p>
            <p>
              For scores of 3 or higher, reaching out to a professional is strongly encouraged. This could be your primary care provider, a counselor, or a substance use specialist. You can also call SAMHSA&apos;s National Helpline at <strong>1-800-662-4357</strong> — it&apos;s free, confidential, available 24/7, and available in English and Spanish.
            </p>
            <p>
              You might approach the conversation by saying: &quot;I took a drug screening questionnaire and my score was [X]. I&apos;d like to talk about what that might mean.&quot; Most providers will appreciate having this starting point.
            </p>
          </section>

          <section>
            <h2>Limitations of the DAST-10</h2>
            <p>
              Like all screening tools, the DAST-10 has important limitations:
            </p>
            <ul>
              <li>It cannot diagnose a substance use disorder — only a comprehensive clinical evaluation can do that</li>
              <li>It relies on honest self-reporting, which may be affected by stigma, denial, or fear of consequences</li>
              <li>It does not distinguish between different types of drugs or patterns of use</li>
              <li>It captures a snapshot in time and may not reflect the full arc of someone&apos;s experience with substances</li>
              <li>Cultural and contextual factors may influence how individuals interpret and answer the questions</li>
            </ul>
            <p>
              Despite these limitations, the DAST-10 remains one of the most efficient and well-validated drug screening tools available. Its strength lies in opening a conversation — not in providing final answers.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>The importance of professional follow-up</h2>
            <p>
              A screening tool is a starting point. The DAST-10 can indicate that drug use may be causing problems, but it cannot tell you why, to what extent, or what would help. Professional evaluation fills those gaps — a clinician can assess the full clinical picture, consider co-occurring conditions like depression or anxiety, and help develop an appropriate plan.
            </p>
            <p>
              Substance use disorders are among the most treatable conditions in behavioral health. According to SAMHSA, evidence-based treatments — including counseling, medication-assisted treatment, and peer support — help millions of people achieve and maintain recovery each year. The first step is often the hardest, but it is also the most important.
            </p>
          </section>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="card p-5 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose text-sm text-neutral-600 dark:text-neutral-400">
            <p className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p>This article is for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for concerns about substance use.</p>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to take the DAST-10?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 2 minutes. Your answers never leave your browser.</p>
            <Link href="/dast-10-drug-screening" className="btn-primary text-sm">Take the DAST-10 Self-Check</Link>
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
              <Link href="/dast-10-drug-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Drug Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10-item validated drug abuse screening test</p>
              </Link>
              <Link href="/cage-aid-substance-abuse-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Substance Use Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">4-item combined alcohol and drug screening tool</p>
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/audit-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the WHO&apos;s alcohol screening tool</p>
              </Link>
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Stages of Change in Addiction Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding where you are in the recovery process</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
