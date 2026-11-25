# Therapist professional backend pilot

Before opening the pilot, decide how to display legacy registry credentials containing digits. Public overlays are held for those listings while that decision is pending.

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
