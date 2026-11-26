import "server-only";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { PROFILE_EVENTS, profileStrength, visibleContact } from "./professionalCore.mjs";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export function isProfessionalBackendConfigured() {
  return Boolean(url.trim() && anonKey.trim() && serviceKey.trim());
}

const profileColumns = "slug,npi,phone,website,bio,insurances,languages,session_fee,telehealth,accepting_new,updated_at,photo_path,public_email,show_phone,show_email,specialties,approaches,populations,years_in_practice,education,office_area,in_person";
const claimColumns = "reference,slug,status,created_at";
const ownerColumns = `${profileColumns},fee_confirmed_at,availability_confirmed_at`;
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
  photo_path: string;
  public_email: string;
  show_phone: boolean;
  show_email: boolean;
  specialties: string[];
  approaches: string[];
  populations: string[];
  years_in_practice: number | null;
  education: string;
  office_area: string;
  in_person: boolean;
}

export interface OwnerProfile extends PublicProfile {
  fee_confirmed_at: string;
  availability_confirmed_at: string;
}

type Claim = { reference: string; slug: string; npi: string; work_email: string; license_number: string; license_match: boolean };
type ClaimSummary = Pick<Claim, "reference" | "slug"> & { status: "pending" | "approved" | "rejected"; created_at: string };
type OverlayFields = Partial<Omit<OwnerProfile, "slug" | "npi" | "updated_at">>;

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
    const { data, error } = await service().from("therapist_profiles").select(profileColumns)
      .eq("slug", slug).maybeSingle<PublicProfile>();
    if (error || !data) return null;
    const contact = visibleContact(data);
    return { ...data, phone: contact.phone, public_email: contact.email };
  });
}

export async function getDirectoryStrength() {
  return await safely(async () => {
    const client = service();
    const ranks = new Map<string, number>();
    const batchSize = 500;
    for (let cursor = ""; ; ) {
      const { data, error } = await client.from("therapist_profiles")
        .select("slug,photo_path,bio,specialties,insurances,phone,public_email,show_phone,show_email")
        .gt("slug", cursor).order("slug").limit(batchSize);
      if (error) return null;
      for (const profile of data) ranks.set(profile.slug, profileStrength(profile).percent);
      if (data.length < batchSize) return ranks;
      cursor = data[data.length - 1].slug;
    }
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
    const { data, error } = await service().from("therapist_profiles").select(ownerColumns)
      .eq("owner_email", email).order("slug").returns<OwnerProfile[]>();
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
      .eq("slug", slug).eq("owner_email", ownerEmail).select(ownerColumns).maybeSingle<OwnerProfile>();
    return error ? null : data;
  });
}

const photoBucket = "therapist-photos";

export function profilePhotoUrl(profile: Pick<PublicProfile, "slug" | "photo_path">) {
  if (!profile.photo_path.startsWith(`${profile.slug}/`) ||
      !/^[a-f0-9-]{36}\.(?:jpg|png)$/.test(profile.photo_path.slice(profile.slug.length + 1))) return null;
  return `${url.replace(/\/$/, "")}/storage/v1/object/public/${photoBucket}/${profile.photo_path}`;
}

export function replaceProfilePhoto(slug: string, ownerEmail: string, bytes: ArrayBuffer, format: "png" | "jpg") {
  return safely(async () => {
    const client = service();
    const { data: current } = await client.from("therapist_profiles").select("photo_path")
      .eq("slug", slug).eq("owner_email", ownerEmail).maybeSingle<{ photo_path: string }>();
    if (!current) return null;

    const path = `${slug}/${crypto.randomUUID()}.${format}`;
    const bucket = client.storage.from(photoBucket);
    const { error } = await bucket.upload(path, bytes, {
      contentType: format === "png" ? "image/png" : "image/jpeg",
    });
    if (error) return null;

    const { data: saved, error: updateError } = await client.from("therapist_profiles")
      .update({ photo_path: path }).eq("slug", slug).eq("owner_email", ownerEmail)
      .eq("photo_path", current.photo_path).select("photo_path").maybeSingle();
    if (updateError) return null;
    if (!saved) {
      await bucket.remove([path]);
      return null;
    }
    if (profilePhotoUrl({ slug, photo_path: current.photo_path })) {
      await bucket.remove([current.photo_path]).catch(() => null);
    }
    return path;
  });
}

type ProfileEvent = typeof PROFILE_EVENTS[number];
type EventTotals = Record<ProfileEvent, number>;

export function countProfileEvent(slug: string, event: ProfileEvent) {
  return safely(async () => {
    const { error } = await service().rpc("count_therapist_profile_event", { profile_slug: slug, kind: event });
    return error ? null : true;
  });
}

export function getProfileStats(slug: string, ownerEmail: string) {
  return safely(async () => {
    const client = service();
    const now = new Date();
    const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString().slice(0, 10);
    const monday = new Date(now);
    monday.setUTCDate(now.getUTCDate() - (now.getUTCDay() + 6) % 7);
    const weekStart = monday.toISOString().slice(0, 10);
    const { data, error } = await client.from("therapist_profiles")
      .select("therapist_profile_events(event_type,week_start,month_start,count)")
      .eq("slug", slug).eq("owner_email", ownerEmail)
      .or(`week_start.eq.${weekStart},month_start.eq.${monthStart}`, { referencedTable: "therapist_profile_events" })
      .maybeSingle<{ therapist_profile_events: { event_type: ProfileEvent; week_start: string; month_start: string; count: number }[] }>();
    if (error || !data) return null;
    const zero = () => Object.fromEntries(PROFILE_EVENTS.map(event => [event, 0])) as EventTotals;
    const week = zero();
    const month = zero();
    for (const row of data.therapist_profile_events) {
      if (row.week_start === weekStart) week[row.event_type] += Number(row.count);
      if (row.month_start === monthStart) month[row.event_type] += Number(row.count);
    }
    return { week, month };
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
