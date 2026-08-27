import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { awarenessArticlePath, getReleasedAwarenessArticle, getReleasedAwarenessArticles, getAwarenessRelease, articleSourceKeys, awarenessSources } from "@/lib/awarenessArticles";
import { awarenessMetadata, awarenessArticleJsonLd, ReviewNotice, SafetyNote, PrivacyNote, sourceLinks } from "../shared";
import styles from "../awareness.module.css";

// Unknown slugs reach our explicit notFound() guard. The pinned Next version's
// dynamicParams:false fallback logged an internal error for an ordinary 404.
export const dynamicParams = true;
export function generateStaticParams() { return getReleasedAwarenessArticles().map(({ slug }) => ({ slug })); }

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const article = getReleasedAwarenessArticle((await params).slug);
  if (!article) notFound();
  return awarenessMetadata(awarenessArticlePath(article.slug), article.seoTitle, article.description, { url: article.image, alt: article.imageAlt });
}

export default async function AwarenessArticlePage({ params }: Props) {
  const article = getReleasedAwarenessArticle((await params).slug);
  if (!article) notFound();
  const release = getAwarenessRelease(article.slug)!;
  const jsonLd = [awarenessArticleJsonLd(article), breadcrumbJsonLd([
    { name: "Home", url: SITE_URL },
    { name: article.observance, url: `${SITE_URL}${awarenessArticlePath(article.slug)}` },
  ])];
  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span>{article.dateLabel}</span></nav>
    <header>
      <p className={styles.eyebrow}>Awareness, without the pressure · {article.dateLabel}</p>
      <h1>{article.title}</h1>
      <p className={styles.lede}>{article.description}</p>
    </header>
    <ReviewNotice release={release} />
    <SafetyNote emergency={article.emergency} />
    <section className={styles.answer} aria-labelledby="quick-answer"><h2 id="quick-answer">Quick answer</h2><p>{article.answer}</p>{sourceLinks(article.answerSources)}</section>
    <figure className={styles.figure}>
      <Image src={article.image} width={1536} height={1024} alt={article.imageAlt} sizes="(max-width: 1152px) 100vw, 1152px" priority />
      <figcaption>AI-generated editorial illustration; not a photograph of real people, an event, or a clinical setting.</figcaption>
    </figure>
    <div className={styles.columns}>
      <nav className={styles.toc} aria-label="On this page"><strong>In this guide</strong><ul>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}<li><a href="#questions">Common questions</a></li><li><a href="#sources">Sources and related reading</a></li></ul></nav>
      <div className={styles.body}>
        {article.sections.map((section) => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
          <h2 id={`${section.id}-heading`}>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          {section.sources && sourceLinks(section.sources)}
        </section>)}
        <section id="questions" aria-labelledby="questions-heading"><h2 id="questions-heading">Common questions</h2>{article.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p>{faq.sources && sourceLinks(faq.sources)}</div>)}</section>
        <section id="sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources and related reading</h2>
          <p>Primary-source dates and education are cited below. The planning examples are original editorial suggestions, not validated clinical interventions. Source checking is separate from qualified clinical review.</p>
          <ul>{articleSourceKeys(article).map((key) => <li key={key}><a href={awarenessSources[key].url} rel="noreferrer" referrerPolicy="no-referrer">{awarenessSources[key].title}</a></li>)}</ul>
          <h3>Related awareness guides</h3><ul>{article.related.map((slug) => { const related = getReleasedAwarenessArticle(slug); return related ? <li key={slug}><Link href={awarenessArticlePath(slug)}>{related.title}</Link></li> : null; })}</ul>
          <p>For organizations considering online screening, see the <Link href="/for-professionals/screening-implementation-checklist">free screening-implementation safety checklist</Link>. It is a technical planning resource, not permission to administer an instrument or a clinical endorsement.</p>
        </section>
        <PrivacyNote />
      </div>
    </div>
  </article>;
}
