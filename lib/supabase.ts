// lib/supabase.ts — optional Supabase client
// Only used for feedback storage. The package is optional — if not installed,
// all routes gracefully skip DB writes and still send email notifications.

let createClient: ((url: string, key: string, opts?: object) => object) | null = null

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  createClient = require("@supabase/supabase-js").createClient
} catch {
  // Package not installed — DB writes will be skipped
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceKey) {
  console.warn(
    "[supabase] NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set — DB writes disabled."
  )
}

export const supabaseAdmin =
  url && serviceKey && createClient
    ? (createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      }) as { from: (table: string) => { insert: (data: object) => Promise<{ error: object | null }> } })
    : null

export const hasSupabase = () => supabaseAdmin !== null
