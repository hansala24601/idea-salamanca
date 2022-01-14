import React  from 'react'

import { useContext}  from 'react'
import {CarritoContexto} from './CartContext';


// indica como se pinta cada producto del carrito
const CartPintar = (props) => {


    
    const {removeElem} = useContext(CarritoContexto)

    return (
        <div>
            {props.producto} : {props.cantidad} x {props.precio}$ = {props.cantidad * props.precio} $

            <button onClick={()=>{removeElem(props.producto)}}>x</button>

            <br></br>
        </div>
    )
}

export default CartPintar