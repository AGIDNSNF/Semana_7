// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>🎓 Colegio San Ramón</h4>
          <p>Formando líderes del futuro desde 1985.</p>
          <p>Educación de calidad, valores y excelencia académica.</p>
        </div>

        <div className="footer-col">
          <h4>Enlaces Rápidos</h4>
          <a href="#inicio">Inicio</a>
          <a href="#alumnos">Alumnos</a>
          <a href="#cursos">Cursos</a>
          <a href="#matricula">Matrícula</a>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <p>📍 Av. Educación 123, Huancayo</p>
          <p>📞 (064) 123-4567</p>
          <p>✉️ info@sanramon.edu.pe</p>
        </div>

        <div className="footer-col">
          <h4>Tecnología</h4>
          <p>⚛️ React + Vite</p>
          <p>🎨 CSS Moderno</p>
          <p>🔧 Hooks: useState, useEffect, useContext, useMemo, useCallback, useRef, useReducer</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Colegio San Ramón - Sistema Escolar SPA. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;