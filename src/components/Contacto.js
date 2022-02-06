import React from 'react'


import { useState } from 'react'


const Contacto = () => {

    const [nombre, setNombre] = useState('')

    const [texto, setTexto] = useState('')



    const [mensaje, setMensaje] = useState('')
    

    // compruebo que el email es el mismo en ambos casos o saco un error
    const onClickEnvio = () => {

        setMensaje("Gracias por tu mensaje '"+texto+"', "+nombre);
        // faltaría enviarlo por mail o gestionarlo

    }


    return (
        <div>
            <h2>Formulario de contacto</h2>
            <br></br>
            <b>Nombre: </b><input onChange={event => setNombre(event.target.value)} />
            <br></br>
            <b>Mensaje: </b><textarea onChange={event => setTexto(event.target.value)} />
            <br></br>

            {mensaje}
            <br></br>
            

            <button onClick={onClickEnvio}>Enviar</button>
        </div>
    )
}

export default Contacto