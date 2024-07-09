import React from 'react';

function Tabla({ gastos, eliminarGasto }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Categoría</th>
          <th>Descripción</th>
          <th>Monto</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map((gasto, index) => (
          <tr key={index}>
            <td>{gasto.fecha}</td>
            <td>{gasto.categoria}</td>
            <td>{gasto.descripcion}</td>
            <td>{gasto.monto}</td>
            <td>
              <button onClick={() => eliminarGasto(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
