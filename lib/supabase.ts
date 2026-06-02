// lib/supabase.ts
// Supabase is not currently used — subscriber data goes to Mailchimp,
// feedback notifications go via Resend. This file is kept as a stub so
// existing imports in api/subscribe and api/feedback don't break.
// To wire up Supabase later, install @supabase/supabase-js and expand this file.

type QueryBuilder = {
  insert: (data: object) => Promise<{ error: object | null }>
  upsert: (data: object, opts?: object) => Promise<{ error: object | null }>
}

type SupabaseClient = {
  from: (table: string) => QueryBuilder
}

export const supabaseAdmin: SupabaseClient | null = null
export const hasSupabase = () => false
