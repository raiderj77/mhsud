import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/how-to-talk-to-doctor-about-mental-health`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "how-to-talk-to-doctor-about-mental-health")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/how-to-talk-to-doctor-about-mental-health",
  title: "How to Talk to Your Doctor About Mental Health",
  description:
    "Talking to a doctor about mental health can feel daunting. Here\u2019s exactly what to say, how to prepare, and what to expect \u2014 including how to use your screening results.",
  keywords: [
    "how to talk to doctor about mental health",
    "telling doctor about depression anxiety",
    "mental health conversation doctor",
    "how to bring up mental health appointment",
    "PHQ-9 doctor visit",
    "GAD-7 doctor visit",
    "mental health primary care",
    "preparing for mental health appointment",
    "doctor dismisses mental health",
    "screening results doctor",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Will talking to my doctor about mental health affect my insurance?",
    answer:
      "In most cases, no. Health insurance covers mental health treatment under the Affordable Care Act\u2019s parity protections. Life and disability insurance are underwritten differently, and mental health history can be relevant. If concerned, speaking with a mental health professional independently outside your primary care record is an option.",
  },
  {
    question: "Should I see a therapist or my primary care doctor first?",
    answer:
      "Either is valid. Primary care doctors can prescribe medication and provide referrals. Therapists offer immediate counseling and often have shorter wait times than psychiatrists. For most people, starting with whoever is most accessible gets care moving fastest. Both can coordinate your treatment together.",
  },
  {
    question: "What if I cry during the appointment?",
    answer:
      "That\u2019s okay. Mental health conversations are emotional. Doctors see this regularly. You don\u2019t need to hold it together to be taken seriously \u2014 in fact, visible distress often helps convey the impact your symptoms are having.",
  },
  {
    question: "How do I know if a therapist is a good fit?",
    answer:
      "The therapeutic relationship \u2014 how safe, understood, and respected you feel \u2014 is the strongest predictor of outcomes. If after 2\u20133 sessions you don\u2019t feel heard or the approach doesn\u2019t resonate, try a different therapist. Finding the right fit is part of the process, not a failure.",
  },
];

export default function HowToTalkToDoctorAboutMentalHealthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "How to Talk to Your Doctor About Mental Health", description: "Talking to a doctor about mental health can feel daunting. Here\u2019s exactly what to say, how to prepare, and what to expect \u2014 including how to use your screening results.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "How to Talk to Your Doctor About Mental Health", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How to Talk to Your Doctor About Mental Health
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The most effective way to bring up mental health with your doctor is directly and specifically: state what you&apos;ve been experiencing, how long it&apos;s been happening, and how it&apos;s affecting your daily life. You don&apos;t need the right words or a perfect explanation. Bringing a completed screening tool like the PHQ-9 or GAD-7 with you is one of the most practical things you can do — it gives your doctor structured, specific information in a format they&apos;re trained to use.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>Why this conversation feels hard</h2>
            <p>
              Most people delay talking to their doctor about mental health — sometimes for years. The reasons are understandable:
            </p>
            <ul>
              <li><strong>Stigma</strong> — even internal stigma, the sense that you should be able to handle this on your own</li>
              <li><strong>Uncertainty</strong> — not knowing if what you&apos;re experiencing is &quot;bad enough&quot; to bring up</li>
              <li><strong>Appointment pressure</strong> — feeling like there&apos;s no time in a 15-minute primary care visit</li>
              <li><strong>Fear of judgment</strong> — worry about how the doctor will respond or what it might mean</li>
              <li><strong>Not knowing what to say</strong> — the experience of depression or anxiety can be hard to put into words</li>
            </ul>
            <p>
              All of these are valid. And all of them are worth pushing through — because research consistently shows that the treatment gap for mental health conditions is primarily a help-seeking gap, not a treatment availability gap. The people who connect with care tend to improve. The people who don&apos;t connect, don&apos;t (Wang et al., 2005).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>Before your appointment: three things to prepare</h2>

            <h3>1. Complete a validated screening tool</h3>
            <p>
              The most useful thing you can bring to a doctor&apos;s appointment is a completed, scored screening tool. Primary care physicians are trained to use these results — they&apos;re not just for your own information.
            </p>
            <ul>
              <li><Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> — if you&apos;ve been experiencing low mood, loss of interest, or low energy</li>
              <li><Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> — if you&apos;ve been experiencing persistent worry or tension</li>
              <li><strong>Both together</strong> — if you&apos;re experiencing a mix, or aren&apos;t sure which fits better</li>
            </ul>
            <p>
              Take the screen the morning of your appointment or the day before. Print or screenshot your score and the date you took it.
            </p>

            <h3>2. Write down three things</h3>
            <p>
              Before your appointment, jot down:
            </p>
            <ol>
              <li><strong>The main symptom or experience</strong> — in your own words, not clinical language. &quot;I&apos;ve been feeling like I&apos;m going through the motions&quot; or &quot;I can&apos;t stop worrying about everything&quot; is perfectly sufficient.</li>
              <li><strong>How long it&apos;s been going on</strong> — even a rough estimate. &quot;About two months&quot; or &quot;since the fall&quot; is useful.</li>
              <li><strong>How it&apos;s affecting your life</strong> — one or two specific examples. &quot;I&apos;ve been calling in sick more&quot; or &quot;I&apos;ve stopped seeing friends&quot; gives your doctor something concrete.</li>
            </ol>
            <p>
              That&apos;s it. You don&apos;t need a comprehensive symptom history — just a starting point.
            </p>

            <h3>3. Decide what you&apos;re hoping for</h3>
            <p>
              Go in with some sense of what you want from the appointment:
            </p>
            <ul>
              <li>Are you looking for a referral to a therapist or psychiatrist?</li>
              <li>Are you open to discussing medication?</li>
              <li>Do you just want someone to take what you&apos;re experiencing seriously?</li>
            </ul>
            <p>
              Having even a vague sense of this helps the conversation have direction. Your doctor can help you figure out options, but knowing roughly what you want makes that easier.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>How to start the conversation</h2>
            <p>
              Many people overthink the opening. Here are direct, effective ways to raise it:
            </p>
            <p>
              <strong>Simple and direct:</strong><br />
              &quot;I&apos;ve been struggling with my mental health and I&apos;d like to talk about it.&quot;
            </p>
            <p>
              <strong>Leading with the screening score:</strong><br />
              &quot;I took a validated depression screening and scored a 14. I wanted to bring it in and ask what you think.&quot;
            </p>
            <p>
              <strong>If you&apos;re not sure what it is:</strong><br />
              &quot;I&apos;ve been feeling off for a few months — more down, less interested in things, low energy. I&apos;m not sure if it&apos;s depression but I wanted to bring it up.&quot;
            </p>
            <p>
              <strong>If you&apos;ve been avoiding it:</strong><br />
              &quot;I&apos;ve been putting this off, but I&apos;ve been dealing with anxiety that&apos;s getting in the way of my daily life.&quot;
            </p>
            <p>
              None of these require you to have a diagnosis or a clean narrative. You&apos;re describing an experience and asking for help — that&apos;s all that&apos;s needed.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>What to expect from your doctor</h2>
            <p>
              <strong>A good primary care visit for mental health typically includes:</strong>
            </p>
            <ul>
              <li>Your doctor asking follow-up questions about your symptoms, timing, and functioning</li>
              <li>Review of your screening score if you brought one</li>
              <li>Assessment for any medical causes (thyroid issues, anemia, and other conditions can mimic mood and anxiety symptoms)</li>
              <li>Discussion of options — which might include a referral to mental health services, medication, lifestyle recommendations, or a follow-up appointment</li>
            </ul>
            <p>
              <strong>What it probably won&apos;t include:</strong>
            </p>
            <ul>
              <li>A formal diagnosis in the first visit (diagnoses typically require a more thorough evaluation)</li>
              <li>An immediate solution — it may take a few appointments to find the right path forward</li>
            </ul>
            <p>
              <strong>If your doctor dismisses your concerns:</strong>
            </p>
            <p>
              It happens, and it&apos;s not okay. If you feel your concerns weren&apos;t taken seriously, you have options:
            </p>
            <ul>
              <li>Ask directly: &quot;I want to make sure I&apos;m being clear — this has been affecting my daily life significantly. Can we discuss next steps?&quot;</li>
              <li>Request a referral: &quot;Can you refer me to a mental health professional?&quot;</li>
              <li>See a different provider: You are allowed to seek a second opinion or switch doctors.</li>
            </ul>
            <p>
              Your experience is real and it deserves to be heard.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Specific scenarios</h2>

            <h3>&quot;I&apos;m worried about what going on my record means.&quot;</h3>
            <p>
              Medical records are private under HIPAA and cannot be shared without your authorization with employers, family members, or most third parties. The exceptions are narrow (certain safety-sensitive jobs, insurance underwriting in some states). Discussing mental health with your doctor is documented as part of your medical care — the same as any other health concern.
            </p>

            <h3>&quot;I&apos;m worried my doctor will push medication immediately.&quot;</h3>
            <p>
              A good clinician presents options. Medication is one option; therapy and lifestyle changes are others. You&apos;re allowed to ask about all of them and to make an informed decision. If you feel pressured toward a specific treatment that doesn&apos;t feel right for you, say so. You can also ask for time to think before deciding.
            </p>

            <h3>&quot;I&apos;ve felt dismissed before.&quot;</h3>
            <p>
              Coming prepared — with a screening score, specific symptoms, and the duration — makes it harder to dismiss. If dismissal happens again, that&apos;s information about this particular provider, not about the validity of your experience. A mental health specialist (therapist, psychologist, psychiatrist) may be a more appropriate first point of contact for your concerns.
            </p>

            <h3>&quot;I don&apos;t have a regular doctor.&quot;</h3>
            <p>
              Options include:
            </p>
            <ul>
              <li><strong>Urgent care clinics</strong> — can provide referrals and initial evaluation</li>
              <li><strong>Community mental health centers</strong> — often provide evaluation and treatment regardless of insurance</li>
              <li><strong>Federally Qualified Health Centers (FQHCs)</strong> — sliding scale fees based on income</li>
              <li><strong>Telehealth platforms</strong> — many offer same-week appointments with licensed prescribers and therapists</li>
              <li><strong>SAMHSA treatment locator</strong> — <a href="https://findtreatment.gov" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">findtreatment.gov</a> to find local mental health services</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>Using your screening score in the appointment</h2>
            <p>
              If you bring a completed PHQ-9 or GAD-7, here&apos;s how to use it:
            </p>
            <p>
              <em>&quot;I completed a PHQ-9 before coming in today. My score was [X]. I understand that&apos;s in the [minimal/mild/moderate/severe] range. I wanted to discuss what that means and what options exist.&quot;</em>
            </p>
            <p>
              Most primary care physicians will recognize the tool immediately. The score gives your doctor a starting point that&apos;s more precise than symptom descriptions alone — and it signals that you&apos;ve been taking your mental health seriously, which often shifts the tone of the conversation.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>After the appointment</h2>
            <p>
              If you were given a referral, try to follow up within the week. The gap between receiving a referral and actually making the appointment is one of the most common places people stall. Put a reminder in your phone before you leave the office.
            </p>
            <p>
              If you were prescribed medication, ask your doctor:
            </p>
            <ul>
              <li>When should I expect to notice a difference?</li>
              <li>What are the most common side effects?</li>
              <li>When should I follow up?</li>
              <li>What should I do if I have concerns before the follow-up?</li>
            </ul>
            <p>
              If the appointment didn&apos;t go the way you hoped, that&apos;s not the end of the road. Try again with a different provider, or contact a mental health professional directly.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. If you are experiencing distress, a qualified healthcare professional can help you determine the right next steps.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> — Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> — Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> — <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Prepare for your appointment</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Take a screening before your visit. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
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
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated anxiety symptom screening</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/when-should-i-see-a-therapist" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">When Should I See a Therapist?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10 signs it may be time to talk to a professional</p>
              </Link>
              <Link href="/blog/depression-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How the PHQ-9 works, USPSTF guidelines, and next steps</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
