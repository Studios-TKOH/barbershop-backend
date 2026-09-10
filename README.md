# Barbershop Backend

API y backend de dominio para Barbershop.

## Stack base

- Node.js 22 LTS
- TypeScript
- Fastify
- Zod
- Supabase Auth
- PostgreSQL/Supabase
- Vitest

## Responsabilidad

Este repositorio implementa el contrato definido en `Studios-TKOH/barbershop-docs/docs/03-api/openapi.yaml` y concentra reglas de negocio críticas: autorización, disponibilidad, reservas atómicas, estados de cita/pago, fidelización, QR, recompensas, eventos y auditoría.

La aplicación móvil no debe acceder con privilegios administrativos a la base de datos ni implementar reglas sensibles por su cuenta.

## Arquitectura

`route -> controller -> service -> repository/data source -> PostgreSQL/Supabase`

Cross-cutting concerns viven en `middleware`, `config`, `schemas`, `utils` y `observability`.
