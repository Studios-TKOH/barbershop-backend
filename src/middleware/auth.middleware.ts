import type { FastifyReply, FastifyRequest } from 'fastify';
import type { SupabaseClient } from '@supabase/supabase-js';
import { HttpError } from '../utils/http-error.js';

export function requireAuth(supabase: SupabaseClient) {
  return async function authMiddleware(request: FastifyRequest, _reply: FastifyReply) {
    const authorization = request.headers.authorization;
    const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : null;

    if (!token) throw new HttpError(401, 'AUTH_REQUIRED', 'Authentication required');

    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) throw new HttpError(401, 'INVALID_TOKEN', 'Invalid or expired token');

    request.authUser = {
      id: data.user.id,
      ...(data.user.email ? { email: data.user.email } : {}),
      roles: [],
    };
  };
}
