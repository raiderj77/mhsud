import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/depression-new-moms-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "depression-new-moms-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/depression-new-moms-guide",
  title: "Depression in New Moms: Beyond Baby Blues to Getting Real Help",
  description:
    "New mom depression is more than baby blues. Learn the signs, risk factors, how it differs from normal adjustment, and how a free screening can help you take the next step.",
  keywords: [
    "depression in new moms",
    "new mom depression",
    "postpartum depression vs baby blues",
    "depression test for new moms",
    "new mother mental health",
    "perinatal depression screening",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How is new mom depression different from baby blues?",
    answer:
      "Baby blues affect up to 80% of new mothers, typically appear in the first 2\u20133 days postpartum, and resolve within two weeks. Symptoms are mild: tearfulness, mood swings, irritability. New mom depression is more severe, lasts longer than two weeks, and interferes with daily functioning and bonding with your baby. If symptoms persist past two weeks or worsen, it may be more than baby blues.",
  },
  {
    question: "Can depression start months after delivery?",
    answer:
      "Yes. While the DSM-5 specifies onset during pregnancy or within four weeks of delivery, clinicians and researchers recognize that perinatal depression can develop anytime within the first year postpartum. Some women experience a delayed onset at 3, 6, or even 9 months \u2014 often triggered by return to work, weaning, sleep deprivation, or relationship stress.",
  },
  {
    question: "Does depression mean I do not love my baby?",
    answer:
      "No. Depression is a medical condition that affects how your brain regulates mood and emotion \u2014 it does not reflect your love for your child. Many mothers with depression feel intense guilt about difficulty bonding, which is itself a symptom of the condition. Treatment restores the capacity for connection that depression temporarily disrupts.",
  },
  {
    question: "Is it safe to take medication while breastfeeding?",
    answer:
      "This is a question for your healthcare provider, who can weigh the risks and benefits based on your specific situation. Several medications have been studied for use during breastfeeding and may be appropriate depending on symptom severity. Untreated depression also carries risks for both mother and infant. Your provider can help you make an informed decision.",
  },
];

export default function DepressionNewMomsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Depression in New Moms: Beyond Baby Blues to Getting Real Help", description: "Learn the signs of new mom depression, how it differs from baby blues, and how screening helps.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Depression in New Moms Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Depression in New Moms: Beyond Baby Blues to Getting Real Help
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Having a baby is supposed to be joyful. But for many new mothers, the reality includes exhaustion, overwhelm, and emotions that do not match the picture they expected. If you are feeling persistently sad, anxious, disconnected from your baby, or struggling to function &mdash; and it has lasted longer than two weeks &mdash; what you are experiencing may be more than the normal adjustment of early motherhood. You are not failing. You may be dealing with a treatable medical condition.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
              <li><strong>Postpartum Support International</strong> &mdash; <strong>1-800-944-4773</strong> (call or text)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>Signs of depression in new mothers</h2>
            <p>Depression in new moms often looks different from how depression is typically described. Common signs include:</p>
            <ul>
              <li>Persistent sadness, emptiness, or feeling &quot;numb&quot; beyond the first two weeks</li>
              <li>Difficulty bonding with or feeling connected to your baby</li>
              <li>Intense guilt or shame about your feelings as a mother</li>
              <li>Crying frequently, often without a clear trigger</li>
              <li>Anxiety or panic that something terrible will happen to your baby</li>
              <li>Inability to sleep even when your baby is sleeping</li>
              <li>Loss of appetite or eating far more than usual</li>
              <li>Withdrawing from your partner, family, or friends</li>
              <li>Difficulty concentrating, making decisions, or remembering things</li>
              <li>Feeling like you are a bad mother or that your baby would be better off without you</li>
              <li>Intrusive, frightening thoughts about harming yourself or your baby</li>
            </ul>
            <p>
              <strong>Intrusive thoughts about harm are a symptom of depression and anxiety, not an indicator of intent.</strong> They are distressing precisely because they conflict with your values. If you are experiencing them, it is important to tell your provider.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Risk factors</h2>
            <ul>
              <li>Previous history of depression or anxiety (strongest predictor)</li>
              <li>Depression or anxiety during pregnancy</li>
              <li>Traumatic birth experience</li>
              <li>Baby in the NICU or with health complications</li>
              <li>Lack of partner or social support</li>
              <li>History of trauma or abuse</li>
              <li>Relationship difficulties</li>
              <li>Financial stress</li>
              <li>Difficulty breastfeeding</li>
              <li>Having multiples</li>
              <li>Unplanned pregnancy</li>
            </ul>
          </section>

          <section>
            <h2>How the MindCheck Tools screening helps</h2>
            <p>
              The <Link href="/depression-test-for-new-moms" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools depression screening for new moms</Link> is a free, private assessment that takes under five minutes. It helps you put words to what you are experiencing and provides a structured result you can bring to your OB, midwife, or therapist.
            </p>
            <p>
              ACOG recommends that all women be screened for depression at least once during the perinatal period. If your provider has not screened you, this tool gives you a way to start that conversation on your own terms.
            </p>
            <p>
              If anxiety is a significant part of what you are experiencing (which is common postpartum), the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 anxiety screening</Link> can provide additional context. The <Link href="/depression-test-for-new-moms" className="text-sage-600 dark:text-sage-400 underline">new mom depression screening</Link> is a good starting point.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>When to seek help immediately</h2>
            <p>Contact your healthcare provider or go to an emergency room if:</p>
            <ul>
              <li>You are having thoughts of harming yourself or your baby</li>
              <li>You feel unable to care for yourself or your baby</li>
              <li>You are experiencing confusion, paranoia, or hearing/seeing things that are not there (these may indicate postpartum psychosis, a medical emergency)</li>
              <li>Symptoms are severe and rapidly worsening</li>
            </ul>
            <p>
              For non-emergency support, Postpartum Support International (1-800-944-4773) provides specialized guidance for perinatal mood disorders.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Take a few minutes to check in on how you&apos;re feeling</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account needed.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/depression-test-for-new-moms" className="btn-primary text-sm">New Mom Depression Screening</Link>
              <Link href="/postpartum-depression-test" className="btn-primary text-sm">Postpartum Depression Test</Link>
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
              <Link href="/depression-test-for-new-moms" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Test for New Moms</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Depression screening for new mothers</p>
              </Link>
              <Link href="/postpartum-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Postpartum Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Perinatal depression screening</p>
              </Link>
              <Link href="/mental-load-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Mental Load Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Measure invisible cognitive and emotional labor</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/postpartum-depression-symptoms-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Postpartum Depression Symptoms Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Signs, screening, and when to get help</p>
              </Link>
              <Link href="/blog/when-should-i-see-a-therapist" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">When Should I See a Therapist?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10 signs it may be time</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
