import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/eating-disorder-signs`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "eating-disorder-signs")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/eating-disorder-signs",
  title: "Eating Disorders: Types, Signs & Screening",
  description:
    "Learn about eating disorder types, warning signs, who is at risk, and how the SCOFF screening tool works. Includes helpline resources.",
  keywords: [
    "eating disorder signs", "eating disorder types", "anorexia signs",
    "bulimia signs", "binge eating disorder", "SCOFF screening",
    "eating disorder screening", "eating disorder warning signs",
    "eating disorder risk factors", "ARFID", "eating disorder recovery",
    "eating disorder helpline", "eating disorder prevalence",
    "eating disorder mental health",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  { question: "Can men have eating disorders?", answer: "Yes. Eating disorders affect people of all genders. Research suggests that approximately one in three people with an eating disorder is male. Men may be underdiagnosed because of stereotypes that frame eating disorders as conditions that only affect women. Men may also present with different symptoms, such as excessive exercise or a focus on muscularity rather than thinness." },
  { question: "Is binge eating disorder real?", answer: "Yes. Binge eating disorder (BED) is a clinically recognized condition and the most common eating disorder in the United States. It involves recurring episodes of eating large amounts of food in a short period while feeling a loss of control. BED is associated with significant emotional distress and physical health consequences, and it responds to evidence-based treatment." },
  { question: "What's the difference between dieting and an eating disorder?", answer: "Dieting typically involves making conscious food choices with some flexibility. An eating disorder involves persistent patterns of disordered eating that cause significant distress, impair daily functioning, and feel difficult or impossible to control. Warning signs include obsessive calorie counting, rigid food rules, intense fear of weight gain, withdrawal from social eating, and continued restriction despite negative health effects." },
  { question: "Are eating disorders genetic?", answer: "Research indicates that genetics play a significant role in eating disorder risk. Studies of twins suggest that 40-60% of the risk for anorexia nervosa, bulimia nervosa, and binge eating disorder may be attributable to genetic factors. However, genetics alone do not cause eating disorders — environmental factors, psychological traits, and life experiences also contribute." },
  { question: "Can you recover from an eating disorder?", answer: "Yes. Recovery from an eating disorder is possible with appropriate support. Research shows that with evidence-based treatment, many people achieve full recovery. Early intervention improves outcomes significantly. Treatment often involves a combination of therapy, nutritional counseling, medical monitoring, and sometimes medication. Recovery timelines vary, and setbacks are a normal part of the process." },
];

export default function EatingDisorderSignsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Understanding Eating Disorders: Types, Signs & Screening", description: "Learn about eating disorder types, warning signs, who is at risk, and how the SCOFF screening tool works. Includes helpline resources.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Eating Disorder Signs", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Understanding Eating Disorders: Types, Signs &amp; Screening
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Eating disorders are serious, clinically recognized conditions that affect millions of people across every demographic. Understanding the types, warning signs, and screening options is a critical first step toward getting help. This guide covers what you need to know in plain language.
          </p>
          <div className="mt-6">
            <Link href="/scoff-eating-disorder-screening" className="btn-primary text-sm">
              Take the SCOFF Screening Self-Check →
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Types of Eating Disorders</h2>
            <p>
              Eating disorders are not a single condition. They encompass several distinct patterns of disordered eating, each with its own characteristics. Understanding the differences can help you recognize warning signs in yourself or someone you care about.
            </p>
            <p>
              <strong>Anorexia nervosa</strong> involves persistent restriction of food intake leading to significantly low body weight, an intense fear of gaining weight, and a distorted perception of body shape or size. People with anorexia may not recognize the severity of their low weight, even when it poses serious medical risks.
            </p>
            <p>
              <strong>Bulimia nervosa</strong> is characterized by recurring episodes of binge eating followed by compensatory behaviors such as self-induced vomiting, misuse of laxatives or diuretics, fasting, or excessive exercise. People with bulimia often maintain a weight that appears within a typical range, which can make the condition less visible to others.
            </p>
            <p>
              <strong>Binge eating disorder (BED)</strong> is the most common eating disorder in the United States. It involves recurring episodes of eating large quantities of food in a short period while feeling a loss of control. Unlike bulimia, BED does not involve regular compensatory behaviors. It is associated with significant emotional distress, including shame, guilt, and depression.
            </p>
            <p>
              <strong>Avoidant/restrictive food intake disorder (ARFID)</strong> involves significant restriction of food intake — not driven by body image concerns, but by sensory sensitivity, fear of choking or vomiting, or a general lack of interest in eating. ARFID can lead to nutritional deficiencies and impaired growth in children.
            </p>
            <p>
              <strong>Other specified feeding or eating disorder (OSFED)</strong> includes clinically significant eating disorder presentations that do not meet the full criteria for anorexia, bulimia, or BED. OSFED is not a &quot;less serious&quot; category — it can be equally dangerous and equally deserving of treatment.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How Common Are Eating Disorders?</h2>
            <p>
              Eating disorders are far more prevalent than many people realize. Research estimates that approximately 9% of the U.S. population — roughly 28.8 million Americans — will have an eating disorder at some point in their lifetime. These conditions contribute to an estimated 10,200 deaths per year in the United States, making them among the most lethal mental health conditions.
            </p>
            <p>
              Eating disorders have the highest mortality rate of any mental illness after opioid use disorder. This statistic underscores why early screening and intervention are so important. The sooner someone receives appropriate support, the better their chances of recovery.
            </p>
          </section>

          <section>
            <h2>Warning Signs by Type</h2>
            <p>
              Recognizing eating disorder warning signs can be difficult because many behaviors may initially appear as &quot;healthy&quot; choices. Here are patterns to watch for:
            </p>
            <p>
              <strong>Signs that may indicate anorexia nervosa:</strong> dramatic weight loss, wearing loose or layered clothing to hide body changes, rigid food rules or elimination of entire food groups, excessive exercise regardless of weather or injury, denial of hunger, difficulty eating in social settings, and frequent body-checking behaviors.
            </p>
            <p>
              <strong>Signs that may indicate bulimia nervosa:</strong> evidence of binge eating such as large amounts of food disappearing, frequent trips to the bathroom after meals, swelling around the jaw or cheeks, damaged teeth or dental problems, calluses on knuckles, and fluctuations in weight.
            </p>
            <p>
              <strong>Signs that may indicate binge eating disorder:</strong> eating unusually large amounts of food in a defined period, eating rapidly or past the point of fullness, eating alone due to embarrassment, hoarding or hiding food, and expressing shame or distress about eating patterns.
            </p>
            <p>
              <strong>General warning signs across all types:</strong> preoccupation with food, calories, or body size; withdrawal from friends and activities; mood changes around mealtimes; gastrointestinal complaints; feeling cold frequently; dizziness or fainting; and disrupted menstrual cycles.
            </p>
          </section>

          <section>
            <h2>Who Is at Risk?</h2>
            <p>
              One of the most harmful myths about eating disorders is that they only affect young, white women. In reality, eating disorders occur across all demographics — every age, gender, race, ethnicity, body size, and socioeconomic background.
            </p>
            <p>
              Research shows that people of color are at least as likely to develop eating disorders as white individuals, yet they are significantly less likely to be screened, diagnosed, or referred for treatment. Men account for an estimated one-third of eating disorder cases but are frequently overlooked due to persistent stereotypes. Eating disorders also affect older adults, children, LGBTQ+ individuals, and people in larger bodies who may not &quot;look like&quot; they have an eating disorder.
            </p>
            <p>
              Risk factors include a family history of eating disorders or other mental health conditions, a personal history of dieting or weight-related bullying, perfectionism and high-achieving personality traits, participation in sports or professions that emphasize body size or appearance, and exposure to trauma or adverse childhood experiences.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Physical Health Consequences</h2>
            <p>
              Eating disorders affect virtually every organ system in the body. Cardiovascular complications include dangerously low heart rate, low blood pressure, heart arrhythmias, and in severe cases, heart failure. Gastrointestinal problems such as gastroparesis, constipation, and esophageal tears are common.
            </p>
            <p>
              Bone density loss (osteoporosis) can occur even in young people, increasing fracture risk. Hormonal disruptions may cause menstrual irregularity or loss, infertility, and impaired growth in adolescents. Kidney damage, electrolyte imbalances, anemia, and weakened immune function are also well-documented consequences.
            </p>
            <p>
              These physical effects can become life-threatening, which is why medical monitoring is a critical component of eating disorder treatment.
            </p>
          </section>

          <section>
            <h2>Mental Health Comorbidities</h2>
            <p>
              Eating disorders rarely occur in isolation. They frequently co-occur with other mental health conditions, which can complicate both recognition and recovery. Common comorbidities include <Link href="/phq-9-depression-test">depression</Link>, anxiety disorders, obsessive-compulsive disorder (OCD), post-traumatic stress disorder (PTSD), and substance use disorders.
            </p>
            <p>
              Research suggests that up to 50% of people with eating disorders also meet criteria for a mood disorder, and approximately 25-50% have co-occurring substance use concerns. These overlapping conditions can reinforce each other — for example, someone may restrict food to manage anxiety or binge eat to cope with depression. Effective treatment addresses the full picture, not just the eating behaviors.
            </p>
          </section>

          <section>
            <h2>The SCOFF Questionnaire: A Quick Screening Tool</h2>
            <p>
              The SCOFF questionnaire is a brief, five-question screening tool developed to help identify people who may have an eating disorder. The name is an acronym based on the five questions, which ask about making yourself <strong>S</strong>ick (vomiting), losing <strong>C</strong>ontrol over eating, losing more than <strong>O</strong>ne stone (14 pounds) in a three-month period, believing you are <strong>F</strong>at when others say you are thin, and whether <strong>F</strong>ood dominates your life.
            </p>
            <p>
              A score of 2 or more &quot;yes&quot; answers may indicate a possible eating disorder and suggests further evaluation is warranted. The SCOFF is a screening tool — not a clinical assessment. It cannot tell you whether you have an eating disorder, but it can help you recognize patterns worth discussing with a healthcare provider.
            </p>
            <p>
              You can take the <Link href="/scoff-eating-disorder-screening">SCOFF screening self-check</Link> on our site. It is free, private, and your answers never leave your browser.
            </p>
          </section>

          <section>
            <h2>Why Early Detection Matters</h2>
            <p>
              Early intervention significantly improves outcomes for eating disorders. Research consistently shows that the shorter the duration of illness before treatment begins, the better the prognosis. Conversely, the longer an eating disorder goes untreated, the more entrenched the behaviors become and the greater the risk of serious medical complications.
            </p>
            <p>
              Given that eating disorders carry the highest mortality rate of any mental illness after opioid use disorder, there is an urgent need for accessible screening and education. Many people live with eating disorders for years before receiving help — sometimes because they do not recognize their own symptoms, and sometimes because healthcare providers fail to screen for these conditions, especially in populations that do not fit the stereotype.
            </p>
          </section>

          <section>
            <h2>Recovery Is Possible</h2>
            <p>
              It is important to emphasize that recovery from an eating disorder is achievable. With evidence-based treatment, many people go on to live full, healthy lives. Recovery is not always linear — setbacks are a normal part of the process — but sustained improvement is the rule, not the exception, when appropriate support is in place.
            </p>
          </section>

          <section>
            <h2>Treatment Options</h2>
            <p>
              Effective eating disorder treatment typically involves a multidisciplinary approach. <strong>Therapy</strong> — including cognitive behavioral therapy (CBT), dialectical behavior therapy (DBT), and family-based treatment (FBT) — is the cornerstone of most treatment plans. <strong>Nutritional counseling</strong> helps rebuild a healthy relationship with food and address nutritional deficiencies.
            </p>
            <p>
              <strong>Medical monitoring</strong> is essential, especially for individuals with severe symptoms or medical complications. <strong>Medication</strong> may be used to address co-occurring conditions such as depression or anxiety. In more severe cases, higher levels of care — including intensive outpatient programs, residential treatment, or inpatient hospitalization — may be necessary.
            </p>
            <p>
              If you or someone you know may be struggling with disordered eating, reaching out to a healthcare provider or helpline is a strong first step. The{" "}
              <a href="https://www.allianceforeatingdisorders.com" target="_blank" rel="noopener noreferrer">
                National Alliance for Eating Disorders
              </a>{" "}
              offers support, referrals, and information. You can also learn more about eating disorders through the{" "}
              <a href="https://www.nimh.nih.gov/health/topics/eating-disorders" target="_blank" rel="noopener noreferrer">
                NIMH eating disorders page
              </a>.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Take the SCOFF Eating Disorder Screening</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 1 minute. Your answers never leave your browser.</p>
            <Link href="/scoff-eating-disorder-screening" className="btn-primary text-sm">Take the SCOFF Self-Check</Link>
          </div>

          {/* Clinical Disclaimer */}
          <div className="card p-5 bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800 not-prose text-xs text-neutral-500 dark:text-neutral-400 space-y-2 mt-8">
            <p className="font-semibold text-neutral-700 dark:text-neutral-300">Important Disclaimer</p>
            <p>
              This article is for educational purposes only and is not a substitute for professional medical advice, clinical assessment, or treatment. The information provided here is a screening resource — it does not offer a diagnosis or treatment plan. If you are concerned about your eating behaviors or those of someone you know, please consult a qualified healthcare provider.
            </p>
            <p>
              <strong>Crisis Resources:</strong><br />
              SAMHSA National Helpline: <strong>1-800-662-4357</strong> (free, confidential, 24/7)<br />
              988 Suicide &amp; Crisis Lifeline: Call or text <strong>988</strong><br />
              National Alliance for Eating Disorders Helpline: <strong>1-866-662-1235</strong>
            </p>
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
              <Link href="/scoff-eating-disorder-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">SCOFF Eating Disorder Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick 5-question eating disorder self-check</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for depressive symptoms in 2 minutes</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-ocd-looks-like" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What OCD Actually Looks Like</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Common misconceptions and real-world signs</p>
              </Link>
              <Link href="/blog/phq-9-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How clinicians use and interpret depression scores</p>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
