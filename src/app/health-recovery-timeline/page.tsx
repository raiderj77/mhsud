import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata = createMetadata({
  path: "/health-recovery-timeline",
  title: "Health Recovery Timelines: What Dates Cannot Tell You",
  description: "Understand the limits of recovery timelines, find primary health sources, and prepare questions for a qualified professional. No personal prognosis or quit-date scoring.",
});

export default function HealthTimelinePage() {
  return (
    <article className="prose-mh max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Recovery timeline limits", url: `${SITE_URL}/health-recovery-timeline` }])) }} />
      <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-5">Health recovery timelines: what dates cannot tell you</h1>
      <p>A date alone cannot establish how your body has recovered after alcohol or drug use. This educational guide does not measure organ function, predict recovery, diagnose a condition, or tell you that withdrawal is over.</p>
      <p>The previous quit-date display could make general statements look like personal health milestones. It has been replaced with source links and questions for a qualified professional. You do not need to enter a substance, date, answer or score.</p>
      <h2>Use the source for the question you have</h2>
      <ul>
        <li><a href="https://www.cdc.gov/tobacco/about/benefits-of-quitting.html" rel="noreferrer">CDC: benefits of quitting smoking</a> describes changes observed after stopping smoking. Its population-level information cannot confirm that an individual has reached a health milestone, and it should not be generalized to every nicotine product.</li>
        <li><a href="https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/understanding-alcohol-use-disorder" rel="noreferrer">NIAAA: understanding alcohol use disorder</a> explains assessment and treatment options. A sobriety date is not a substitute for a clinical assessment.</li>
        <li><a href="https://medlineplus.gov/ency/article/000949.htm" rel="noreferrer">MedlinePlus: opioid withdrawal</a> discusses withdrawal and care. This site does not turn that information into an individual recovery schedule.</li>
      </ul>
      <h2>Bring useful questions to an appointment</h2>
      <p>You can ask which changes need assessment, what follow-up is appropriate for your circumstances, and whom to contact between appointments. You do not need a particular screening score to ask for help. For help locating alcohol care, use the <a href="https://alcoholtreatment.niaaa.nih.gov/how-to-find-alcohol-treatment" rel="noreferrer">NIAAA Alcohol Treatment Navigator</a>.</p>
      <h2>Do not use a timeline to decide whether withdrawal is safe</h2>
      <p><a href="https://medlineplus.gov/ency/article/000764.htm" rel="noreferrer">MedlinePlus describes alcohol withdrawal as potentially life-threatening</a>. Seek medical advice promptly if you think you may be in withdrawal. In immediate danger, call emergency services. See <Link href="/withdrawal-timeline">withdrawal safety and support</Link> and <Link href="/crisis-resources">crisis resources</Link>.</p>
      <h2>Sources, review scope and privacy</h2>
      <p>Source alignment checked September 26, 2026 by Codex as an editorial aid. This is not a clinician review or a new claim of review by Jason Ramirez. Individual medical questions require an appropriately qualified professional. Sources describe their own evidence and limitations.</p>
      <p>This page collects no answers and produces no result. Ordinary page requests can create hosting records. Read the <Link href="/privacy">privacy policy</Link> and <Link href="/methodology">review methodology</Link>.</p>
      <p>U.S. support: call or text <a href="tel:988">988</a>; text HOME to <a href="sms:741741">741741</a>; or call SAMHSA at <a href="tel:18006624357">1-800-662-4357</a> for treatment information. <Link href="/crisis-resources">International support options</Link> are also listed.</p>
    </article>
  );
}
