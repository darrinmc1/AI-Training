// lib/supabase.ts — optional Supabase client
// Used by:
//   app/api/subscribe/route.ts  — upserts email subscribers
//   app/api/feedback/route.ts   — inserts feedback submissions
//
// The @supabase/supabase-js package is NOT in package.json — it's optional.
// If not installed, all DB writes are skipped and routes degrade gracefully
// (subscribe still hits Mailchimp + sends email; feedback still notifies admin).
//
// To enable DB storage: pnpm add @supabase/supabase-js
// Then add to Vercel env vars:
//   NEXT_PUBLIC_SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Minimal type covering all methods used across API routes
type QueryBuilder = {
  insert: (data: object) => Promise<{ error: object | null }>
  upsert: (data: object, opts?: object) => Promise<{ error: object | null }>
}

type SupabaseClient = {
  from: (table: string) => QueryBuilder
}

function createSupabaseClient(): SupabaseClient | null {
  if (!url || !serviceKey) return null
  try {
    // Dynamic require avoids a hard build-time dependency on the package.
    // Next.js externals config in next.config.mjs silences the webpack warning.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createClient } = require("@supabase/supabase-js")
    return createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    }) as SupabaseClient
  } catch {
    return null
  }
}

export const supabaseAdmin: SupabaseClient | null = createSupabaseClient()
export const hasSupabase = () => supabaseAdmin !== null
