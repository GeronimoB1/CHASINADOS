export function normalizeLead(raw) {
  return {
    name: String(raw.name || "").trim(),
    phone: String(raw.phone || "").trim(),
    customer_type: String(raw.customer_type || "").trim(),
    city: String(raw.city || "").trim(),
    interest: String(raw.interest || "").trim(),
    volume: String(raw.volume || "").trim(),
    message: String(raw.message || "").trim(),
  };
}

export function validateLead(lead) {
  const errors = [];
  if (!lead.name) errors.push("Falta nombre.");
  if (!lead.phone) errors.push("Falta WhatsApp.");
  if (!lead.customer_type) errors.push("Falta tipo de cliente.");
  if (!lead.city) errors.push("Falta localidad.");
  if (!lead.interest) errors.push("Falta interés.");
  return { ok: errors.length === 0, errors };
}

export function buildWhatsAppMessage(lead) {
  return (
    `Hola! Soy ${lead.name}. Soy ${lead.customer_type}. Estoy en ${lead.city}. ` +
    `Interés: ${lead.interest}. WhatsApp: ${lead.phone}.` +
    (lead.volume ? ` Volumen: ${lead.volume}.` : "") +
    (lead.message ? ` Mensaje: ${lead.message}` : "")
  );
}