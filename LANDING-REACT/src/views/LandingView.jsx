import Header from "./components/Header";
import Combos from "./components/Combos";
import LeadForm from "./components/LeadForm";

export default function LandingView() {
  return (
    <div className="main-container">
      <Header />
      <main className="grid">
        <section className="info-section">
          <h1>Chacinados para comercios y eventos</h1>
          <p className="muted">
            Pedí lista de precios, combos y coordinamos entrega. Atención por WhatsApp.
          </p>

          <div className="chips">
            <span className="chip">✅ Venta al peso</span>
            <span className="chip">🚚 Entregas coordinadas</span>
            <span className="chip">📦 Combos sugeridos</span>
          </div>

          <div className="divider" />
          <Combos />
        </section>

        <section className="info-section">
          <h2>Dejá tu pedido / consulta</h2>
          <p className="muted">Tarda 30 segundos.</p>
          <LeadForm />
        </section>
      </main>

      <footer className="footer muted small">© {new Date().getFullYear()} Tourn • Landing de captación</footer>
    </div>
  );
}