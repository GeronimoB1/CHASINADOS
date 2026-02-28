# Deployment plan (propuesta) — Landing + n8n

## Objetivo
Montar un sistema simple y profesional para captación de leads:
- La **landing** recibe tráfico desde redes/QR.
- El **formulario** manda datos a un webhook.
- **n8n** registra el lead y permite automatizaciones (CRM, notificaciones, seguimiento).
- Todo corre 24/7, con HTTPS, y sin depender de una PC local.

## Separación de responsabilidades
### Landing (frontend)
- Función: mostrar oferta + catálogo + capturar consulta/pedido.
- Debe ser rápida, estable y fácil de actualizar.
- Idealmente se despliega en un hosting de sitios estáticos con CDN (porque es “solo frontend”).

### n8n (automatizaciones)
- Función: recibir leads desde la landing, guardarlos y disparar acciones (Sheets/Notion/Telegram/email).
- Requiere persistencia, backups y uptime.
- Idealmente se despliega en un servidor (VPS) o servicio dedicado (cloud).

## Arquitectura recomendada
- **Subdominio para la landing**: `www.tudominio.com`
- **Subdominio para n8n**: `n8n.tudominio.com`
- Razón: separar el sitio público del panel/infra de automatizaciones.

## Hosting recomendado (conceptual)
### Opción A (recomendada para arrancar)
- Landing: hosting estático (ej: Vercel/Netlify/Cloudflare Pages).
- n8n: VPS + contenedor (Docker) con almacenamiento persistente.

**Ventajas**
- Menos mantenimiento en la parte web.
- La landing aprovecha CDN y deploy automático.
- n8n queda controlado y estable.

**Desventajas**
- Hay dos entornos (hosting web + VPS).

### Opción B (todo en un VPS)
- Landing y n8n corren en el mismo VPS (containers separados).

**Ventajas**
- Todo centralizado y bajo control.

**Desventajas**
- Más mantenimiento (HTTPS, seguridad, deploy web).
- La landing pierde parte de las ventajas de CDN y deploy automático.

## Dominio y HTTPS (conceptual)
- Recomendado gestionar el DNS en un proveedor como Cloudflare.
- Ambos subdominios (`www` y `n8n`) deben resolver correctamente.
- HTTPS es obligatorio para:
  - seguridad (datos del formulario),
  - evitar bloqueos del navegador,
  - permitir integraciones con servicios externos.
- El panel de n8n debe estar protegido (no dejarlo “abierto” sin control).

## Flujo final esperado (resumen)
1. Usuario entra a `www.tudominio.com` desde Facebook/Instagram/QR.
2. Completa formulario (o toca WhatsApp).
3. La landing envía el lead al webhook en `n8n.tudominio.com`.
4. n8n registra el lead en un CRM simple (Sheets/Notion) y notifica al equipo.
5. Equipo responde por WhatsApp y luego hace seguimiento.
6. Con UTMs se puede medir de dónde vino cada consulta.

## Decisión tomada para el prototipo (para mañana)
- Empezar con **Opción A** (landing estática + n8n en VPS) por simplicidad y estabilidad.
- Mantener subdominios separados para evitar mezclar sitio público con automatizaciones.
