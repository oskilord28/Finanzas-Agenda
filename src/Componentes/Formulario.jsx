// import React,{useState} from "react";


// const Formulario = ({nuevaTarea})=>{
//     const [form, setForm] = useState ("")

//     const handleChange = (e) =>{
//         setForm(e.target.value)
//     };
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         nuevaTarea(form)
//         setForm("")

//     }
//     return(
//         <form action="" onSubmit={handleSubmit}>
//             <label htmlFor="">Nombre de tarea</label>
//             <input type="text" value={form} onChange={handleChange} name="" id="" />
//             <button type=" submit">Guardar</button>
//         </form>
//     )
    
// }
// export default Formulario;

import React,{useState} from "react";

const Formulario  = ({nuevaTarea})=>{
     
    const [form,setForm] = useState("")

    const handleChange = (e) =>{
        setForm(e.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        nuevaTarea(form)
        setForm("")
    }


    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Nombre de la tarea</label>
            <input type="text" onChange={handleChange} value={form} />
            <button type="submit">Guardar</button>
        </form>
    )
}
export default Formulario;