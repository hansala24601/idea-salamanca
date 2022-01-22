import React  from 'react'

import { useContext}  from 'react'
import {CarritoContexto} from './CartContext';


// indica como se pinta cada producto del carrito
const CartPintar = (props) => {


    
    const {removeElem} = useContext(CarritoContexto)

    return (
        <div>
            <h3>{props.producto} (ref. {props.id}) : {props.cantidad} x {props.precio}$ = {props.cantidad * props.precio} $

            <span> </span> <button className='button-24' onClick={()=>{removeElem(props.producto)}}>x</button></h3>

            <br></br>
        </div>
    )
}

export default CartPintar