

import { useContext}  from 'react'
import {CarritoContexto} from './CartContext';

import { useState } from 'react'


const LoginButton = () => {


    // el ID de compra del contexto
    const {usuario, pongoUsuario} = useContext(CarritoContexto)


    const [nombre, setNombre] = useState('')

    const [email1, setEmail1] = useState('')

    const [email2, setEmail2] = useState('')

    const [mensajeError, setMensajeError] = useState('')
    

    // compruebo que el email es el mismo en ambos casos o saco un error
    const buyHandler = () => {

        if(email1==email2)
        {
            pongoUsuario({                                
                name: nombre,
                email: email1    });

                setMensajeError("");
            
        }
        else setMensajeError("El email debe ser igual en ambos campos");

    }
    


    return (
        <div>
            <br></br>
            <hr />
            Para terminar el proceso de compra rellene los siguientes campos:
            <br></br>
            <b>Nombre: </b><input onChange={event => setNombre(event.target.value)} />
            <br></br>
            <b>Email:  </b><input onChange={event => setEmail1(event.target.value)} />
            <br></br>
            <b>Repetir email: </b><input onChange={event => setEmail2(event.target.value)} />
            <br/>

            <i>{mensajeError}</i>
            <br/><br/>

            <button onClick={buyHandler} >Guardar usuario</button>
        </div>
    )
}

export default LoginButton

