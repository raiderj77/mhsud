import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/burnout-healthcare-workers-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "burnout-healthcare-workers-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/burnout-healthcare-workers-guide",
  title: "Burnout in Healthcare Workers: Signs, Causes, and What Actually Helps",
  description:
    "Over 50% of healthcare workers report burnout. Learn the unique risk factors, warning signs, and evidence-based strategies for physicians, nurses, and clinical staff.",
  keywords: [
    "healthcare worker burnout",
    "physician burnout",
    "burnout in healthcare",
    "healthcare burnout statistics",
    "clinician burnout",
    "burnout test healthcare workers",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How common is burnout in healthcare workers?",
    answer:
      "Medscape\u2019s annual survey consistently reports burnout rates of 42\u201353% among physicians. The American Nurses Association reports even higher rates among nurses, with some surveys showing 60% or more during and after the COVID-19 pandemic. Emergency medicine, critical care, and primary care consistently have the highest rates across specialties.",
  },
  {
    question: "What makes healthcare burnout different from regular burnout?",
    answer:
      "Healthcare burnout involves moral injury \u2014 the distress of knowing what patients need but being unable to provide it due to systemic constraints. It also carries unique risks: higher rates of medical errors, patient safety incidents, and provider suicide. The life-and-death stakes make healthcare burnout distinctly more consequential than burnout in most other professions.",
  },
  {
    question: "Can healthcare burnout be fixed without leaving the profession?",
    answer:
      "Yes, though it requires both individual strategies and systemic change. Individual approaches include therapy, peer support, and boundary-setting. However, research consistently shows that organizational factors \u2014 staffing levels, administrative burden, autonomy, and leadership culture \u2014 are the primary drivers. Sustainable solutions must address both individual and systemic levels.",
  },
  {
    question: "Is burnout a reason to see a therapist?",
    answer:
      "Yes. Burnout is a significant risk factor for depression, anxiety, substance use, and suicidal ideation \u2014 particularly in healthcare settings. A therapist can help distinguish burnout from clinical depression, address moral injury, and develop sustainable coping strategies. Many employee assistance programs offer confidential sessions at no cost.",
  },
];

export default function BurnoutHealthcareWorkersGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Burnout in Healthcare Workers: Signs, Causes, and What Actually Helps", description: "Over 50% of healthcare workers report burnout. Learn the unique risk factors, warning signs, and evidence-based strategies.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Healthcare Worker Burnout Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Burnout in Healthcare Workers: Signs, Causes, and What Actually Helps
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Healthcare workers entered their profession to help people. But the systems they work within &mdash; chronic understaffing, administrative overload, emotional weight, and moral compromise &mdash; are producing burnout at crisis levels. The 2022 U.S. Surgeon General Advisory on healthcare worker burnout called it an &quot;urgent public health issue.&quot; If you are a healthcare worker feeling depleted, you are not alone, and this is not a personal failing.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
              <li><strong>Dr. Lorna Breen Heroes&apos; Foundation</strong> &mdash; Resources for healthcare professionals at <strong>drlornabreen.org</strong></li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>What makes healthcare burnout unique?</h2>
            <p>
              Healthcare burnout shares the three Maslach dimensions with burnout in other professions &mdash; emotional exhaustion, depersonalization, and reduced personal accomplishment &mdash; but it carries additional layers:
            </p>
            <ul>
              <li><strong>Moral injury:</strong> The distress of being unable to provide the care you know patients need due to systemic constraints &mdash; insufficient time, resources, or staffing</li>
              <li><strong>Life-and-death stakes:</strong> Mistakes carry severe consequences, creating a constant low-grade hypervigilance</li>
              <li><strong>Compassion fatigue:</strong> Absorbing the suffering of patients and families takes a cumulative emotional toll</li>
              <li><strong>Culture of self-sacrifice:</strong> Healthcare normalizes working through exhaustion, skipping meals, and suppressing personal needs</li>
              <li><strong>Administrative burden:</strong> Electronic health records, prior authorizations, and documentation requirements consume hours that could go to patient care</li>
              <li><strong>Stigma around help-seeking:</strong> Many healthcare workers fear that acknowledging burnout or seeking mental health care will jeopardize their license or career</li>
            </ul>
          </section>

          <section>
            <h2>Warning signs of healthcare burnout</h2>
            <p>Burnout rarely appears suddenly. It accumulates through recognizable patterns:</p>
            <ul>
              <li>Dreading going to work when you used to feel engaged or purposeful</li>
              <li>Emotional numbness or detachment from patients (&quot;going through the motions&quot;)</li>
              <li>Cynicism about the healthcare system, colleagues, or your own impact</li>
              <li>Chronic exhaustion that sleep does not resolve</li>
              <li>Difficulty concentrating, making decisions, or remembering details</li>
              <li>Increased irritability with patients, coworkers, or family</li>
              <li>Physical symptoms: persistent headaches, GI issues, muscle tension, frequent illness</li>
              <li>Using alcohol or other substances to decompress after shifts</li>
              <li>Thoughts of leaving the profession entirely</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How the MindCheck Tools burnout screening helps</h2>
            <p>
              The <Link href="/burnout-test-for-healthcare-workers" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools burnout screening for healthcare workers</Link> is a free, private self-assessment that measures burnout across the three Maslach dimensions. It takes under five minutes, runs entirely in your browser, and requires no account or login.
            </p>
            <p>
              A burnout screening gives you a structured snapshot &mdash; objective data that cuts through the &quot;everyone feels this way&quot; normalization common in healthcare culture. You can bring your results to a therapist, your EAP, or a trusted colleague as a conversation starter.
            </p>
            <p>
              If you are also experiencing symptoms of depression or anxiety alongside burnout, the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> provide focused screenings for those dimensions. Burnout can mask or co-occur with clinical depression, and distinguishing between them is important for getting the right support.
            </p>
          </section>

          <section>
            <h2>What actually helps: individual and systemic strategies</h2>
            <p><strong>What individuals can do:</strong></p>
            <ul>
              <li>Set boundaries around shifts, on-call time, and after-hours communication</li>
              <li>Use your EAP &mdash; sessions are confidential and typically free</li>
              <li>Join peer support programs (Schwartz Rounds, Balint groups, peer support networks)</li>
              <li>Protect basic self-care: sleep, nutrition, movement, and days off</li>
              <li>Name what you are experiencing &mdash; burnout thrives in silence</li>
            </ul>
            <p><strong>What organizations must address:</strong></p>
            <ul>
              <li>Adequate staffing levels and workload distribution</li>
              <li>Reducing administrative and documentation burden</li>
              <li>Creating psychological safety for help-seeking without career consequences</li>
              <li>Leadership training on recognizing and responding to burnout</li>
              <li>Removing barriers to mental health care for staff (licensing questions, stigma)</li>
            </ul>
            <p>
              The research is clear: burnout is primarily a systemic problem, not an individual resilience deficit. However, individual coping strategies remain important while systemic change unfolds.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>When to seek professional help</h2>
            <p>Talk to a mental health professional if:</p>
            <ul>
              <li>Burnout is affecting your clinical judgment, patient safety, or ability to function</li>
              <li>You are using alcohol or substances to cope with work stress</li>
              <li>You are experiencing persistent hopelessness, numbness, or thoughts of self-harm</li>
              <li>Symptoms extend beyond work into your personal life and relationships</li>
              <li>You have considered leaving the profession without a clear next step</li>
            </ul>
            <p>
              The <Link href="/burnout-test-for-healthcare-workers" className="text-sage-600 dark:text-sage-400 underline">burnout screening</Link> is a useful first step to bring to that conversation. You do not need to have all the answers &mdash; you just need to show up.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check in on your burnout level</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/burnout-test-for-healthcare-workers" className="btn-primary text-sm">Take the Healthcare Burnout Check</Link>
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
              <Link href="/burnout-test-for-healthcare-workers" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Healthcare Worker Burnout Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Burnout screening for clinical professionals</p>
              </Link>
              <Link href="/compassion-fatigue-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Compassion Fatigue Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Secondary traumatic stress screening</p>
              </Link>
              <Link href="/burnout-assessment-tool" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">General Burnout Assessment</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Multi-dimensional burnout screening</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/burnout-symptoms-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Burnout Symptoms Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">General burnout signs, WHO definition, and Maslach dimensions</p>
              </Link>
              <Link href="/blog/compassion-fatigue-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Compassion Fatigue Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Signs, prevention, and recovery for caregivers</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
