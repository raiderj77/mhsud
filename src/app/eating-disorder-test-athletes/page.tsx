import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SCOFFClient } from "../scoff-eating-disorder-screening/SCOFFClient";

const TOOL_URL = `${SITE_URL}/eating-disorder-test-athletes`;

export const metadata: Metadata = createMetadata({
  path: "/eating-disorder-test-athletes",
  title: "Eating Disorder Test for Athletes — Free Screen",
  description:
    "Free eating disorder screening for athletes using the SCOFF. Private, instant results.",
  keywords: [
    "eating disorder test athletes", "athlete eating disorder screening",
    "scoff test athletes", "RED-S screening", "female athlete triad test",
    "athlete body image test", "sports eating disorder quiz", "athlete body dysmorphia test",
    "disordered eating athletes", "athletic eating disorder screening",
    "eating disorder risk athletes", "sport nutrition screening",
    "athlete mental health test", "male athlete eating disorder", "free eating disorder test athletes",
  ],
  openGraph: {
    title: "Eating Disorder Test for Athletes — Free Screen",
    description: "Free, private eating disorder screening for athletes using the clinically validated SCOFF questionnaire. Instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Are athletes at higher risk for eating disorders?",
    answer: "Yes. Athletes are 2-3 times more likely to develop eating disorders compared to the general population. Sports that emphasize leanness, aesthetics, weight classes, or endurance carry the highest risk. The combination of performance pressure, body scrutiny, and the normalization of restrictive eating in athletic culture creates a uniquely high-risk environment.",
  },
  {
    question: "What is RED-S (Relative Energy Deficiency in Sport)?",
    answer: "RED-S is a syndrome caused by insufficient energy intake relative to the energy expended in exercise. It affects virtually every system in the body — hormonal function, bone health, immunity, cardiovascular health, and mental health. RED-S replaced the older concept of the Female Athlete Triad and applies to all athletes regardless of gender. It can occur even without a formal eating disorder diagnosis.",
  },
  {
    question: "Can an eating disorder actually affect my athletic performance?",
    answer: "Yes, significantly. While restrictive eating may appear to improve performance short-term in some sports, it consistently degrades performance over time. Effects include decreased strength and endurance, increased injury risk, impaired recovery, hormonal disruption, bone stress fractures, difficulty concentrating, and mood instability. Many athletes perform significantly better after recovery.",
  },
  {
    question: "Which sports have the highest rates of eating disorders?",
    answer: "Aesthetic sports (gymnastics, figure skating, diving, dance), weight-class sports (wrestling, boxing, rowing, martial arts), and endurance sports (distance running, cycling, triathlon) carry the highest risk. However, eating disorders occur in every sport. Any environment that emphasizes body weight, shape, or composition as a performance variable increases risk.",
  },
  {
    question: "When does healthy training and diet become disordered eating?",
    answer: "The line between disciplined eating and disordered eating can be blurry in athletic culture. Warning signs include: rigid food rules that cause anxiety when broken, eliminating entire food groups without medical reason, exercising beyond what training requires to compensate for eating, weighing yourself multiple times daily, feeling guilty or anxious after meals, and hiding eating behaviors from teammates or coaches.",
  },
  {
    question: "Should I talk to my coach about my eating concerns?",
    answer: "This depends on your relationship with your coach and whether they have training in athlete mental health. Some coaches are supportive and can connect you with sports dietitians and psychologists. Others may inadvertently reinforce disordered eating through comments about weight or body composition. If you do not feel safe talking to your coach, reach out to a sports medicine physician, athletic trainer, or the National Alliance for Eating Disorders helpline instead.",
  },
  {
    question: "Do male athletes get eating disorders too?",
    answer: "Yes. Male athletes are significantly underrecognized and underdiagnosed. Eating disorders in male athletes may present differently — focusing on muscularity rather than thinness, or involving excessive protein intake, supplement abuse, or muscle dysmorphia. The stigma around eating disorders in men is a major barrier to recognition and treatment. An estimated 33% of athletes with eating disorders are male.",
  },
  {
    question: "Where can athletes get help for eating disorders?",
    answer: "Start with the National Alliance for Eating Disorders Helpline (1-866-662-1235) for free guidance and referrals. Look for professionals who specialize in both eating disorders and sports — a sports dietitian and a therapist experienced with athlete populations are ideal. Many college athletic departments have sports psychologists and dietitians available. The key is finding providers who understand that recovery does not mean giving up sport.",
  },
];

export default function EatingDisorderTestAthletesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Eating Disorder Test for Athletes — Free Screen",
              description: "A free, private eating disorder screening tool for athletes using the clinically validated SCOFF questionnaire.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-03-05",
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
              { name: "SCOFF Eating Disorder Screening", url: `${SITE_URL}/scoff-eating-disorder-screening` },
              { name: "Eating Disorder Test for Athletes", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (SCOFF)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
            Athletes
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Eating Disorder Test for Athletes
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You have always been disciplined about your body. That&apos;s what athletes do —
            you train harder, eat cleaner, push past limits that would stop most people. But
            somewhere along the way, the discipline became something else. Counting every
            calorie stopped being about performance and started being about control. Skipping
            meals before weigh-ins became skipping meals all the time. The voice in your head
            that used to say &quot;train harder&quot; now says &quot;you&apos;re not lean
            enough, not light enough, not good enough.&quot; And you keep going because
            that&apos;s what athletes do — until your body starts breaking down in ways you
            cannot ignore.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Athletes are 2-3 times more likely to develop eating disorders than the general
            population, yet athletic culture often normalizes the very behaviors that signal
            a problem. This free, private screening uses the <strong>SCOFF questionnaire</strong>,
            a validated clinical tool. It is <strong>not a diagnosis</strong>, but it can help
            you honestly evaluate whether your relationship with food and your body has
            crossed a line — and what to do about it without sacrificing the sport you love.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold text-base hover:bg-emerald-700 transition-colors shadow-sm"
          >
            Start the Eating Disorder Screening
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
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">2–3x higher prevalence</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Athletes develop eating disorders at 2–3 times the rate of the general
                population. In some sports, prevalence rates exceed 30%. Athletic culture
                often normalizes behaviors that would be recognized as disordered in other
                contexts.
                <span className="text-slate-500 dark:text-slate-400"> — British Journal of Sports Medicine</span>
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">RED-S &amp; Female Athlete Triad</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Relative Energy Deficiency in Sport (RED-S) affects hormones, bone health,
                immunity, cardiovascular function, and mental health. The Female Athlete Triad —
                low energy availability, menstrual dysfunction, and bone loss — remains a
                critical concern. Both conditions can have lasting health consequences.
                <span className="text-slate-500 dark:text-slate-400"> — IOC Consensus Statement</span>
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">Male athletes underrecognized</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                An estimated 33% of athletes with eating disorders are male, yet they are
                far less likely to be screened, identified, or offered treatment. Eating
                disorders in male athletes may focus on muscularity rather than thinness,
                making them harder to recognize.
                <span className="text-slate-500 dark:text-slate-400"> — National Eating Disorders Association</span>
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
                This screening uses the <strong>SCOFF questionnaire</strong>, a brief, validated
                tool used by healthcare professionals to identify potential eating disorders.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Aesthetic vs. weight-class vs. endurance sports:</strong> Different sports create different risk profiles. Aesthetic sports (gymnastics, figure skating, dance) emphasize appearance. Weight-class sports (wrestling, boxing, rowing) incentivize rapid weight manipulation. Endurance sports (distance running, cycling) reward low body weight. Each creates unique pressures, but the underlying dynamic is the same — your body becomes a variable to control.</p>
                <p><strong>Performance pressure:</strong> Athletes often believe that thinner or lighter means faster or better. While body composition does affect performance in some sports, the pursuit of an &quot;ideal&quot; body often crosses into territory that actually degrades performance through fatigue, injury, and hormonal disruption.</p>
                <p><strong>Coaching influence:</strong> Coaches who comment on athletes&apos; weight, body shape, or eating habits — even casually — can trigger or reinforce disordered eating. Research shows that a single comment from a coach about weight can be a precipitating factor. Good coaching focuses on performance behaviors, not body composition.</p>
                <p><strong>Body composition monitoring risks:</strong> Regular weigh-ins, body fat testing, and physique evaluations can become triggers for athletes predisposed to eating disorders. While some monitoring has a place in elite sport, it should always be conducted by qualified professionals with appropriate context and support.</p>
                <p><strong>&quot;Clean eating&quot; becoming disordered:</strong> In athletic culture, obsessive focus on eating &quot;clean&quot; or &quot;pure&quot; foods can evolve into orthorexia — a fixation on food quality that becomes restrictive and anxiety-driven. When food rules create distress, social isolation, or nutritional deficiency, the eating pattern has become disordered regardless of how &quot;healthy&quot; it appears.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is stored, transmitted, or visible to your coach, teammates, or anyone else.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the SCOFF Eating Disorder Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question honestly based on your current relationship with food and your body.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Athlete Eating Disorder Screening?</h2>
        <h2>How Is the Eating Disorder Test Scored?</h2>
        <h2>What Do My Eating Disorder Results Mean?</h2>
      </section>
<SCOFFClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Call the eating disorders helpline</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>National Alliance for Eating Disorders: 1-866-662-1235</strong> — free,
                confidential guidance and referrals. They can help you find providers who
                specialize in athletes, which is important because recovery in sport requires
                understanding both the eating disorder and the athletic context.
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">See a sports dietitian</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                A registered dietitian who specializes in sports nutrition can help you
                develop an eating plan that supports both your athletic performance and
                your health. They understand that &quot;eat more&quot; is not helpful advice
                without a plan. Look for the CSSD (Certified Specialist in Sports Dietetics)
                credential.
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk to someone who gets it</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                An athletic trainer, sports psychologist, or trusted teammate can be a good
                starting point. Many college athletic departments have mental health resources
                specifically for athletes. Recovery does not mean giving up your sport — many
                athletes compete at even higher levels after addressing disordered eating.
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
            <li>
              <strong>National Alliance for Eating Disorders:</strong> <strong>1-866-662-1235</strong> — free guidance and referrals
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess eating disorders or related conditions. Your responses are
            processed entirely in your browser and are never stored or transmitted. Always consult a
            qualified healthcare professional for medical advice.
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
          <Link href="/scoff-eating-disorder-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
            SCOFF Eating Disorder Screening →
          </Link>
          <Link href="/mental-load-calculator" className="text-sky-600 dark:text-sky-400 hover:underline">
            Mental Load Calculator →
          </Link>
          <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline">
            DASS-21 Depression, Anxiety &amp; Stress →
          </Link>
        </div>
      </div>
    </>
  );
}
