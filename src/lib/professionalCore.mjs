export const EDITABLE_FIELDS = Object.freeze([
  "phone", "website", "bio", "insurances", "languages", "sessionFee", "telehealth", "acceptingNew",
  "public_email", "show_phone", "show_email", "specialties", "approaches", "populations",
  "years_in_practice", "education", "office_area", "in_person",
]);
export const LOCKED_FIELDS = Object.freeze([
  "name", "credential", "city", "state", "npi", "slug", "listingSource", "licenseNumber",
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
  public_email: value => boundedText(value, 254, /^(?:[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})?$/i),
  show_phone: value => typeof value === "boolean" ? value : null,
  show_email: value => typeof value === "boolean" ? value : null,
  in_person: value => typeof value === "boolean" ? value : null,
  specialties: value => boundedList(value, 60),
  approaches: value => boundedList(value, 60),
  populations: value => boundedList(value, 60),
  years_in_practice: value => value === "" ? "" :
    Number.isInteger(value) && value >= 0 && value <= 100 ? value : null,
  education: value => boundedText(value, 240, /^[^<]*$/),
  office_area: value => boundedText(value, 120, /^[^<]*$/),
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
 * languages?: string[], sessionFee?: string, telehealth?: boolean, acceptingNew?: boolean,
 * public_email?: string, show_phone?: boolean, show_email?: boolean, specialties?: string[],
 * approaches?: string[], populations?: string[], years_in_practice?: number | "",
 * education?: string, office_area?: string, in_person?: boolean}} ProfileEdit
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

export const PROFILE_EVENTS = /** @type {const} */ (["view", "call_tap", "email_tap", "website_tap", "share_copy"]);

/** @param {{phone: string, show_phone: boolean, public_email: string, show_email: boolean}} profile */
export function visibleContact(profile) {
  const phone = profile.phone.replace(/[^+0-9]/g, "");
  return {
    phone: profile.show_phone && /^\+?[0-9]+$/.test(phone) ? phone : "",
    email: profile.show_email ? profile.public_email : "",
  };
}

/** @param {Parameters<typeof visibleContact>[0] & {photo_path: string, bio: string, specialties: string[], insurances: string[]}} profile */
export function profileStrength(profile) {
  const contact = visibleContact(profile);
  const items = {
    Photo: profile.photo_path,
    Bio: profile.bio,
    Specialties: profile.specialties.length,
    Insurances: profile.insurances.length,
    "Public phone": contact.phone,
    "Public email": contact.email,
  };
  const missing = Object.keys(items).filter(label => !items[label]);
  return { missing, percent: Math.round((1 - missing.length / 6) * 100) };
}
