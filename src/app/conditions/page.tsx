import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { CATEGORIES, CLINICAL_GUIDES, EVIDENCE_ANCHORS } from "@/lib/screeningDirectory";
import { getToolClassification } from "@/lib/toolClassifications";

// Content type: editorial_article. Route risk: H1.
export const metadata = createMetadata({
  path: "/conditions",
  title: "Conditions",
  description: "Browse existing screening tools, information pages, and clinical evidence by condition.",
});

const guidePaths: Record<string, string[]> = {
  depression: ["/maternal-mental-health", "/phq-2-to-phq-9-when-to-escalate", "/phq-9-vs-gad-7"],
  anxiety: ["/phq-9-vs-gad-7"],
  "alcohol-substance": ["/audit-vs-audit-c"],
  wellbeing: ["/how-to-talk-to-your-doctor-about-mental-health"],
};

const linkClass = "inline-flex min-h-[44px] items-center text-sage-700 underline underline-offset-2";

export default function ConditionsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">Conditions</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {CATEGORIES.map(({ id, title, tools }) => (
          <section key={id} aria-labelledby={id} className="card p-5">
            <h2 id={id} className="text-xl font-bold text-neutral-900">{title}</h2>
            <ul className="mt-2 divide-y divide-sand-200">
              {tools.map(({ href, name, description, scoreInterpHref }) => {
                const evidence = EVIDENCE_ANCHORS[href];
                const classification = getToolClassification(href)?.classification;
                return (
                  <li key={href} className="py-2">
                    <h3><Link className={`${linkClass} font-semibold`} href={href}>{name}</Link></h3>
                    {classification && <p className="text-sm font-semibold text-neutral-700">{classification}</p>}
                    <p className="text-sm leading-relaxed text-neutral-700">{description}</p>
                    {(evidence || scoreInterpHref) && (
                      <div className="flex flex-wrap gap-x-4 text-sm">
                        {evidence && (
                          <Link className={linkClass} href={`/clinical-evidence#${evidence}`} aria-label={`Clinical evidence for ${name}`}>
                            Clinical evidence
                          </Link>
                        )}
                        {scoreInterpHref && (
                          <Link className={linkClass} href={scoreInterpHref} aria-label={`Score interpretation for ${name}`}>
                            Score interpretation
                          </Link>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
              {CLINICAL_GUIDES.filter(({ href }) => guidePaths[id]?.includes(href)).map(({ href, name, description }) => (
                <li key={href} className="py-2">
                  <h3><Link className={`${linkClass} font-semibold`} href={href}>{name}</Link></h3>
                  <p className="text-sm leading-relaxed text-neutral-700">{description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
