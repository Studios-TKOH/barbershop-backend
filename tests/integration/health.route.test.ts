import { afterEach, describe, expect, it } from 'vitest';
import { buildApp } from '../../src/app.js';

const apps: ReturnType<typeof buildApp>[] = [];
afterEach(async () => Promise.all(apps.splice(0).map((app) => app.close())));

describe('GET /v1/health', () => {
  it('responds with 200 and the health contract', async () => {
    const app = buildApp({ LOG_LEVEL: 'silent', CORS_ORIGINS: 'http://localhost:8081' });
    apps.push(app);

    const response = await app.inject({ method: 'GET', url: '/v1/health' });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({ status: 'ok' });
  });
});
