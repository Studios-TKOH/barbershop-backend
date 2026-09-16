# Barbershop Backend

API y backend de dominio para Barbershop.

## Stack base

- Node.js 22 LTS
- npm 10+
- TypeScript
- Fastify
- Zod
- Supabase Auth
- PostgreSQL/Supabase
- Vitest
- Docker
- Supabase CLI

## Responsabilidad

Este repositorio implementa el contrato definido en `Studios-TKOH/barbershop-docs/docs/03-api/openapi.yaml` y concentra reglas de negocio críticas: autorización, disponibilidad, reservas atómicas, estados de cita/pago, fidelización, QR, recompensas, eventos y auditoría.

La aplicación móvil no debe acceder con privilegios administrativos a la base de datos ni implementar reglas sensibles por su cuenta.

## Arquitectura

`route -> controller -> service -> repository/data source -> PostgreSQL/Supabase`

Cross-cutting concerns viven en `middleware`, `config`, `schemas`, `utils` y `observability`.

## Primer arranque local

```bash
git clone https://github.com/Studios-TKOH/barbershop-backend.git
cd barbershop-backend
git switch dev
npm install
cp .env.example .env
npm run typecheck
npm run test:unit
npm run test:integration
npm run build
```

Para Supabase local, instala Supabase CLI y Docker Desktop; luego usa los comandos definidos/documentados por los issues de M1 antes de implementar dominio persistente.

## Flujo de trabajo

1. Escoge un issue listo para trabajar.
2. Lee primero sus dependencias en `Studios-TKOH/barbershop-docs`.
3. Parte siempre desde `dev` actualizado.
4. Crea una rama `<tipo>/<issue>-<slug>`.
5. Implementa el alcance del issue y añade tests unitarios obligatorios.
6. Si cambia HTTP/DB/Auth/RLS/integraciones, añade también tests de integración.
7. Ejecuta toda la verificación local.
8. Abre Pull Request hacia `dev` usando la plantilla.
9. Espera CI verde y solicita revisión de `@LavenderEdit`.
10. El issue se considera terminado cuando el PR queda mergeado a `dev` y cumple todos los criterios de aceptación.

Ejemplo:

```bash
git switch dev
git pull origin dev
git switch -c feature/14-auth-profile
```

## Verificación obligatoria antes de PR

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test:unit
npm run test:integration
npm run build
```

## Documentación para contribuidores

Lee `CONTRIBUTING.md` antes de iniciar el primer issue.

La fuente de verdad funcional y arquitectónica está en `Studios-TKOH/barbershop-docs`.
