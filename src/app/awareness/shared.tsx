import Link from "next/link";
import type { Metadata } from "next";
import { SITE_AUTHOR } from "@/config/author";
import { createMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { AWARENESS_SOURCE_CHECKED, awarenessSources, type AwarenessArticle, type AwarenessSourceKey, awarenessArticlePath } from "@/lib/awarenessArticles";
import styles from "./awareness.module.css";

export function sourceLinks(keys: AwarenessSourceKey[]) {
  return <p className={styles.sources}>Sources: {keys.map((key, index) => <span key={key}>{index > 0 ? " · " : ""}<a href={awarenessSources[key].url} rel="noreferrer" referrerPolicy="no-referrer">{awarenessSources[key].title}</a></span>)}</p>;
}

export function DraftNotice() {
  return <aside className={styles.notice} aria-label="Editorial status and ownership">
    <p><strong>Editorial draft — qualified human review pending.</strong> AI-assisted research and writing were used to organize the dates, sources, and practical planning ideas. The illustrations are AI-generated. This draft has not been clinically reviewed or approved for publication.</p>
    <p>Site owner: <Link href="/about/jason-ramirez">{SITE_AUTHOR.name}, {SITE_AUTHOR.credential}</Link>. Ownership is not a claim that Jason authored or reviewed this draft. Source check: <time dateTime={AWARENESS_SOURCE_CHECKED}>August 26, 2026</time>.</p>
  </aside>;
}

export function SafetyNote({ emergency = false }: { emergency?: boolean }) {
  return <aside className={emergency ? styles.emergency : styles.notice} aria-label="Safety and scope">
    {emergency && <><h2>Suspected overdose is an emergency</h2><p>Call <a href="tel:911">911 in the U.S.</a> or your local emergency number elsewhere immediately. Do not wait for a website or a screening result. Follow emergency-dispatch instructions. See <a href={awarenessSources.overdoseResponse.url} rel="noreferrer">CDC&apos;s overdose-response guidance</a> for education; this article is not emergency-response training.</p></>}
    <p>This is general, non-diagnostic education, not individualized medical advice or a substitute for professional care. For emotional distress in the U.S., <a href="tel:988">call 988</a> or <a href="sms:988">text 988</a>. For life-threatening danger, use emergency services. <Link href="/crisis-resources">Find crisis and international resources</Link>.</p>
  </aside>;
}

export function awarenessMetadata(path: string, title: string, description: string, image?: { url: string; alt: string }): Metadata {
  return createMetadata({
    path, title, description, keywords: [],
    // createMetadata defaults to index:true; explicitly override it here too.
    robots: { index: false, follow: false, noimageindex: true, googleBot: { index: false, follow: false, noimageindex: true } },
    referrer: "no-referrer",
    ...(image ? {
      openGraph: { type: "article", images: [{ url: `${SITE_URL}${image.url}`, width: 1536, height: 1024, alt: image.alt }] },
      twitter: { images: [{ url: `${SITE_URL}${image.url}`, alt: image.alt }] },
    } : {}),
  });
}

export function awarenessArticleJsonLd(article: AwarenessArticle) {
  const url = `${SITE_URL}${awarenessArticlePath(article.slug)}`;
  return {
    "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`,
    headline: article.title, description: article.description, mainEntityOfPage: url, url,
    image: `${SITE_URL}${article.image}`, inLanguage: "en-US", isAccessibleForFree: true,
    creativeWorkStatus: "Draft", dateCreated: AWARENESS_SOURCE_CHECKED,
    author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/about` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    // No reviewedBy or datePublished: neither has occurred for these drafts.
  };
}

export function PrivacyNote() {
  return <p className={styles.notice}>No assessment or personal story is needed to read this page. These awareness routes do not load optional analytics or advertising. Ordinary hosting requests still occur; see our <Link href="/privacy">privacy policy</Link>. External resources have their own policies. Share only the plain article URL, never answers, scores, or someone else&apos;s health information.</p>;
}
