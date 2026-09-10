import 'fastify';
import type { AuthenticatedUser } from '../models/common.model.js';

declare module 'fastify' {
  interface FastifyRequest {
    authUser?: AuthenticatedUser;
  }
}
