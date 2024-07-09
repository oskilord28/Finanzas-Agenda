import React, { useState } from 'react';
import Encabezado from './Encabezado';
import Formulario from './Formulario';
import Tabla from './Tabla';

function Contenedor() {
  const [gastos, setGastos] = useState([]);

  const agregarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  const eliminarGasto = (index) => {
    const nuevosGastos = [...gastos];
    nuevosGastos.splice(index, 1);
    setGastos(nuevosGastos);
  };

  return (
    <div>
      <Encabezado />
      <Formulario agregarGasto={agregarGasto} />
      <Tabla gastos={gastos} eliminarGasto={eliminarGasto} />
    </div>
  );
}

export default Contenedor;
