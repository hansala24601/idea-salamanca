import React  from 'react'

import { useContext}  from 'react'
import {CarritoContexto} from './CartContext';

import { Link } from 'react-router-dom';

// componente que usamos para mostrar el ID de compra al cliente
const ResultadoCompra = (props) => {


    // el ID de compra del contexto
    const {idCompra} = useContext(CarritoContexto)
    
    let resultado= idCompra;

        return (
            <div>

                {(resultado!="" ) &&

                <>
                            <h3>Resultado compra: {resultado} </h3>

                            <Link to="/">
                                <button className='button-4' >Ir a la tienda</button>  
                            </Link>
                            
                            </>
                }


            </div>
        )
    }

export default ResultadoCompra