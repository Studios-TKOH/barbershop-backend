import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { HttpError } from '../utils/http-error.js';

export function errorHandler(
  error: FastifyError | HttpError,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const status = error instanceof HttpError ? error.statusCode : 500;
  const code = error instanceof HttpError ? error.code : 'INTERNAL_ERROR';

  if (status >= 500) request.log.error({ err: error }, 'request failed');

  return reply
    .code(status)
    .type('application/problem+json')
    .send({
      type: `urn:barbershop:error:${code.toLowerCase()}`,
      title: status >= 500 ? 'Internal server error' : error.message,
      status,
      code,
      detail: error instanceof HttpError ? (error.detail ?? null) : null,
      traceId: request.id,
    });
}
