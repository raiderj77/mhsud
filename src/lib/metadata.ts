import type { Metadata } from "next";

export const SITE_NAME = "MindCheck Tools";
export const SITE_URL = "https://mindchecktools.com";
export const SITE_DESCRIPTION =
  "Free, private mental health and substance use self-checks. Your screening answers are scored in your browser and never stored. PHQ-9, GAD-7, AUDIT, and more.";

export const DEFAULT_KEYWORDS = [
  "mental health self-check",
  "depression test",
  "anxiety test",
  "alcohol screening",
  "free mental health tools",
  "private depression questionnaire",
  "online mental health assessment",
  "PHQ-9",
  "GAD-7",
  "AUDIT",
];

/** Base metadata shared across all pages */
export function createMetadata(overrides: Partial<Metadata> & { path?: string }): Metadata {
  const { path = "", ...rest } = overrides;
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} — Free, Private Mental Health Self-Checks`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: `${SITE_NAME} — Free, Private Mental Health Self-Checks`,
      description: SITE_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME}`,
      description: SITE_DESCRIPTION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    ...rest,
  };
}

/** JSON-LD for organization (site-wide) */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    sameAs: [],
  };
}

/** JSON-LD for a medical web page / tool */
export function toolPageJsonLd({
  name,
  description,
  url,
  datePublished,
  dateModified,
}: {
  name: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    datePublished,
    dateModified,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/** JSON-LD for FAQ section */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** JSON-LD for blog/article */
export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    image: image || `${SITE_URL}/og-default.png`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

/** Breadcrumb JSON-LD */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItemElement",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
