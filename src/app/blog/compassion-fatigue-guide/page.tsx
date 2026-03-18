import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/compassion-fatigue-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "compassion-fatigue-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/compassion-fatigue-guide",
  title: "Compassion Fatigue: Signs, Prevention, and Recovery for Caregivers",
  description:
    "Compassion fatigue is the emotional cost of caring for others in distress. Learn the warning signs, who is at risk, and evidence-based prevention strategies.",
  keywords: [
    "compassion fatigue", "compassion fatigue symptoms", "compassion fatigue vs burnout",
    "secondary traumatic stress", "caregiver fatigue", "compassion fatigue test",
    "compassion fatigue signs", "compassion fatigue prevention",
    "compassion fatigue caregivers", "ProQOL compassion fatigue",
    "compassion fatigue nurses", "compassion fatigue social workers",
    "compassion fatigue recovery", "vicarious trauma vs compassion fatigue",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  { question: "What is the difference between compassion fatigue and burnout?", answer: "Burnout is driven by workload and organizational stress; compassion fatigue is specifically caused by the emotional weight of caring for people who are suffering. A burned-out accountant is exhausted by deadlines; a compassion-fatigued nurse is exhausted by absorbing patients\u2019 pain. The distinction matters because burnout responds to workload changes while compassion fatigue requires emotional processing and boundary work." },
  { question: "Who is most at risk for compassion fatigue?", answer: "Anyone who regularly witnesses or absorbs the suffering of others is at risk, including nurses, social workers, therapists, EMTs, hospice workers, veterinarians, teachers in high-need settings, and family caregivers. Research shows that higher empathy, less experience, personal trauma history, and limited organizational support all increase vulnerability to compassion fatigue." },
  { question: "Can compassion fatigue be prevented?", answer: "It can be significantly reduced, though anyone in a caregiving role carries some risk. Evidence-based prevention strategies include regular self-assessment using tools like the ProQOL, clinical supervision or peer support, firm work-life boundaries, mindfulness practices, balanced caseloads, and taking time off before exhaustion forces it. Organizations also play a critical role in normalizing mental health support." },
  { question: "How do I know if I have compassion fatigue?", answer: "Common signs include emotional exhaustion tied to others\u2019 suffering, reduced empathy or numbness toward clients, intrusive thoughts about their cases, difficulty separating work from personal life, hypervigilance, and sleep disturbances. Physical symptoms like chronic fatigue, headaches, and frequent illness are also common. A validated self-assessment like the ProQOL can help identify patterns." },
];

export default function CompassionFatigueGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Compassion Fatigue: Signs, Prevention, and Recovery for Caregivers and Helpers", description: "A comprehensive guide to compassion fatigue \u2014 what it is, how it differs from burnout, who is at risk, and evidence-based strategies for prevention and recovery.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Compassion Fatigue Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">8 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Compassion Fatigue: Signs, Prevention, and Recovery for Caregivers and Helpers
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Compassion fatigue is the emotional and physical cost of caring for others who are in distress. It develops gradually, erodes empathy, and can leave even the most dedicated caregivers feeling hollow. This guide explains what compassion fatigue is, how it differs from burnout and vicarious trauma, who is most vulnerable, and what the research says about prevention and recovery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/compassion-fatigue-test" className="btn-primary text-sm">
              Take the Compassion Fatigue Self-Check &rarr;
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is compassion fatigue?</h2>
            <p>
              Compassion fatigue is a state of emotional and physical exhaustion that results from prolonged exposure to the suffering of others. The term was first used by nurse researcher Carla Joinson in 1992 to describe the unique burnout experienced by emergency department nurses. Trauma researcher Charles Figley later developed the concept further, defining it as &ldquo;the cost of caring&rdquo; for people in emotional or physical pain.
            </p>
            <p>
              Unlike general workplace stress, compassion fatigue is rooted in empathy itself. The very quality that makes someone an effective caregiver &mdash; the ability to connect deeply with another person&apos;s suffering &mdash; is what makes them vulnerable. Over time, repeated exposure to others&apos; trauma can overwhelm the caregiver&apos;s capacity to process it, leading to a gradual erosion of hope, energy, and the ability to feel.
            </p>
            <p>
              Compassion fatigue is sometimes called <strong>secondary traumatic stress</strong> because the caregiver absorbs traumatic material secondhand. You don&apos;t have to experience the trauma directly &mdash; hearing about it, witnessing its aftermath, or holding space for someone living through it is enough.
            </p>
          </section>

          <section>
            <h2>How is compassion fatigue different from burnout?</h2>
            <p>
              Burnout and compassion fatigue are related but distinct. <strong>Burnout</strong> is driven by workload, organizational dysfunction, and chronic workplace stress. It can happen in any profession &mdash; an overwhelmed accountant or a frustrated software engineer can burn out. <strong>Compassion fatigue</strong> is specifically tied to the emotional weight of caring for people who are suffering. It requires empathic engagement with another person&apos;s pain.
            </p>
            <p>
              In practice, the two frequently co-occur. A social worker with an unmanageable caseload (burnout) who is also absorbing the trauma of her clients (compassion fatigue) is dealing with both simultaneously. The distinction matters because interventions differ: burnout responds to workload reduction and organizational change, while compassion fatigue requires emotional processing, boundary work, and sometimes clinical support.
            </p>
            <p>
              If you&apos;re experiencing workplace exhaustion and want to explore whether burnout is a factor, our <Link href="/burnout-assessment-tool" className="text-sage-600 dark:text-sage-400 underline">burnout self-assessment</Link> can help you reflect on those patterns.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How is compassion fatigue different from vicarious trauma?</h2>
            <p>
              <strong>Vicarious trauma</strong> (also called secondary traumatization) refers to a fundamental shift in worldview that results from repeated exposure to others&apos; traumatic experiences. A therapist who works with sexual assault survivors for years may begin to see the world as inherently unsafe &mdash; that deep cognitive shift is vicarious trauma.
            </p>
            <p>
              <strong>Compassion fatigue</strong> is the more acute emotional and physical exhaustion &mdash; the depleted feeling of having nothing left to give. While vicarious trauma changes how you think about the world, compassion fatigue changes how you feel day to day. Both can develop simultaneously, and both deserve professional attention.
            </p>
          </section>

          <section>
            <h2>Who is at risk for compassion fatigue?</h2>
            <p>
              Anyone who regularly witnesses or absorbs the suffering of others can develop compassion fatigue. Research has identified several groups at elevated risk:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { role: "Nurses and healthcare workers", detail: "Especially in emergency, oncology, ICU, and palliative care settings where exposure to suffering is constant." },
                { role: "Social workers", detail: "High caseloads combined with systemic barriers and exposure to abuse, neglect, and poverty." },
                { role: "Therapists and counselors", detail: "Sustained empathic engagement with trauma narratives across many clients." },
                { role: "EMTs and first responders", detail: "Acute, repeated exposure to injury, death, and crisis situations." },
                { role: "Family caregivers", detail: "Caring for a loved one with chronic illness, dementia, or disability — often without training, support, or breaks." },
                { role: "Teachers", detail: "Especially in under-resourced schools where students face trauma, food insecurity, or violence." },
                { role: "Veterinarians", detail: "High rates of euthanasia decisions, client grief, and moral distress contribute to some of the highest compassion fatigue rates of any profession." },
              ].map((r) => (
                <div key={r.role} className="card p-3">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{r.role}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{r.detail}</p>
                </div>
              ))}
            </div>
            <p>
              Risk factors that increase vulnerability include high personal empathy, a personal history of trauma, limited organizational support, isolation in the role, and insufficient training on emotional self-care. If you&apos;re a family caregiver, our <Link href="/caregiver-burnout-assessment" className="text-sage-600 dark:text-sage-400 underline">caregiver burnout assessment</Link> may also be a helpful reflection tool.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Warning signs of compassion fatigue</h2>
            <p>
              Compassion fatigue develops gradually, which is part of what makes it so insidious. Many caregivers don&apos;t recognize it until they are deeply affected. Common warning signs include:
            </p>
            <p>
              <strong>Emotional symptoms:</strong> persistent emotional exhaustion that sleep doesn&apos;t resolve, reduced empathy or feeling numb toward clients or patients, difficulty separating work from personal life, intrusive thoughts or images related to others&apos; trauma, hypervigilance, irritability, a growing sense of hopelessness about making a difference, and feeling emotionally &ldquo;shut down.&rdquo;
            </p>
            <p>
              <strong>Physical symptoms:</strong> chronic fatigue regardless of rest, frequent headaches, gastrointestinal problems, weakened immune system (getting sick more often), sleep disturbances, and changes in appetite.
            </p>
            <p>
              <strong>Behavioral symptoms:</strong> withdrawing from colleagues, family, or friends, avoiding certain clients or situations, increased use of alcohol or other substances to cope, neglecting personal self-care, and difficulty making decisions.
            </p>
            <p>
              If these symptoms sound familiar, our <Link href="/compassion-fatigue-test" className="text-sage-600 dark:text-sage-400 underline">compassion fatigue self-check</Link> can help you reflect on what you&apos;re experiencing &mdash; with the important caveat that it is a reflection tool, not a clinical assessment.
            </p>
          </section>

          <section>
            <h2>How is compassion fatigue measured?</h2>
            <p>
              The standard measurement tool in research and clinical settings is the <strong>Professional Quality of Life Scale (ProQOL)</strong>, developed by Beth Hudnall Stamm. The ProQOL measures three dimensions: compassion satisfaction (the positive aspects of caregiving), burnout, and secondary traumatic stress (compassion fatigue). It has been translated into over 20 languages and is widely used in healthcare, social work, and emergency services.
            </p>
            <p>
              The ProQOL is a screening instrument, not a diagnostic tool. Elevated scores on the secondary traumatic stress subscale may indicate compassion fatigue, but only a qualified professional can interpret those results in the context of your full situation. Online self-checks &mdash; including ours &mdash; are simplified reflection tools that can help you notice patterns, but they are not substitutes for a validated clinical assessment.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Prevention and recovery strategies</h2>
            <p>
              Compassion fatigue is not inevitable. Research supports several evidence-based strategies for prevention and recovery:
            </p>
            <p>
              <strong>Self-awareness and regular assessment.</strong> The first step is recognizing that compassion fatigue is a real occupational hazard, not a personal failure. Periodic self-assessment &mdash; whether through the ProQOL, a self-check tool, or honest reflection &mdash; helps you catch early warning signs before they become entrenched.
            </p>
            <p>
              <strong>Clinical supervision and peer support.</strong> Processing difficult cases with a supervisor or trusted colleagues is one of the most protective factors identified in the research. Peer support groups normalize the emotional impact of caregiving work and reduce isolation.
            </p>
            <p>
              <strong>Boundaries between work and personal life.</strong> This includes physical boundaries (leaving work at work when possible), emotional boundaries (not carrying every client&apos;s story home), and time boundaries (protecting days off and vacation).
            </p>
            <p>
              <strong>Mindfulness and stress-reduction practices.</strong> Research consistently links mindfulness-based practices &mdash; meditation, yoga, deep breathing, body scans &mdash; with reduced compassion fatigue symptoms. Even 10 minutes a day can make a measurable difference.
            </p>
            <p>
              <strong>Balanced caseloads and organizational support.</strong> Organizations bear responsibility too. Rotating assignments between high-intensity and lower-intensity work, providing adequate staffing, and creating cultures where seeking help is normalized all reduce compassion fatigue risk.
            </p>
            <p>
              <strong>Professional help.</strong> If compassion fatigue has taken hold, working with a therapist &mdash; particularly one experienced in trauma or occupational mental health &mdash; can help you process what you&apos;ve absorbed and rebuild your capacity for empathic engagement. You don&apos;t need to be in crisis to deserve support.
            </p>
          </section>

          <section>
            <h2>When to seek professional help</h2>
            <p>
              Consider talking to a mental health professional if compassion fatigue symptoms persist for more than a few weeks, if you find yourself unable to feel empathy for people you care about, if you are using alcohol or substances to cope, if intrusive thoughts about clients&apos; or patients&apos; suffering are affecting your sleep or daily life, or if you feel a deep hopelessness about the value of your work. You do not need to be in crisis to seek support &mdash; early intervention leads to better outcomes.
            </p>
            <p>
              If you&apos;re also experiencing symptoms of depression, our <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression self-check</Link> can help you reflect on those symptoms as a starting point for a conversation with your provider.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. If you are experiencing distress, a qualified mental health professional can help you determine the right next steps.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want to check in on your compassion fatigue risk?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 3 minutes. Your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/compassion-fatigue-test" className="btn-primary text-sm">Take the Compassion Fatigue Self-Check</Link>
              <Link href="/burnout-assessment-tool" className="btn-primary text-sm">Take the Burnout Assessment</Link>
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

          {/* Related */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/work-stress-vs-burnout" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Work Stress vs. Burnout</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How to tell the difference between normal stress and burnout</p>
              </Link>
              <Link href="/blog/helping-family-member-addiction" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Help a Family Member with Addiction</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Practical guidance on boundaries, enabling, and self-care</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
