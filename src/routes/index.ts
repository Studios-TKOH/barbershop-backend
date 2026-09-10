import type { FastifyInstance } from 'fastify';
import { healthRoutes } from './health.routes.js';

export async function apiRoutes(app: FastifyInstance) {
  await app.register(healthRoutes);
  // Future modules: identity, catalog, booking, barber-ops, loyalty, engagement, notifications.
}
