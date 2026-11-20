import { isValidWorkEmail } from "./facilitiesCore.mjs";

export const SPECIALTIES = [
  { prefix: "101Y", query: "Counselor", label: "Counselor" },
  { prefix: "1041", query: "Social Worker", label: "Social Worker" },
  { prefix: "103T", query: "Psychologist", label: "Psychologist" },
  { prefix: "106H", query: "Marriage & Family Therapist", label: "Marriage & Family Therapist" },
];

export const PRICES = [
  { name: "Free basic listing", price: "Free", paid: false },
  { name: "Claimed + License Verified profile", price: "$15/mo", paid: true },
  { name: "Listing Fix", price: "$99 one-time", paid: true },
  { name: "Privacy and Screening Readiness Review", price: "$249 one-time", paid: true },
];

export const REGISTRY_URL = "https://npiregistry.cms.hhs.gov";
export const LICENSE_NOTE = "A license number is on file from the national provider registry and has not been independently verified.";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function therapistPath(slug) {
  return `/therapists/${slug}`;
}

export function normalizeProvider(row) {
  const enumeration = row.enumeration_type;
  if (enumeration !== "NPI-1" || !/^\d{10}$/.test(String(row.number))) return null;
  const address = row.addresses?.find(a => a.address_purpose === "LOCATION" && a.state === "CA" && clean(a.city));
  const first = clean(row.basic?.first_name);
  const last = clean(row.basic?.last_name);
  if (!address || !first || !last) return null;

  const specialties = SPECIALTIES.filter(({ prefix }) => row.taxonomies?.some(t =>
    t.state === "CA" && Boolean(clean(t.license)) && /^[A-Z0-9]{9}X$/.test(clean(t.code)) &&
    clean(t.code).startsWith(prefix) &&
    !clean(t.code).includes("A0400") &&
    !/addiction|substance[ -]use|drug abuse/i.test(clean(t.desc))
  )).map(({ label }) => label);
  if (!specialties.length) return null;

  const name = `${first} ${last}`;
  const npi = String(row.number);
  const base = name.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "provider";
  return {
    npi,
    slug: `${base}-${npi}`,
    name,
    credential: clean(row.basic?.credential),
    city: clean(address.city).toLowerCase().replace(/\b[a-z]/g, letter => letter.toUpperCase()),
    state: "CA",
    specialties,
    listingSource: "nppes",
  };
}

export function validateClaim(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const allowed = ["slug", "workEmail"];
  if (Object.keys(body).some(key => !allowed.includes(key))) return null;
  const slug = clean(body.slug);
  const workEmail = clean(body.workEmail);
  return /^[a-z0-9-]{1,250}$/.test(slug) && isValidWorkEmail(workEmail) ? { slug, workEmail } : null;
}
