# Landing React (Chacinados) + Captura de Leads (n8n) — Prototipo

Prototipo de **landing page de captación** para un negocio de chacinados (ej: *Tourn*), orientado a generar **consultas/pedidos** de forma **ordenada y medible**.

La landing está hecha en **React (Vite)** y envía los datos del formulario a un **Webhook de n8n**, donde se pueden:

- Registrar leads en **Google Sheets / Notion** (CRM simple)
- Notificar al equipo
- Automatizar seguimientos
- Medir conversiones por canal (**UTM**)

---

## Objetivo del prototipo

- Transformar tráfico (Facebook/Instagram/QR) en **leads**
- Evitar pérdida de consultas en DM/WhatsApp: **todo queda registrado**
- Permitir un flujo tipo “sistema comercial”:
  - consulta → registro → seguimiento → pedido → recompra
- Ser reutilizable para futuros clientes (plantilla tipo “micro-agencia”)

---

## Qué incluye

### Landing 1 página con

- CTA a catálogo (PDF/link)
- CTA a WhatsApp
- Sección de combos (ejemplo)
- Formulario de consulta/pedido (B2B/B2C)

### Captura de UTMs

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

### Integración

- Envío de payload vía `fetch` (**POST JSON**) a Webhook de n8n
- Construcción de mensaje listo para WhatsApp (para confirmar la consulta)

---

### Capas (en términos prácticos)

- **Views (React JSX):** UI y componentes visuales
- **Controller:** orquesta el submit (normaliza, valida, arma payload, llama service)
- **Model:** estructura y reglas de los datos (Lead)
- **Service:** comunicación externa (HTTP a n8n)
- **Utils:** helpers puros (UTM, sanitizar teléfono)

Esto evita el clásico “**fetch adentro del componente**” y mantiene responsabilidades claras.

---

## Flujo funcional

1. El usuario llega a la landing (idealmente con UTMs desde redes/ads/QR)
2. Completa el formulario (B2B/B2C)
3. `LeadForm` llama a `submitLead(raw)` del controller
4. El **Controller**:
   - Normaliza y valida (Model)
   - Agrega UTMs + metadata (`page_url`, `user_agent`, `timestamp`)
   - Envía el payload a n8n (Service)
5. UI muestra estado **OK/ERROR** y ofrece botón WhatsApp con mensaje prearmado

---

## Configuración (valores a completar)

### En el proyecto (front)

Reemplazar placeholders:

- **Webhook n8n:** `controllers/leadController.js` → `N8N_WEBHOOK_URL`
- **WhatsApp:** `views/components/Header.jsx` y `views/components/LeadForm.jsx` → `WHATSAPP_NUMBER`
- **Catálogo:** `views/components/Header.jsx` → `CATALOG_URL`

✅ Recomendación: mover estos valores a variables de entorno `.env` y usar `import.meta.env`.

### Ejemplo `.env`

```env
VITE_N8N_WEBHOOK_URL=https://tudominio.com/webhook/lead-intake
VITE_WHATSAPP_NUMBER=5492910000000
VITE_CATALOG_URL=https://...

Cómo ejecutar el proyecto (desarrollo)
npm install
npm run dev
