export const EDITABLE_FIELDS = Object.freeze([
  "phone", "website", "bio", "insurances", "languages", "sessionFee", "telehealth", "acceptingNew",
]);
export const LOCKED_FIELDS = Object.freeze([
  "name", "credential", "city", "state", "npi", "slug", "specialties", "listingSource", "licenseNumber",
]);
export const PROFILE_SLUG = /^[a-z0-9-]{1,250}$/;

export function cleanLicenseNumber(value) {
  return typeof value === "string" ? value.replace(/[^a-z0-9]/gi, "").toUpperCase() : "";
}

export function licenseMatchesCredential(credential, licenseNumber) {
  const number = cleanLicenseNumber(licenseNumber);
  return number.length >= 4 && typeof credential === "string" &&
    credential.toUpperCase().split(/[^A-Z0-9]+/).includes(number);
}

function boundedText(value, max, pattern) {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text.length <= max && pattern.test(text) ? text : null;
}

function boundedList(value, max) {
  if (!Array.isArray(value) || value.length > 12) return null;
  const list = Array.from(value, item => boundedText(item, max, /./s));
  return list.every(Boolean) ? list : null;
}

function website(value) {
  if (typeof value !== "string" || value.length > 200) return null;
  try {
    return new URL(value).protocol === "https:" ? value.trim() : null;
  } catch {
    return null;
  }
}

const validators = {
  phone: value => boundedText(value, 32, /^[0-9 +().-]*$/),
  website,
  bio: value => boundedText(value, 1200, /^[^<]*$/),
  insurances: value => boundedList(value, 60),
  languages: value => boundedList(value, 30),
  sessionFee: value => boundedText(value, 60, /(?:)/),
  telehealth: value => typeof value === "boolean" ? value : null,
  acceptingNew: value => typeof value === "boolean" ? value : null,
};

/**
 * @typedef {{slug: string, phone?: string, website?: string, bio?: string, insurances?: string[],
 * languages?: string[], sessionFee?: string, telehealth?: boolean, acceptingNew?: boolean}} ProfileEdit
 */

/** @param {unknown} body @returns {ProfileEdit | null} */
export function validateProfileEdit(body) {
  if (!body || typeof body !== "object" ||
      ![Object.prototype, null].includes(Object.getPrototypeOf(body)) ||
      !Object.hasOwn(body, "slug") || typeof body.slug !== "string" || !PROFILE_SLUG.test(body.slug)) return null;
  const result = { slug: body.slug };
  for (const key of Reflect.ownKeys(body)) {
    if (key === "slug") continue;
    if (!EDITABLE_FIELDS.includes(key)) return null;
    const value = validators[key](body[key]);
    if (value === null) return null;
    result[key] = value;
  }
  return result;
}
