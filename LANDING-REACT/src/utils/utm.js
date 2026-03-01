export function getUTMs() {
  const p = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  return Object.fromEntries(keys.map(k => [k, p.get(k) || ""]));
}