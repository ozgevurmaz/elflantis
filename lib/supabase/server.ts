import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/** Sadece Route Handler'larda kullanılacak Supabase client'ı — secret key ile, RLS'i bypass eder. */
export function createServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    { auth: { persistSession: false } },
  );
}
