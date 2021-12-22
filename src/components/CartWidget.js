import React from 'react'
//import CartPintar from './CartPintar'

// Nos pinta el carrito con el número de elementos que contiene
const CartWidget = (props) => {


//            {(props.carro.map(pt => <CartPintar producto={pt.producto} cantidad={pt.cantidad} />))}

    return (

            <a href="https://www.google.com/"><i class="fa fa-fw fa-shopping-cart"></i>{props.numCarro}</a>

    )
}


export default CartWidget
