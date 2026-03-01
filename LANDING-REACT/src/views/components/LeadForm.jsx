import { useState } from "react";
import { submitLead, buildWhatsAppUrl } from "../../controllers/leadController";

const WHATSAPP_NUMBER = "5492910000000";

export default function LeadForm() {
  const [status, setStatus] = useState("");
  const [waUrl, setWaUrl] = useState(
    buildWhatsAppUrl(WHATSAPP_NUMBER, "Hola! Quiero la lista de precios para comercio.")
  );

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries());

    const result = await submitLead(raw);

    if (result.ok) {
      setStatus("Listo. Registramos tu consulta. Si querés, confirmalo por WhatsApp.");
      setWaUrl(buildWhatsAppUrl(WHATSAPP_NUMBER, result.whatsAppMessage));
      e.currentTarget.reset();
    } else {
      setStatus("No se pudo enviar. Escribinos por WhatsApp y lo resolvemos al toque.");
      setWaUrl(buildWhatsAppUrl(WHATSAPP_NUMBER, result.whatsAppMessage));
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {/* Para mantener compatibilidad con tu flujo */}
      <input type="hidden" name="customer_type" value="B2B" />

      <div className="row2">
        <div>
          <label>Nombre</label>
          <input name="name" required placeholder="Tu nombre" />
        </div>
        <div>
          <label>WhatsApp</label>
          <input name="phone" required placeholder="Ej: 291xxxxxxx" />
        </div>
      </div>

      <div className="row2">
        <div>
          <label>Localidad</label>
          <input name="city" required placeholder="Bahía Blanca / etc." />
        </div>
        <div>
          <label>Motivo</label>
          <select name="interest" required defaultValue="">
            <option value="" disabled>Seleccionar</option>
            <option value="Lista de precios">Lista de precios</option>
            <option value="Condiciones de entrega">Condiciones de entrega</option>
            <option value="Hacer un pedido">Hacer un pedido</option>
            <option value="Consulta general">Consulta general</option>
          </select>
        </div>
      </div>

      <div>
        <label>Mensaje (opcional)</label>
        <textarea name="message" rows="3" placeholder="Ej: qué productos buscás, frecuencia, etc." />
      </div>

      <div className="row">
        <button className="btn primary" type="submit">Enviar</button>
        <a className="btn ghost" href={waUrl} target="_blank" rel="noreferrer">
          Prefiero WhatsApp
        </a>
      </div>

      <div className="status muted">{status}</div>
      <p className="muted small">Al enviar, registramos tu consulta para responderte más rápido.</p>
    </form>
  );
}