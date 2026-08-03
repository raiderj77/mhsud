import type { Metadata } from "next";
import { AUTHOR_SCHEMA } from "@/config/author";

export const SITE_NAME = "MindCheck Tools";
export const SITE_URL = "https://mindchecktools.com";
export const SITE_DESCRIPTION =
  "Free mental health and substance use self-checks. Screening answers are processed in your browser; optional worksheet saves stay in local browser storage. PHQ-9, GAD-7, AUDIT, and more.";

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
export function createMetadata(overrides: Partial<Metadata> & { path: string }): Metadata {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { path, openGraph: ogOverrides, twitter: twOverrides, alternates: _altOverrides, ...rest } = overrides;
  const url = `${SITE_URL}${path}`;

  const defaultTitle = `${SITE_NAME}, Free, Private Mental Health Self-Checks`;
  const pageTitle = typeof rest.title === "string" ? rest.title : defaultTitle;
  const pageDescription = (rest.description as string) ?? SITE_DESCRIPTION;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: defaultTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630, alt: pageTitle }],
      ...ogOverrides,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630, alt: pageTitle }],
      ...twOverrides,
    },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...rest,
    alternates: {
      canonical: path || "/",
    },
  };
}

/** JSON-LD @graph for Organization + WebSite (site-wide) */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: "Free Mental Health Screening Tools",
        inLanguage: "en-US",
        description:
          "Free published screening instruments and clearly labeled educational mental health and substance use self-checks. No account required.",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
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
    "@id": `${url}#application`,
    name,
    description,
    url,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    mainEntityOfPage: url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    datePublished,
    dateModified,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    reviewedBy: AUTHOR_SCHEMA,
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
    reviewedBy: AUTHOR_SCHEMA,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: url,
  };
}

/** JSON-LD for MedicalWebPage (priority tool pages) */
export function medicalWebPageJsonLd({
  name,
  description,
  url,
  lastReviewed,
}: {
  name: string;
  description: string;
  url: string;
  lastReviewed: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    lastReviewed,
    reviewedBy: AUTHOR_SCHEMA,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: {
      "@id": `${url}#application`,
    },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
  };
}

/** JSON-LD for WebSite (homepage) */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "Free Mental Health Screening Tools",
    url: SITE_URL,
    inLanguage: "en-US",
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/** Breadcrumb JSON-LD */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: {
        "@id": item.url,
        "@type": "WebPage",
        name: item.name,
      },
    })),
  };
}
