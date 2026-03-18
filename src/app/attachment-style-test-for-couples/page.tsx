import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AttachmentStyleClient } from "../attachment-style-quiz/AttachmentStyleClient";

const TOOL_URL = `${SITE_URL}/attachment-style-test-for-couples`;

export const metadata: Metadata = createMetadata({
  path: "/attachment-style-test-for-couples",
  title: "Attachment Style Test for Couples — Free ECR-R Quiz",
  description:
    "Free attachment style quiz for couples using the ECR-R. Understand your relationship patterns. Private, instant results. No signup.",
  keywords: [
    "attachment style test for couples", "couples attachment quiz", "attachment style compatibility",
    "anxious avoidant relationship", "secure attachment test", "attachment style relationship",
    "ecr-r couples", "attachment quiz partners", "relationship attachment styles",
    "couples communication test", "free attachment test couples",
  ],
  openGraph: {
    title: "Attachment Style Test for Couples — Free ECR-R Quiz",
    description: "Free attachment style quiz for couples using the ECR-R. Understand your relationship patterns. Private, instant results. No signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What are the four attachment styles?",
    answer: "Secure (comfortable with intimacy and independence), Anxious-Preoccupied (craves closeness, fears abandonment), Dismissive-Avoidant (values independence, uncomfortable with emotional closeness), and Fearful-Avoidant (desires connection but fears it). Most people have a primary style with secondary tendencies.",
  },
  {
    question: "Can two insecurely attached people have a healthy relationship?",
    answer: "Yes. Awareness is the first step. When both partners understand their patterns and triggers, they can develop strategies to communicate more effectively and meet each other's needs. Couples therapy, particularly EFT, is specifically designed for this.",
  },
  {
    question: "Why do anxious and avoidant partners attract each other?",
    answer: "This is one of the most common relationship dynamics. Anxious partners are drawn to avoidant partners' confidence and independence. Avoidant partners appreciate anxious partners' warmth and expressiveness. Initially, each fills a gap for the other. Over time, this creates a pursue-withdraw cycle that requires awareness to break.",
  },
  {
    question: "Can your attachment style change?",
    answer: "Yes. Attachment styles are not fixed traits. Being in a relationship with a securely attached partner, working with a therapist, and developing self-awareness can all shift attachment patterns. This is called \"earned security\" and is well-documented in research.",
  },
  {
    question: "Should both partners take the quiz?",
    answer: "Ideally, yes. Understanding your own attachment style is valuable, but understanding the dynamic between both partners' styles provides much deeper insight. Many couples find that simply naming their patterns reduces conflict significantly.",
  },
];

export default function AttachmentStyleTestForCouplesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Attachment Style Test for Couples — Free ECR-R Quiz",
              description: "A free, private attachment style quiz for couples using the clinically validated ECR-R. Understand your relationship patterns, communication styles, and attachment compatibility.",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-03-08",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Attachment Style Quiz", url: `${SITE_URL}/attachment-style-quiz` },
              { name: "Attachment Style Test for Couples", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (ECR-R)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
            Couples &amp; Partners
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Attachment Style Test for Couples
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Every couple has a pattern. Maybe one of you reaches out for connection while the
            other pulls away. Maybe you both shut down during conflict, or maybe you both
            escalate until the conversation spirals. These patterns aren&apos;t random — they&apos;re
            rooted in your attachment styles, shaped by every significant relationship
            you&apos;ve ever had.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Understanding your attachment style — and your partner&apos;s — is one of the most
            powerful things you can do for your relationship. It explains why certain arguments
            keep repeating, why some needs feel impossible to express, and why closeness can
            feel both desperately wanted and deeply uncomfortable at the same time.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free screening uses the <strong>ECR-R</strong> (Experiences in Close
            Relationships — Revised), a clinically validated questionnaire used by researchers
            and therapists worldwide. It measures two core dimensions of attachment — anxiety
            and avoidance — and maps your results to one of four attachment styles. It is{" "}
            <strong>not a diagnosis</strong>, but it can give both of you language for
            patterns that may have been invisible until now.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold text-base hover:bg-rose-700 transition-colors shadow-sm"
          >
            Start the Attachment Style Quiz
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 5 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">4 attachment styles</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Research identifies four adult attachment styles: Secure, Anxious-Preoccupied,
                Dismissive-Avoidant, and Fearful-Avoidant. Each affects how you connect,
                communicate, and handle conflict.
                <span className="text-slate-500 dark:text-slate-400"> — Fraley &amp; Shaver</span>
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">50% of adults are insecurely attached</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Research suggests roughly half of adults have an insecure attachment style, which
                influences relationship satisfaction, conflict patterns, and emotional availability.
                <span className="text-slate-500 dark:text-slate-400"> — Mickelson et al.</span>
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-rose-700 dark:text-rose-300 mb-1">Attachment styles can change</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Attachment is not destiny. Through awareness, therapy, and secure relationships,
                people can shift toward more secure attachment patterns over time.
                <span className="text-slate-500 dark:text-slate-400"> — Bowlby / Attachment Theory</span>
              </p>
            </div>
          </div>
        </div>

        {/* Understanding Attachment Styles in Relationships */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Understanding Attachment Styles in Relationships
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Attachment theory identifies four primary styles that shape how adults
                experience romantic relationships. <strong>Securely attached</strong> individuals
                are comfortable with both intimacy and independence — they can ask for what they
                need without fear and give their partner space without anxiety. <strong>Anxious-Preoccupied</strong>{" "}
                partners tend to crave closeness and reassurance, often worrying that their
                partner doesn&apos;t care as much as they do. <strong>Dismissive-Avoidant</strong>{" "}
                partners value self-sufficiency and may feel smothered by too much emotional
                closeness. <strong>Fearful-Avoidant</strong> partners experience a push-pull
                dynamic internally — they want connection but find it overwhelming or frightening.
              </p>
              <p>
                One of the most common — and painful — relationship dynamics is the{" "}
                <strong>anxious-avoidant trap</strong>. Anxious partners are often drawn to
                avoidant partners because their independence reads as confidence and strength.
                Avoidant partners, in turn, appreciate the warmth and expressiveness of anxious
                partners. But over time, a predictable cycle emerges: the anxious partner pursues
                closeness, the avoidant partner withdraws, the pursuit intensifies, and the
                withdrawal deepens. Both partners end up feeling misunderstood, exhausted, and
                alone — even though they want the same thing: to feel safe with each other.
              </p>
              <p>
                When both partners understand their attachment styles, something shifts. The
                anxious partner can recognize that their need for reassurance isn&apos;t
                &quot;neediness&quot; — it&apos;s a valid emotional need that can be expressed
                directly instead of through protest behavior. The avoidant partner can see that
                their withdrawal isn&apos;t &quot;not caring&quot; — it&apos;s a protective
                strategy that can be softened with practice. Naming these patterns takes them out
                of the realm of blame (&quot;You always...&quot; / &quot;You never...&quot;) and
                into the realm of understanding (&quot;When I feel disconnected, I reach for you
                because I need reassurance&quot;).
              </p>
              <p>
                The good news is that attachment styles are not fixed. Through what researchers
                call <strong>&quot;earned security,&quot;</strong> couples can develop more
                secure patterns over time. This requires awareness (knowing your style and
                triggers), vulnerability (sharing your needs honestly instead of acting them out),
                and intentional practice (responding to your partner&apos;s bids for connection
                even when your instinct is to withdraw or escalate). Emotionally Focused Therapy
                (EFT), which is built entirely on attachment theory, has shown that 70–75% of
                couples move from distress to recovery — and 90% show significant improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the Attachment Style Quiz
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how you generally feel in close romantic relationships.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Couples Attachment Style Test?</h2>
        <h2>How Is the Attachment Style Test Scored?</h2>
        <h2>What Do My Attachment Style Results Mean?</h2>
      </section>
<AttachmentStyleClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Both partners take the quiz</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Compare your results to understand your dynamic. Knowing whether you&apos;re in
                an anxious-avoidant pairing, a secure-anxious pairing, or any other combination
                gives you a roadmap for where friction comes from — and how to reduce it.
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Learn your triggers</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Attachment styles activate most during stress, conflict, and vulnerability. Pay
                attention to what happens when you feel disconnected from your partner — do you
                pursue or withdraw? Understanding your default response is the first step toward
                choosing a different one.
              </p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Consider couples therapy</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Emotionally Focused Therapy (EFT) is built on attachment theory and is highly
                effective. Research shows 70–75% of couples move from distress to recovery, and
                90% show significant improvement. EFT helps couples identify and change the
                negative cycles that keep them stuck.
              </p>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Crisis Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess attachment patterns in a clinical context. Your responses are
            processed entirely in your browser and are never stored or transmitted. Always consult a qualified
            healthcare professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/attachment-style-quiz" className="text-sky-600 dark:text-sky-400 hover:underline">
            Attachment Style Quiz →
          </Link>
          <Link href="/big-five-personality-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            Big Five Personality Test →
          </Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
        </div>
      </div>
    </>
  );
}
