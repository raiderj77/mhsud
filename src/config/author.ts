// Centralized author configuration — update in ONE place, used everywhere

export const SITE_AUTHOR = {
  name: "Jason Ramirez",
  credential: "CADC-II",
  credentialFull: "Certified Drug and Alcohol Counselor (CADC-II)",
  experience: "11 years of clinical experience",
  role: "Clinical Reviewer",
  email: "hello@mindchecktools.com",
} as const;

// For structured data / JSON-LD
export const AUTHOR_SCHEMA = {
  "@type": "Person" as const,
  name: SITE_AUTHOR.name,
  jobTitle: SITE_AUTHOR.credentialFull,
  url: "https://mindchecktools.com/about",
};

// For the homepage hero — credential only, no name
export const HERO_CREDENTIAL_LINE =
  `Reviewed by a ${SITE_AUTHOR.credentialFull} with ${SITE_AUTHOR.experience}.`;
