export const APP_ROLES = ['CLIENT', 'BARBER', 'ADMIN'] as const;
export type AppRole = (typeof APP_ROLES)[number];

export interface AuthenticatedUser {
  id: string;
  email?: string;
  roles: AppRole[];
}

export interface HealthModel {
  status: 'ok';
  version: string;
}
