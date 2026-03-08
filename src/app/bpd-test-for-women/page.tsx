import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { MSIBPDClient } from "../msi-bpd-screening/MSIBPDClient";

const TOOL_URL = `${SITE_URL}/bpd-test-for-women`;

export const metadata: Metadata = createMetadata({
  path: "/bpd-test-for-women",
  title: "BPD Test for Women — Free MSI-BPD Screening",
  description:
    "Free borderline personality disorder screening for women using the MSI-BPD. Private, instant results. No signup.",
  keywords: [
    "bpd test for women", "borderline personality disorder women", "bpd screening women",
    "bpd symptoms women", "female bpd", "bpd in women vs men", "bpd quiz women",
    "borderline personality test", "msi-bpd screening women", "bpd emotional dysregulation women",
    "free bpd test",
  ],
  openGraph: {
    title: "BPD Test for Women — Free MSI-BPD Screening",
    description: "Free borderline personality disorder screening for women using the MSI-BPD. Private, instant results. No signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Why is BPD diagnosed more often in women?",
    answer: "Borderline personality disorder is diagnosed approximately three times more often in women than in men. Research suggests this disparity stems from multiple factors: referral bias (women are more likely to seek mental health services), gendered symptom expression (women tend to internalize distress through self-harm and emotional volatility, which is more clinically visible), and historical diagnostic criteria that may better capture female presentations. Some studies suggest the actual prevalence may be closer to equal between genders when community samples are examined rather than clinical populations.",
  },
  {
    question: "How does BPD present differently in women versus men?",
    answer: "Women with BPD are more likely to experience comorbid eating disorders, depression, anxiety, and post-traumatic stress. They tend to internalize distress — through self-harm, emotional pain, and relationship turmoil — rather than externalize it. Men with BPD are more likely to present with substance use disorders and antisocial features such as aggression and explosive anger. These differences in presentation can lead to women being misidentified with depression or bipolar disorder before BPD is accurately assessed.",
  },
  {
    question: "Is BPD caused by trauma?",
    answer: "There is a strong correlation between childhood trauma and BPD, particularly in women. Studies show that up to 70% of individuals with BPD report some form of early adverse experience, including emotional neglect, physical abuse, or sexual abuse. However, not everyone with BPD has a trauma history, and not everyone who experiences trauma develops BPD. The condition arises from an interaction of biological vulnerability (such as heightened emotional sensitivity) and environmental factors. Both nature and nurture play a role.",
  },
  {
    question: "Can BPD be treated?",
    answer: "Yes — BPD is considered one of the most treatable personality disorders. Dialectical Behavior Therapy (DBT) is the gold-standard treatment and has been shown to significantly reduce self-harm, emotional instability, and interpersonal difficulties. Other effective approaches include Mentalization-Based Therapy (MBT) and Schema-Focused Therapy. Research shows that many individuals with BPD achieve remission of symptoms over time, especially with consistent treatment. Recovery is not only possible — it is common.",
  },
  {
    question: "How is BPD different from bipolar disorder?",
    answer: "BPD and bipolar disorder are frequently confused but are distinct conditions. BPD involves rapid emotional shifts that can change within hours or even minutes, often triggered by interpersonal events. It is characterized by chronic feelings of emptiness, fear of abandonment, and unstable self-image. Bipolar disorder involves distinct mood episodes — mania or hypomania and depression — that last days, weeks, or months, with changes in energy, sleep, and activity levels. A person can have both conditions, which is why a thorough professional assessment is important.",
  },
];

export default function BpdTestForWomenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "BPD Test for Women — Free MSI-BPD Screening",
              description: "A free, private borderline personality disorder screening for women using the clinically validated MSI-BPD questionnaire. Includes information on how BPD presents uniquely in women.",
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
              { name: "MSI-BPD Screening", url: `${SITE_URL}/msi-bpd-screening` },
              { name: "BPD Test for Women", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (MSI-BPD)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">
            Women &amp; AFAB
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          BPD Test for Women
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You feel things deeply — more deeply than the people around you seem to. One moment
            everything is fine, and the next you&apos;re overwhelmed by a wave of emotion so intense
            it takes your breath away. Your relationships feel like they&apos;re always on the edge
            of something — closeness that shifts to distance in the span of an evening. You might
            wonder if you&apos;re &quot;too much,&quot; or if something deeper is going on beneath
            the surface.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            You&apos;re not imagining it, and you&apos;re not alone. Borderline personality disorder
            is identified <strong>three times more often in women</strong> than in men, shaped by a
            complex interplay of biology, trauma history, and the way women&apos;s emotional pain is
            perceived by the world around them. This free, private screening using the clinically
            validated MSI-BPD can help you understand whether your experiences may point toward
            something worth exploring further. It is <strong>not a diagnosis</strong> — it is a
            starting point for self-understanding and, if needed, a conversation with a professional
            who can help.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pink-600 text-white font-semibold text-base hover:bg-pink-700 transition-colors shadow-sm"
          >
            Start the BPD Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 2 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">3x more diagnosed in women</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                BPD is diagnosed approximately three times more often in women than men, though
                research suggests actual prevalence may be more equal. The disparity likely reflects
                referral patterns, how symptoms are expressed, and longstanding biases in clinical
                settings.
                <span className="text-slate-500 dark:text-slate-400"> — Journal of Personality Disorders</span>
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">75% female patients</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                About 75% of people diagnosed with BPD in clinical settings are women, partly due
                to referral bias and gendered symptom expression. Women are more likely to seek help
                for emotional distress, making them more visible in clinical populations.
                <span className="text-slate-500 dark:text-slate-400"> — APA</span>
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-1">Often misdiagnosed</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Women with BPD are frequently misidentified as having depression, bipolar disorder,
                or anxiety before receiving an accurate assessment. The overlapping symptoms —
                mood swings, irritability, sleep disruption — can obscure the underlying pattern
                for years.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
          </div>
        </div>

        {/* Understanding BPD in Women */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Understanding BPD in Women
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Borderline personality disorder often looks different in women than in men, and
                understanding these differences is essential for accurate screening. Women with BPD
                tend to <strong>internalize</strong> their emotional pain — turning it inward through
                self-harm, disordered eating, intense shame, and self-blame. Men with BPD are more
                likely to <strong>externalize</strong> distress through aggression, substance misuse,
                and antisocial behavior. Because clinical criteria and referral pathways have
                historically been shaped around internalizing presentations, women are more likely to
                be assessed and identified. This does not mean BPD is a &quot;women&apos;s
                condition&quot; — it means the system is better at catching it in women, while
                potentially underidentifying it in men.
              </p>
              <p>
                Hormonal fluctuations play a meaningful role in the emotional dysregulation that
                characterizes BPD. Estrogen and progesterone influence neurotransmitter systems —
                particularly serotonin and GABA — that regulate mood, anxiety, and impulse control.
                Many women with BPD report that their symptoms intensify during certain phases of the
                menstrual cycle, during pregnancy, in the postpartum period, or during perimenopause.
                This hormonal dimension does not cause BPD on its own, but it can amplify the
                emotional intensity that is already a core feature of the condition. Understanding
                this connection can help women and their providers develop more effective management
                strategies that account for cyclical patterns.
              </p>
              <p>
                Women with BPD frequently present with <strong>comorbid conditions</strong> that
                complicate assessment and treatment. Eating disorders — particularly bulimia nervosa
                and binge eating disorder — co-occur at significantly higher rates in women with BPD
                than in the general population. Major depression and post-traumatic stress disorder
                (PTSD) are also extremely common, with some studies showing that over 50% of women
                with BPD meet criteria for concurrent PTSD. These overlapping conditions can mask
                BPD&apos;s core features, leading to years of treatment for depression or anxiety
                without addressing the underlying emotional dysregulation and interpersonal
                difficulties that drive much of the suffering.
              </p>
              <p>
                Relationship patterns and interpersonal sensitivity are often at the heart of BPD
                in women. The fear of abandonment — real or perceived — can drive intense efforts to
                maintain closeness, followed by equally intense withdrawal when trust feels broken.
                Women with BPD frequently describe a pattern of idealization and devaluation in
                relationships: a partner or friend is seen as perfect one moment and threatening the
                next. This is not manipulation — it reflects a genuine instability in how the self
                and others are experienced. The role of early trauma is significant here as well.
                Women with BPD report higher rates of childhood emotional neglect, physical abuse,
                and sexual abuse compared to men with the same condition. Trauma does not cause BPD
                in every case, but it is a powerful contributing factor that shapes how emotional
                sensitivity develops into a persistent pattern. Recognizing these dynamics is the
                first step toward healing — and effective, evidence-based treatments like Dialectical
                Behavior Therapy (DBT) are specifically designed to address them.
              </p>
            </div>
          </div>
        </div>

        {/* What To Expect */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            What To Expect
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                This screening uses the <strong>MSI-BPD</strong> (McLean Screening Instrument for
                Borderline Personality Disorder), a 10-question yes/no tool developed at McLean
                Hospital and widely used in clinical and research settings.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>How it works:</strong> You&apos;ll answer 10 yes/no questions about patterns in your emotions, relationships, and behavior. Each &quot;yes&quot; response scores one point.</p>
                <p><strong>Your score:</strong> Ranges from 0 to 10. A score of 7 or higher is considered a positive screen, suggesting further evaluation may be warranted. Scores of 5 to 6 fall in an uncertain range.</p>
                <p><strong>What it&apos;s not:</strong> This is a screening tool, not an assessment. It cannot tell you whether you have BPD — only a qualified mental health professional can make that determination through a comprehensive evaluation.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Your answers are never stored, transmitted, or visible to anyone but you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the MSI-BPD Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question honestly based on your overall life experiences and patterns.
          </p>
        </div>
        <MSIBPDClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Learn about DBT</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Dialectical Behavior Therapy (DBT) is the gold-standard treatment for BPD. It
                teaches skills in four key areas: mindfulness, distress tolerance, emotion
                regulation, and interpersonal effectiveness. DBT was originally developed
                specifically for BPD and has the strongest evidence base of any treatment approach.
                Many therapists offer DBT skills groups alongside individual therapy.
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to a mental health professional</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Finding a therapist who is informed about BPD is important. Not all providers have
                specialized training in personality disorders. When searching, look for clinicians
                who list DBT, MBT (Mentalization-Based Therapy), or schema therapy among their
                specialties. You can ask directly: &quot;Do you have experience working with
                borderline personality disorder?&quot; A good fit makes a real difference.
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reach out to support organizations</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The <strong>National Education Alliance for Borderline Personality Disorder
                (NEABPD)</strong> offers free family and individual programs, educational resources,
                and connections to treatment providers. <strong>NAMI (National Alliance on Mental
                Illness)</strong> provides peer support groups, educational courses, and a helpline
                at <strong>1-800-950-NAMI (6264)</strong>. You don&apos;t have to navigate this alone.
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
            healthcare professional can assess borderline personality disorder through a comprehensive evaluation.
            Your responses are processed entirely in your browser and are never stored or transmitted. Always
            consult a qualified healthcare professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Reviewed by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years
            of clinical experience in substance abuse counseling.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/msi-bpd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            MSI-BPD Screening →
          </Link>
          <Link href="/bpd-screening-for-young-adults" className="text-sky-600 dark:text-sky-400 hover:underline">
            BPD Screening for Young Adults →
          </Link>
          <Link href="/attachment-style-quiz" className="text-sky-600 dark:text-sky-400 hover:underline">
            Attachment Style Quiz →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
        </div>
      </div>
    </>
  );
}
