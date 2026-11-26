# Therapist professional backend pilot

Registry credentials shown on public listings are pre-existing public registry data and display as they always have. License numbers and email addresses submitted through the claim and sign-in forms are private and never display.

1. Create a free Supabase project. Open **SQL Editor**, paste the contents of [the professional backend migration](../supabase/migrations/20261124000000_therapist_professional_backend.sql), and run it once.
2. In Supabase, find the project URL, public anon key, and private service-role key. In Vercel, open the MindCheckTools project and add these values under **Settings → Environment Variables**. Add the same three settings to local `.env.local` for the pilot scripts.

   | Setting | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SUPABASE_URL` | Project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key |
   | `SUPABASE_SERVICE_ROLE_KEY` | Private service-role key |

   Keep the service-role key in those two private settings.
3. In Supabase, open **Authentication → URL Configuration**, set the site URL to `https://mindchecktools.com`, and allow `https://mindchecktools.com/therapists/auth/callback`. Professionals request a magic link at `/therapists/sign-in` and open the link in the same browser.
4. When a claim arrives, run these commands from the project folder. Review the claimant's authority over the listing before approval. The pending list shows license matches first.

   ```sh
   node --env-file=.env.local scripts/list-therapist-claims.mjs
   node --env-file=.env.local scripts/approve-therapist-claim.mjs --reference MCT-T-…
   ```

   Use the exact reference from the list. To reject it, add `--reject`. Treat the pending list as private because it contains work email addresses. If a claimant emailed a reference missing from the list, ask them to resubmit once the backend is available.
5. Charging remains off until attorney review.

## Profile backend v2

After the v1 migration, apply [the v2 migration](../supabase/migrations/20261126000000_therapist_backend_v2.sql) in coordination with the v2 app release. It removes the v1 direct profile read grant, including access to phone numbers before consent.

In **Storage → New bucket**, create `therapist-photos` as a public bucket with a 2 MB file limit and allowed MIME types `image/jpeg` and `image/png`. Give browser roles no object write policies for this bucket. The application authorizes each authenticated owner before writing through the service role. Photos are public once uploaded. Replacement removes the previous object when possible. Check for orphaned objects after storage errors.

Profile events store aggregate UTC counts only. The dashboard shows the current UTC week and calendar month. Counts describe recorded requests and can include repeat visits or taps.

### Monthly digest draft

Subject: Your MindCheck profile this month

For [UTC calendar month], your profile recorded [views] views, [call taps] call taps, [email taps] email taps, [website taps] website taps, and [link copies] profile link copies.

[If a strength item is missing, include one suggestion based on the saved profile, such as “Add a bio so visitors know what services you offer.”]

View your profile activity in the therapist dashboard.

Sender selection and delivery are pending owner decision.
