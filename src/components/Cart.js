
import React  from 'react'

import { useContext}  from 'react'

import CartPintar from './CartPintar';

import { Link } from 'react-router-dom';


import {CarritoContexto} from './CartContext';


    const Cart = (props) => {
    

        const {list, total, clearList} = useContext(CarritoContexto)


        return (
            <div>

                {total===0 && 
                    <>
                        <h2>El carrito está vacío</h2>                     
                        <Link to="/">
                            <button >Ir a la tienda</button>  
                        </Link>
                    </>}


                {total!==0 && <h2>En el carrito hay...</h2>}

                {total!==0 && total }

                {total!==0 && " elementos"}

                {total!==0 && 
                    <>
                        <button onClick={()=>{clearList()}}>Borrar todos</button>
                        <hr></hr>
                    </>
                }

                {list.map(pt => <CartPintar key={pt.producto} producto={pt.producto} cantidad={pt.cantidad} precio={pt.precio} />)} 

                
                {total!==0 && 
                <>
                    <hr></hr>
                    Total compra: {list.map(item => item.cantidad * item.precio).reduce((prev, curr) => prev + curr, 0)} $
                </>}

                <br></br>


            </div>
        )

}

export default Cart

