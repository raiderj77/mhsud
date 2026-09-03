export interface ContactEntry {
  name: string;
  phone: string;
}

export interface PlanData {
  warningSigns: string[];
  copingStrategies: string[];
  distractionPeople: ContactEntry[];
  helpPeople: ContactEntry[];
  professionals: ContactEntry[];
  environmentSteps: string[];
  environmentNotes: string;
  reasonsToLive: string;
}

export interface NormalizedStoredPlan {
  plan: PlanData;
  recovered: boolean;
  veteransContactMigrated: boolean;
}

export interface LoadedSafetyPlan extends NormalizedStoredPlan {
  storageAvailable: boolean;
}

export interface ClearedSafetyPlan {
  cleared: boolean;
  storageAvailable: boolean;
}

const LEGACY_VETERANS_CONTACT: Readonly<ContactEntry> = {
  name: "Veterans Crisis Line",
  phone: "1-800-273-8255 (Press 1)",
};

const CURRENT_VETERANS_PHONE = "Dial 988, then Press 1; or text 838255";

export function defaultSafetyPlan(): PlanData {
  return {
    warningSigns: ["", "", ""],
    copingStrategies: ["", "", ""],
    distractionPeople: [
      { name: "", phone: "" },
      { name: "", phone: "" },
      { name: "", phone: "" },
    ],
    helpPeople: [
      { name: "", phone: "" },
      { name: "", phone: "" },
      { name: "", phone: "" },
    ],
    professionals: [
      { name: "988 Suicide & Crisis Lifeline", phone: "988" },
      { name: "Crisis Text Line", phone: "Text HOME to 741741" },
      { name: "Veterans Crisis Line", phone: CURRENT_VETERANS_PHONE },
      { name: "", phone: "" },
      { name: "", phone: "" },
    ],
    environmentSteps: [],
    environmentNotes: "",
    reasonsToLive: "",
  };
}

function normalizeStringList(value: unknown, fallback: string[]): string[] {
  const candidate = Array.isArray(value) ? value : [];
  const length = Math.max(candidate.length, fallback.length);
  return Array.from({ length }, (_, index) =>
    typeof candidate[index] === "string" ? candidate[index] : (fallback[index] ?? ""),
  );
}

function normalizeContacts(value: unknown, fallback: ContactEntry[]): ContactEntry[] {
  const candidate = Array.isArray(value) ? value : [];
  const length = Math.max(candidate.length, fallback.length);
  return Array.from({ length }, (_, index) => {
    const item = candidate[index];
    const record = item && typeof item === "object" && !Array.isArray(item)
      ? item as Record<string, unknown>
      : {};
    return {
      name: typeof record.name === "string" ? record.name : (fallback[index]?.name ?? ""),
      phone: typeof record.phone === "string" ? record.phone : (fallback[index]?.phone ?? ""),
    };
  });
}

function hasCompletePlanSchema(value: unknown): value is PlanData {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const plan = value as Record<string, unknown>;
  const stringList = (item: unknown, minimum: number) =>
    Array.isArray(item) && item.length >= minimum && item.every((entry) => typeof entry === "string");
  const contactList = (item: unknown, minimum: number) =>
    Array.isArray(item)
    && item.length >= minimum
    && item.every((entry) => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) return false;
      const contact = entry as Record<string, unknown>;
      return typeof contact.name === "string" && typeof contact.phone === "string";
    });
  return stringList(plan.warningSigns, 3)
    && stringList(plan.copingStrategies, 3)
    && contactList(plan.distractionPeople, 3)
    && contactList(plan.helpPeople, 3)
    && contactList(plan.professionals, 5)
    && stringList(plan.environmentSteps, 0)
    && typeof plan.environmentNotes === "string"
    && typeof plan.reasonsToLive === "string";
}

function normalizePlan(value: unknown): PlanData {
  const fallback = defaultSafetyPlan();
  const record = value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};
  return {
    warningSigns: normalizeStringList(record.warningSigns, fallback.warningSigns),
    copingStrategies: normalizeStringList(record.copingStrategies, fallback.copingStrategies),
    distractionPeople: normalizeContacts(record.distractionPeople, fallback.distractionPeople),
    helpPeople: normalizeContacts(record.helpPeople, fallback.helpPeople),
    professionals: normalizeContacts(record.professionals, fallback.professionals),
    environmentSteps: normalizeStringList(record.environmentSteps, fallback.environmentSteps),
    environmentNotes: typeof record.environmentNotes === "string" ? record.environmentNotes : "",
    reasonsToLive: typeof record.reasonsToLive === "string" ? record.reasonsToLive : "",
  };
}

export function normalizeStoredSafetyPlan(value: unknown): NormalizedStoredPlan {
  const plan = normalizePlan(value);
  let veteransContactMigrated = false;
  const professionals = plan.professionals.map((contact) => {
    if (
      contact.name === LEGACY_VETERANS_CONTACT.name
      && contact.phone === LEGACY_VETERANS_CONTACT.phone
    ) {
      veteransContactMigrated = true;
      return { ...contact, phone: CURRENT_VETERANS_PHONE };
    }
    return contact;
  });

  return {
    plan: { ...plan, professionals },
    recovered: !hasCompletePlanSchema(value),
    veteransContactMigrated,
  };
}

export function loadStoredSafetyPlan(readItem: () => string | null): LoadedSafetyPlan {
  let saved: string | null;
  try {
    saved = readItem();
  } catch {
    return {
      plan: defaultSafetyPlan(),
      recovered: false,
      veteransContactMigrated: false,
      storageAvailable: false,
    };
  }

  if (!saved) {
    return {
      plan: defaultSafetyPlan(),
      recovered: false,
      veteransContactMigrated: false,
      storageAvailable: true,
    };
  }

  try {
    return { ...normalizeStoredSafetyPlan(JSON.parse(saved) as unknown), storageAvailable: true };
  } catch {
    return {
      plan: defaultSafetyPlan(),
      recovered: true,
      veteransContactMigrated: false,
      storageAvailable: true,
    };
  }
}

export function clearStoredSafetyPlan(
  confirmed: boolean,
  removeItem: () => void,
): ClearedSafetyPlan {
  if (!confirmed) return { cleared: false, storageAvailable: true };
  try {
    removeItem();
    return { cleared: true, storageAvailable: true };
  } catch {
    return { cleared: true, storageAvailable: false };
  }
}
