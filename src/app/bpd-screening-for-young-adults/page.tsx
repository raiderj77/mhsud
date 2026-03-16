import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { MSIBPDClient } from "../msi-bpd-screening/MSIBPDClient";

const TOOL_URL = `${SITE_URL}/bpd-screening-for-young-adults`;

export const metadata: Metadata = createMetadata({
  path: "/bpd-screening-for-young-adults",
  title: "BPD Screening for Young Adults — Free MSI-BPD Test",
  description:
    "Free borderline personality disorder screening for young adults using the MSI-BPD. Private, instant results. No signup.",
  keywords: [
    "bpd screening young adults", "borderline personality disorder young adults", "bpd test teens",
    "bpd symptoms young people", "bpd college students", "borderline personality test young adults",
    "bpd early signs", "bpd onset age", "msi-bpd screening", "bpd emotional dysregulation teens",
    "free bpd screening",
  ],
  openGraph: {
    title: "BPD Screening for Young Adults — Free MSI-BPD Test",
    description: "Free, private borderline personality disorder screening for young adults using the clinically validated MSI-BPD. Instant results, no sign-up.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Can you be diagnosed with BPD before age 18?",
    answer: "Yes, though historically clinicians were reluctant to apply the label to minors. The DSM-5 allows a borderline personality disorder assessment for individuals under 18 when the patterns are pervasive, persistent, and present for at least one year. Early identification improves outcomes significantly, because younger people tend to respond well to evidence-based approaches like dialectical behavior therapy (DBT). If you are under 18 and concerned about your emotional patterns, talking to a mental health professional is a worthwhile step.",
  },
  {
    question: "Is BPD just being emotional?",
    answer: "No. BPD involves a specific, persistent pattern of instability in relationships, self-image, and emotions, combined with impulsivity. Everyone experiences strong emotions sometimes, but BPD is characterized by emotional responses that are more intense, longer-lasting, and harder to return from than what most people experience. The emotional pain is real and has a neurological basis — brain imaging studies show differences in the areas that regulate emotion in people with BPD. It is not a character flaw or a choice.",
  },
  {
    question: "How is BPD different from normal young adult struggles?",
    answer: "It is normal for young adults to experience identity exploration, emotional ups and downs, and relationship challenges. The key differences with BPD are intensity and duration: emotional responses that are disproportionate to the situation and take much longer to recover from, a persistent pattern of unstable and intense relationships that cycle between idealization and devaluation, chronic feelings of emptiness rather than occasional boredom, and identity disturbance that goes beyond typical exploration into a fundamental uncertainty about who you are. If these patterns are pervasive and causing significant distress, screening is a reasonable next step.",
  },
  {
    question: "What causes BPD in young people?",
    answer: "BPD develops from a combination of factors, not a single cause. Genetic predisposition plays a role — BPD is approximately five times more common among first-degree biological relatives of those with the condition. Brain differences in the areas that regulate emotion and impulse control have been identified in research. Environmental factors matter too, including childhood adversity, trauma, neglect, and growing up in an emotionally invalidating environment. Most researchers describe it as a biologically sensitive temperament that interacts with environmental stressors. Understanding the causes is not about blame — it is about recognizing that BPD is a real condition with real, effective approaches for support.",
  },
  {
    question: "What is DBT and does it work for young adults?",
    answer: "Dialectical behavior therapy (DBT) was specifically developed to help people with BPD. It teaches four core skill sets: mindfulness (staying present), distress tolerance (getting through crises without making things worse), emotion regulation (understanding and managing intense emotions), and interpersonal effectiveness (navigating relationships and asking for what you need). Research consistently shows that DBT is effective for adolescents and young adults, often leading to significant reductions in self-harm, emotional instability, and relationship difficulties. Many colleges and community mental health centers now offer DBT programs or skills groups.",
  },
];

export default function BpdScreeningForYoungAdultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "BPD Screening for Young Adults — Free MSI-BPD Test",
              description: "A free, private borderline personality disorder screening tool for young adults using the clinically validated MSI-BPD questionnaire.",
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
              { name: "BPD Screening for Young Adults", url: TOOL_URL },
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
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
            Young Adults 18–25
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          BPD Screening for Young Adults
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            If you&apos;re a young adult and your emotions feel bigger, faster, and harder to manage
            than everyone else&apos;s — you&apos;re not imagining it. Maybe your relationships feel
            like they&apos;re always on the edge of falling apart. Maybe you go from feeling fine to
            completely overwhelmed in minutes. Maybe you&apos;re not sure who you really are underneath
            all the intensity. These experiences are real, they matter, and they deserve honest
            exploration — not dismissal as &quot;just being young.&quot;
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Borderline personality disorder often first emerges in the late teens and early twenties,
            right when you&apos;re navigating college, new relationships, first jobs, and figuring out
            who you are. This free, private screening uses the <strong>MSI-BPD</strong> (McLean
            Screening Instrument for Borderline Personality Disorder), a clinically validated tool
            designed to identify BPD patterns quickly and accurately. It is <strong>not a
            diagnosis</strong> — it&apos;s a starting point for understanding yourself better. No one
            sees your results but you.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold text-base hover:bg-purple-700 transition-colors shadow-sm"
          >
            Start the BPD Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 3 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">Onset: late teens to early 20s</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                BPD symptoms typically first appear in adolescence or early adulthood, often during
                major life transitions like starting college or gaining first independence. This is
                when the emotional patterns become most visible — and when early support can make the
                biggest difference.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">1.4% prevalence</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                An estimated 1.4% of the adult U.S. population meets criteria for BPD, but rates are
                higher in younger clinical populations. Many more experience significant borderline
                traits without meeting full criteria — and they can still benefit from skills-based
                support.
                <span className="text-slate-500 dark:text-slate-400"> — NIMH</span>
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-1">Often confused with normal development</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                The emotional intensity and identity struggles of BPD overlap with normal adolescent
                development, which frequently delays recognition and support. Young adults may spend
                years believing they are simply &quot;too sensitive&quot; or &quot;too much&quot;
                before learning there is a name for their experience — and effective help available.
                <span className="text-slate-500 dark:text-slate-400"> — Journal of Personality Disorders</span>
              </p>
            </div>
          </div>
        </div>

        {/* Understanding BPD in Young Adults */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Understanding BPD in Young Adults
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                Borderline personality disorder tends to emerge during late adolescence and early
                adulthood for reasons that make developmental sense. This is the period when identity
                formation is at its peak — you&apos;re separating from your family of origin,
                building your own relationships, facing new academic and career pressures, and trying
                to answer the fundamental question of who you are. For someone with a biological
                predisposition to emotional sensitivity, these transitions can overwhelm the coping
                strategies that may have worked in a more structured childhood environment. The
                result is often a pattern of intense emotional responses, unstable relationships,
                and an identity that feels fragmented or hollow.
              </p>
              <p>
                One of the biggest challenges for young adults with BPD is distinguishing their
                experience from what their peers are going through. Everyone in their late teens and
                early twenties deals with heartbreak, self-doubt, and emotional ups and downs. But
                BPD involves a level of intensity that is qualitatively different: emotions that
                spike rapidly and take hours or days to come down from, a sense of emptiness that
                goes beyond boredom, relationships that oscillate between deep connection and
                devastating conflict, and impulsive behaviors that provide momentary relief but
                create lasting consequences. If your emotional life consistently feels more extreme
                than what those around you seem to experience, that difference is worth exploring.
              </p>
              <p>
                The impact of unrecognized BPD on the typical milestones of young adulthood can be
                significant. In college, emotional dysregulation can make it difficult to maintain
                consistent academic performance, navigate roommate conflicts, or manage the
                unstructured time that university life requires. In relationships, the push-pull
                pattern of BPD — desperately wanting closeness while fearing abandonment — can
                create cycles of intensity that exhaust both partners. In early career settings,
                difficulty with authority figures, sensitivity to perceived criticism, and identity
                confusion about professional direction can make it hard to gain traction. These
                struggles are not personal failures — they are the predictable effects of a
                condition that has not yet been identified and addressed.
              </p>
              <p>
                The most important thing to know is that BPD is highly treatable, and younger people
                tend to respond particularly well to evidence-based approaches. Dialectical behavior
                therapy (DBT) was developed specifically for BPD and teaches concrete skills for
                managing intense emotions, tolerating distress, improving relationships, and staying
                present. Research consistently shows that with appropriate support, the majority of
                people with BPD experience significant improvement — many no longer meet diagnostic
                criteria after several years of consistent work. Early intervention means less time
                spent struggling without understanding why, fewer accumulated consequences, and a
                stronger foundation for the adult life you are building. Screening is not a
                diagnosis, but it is a meaningful first step toward clarity.
              </p>
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
            Answer each question honestly based on your experiences. There are no right or wrong answers.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is BPD Screening for Young Adults?</h2>
        <h2>How Is the BPD Screening Scored?</h2>
        <h2>What Do My BPD Screening Results Mean?</h2>
      </section>
<MSIBPDClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Track your patterns</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                For at least two weeks, keep a simple log of your mood shifts, relationship conflicts,
                and impulsive behaviors. Note what triggered each episode, how intense it was, and how
                long it took to return to baseline. Patterns become clearer on paper than they are in
                the moment — and this record will be valuable if you decide to talk to a professional.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to a campus or community counselor</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Many college counseling centers can screen for BPD and provide referrals for further
                assessment. If you are not in school, community mental health centers offer low-cost
                assessments. You do not need to have a crisis to reach out — wanting to understand your
                emotional patterns better is reason enough.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Learn about DBT skills</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Even before a formal assessment, DBT skills can help with emotional regulation. The
                four modules — mindfulness, distress tolerance, emotion regulation, and interpersonal
                effectiveness — offer practical tools for managing intensity. Many free resources,
                workbooks, and online courses are available. Learning these skills is useful whether
                or not you ultimately receive a BPD assessment.
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
            healthcare professional can assess borderline personality disorder. Your responses are processed
            entirely in your browser and are never stored or transmitted. Always consult a qualified healthcare
            professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026 by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/msi-bpd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            MSI-BPD Screening →
          </Link>
          <Link href="/bpd-test-for-women" className="text-sky-600 dark:text-sky-400 hover:underline">
            BPD Test for Women →
          </Link>
          <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline">
            DASS-21 Depression Anxiety Stress →
          </Link>
          <Link href="/attachment-style-quiz" className="text-sky-600 dark:text-sky-400 hover:underline">
            Attachment Style Quiz →
          </Link>
        </div>
      </div>
    </>
  );
}
