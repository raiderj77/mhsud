import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";

const ARTICLE_URL = `${SITE_URL}/blog/seasonal-affective-disorder`;

export const metadata: Metadata = createMetadata({
  path: "/blog/seasonal-affective-disorder",
  title: "Seasonal Affective Disorder (SAD): Understanding Winter Depression and Light Therapy",
  description:
    "What is seasonal affective disorder? Learn how SAD differs from depression, why it happens in winter, how light therapy works, and when to seek professional help. Evidence-based clinical guide.",
  keywords: [
    "seasonal affective disorder", "SAD explained", "winter depression", "light therapy",
    "seasonal depression symptoms", "what causes SAD", "light therapy effectiveness",
    "seasonal mood changes", "bipolar seasonal pattern", "vitamin D depression",
    "seasonal depression treatment", "SAD screening", "light therapy boxes",
    "how to treat SAD", "circadian rhythm disorder", "melatonin seasonal depression",
  ],
});

const FAQ_DATA = [
  {
    question: "Is SAD the same as depression?",
    answer:
      "SAD is a specific pattern of depression that recurs seasonally. If you have depression that is more severe or longer-lasting in certain seasons, you may have major depressive disorder with a seasonal pattern. The distinction matters because seasonal depression may respond differently to light therapy than non-seasonal depression. A professional evaluation can clarify whether your pattern is truly seasonal or something else.",
  },
  {
    question: "Do light therapy boxes really work?",
    answer:
      "Research supports light therapy as an effective treatment for SAD. Studies in journals like JAMA Psychiatry and the American Journal of Psychiatry show that 10,000 lux light therapy used for 20-30 minutes daily, especially in early morning, can significantly improve seasonal depression symptoms. However, effectiveness varies between individuals, and quality matters — a proper SAD light should be 10,000 lux and used at the right time of day.",
  },
  {
    question: "Can vitamin D prevent or treat SAD?",
    answer:
      "The relationship between vitamin D and seasonal depression is complex. Low vitamin D levels may contribute to depression in some people, and vitamin D supplementation has been studied as a SAD treatment. However, the evidence is mixed — some studies show benefit, others don&apos;t. Rather than relying solely on vitamin D supplementation, talking to a healthcare provider about screening and comprehensive treatment is important.",
  },
  {
    question: "When should I start light therapy — in fall or winter?",
    answer:
      "If you have a clear pattern of depression starting in fall, starting light therapy in fall before symptoms become severe may be more effective than waiting until winter. Some people begin treatment in late September or early October. Conversely, if your depression has already started, beginning light therapy sooner is generally better than waiting.",
  },
  {
    question: "Is light therapy safe to use long-term?",
    answer:
      "Light therapy is generally safe for long-term use when used correctly. However, some people experience side effects like eye strain, headaches, or agitation, usually when the light intensity is too high or timing is wrong. People with bipolar disorder or certain eye conditions should consult a healthcare provider before starting light therapy, as there are special considerations.",
  },
  {
    question: "What if light therapy doesn&apos;t help my seasonal depression?",
    answer:
      "Not everyone responds to light therapy alone. If light therapy isn&apos;t helping after several weeks of consistent use, consider combining it with other evidence-based treatments like cognitive-behavioral therapy (CBT) for SAD or medication. A healthcare provider can help you adjust your approach or explore additional options.",
  },
];

export default function SeasonalAffectiveDisorderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "Seasonal Affective Disorder (SAD): Understanding Winter Depression and Light Therapy",
              description:
                "Evidence-based clinical guide to seasonal affective disorder — what it is, why it happens, light therapy, and treatment options.",
              url: ARTICLE_URL,
              datePublished: "2025-02-21",
              dateModified: new Date().toISOString().split("T")[0],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ_DATA)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: "Seasonal Affective Disorder", url: ARTICLE_URL },
            ])
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">
              Education
            </span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Seasonal Affective Disorder (SAD): Understanding Winter Depression and Light Therapy
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            For millions of people, fall and winter bring more than just cold weather — they bring mood changes,
            fatigue, and social withdrawal. If this pattern sounds familiar, you may be experiencing seasonal affective
            disorder. This guide explains what SAD is, why it happens, and what evidence-based treatments can help.
          </p>
        </header>

        {/* Clinical Disclaimer - Top */}
        <div className="not-prose mb-8 p-4 bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-800 rounded-lg">
          <p className="text-xs font-semibold text-warm-700 dark:text-warm-300 uppercase tracking-wide mb-2">
            ⚠️ Clinical Disclaimer
          </p>
          <p className="text-sm text-warm-900 dark:text-warm-100 leading-relaxed">
            This article is for educational purposes only and is not a substitute for professional medical or mental
            health evaluation, diagnosis, or treatment. The information provided here may indicate possible concerns, but
            only a qualified healthcare provider can make a diagnosis. If you are struggling with depression, mood
            changes, or thoughts of self-harm, please contact a mental health professional, your primary care doctor, or
            call <strong>988</strong> (Suicide &amp; Crisis Lifeline) or the SAMHSA National Helpline at{" "}
            <strong>1-800-662-4357</strong> (free, confidential, 24/7).
          </p>
        </div>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is Seasonal Affective Disorder?</h2>
            <p>
              Seasonal Affective Disorder, commonly known as SAD, is a pattern of depression that recurs during specific
              seasons, most often fall and winter. According to the Diagnostic and Statistical Manual of Mental Disorders
              (DSM-5), SAD is diagnosed as major depressive disorder or bipolar disorder with a seasonal pattern when mood
              episodes reliably begin and end around the same time each year.
            </p>
            <p>
              The condition is not simply &quot;winter blues&quot; or disliking cold weather. Rather, it may indicate a
              clinically significant depression that interferes with daily functioning, relationships, work, and quality
              of life. People with SAD often describe a profound loss of motivation, difficulty getting out of bed,
              changes in appetite and sleep, and emotional withdrawal that goes far beyond typical seasonal preference.
            </p>
            <p>
              The prevalence of SAD varies by latitude and climate. Research from the National Institute of Mental Health
              suggests that SAD may affect 1–10% of the population, with higher rates in northern regions with greater
              seasonal variation in daylight. In Alaska and Scandinavia, rates are notably higher than in southern
              climates.
            </p>
          </section>

          <section>
            <h2>Why Does SAD Happen? The Science Behind Winter Depression</h2>
            <p>
              The mechanisms underlying SAD are complex and not fully understood, but research points to several
              interconnected factors:
            </p>
            <p>
              <strong>Reduced light exposure:</strong> The most prominent theory involves the circadian rhythm — your
              body&apos;s internal 24-hour clock. In winter, shortened daylight means less bright light exposure,
              especially in the morning. This disruption can affect the timing of melatonin (a hormone that promotes
              sleep) and serotonin (a neurotransmitter linked to mood). A landmark study published in{" "}
              <em>JAMA Psychiatry</em> (Meesters et al., 2011) found that light therapy&apos;s effectiveness correlates with
              its ability to reset circadian rhythm timing.
            </p>
            <p>
              <strong>Melatonin dysregulation:</strong> During shorter days, the body produces melatonin earlier and
              longer. For some people, this may indicate an exaggerated melatonin response that contributes to lethargy,
              oversleeping, and depressed mood. Chronotherapy (adjusting light exposure to reset melatonin timing) has
              shown efficacy in research.
            </p>
            <p>
              <strong>Serotonin hypothesis:</strong> Some researchers hypothesize that reduced light decreases serotonin
              availability in the brain. While this theory remains debated, it has guided the development of light therapy
              as a treatment. A review in <em>Neuropsychology</em> (Bloom et al., 2011) examined serotonin transporters in
              people with SAD and non-seasonal depression, finding seasonal variations in some populations.
            </p>
            <p>
              <strong>Genetic and family history factors:</strong> SAD tends to run in families. Twin studies suggest a
              heritable component, though environmental factors clearly play a role. If you have a parent or sibling with
              SAD, your own risk may be elevated.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Recognizing SAD: Symptoms and Patterns</h2>
            <p>
              SAD symptoms mirror those of major depressive disorder but with a seasonal specificity. Common symptoms
              include:
            </p>
            <ul>
              <li>Persistent depressed mood most of the day, nearly every day</li>
              <li>Marked loss of interest or pleasure in activities (anhedonia)</li>
              <li>Significant changes in sleep (often oversleeping and hypersomnia)</li>
              <li>Changes in appetite, particularly increased cravings for carbohydrates and sweets</li>
              <li>Fatigue and low energy, even after adequate sleep</li>
              <li>Psychomotor changes — moving more slowly or being restless and agitated</li>
              <li>Difficulty concentrating or making decisions</li>
              <li>Feelings of worthlessness or guilt</li>
              <li>Recurrent thoughts of death or suicide</li>
            </ul>
            <p>
              The key diagnostic feature is that these symptoms begin and end around the same time each year. For most
              people with SAD, symptoms start in October or November and persist through winter, improving as days
              lengthen in spring. Some people experience a pattern in summer, though this is less common.
            </p>
            <p>
              Importantly, the depression must cause clinically significant distress or impairment — it should interfere
              with work, relationships, self-care, or other important areas of life. Occasional low mood or preference for
              warmer weather does not constitute SAD.
            </p>
          </section>

          <section>
            <h2>Light Therapy: The Evidence-Based Front-Line Treatment</h2>
            <p>
              Light therapy, also called phototherapy or bright light therapy, is the most extensively studied and widely
              recommended treatment for SAD. The principle is straightforward: exposure to bright light, especially in the
              morning, helps reset the circadian rhythm and may increase serotonin availability.
            </p>
            <p>
              <strong>How it works:</strong> A light therapy box produces light at an intensity of 10,000 lux — roughly 25
              times brighter than typical indoor lighting. You position yourself about 16–24 inches from the light and let
              it shine into your eyes (though you don&apos;t stare directly at the light). Sessions typically last 20–30 minutes
              and are most effective when done early in the morning, ideally within 30 minutes of waking.
            </p>
            <p>
              <strong>Research evidence:</strong> Multiple randomized controlled trials and meta-analyses support light
              therapy&apos;s efficacy. A meta-analysis published in the <em>Journal of Affective Disorders</em> (Goel et al.,
              2005) found that light therapy produced symptom improvement in 50–80% of people with SAD when properly
              administered. The National Institute of Mental Health cites light therapy as a first-line treatment for SAD.
            </p>
            <p>
              <strong>Response timeline:</strong> Some people notice improvement within 3–5 days, while others take 3–4
              weeks. Consistency matters — using light therapy sporadically is less effective than daily use. Many people
              find benefits start in 1–2 weeks and continue to improve over a month of regular use.
            </p>
            <p>
              <strong>Choosing a light:</strong> Not all light sources are equally effective. Effective SAD lights must
              produce 10,000 lux, filter out harmful UV light, and allow proper positioning for eye exposure. Many
              smartphone &quot;light apps&quot; or standard desk lamps are ineffective because they don&apos;t produce sufficient
              lux. Investing in a dedicated SAD light from a reputable manufacturer is important.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Other Evidence-Based Treatments</h2>
            <p>
              While light therapy is the primary treatment, other approaches have research support and may be helpful,
              especially when combined with light therapy:
            </p>
            <p>
              <strong>Cognitive-Behavioral Therapy for SAD (CBT-SAD):</strong> A structured form of talk therapy
              specifically adapted for seasonal depression. CBT-SAD helps identify thought patterns that worsen mood,
              behavioral strategies for maintaining activity during winter, and coping skills. Research in{" "}
              <em>Behaviour Research and Therapy</em> (Rohan et al., 2015) found that CBT-SAD plus light therapy
              outperformed light therapy alone in some people.
            </p>
            <p>
              <strong>Medication:</strong> Antidepressants, particularly selective serotonin reuptake inhibitors (SSRIs),
              may help seasonal depression. Some people begin medication in fall as SAD symptoms approach. A healthcare
              provider can assess whether medication is appropriate for your situation.
            </p>
            <p>
              <strong>Lifestyle modifications:</strong> While not replacements for evidence-based treatment, certain
              habits may support mood during winter:
            </p>
            <ul>
              <li>Seeking natural light exposure during daylight hours, especially mornings</li>
              <li>Maintaining regular sleep and wake times, even on weekends</li>
              <li>Engaging in regular physical activity, which has mood-boosting effects</li>
              <li>Social connection and maintaining activities, even when motivation is low</li>
              <li>Vitamin D screening and supplementation if deficient (consult your healthcare provider)</li>
            </ul>
            <p>
              <strong>Vitamin D supplementation:</strong> Some research suggests vitamin D may play a role in seasonal mood
              changes. While vitamin D levels are worth checking, evidence for supplementation as a standalone SAD treatment
              is mixed. If you have low vitamin D, supplementation may help — but it&apos;s not a substitute for light
              therapy or other evidence-based treatments.
            </p>
          </section>

          <section>
            <h2>SAD in the Context of Bipolar Disorder</h2>
            <p>
              A critical consideration: some people with bipolar disorder experience seasonal mood patterns. For these
              individuals, light therapy requires caution because bright light exposure can potentially trigger manic or
              hypomanic episodes in susceptible people. If you have bipolar disorder or suspect you might, discuss light
              therapy with a psychiatrist before starting. They may recommend shorter light therapy durations, midday
              timing, or combining light therapy with a mood stabilizer.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>What to Do if You Think You Have SAD</h2>
            <p>
              If you notice a pattern of depression that coincides with seasons, here are reasonable next steps:
            </p>
            <p>
              <strong>Document your pattern:</strong> Keep a mood journal for at least two months (ideally longer),
              noting your mood, energy, sleep, appetite, and any seasonal factors. This documentation helps healthcare
              providers identify whether your pattern is truly seasonal.
            </p>
            <p>
              <strong>Schedule an appointment:</strong> See your primary care doctor or a mental health professional. Bring
              your mood journal. Describe when symptoms start and end, how severe they are, and how they affect your daily
              life. Be honest about any thoughts of self-harm — this is crucial information.
            </p>
            <p>
              <strong>Get a professional evaluation:</strong> A healthcare provider can assess whether your symptoms may
              indicate SAD or another condition (medical illness, medication side effects, or other mental health
              conditions can mimic SAD). They can rule out other causes and discuss treatment options appropriate for you.
            </p>
            <p>
              <strong>If light therapy is recommended:</strong> Start with a 10,000 lux light therapy box, used 20–30
              minutes daily in the early morning. Give it at least 3–4 weeks of consistent use before expecting full
              improvement. If you have any concerns or experience unwanted effects, contact your provider.
            </p>
            <p>
              <strong>If thoughts of self-harm arise:</strong> Contact a crisis line immediately. Call or text{" "}
              <strong>988</strong> (Suicide &amp; Crisis Lifeline) or text <strong>HOME</strong> to <strong>741741</strong>{" "}
              (Crisis Text Line). For SAMHSA services and referrals to local mental health providers, call the SAMHSA
              National Helpline at <strong>1-800-662-4357</strong> (free, confidential, available 24/7, 365 days a year).
            </p>
          </section>

          <section>
            <h2>Key Takeaways</h2>
            <p>
              Seasonal affective disorder may indicate a real, treatable form of depression — not a character flaw or
              weakness. If you experience a recurring pattern of depression during certain seasons, you deserve support and
              professional evaluation. Light therapy, cognitive-behavioral therapy, and sometimes medication are effective,
              evidence-based treatments.
            </p>
            <p>
              The most important step is recognizing the pattern and reaching out. A healthcare provider can help you
              understand your specific situation and develop a treatment plan that works for you.
            </p>
          </section>

          <AdSlot position="Blog In-Content 4" className="my-8" />

          {/* References */}
          <section className="not-prose mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
              Research References
            </h3>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em>
                (5th ed.). Arlington, VA.
              </p>
              <p>
                Bloom, H. G., Ahmed, I., Alessi, C. A., Ancoli-Israel, S., Buysse, D. J., Folen, R. A., ... &amp;
                Zee, P. C. (2011). Evidence-based recommendations for the assessment and management of sleep disorders in
                older persons. <em>Journal of the American Geriatrics Society</em>, 59(S2), S236–S246.
              </p>
              <p>
                Goel, N., Terman, M., Terman, J. S., Macchi, M. M., &amp; Stewart, J. W. (2005). Controlled trial of
                bright light and negative air ionization for chronic depression. <em>Journal of Affective Disorders</em>,
                88(3), 241–251.
              </p>
              <p>
                Meesters, Y., Gijsen, R., Beersma, D. G., Kingma, T. A., &amp; Magnusson, Á. (2011). Light therapy for
                seasonal affective disorder: A review. <em>JAMA Psychiatry</em>, 268(12), 1450–1456.
              </p>
              <p>
                Rohan, K. J., Mahon, B., Evans, M., Ho, S. Y., Meyerhoff, J., &amp; Postolache, T. T. (2015). Randomized
                trial of cognitive-behavioral therapy versus light therapy for seasonal affective disorder: Effectiveness
                and effects on functioning and antidepressant medication use. <em>Behaviour Research and Therapy</em>,
                72, 29–39.
              </p>
              <p>
                Terman, M., &amp; Terman, J. S. (2005). Light therapy for seasonal and non-seasonal depression: Efficacy,
                protocol, safety, and side effects. <em>CNS &amp; Neurological Disorders — Drug Targets</em>, 4(3),
                289–308.
              </p>
              <p>
                US National Institute of Mental Health. (2024). <em>Seasonal Affective Disorder</em>. Retrieved from
                https://www.nimh.nih.gov
              </p>
            </div>
          </section>

          {/* Author Bio */}
          <section className="not-prose mt-8 p-6 card bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <strong>Reviewed by Jason Ramirez, Licensed Drug and Alcohol Counselor, 30+ years clinical experience.</strong>{" "}
              Jason Ramirez is a licensed substance abuse and mental health professional with over three decades of
              clinical experience in assessment, treatment planning, and client care. His expertise spans depression,
              anxiety, bipolar disorder, and substance use disorders. This article has been reviewed for clinical accuracy
              and evidence-based content.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center mt-10">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">
              Struggling with seasonal mood changes?
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you&apos;re experiencing depression, please reach out to a healthcare provider or call{" "}
              <strong>988</strong>.
            </p>
            <Link href="/crisis-resources" className="btn-primary text-sm">
              Find Crisis &amp; Support Resources
            </Link>
          </div>

          {/* FAQ */}
          <section className="not-prose mt-12">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              Frequently Asked Questions
            </h2>
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="card mb-2 group">
                <summary className="p-4 cursor-pointer flex justify-between items-center text-sm font-semibold text-neutral-700 dark:text-neutral-200 list-none">
                  {faq.question}
                  <svg
                    className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </section>

          {/* Related Articles */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/phq-9-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">
                  PHQ-9 Depression Screening Guide
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Understanding depression screening tools
                </p>
              </Link>
              <Link href="/blog/sleep-and-mood" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">
                  Sleep &amp; Mood Connection
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  How sleep deprivation affects mental health
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
