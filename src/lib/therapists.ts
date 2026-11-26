import snapshotData from "@/data/therapists/by-state/CA.json";

// Content type: professional_resource. Route risk: N0.
export interface Therapist {
  npi: string;
  slug: string;
  name: string;
  credential: string;
  city: string;
  state: "CA";
  specialties: string[];
  registryLicenseNumbers?: string[];
  listingSource: "nppes" | "manual-sober-coach";
}

export const therapistSnapshot = snapshotData as {
  generatedAt: string | null;
  source: "nppes-registry" | "nppes-dissemination" | null;
  providers: Therapist[];
};

export const registryProviders = therapistSnapshot.providers.filter(provider => provider.listingSource === "nppes");
const providersBySlug = new Map(registryProviders.map(provider => [provider.slug, provider]));

export function getTherapist(slug: string) {
  return providersBySlug.get(slug);
}
