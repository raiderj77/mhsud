# MindCheck Professional Backend v2: Rich, Shareable Profiles

Owner direction (Jason, 2026-11-26): make the professional backend very detailed,
so professionals love their profile, share it, and keep coming back. Contact
details must let a person seeking services call or email the professional
directly from the profile.

Builds on v1 (merged 2026-11-25, PR #201): Supabase overlay keyed by slug/NPI,
magic-link sign-in, dashboard editing of phone, website, bio, insurances,
languages, session fee, telehealth, accepting-new. v2 starts only after the
Supabase wiring verifies live.

## 1. Public profile page (new)

- Dedicated page per professional: /therapists/<slug> (today the directory is
  list cards only; a shareable profile needs its own page).
- Page carries: name, credential, photo (if uploaded), city and service area,
  bio, specialties, treatment approaches, populations served, insurances,
  languages, session fee, telehealth and in-person flags, accepting-new badge,
  years in practice, education, license state (locked fields stay locked:
  name, credential, license number, city, NPI come from the registry record).
- Contact block, big and thumb friendly on mobile:
  - Call button: tel: link to the professional's public phone.
  - Email button: mailto: link to the professional's public email.
  - Website button when a website is set.
- Per-profile share metadata: page title, description, and an og:image card
  generated from name, credential, city, and photo, so a pasted link looks
  good in texts, socials, and search.
- Share row on the page itself: copy link, plus native share targets.

## 2. Consent rules (non-negotiable)

- Login email (magic link identity) is NEVER shown publicly.
- Public phone and public email are separate fields the professional fills in
  on purpose, each with its own show/hide toggle. Default: hidden until set.
- A field shows publicly only when the professional saved it AND left its
  toggle on. Turning a toggle off removes it from the page on the next render.
- No testimonials or reviews. No exceptions (fabrication and regulation risk).
- Nothing about a visitor's screening answers or score is ever attached to a
  profile view or a contact tap (standing privacy rule, 2026-11-21).

## 3. Dashboard: share tools

- "Your public profile" panel: live link, copy button, QR code for the link
  (printable for office cards and flyers), and a downloadable profile card
  image for socials.
- Website badge: "Listed on MindCheck" embed snippet the professional can
  paste on their own site, linking back to their profile.
- Profile strength meter: percentage complete with the exact missing items
  listed (photo, bio, specialties, insurances, public phone, public email).
  Complete profiles rank above incomplete ones in directory order.

## 4. Reasons to come back

- View and tap counts on the dashboard: profile views, call taps, email taps,
  website taps, counted per week and per month. Counts only; no visitor
  identity, no screening data.
- Monthly email to the professional: "Your MindCheck profile this month,"
  with the same counts and one suggested improvement.
- Gentle staleness nudge: if accepting-new or fees are untouched for 90 days,
  the dashboard asks for a one-tap confirm that they are still current.

## 5. Data changes (new migration after v1)

- therapist_profiles overlay gains: photo_path (Supabase Storage bucket
  "therapist-photos", public read, owner-only write), public_email,
  show_phone, show_email, specialties[], approaches[], populations[],
  years_in_practice, education, office_area.
- New table therapist_profile_events: slug, event type (view, call_tap,
  email_tap, website_tap, share_copy), week bucket. Aggregate counts only,
  no visitor identifiers, no IP storage.
- Public page reads overlay + aggregate counts never; counts are dashboard
  only, read through the service role after ownership check.

## 6. Gates that do not move

- Paid checkout stays OFF until the attorney review clears (Jason held the
  consult 2026-11-26; the build proceeds free, charging does not).
- No fabricated proof anywhere: counts shown to a professional are their real
  counts, including zero.
- Articles and public pages stay truthful to what the profile actually says.

## 8. Screener embeds (Jason decision, 2026-11-26: layered, both)

- FREE embed for every claimed profile: one screener widget (iframe) the
  professional pastes on their own site. MindCheck branding stays on it.
  Results page inside the widget routes to the professional's MindCheck
  profile and the directory.
- ENHANCED embed, part of the $15 Claimed and Verified tier (built now,
  switched on only when charging turns on): full screener library, the
  professional's own colors, results show their call and email buttons
  first, embed stats in the dashboard (views, completions, contact taps).
- PRIVACY, absolute: a visitor's answers and score never leave the visitor's
  browser. Nothing is transmitted to the professional or stored by us from
  an embed session. The professional sees aggregate counts only. This is
  both the compliance line and the selling point.

## 7. Build order

1. Wiring verification (in flight 2026-11-26).
2. Migration + storage bucket.
3. Dashboard fields, toggles, strength meter, share panel.
4. Public profile page + og card + contact buttons.
5. Event counting + dashboard stats.
6. Monthly digest email (needs a sending decision; draft only until Jason
   picks the sender route).
