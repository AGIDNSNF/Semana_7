// src/App.jsx
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ContadorVisitas from './components/ContadorVisitas';
import ListaAlumnos from './components/ListaAlumnos';
import BuscadorCursos from './components/BuscadorCursos';
import FormularioMatricula from './components/FormularioMatricula';
import Footer from './components/Footer';
import './App.css';

function ContenidoApp() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="main-content">
        <Hero />
        <ContadorVisitas />
        <ListaAlumnos />
        <BuscadorCursos />
        <FormularioMatricula />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ContenidoApp />
    </ThemeProvider>
  );
}

export default App;