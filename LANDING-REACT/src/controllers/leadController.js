import { normalizeLead, validateLead, buildWhatsAppMessage } from "../models/leadModel";
import { sendLeadToWebhook } from "../services/leadService";
import { getUTMs } from "../utils/utm";
import { sanitizePhone } from "../utils/phone";

const N8N_WEBHOOK_URL = "https://TU-DOMINIO-O-IP/webhook/lead-intake";

export function buildWhatsAppUrl(number, text) {
  return `https://wa.me/${2915109303}?text=${encodeURIComponent(text)}`;
}

export async function submitLead(rawForm) {
  // 1) Model: normalizar + validar
  const lead = normalizeLead(rawForm);
  lead.phone = sanitizePhone(lead.phone);

  const validation = validateLead(lead);
  const waMsg = buildWhatsAppMessage(lead);

  if (!validation.ok) {
    return { ok: false, whatsAppMessage: waMsg, errors: validation.errors };
  }

  // 2) Armar payload con UTMs + metadata
  const payload = {
    ...lead,
    ...getUTMs(),
    page_url: window.location.href,
    user_agent: navigator.userAgent,
    timestamp_iso: new Date().toISOString(),
  };

  // 3) Service: enviar a n8n
  const res = await sendLeadToWebhook(N8N_WEBHOOK_URL, payload);

  return { ok: res.ok, whatsAppMessage: waMsg };
}