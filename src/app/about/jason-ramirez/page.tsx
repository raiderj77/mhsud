import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/about/jason-ramirez",
  title: "Jason Ramirez, CADC-II — Clinical Reviewer",
  description:
    "Jason Ramirez is a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience who reviews all screening tools and educational content on MindCheck Tools.",
  keywords: [
    "Jason Ramirez CADC-II",
    "certified drug and alcohol counselor",
    "mental health clinical reviewer",
    "substance use counselor",
    "MindCheck Tools reviewer",
  ],
});

function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jason Ramirez, CADC-II",
    jobTitle: "Certified Drug and Alcohol Counselor",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      name: "CADC-II",
    },
    sameAs: ["https://linkedin.com/in/jason-ramirez-cadc"],
    url: `${SITE_URL}/about/jason-ramirez`,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    description:
      "Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience in substance use and mental health counseling. Clinical reviewer for MindCheck Tools.",
  };
}

const REVIEWED_TOOLS = [
  { name: "PHQ-9 Depression Test", href: "/phq-9-depression-test" },
  { name: "GAD-7 Anxiety Test", href: "/gad-7-anxiety-test" },
  { name: "AUDIT Alcohol Use Screen", href: "/audit-alcohol-test" },
  { name: "AUDIT-C Quick Alcohol Screen", href: "/audit-c-alcohol-screen" },
  { name: "DAST-10 Drug Screening", href: "/dast-10-drug-screening" },
  { name: "CAGE-AID Substance Use Screen", href: "/cage-aid-substance-abuse-screening" },
  { name: "PCL-5 PTSD Screening", href: "/pcl-5-ptsd-screening" },
  { name: "PC-PTSD-5 PTSD Screen", href: "/pc-ptsd-5-screening" },
  { name: "ASRS ADHD Screening", href: "/asrs-adhd-screening" },
  { name: "MDQ Bipolar Screening", href: "/mdq-bipolar-screening" },
  { name: "OCI-R OCD Screening", href: "/oci-r-ocd-screening" },
  { name: "DASS-21 Depression/Anxiety/Stress", href: "/dass-21-depression-anxiety-stress" },
  { name: "WHO-5 Well-Being Index", href: "/who-5-wellbeing-index" },
  { name: "K6 Psychological Distress Scale", href: "/k6-distress-scale" },
  { name: "SPIN Social Anxiety Test", href: "/spin-social-anxiety-test" },
  { name: "SCOFF Eating Disorder Screen", href: "/scoff-eating-disorder-screening" },
  { name: "AQ-10 Autism Spectrum Screen", href: "/aq-10-autism-screening" },
  { name: "MSI-BPD Screening", href: "/msi-bpd-screening" },
  { name: "ACE Questionnaire", href: "/ace-questionnaire" },
  { name: "WHO ASSIST Substance Screening", href: "/who-assist-substance-screening" },
  { name: "CRAFFT Screening for Teens", href: "/crafft-substance-screening" },
  { name: "CES-D Depression Scale", href: "/ces-d-depression-scale" },
  { name: "Holmes-Rahe Stress Inventory", href: "/holmes-rahe-stress-inventory" },
  { name: "Rosenberg Self-Esteem Scale", href: "/rosenberg-self-esteem-scale" },
  { name: "UCLA Loneliness Scale", href: "/ucla-loneliness-scale" },
  { name: "Athens Insomnia Scale", href: "/athens-insomnia-scale" },
  { name: "Brief Resilience Scale", href: "/brief-resilience-scale" },
  { name: "Perceived Stress Scale", href: "/perceived-stress-scale" },
  { name: "Attachment Style Quiz", href: "/attachment-style-quiz" },
  { name: "Big Five Personality Test", href: "/big-five-personality-test" },
];

const REVIEWED_ARTICLES = [
  { name: "What Is Depression?", href: "/blog/what-is-depression" },
  { name: "What Is Anxiety?", href: "/blog/what-is-anxiety" },
  { name: "What Is Generalized Anxiety Disorder?", href: "/blog/what-is-generalized-anxiety-disorder" },
  { name: "What Is PTSD?", href: "/blog/what-is-ptsd" },
  { name: "What Is Alcohol Use Disorder?", href: "/blog/what-is-alcohol-use-disorder" },
  { name: "What Is ADHD in Adults?", href: "/blog/what-is-adhd-in-adults" },
  { name: "What Is Bipolar Disorder?", href: "/blog/what-is-bipolar-disorder" },
  { name: "What Is OCD?", href: "/blog/what-is-ocd" },
  { name: "What Is Social Anxiety Disorder?", href: "/blog/what-is-social-anxiety-disorder" },
  { name: "What Are Substance Use Disorders?", href: "/blog/what-are-substance-use-disorders" },
  { name: "Depression vs Anxiety", href: "/blog/depression-vs-anxiety" },
  { name: "Anxiety vs Panic Attacks", href: "/blog/anxiety-vs-panic-attacks" },
  { name: "PHQ-9 Score Guide", href: "/blog/what-does-phq-9-score-mean" },
  { name: "GAD-7 Score Guide", href: "/blog/what-does-gad-7-score-mean" },
  { name: "AUDIT Score Guide", href: "/blog/what-does-audit-score-mean" },
  { name: "PCL-5 Score Guide", href: "/blog/what-does-pcl-5-score-mean" },
  { name: "ASRS Score Guide", href: "/blog/what-does-asrs-score-mean" },
  { name: "DASS-21 Score Guide", href: "/blog/what-does-dass-21-score-mean" },
  { name: "MDQ Score Guide", href: "/blog/what-does-mdq-score-mean" },
  { name: "DAST-10 Score Guide", href: "/blog/what-does-dast-10-score-mean" },
  { name: "OCI-R Score Guide", href: "/blog/what-does-oci-r-score-mean" },
  { name: "ACE Score Guide", href: "/blog/what-does-ace-score-mean" },
  { name: "PC-PTSD-5 Score Guide", href: "/blog/what-does-pc-ptsd-5-score-mean" },
  { name: "CAGE-AID Score Guide", href: "/blog/what-does-cage-aid-score-mean" },
  { name: "PSS Score Guide", href: "/blog/what-does-pss-score-mean" },
  { name: "Rosenberg Self-Esteem Score Guide", href: "/blog/what-does-rosenberg-self-esteem-score-mean" },
  { name: "PHQ-9 vs GAD-7", href: "/blog/phq-9-vs-gad-7" },
  { name: "When Should I See a Therapist?", href: "/blog/when-should-i-see-a-therapist" },
  { name: "How to Find a Therapist", href: "/blog/how-to-find-a-therapist" },
  { name: "How to Talk to Your Doctor About Mental Health", href: "/blog/how-to-talk-to-doctor-about-mental-health" },
  { name: "Mental Health and Sleep", href: "/blog/mental-health-and-sleep" },
  { name: "Mental Health Stigma", href: "/blog/mental-health-stigma" },
  { name: "How to Support Someone With a Mental Health Condition", href: "/blog/how-to-support-someone-with-mental-health-condition" },
  { name: "Understanding Your Screening Results", href: "/blog/understanding-mental-health-screening-results" },
];

export default function JasonRamirezPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "About", url: `${SITE_URL}/about` },
              { name: "Jason Ramirez, CADC-II", url: `${SITE_URL}/about/jason-ramirez` },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <nav className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            <Link href="/" className="hover:text-sage-600 dark:hover:text-sage-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-sage-600 dark:hover:text-sage-400">About</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700 dark:text-neutral-200">Jason Ramirez, CADC-II</span>
          </nav>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Jason Ramirez, CADC-II
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Certified Drug and Alcohol Counselor with 11 years of clinical experience in substance use and mental health counseling. Clinical reviewer for MindCheck Tools.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>About Jason</h2>
            <p>
              Jason Ramirez is a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience
              spanning inpatient treatment, outpatient programs, and community mental health settings. His work has
              focused on evidence-based screening, substance use treatment, and helping individuals navigate the
              continuum of care from initial assessment through long-term recovery support.
            </p>
            <p>
              As clinical reviewer for MindCheck Tools, Jason ensures that every screening instrument uses correct
              validated wording, that scoring algorithms match published clinical guidelines, and that result
              interpretations include appropriate context and limitations. His review process covers both the clinical
              tools and the educational content across the site.
            </p>
            <p>
              Jason holds the CADC-II credential, the highest level of certification for drug and alcohol counselors,
              requiring thousands of supervised clinical hours and ongoing continuing education. His areas of
              specialization include co-occurring mental health and substance use disorders, motivational interviewing,
              trauma-informed care, and validated clinical screening instruments.
            </p>
          </section>

          <section>
            <h2>Connect</h2>
            <p>
              <a
                href="https://linkedin.com/in/jason-ramirez-cadc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-600 dark:text-sage-400 underline underline-offset-2 hover:text-sage-700 dark:hover:text-sage-300"
              >
                LinkedIn Profile →
              </a>
            </p>
          </section>

          <section>
            <h2>Reviewed screening tools</h2>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-2 my-6">
              {REVIEWED_TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="text-sm text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 underline underline-offset-2 py-1"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2>Reviewed articles and guides</h2>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-2 my-6">
              {REVIEWED_ARTICLES.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="text-sm text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 underline underline-offset-2 py-1"
                >
                  {article.name}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose">
              <h2 className="font-serif text-xl font-semibold text-sage-700 dark:text-sage-400 mb-3">
                Clinical disclaimer
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                All tools on MindCheck Tools are screening instruments for educational and self-reflection purposes
                only. They are not diagnostic tools and should not be used as a substitute for professional evaluation,
                diagnosis, or treatment. If you are concerned about your mental health or substance use, please consult
                a qualified healthcare professional.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
