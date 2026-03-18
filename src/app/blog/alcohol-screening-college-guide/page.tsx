import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/alcohol-screening-college-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "alcohol-screening-college-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/alcohol-screening-college-guide",
  title: "Alcohol Screening for College Students: When Social Drinking Becomes a Problem",
  description:
    "About 33% of college students report binge drinking. Learn how to tell when drinking has crossed a line, what screening tools measure, and where to find help on campus.",
  keywords: [
    "college drinking",
    "alcohol screening college students",
    "binge drinking college",
    "college alcohol problems",
    "am I drinking too much college",
    "college alcohol test",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How much drinking is too much in college?",
    answer:
      "NIAAA defines binge drinking as reaching a BAC of 0.08% \u2014 typically 4 drinks for women or 5 for men within about 2 hours. Heavy drinking is binge drinking on 5 or more days per month. If drinking causes academic problems, blackouts, risky behavior, or you cannot control how much you drink once you start, those signs are worth evaluating regardless of quantity.",
  },
  {
    question: "Is college binge drinking really that dangerous?",
    answer:
      "Yes. NIAAA estimates about 1,519 college students ages 18\u201324 die each year from alcohol-related injuries. Approximately 696,000 students are assaulted by a drinking peer, and 97,000 report alcohol-related sexual assault. Binge drinking also impairs academic performance, increases accident risk, and can accelerate the development of alcohol use disorder.",
  },
  {
    question: "Will my college find out if I take a screening?",
    answer:
      "The MindCheck Tools alcohol screening is completely private \u2014 it runs in your browser, requires no login, and no data is stored or transmitted. If you use your campus counseling center, those conversations are also confidential under FERPA and professional ethics rules, with very limited exceptions for imminent danger.",
  },
  {
    question: "Is it normal to drink a lot in college?",
    answer:
      "Drinking is common in college, but \u201Cnormal\u201D does not mean \u201Csafe\u201D or \u201Cwithout consequence.\u201D About 33% of college students report binge drinking, which means 67% do not. The perception that \u201Ceveryone drinks\u201D is a well-documented social norm distortion that research consistently shows inflates students\u2019 estimates of peer drinking.",
  },
];

export default function AlcoholScreeningCollegeGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Alcohol Screening for College Students: When Social Drinking Becomes a Problem", description: "About 33% of college students report binge drinking. Learn when drinking has crossed a line and how screening helps.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Alcohol Screening College Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Alcohol Screening for College Students: When Social Drinking Becomes a Problem
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            In college, drinking is often treated as a rite of passage. But the line between social drinking and problematic drinking can blur quickly &mdash; especially in an environment where heavy drinking is normalized and consequences are easy to dismiss. About one-third of college students report binge drinking in the past month (NIAAA), and many do not recognize when their relationship with alcohol has shifted from recreational to concerning. A screening is a private, honest starting point.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>Signs that college drinking may be a problem</h2>
            <p>Consider whether any of these patterns apply to you:</p>
            <ul>
              <li>Drinking more than you intended, or for longer than you planned</li>
              <li>Blacking out or not remembering parts of the night</li>
              <li>Missing classes, assignments, or exams because of drinking or hangovers</li>
              <li>Needing to drink more to get the same effect (tolerance)</li>
              <li>Drinking to cope with stress, anxiety, loneliness, or social situations</li>
              <li>Friends or family expressing concern about your drinking</li>
              <li>Getting into risky situations while drinking (driving, unprotected sex, fights)</li>
              <li>Feeling guilty or ashamed about your drinking but continuing anyway</li>
              <li>Trying to cut back and finding it harder than expected</li>
              <li>Drinking alone regularly</li>
            </ul>
            <p>
              One or two of these does not automatically indicate an alcohol use disorder, but any of them is worth paying attention to. The earlier you evaluate your patterns, the more options you have.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How the MindCheck Tools alcohol screening helps</h2>
            <p>
              The <Link href="/alcohol-screening-for-college-students" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools alcohol screening for college students</Link> is a free, private assessment based on validated clinical questions. It takes under five minutes, runs entirely in your browser, and no one sees your results but you.
            </p>
            <p>
              The screening is not about labeling you or telling you what to do. It gives you a structured, honest picture of your drinking patterns &mdash; something that is difficult to see clearly when heavy drinking is normalized around you. You can use your results as a private reflection tool or bring them to a campus counselor.
            </p>
            <p>
              For a more detailed clinical assessment, the <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT alcohol screening</Link> provides the full WHO 10-item assessment used in clinical settings worldwide. The <Link href="/alcohol-screening-for-college-students" className="text-sage-600 dark:text-sage-400 underline">college-specific screening</Link> contextualizes questions for the campus environment.
            </p>
          </section>

          <section>
            <h2>The role of social norms</h2>
            <p>
              One of the most consistent findings in college health research is that students significantly overestimate how much their peers drink. This &quot;social norms distortion&quot; makes heavy drinking seem more normal than it actually is, which in turn increases individual consumption.
            </p>
            <p>
              The reality: about 33% of college students binge drink, which means the majority do not. Many students who appear to be drinking heavily are also struggling with it privately. Screening breaks through the distortion by measuring your actual patterns against clinical benchmarks rather than perceived peer norms.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>When to seek help on campus</h2>
            <p>Consider reaching out to your campus counseling center or student health services if:</p>
            <ul>
              <li>Your drinking is affecting your academics, relationships, or health</li>
              <li>You have tried to cut back and struggled</li>
              <li>You are drinking to cope with anxiety, depression, or stress</li>
              <li>You have experienced blackouts, injuries, or dangerous situations while drinking</li>
              <li>You are concerned about a friend&apos;s drinking</li>
            </ul>
            <p>
              Campus counseling services are confidential. Many also offer BASICS (Brief Alcohol Screening and Intervention for College Students) &mdash; a motivational interviewing-based program specifically designed for college students.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check your drinking patterns privately</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, anonymous, and no one sees your results but you.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/alcohol-screening-for-college-students" className="btn-primary text-sm">College Alcohol Screening</Link>
              <Link href="/audit-alcohol-test" className="btn-primary text-sm">Full AUDIT Screening</Link>
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
              <Link href="/alcohol-screening-for-college-students" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">College Alcohol Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Alcohol use screening for college students</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Full WHO alcohol screening</p>
              </Link>
              <Link href="/standard-drinks-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Standard Drinks Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How many standard drinks are in your pour?</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/standard-drinks-bac-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Standard Drinks and BAC Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What a standard drink is and how BAC works</p>
              </Link>
              <Link href="/blog/what-is-alcohol-use-disorder" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Is Alcohol Use Disorder?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">AUD symptoms, risk factors, and treatment</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
