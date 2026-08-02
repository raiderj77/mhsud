import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "@/lib/metadata";
import { AUTHOR_SCHEMA, SITE_AUTHOR } from "@/config/author";

const PROFILE_URL = `${SITE_URL}/about/jason-ramirez`;
const LAST_REVIEWED = "2026-08-02";

export const metadata: Metadata = createMetadata({
  path: "/about/jason-ramirez",
  title: "Jason Ramirez, CADC-II, Clinical Reviewer",
  description:
    "Jason Ramirez is a Certified Alcohol and Drug Counselor Level II (CADC-II) with 11 years of substance use counseling experience and the named clinical reviewer for MindCheck Tools.",
  keywords: [
    "Jason Ramirez CADC-II",
    "certified alcohol and drug counselor",
    "substance use clinical reviewer",
    "MindCheck Tools reviewer",
  ],
});

function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: LAST_REVIEWED,
    mainEntity: {
      ...AUTHOR_SCHEMA,
      worksFor: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  };
}

const REVIEWED_TOOLS = [
  { name: "PHQ-9 Depression Test", href: "/phq-9-depression-test" },
  { name: "GAD-7 Anxiety Test", href: "/gad-7-anxiety-test" },
  { name: "AUDIT Alcohol Use Screen", href: "/audit-alcohol-test" },
  { name: "AUDIT-C Quick Alcohol Screen", href: "/audit-c-alcohol-screen" },
  { name: "CAGE-AID Substance Use Screen", href: "/cage-aid-substance-abuse-screening" },
  { name: "PCL-5 PTSD Screening", href: "/pcl-5-ptsd-screening" },
  { name: "PC-PTSD-5 PTSD Screen", href: "/pc-ptsd-5-screening" },
  { name: "ASRS ADHD Screening", href: "/asrs-adhd-screening" },
  { name: "DASS-21 Depression, Anxiety, and Stress", href: "/dass-21-depression-anxiety-stress" },
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
];

const REVIEWED_GUIDES = [
  { name: "PHQ-9 Score Guide", href: "/phq-9-score-interpretation" },
  { name: "GAD-7 Score Guide", href: "/gad-7-score-interpretation" },
  { name: "AUDIT Score Guide", href: "/audit-score-interpretation" },
  { name: "PCL-5 Score Guide", href: "/pcl-5-score-interpretation" },
  { name: "ASRS Score Guide", href: "/asrs-score-interpretation" },
  { name: "DASS-21 Score Guide", href: "/dass-21-score-interpretation" },
  { name: "ACE Score Guide", href: "/ace-score-interpretation" },
  { name: "PHQ-9 vs GAD-7", href: "/phq-9-vs-gad-7" },
  { name: "How to Talk to Your Doctor", href: "/how-to-talk-to-your-doctor-about-mental-health" },
];

export default function JasonRamirezPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "About", url: `${SITE_URL}/about` },
              { name: "Jason Ramirez, CADC-II", url: PROFILE_URL },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <nav className="text-sm text-neutral-500 dark:text-neutral-400 mb-4" aria-label="Breadcrumb">
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
            {SITE_AUTHOR.credentialFull} with {SITE_AUTHOR.experience}. Clinical reviewer for MindCheck Tools.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3">
            Profile last reviewed: <time dateTime={LAST_REVIEWED}>August 2, 2026</time>
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Professional scope</h2>
            <p>
              Jason Ramirez is a {SITE_AUTHOR.credentialFull} with {SITE_AUTHOR.experience}. His professional focus
              includes alcohol and other drug screening, substance use counseling, relapse prevention, co-occurring
              concerns, and SBIRT (Screening, Brief Intervention, and Referral to Treatment).
            </p>
            <p>
              For MindCheck Tools, Jason reviews maintained screening pages for source fidelity, scoring alignment,
              educational rather than diagnostic wording, safety language, and appropriate limitations. Source
              publications and public-health guidance remain the authority for each instrument.
            </p>
            <p>
              CADC-II is a professional substance use counseling certification. It is not presented here as a medical license or as a
              license to practice psychology, psychiatry, or independent mental health diagnosis. A
              website review is quality control, not individual clinical care.
            </p>
          </section>

          <section>
            <h2>Verify the credential</h2>
            <p>
              <a href={SITE_AUTHOR.credentialRegistryUrl} target="_blank" rel="noopener noreferrer">
                CCAPP SUD Credential Registry
              </a>{" "}
              (search for Jason Ramirez; the registry is the authoritative source for current status and expiration).
            </p>
            <p>
              <a
                href="https://www.dhcs.ca.gov/providers-partners/counselor-certification/"
                target="_blank"
                rel="noopener noreferrer"
              >
                California DHCS counselor-certification requirements
              </a>
            </p>
            <p>
              <a href={SITE_AUTHOR.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn profile
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
            <h2>Reviewed score guides and practical guidance</h2>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-2 my-6">
              {REVIEWED_GUIDES.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="text-sm text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 underline underline-offset-2 py-1"
                >
                  {guide.name}
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
                MindCheck Tools provides educational screening and self-reflection resources. They do not diagnose a
                condition and do not replace professional evaluation, diagnosis, or treatment. If you are concerned
                about your mental health or substance use, consult a qualified healthcare professional.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
