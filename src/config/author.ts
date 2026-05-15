// Centralized author configuration — update in ONE place, used everywhere

export const SITE_AUTHOR = {
  name: "Jason Ramirez",
  credential: "CADC-II",
  credentialFull: "Certified Drug and Alcohol Counselor (CADC-II)",
  experience: "11 years of clinical experience",
  role: "Clinical Reviewer",
  email: "hello@mindchecktools.com",
  linkedin: "https://www.linkedin.com/in/jason-ramirez-9262591a3/",
} as const;

// For structured data / JSON-LD
export const AUTHOR_SCHEMA = {
  "@type": "Person" as const,
  name: SITE_AUTHOR.name,
  jobTitle: SITE_AUTHOR.credentialFull,
  url: "https://mindchecktools.com/about/jason-ramirez",
  knowsAbout: [
    "Substance use disorder screening",
    "Alcohol use disorder screening (AUDIT, AUDIT-C)",
    "Drug use screening (DAST-10)",
    "Co-occurring disorders screening",
    "Addiction counseling",
    "Relapse prevention",
    "SBIRT (Screening, Brief Intervention, Referral to Treatment)",
  ],
  sameAs: [
    "https://www.linkedin.com/in/jason-ramirez-9262591a3/",
    "https://mindchecktools.com/about/jason-ramirez",
  ],
};

// For the homepage hero — credential only, no name
export const HERO_CREDENTIAL_LINE =
  `Reviewed by a ${SITE_AUTHOR.credentialFull} with ${SITE_AUTHOR.experience}.`;
