import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, createMetadata, faqJsonLd, SITE_URL } from "@/lib/metadata";

const PAGE_PATH = "/for-professionals/screening-instrument-rights-guide";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_REVIEWED = "August 5, 2026";

const FAQS = [
  {
    question: "Does a public questionnaire automatically mean it is free to reuse?",
    answer:
      "No. Public access is not a reuse licence. The owner may limit electronic administration, commercial use, modification, scoring, or public result delivery.",
  },
  {
    question: "Does this guide grant permission to use an instrument?",
    answer:
      "No. This is an evidence register, not legal advice or a licence. Only the owner or an authorized publisher can grant permission.",
  },
  {
    question: "Does rights clearance make a public mental-health assessment safe to launch?",
    answer:
      "No. Exact-version and scoring review, non-diagnostic result language, crisis safeguards, privacy, accessibility, and appropriately qualified review remain separate release gates.",
  },
];

type RightsGroup = {
  heading: string;
  meaning: string;
  tone: string;
  instruments: Array<{ name: string; source: string; sourceLabel: string; note: string }>;
};

const GROUPS: RightsGroup[] = [
  {
    heading: "Public-use basis found",
    meaning: "A current authoritative source supplies a public-use basis for the named version. Other release gates still apply.",
    tone: "border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20",
    instruments: [
      { name: "PHQ-9, PHQ-4 and GAD-7", source: "https://www.phqscreeners.com/select-screener", sourceLabel: "PHQ Screeners", note: "Reproduction, display and distribution terms are published by the official screener source." },
      { name: "PCL-5 and PC-PTSD-5", source: "https://www.ptsd.va.gov/professional/assessment/adult-sr/ptsd-checklist.asp", sourceLabel: "VA National Center for PTSD", note: "Public-domain status is stated, but VA describes qualified professionals and researchers as the intended users." },
      { name: "ASRS v1.1 six-question screener", source: "https://www.hcp.med.harvard.edu/ncs/asrs.php", sourceLabel: "National Comorbidity Survey", note: "The source permits electronic recreation when exact wording, response choices, scoring and shading are preserved." },
      { name: "Rosenberg Self-Esteem Scale", source: "https://socy.umd.edu/about-us/rosenberg-self-esteem-scale", sourceLabel: "University of Maryland", note: "The university identifies the scale as public domain and requests attribution." },
      { name: "K6", source: "https://www.hcp.med.harvard.edu/ncs/k6_scales.php", sourceLabel: "National Comorbidity Survey", note: "Use is described as free without formal permission, subject to citation and notice requirements." },
      { name: "CES-D, exact SAMHSA/NCBI version", source: "https://www.ncbi.nlm.nih.gov/books/NBK572958/", sourceLabel: "NCBI Bookshelf", note: "The source marks the exact appendix version as public domain." },
      { name: "IPIP Big Five measure", source: "https://ipip.ori.org/newPermission.htm", sourceLabel: "IPIP", note: "The official permission page permits commercial and noncommercial online administration." },
    ],
  },
  {
    heading: "Noncommercial or conditional use",
    meaning: "The identified terms limit commercial use or require exact conditions. Keep these journeys segregated from ads, affiliates and paid products unless written permission says otherwise.",
    tone: "border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20",
    instruments: [
      { name: "AUDIT and AUDIT-C", source: "https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a", sourceLabel: "World Health Organization", note: "The current source supports public noncommercial use; commercial use requires WHO licensing review." },
      { name: "WHO-5 Well-Being Index", source: "https://www.who.int/publications/m/item/WHO-UCN-MSD-MHE-2024.01", sourceLabel: "World Health Organization", note: "The official form is licensed CC BY-NC-SA 3.0 IGO." },
      { name: "CRAFFT", source: "https://crafft.org/get-the-crafft/", sourceLabel: "CRAFFT", note: "The official process requires an exact draft submission, written approval and reapproval after changes." },
    ],
  },
  {
    heading: "Permission, licence or clarification needed",
    meaning: "No adequate current grant for the contemplated public commercial web use is on file. An educational page may discuss the instrument without reproducing its protected mechanics.",
    tone: "border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/20",
    instruments: [
      { name: "SPIN", source: "https://www.apta.org/patient-care/evidence-based-practice-resources/test-measures/social-phobia-inventory-spin", sourceLabel: "American Physical Therapy Association", note: "The source directs users to the copyright holder for permission and a user fee." },
      { name: "ACE Questionnaire", source: "https://www.cdc.gov/violenceprevention/aces/about.html", sourceLabel: "CDC", note: "The original study questionnaires are not copyrighted, but an implementation must still match an exact authoritative version." },
      { name: "CAGE-AID", source: "https://www.hiv.uw.edu/page/substance-use/cage-aid", sourceLabel: "University of Washington", note: "Public display by a third party is not a transferable commercial reproduction grant." },
      { name: "SCOFF", source: "https://www.bmj.com/about-bmj/resources-readers/permissions", sourceLabel: "BMJ permissions", note: "Commercial reuse is routed through the publisher's permission process." },
      { name: "MSI-BPD", source: "https://pubmed.ncbi.nlm.nih.gov/14744082/", sourceLabel: "PubMed validation record", note: "A primary validation record is available, but no authoritative public-commercial web grant is on file." },
      { name: "Adult AQ-10", source: "https://www.autismresearchcentre.com/tests/autism-spectrum-quotient-10-items-aq-10-adult/", sourceLabel: "Autism Research Centre", note: "For-profit, commercial or IT use may require a licence and fees." },
      { name: "Holmes-Rahe SRRS", source: "https://blog.apapubs.org/2016/12/21/how-permissions-work-in-psyctests/", sourceLabel: "APA PsycTests guidance", note: "Research or teaching access does not itself authorize posting a test online." },
      { name: "UCLA Loneliness Scale v3", source: "https://peplau.psych.ucla.edu/loneliness/", sourceLabel: "UCLA author-controlled page", note: "The posted permission is for nonprofit research, not public commercial administration." },
      { name: "ECR-R attachment measure", source: "https://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm", sourceLabel: "Author-controlled ECR-R page", note: "Commercial use requires permission; the author also favors dimensional rather than categorical scoring." },
      { name: "Brief Resilience Scale", source: "https://pubmed.ncbi.nlm.nih.gov/18696313/", sourceLabel: "PubMed validation record", note: "No current authoritative public-web reproduction grant is on file." },
      { name: "Athens Insomnia Scale", source: "https://pubmed.ncbi.nlm.nih.gov/11033374/", sourceLabel: "PubMed validation record", note: "A validation record does not grant electronic reproduction rights." },
      { name: "WHO ASSIST v3.1", source: "https://www.who.int/publications/i/item/978924159938-2", sourceLabel: "World Health Organization", note: "The manual's primary-care permission does not clearly grant public consumer-web or commercial use." },
    ],
  },
  {
    heading: "Public administration blocked by current terms",
    meaning: "The current owner guidance does not permit an open public questionnaire. Keep only an original educational explainer unless the owner provides a written exception.",
    tone: "border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50",
    instruments: [
      { name: "DASS-21", source: "https://dass.psy.unsw.edu.au/DASSFAQ.htm", sourceLabel: "UNSW DASS FAQ", note: "UNSW says a website or app open to the public may not administer the DASS." },
    ],
  },
];

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Mental Health Screening Instrument Rights Guide",
  description:
    "A source-linked guide to public-use, commercial-use and permission boundaries for 27 mental-health screening instrument routes. No test items or scoring reproduced.",
  keywords: [
    "mental health screening instrument permissions",
    "psychological assessment copyright",
    "screening tool licensing",
    "public domain mental health questionnaires",
  ],
});

export default function ScreeningInstrumentRightsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "For Professionals", url: `${SITE_URL}/for-professionals` },
              { name: "Instrument Rights Guide", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          <Link href="/" className="hover:text-sage-700 dark:hover:text-sage-400">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/for-professionals" className="hover:text-sage-700 dark:hover:text-sage-400">For Professionals</Link>
          <span aria-hidden="true">/</span>
          <span className="text-neutral-700 dark:text-neutral-300">Instrument Rights Guide</span>
        </nav>

        <header className="max-w-4xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-sage-700 dark:text-sage-400 mb-3">Source-linked professional reference</p>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-5">Mental health screening instrument rights guide</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            A practical rights-status map for the 27 instrument routes reviewed by MindCheck Tools. It separates public-use evidence from noncommercial limits, permission gates and public-administration blocks.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Evidence last reviewed: {LAST_REVIEWED}. Terms can change; recheck the linked owner source before each release.</p>
        </header>

        <aside className="rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20 p-6 mb-10">
          <h2 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">Important boundary</h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
            This guide contains no instrument items, answer choices, scoring keys, cutoffs or result mechanics. It is not legal advice, a clinical endorsement, a licence, or permission to use any instrument.
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Rights clearance is only one gate. Exact-version parity, privacy, accessibility, crisis safeguards, non-diagnostic wording and appropriately qualified review remain required.
          </p>
        </aside>

        <div className="space-y-10">
          {GROUPS.map((group) => (
            <section key={group.heading} aria-labelledby={group.heading.toLowerCase().replaceAll(" ", "-")}>
              <div className={`rounded-2xl border p-6 sm:p-8 ${group.tone}`}>
                <h2 id={group.heading.toLowerCase().replaceAll(" ", "-")} className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">{group.heading}</h2>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">{group.meaning}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {group.instruments.map((instrument) => (
                    <article key={instrument.name} className="rounded-xl bg-white/80 dark:bg-neutral-950/60 border border-white/70 dark:border-neutral-800 p-5">
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{instrument.name}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">{instrument.note}</p>
                      <a href={instrument.source} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-sage-700 dark:text-sage-400 underline underline-offset-2">Read the {instrument.sourceLabel} source</a>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section aria-labelledby="decision-sequence" className="mt-12 max-w-4xl">
          <h2 id="decision-sequence" className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">A safer implementation sequence</h2>
          <ol className="list-decimal pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
            <li>Identify the exact version, owner, publisher and intended audience.</li>
            <li>Archive the current owner-controlled terms and record whether the contemplated use is public, electronic and commercial.</li>
            <li>Obtain written permission or a licence when the authoritative source requires it.</li>
            <li>Independently verify content parity, scoring, result wording, safety, privacy and accessibility.</li>
            <li>Record qualified reviewer scope and release evidence before publication.</li>
          </ol>
        </section>

        <section aria-labelledby="faq" className="mt-12 max-w-4xl">
          <h2 id="faq" className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <article key={faq.question} className="card p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{faq.question}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-sage-700 dark:bg-sage-900 p-7 sm:p-9 text-white">
          <h2 className="font-serif text-2xl font-bold mb-3">Need an implementation evidence review?</h2>
          <p className="text-sage-50 leading-relaxed mb-5">MindCheck Tools can organize public or fictional-staging evidence without receiving patient records, assessment answers, scores, diagnoses or other health information.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/for-professionals" className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-5 py-2.5 font-semibold text-sage-800 hover:bg-sage-50">Review the service boundary</Link>
            <Link href="/for-professionals/screening-implementation-checklist" className="inline-flex min-h-[44px] items-center rounded-lg border border-white px-5 py-2.5 font-semibold text-white hover:bg-white/10">Use the free checklist</Link>
          </div>
        </section>
      </div>
    </>
  );
}
