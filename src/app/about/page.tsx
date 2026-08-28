import type { Metadata } from "next";
import Link from "next/link";
import {
  createMetadata,
  breadcrumbJsonLd,
  organizationJsonLd,
  SITE_URL,
} from "@/lib/metadata";
import { AUTHOR_SCHEMA, SITE_AUTHOR } from "@/config/author";

const PAGE_URL = `${SITE_URL}/about`;
const LAST_REVIEWED = "2026-08-02";

export const metadata: Metadata = createMetadata({
  path: "/about",
  title: "About MindCheck Tools",
  description:
    "MindCheck Tools publishes free mental health and substance use screeners, self-reflection tools, and practical guides with transparent sources, limitations, privacy practices, and named clinical review.",
});

function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MindCheck Tools",
    url: PAGE_URL,
    dateModified: LAST_REVIEWED,
    about: organizationJsonLd()["@graph"][0],
    reviewedBy: AUTHOR_SCHEMA,
  };
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "About", url: PAGE_URL },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            About MindCheck Tools
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Free screening and self-reflection tools with transparent sources,
            clear limits, and privacy-conscious design.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3">
            Last reviewed: <time dateTime={LAST_REVIEWED}>August 2, 2026</time>
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What the site provides</h2>
            <p>
              MindCheck Tools makes established mental health and substance use
              screening instruments easier to access and understand. The site
              also includes educational self-reflection tools, calculators,
              worksheets, and coping-skill practice aids. Those categories are
              labeled separately because an original reflection tool is not the
              same as a validated clinical screener.
            </p>
            <p>
              A result from this site is information for a conversation with a
              qualified healthcare professional. It is not a diagnosis,
              treatment recommendation, or emergency service.
            </p>
          </section>

          <section>
            <h2>Named clinical review</h2>
            <p>
              Maintained screening pages and score guides are reviewed by{" "}
              <Link href="/about/jason-ramirez">
                {SITE_AUTHOR.name}, {SITE_AUTHOR.credential}
              </Link>
              , a {SITE_AUTHOR.credentialFull} with {SITE_AUTHOR.experience}.
              The review covers source fidelity, scoring alignment, screening
              limitations, safety language, and appropriate next-step guidance.
            </p>
            <p>
              The CADC-II credential is a substance use counseling
              certification. It is not presented as a physician, psychologist,
              psychiatrist, or independent mental health license. The reviewer
              profile links to the public credential registry and explains the
              scope of review.
            </p>
          </section>

          <section>
            <h2>Editorial and evidence standards</h2>
            <p>
              Validated screening pages trace their questions, scoring, and
              interpretation to primary publications or authoritative public
              health sources. Educational tools are identified as original or
              reflective and do not claim diagnostic validation. Material
              corrections reset the visible review date.
            </p>
            <ul>
              <li>
                Read the <Link href="/methodology">editorial methodology</Link>.
              </li>
              <li>
                Review the <Link href="/clinical-evidence">clinical evidence directory</Link>.
              </li>
              <li>
                See the <Link href="/disclaimer">clinical disclaimer</Link>.
              </li>
            </ul>
          </section>

          <section>
            <h2>Privacy and corrections</h2>
            <p>
              Screening answers are processed in the browser. Some worksheets
              offer an explicit local-save option; those entries remain in that
              browser profile. Health-related answers and scores are not sent to
              analytics or advertising services. MindCheck Tools does not display ads. Read the{" "}
              <Link href="/privacy">privacy policy</Link> for the complete data
              flow and consent details.
            </p>
            <p>
              To report a factual, scoring, accessibility, or privacy issue,
              use the <Link href="/contact">contact page</Link>.
            </p>
          </section>

          <section>
            <h2>For product and implementation teams</h2>
            <p>
              MindCheck Tools documents a proposed fixed-scope implementation
              readiness review for digital-health and behavioral-health
              software teams. It uses public or fictional staging evidence and
              does not accept patient records, assessment answers, scores, or
              diagnoses.
            </p>
            <ul>
              <li>
                Review the <Link href="/for-professionals">professional review scope</Link>.
              </li>
              <li>
                Use the free, printable{" "}
                <Link href="/for-professionals/screening-implementation-checklist">
                  screening implementation checklist
                </Link>
                .
              </li>
            </ul>
          </section>

          <section>
            <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose">
              <h2 className="font-serif text-xl font-semibold text-sage-700 dark:text-sage-400 mb-3">
                If you need immediate help
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                In the United States, call or text <strong>988</strong>. You can
                also text <strong>HOME</strong> to <strong>741741</strong>, or call
                the SAMHSA National Helpline at <strong>1-800-662-4357</strong>.
                If there is immediate danger, contact emergency services.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
