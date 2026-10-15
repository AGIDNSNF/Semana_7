// src/components/BuscadorCursos.jsx
import { useState, useMemo, useCallback, useRef } from 'react';

const CURSOS_INICIALES = [
  { id: 1, nombre: 'Matemática', area: 'Ciencias' },
  { id: 2, nombre: 'Comunicación', area: 'Letras' },
  { id: 3, nombre: 'Física', area: 'Ciencias' },
  { id: 4, nombre: 'Historia', area: 'Letras' },
  { id: 5, nombre: 'Química', area: 'Ciencias' },
  { id: 6, nombre: 'Inglés', area: 'Idiomas' },
  { id: 7, nombre: 'Arte', area: 'Artes' },
  { id: 8, nombre: 'Educación Física', area: 'Deportes' },
];

function BuscadorCursos() {
  const [busqueda, setBusqueda] = useState('');
  const inputRef = useRef(null);

  const cursosFiltrados = useMemo(() => {
    return CURSOS_INICIALES.filter((curso) =>
      curso.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [busqueda]);

  const handleBusqueda = useCallback((e) => {
    setBusqueda(e.target.value);
  }, []);

  const enfocarInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="seccion">
      <div className="seccion-header">
        <div className="seccion-icon">📚</div>
        <div className="seccion-title">
          <h2>Buscador de Cursos</h2>
          <p>
            Optimizado con <code>useMemo</code> + <code>useCallback</code> +{' '}
            <code>useRef</code>
          </p>
        </div>
      </div>

      <div className="buscador">
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar curso..."
          value={busqueda}
          onChange={handleBusqueda}
          className="input-busqueda"
        />
        <button onClick={enfocarInput} className="btn btn-secondary">
          🎯 Enfocar
        </button>
      </div>

      <div className="metricas">
        <div>
          🔍 Resultados: <strong>{cursosFiltrados.length}</strong>
        </div>
        <div>
          ⚡ Cálculos memoizados con <strong>useMemo</strong>
        </div>
        <div>
          🎯 Focus con <strong>useRef</strong> (sin re-render)
        </div>
      </div>

      <div className="grid-cursos">
        {cursosFiltrados.length > 0 ? (
          cursosFiltrados.map((curso) => (
            <div key={curso.id} className="card-curso">
              <h3>{curso.nombre}</h3>
              <span className="badge">{curso.area}</span>
            </div>
          ))
        ) : (
          <p className="sin-resultados">No se encontraron cursos para "{busqueda}"</p>
        )}
      </div>
    </section>
  );
}

export default BuscadorCursos;