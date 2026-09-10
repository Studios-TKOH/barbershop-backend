import { describe, expect, it } from 'vitest';
import { getHealth } from '../../src/services/health.service.js';

describe('getHealth', () => {
  it('returns the provided application version', () => {
    expect(getHealth('9.9.9')).toEqual({ status: 'ok', version: '9.9.9' });
  });
});
