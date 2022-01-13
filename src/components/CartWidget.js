import React from 'react'
//import CartPintar from './CartPintar'

import {CarritoContexto} from './CartContext';
import { useContext}  from 'react'


// Nos pinta el carrito con el número de elementos que contiene
const CartWidget = (props) => {


    //            {(props.carro.map(pt => <CartPintar producto={pt.producto} cantidad={pt.cantidad} />))}


    const {list, total, removeElem} = useContext(CarritoContexto)


        return (
            <>


                <a href=""><i class="fa fa-fw fa-shopping-cart"></i>{total}</a>


            {/* <CarritoContexto.Consumer> {cosasCarrito} </CarritoContexto.Consumer> */}




            </>

    )
}


export default CartWidget
