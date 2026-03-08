import { useState } from "react";
import { submitLead, buildWhatsAppUrl } from "../../controllers/leadController";

const WHATSAPP_NUMBER = "5492914075178";

// WhatsApp SVG icon
const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function LeadForm() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });

  const generateWaMsg = (data) => {
    const nameStr = data.name || "[Tu Nombre/Comercio]";
    const cityStr = data.city || "[Localidad]";
    return `¡Hola! 🥩 Mi nombre es ${nameStr} y me interesa recibir la lista de precios actualizada para mi comercio en ${cityStr}. ¡Gracias!`;
  };

  const [waUrl, setWaUrl] = useState(
    buildWhatsAppUrl(WHATSAPP_NUMBER, generateWaMsg(formData))
  );

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    setWaUrl(buildWhatsAppUrl(WHATSAPP_NUMBER, generateWaMsg(newData)));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Enviando...");
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const result = await submitLead(raw);
    if (result.ok) {
      setStatus("✓ Registramos tu consulta. Te respondemos pronto.");
    } else {
      setStatus("Error de conexión. Podés escribirnos directamente por WhatsApp.");
    }
  }

  return (
    <>
      <div className="form-side-header">
        <p className="form-side-eyebrow">Contacto mayorista</p>
        <h2 className="form-side-title">Pedí la lista<br />de precios</h2>
        <p className="form-side-sub">Menos de 30 segundos. Te respondemos rápido.</p>
      </div>

      <form onSubmit={onSubmit}>
        <input type="hidden" name="customer_type" value="B2B" />

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input
              className="form-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre o comercio"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">WhatsApp</label>
          <input
            className="form-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Ej: 291xxxxxxxx"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Localidad</label>
            <input
              className="form-input"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Bahía Blanca / etc."
            />
          </div>
          <div className="form-group">
            <label className="form-label">Motivo</label>
            <select
              className="form-input"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Seleccionar...</option>
              <option value="Lista de precios">Lista de precios</option>
              <option value="Hacer un pedido">Hacer un pedido</option>
              <option value="Condiciones">Condiciones de entrega</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Mensaje (opcional)</label>
          <textarea
            className="form-input"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Qué productos buscás, frecuencia, etc."
          />
        </div>

        <div className="form-actions">
          <button className="btn btn-submit" type="submit">
            Enviar consulta
          </button>
          <a className="btn btn-dark" href={waUrl} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Prefiero WhatsApp
          </a>
        </div>

        {status && <p className="form-status">{status}</p>}

        <p className="form-footnote">
          Al enviar, registramos tu consulta para responderte más rápido.
          Tus datos no se comparten con terceros.
        </p>
      </form>
    </>
  );
}