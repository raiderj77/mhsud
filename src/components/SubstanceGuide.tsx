import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export function SubstanceGuide({ path, title, answer, steps, children }: {
  path: string; title: string; answer: string; steps: readonly string[]; children: ReactNode;
}) {
  return <article className="prose-mh max-w-3xl mx-auto px-4 sm:px-6 py-10">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: title, url: `${SITE_URL}${path}` }])) }} />
    <p className="text-sm">Substance-use education for adults and people supporting them</p>
    <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-5">{title}</h1>
    <p className="text-lg">{answer}</p>
    <figure className="my-6 rounded-xl border border-sage-200 p-4 dark:border-sage-800">
      <svg role="img" aria-labelledby="guide-visual-title" viewBox="0 0 400 230" className="w-full h-auto">
        <title id="guide-visual-title">{steps.join(". ")}. Optional planning steps, not a clinical pathway.</title>
        {steps.map((step, i) => <g key={step}>
          <rect x="4" y={i * 76 + 4} width="392" height="64" rx="10" fill="#edf4ef" stroke="#486651" />
          <circle cx="30" cy={i * 76 + 36} r="17" fill="#31543d" />
          <text x="30" y={i * 76 + 42} textAnchor="middle" fill="white" fontSize="18">{i + 1}</text>
          <text x="57" y={i * 76 + 42} fill="#172e20" fontSize="17">{step}</text>
        </g>)}
      </svg>
      <figcaption className="text-sm">An original planning illustration, not a scored assessment or a promise of an outcome. Each step is also explained below.</figcaption>
    </figure>
    {children}
    <h2>Privacy and review scope</h2>
    <p>This guide asks no health questions and creates no screening result. MindCheckTools screening answers and scores are processed locally and are not intentionally sent to MindCheckTools. Ordinary page requests can create hosting records; shared devices, extensions and copies you create have separate risks. See <Link href="/privacy">privacy</Link> and <Link href="/methodology">methodology</Link>.</p>
    <p>Last source check: September 26, 2026, by Codex as an editorial aid. Exact-content human review is pending; this page does not claim clinical review by Jason Ramirez. His stated CADC-II scope concerns substance-use counseling and does not establish medical or psychiatric review. This is education, not individualized care.</p>
    <h2>Urgent help</h2>
    <p>For immediate danger, call 911 or your local emergency number. In the U.S., call or text <a href="tel:988">988</a>, or text HOME to <a href="sms:741741">741741</a>. For treatment information, call SAMHSA at <a href="tel:18006624357">1-800-662-4357</a>. These services are separate from this website. <Link href="/crisis-resources">More crisis and international resources</Link>.</p>
    <nav aria-label="Related substance-use guides" className="mt-6 border-t pt-4">
      <ul>
        <li><Link href="/substance-use/screening-limits">What substance-use screening measures</Link></li>
        <li><Link href="/substance-use/find-support">Finding substance-use support</Link></li>
        <li><Link href="/substance-use/talking-with-someone">Talking with someone about alcohol or drugs</Link></li>
      </ul>
    </nav>
  </article>;
}
