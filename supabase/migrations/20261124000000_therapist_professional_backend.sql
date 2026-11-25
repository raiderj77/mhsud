begin;

create table public.therapist_claims (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  slug text not null,
  npi text not null,
  work_email text not null,
  license_number text not null default '',
  license_match boolean not null default false,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  decided_at timestamptz
);

create table public.therapist_profiles (
  slug text primary key,
  npi text not null,
  owner_email text not null,
  phone text not null default '',
  website text not null default '',
  bio text not null default '',
  insurances text[] not null default '{}',
  languages text[] not null default '{}',
  session_fee text not null default '',
  telehealth boolean not null default false,
  accepting_new boolean not null default false,
  updated_at timestamptz not null default now()
);

create index therapist_claims_work_email_idx on public.therapist_claims (work_email);
create index therapist_claims_status_idx on public.therapist_claims (status);
create index therapist_profiles_owner_email_idx on public.therapist_profiles (owner_email);

alter table public.therapist_claims enable row level security;
alter table public.therapist_profiles enable row level security;

revoke all on public.therapist_claims, public.therapist_profiles from public, anon, authenticated;
grant select, insert, update on public.therapist_claims, public.therapist_profiles to service_role;
grant select (slug, npi, phone, website, bio, insurances, languages, session_fee, telehealth, accepting_new, updated_at)
  on public.therapist_profiles to anon, authenticated;

create policy therapist_profiles_public_read on public.therapist_profiles
  for select to anon, authenticated using (true);

-- Keep the decision and ownership reservation in the same transaction.
create function public.decide_therapist_claim(claim_reference text, reject_claim boolean)
returns text
language plpgsql
set search_path = ''
as $$
declare
  claim public.therapist_claims%rowtype;
  target_status text := case when reject_claim then 'rejected' else 'approved' end;
begin
  select * into claim from public.therapist_claims
    where reference = claim_reference for update;
  if not found then return 'not_found'; end if;
  if claim.status = target_status then return target_status; end if;
  if claim.status <> 'pending' then return 'already_decided'; end if;

  if not reject_claim then
    insert into public.therapist_profiles (slug, npi, owner_email)
      values (claim.slug, claim.npi, claim.work_email)
      on conflict (slug) do nothing;
    if not exists (
      select 1 from public.therapist_profiles
        where slug = claim.slug and npi = claim.npi and owner_email = claim.work_email
    ) then return 'ownership_conflict'; end if;
  end if;

  update public.therapist_claims
    set status = target_status, decided_at = now() where id = claim.id;
  return target_status;
end;
$$;

revoke all on function public.decide_therapist_claim(text, boolean) from public, anon, authenticated;
grant execute on function public.decide_therapist_claim(text, boolean) to service_role;

commit;
