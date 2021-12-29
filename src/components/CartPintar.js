import React from 'react'

// indica como se pinta cada producto del carrito
const CartPintar = (props) => {
    
    return (
        <div>
            {props.producto} x {props.cantidad}
        </div>
    )
}

export default CartPintar