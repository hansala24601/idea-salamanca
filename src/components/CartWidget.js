import React from 'react'
//import CartPintar from './CartPintar'

import {CarritoContexto} from './CartContext';
import { useContext}  from 'react'

import { Link } from 'react-router-dom';


// Nos pinta el carrito con el número de elementos que contiene
const CartWidget = () => {


    //            {(props.carro.map(pt => <CartPintar producto={pt.producto} cantidad={pt.cantidad} />))}


    const {total} = useContext(CarritoContexto)


        return (
                <div>

                    {total!=0 && 
                        <>
                            <Link to="/pago/">
                                <i class="fa fa-fw fa-shopping-cart"></i>{total}
                            </Link>
                        </>
                    }

                </div>     
        )


}


export default CartWidget
