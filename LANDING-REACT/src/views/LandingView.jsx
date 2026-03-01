import Header from "./components/Header";
import LeadForm from "./components/LeadForm";

export default function LandingView() {
  return (
    <div className="main-container">
      <Header />

      <main className="grid">
        <section className="info-section">
          <h1>Chacinados artesanales para comercios</h1>
          <p className="muted">
            Venta al peso, productos curados y entrega coordinada. Pedinos la lista por WhatsApp y te respondemos rápido.
          </p>

          <div className="chips">
            <span className="chip">Venta mayorista</span>
            <span className="chip">Venta al peso</span>
            <span className="chip">Entregas coordinadas</span>
          </div>

          <div className="divider" />

          <h2>Quiénes somos</h2>
          <p className="muted">
            {/* Editá este texto con tu historia real */}
            Somos Tourn. Nacimos de la idea de llevar chacinados con identidad —sin vueltas y con calidad constante—
            a los mostradores de comercios que quieren vender bien y repetir clientes.
          </p>

          <ul className="bullets">
            <li>Productos pensados para rotación y margen en mostrador.</li>
            <li>Atención directa por WhatsApp: rápido, claro y sin “ida y vuelta” eterno.</li>
            <li>Coordinamos entrega según zona y disponibilidad.</li>
          </ul>

          <p className="muted small">
            Tip: si querés, agregamos después “mínimos de compra” y “zonas de entrega” cuando lo tengas definido.
          </p>
        </section>

        <section className="info-section formSection">
          <div className="formCard">
            <h2>Pedí la lista de precios</h2>
            <p className="muted">Te toma menos de 30 segundos.</p>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="footer muted small">
        © {new Date().getFullYear()} Tourn • Captación de consultas
      </footer>
    </div>
  );
}