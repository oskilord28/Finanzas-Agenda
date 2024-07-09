import React, { useState } from 'react';

function Formulario({ agregarGasto }) {
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [monto, setMonto] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    agregarGasto({ categoria, descripcion, fecha, monto });
    setCategoria('');
    setDescripcion('');
    setFecha('');
    setMonto('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <label>
        Categoría:
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Selecciona una categoría</option>
          <option value="Alimentación">Alimentación</option>
          <option value="Transporte">Transporte</option>
          <option value="Ocio">Ocio</option>
          <option value="Otros">Otros</option>
        </select>
      </label>
      <label>
        Descripción:
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </label>
      <label>
        Fecha:
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </label>
      <label>
        Monto:
        <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default Formulario;
