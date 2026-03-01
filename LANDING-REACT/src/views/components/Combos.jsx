export default function Combos() {
  return (
    <>
      <h2>Combos sugeridos (ejemplo)</h2>
      <div className="comboGrid">
        <div className="combo">
          <div className="comboTitle">Combo Mostrador</div>
          <div className="comboText">Para almacenes/rotiserías. Variedad + rotación.</div>
        </div>
        <div className="combo">
          <div className="comboTitle">Combo Picada</div>
          <div className="comboText">Ideal para bares/eventos. Mix de secos.</div>
        </div>
        <div className="combo">
          <div className="comboTitle">Combo Premium</div>
          <div className="comboText">Fiambrerías. Calidad y margen.</div>
        </div>
      </div>
      <p className="muted small">
        *Los combos son para guiar la conversación. Se ajustan según precios/stock real.
      </p>
    </>
  );
}