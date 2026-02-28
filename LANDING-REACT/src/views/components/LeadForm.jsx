import { useState } from "react";
import { submitLead, buildWhatsAppUrl } from "../../controllers/leadController";

const WHATSAPP_NUMBER = "5492910000000";

export default function LeadForm() {
  const [status, setStatus] = useState("");
  const [waUrl, setWaUrl] = useState(buildWhatsAppUrl(WHATSAPP_NUMBER, "Hola! Quiero hacer un pedido/consulta."));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries());

    const result = await submitLead(raw);

    if (result.ok) {
      setStatus("Listo ✅ Registramos tu consulta. Si querés, confirmalo por WhatsApp.");
      setWaUrl(buildWhatsAppUrl(WHATSAPP_NUMBER, result.whatsAppMessage));
      e.currentTarget.reset();
    } else {
      setStatus("No se pudo enviar 😅 Escribinos por WhatsApp y listo.");
      setWaUrl(buildWhatsAppUrl(WHATSAPP_NUMBER, result.whatsAppMessage));
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
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
          <label>Soy</label>
          <select name="customer_type" required defaultValue="">
            <option value="" disabled>Seleccionar</option>
            <option value="B2B">Comercio</option>
            <option value="B2C">Consumidor final</option>
          </select>
        </div>
        <div>
          <label>Localidad</label>
          <input name="city" required placeholder="Bahía Blanca / etc." />
        </div>
      </div>

      <div className="row2">
        <div>
          <label>Interés</label>
          <select name="interest" required defaultValue="">
            <option value="" disabled>Seleccionar</option>
            <option value="Lista de precios">Lista de precios</option>
            <option value="Pedido de prueba">Pedido de prueba</option>
            <option value="Combo Mostrador">Combo Mostrador</option>
            <option value="Combo Picada">Combo Picada</option>
            <option value="Combo Premium">Combo Premium</option>
            <option value="Consulta general">Consulta general</option>
          </select>
        </div>
        <div>
          <label>Volumen (opcional)</label>
          <input name="volume" placeholder="Ej: 5 kg / 20 kg / semanal" />
        </div>
      </div>

      <div>
        <label>Mensaje (opcional)</label>
        <textarea name="message" rows="3" placeholder="Productos, día de entrega, etc." />
      </div>

      <div className="row">
        <button className="btn primary" type="submit">Enviar</button>
        <a className="btn ghost" href={waUrl} target="_blank" rel="noreferrer">
          Prefiero escribir por WhatsApp
        </a>
      </div>

      <div className="status muted">{status}</div>
      <p className="muted small">Al enviar, registramos tu consulta para responderte más rápido.</p>
    </form>
  );
}