// src/components/ContadorVisitas.jsx
import { useState } from 'react';

function ContadorVisitas() {
  const [visitas, setVisitas] = useState(0);
  const [renders, setRenders] = useState(1);
  let variableNormal = 0;

  const incrementar = () => {
    setVisitas(visitas + 1);
    setRenders(renders + 1);
  };

  const resetear = () => {
    setVisitas(0);
    setRenders(renders + 1);
  };

  return (
    <section className="seccion">
      <div className="seccion-header">
        <div className="seccion-icon">📊</div>
        <div className="seccion-title">
          <h2>Ciclo de Render y Re-renders</h2>
          <p>
            Demostración en vivo con <code>useState</code>
          </p>
        </div>
      </div>

      <div className="contador-container">
        <div className="contador-display">
          <div className="numero">{visitas}</div>
          <div className="contador-label">Visitas registradas</div>
        </div>

        <div className="botones-grupo">
          <button onClick={incrementar} className="btn btn-primary">
            ➕ Registrar Visita
          </button>
          <button onClick={resetear} className="btn btn-ghost">
            🔄 Resetear
          </button>
        </div>

        <div className="info-renders">
          <div className="info-item">
            🔄 Re-renders: <strong>{renders}</strong>
          </div>
          <div className="info-item">
            📌 Variable normal (no re-render): <strong>{variableNormal}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContadorVisitas;