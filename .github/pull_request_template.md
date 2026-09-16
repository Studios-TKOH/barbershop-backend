## Resumen
Describe brevemente qué cambia y por qué.

## Issue relacionado
Closes #

## Rama y destino
- Rama origen esperada: `feature/<issue>-<slug>`, `fix/<issue>-<slug>`, `refactor/<issue>-<slug>`, `test/<issue>-<slug>`, `docs/<issue>-<slug>`, `chore/<issue>-<slug>` o `ci/<issue>-<slug>`.
- Destino normal: `dev`.
- Solo `dev` puede abrir PR hacia `main` para una promoción/release.

## Cambios realizados
- 

## Decisiones técnicas
Explica cualquier decisión que no sea evidente, incluyendo cambios de contrato, migraciones, seguridad, RLS, concurrencia o idempotencia.

## Pruebas agregadas o actualizadas
- [ ] Añadí/actualicé tests unitarios para toda lógica nueva o modificada.
- [ ] Añadí/actualicé tests de integración cuando cambia HTTP, DB, auth, migrations o integraciones.
- [ ] Cubrí happy path y casos de error relevantes.

## Verificación ejecutada
Marca únicamente lo que ejecutaste realmente.
- [ ] `npm run format:check`
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run test:unit`
- [ ] `npm run test:integration`
- [ ] `npm run build`
- [ ] CI de GitHub Actions está verde.

## Base de datos / API / seguridad
- [ ] No aplica, o las migrations necesarias están incluidas y son reproducibles.
- [ ] No aplica, o OpenAPI/docs fueron actualizados si cambió el contrato.
- [ ] No se versionaron secretos, credenciales ni datos reales sensibles.
- [ ] Validé autorización/RBAC/RLS para cualquier operación nueva o modificada.
- [ ] Las mutaciones críticas mantienen idempotencia/auditoría/concurrencia cuando aplica.

## Evidencia
Incluye logs, requests/responses de ejemplo, captura del CI o notas de prueba manual cuando aporten valor.

## Riesgo y rollback
Indica el riesgo del cambio y cómo revertirlo o hacer forward-fix si falla.

## Checklist final antes de pedir revisión
- [ ] El issue cumple todos sus criterios de aceptación.
- [ ] Mi rama está actualizada con `dev` y no contiene commits ajenos.
- [ ] El PR no incluye cambios fuera del alcance del issue.
- [ ] Solicité revisión de @LavenderEdit únicamente después de dejar el PR listo.
