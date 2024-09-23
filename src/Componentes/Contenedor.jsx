

import React,{useState} from "react";
import Formulario from "./Formulario";
import Tareas from "./Tareas";

const Contenedor = ()=>{

const [tareas,setTareas] = useState ([""])

const nuevaTarea = (tarea) =>{
    setTareas([...tareas,tarea])

}
const eliminarTarea = (tarea) =>{
    setTareas([tareas.filter (t => t!== tarea)])
}



    return (
        <div className="contenedor">
            <h1 className="Header">LISTA DE TAREAS</h1>
         < Formulario nuevaTarea = {nuevaTarea} />
         < Tareas tareas={tareas} eliminarTarea={eliminarTarea}/>

        </div>
    )
} 
export default Contenedor ;