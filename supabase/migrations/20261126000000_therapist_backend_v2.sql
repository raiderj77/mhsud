begin;

alter table public.therapist_profiles
  add column photo_path text not null default '',
  add column public_email text not null default '',
  add column show_phone boolean not null default false,
  add column show_email boolean not null default false,
  add column specialties text[] not null default '{}',
  add column approaches text[] not null default '{}',
  add column populations text[] not null default '{}',
  add column years_in_practice integer check (years_in_practice between 0 and 100),
  add column education text not null default '',
  add column office_area text not null default '',
  add column in_person boolean not null default false,
  add column fee_confirmed_at timestamptz not null default now(),
  add column availability_confirmed_at timestamptz not null default now();

alter table public.therapist_profiles
  add constraint therapist_public_email_separate
  check (public_email = '' or lower(public_email) <> lower(owner_email));

-- V1 granted direct reads of phone. The server now applies contact consent.
revoke select (slug, npi, phone, website, bio, insurances, languages, session_fee,
  telehealth, accepting_new, updated_at) on public.therapist_profiles from anon, authenticated;
drop policy therapist_profiles_public_read on public.therapist_profiles;

create function public.refresh_therapist_details_dates()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.session_fee is distinct from old.session_fee then
    new.fee_confirmed_at := now();
  end if;
  if new.accepting_new is distinct from old.accepting_new then
    new.availability_confirmed_at := now();
  end if;
  return new;
end;
$$;

create trigger refresh_therapist_details_dates
before update on public.therapist_profiles
for each row execute function public.refresh_therapist_details_dates();

create table public.therapist_profile_events (
  slug text not null references public.therapist_profiles (slug) on delete cascade,
  event_type text not null check (event_type in ('view', 'call_tap', 'email_tap', 'website_tap', 'share_copy')),
  week_start date not null,
  month_start date not null,
  count bigint not null check (count > 0),
  primary key (slug, event_type, week_start, month_start)
);

alter table public.therapist_profile_events enable row level security;
revoke all on public.therapist_profile_events from public, anon, authenticated;
grant select, insert, update on public.therapist_profile_events to service_role;

-- Split weeks at UTC month boundaries so both totals remain exact.
create function public.count_therapist_profile_event(profile_slug text, kind text)
returns void
language sql
set search_path = ''
as $$
  insert into public.therapist_profile_events (slug, event_type, week_start, month_start, count)
  select slug, kind, date_trunc('week', now() at time zone 'UTC')::date,
    date_trunc('month', now() at time zone 'UTC')::date, 1
  from public.therapist_profiles
  where slug = profile_slug
    and (kind in ('view', 'share_copy')
      or (kind = 'call_tap' and show_phone and phone ~ '[0-9]')
      or (kind = 'email_tap' and show_email and public_email <> '')
      or (kind = 'website_tap' and website <> ''))
  on conflict (slug, event_type, week_start, month_start)
  do update set count = therapist_profile_events.count + 1;
$$;

revoke all on function public.count_therapist_profile_event(text, text) from public, anon, authenticated;
grant execute on function public.count_therapist_profile_event(text, text) to service_role;

-- The runbook provisions therapist-photos. Photo writes are server-mediated.
commit;
