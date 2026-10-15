// src/components/ListaAlumnos.jsx
import { useFetch } from '../hooks/useFetch';

function ListaAlumnos() {
  const { data: alumnos, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  return (
    <section className="seccion">
      <div className="seccion-header">
        <div className="seccion-icon">👨‍🎓</div>
        <div className="seccion-title">
          <h2>Lista de Alumnos Matriculados</h2>
          <p>
            Datos cargados con <code>useFetch</code> + <code>useEffect</code> +{' '}
            <code>AbortController</code>
          </p>
        </div>
      </div>

      {loading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Cargando alumnos...</p>
        </div>
      )}

      {error && (
        <div className="error-box">
          <p>❌ Error de red: {error}</p>
          <p>El try/catch capturó el error correctamente</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid-alumnos">
          {alumnos.map((alumno) => (
            <div key={alumno.id} className="card-alumno">
              <h3>{alumno.name}</h3>
              <p>📧 {alumno.email}</p>
              <p>🏫 {alumno.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaAlumnos;