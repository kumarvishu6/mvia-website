// Plain anon-key client for public, read-only queries in Server Components.
// No session/cookies involved — just RLS-scoped reads.
import { createClient } from "@supabase/supabase-js";

export const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
