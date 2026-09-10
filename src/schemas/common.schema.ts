import { z } from 'zod';

export const uuidSchema = z.string().uuid();
export const isoDateTimeSchema = z.string().datetime({ offset: true });
export const idempotencyKeySchema = z.string().min(8).max(128);

export const appointmentStatusSchema = z.enum([
  'CONFIRMED',
  'ARRIVED',
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED',
  'NO_SHOW',
]);

export const paymentStatusSchema = z.enum(['UNPAID', 'PAID']);
