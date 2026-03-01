import { buildWhatsAppUrl } from "../../controllers/leadController";

const WHATSAPP_NUMBER = "5492910000000";
const CATALOG_URL = "/catalogo.pdf";
const LOGO_URL = "bg/LOGO.jpg";

export default function Header() {
  const msg = "Hola! Quiero la lista de precios y condiciones de entrega para comercio.";
  const wa = buildWhatsAppUrl(WHATSAPP_NUMBER, msg);

  return (
    <header className="top">
      <div className="brand">
        <img className="brandLogo" src={LOGO_URL} alt="Tourn Chacinados" />
        <div className="brandText">
          <div className="title">Chacinados Tourn</div>
          <div className="subtitle muted">Sabores de La Pampa • Ventas a comercios</div>
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