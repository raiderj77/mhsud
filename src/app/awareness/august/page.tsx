import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AWARENESS_HUB_PATH, AWARENESS_HUB_RELEASED, awarenessArticles, awarenessArticlePath } from "@/lib/awarenessArticles";
import { awarenessMetadata, DraftNotice, SafetyNote, PrivacyNote, sourceLinks } from "../shared";
import styles from "../awareness.module.css";

const TITLE = "August Mental Health & Addiction Awareness Calendar";
const DESCRIPTION = "August awareness dates: wellness month, fentanyl awareness on August 21, grief awareness on August 30, and overdose awareness on August 31. Sources included.";
export const metadata = awarenessMetadata(AWARENESS_HUB_PATH, TITLE, DESCRIPTION);

export default function AugustAwarenessPage() {
  if (!AWARENESS_HUB_RELEASED) notFound();
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "CollectionPage", name: TITLE, description: DESCRIPTION, url: `${SITE_URL}${AWARENESS_HUB_PATH}`, creativeWorkStatus: "Draft", hasPart: awarenessArticles.map((article) => ({ "@type": "Article", name: article.title, url: `${SITE_URL}${awarenessArticlePath(article.slug)}` })) },
    breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "August awareness calendar", url: `${SITE_URL}${AWARENESS_HUB_PATH}` }]),
  ];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header><p className={styles.eyebrow}>A source-backed calendar · 2026 source check</p><h1>August mental-health and addiction awareness dates</h1><p className={styles.lede}>Know the date. Understand the purpose. Choose a respectful way to participate—without turning a personal experience into a public performance.</p></header>
    <DraftNotice />
    <section className={styles.answer} aria-labelledby="august-answer"><h2 id="august-answer">What is observed in August?</h2><p>August is National Wellness Month. Key dates include National Fentanyl Prevention and Awareness Day on August 21, National Grief Awareness Day on August 30, and International Overdose Awareness Day on August 31. Some organizations also hold month-long overdose-awareness campaigns.</p>{sourceLinks(["wellness", "fentanylDay", "griefDay", "overdoseDay", "overdoseMonth"])}</section>
    <div className={styles.tableWrap}><table><caption>Verified August dates and important distinctions</caption><thead><tr><th scope="col">When</th><th scope="col">Observance</th><th scope="col">What the date means</th></tr></thead><tbody>
      <tr><th scope="row">All August</th><td><Link href={awarenessArticlePath("national-wellness-month")}>National Wellness Month</Link></td><td>Well-being awareness; not a clinical program.{sourceLinks(["wellness"])}</td></tr>
      <tr><th scope="row">August 21</th><td><Link href={awarenessArticlePath("fentanyl-prevention-awareness-day")}>National Fentanyl Prevention and Awareness Day</Link></td><td>The specific August observance identified by CDC.{sourceLinks(["fentanylDay"])}</td></tr>
      <tr><th scope="row">August 30</th><td><Link href={awarenessArticlePath("national-grief-awareness-day")}>National Grief Awareness Day</Link></td><td>Annual grief-awareness date listed by NAMI.{sourceLinks(["griefDay"])}</td></tr>
      <tr><th scope="row">August 31</th><td><Link href={awarenessArticlePath("overdose-awareness-month-day")}>International Overdose Awareness Day</Link></td><td>The annual international observance, distinct from a local event date.{sourceLinks(["overdoseDay"])}</td></tr>
    </tbody></table></div>
    <section aria-labelledby="date-limits"><h2 id="date-limits">Not every awareness label has the same status</h2><p>End Overdose uses “Overdose Awareness Month” for its August 2026 campaign. We have not verified a universal federal designation for the full month. SAMHSA has an Overdose Awareness Week toolkit, but this guide does not claim an exact 2026 week date range. Confirm that range with a current official source before printing it.</p>{sourceLinks(["overdoseMonth", "overdoseWeek"])}</section>
    <section aria-labelledby="guides"><h2 id="guides">Choose the guide that fits your purpose</h2><p>These articles connect dates to useful, low-pressure actions for individuals, libraries, educators, and community organizations. They are educational drafts, not treatment advice, screening tools, or emergency training.</p>
      <div className={styles.cards}>{awarenessArticles.map((article) => <article key={article.slug} className={styles.card}><Image src={article.image} alt={article.imageAlt} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 550px" /><div><p className={styles.eyebrow}>{article.dateLabel}</p><h2><Link href={awarenessArticlePath(article.slug)}>{article.title}</Link></h2><p>{article.description}</p></div></article>)}</div>
      <p className={styles.sources}>All four illustrations are AI-generated editorial artwork, not documentary photographs or official campaign graphics.</p>
    </section>
    <section aria-labelledby="different-months"><h2 id="different-months">Is August Mental Health Awareness Month or Recovery Month?</h2><p>In the United States, Mental Health Awareness Month is May and National Recovery Month is September. August&apos;s wellness and overdose-related observances are separate. Keep the month, full campaign name, and organizing source together so a short social caption does not change the meaning.</p>{sourceLinks(["mentalHealthMonth", "recoveryMonth"])}</section>
    <section aria-labelledby="organizer-check"><h2 id="organizer-check">Before you put a date on a flyer</h2><ul><li>Confirm the observance with the named campaign organization or public-health source.</li><li>Show your event&apos;s own location, date, and time separately.</li><li>Check permission before using logos, photographs, names, or personal stories.</li><li>Make participation optional and keep resource access free of health questions.</li><li>Verify current support contacts and arrange qualified help for any clinical or response-training component.</li></ul><p>This is a selected calendar for the site&apos;s audience, not an exhaustive list of every local or international observance. Sources were checked in August 2026; annual themes and local schedules need a fresh check each year.</p></section>
    <SafetyNote emergency />
    <PrivacyNote />
  </>;
}
