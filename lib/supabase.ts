// lib/supabase.ts — optional Supabase client
// Only used for feedback storage in app/api/feedback/route.ts
// If @supabase/supabase-js is not installed, all DB writes are skipped gracefully
// and the feedback route still sends email notifications via Resend.
//
// To enable DB storage: pnpm add @supabase/supabase-js
// Then add to Vercel env vars:
//   NEXT_PUBLIC_SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Minimal type so consumers don't need to import supabase types
type SupabaseClient = {
  from: (table: string) => {
    insert: (data: object) => Promise<{ error: object | null }>
  }
}

function createSupabaseClient(): SupabaseClient | null {
  if (!url || !serviceKey) return null
  try {
    // Dynamic require avoids a hard build-time dependency
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
