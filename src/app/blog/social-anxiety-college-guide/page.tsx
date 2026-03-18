import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/social-anxiety-college-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "social-anxiety-college-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/social-anxiety-college-guide",
  title: "Social Anxiety in College: How to Recognize It and Find Support on Campus",
  description:
    "Social anxiety affects up to 15% of college students. Learn how it shows up on campus, why it is more than shyness, and how a free screening can help you take the next step.",
  keywords: [
    "social anxiety college",
    "social anxiety in college students",
    "college social anxiety",
    "social anxiety test college",
    "social anxiety on campus",
    "college social phobia",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is social anxiety common in college?",
    answer:
      "Yes. Social anxiety disorder is one of the most prevalent mental health conditions on college campuses, estimated to affect 10\u201315% of college students. Many more experience subclinical social anxiety that still significantly impacts their academic and social experience. The college environment \u2014 with constant social evaluation, class participation, and new relationship demands \u2014 can intensify symptoms.",
  },
  {
    question: "How is social anxiety different from being introverted?",
    answer:
      "Introversion is a personality preference for less stimulation \u2014 introverts recharge through solitude but can enjoy social interaction. Social anxiety involves fear and avoidance driven by the expectation of negative judgment. The key difference: introverts choose solitude because they prefer it; people with social anxiety avoid situations because they fear them.",
  },
  {
    question: "Can social anxiety affect my grades?",
    answer:
      "Yes. Social anxiety commonly leads to avoiding class participation, skipping classes with oral components, declining group projects, not visiting office hours, and avoiding study groups. Research shows that social anxiety is associated with lower GPA, longer time to degree, and higher dropout rates \u2014 not because of ability, but because of avoidance.",
  },
  {
    question: "Does my college offer help for social anxiety?",
    answer:
      "Most colleges offer free or low-cost counseling through their counseling center, which typically provides individual therapy, group therapy for anxiety, and workshops on social skills. Many campus counseling centers specifically offer CBT-based programs for social anxiety. Check your college&apos;s student health or counseling center website for available services.",
  },
];

export default function SocialAnxietyCollegeGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Social Anxiety in College: How to Recognize It and Find Support on Campus", description: "Social anxiety affects up to 15% of college students. Learn how it shows up on campus and how screening helps.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Social Anxiety in College Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Social Anxiety in College: How to Recognize It and Find Support on Campus
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            College is full of situations that social anxiety feeds on: meeting new people, speaking in class, navigating dining halls, attending parties, and being constantly evaluated. If you are a college student who avoids these situations not because you are uninterested but because the fear of judgment feels overwhelming, you may be dealing with more than normal nervousness. Social anxiety disorder affects an estimated 10&ndash;15% of college students &mdash; making it one of the most common mental health conditions on campus.
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
            <h2>How social anxiety shows up on campus</h2>
            <p>Social anxiety in college often manifests in specific, recognizable patterns:</p>
            <ul>
              <li><strong>Classroom avoidance:</strong> Skipping classes with participation requirements, sitting in the back, never raising your hand even when you know the answer</li>
              <li><strong>Dining hall dread:</strong> Eating alone in your room rather than navigating the cafeteria</li>
              <li><strong>Party paralysis:</strong> Wanting to socialize but feeling physically unable to enter social gatherings, or attending and standing in the corner on your phone</li>
              <li><strong>Office hours avoidance:</strong> Not seeking help from professors even when your grades depend on it</li>
              <li><strong>Group project panic:</strong> Intense distress about working with unfamiliar people</li>
              <li><strong>Presentation dread:</strong> Physical symptoms (nausea, trembling, blanking out) before and during presentations</li>
              <li><strong>Social isolation:</strong> Spending most free time alone despite wanting connections</li>
              <li><strong>Overreliance on texting:</strong> Avoiding phone calls and in-person conversations whenever possible</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Why college makes social anxiety worse</h2>
            <p>Several aspects of the college environment uniquely challenge people with social anxiety:</p>
            <ul>
              <li><strong>New social environment:</strong> Your existing support network is often left behind, requiring you to build new relationships from scratch</li>
              <li><strong>Constant evaluation:</strong> Academic performance, social standing, and identity are all under evaluation simultaneously</li>
              <li><strong>Social media comparison:</strong> Everyone else appears to be thriving socially, creating a distorted reference point</li>
              <li><strong>Roommate proximity:</strong> No private space to decompress, with constant potential for social interaction</li>
              <li><strong>Alcohol as social lubricant:</strong> The campus drinking culture can lead to using alcohol to manage social anxiety &mdash; a pattern that quickly becomes its own problem</li>
            </ul>
          </section>

          <section>
            <h2>How the MindCheck Tools screening helps</h2>
            <p>
              The <Link href="/social-anxiety-test-college" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools social anxiety test for college students</Link> is a free, private screening that takes under five minutes. It helps you understand whether what you are experiencing crosses the line from normal nervousness into something that may benefit from professional support.
            </p>
            <p>
              You can bring your screening results to your campus counseling center as a conversation starter. Many students find it easier to show a result than to explain their experience from scratch.
            </p>
            <p>
              If you are also using alcohol to manage social situations, the <Link href="/alcohol-screening-for-college-students" className="text-sage-600 dark:text-sage-400 underline">alcohol screening for college students</Link> can help you evaluate that pattern separately. And the <Link href="/social-anxiety-test-college" className="text-sage-600 dark:text-sage-400 underline">social anxiety screening</Link> provides a private starting point that no one else needs to see.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Evidence-based approaches that help</h2>
            <ul>
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> The gold-standard treatment for social anxiety. Many campus counseling centers offer CBT-based individual or group therapy specifically for social anxiety.</li>
              <li><strong>Exposure therapy:</strong> Gradual, structured practice with feared social situations &mdash; the behavioral component of CBT that produces the most durable change.</li>
              <li><strong>Campus support groups:</strong> Anxiety support groups normalize the experience and provide a low-pressure social environment to practice.</li>
              <li><strong>Academic accommodations:</strong> Disability services can provide alternative participation methods, extended time for oral presentations, or reduced-distraction testing environments.</li>
            </ul>
          </section>

          <section>
            <h2>When to seek professional help</h2>
            <p>Consider reaching out to your campus counseling center if:</p>
            <ul>
              <li>Social anxiety is affecting your grades, attendance, or academic performance</li>
              <li>You are isolated and unable to form the connections you want</li>
              <li>You are using alcohol or other substances to manage social situations</li>
              <li>Avoidance is increasing rather than decreasing over time</li>
              <li>You are experiencing depression alongside social anxiety</li>
            </ul>
            <p>
              Most campus counseling centers are free or very low cost and covered by student fees. Many offer walk-in hours for initial consultations.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">See where your social anxiety falls</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account needed.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/social-anxiety-test-college" className="btn-primary text-sm">Take the Social Anxiety Test</Link>
              <Link href="/spin-social-anxiety-test" className="btn-primary text-sm">SPIN Social Anxiety Test</Link>
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
              <Link href="/social-anxiety-test-college" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Social Anxiety Test for College</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Social anxiety screening for college students</p>
              </Link>
              <Link href="/spin-social-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">SPIN Social Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Social Phobia Inventory screening</p>
              </Link>
              <Link href="/alcohol-screening-for-college-students" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Alcohol Screening for College</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Evaluate your drinking patterns on campus</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/social-anxiety-vs-introversion" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Social Anxiety vs Introversion</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the difference</p>
              </Link>
              <Link href="/blog/what-is-social-anxiety-disorder" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Is Social Anxiety Disorder?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Symptoms, causes, and treatment</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
