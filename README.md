# Landing React (Chacinados) + Captura de Leads (n8n) — Prototipo

Este proyecto es un prototipo de **landing page de captación** para un negocio de chacinados (ej: Tourn), orientado a generar **consultas/pedidos** de forma ordenada y medible.

La landing está hecha en **React (Vite)** y envía los datos del formulario a un **Webhook de n8n**, donde se pueden:
- registrar leads en Google Sheets/Notion (CRM simple),
- notificar al equipo,
- automatizar seguimientos,
- y luego medir conversiones por canal (UTM).

---

## Objetivo del prototipo

1. Transformar tráfico (Facebook/Instagram/QR) en **leads**.
2. Evitar la pérdida de consultas en DM/WhatsApp: todo queda registrado.
3. Permitir un flujo “sistema comercial”:
   - consulta → registro → seguimiento → pedido → recompra
4. Ser **reutilizable** para futuros clientes (plantilla tipo “micro-agencia”).

---

## Qué incluye

- Landing 1 página con:
  - CTA a catálogo (PDF/link)
  - CTA a WhatsApp
  - sección de combos (ejemplo)
  - formulario de consulta/pedido (B2B/B2C)
- Captura de UTMs:
  - `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- Envío de payload vía `fetch` (POST JSON) a n8n Webhook.
- Construcción de mensaje listo para WhatsApp (para confirmar la consulta).

---

## Arquitectura y decisión de diseño (MVC-like en React)

> **Nota:** En una landing simple no es obligatorio usar MVC, pero se eligió una separación **MVC-like** para mantener orden y escalar como plantilla.

### Capas (en términos prácticos)

- **Views (React JSX)**: UI y componentes visuales.
- **Controller**: orquesta el submit (normaliza, valida, arma payload, llama service).
- **Model**: estructura y reglas de los datos (Lead).
- **Service**: comunicación externa (HTTP a n8n).
- **Utils**: helpers puros (UTM, sanitizar teléfono).

Esto evita “fetch en el componente” y mantiene responsabilidades claras.



---

## Flujo funcional

1. El usuario llega a la landing (idealmente con UTMs desde redes/ads/QR).
2. Completa el formulario (B2B/B2C).
3. `LeadForm` llama al `submitLead(raw)` del controller.
4. Controller:
   - normaliza y valida (Model),
   - agrega UTMs + metadata (`page_url`, `user_agent`, `timestamp`),
   - envía el payload a n8n (Service).
5. UI muestra estado OK/ERROR y ofrece botón WhatsApp con mensaje prearmado.

---

## Configuración (valores a completar)

### En el proyecto (front)
Reemplazar placeholders:

- Webhook n8n:
  - `controllers/leadController.js` → `N8N_WEBHOOK_URL`
- WhatsApp:
  - `views/components/Header.jsx` y `views/components/LeadForm.jsx` → `WHATSAPP_NUMBER`
- Catálogo:
  - `views/components/Header.jsx` → `CATALOG_URL`

> Recomendación: mover estos valores a variables de entorno `.env` y usar `import.meta.env`.

Ejemplo `.env`:

VITE_N8N_WEBHOOK_URL=https://tudominio.com/webhook/lead-intake
VITE_WHATSAPP_NUMBER=5492910000000
VITE_CATALOG_URL=https://...

---

## Cómo ejecutar el proyecto (desarrollo)

```bash
npm install
npm run dev
