import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata = createMetadata({
  path: "/withdrawal-timeline",
  title: "Withdrawal Safety: Why a Timeline Cannot Assess Your Risk",
  description: "A withdrawal timeline cannot establish safety. Find authoritative withdrawal information, medical support and emergency resources without entering personal information.",
});

export default function WithdrawalPage() {
  return (
    <article className="prose-mh max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Withdrawal safety", url: `${SITE_URL}/withdrawal-timeline` }])) }} />
      <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-5">Withdrawal safety: a timeline cannot assess your risk</h1>
      <p><strong>If you are in immediate danger, call 911 or your local emergency number.</strong> This page cannot assess symptoms, monitor you, or provide emergency care.</p>
      <p>Time since last use does not establish that withdrawal is safe or complete. This educational resource provides source links and ways to seek support. It does not give a home-detox schedule, medication instructions or an individual risk score.</p>
      <h2>Get medical advice for possible withdrawal</h2>
      <p><a href="https://medlineplus.gov/ency/article/000764.htm" rel="noreferrer">MedlinePlus: alcohol withdrawal</a> explains that alcohol withdrawal may quickly become life-threatening and advises contacting a provider promptly for possible withdrawal. Do not wait for a particular day on a chart before seeking help.</p>
      <p>For opioid-related questions, see <a href="https://medlineplus.gov/ency/article/000949.htm" rel="noreferrer">MedlinePlus: opioid withdrawal</a> and speak with a qualified healthcare professional. Information about one substance cannot establish safety for another substance or for combinations.</p>
      <h2>Why the day-by-day display was removed</h2>
      <p>The previous display assigned symptoms and risk stages to fixed time windows without sufficient page-level evidence for those exact claims. Such a display could imply that a dangerous period had passed. The page remains available, with access to authoritative information and support, without making those predictions.</p>
      <h2>Finding support</h2>
      <p>SAMHSA&apos;s National Helpline, <a href="tel:18006624357">1-800-662-4357</a>, offers treatment information and referrals. It is not emergency medical care. The <a href="https://alcoholtreatment.niaaa.nih.gov/how-to-find-alcohol-treatment" rel="noreferrer">NIAAA Alcohol Treatment Navigator</a> can help adults look for alcohol treatment.</p>
      <p>For U.S. emotional crisis support, call or text <a href="tel:988">988</a>, or text HOME to <a href="sms:741741">741741</a>. See <Link href="/crisis-resources">crisis and international resources</Link>. Contact emergency services for immediate danger.</p>
      <h2>Sources, review scope and privacy</h2>
      <p>Source alignment checked September 26, 2026 by Codex as an editorial aid. This is not medical review, a detoxification protocol, or a new review attributed to Jason Ramirez. Medical guidance requires an appropriately qualified reviewer; a CADC-II credential alone does not establish that review.</p>
      <p>This page asks no health questions and produces no score. Ordinary page requests can create hosting records. Read the <Link href="/privacy">privacy policy</Link>, <Link href="/methodology">methodology</Link> and <Link href="/health-recovery-timeline">limits of recovery timelines</Link>.</p>
    </article>
  );
}
