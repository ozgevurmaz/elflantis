import { createBrowserClient } from "@supabase/ssr";

/** Browser tarafında (Client Component'lerde) kullanılacak Supabase client'ı — anon key ile, RLS'e tabidir. */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
