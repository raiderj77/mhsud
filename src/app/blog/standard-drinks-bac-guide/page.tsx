import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/standard-drinks-bac-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "standard-drinks-bac-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/standard-drinks-bac-guide",
  title: "Standard Drinks and BAC: What You Need to Know About Alcohol Measurement",
  description:
    "Learn what a standard drink is (14 grams of pure alcohol), how BAC is calculated, common misconceptions about drink sizes, and NIAAA low-risk drinking guidelines.",
  keywords: [
    "standard drink",
    "blood alcohol calculator",
    "BAC levels",
    "what is a standard drink",
    "alcohol measurement",
    "how many drinks is too many",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How many standard drinks are in a bottle of wine?",
    answer:
      "A standard 750 mL bottle of wine at 12% ABV contains approximately five standard drinks. Many wines today range from 13\u201315% ABV, which increases that to six or more. This is why home pours and restaurant bottles often deliver more alcohol than expected. Use our standard drinks calculator for a precise count.",
  },
  {
    question: "How long does it take for one standard drink to leave your system?",
    answer:
      "The body metabolizes approximately one standard drink per hour, though this varies by weight, sex, and liver function. Four drinks typically require four to five hours to clear. Nothing speeds this process \u2014 not coffee, cold showers, or exercise. Only time allows your body to metabolize alcohol.",
  },
  {
    question: "Is there a safe level of alcohol consumption?",
    answer:
      "The NIAAA defines low-risk guidelines but emphasizes these are not \u201csafe\u201d limits. The WHO states no level of alcohol is completely without risk. Individual factors like family history, medications, and health conditions influence personal risk. Speak with a healthcare provider about what level, if any, is appropriate for you.",
  },
  {
    question: "Why do women reach higher BAC levels than men?",
    answer:
      "Women generally have a higher proportion of body fat and lower body water than men, so alcohol becomes more concentrated. Women also produce less alcohol dehydrogenase, the enzyme that breaks down alcohol in the stomach. These biological differences mean the same number of drinks has greater impact, which is why NIAAA sets different thresholds for men and women.",
  },
];

export default function StandardDrinksBacGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Standard Drinks and BAC: What You Need to Know About Alcohol Measurement", description: "Learn what a standard drink is, how BAC is calculated, and NIAAA low-risk drinking guidelines.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Standard Drinks & BAC Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">{POST_DATA.readTime}</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Standard Drinks and BAC: What You Need to Know About Alcohol Measurement
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            A standard drink contains 14 grams of pure alcohol &mdash; but most people significantly underestimate how much alcohol is in the beverages they consume. Understanding standard drink sizes and blood alcohol concentration (BAC) can help you make more informed decisions about alcohol use and recognize when drinking patterns may be moving into higher-risk territory.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/standard-drinks-calculator" className="btn-primary text-sm">Standard Drinks Calculator</Link>
            <Link href="/bac-calculator" className="btn-secondary text-sm">BAC Calculator</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              <strong>Clinical Disclaimer:</strong> This article is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment. The information here reflects general guidelines and research findings that may not apply to your specific situation. If you are concerned about your alcohol use, please consult a qualified healthcare provider.
            </p>
          </div>

          <section>
            <h2>What Is a Standard Drink?</h2>
            <p>
              According to the{" "}
              <a href="https://www.niaaa.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">
                National Institute on Alcohol Abuse and Alcoholism (NIAAA)
              </a>
              , a standard drink in the United States contains approximately 14 grams (0.6 fluid ounces) of pure alcohol. This is the reference point used by researchers and healthcare providers to quantify alcohol consumption in a consistent, comparable way.
            </p>
            <p>
              One standard drink is equivalent to any of the following:
            </p>
            <ul>
              <li><strong>12 ounces of regular beer</strong> at approximately 5% ABV (alcohol by volume)</li>
              <li><strong>5 ounces of wine</strong> at approximately 12% ABV</li>
              <li><strong>1.5 ounces of distilled spirits</strong> (vodka, whiskey, rum, gin) at approximately 40% ABV (80 proof)</li>
            </ul>
            <p>
              These equivalencies matter because they allow you to compare very different beverages on equal footing. A glass of wine, a can of beer, and a shot of whiskey all contain roughly the same amount of pure alcohol when measured at these standard sizes and concentrations. Our{" "}
              <Link href="/standard-drinks-calculator" className="text-sage-600 dark:text-sage-400 underline">standard drinks calculator</Link>{" "}
              can help you determine exactly how many standard drinks are in any beverage based on its size and ABV.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Why Most People Underestimate Their Alcohol Intake</h2>
            <p>
              One of the most common misconceptions about alcohol is that &quot;one drink&quot; always equals one standard drink. In reality, the drinks people pour at home, order at bars, or purchase at stores frequently contain significantly more alcohol than a single standard drink.
            </p>
            <p>
              <strong>Craft beers</strong> are a prime example. While a standard beer is defined at 5% ABV, many popular craft beers range from 7% to 12% ABV. A 16-ounce pint of a 9% ABV IPA contains nearly three standard drinks &mdash; not one. Many people count this as a single beer without realizing the actual alcohol content.
            </p>
            <p>
              <strong>Wine pours</strong> at restaurants are often 6 to 8 ounces rather than the standard 5-ounce serving. A generous 8-ounce pour of 14% ABV wine contains nearly two standard drinks. At home, without a measured pour, servings tend to be even larger.
            </p>
            <p>
              <strong>Cocktails</strong> frequently contain two to three standard drinks in a single glass. A margarita, Long Island iced tea, or old fashioned made with a heavy pour can easily deliver 2.5 or more standard drinks. Use our{" "}
              <Link href="/standard-drinks-calculator" className="text-sage-600 dark:text-sage-400 underline">standard drinks calculator</Link>{" "}
              to see the actual alcohol content of what you&apos;re drinking.
            </p>
          </section>

          <section>
            <h2>Understanding Blood Alcohol Concentration (BAC)</h2>
            <p>
              Blood alcohol concentration (BAC) measures the percentage of alcohol in your bloodstream. It is the standard metric used by law enforcement, healthcare providers, and researchers to quantify intoxication. BAC is expressed as a percentage &mdash; for example, a BAC of 0.08% means there are 0.08 grams of alcohol per 100 milliliters of blood.
            </p>
            <p>
              BAC levels produce predictable physiological and cognitive effects at different thresholds:
            </p>
            <ul>
              <li><strong>0.02%:</strong> Mild relaxation, slight warmth, some loss of judgment. Most people feel slightly relaxed but show minimal outward impairment.</li>
              <li><strong>0.05%:</strong> Lowered alertness, impaired judgment, reduced inhibitions. Coordination begins to decline and reaction times slow.</li>
              <li><strong>0.08%:</strong> The legal limit for driving in all 50 U.S. states. At this level, muscle coordination is significantly impaired, judgment is poor, and reaction time is substantially slowed.</li>
              <li><strong>0.15%:</strong> Significant impairment in all areas. Balance, speech, and vision are noticeably affected. Risk of injury from falls and accidents is high.</li>
              <li><strong>0.30% and above:</strong> Life-threatening territory. Loss of consciousness, suppressed breathing, and risk of alcohol poisoning are serious concerns. This is a medical emergency.</li>
            </ul>
            <p>
              Our{" "}
              <Link href="/bac-calculator" className="text-sage-600 dark:text-sage-400 underline">BAC calculator</Link>{" "}
              provides an estimate of your blood alcohol concentration based on your weight, biological sex, number of drinks, and time spent drinking. While no calculator can replace a breathalyzer or blood test, it offers a useful approximation for understanding how alcohol may be affecting you.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What Factors Affect Your BAC?</h2>
            <p>
              Two people can consume the same number of drinks over the same period and reach very different BAC levels. Several biological and behavioral factors influence how quickly alcohol enters your bloodstream and how efficiently your body metabolizes it.
            </p>
            <ul>
              <li><strong>Body weight:</strong> A person who weighs more generally has more body water to dilute alcohol, resulting in a lower BAC compared to a lighter person drinking the same amount.</li>
              <li><strong>Biological sex:</strong> Women typically reach higher BAC levels than men after consuming the same amount of alcohol, even at similar body weights. This is due to differences in body composition and enzyme activity (see FAQ below for details).</li>
              <li><strong>Food consumption:</strong> Drinking on an empty stomach allows alcohol to be absorbed much more rapidly. Food &mdash; especially protein and fat &mdash; slows absorption and reduces peak BAC.</li>
              <li><strong>Rate of drinking:</strong> Consuming multiple drinks quickly overwhelms the liver&apos;s ability to metabolize alcohol (roughly one standard drink per hour), causing BAC to rise rapidly.</li>
              <li><strong>Medications:</strong> Many common medications interact with alcohol, either intensifying its effects or slowing its metabolism. Always check medication labels and consult with a pharmacist or healthcare provider.</li>
            </ul>
            <p>
              Try our{" "}
              <Link href="/bac-calculator" className="text-sage-600 dark:text-sage-400 underline">BAC calculator</Link>{" "}
              to see how these factors may influence your estimated blood alcohol concentration.
            </p>
          </section>

          <section>
            <h2>NIAAA Low-Risk Drinking Guidelines</h2>
            <p>
              The NIAAA defines low-risk drinking limits that research suggests are associated with a lower probability of developing alcohol-related problems:
            </p>
            <ul>
              <li><strong>For men:</strong> No more than 4 standard drinks on any single day <em>and</em> no more than 14 standard drinks per week</li>
              <li><strong>For women:</strong> No more than 3 standard drinks on any single day <em>and</em> no more than 7 standard drinks per week</li>
            </ul>
            <p>
              It is important to understand that these are guidelines, not &quot;safe&quot; limits. About 2 in 100 people who drink within these limits still develop alcohol use disorder. The guidelines also do not apply to certain populations &mdash; including people who are pregnant, taking medications that interact with alcohol, have a history of alcohol use disorder, or have certain medical conditions.
            </p>
            <p>
              Research from the NIAAA indicates that roughly 37% of people who exceed these limits will develop alcohol-related problems at some point. By contrast, only about 2% of people who stay within these limits develop such problems. The difference is substantial, which is why understanding what actually constitutes a standard drink matters so much.
            </p>
          </section>

          <section>
            <h2>When to Seek Further Assessment</h2>
            <p>
              If you regularly exceed the NIAAA&apos;s low-risk guidelines, or if you find it difficult to stay within them, it may be worth completing a more comprehensive screening. The{" "}
              <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT alcohol screening</Link>{" "}
              is a 10-question assessment developed by the World Health Organization that evaluates alcohol consumption patterns, dependence symptoms, and alcohol-related harm. It is used by healthcare providers worldwide and takes about three minutes to complete.
            </p>
            <p>
              For a shorter initial screen, the{" "}
              <Link href="/audit-c-alcohol-screen" className="text-sage-600 dark:text-sage-400 underline">AUDIT-C</Link>{" "}
              uses just three questions focused on consumption patterns. A positive screen on the AUDIT-C (scores of 4 or higher for men, 3 or higher for women) suggests further evaluation may be helpful.
            </p>
            <p>
              These screenings are not diagnostic tools. They indicate whether your drinking patterns may warrant a conversation with a healthcare provider who can offer personalized guidance. All screening results on MindCheck Tools are processed entirely in your browser and are never stored or transmitted.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
              If you or someone you know is struggling with alcohol use or experiencing a mental health crisis, help is available:
            </p>
            <ul className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed space-y-1">
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong></li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Know What You&apos;re Drinking</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Calculate the actual alcohol content of your beverages or estimate your BAC. Free, private, and your data never leaves your browser.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/standard-drinks-calculator" className="btn-primary text-sm">Standard Drinks Calculator</Link>
              <Link href="/bac-calculator" className="btn-primary text-sm">BAC Calculator</Link>
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
                <div className="px-4 pb-4"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </section>

          {/* Related Tools */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/standard-drinks-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Standard Drinks Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Calculate the actual number of standard drinks in any beverage</p>
              </Link>
              <Link href="/bac-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">BAC Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Estimate your blood alcohol concentration based on your drinks</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-developed 10-question alcohol risk assessment</p>
              </Link>
              <Link href="/audit-c-alcohol-screen" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT-C Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick 3-question alcohol consumption screen</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/audit-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How the AUDIT works and what the risk zones mean</p>
              </Link>
              <Link href="/blog/what-is-alcohol-use-disorder" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Is Alcohol Use Disorder?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Symptoms, risk factors, and evidence-based treatments for AUD</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
