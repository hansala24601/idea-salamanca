import React from 'react'
//import CartPintar from './CartPintar'

import {CarritoContexto} from './CartContext';
import { useContext}  from 'react'


// Nos pinta el carrito con el número de elementos que contiene
const CartWidget = (props) => {


    //            {(props.carro.map(pt => <CartPintar producto={pt.producto} cantidad={pt.cantidad} />))}


    const cosasCarrito = useContext(CarritoContexto);


    console.log("*********llamada desde el carrito "+cosasCarrito.length);


        return (
            <>

                {cosasCarrito.length} elementos
                <a href=""><i class="fa fa-fw fa-shopping-cart"></i>{/*props.numCarro*/}{cosasCarrito}</a>


            {/* <CarritoContexto.Consumer> {cosasCarrito} </CarritoContexto.Consumer> */}




            </>

    )
}


export default CartWidget
