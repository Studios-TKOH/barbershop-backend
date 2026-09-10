import type { FastifyInstance } from 'fastify';
import { healthController } from '../controllers/health.controller.js';

export function healthRoutes(app: FastifyInstance) {
  app.get('/health', healthController);
}
