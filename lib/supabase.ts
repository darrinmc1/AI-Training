// lib/supabase.ts — shared Supabase server client
// Install: npm i @supabase/supabase-js
//
// Usage from a server route:
//   import { supabaseAdmin } from "@/lib/supabase";
//   const { error } = await supabaseAdmin.from("subscribers").insert({ ... });

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  // Do not throw at import time — routes will no-op gracefully if envs are missing.
  // This keeps local dev running before credentials are filled in.
  console.warn(
    "[supabase] NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set — DB writes disabled."
  );
}

export const supabaseAdmin =
  url && serviceKey
    ? createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

export const hasSupabase = () => supabaseAdmin !== null;
