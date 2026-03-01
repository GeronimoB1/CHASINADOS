export function sanitizePhone(raw) {
  return String(raw || "").replace(/\D/g, "");
}