
import React  from 'react'

import { useContext}  from 'react'

import CartPintar from './CartPintar';

import { Link } from 'react-router-dom';


import {CarritoContexto} from './CartContext';


import OrderButton from './OrderButton';

import ResultadoCompra from './ResultadoCompra';


    const Cart = (props) => {
    

        const {list, total, clearList, idCompra} = useContext(CarritoContexto)



        return (
            <div>

                {total===0 && idCompra== null &&
                    <>
                        <h2>El carrito está vacío</h2>                     
                        <Link to="/">
                            <button className='button-4' >Ir a la tienda</button>  
                        </Link>
                    </>}


                {total!==0 && <h2>En el carrito hay...</h2>}

                {total!==0 && total }

                {total!==0 && " elementos"}

                {total!==0 && 
                    <>
                        <span> </span><button className='button-24' onClick={()=>{clearList()}}>Borrar todos</button>
                        <hr></hr>
                    </>
                }

                {list.map(pt => <CartPintar key={pt.producto} producto={pt.producto} id ={pt.id} cantidad={pt.cantidad} precio={pt.precio} />)} 

                
                {total!==0 && 
                <>
                    <hr></hr>
                    <h2>Total compra: {list.map(item => item.cantidad * item.precio).reduce((prev, curr) => prev + curr, 0)} $</h2>

                    <br></br>

                    <OrderButton></OrderButton>

                </>}



                <ResultadoCompra></ResultadoCompra>



            </div>
        )

}

export default Cart

