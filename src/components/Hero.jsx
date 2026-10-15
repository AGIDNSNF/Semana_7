// src/components/Hero.jsx
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">✨ Periodo Académico 2026</span>
        <h2>Bienvenido al Sistema Escolar San Ramón</h2>
        <p>
          Plataforma integral para la gestión académica. Matrículas, cursos,
          alumnos y todo lo que necesitas en un solo lugar.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>1,240</strong>
            <span>Alumnos</span>
          </div>
          <div className="hero-stat">
            <strong>48</strong>
            <span>Docentes</span>
          </div>
          <div className="hero-stat">
            <strong>12</strong>
            <span>Cursos</span>
          </div>
          <div className="hero-stat">
            <strong>98%</strong>
            <span>Satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;