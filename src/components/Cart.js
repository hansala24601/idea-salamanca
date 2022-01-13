
import React  from 'react'

import { useContext}  from 'react'

import CartPintar from './CartPintar';


import {CarritoContexto} from './CartContext';



    const Cart = (props) => {
    

        const {list, total, removeElem} = useContext(CarritoContexto)


        return (
            <div>

                <h2>En el carrito hay...</h2>
                {total} elementos


                 {list.map(pt => <CartPintar key={pt.producto} producto={pt.producto} cantidad={pt.cantidad} precio={pt.precio} />)} 

                

            </div>
        )



}

export default Cart

