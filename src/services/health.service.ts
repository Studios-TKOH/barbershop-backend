import type { HealthModel } from '../models/common.model.js';

export function getHealth(version = process.env.APP_VERSION ?? '0.1.0'): HealthModel {
  return { status: 'ok', version };
}
