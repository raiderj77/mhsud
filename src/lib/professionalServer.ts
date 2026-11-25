import "server-only";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export function isProfessionalBackendConfigured() {
  return Boolean(url.trim() && anonKey.trim() && serviceKey.trim());
}

const publicColumns = "slug,npi,phone,website,bio,insurances,languages,session_fee,telehealth,accepting_new,updated_at";
const claimColumns = "reference,slug,status,created_at";
const clientOptions = { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } };

export interface PublicProfile {
  slug: string;
  npi: string;
  phone: string;
  website: string;
  bio: string;
  insurances: string[];
  languages: string[];
  session_fee: string;
  telehealth: boolean;
  accepting_new: boolean;
  updated_at: string;
}

type Claim = { reference: string; slug: string; npi: string; work_email: string; license_number: string; license_match: boolean };
type ClaimSummary = Pick<Claim, "reference" | "slug"> & { status: "pending" | "approved" | "rejected"; created_at: string };
type OverlayFields = Partial<Omit<PublicProfile, "slug" | "npi" | "updated_at">>;

async function safely<T>(operation: () => Promise<T>): Promise<T | null> {
  if (!isProfessionalBackendConfigured()) return null;
  try {
    return await operation();
  } catch {
    return null;
  }
}

function service() {
  return createClient(url, serviceKey, {
    ...clientOptions,
    global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store", signal: AbortSignal.timeout(3000) }) },
  });
}

export function getProfileOverlay(slug: string) {
  return safely(async () => {
    const client = createClient(url, anonKey, {
      ...clientOptions,
      global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }) },
    });
    const { data, error } = await client.from("therapist_profiles").select(publicColumns)
      .eq("slug", slug).abortSignal(AbortSignal.timeout(1500)).maybeSingle<PublicProfile>();
    return error ? null : data;
  });
}

export function insertClaim(claim: Claim) {
  return safely(async () => {
    const { error } = await service().from("therapist_claims").insert(claim);
    return error ? null : true;
  });
}

export async function getOverlaysByEmail(email: string) {
  return await safely(async () => {
    const { data, error } = await service().from("therapist_profiles").select(publicColumns)
      .eq("owner_email", email).order("slug").returns<PublicProfile[]>();
    return error ? null : data;
  }) ?? [];
}

export async function getClaimsByEmail(email: string) {
  return await safely(async () => {
    const { data, error } = await service().from("therapist_claims").select(claimColumns)
      .eq("work_email", email).order("created_at", { ascending: false }).returns<ClaimSummary[]>();
    return error ? null : data;
  }) ?? [];
}

export function getOverlayOwner(slug: string) {
  return safely(async () => {
    const { data, error } = await service().from("therapist_profiles").select("owner_email")
      .eq("slug", slug).maybeSingle<{ owner_email: string }>();
    return error ? null : data;
  });
}

export function updateOverlay(slug: string, fields: OverlayFields, ownerEmail: string) {
  return safely(async () => {
    const { data, error } = await service().from("therapist_profiles")
      .update({ ...fields, updated_at: new Date().toISOString() })
      .eq("slug", slug).eq("owner_email", ownerEmail).select(publicColumns).maybeSingle<PublicProfile>();
    return error ? null : data;
  });
}

export async function professionalAuth(writable = true) {
  const cookieStore = await cookies();
  return createServerClient(url, anonKey, {
    cookieOptions: { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production" },
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll(values) {
        if (writable) for (const { name, value, options } of values) cookieStore.set(name, value, options);
      },
    },
    global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }) },
  });
}

export function getSessionUser(writable = true) {
  return safely(async () => {
    const client = await professionalAuth(writable);
    const { data, error } = await client.auth.getUser();
    return error ? null : data.user;
  });
}
