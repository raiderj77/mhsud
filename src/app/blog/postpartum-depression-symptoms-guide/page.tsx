import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/postpartum-depression-symptoms-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "postpartum-depression-symptoms-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/postpartum-depression-symptoms-guide",
  title: "Postpartum Depression Symptoms: Signs, Screening, and When to Get Help",
  description:
    "Postpartum depression affects 1 in 7 new mothers. Learn the signs, how it differs from baby blues, and how a free screening can help you take the next step.",
  keywords: [
    "postpartum depression symptoms",
    "postpartum depression signs",
    "PPD symptoms",
    "baby blues vs postpartum depression",
    "postpartum depression screening",
    "postpartum mental health",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How long does postpartum depression last?",
    answer:
      "Without support, postpartum depression can persist for months or even longer. With appropriate professional help, most people see meaningful improvement within several weeks to a few months. Early screening and intervention are associated with better outcomes. PPD does not resolve simply by waiting it out.",
  },
  {
    question: "Can fathers get postpartum depression?",
    answer:
      "Yes. Research estimates that approximately 8\u201310% of new fathers experience paternal postpartum depression, often in the first year after a child\u2019s birth. Risk factors include a partner with PPD, sleep deprivation, relationship stress, and a personal history of depression. Fathers should also be screened.",
  },
  {
    question: "Is postpartum depression different from baby blues?",
    answer:
      "Yes. Baby blues are mild mood swings, tearfulness, and irritability that affect up to 80% of new mothers in the first two weeks after delivery and resolve on their own. Postpartum depression is more intense, lasts longer than two weeks, and interferes with daily functioning and the ability to care for yourself or your baby.",
  },
  {
    question: "When should I talk to my doctor about postpartum depression?",
    answer:
      "If your symptoms last longer than two weeks, feel like they are getting worse rather than better, or interfere with your ability to care for yourself or your baby, contact your healthcare provider. If you have any thoughts of harming yourself or your baby, seek help immediately by calling 988 or going to your nearest emergency room.",
  },
];

export default function PostpartumDepressionGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Postpartum Depression Symptoms: Signs, Screening, and When to Get Help", description: "Postpartum depression affects 1 in 7 new mothers. Learn the signs, how it differs from baby blues, and how a free screening can help.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Postpartum Depression Symptoms Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Postpartum Depression Symptoms: Signs, Screening, and When to Get Help
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Postpartum depression (PPD) is a common and treatable mood disorder that affects approximately 1 in 7 new mothers, according to the American College of Obstetricians and Gynecologists (ACOG). It can develop anytime during the first year after childbirth and involves persistent feelings of sadness, exhaustion, and difficulty bonding with your baby. PPD is not a sign of weakness or failure &mdash; it is a medical condition with effective interventions.
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
              <li><strong>Postpartum Support International Helpline</strong> &mdash; <strong>1-800-944-4773</strong> (call or text)</li>
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
            <h2>What is postpartum depression?</h2>
            <p>
              Postpartum depression is a mood disorder that can affect parents after the birth of a child. The DSM-5 classifies it as a major depressive episode with peripartum onset, meaning symptoms can begin during pregnancy or within the first four weeks after delivery &mdash; though clinicians and researchers recognize that onset can occur anytime within the first 12 months.
            </p>
            <p>
              PPD goes beyond the &quot;baby blues&quot; &mdash; the mild mood swings, tearfulness, and anxiety that up to 80% of new mothers experience in the first two weeks postpartum. Baby blues are a normal hormonal adjustment and typically resolve on their own within 10&ndash;14 days. PPD is more severe, longer-lasting, and requires professional attention.
            </p>
            <p>
              Risk factors include a personal or family history of depression or anxiety, complications during pregnancy or delivery, lack of social support, relationship difficulties, financial stress, and a history of trauma. Hormonal changes after birth &mdash; particularly the rapid drop in estrogen and progesterone &mdash; are believed to play a significant biological role.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>Signs and symptoms of postpartum depression</h2>
            <p>PPD symptoms can vary in intensity, but commonly include:</p>

            <p><strong>Emotional symptoms:</strong></p>
            <ul>
              <li>Persistent sadness, hopelessness, or feeling &quot;empty&quot;</li>
              <li>Excessive crying, often without a clear trigger</li>
              <li>Intense irritability, anger, or mood swings beyond the first two weeks</li>
              <li>Feelings of guilt, worthlessness, or shame &mdash; especially about parenting</li>
              <li>Difficulty bonding with your baby or feeling emotionally disconnected</li>
              <li>Loss of interest or pleasure in activities you used to enjoy</li>
              <li>Anxiety or panic attacks, especially about the baby&apos;s health or safety</li>
            </ul>

            <p><strong>Physical symptoms:</strong></p>
            <ul>
              <li>Severe fatigue or exhaustion beyond normal new-parent tiredness</li>
              <li>Changes in appetite &mdash; eating significantly more or less than usual</li>
              <li>Sleep difficulties even when the baby is sleeping</li>
              <li>Physical aches, headaches, or stomach problems without medical cause</li>
            </ul>

            <p><strong>Cognitive and behavioral symptoms:</strong></p>
            <ul>
              <li>Difficulty concentrating, making decisions, or remembering things</li>
              <li>Withdrawing from family, friends, or your partner</li>
              <li>Thoughts of harming yourself or your baby</li>
              <li>Feeling like you are not a good parent or that your baby would be better off without you</li>
            </ul>

            <p>
              <strong>If you are having thoughts of harming yourself or your baby, this is a medical emergency.</strong> Call 988, go to your nearest emergency room, or call your healthcare provider immediately.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 3 */}
          <section>
            <h2>How the MindCheck Tools postpartum depression screening can help</h2>
            <p>
              Screening is one of the most important steps in identifying postpartum depression early. ACOG recommends that all women be screened for depression at least once during the perinatal period using a validated tool.
            </p>
            <p>
              The <Link href="/postpartum-depression-test" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools postpartum depression screening</Link> is free, private, and takes under five minutes. Your answers are scored entirely in your browser and are never stored or transmitted. The screening is based on clinically validated questions that assess the severity of depressive symptoms in the perinatal period.
            </p>
            <p>
              A screening result is not a diagnosis. It is a starting point &mdash; a structured way to understand what you are experiencing so you can have a more informed conversation with your healthcare provider. Many people find it helpful to bring their screening results to their first appointment.
            </p>
            <p>
              If you are also experiencing anxiety symptoms, the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 anxiety screening</Link> can help you assess that dimension. Depression and anxiety frequently co-occur during the postpartum period.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2>Who is at risk for postpartum depression?</h2>
            <p>PPD can affect anyone who has given birth, regardless of age, income, race, or education level. However, certain factors increase risk:</p>
            <ul>
              <li>Personal or family history of depression, anxiety, or bipolar disorder</li>
              <li>Previous episode of postpartum depression</li>
              <li>Stressful life events during pregnancy or after delivery (job loss, relationship problems, bereavement)</li>
              <li>Pregnancy or birth complications</li>
              <li>Lack of social support or feeling isolated</li>
              <li>History of trauma, abuse, or adverse childhood experiences</li>
              <li>Unplanned or unwanted pregnancy</li>
              <li>Difficulty breastfeeding</li>
              <li>Having multiples (twins, triplets)</li>
              <li>Baby in the NICU or with health concerns</li>
            </ul>
            <p>
              Having risk factors does not mean you will develop PPD, and many people develop PPD without any obvious risk factors. That is why universal screening is recommended.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 5 */}
          <section>
            <h2>When to seek professional help</h2>
            <p>Talk to your healthcare provider if:</p>
            <ul>
              <li>Your symptoms last longer than two weeks after delivery</li>
              <li>Symptoms are getting worse rather than better over time</li>
              <li>You are having difficulty caring for yourself or your baby</li>
              <li>You are having trouble bonding with or feeling connected to your baby</li>
              <li>You are using alcohol or other substances to cope</li>
              <li>You are having frightening or intrusive thoughts</li>
              <li>You have any thoughts of self-harm or harming your baby</li>
            </ul>
            <p>
              PPD is treatable. Evidence-based approaches include psychotherapy (particularly cognitive behavioral therapy and interpersonal therapy), support groups, and in some cases medication. Your provider can help you find the approach that is right for your situation, including options that are compatible with breastfeeding.
            </p>
            <p>
              Taking the <Link href="/postpartum-depression-test" className="text-sage-600 dark:text-sage-400 underline">postpartum depression screening</Link> before your appointment gives you a concrete starting point for the conversation. You do not need to have all the answers &mdash; you just need to show up.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to check in on how you&apos;re feeling?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and your answers never leave your browser. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/postpartum-depression-test" className="btn-primary text-sm">Take the Postpartum Depression Screening</Link>
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
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
              <Link href="/postpartum-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Postpartum Depression Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated postpartum depression self-check</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">General depression symptom screening</p>
              </Link>
              <Link href="/mental-load-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Mental Load Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Assess the invisible labor you carry</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/depression-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How depression screening works and what results mean</p>
              </Link>
              <Link href="/blog/when-should-i-see-a-therapist" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">When Should I See a Therapist?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10 signs it may be time to talk to a professional</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
