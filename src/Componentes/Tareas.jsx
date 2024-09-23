
import React from "react"

const Tareas = ({tareas, eliminarTarea})=> {

    const handleDelete = (tarea) =>{
            const conf = window.confirm ( "Eliminar esta tarea?")
            if(conf) eliminarTarea(tarea)

    }
    return(
        <ul>
            {/*   cada elemento del conjunto tareas se va a llamar t */}
               {tareas.map(t=>   
                <li className="fs-2">
                    {t}   {/* mostrar la variable  */}
                    <button onClick={()=> handleDelete(t)}>Eliminar</button>

                </li>
            )}
        </ul>
    )
}
  
export default Tareas;

