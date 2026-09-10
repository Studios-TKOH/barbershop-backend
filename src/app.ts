import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import type { AppEnv } from './config/env.js';
import { errorHandler } from './middleware/error-handler.js';
import { apiRoutes } from './routes/index.js';

export function buildApp(env: Pick<AppEnv, 'LOG_LEVEL' | 'CORS_ORIGINS'>) {
  const app = Fastify({
    logger: { level: env.LOG_LEVEL },
    genReqId: () => crypto.randomUUID(),
  });

  app.setErrorHandler(errorHandler);
  app.register(helmet);
  app.register(cors, {
    origin: env.CORS_ORIGINS.split(',').map((origin) => origin.trim()),
    credentials: false,
  });
  app.register(rateLimit, { max: 120, timeWindow: '1 minute' });
  app.register(apiRoutes, { prefix: '/v1' });

  return app;
}
