import { buildWhatsAppUrl } from "../../controllers/leadController";

const WHATSAPP_NUMBER = "5492910000000";
const CATALOG_URL = "/catalogo.pdf";

export default function Header() {
  const msg = "Hola! Quiero hacer un pedido/consulta. ¿Me pasás lista de precios y mínimos?";
  const wa = buildWhatsAppUrl(WHATSAPP_NUMBER, msg);

  return (
    <header className="top">
      <div className="brand">
        <div className="logo">T</div>
        <div>
          <div className="title">Tourn Chacinados</div>
          <div className="subtitle muted">Pedidos y consultas • WhatsApp</div>
        </div>
      </div>

      <div className="row">
        <a className="btn ghost" href={CATALOG_URL} target="_blank" rel="noreferrer">
          Ver catálogo (PDF)
        </a>
        <a className="btn primary" href={wa} target="_blank" rel="noreferrer">
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}