# Contribuir a Barbershop Backend

Este repositorio trabaja con un flujo basado en issues, ramas cortas y Pull Requests hacia `dev`.

## 1. Antes de empezar

1. Lee el issue completo y sus dependencias en `Studios-TKOH/barbershop-docs`.
2. Confirma que los issues bloqueantes estén cerrados o pregunta antes de asumir requisitos.
3. Actualiza tu rama local `dev`.
4. Crea una rama específica para un solo issue.

```bash
git switch dev
git pull origin dev
git switch -c feature/123-nombre-corto
```

Tipos permitidos: `feature`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`.

Formato obligatorio:

```text
<tipo>/<issue>-<slug-en-kebab-case>
```

Ejemplos:

```text
feature/14-auth-profile
fix/27-booking-overlap
refactor/31-appointment-service
test/42-loyalty-idempotency
```

## 2. Desarrollo

- Mantén el alcance limitado al issue.
- Sigue la arquitectura `routes -> controllers -> services -> repositories/data`.
- Valida inputs con Zod en el boundary adecuado.
- Nunca confíes en autorización de UI/mobile.
- No accedas a datos de otro shop o usuario sin una regla explícita.
- Mantén toda migration de Supabase versionada.
- No edites migrations ya aplicadas; crea una nueva migration.
- No uses `float` para dinero.
- Mantén timestamps en UTC y timezone de negocio como dato explícito.
- Para mutaciones críticas evalúa transacción, idempotencia, auditoría y concurrencia.

## 3. Tests obligatorios

Toda lógica nueva o modificada debe tener tests unitarios. Si cambia HTTP, autenticación, persistencia, migrations, RLS o una integración, añade además tests de integración.

Antes de abrir PR ejecuta:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test:unit
npm run test:integration
npm run build
```

No abras PR con un comando fallando.

### Mínimo esperado por issue

- happy path;
- inputs inválidos;
- autorización/ownership cuando aplique;
- errores del dominio;
- reintentos/idempotencia cuando aplique;
- concurrencia cuando el issue la mencione;
- regresión de bugs corregidos.

## 4. Commits

Usa Conventional Commits:

```text
feat: ...
fix: ...
test: ...
refactor: ...
docs: ...
chore: ...
ci: ...
```

Haz commits comprensibles y evita mezclar features independientes.

## 5. Pull Request

El flujo normal es:

```text
issue -> feature/fix/... branch -> PR a dev -> CI -> revisión -> merge
```

`main` no recibe PRs desde feature branches. La promoción estable es:

```text
dev -> main
```

El PR debe:

- usar la plantilla del repositorio;
- contener `Closes #<issue>`;
- explicar decisiones técnicas relevantes;
- declarar pruebas agregadas;
- tener CI completamente verde;
- no contener secretos;
- actualizar docs/OpenAPI cuando cambie un contrato.

Cuando todo esté listo, solicita revisión de `@LavenderEdit`.

## 6. Sincronizar una rama larga

```bash
git fetch origin
git switch dev
git pull origin dev
git switch feature/123-nombre-corto
git rebase origin/dev
```

Resuelve conflictos localmente y vuelve a ejecutar todas las verificaciones.

## 7. Cierre de issue

No marques un issue como terminado únicamente porque el código compila. Deben cumplirse todos sus criterios de aceptación y el PR debe estar mergeado a `dev`.

Los issues `[GATE]` al final de cada milestone validan el sistema de forma integral antes de avanzar a la siguiente fase.

## 8. Fuente de verdad

La documentación contractual vive en `Studios-TKOH/barbershop-docs`. Si el código necesita contradecir la documentación, primero se actualiza/decide el contrato y luego se implementa.
