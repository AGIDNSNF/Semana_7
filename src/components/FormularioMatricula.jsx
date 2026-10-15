// src/components/FormularioMatricula.jsx
import { useReducer, useRef } from 'react';

const estadoInicial = {
  nombre: '',
  apellido: '',
  edad: '',
  grado: '1ro Secundaria',
  enviado: false,
  errores: {},
};

function matriculaReducer(state, action) {
  switch (action.type) {
    case 'CAMBIAR_CAMPO':
      return {
        ...state,
        [action.campo]: action.valor,
        errores: { ...state.errores, [action.campo]: null },
      };
    case 'VALIDAR': {
      const errores = {};
      if (!state.nombre.trim()) errores.nombre = 'El nombre es obligatorio';
      if (!state.apellido.trim()) errores.apellido = 'El apellido es obligatorio';
      if (!state.edad || state.edad < 5 || state.edad > 18) {
        errores.edad = 'La edad debe estar entre 5 y 18 años';
      }
      return { ...state, errores };
    }
    case 'ENVIAR':
      return { ...state, enviado: true };
    case 'RESET':
      return estadoInicial;
    default:
      return state;
  }
}

function FormularioMatricula() {
  const [state, dispatch] = useReducer(matriculaReducer, estadoInicial);
  const nombreRef = useRef(null);

  const handleChange = (campo, valor) => {
    dispatch({ type: 'CAMBIAR_CAMPO', campo, valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'VALIDAR' });

    const errores = {};
    if (!state.nombre.trim()) errores.nombre = true;
    if (!state.apellido.trim()) errores.apellido = true;
    if (!state.edad || state.edad < 5 || state.edad > 18) errores.edad = true;

    if (Object.keys(errores).length === 0) {
      dispatch({ type: 'ENVIAR' });
    } else {
      nombreRef.current?.focus();
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setTimeout(() => nombreRef.current?.focus(), 0);
  };

  return (
    <section className="seccion">
      <div className="seccion-header">
        <div className="seccion-icon">📝</div>
        <div className="seccion-title">
          <h2>Formulario de Matrícula</h2>
          <p>
            Estado complejo manejado con <code>useReducer</code> +{' '}
            <code>useRef</code>
          </p>
        </div>
      </div>

      {state.enviado ? (
        <div className="exito-box">
          <div className="exito-icon">✅</div>
          <h3>¡Matrícula Exitosa!</h3>
          <p>
            El alumno <strong>{state.nombre} {state.apellido}</strong> ha sido
            matriculado en <strong>{state.grado}</strong>.
          </p>
          <button onClick={handleReset} className="btn btn-primary">
            Nueva Matrícula
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario">
          <div className="campo">
            <label>Nombre:</label>
            <input
              ref={nombreRef}
              type="text"
              value={state.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              className={state.errores.nombre ? 'input-error' : ''}
              placeholder="Ej: Juan"
            />
            {state.errores.nombre && (
              <span className="error-msg">⚠️ {state.errores.nombre}</span>
            )}
          </div>

          <div className="campo">
            <label>Apellido:</label>
            <input
              type="text"
              value={state.apellido}
              onChange={(e) => handleChange('apellido', e.target.value)}
              className={state.errores.apellido ? 'input-error' : ''}
              placeholder="Ej: Pérez"
            />
            {state.errores.apellido && (
              <span className="error-msg">⚠️ {state.errores.apellido}</span>
            )}
          </div>

          <div className="campo">
            <label>Edad:</label>
            <input
              type="number"
              value={state.edad}
              onChange={(e) => handleChange('edad', e.target.value)}
              className={state.errores.edad ? 'input-error' : ''}
              placeholder="Ej: 12"
            />
            {state.errores.edad && (
              <span className="error-msg">⚠️ {state.errores.edad}</span>
            )}
          </div>

          <div className="campo">
            <label>Grado:</label>
            <select
              value={state.grado}
              onChange={(e) => handleChange('grado', e.target.value)}
            >
              <option>1ro Secundaria</option>
              <option>2do Secundaria</option>
              <option>3ro Secundaria</option>
              <option>4to Secundaria</option>
              <option>5to Secundaria</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            🎓 Matricular Alumno
          </button>
        </form>
      )}
    </section>
  );
}

export default FormularioMatricula;