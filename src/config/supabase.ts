import { createClient } from '@supabase/supabase-js';
import type { AppEnv } from './env.js';

export function createSupabaseAdmin(env: AppEnv) {
  return createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
