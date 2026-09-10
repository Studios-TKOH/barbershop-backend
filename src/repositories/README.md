# Repositories / data access

Adapters de persistencia viven aquí cuando un service necesite encapsular acceso a PostgreSQL/Supabase. No colocar reglas de negocio en repositories; su responsabilidad es traducir operaciones de dominio a consultas/RPC y devolver datos tipados.

Para invariantes transaccionales complejas (por ejemplo doble reserva) se preferirán constraints/funciones SQL versionadas y una llamada explícita desde esta capa.
