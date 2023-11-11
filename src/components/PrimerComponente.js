import React, { useState } from 'react'


export const PrimerComponente = () => {
    
    let nombre = " Diego Munoz";
    let web = "diegomunozweb.es";

    const[nombre,setNombre] = useState(" DIEGO "):

    let cursos = [
        "Master en JavaScript",
        "Master en PHP",
        "Master en React",
        "Master en CSS"
    ];

    const cambiarNombre = (NuevoNombre)=> {
       setNombre(NuevoNombre);
    }


     
    return(
        <div>
            <h1> My Primer Componente </h1>
            <p>Este es un texto en mi componente </p>
            <p>Mi nombre es: <strong className= {nombre.length >= 4 ? 'verde' : 'rojo'} >{nombre}</strong> </p>
            <p>Mi Web es:  {Web}  </p>


            <input type="text" onchange={e => cambiarNombre(e.target.value)} placeholder="Cambia el nombre"  />

            <button onClick ={e =>{
                console.log("el valor guardado en tu estado es :", nombre);

            }}>Mostrar el valor de estado </button>

            <button onClick={ e => cambiarNombre("DIEGO MUNOZ JARAMILLO Web")}></button>

            <h2>Cursos:</h2>
            <ul>
                {
                    cursos.map((curso, indice) => {
                        return (<li key={indice}>
                                   {curso}
                                </li> );


                    })
                };
            </ul>         
         </div>
    )
}