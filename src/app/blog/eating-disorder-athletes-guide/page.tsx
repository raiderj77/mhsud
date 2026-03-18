import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/eating-disorder-athletes-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "eating-disorder-athletes-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/eating-disorder-athletes-guide",
  title: "Eating Disorders in Athletes: The Risks Behind the Performance",
  description:
    "Athletes face 2-3x higher risk for eating disorders. Learn about RED-S, sport-specific risk factors, male underscreening, and how confidential screening helps.",
  keywords: [
    "eating disorders in athletes",
    "athlete eating disorder",
    "relative energy deficiency in sport",
    "RED-S",
    "eating disorder test athletes",
    "sports eating disorder screening",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How common are eating disorders in athletes?",
    answer:
      "Athletes are 2\u20133 times more likely to develop eating disorders than the general population. Aesthetic sports report 13\u201347% prevalence, weight-class sports 15\u201330%, and endurance sports 15\u201325%. These numbers likely underestimate true prevalence because athletes underreport symptoms due to performance culture.",
  },
  {
    question: "What is RED-S (Relative Energy Deficiency in Sport)?",
    answer:
      "RED-S is a syndrome caused by insufficient caloric intake relative to exercise expenditure. It replaces the older \u201cfemale athlete triad\u201d concept because it affects all genders. RED-S impairs bone health, metabolic rate, immunity, cardiovascular health, and psychological well-being. Any chronically under-fueled athlete is at risk.",
  },
  {
    question: "Can male athletes have eating disorders?",
    answer:
      "Yes. An estimated 33% of athletes with eating disorders are male, but they are significantly underscreened. Male athletes face pressure to \u201cmake weight\u201d and manipulate body composition. Screening tools developed for female populations may miss male presentations, which often focus on muscularity rather than thinness.",
  },
  {
    question: "How should coaches address eating concerns?",
    answer:
      "Coaches should never comment on weight, body shape, or food choices. If disordered eating is suspected, express concern privately, focus on observable behaviors like declining performance and fatigue, and refer to the athletic trainer or team physician. Avoid weight-related ultimatums and examine team culture around weigh-ins.",
  },
];

export default function EatingDisorderAthletesGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Eating Disorders in Athletes: The Risks Behind the Performance", description: "Athletes face 2-3x higher risk for eating disorders. Learn about RED-S, sport-specific risk factors, and how screening helps.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Eating Disorders in Athletes Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Eating Disorders in Athletes: The Risks Behind the Performance
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Athletes are 2&ndash;3 times more likely to develop eating disorders than the general population. The very traits that make someone a successful athlete &mdash; discipline, perfectionism, willingness to endure discomfort, and responsiveness to coaching &mdash; are the same traits that increase vulnerability to disordered eating. In competitive sports culture, behaviors that would raise immediate alarm in other contexts &mdash; rigid food rules, excessive exercise, obsessive body monitoring &mdash; are often praised as dedication.
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
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
            </p>
          </div>

          <section>
            <h2>Which sports carry the highest risk?</h2>
            <p>
              While eating disorders can develop in any sport, certain categories carry significantly elevated risk:
            </p>
            <ul>
              <li><strong>Aesthetic sports:</strong> Gymnastics, figure skating, diving, dance, and cheerleading. These sports are judged partly on appearance, creating direct pressure to maintain a specific body type. Prevalence rates range from 13&ndash;47% depending on the study and competitive level</li>
              <li><strong>Weight-class sports:</strong> Wrestling, boxing, judo, rowing, and mixed martial arts. Athletes routinely engage in &quot;cutting weight&quot; &mdash; rapid weight loss before competition through dehydration, food restriction, and purging. These practices normalize disordered eating behaviors and can trigger lasting eating disorders</li>
              <li><strong>Endurance sports:</strong> Distance running, cycling, triathlon, and cross-country skiing. The emphasis on power-to-weight ratio and the belief that lighter means faster drives chronic under-fueling. Prevalence rates of 15&ndash;25% are consistently reported</li>
              <li><strong>Gravitational sports:</strong> High jump, pole vault, and ski jumping, where lower body weight provides a mechanical advantage</li>
            </ul>
            <p>
              The common thread is any sport where leanness or low body weight is perceived &mdash; correctly or incorrectly &mdash; to enhance performance. This perception creates an environment where restricting food intake feels like a training strategy rather than a health risk.
            </p>
          </section>

          <section>
            <h2>Understanding RED-S: Relative Energy Deficiency in Sport</h2>
            <p>
              RED-S (Relative Energy Deficiency in Sport) is a syndrome that occurs when an athlete&apos;s energy intake is insufficient relative to their training expenditure. It replaces the older concept of the &quot;female athlete triad&quot; (disordered eating, amenorrhea, bone loss) because research now shows that energy deficiency affects all genders and has far broader consequences than the triad model captured.
            </p>
            <p>
              RED-S affects virtually every system in the body:
            </p>
            <ul>
              <li><strong>Bone health:</strong> Low energy availability reduces bone mineral density, increasing stress fracture risk &mdash; the most common warning sign that prompts medical evaluation</li>
              <li><strong>Menstrual function:</strong> In female athletes, amenorrhea (loss of periods) or oligomenorrhea (irregular periods) signals insufficient energy to support reproductive function. This is not &quot;normal for athletes&quot; &mdash; it is a clinical red flag</li>
              <li><strong>Metabolic suppression:</strong> The body reduces metabolic rate to conserve energy, which paradoxically impairs training adaptation and performance</li>
              <li><strong>Immune function:</strong> Underfueled athletes get sick more often and take longer to recover</li>
              <li><strong>Cardiovascular health:</strong> Chronic energy deficiency can cause bradycardia (dangerously low heart rate), low blood pressure, and in severe cases, cardiac arrhythmias</li>
              <li><strong>Psychological effects:</strong> Depression, anxiety, irritability, impaired concentration, and disordered eating behaviors are both causes and consequences of RED-S</li>
            </ul>
            <p>
              RED-S can occur even without a formal eating disorder. Any athlete who chronically under-eats relative to their training demands &mdash; whether intentionally or through inadequate nutritional knowledge &mdash; is at risk.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Warning signs in athletes</h2>
            <p>
              Disordered eating in athletes often hides behind the language of performance. Behaviors that would raise concern in other contexts are frequently reframed as discipline, commitment, or competitive edge. Warning signs include:
            </p>
            <ul>
              <li><strong>Rigid food rules</strong> that go beyond legitimate sports nutrition &mdash; eliminating entire food groups, refusing to eat anything not self-prepared, or anxiety around uncontrolled eating situations</li>
              <li><strong>Excessive exercise beyond training requirements</strong> &mdash; secret extra workouts, inability to take rest days, exercising through injury</li>
              <li><strong>Body checking behaviors</strong> &mdash; frequent weighing, pinching skin, measuring body parts, comparing physique to teammates</li>
              <li><strong>Menstrual irregularity or loss</strong> in female athletes &mdash; this is never &quot;just because of training&quot;</li>
              <li><strong>Recurrent stress fractures</strong> &mdash; may indicate chronic energy deficiency affecting bone density</li>
              <li><strong>Declining performance paradoxically</strong> &mdash; training harder while eating less leads to performance decline, which is then attributed to not trying hard enough, prompting more restriction</li>
              <li><strong>Social withdrawal</strong> around meals &mdash; avoiding team dinners, eating alone, making excuses to skip shared meals</li>
              <li><strong>Preoccupation with weight or body composition</strong> that extends beyond sport-relevant performance metrics</li>
              <li><strong>Using laxatives, diuretics, or diet pills</strong> to manage weight</li>
              <li><strong>Wearing baggy clothing</strong> to hide body changes or compensate for body dissatisfaction</li>
            </ul>
          </section>

          <section>
            <h2>How performance culture enables disordered eating</h2>
            <p>
              The sports environment creates several conditions that enable and reinforce disordered eating patterns:
            </p>
            <ul>
              <li><strong>Weigh-ins:</strong> Regular team weigh-ins create anxiety and incentivize rapid weight manipulation rather than healthy nutrition. Research consistently shows that weigh-ins increase disordered eating risk</li>
              <li><strong>Body fat testing:</strong> Using body composition metrics as performance indicators sends the message that changing body shape is a training variable, which it should not be</li>
              <li><strong>Coach comments:</strong> Even well-intentioned comments about weight, body shape, or food choices from coaches carry enormous power. A single comment can trigger lasting dietary restriction</li>
              <li><strong>Teammate modeling:</strong> When senior athletes model restrictive eating or weight manipulation, younger athletes internalize these behaviors as &quot;what it takes to compete at this level&quot;</li>
              <li><strong>Reward structures:</strong> Athletes who lose weight and perform well in the short term receive positive reinforcement for behavior that is damaging long-term health</li>
              <li><strong>Normalization:</strong> When an entire team or sport culture engages in restrictive practices, no individual behavior seems abnormal</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Male athletes: the underscreened population</h2>
            <p>
              An estimated 33% of athletes with eating disorders are male, but they are significantly less likely to be identified, screened, or referred for treatment. Several factors contribute to this gap:
            </p>
            <ul>
              <li><strong>Stereotypes:</strong> Eating disorders are still widely perceived as a &quot;female problem,&quot; leading coaches, trainers, and athletes themselves to overlook signs in male athletes</li>
              <li><strong>Different presentation:</strong> Male athletes are more likely to focus on muscularity and body composition rather than thinness. Behaviors like excessive protein supplementation, extreme muscle definition goals, and compulsive exercise may not be recognized as disordered</li>
              <li><strong>Screening tools:</strong> Many eating disorder screening instruments were developed and validated primarily with female populations. Questions about &quot;wanting to be thinner&quot; may not capture the male experience of wanting to be &quot;more cut&quot; or leaner at the same weight</li>
              <li><strong>Stigma:</strong> Male athletes face additional stigma around acknowledging any eating-related concern, compounding the already significant barrier to help-seeking in competitive sports</li>
              <li><strong>Weight-class normalization:</strong> In wrestling, boxing, and MMA, extreme weight manipulation is so normalized that clinically significant behaviors are treated as standard practice</li>
            </ul>
          </section>

          <section>
            <h2>How the MindCheck Tools eating disorder screening for athletes helps</h2>
            <p>
              The <Link href="/eating-disorder-test-athletes" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools eating disorder screening for athletes</Link> is a free, private assessment that accounts for the unique context of competitive sport. It takes under five minutes, runs entirely in your browser, and requires no account or login.
            </p>
            <p>
              The screening helps identify patterns that competitive culture may normalize &mdash; rigid food rules, exercise beyond training, body preoccupation, and compensatory behaviors. Because sport culture makes it especially difficult to see your own behavior clearly, a structured screening provides an outside perspective grounded in clinical evidence rather than the distorted norms of your training environment.
            </p>
            <p>
              If your screening results suggest concern, the next step is connecting with a healthcare provider who has experience working with athletes. Sports-specialized dietitians and therapists understand the intersection of performance goals and eating disorder risk in ways that general practitioners may not.
            </p>
          </section>

          <section>
            <h2>What coaches, parents, and teammates should know</h2>
            <p>
              If you are concerned about an athlete, the following guidelines reflect current best practices:
            </p>
            <ul>
              <li><strong>Never comment on an athlete&apos;s weight, body shape, or food choices</strong> &mdash; even positively (&quot;you look lean&quot; reinforces the idea that appearance matters)</li>
              <li><strong>Focus on observable behaviors</strong> when expressing concern: declining performance, fatigue, frequent injuries, mood changes, social withdrawal around meals</li>
              <li><strong>Refer to the athletic trainer or team physician</strong> rather than attempting to counsel the athlete yourself</li>
              <li><strong>Eliminate team weigh-ins and body fat testing</strong> unless medically indicated and conducted by qualified professionals</li>
              <li><strong>Provide access to sports nutrition education</strong> that emphasizes fueling for performance rather than weight management</li>
              <li><strong>Create a culture where rest and adequate nutrition are valued</strong> as performance strategies, not signs of weakness</li>
              <li><strong>Share the <Link href="/eating-disorder-test-athletes" className="text-sage-600 dark:text-sage-400 underline">athlete eating disorder screening</Link></strong> as a private, non-confrontational resource</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>When to seek professional help</h2>
            <p>Seek evaluation from a healthcare provider experienced with athletes if:</p>
            <ul>
              <li>Eating patterns are rigid, secretive, or causing significant anxiety</li>
              <li>Menstrual periods have stopped or become irregular (female athletes)</li>
              <li>Stress fractures have occurred, especially more than once</li>
              <li>Performance is declining despite increased training</li>
              <li>Weight manipulation is occurring outside of structured sports nutrition guidance</li>
              <li>Exercise feels compulsive rather than enjoyable &mdash; missing a workout causes intense distress</li>
              <li>Thoughts about food, weight, or body shape are consuming significant mental energy</li>
            </ul>
            <p>
              Eating disorders have the highest mortality rate of any mental health condition. Early identification and intervention dramatically improve outcomes. A screening does not replace professional evaluation, but it can be the moment when an athlete first recognizes that what competitive culture has normalized is actually a pattern that deserves attention.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check in on your relationship with food and exercise</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/eating-disorder-test-athletes" className="btn-primary text-sm">Athlete Eating Disorder Screening</Link>
              <Link href="/scoff-eating-disorder-screening" className="btn-primary text-sm">SCOFF Screening</Link>
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
              <Link href="/eating-disorder-test-athletes" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Athlete Eating Disorder Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Sport-specific eating disorder assessment</p>
              </Link>
              <Link href="/scoff-eating-disorder-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">SCOFF Eating Disorder Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick 5-question eating disorder screen</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Standard validated depression screening</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/eating-disorder-signs" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Eating Disorder Signs</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">General warning signs of eating disorders</p>
              </Link>
              <Link href="/blog/depression-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">PHQ-9 assessment and what results mean</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
