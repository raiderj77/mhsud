// Centralized author configuration, update in ONE place, used everywhere

export const SITE_AUTHOR = {
  name: "Jason Ramirez",
  credential: "CADC-II",
  credentialFull: "Certified Alcohol and Drug Counselor Level II (CADC-II)",
  experience: "11 years of clinical experience in substance use counseling",
  role: "Clinical Reviewer",
  email: "hello@mindchecktools.com",
  linkedin: "https://www.linkedin.com/in/jason-ramirez-9262591a3/",
  profileUrl: "https://mindchecktools.com/about/jason-ramirez",
  credentialRegistryUrl:
    "https://ccappcredentialing.org/verify-credential/",
} as const;

// For structured data / JSON-LD
export const AUTHOR_SCHEMA = {
  "@type": "Person" as const,
  "@id": `${SITE_AUTHOR.profileUrl}#person`,
  name: SITE_AUTHOR.name,
  jobTitle: SITE_AUTHOR.role,
  description: `${SITE_AUTHOR.credentialFull} with ${SITE_AUTHOR.experience}.`,
  url: SITE_AUTHOR.profileUrl,
  hasCredential: {
    "@type": "EducationalOccupationalCredential" as const,
    credentialCategory: "Professional Certification",
    name: SITE_AUTHOR.credentialFull,
    recognizedBy: {
      "@type": "Organization" as const,
      name: "CCAPP Credentialing",
      url: "https://ccappcredentialing.org/",
    },
    url: SITE_AUTHOR.credentialRegistryUrl,
  },
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
    SITE_AUTHOR.linkedin,
  ],
};

// For the homepage hero, credential only, no name
export const HERO_CREDENTIAL_LINE =
  `Reviewed by a ${SITE_AUTHOR.credentialFull} with ${SITE_AUTHOR.experience}.`;
