// src/components/Header.jsx
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">🎓</div>
          <div className="logo-text">
            <h1>Colegio San Ramón</h1>
            <p>Formando líderes del futuro</p>
          </div>
        </div>

        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Cambiar tema">
            {theme === 'light' ? '🌙' : '☀️'}
            <span>{theme === 'light' ? 'Oscuro' : 'Claro'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;