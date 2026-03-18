import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/caregiver-burnout-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "caregiver-burnout-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/caregiver-burnout-guide",
  title: "Caregiver Burnout: Signs, Prevention, and Getting Help for Yourself",
  description:
    "53 million Americans are unpaid caregivers. Learn the signs of caregiver burnout, risk factors, physical health impact, and how to get support including respite care.",
  keywords: [
    "caregiver burnout",
    "caregiver stress",
    "caregiver burnout symptoms",
    "family caregiver burnout",
    "caregiver burnout assessment",
    "caregiver support",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is caregiver burnout?",
    answer:
      "Caregiver burnout is a state of physical, emotional, and mental exhaustion that occurs when a person providing care for someone else \u2014 typically a family member with a chronic illness, disability, or age-related decline \u2014 becomes overwhelmed by the demands of caregiving. It involves emotional exhaustion, depersonalization (feeling detached from the person you are caring for), and a reduced sense of personal accomplishment in the caregiving role.",
  },
  {
    question: "How common is caregiver burnout?",
    answer:
      "Caregiver burnout is extremely common. AARP estimates that 53 million Americans serve as unpaid caregivers. Studies suggest that 40\u201370% of family caregivers experience clinically significant symptoms of depression, and caregiver burnout rates are even higher when the care recipient has dementia, serious mental illness, or complex medical needs. The National Alliance for Caregiving found that 36% of caregivers describe their situation as highly stressful.",
  },
  {
    question: "What is respite care?",
    answer:
      "Respite care provides temporary relief for primary caregivers. It can take many forms: in-home care where a professional or volunteer stays with your loved one, adult day programs, short-term residential care, or informal arrangements with family and friends. The ARCH National Respite Network (archrespite.org) maintains a locator for respite services by state. Many Area Agencies on Aging also offer respite programs, some on a sliding fee scale.",
  },
  {
    question: "When should a caregiver seek professional help?",
    answer:
      "Seek professional help if you are experiencing persistent sadness or hopelessness, using alcohol or substances to cope, neglecting your own health needs, feeling resentful or angry toward the person you are caring for, having thoughts of self-harm, or noticing that caregiving stress is affecting your relationships, work, or physical health. A therapist experienced with caregiver issues can help you develop coping strategies, process grief, and make difficult decisions about care.",
  },
];

export default function CaregiverBurnoutGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Caregiver Burnout: Signs, Prevention, and Getting Help for Yourself", description: "53 million Americans are unpaid caregivers. Learn the signs of caregiver burnout and how to get support.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Caregiver Burnout Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Caregiver Burnout: Signs, Prevention, and Getting Help for Yourself
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            An estimated 53 million Americans serve as unpaid caregivers for a family member or loved one, according to AARP. They manage medications, coordinate medical appointments, provide hands-on physical care, handle finances, and offer emotional support &mdash; often while maintaining their own jobs and families. Caregiver burnout is not a sign of weakness or insufficient love. It is the predictable result of sustained, often round-the-clock demands with inadequate support. If you are a caregiver who feels depleted, this guide is for you.
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
            <h2>Why caregiver burnout is so common</h2>
            <p>
              Caregiving involves a unique combination of stressors that makes burnout nearly inevitable without adequate support:
            </p>
            <ul>
              <li><strong>24/7 responsibility:</strong> Unlike a job, caregiving has no clock-out time. Many caregivers are on call around the clock, disrupting sleep, personal time, and the ability to fully disengage</li>
              <li><strong>Role confusion:</strong> When you become a caregiver for a parent, spouse, or sibling, the original relationship changes. You are simultaneously a family member and a care provider, which creates emotional complexity that professional caregivers do not face</li>
              <li><strong>Anticipatory grief:</strong> Many caregivers are caring for someone with a progressive or terminal condition. They are grieving the person&apos;s decline while simultaneously providing care &mdash; a dual burden that is emotionally devastating</li>
              <li><strong>Financial strain:</strong> Caregiving often requires reducing work hours or leaving employment entirely. The average caregiver spends approximately $7,200 per year out of pocket on caregiving-related expenses, according to AARP research</li>
              <li><strong>Social isolation:</strong> Caregiving responsibilities shrink social circles. Friends may stop calling, invitations decline, and the caregiver&apos;s world narrows to the care recipient&apos;s needs</li>
              <li><strong>Lack of respite:</strong> Many caregivers have no backup &mdash; no one to step in so they can take a break, attend to their own health, or simply rest</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>The physical health cost of caregiving</h2>
            <p>
              Caregiver burnout is not just an emotional issue. Research published in JAMA found that elderly caregivers experiencing emotional strain had a 63% higher mortality rate than non-caregivers of the same age. The physical toll of caregiving includes:
            </p>
            <ul>
              <li>Chronic sleep deprivation from nighttime caregiving duties</li>
              <li>Neglecting personal medical appointments and preventive care</li>
              <li>Poor nutrition due to lack of time or energy for meal preparation</li>
              <li>Musculoskeletal injuries from lifting and physical care tasks</li>
              <li>Weakened immune function from chronic stress</li>
              <li>Increased cardiovascular risk from sustained elevated cortisol</li>
            </ul>
            <p>
              The familiar advice to &quot;take care of yourself so you can take care of others&quot; is not a platitude in this context &mdash; it is a medical reality. Caregiver health directly affects the quality of care you can provide.
            </p>
          </section>

          <section>
            <h2>Signs of caregiver burnout</h2>
            <p>Watch for these warning signs:</p>
            <ul>
              <li>Persistent exhaustion that does not improve with rest</li>
              <li>Feeling resentful toward the person you are caring for</li>
              <li>Withdrawing from friends, family, and activities you once enjoyed</li>
              <li>Neglecting your own health &mdash; skipping medications, missing appointments</li>
              <li>Feeling hopeless or trapped with no end in sight</li>
              <li>Increased irritability, impatience, or emotional outbursts</li>
              <li>Using alcohol, food, or other substances to cope</li>
              <li>Feeling that caregiving is all you are &mdash; loss of personal identity</li>
              <li>Difficulty concentrating or making decisions</li>
            </ul>
            <p>
              If these patterns are familiar, the <Link href="/caregiver-burnout-assessment" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools caregiver burnout assessment</Link> can help you understand where you stand. It is free, private, and takes under five minutes.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Getting actual support &mdash; not just coping better</h2>
            <p>
              Caregiver burnout is not primarily a coping skills problem. It is a resource problem. While individual coping strategies matter, the most effective interventions provide actual, practical support:
            </p>
            <ul>
              <li><strong>Respite care:</strong> The ARCH National Respite Network (archrespite.org) maintains a state-by-state locator for respite services. Respite can be in-home, at adult day centers, or short-term residential. Some programs are free or sliding scale</li>
              <li><strong>Area Agencies on Aging:</strong> Your local Area Agency on Aging (eldercare.acl.gov, or call 1-800-677-1116) can connect you with caregiver support services, meal delivery, transportation, and respite programs in your community</li>
              <li><strong>Support groups:</strong> Organizations like the Caregiver Action Network and the Family Caregiver Alliance offer both in-person and online support groups specifically for family caregivers</li>
              <li><strong>Family meetings:</strong> If other family members are not sharing the caregiving load, a structured family meeting &mdash; sometimes facilitated by a social worker or mediator &mdash; can help redistribute responsibilities</li>
              <li><strong>FMLA and workplace accommodations:</strong> The Family and Medical Leave Act may provide job-protected leave for caregiving. Talk to your HR department about flexible scheduling options</li>
              <li><strong>Therapy:</strong> A therapist experienced with caregiver issues can help you process grief, set boundaries, manage guilt, and make difficult decisions about the level of care you can sustainably provide</li>
            </ul>
          </section>

          <section>
            <h2>When the right decision is stepping back</h2>
            <p>
              One of the hardest parts of caregiving is recognizing when the demands exceed what you can safely or sustainably provide. This is not failure. It is honest assessment. Consider whether:
            </p>
            <ul>
              <li>Your own physical or mental health is seriously deteriorating</li>
              <li>The care recipient&apos;s needs have surpassed what one person can safely manage</li>
              <li>You are no longer able to provide the quality of care your loved one deserves</li>
              <li>Your other relationships (with your partner, children, or friends) are being seriously harmed</li>
            </ul>
            <p>
              Exploring assisted living, skilled nursing, or increased in-home professional care does not mean you are abandoning your loved one. It may mean you are making the best decision for everyone involved.
            </p>
          </section>

          <section>
            <h2>When to seek professional help for yourself</h2>
            <p>Reach out to a mental health professional if:</p>
            <ul>
              <li>You are experiencing symptoms of depression or persistent anxiety</li>
              <li>You are using substances to cope with caregiving stress</li>
              <li>You feel resentful, angry, or emotionally numb toward your loved one</li>
              <li>You are having thoughts of self-harm</li>
              <li>You have neglected your own health to a dangerous degree</li>
              <li>You feel trapped and see no way to improve your situation</li>
            </ul>
            <p>
              The <Link href="/caregiver-burnout-assessment" className="text-sage-600 dark:text-sage-400 underline">caregiver burnout assessment</Link> can help you put words to what you are experiencing. You can also explore the <Link href="/compassion-fatigue-test" className="text-sage-600 dark:text-sage-400 underline">compassion fatigue test</Link> if you are specifically concerned about the emotional toll of witnessing your loved one&apos;s suffering.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check your burnout level</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/caregiver-burnout-assessment" className="btn-primary text-sm">Take the Caregiver Burnout Assessment</Link>
              <Link href="/compassion-fatigue-test" className="btn-primary text-sm">Compassion Fatigue Test</Link>
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
              <Link href="/caregiver-burnout-assessment" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Caregiver Burnout Assessment</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Burnout screening for family caregivers</p>
              </Link>
              <Link href="/compassion-fatigue-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Compassion Fatigue Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Secondary traumatic stress screening</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated depression screening</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated anxiety screening</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/compassion-fatigue-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Compassion Fatigue Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Signs and recovery for caregivers and helpers</p>
              </Link>
              <Link href="/blog/burnout-symptoms-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Burnout Symptoms Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">General burnout signs and WHO definition</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
