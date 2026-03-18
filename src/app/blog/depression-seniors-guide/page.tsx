import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/depression-seniors-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "depression-seniors-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/depression-seniors-guide",
  title: "Depression in Older Adults: Signs That Are Often Missed",
  description:
    "Depression in seniors is common but underdiagnosed. Learn how it presents differently in older adults, why it is often mistaken for normal aging, and how screening helps.",
  keywords: [
    "depression in seniors",
    "elderly depression",
    "depression in older adults",
    "signs of depression in elderly",
    "geriatric depression",
    "depression test for seniors",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is depression a normal part of aging?",
    answer:
      "No. Depression is not a normal or inevitable part of getting older. While older adults face genuine challenges \u2014 loss, health decline, retirement, isolation \u2014 persistent depression is a treatable medical condition, not an expected consequence of aging. The misconception that it is normal leads to significant undertreatment in this population.",
  },
  {
    question: "How common is depression in older adults?",
    answer:
      "The CDC estimates that about 7% of adults over 60 experience major depression, but the rate is significantly higher in certain groups: 11\u201315% of hospitalized older adults, up to 25% of nursing home residents, and higher rates among those with chronic illness, cognitive decline, or recent bereavement. Many cases go undiagnosed.",
  },
  {
    question: "Can depression cause memory problems in older adults?",
    answer:
      "Yes. Depression can produce significant cognitive symptoms \u2014 difficulty concentrating, slowed thinking, and memory problems \u2014 sometimes called \u201Cpseudodementia.\u201D This is one reason depression in seniors is often mistaken for early dementia. The key difference: depression-related cognitive symptoms typically improve with treatment, while dementia does not.",
  },
  {
    question: "How is depression in seniors treated?",
    answer:
      "Evidence-based treatments include psychotherapy (CBT and problem-solving therapy have strong evidence in older adults), appropriate medication when indicated, behavioral activation (structured re-engagement with meaningful activities), social reconnection, and addressing contributing factors like pain, sleep, and isolation. Treatment is effective at any age.",
  },
];

export default function DepressionSeniorsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Depression in Older Adults: Signs That Are Often Missed", description: "Depression in seniors is common but underdiagnosed. Learn how it presents differently and how screening helps.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Depression in Seniors Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Depression in Older Adults: Signs That Are Often Missed
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Depression affects millions of older adults, but it is one of the most underdiagnosed conditions in this age group. Older adults are less likely to report feeling &quot;sad&quot; and more likely to present with physical complaints, withdrawal, or cognitive changes that get attributed to aging or medical conditions. This means depression in seniors often goes unrecognized and untreated &mdash; even though it responds well to intervention at any age.
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
            <h2>Why depression looks different in older adults</h2>
            <p>Depression in seniors often does not match the textbook picture of persistent sadness and tearfulness. Instead, it frequently presents as:</p>
            <ul>
              <li><strong>Physical complaints:</strong> Unexplained pain, fatigue, digestive issues, or worsening of existing conditions</li>
              <li><strong>Cognitive changes:</strong> Memory problems, difficulty concentrating, or slowed thinking &mdash; sometimes mistaken for dementia</li>
              <li><strong>Withdrawal:</strong> Declining social invitations, giving up hobbies, reduced interest in activities they previously enjoyed</li>
              <li><strong>Irritability and agitation:</strong> Rather than sadness, some older adults become more irritable, anxious, or restless</li>
              <li><strong>Neglecting self-care:</strong> Skipping medications, poor hygiene, not eating properly</li>
              <li><strong>Preoccupation with death:</strong> Not necessarily suicidal ideation, but increased talk about death, dying, or being a burden</li>
            </ul>
            <p>
              These presentations are easily attributed to &quot;just getting older,&quot; medical conditions, or grief &mdash; all of which may be present but do not rule out co-occurring depression.
            </p>
          </section>

          <section>
            <h2>Risk factors for depression in older adults</h2>
            <ul>
              <li>Loss of a spouse, close friends, or family members</li>
              <li>Chronic pain or illness (heart disease, diabetes, stroke, cancer)</li>
              <li>Social isolation and loneliness</li>
              <li>Loss of independence (driving, living alone, managing finances)</li>
              <li>Retirement and loss of professional identity</li>
              <li>Caregiving burden for a spouse with dementia or chronic illness</li>
              <li>Previous history of depression</li>
              <li>Medication side effects (some cardiovascular, pain, and neurological medications can contribute)</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How the MindCheck Tools depression screening for seniors helps</h2>
            <p>
              The <Link href="/depression-test-for-seniors" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools depression screening for seniors</Link> is a free, private self-assessment adapted for older adults. It takes under five minutes, runs entirely in your browser, and requires no account.
            </p>
            <p>
              A screening provides a structured starting point &mdash; something concrete to bring to a doctor&apos;s appointment or share with a family member who has noticed changes. Many older adults resist the idea of depression because of generational stigma; a screening result can reframe the conversation from &quot;are you depressed?&quot; to &quot;your responses suggest it may be worth discussing this with your doctor.&quot;
            </p>
            <p>
              For family members concerned about an older loved one, the <Link href="/depression-test-for-seniors" className="text-sage-600 dark:text-sage-400 underline">screening</Link> can also be completed together as a guided conversation rather than a solo exercise.
            </p>
          </section>

          <section>
            <h2>Depression vs. dementia: an important distinction</h2>
            <p>
              Depression and dementia can look remarkably similar in older adults &mdash; both involve memory problems, concentration difficulties, apathy, and withdrawal. However, there are key differences:
            </p>
            <ul>
              <li>Depression-related cognitive changes tend to come on more quickly (weeks to months vs. years)</li>
              <li>Depressed individuals are often distressed by their memory problems; those with dementia may be less aware</li>
              <li>Depression-related cognitive symptoms improve with treatment; dementia does not</li>
              <li>Depression and dementia can co-occur &mdash; depression is common in early-stage dementia</li>
            </ul>
            <p>
              A healthcare provider can help distinguish between the two. The <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> provides additional context if a more detailed depression screening is needed.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>When to seek professional help</h2>
            <p>Seek help if you or an older loved one is experiencing:</p>
            <ul>
              <li>Persistent low mood, withdrawal, or loss of interest lasting more than two weeks</li>
              <li>Unexplained physical complaints that do not respond to medical treatment</li>
              <li>Cognitive changes (memory, concentration) that seem to be worsening</li>
              <li>Talk about being a burden, not wanting to be alive, or giving away possessions</li>
              <li>Noticeable neglect of self-care, medications, or nutrition</li>
              <li>Increased alcohol use</li>
            </ul>
            <p>
              Older adults have the highest suicide rate of any age group in the United States, particularly older white men. Depression in this population should always be taken seriously.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check in on how you or a loved one is feeling</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/depression-test-for-seniors" className="btn-primary text-sm">Take the Senior Depression Check</Link>
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">PHQ-9 Depression Check</Link>
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
              <Link href="/depression-test-for-seniors" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Test for Seniors</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Depression screening adapted for older adults</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Standard validated depression screening</p>
              </Link>
              <Link href="/loneliness-test-seniors" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Loneliness Test for Seniors</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Loneliness and social isolation screening</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/depression-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How depression screening works and what results mean</p>
              </Link>
              <Link href="/blog/loneliness-mental-health" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Loneliness and Mental Health</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How chronic loneliness affects well-being</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
