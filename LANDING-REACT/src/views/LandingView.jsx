import LeadForm from "./components/LeadForm";

// WhatsApp SVG icon
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const PRODUCTS = [
  {
    img: "/imag/dos salamines cortados y con pan.jpg",
    name: "Salami Artesanal",
    tag: "Curado en cámara",
  },
  {
    img: "/imag/fetas de sala,iom.png",
    name: "Fetas Premium",
    tag: "Listo para mostrador",
  },
  {
    img: "/imag/feta de jamon crudo.png",
    name: "Jamón Crudo",
    tag: "Maduración lenta",
  },
  {
    img: "/imag/salamin con pan y cuchillo.jpg",
    name: "Longaniza Pampeana",
    tag: "Identidad regional",
  },
];

export default function LandingView() {
  const waNumber = "5492914075178";
  const waMsg = encodeURIComponent(
    "Hola, me interesa recibir la lista de precios actualizada de Chacinados Tourn para mi comercio."
  );

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img
            src="/bg/LOGO.jpg"
            alt="Chacinados Tourn"
            className="navbar-logo"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <span className="navbar-name">
            Chacinados <span>Tourn</span>
          </span>
        </a>

        <div className="navbar-actions">
          <button
            className="btn btn-gold"
            onClick={() => window.open("/catalogo.pdf", "_blank")}
          >
            Ver catálogo PDF
          </button>
          <a
            className="btn btn-wa"
            href={`https://wa.me/${waNumber}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </nav>

      {/* ── PANTALLA 1: SPLIT ── */}
      <div className="split-screen">

        {/* LEFT: Hero con foto */}
        <div className="hero-side">
          <img
            src="/imag/Sin título-1.png"
            alt="Tabla de chacinados artesanales Tourn"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">Sabores de La Pampa · Venta Mayorista</p>
            <h1 className="hero-title">
              Chacinados<br />
              <em>artesanales</em><br />
              para comercios
            </h1>
            <p className="hero-desc">
              Productos con identidad, calidad constante y atención directa.
              Pensados para rotar en mostrador y fidelizar clientes.
            </p>
            <div className="hero-chips">
              <span className="hero-chip">Venta mayorista</span>
              <span className="hero-chip">Venta al peso</span>
              <span className="hero-chip">Entregas coordinadas</span>
            </div>
            <a
              className="btn btn-wa"
              href={`https://wa.me/${waNumber}?text=${waMsg}`}
              target="_blank"
              rel="noreferrer"
              style={{ alignSelf: "flex-start" }}
            >
              <WhatsAppIcon />
              Pedir lista de precios
            </a>
          </div>
        </div>

        {/* RIGHT: Formulario */}
        <div className="form-side">
          <LeadForm />
        </div>
      </div>

      {/* ── PANTALLA 2: BANDA OSCURA ── */}
      <section className="band">
        <div className="band-inner">

          {/* Quiénes somos */}
          <div className="quienes-row">
            <div>
              <p className="quienes-eyebrow">Quiénes somos</p>
              <h2 className="quienes-title">
                Somos <em>Tourn</em>
              </h2>
              <p className="quienes-text">
                Nacimos de la idea de llevar chacinados con identidad —sin vueltas
                y con calidad constante— a los mostradores de comercios que quieren
                vender bien y repetir clientes.
              </p>
              <ul className="quienes-list">
                <li>Productos pensados para rotación y margen en mostrador.</li>
                <li>Atención directa por WhatsApp: rápido, claro y sin idas y vueltas.</li>
                <li>Coordinamos entrega según zona y disponibilidad.</li>
              </ul>
            </div>

            <div className="quienes-image-wrap">
              <img
                src="/imag/corazon de salamin.png"
                alt="Corazón de salamín artesanal Tourn"
              />
            </div>
          </div>

          {/* Productos */}
          <p className="products-heading">Nuestra línea de productos</p>
          <div className="products-strip">
            {PRODUCTS.map((p) => (
              <div className="product-card" key={p.name}>
                <img src={p.img} alt={p.name} />
                <div className="product-card-overlay">
                  <span className="product-card-name">{p.name}</span>
                  <span className="product-card-tag">{p.tag}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer-brand">Chacinados Tourn</span>
        <span>
          © {new Date().getFullYear()} Tourn · Venta mayorista directa · La Pampa
        </span>
        <a
          className="btn btn-wa"
          href={`https://wa.me/${waNumber}?text=${waMsg}`}
          target="_blank"
          rel="noreferrer"
          style={{ padding: "7px 16px" }}
        >
          <WhatsAppIcon />
          Hablar por WhatsApp
        </a>
      </footer>
    </>
  );
}