
import React  from 'react'


import {CarritoContexto} from './CartContext';
import { useContext}  from 'react'

import CartPintar from './CartPintar';

import { Link } from 'react-router-dom';


import LoginButton from './LoginButton';

import OrderButton from './OrderButton';

import ResultadoCompra from './ResultadoCompra';




    const Cart = (props) => {
    
        // importa lo necesario para gestionar del contexto: el carrito, el total, la función para la limpieza del carrito y el id de la compra
        const {list, total, clearList, idCompra, usuario} = useContext(CarritoContexto)



        return (
            <div>

                {total===0 && idCompra== null &&                        // si aun no hay elementos en el carrito y no hay compra realizada
                    <>
                        <h2>El carrito está vacío</h2>                     
                        <Link to="/">
                            <button className='button-4' >Ir a la tienda</button>  
                        </Link>
                    </>}


                {total!==0 && <h2>En el carrito hay...</h2>}

                {total!==0 && total }

                {total!==0 && " elementos"}

                {total!==0 &&                                           // si hay elementos en el carrito muestra el botón de borrado total
                    <>
                        <span> </span><button className='button-24' onClick={()=>{clearList()}}>Borrar todos</button>
                        <hr></hr>
                    </>
                }

                {                                                       // muestro uno a uno los elementos del carrito a través de el componente CartPintar 
                
                list.map(pt => <CartPintar key={pt.producto} producto={pt.producto} id ={pt.id} cantidad={pt.cantidad} precio={pt.precio} />)
                } 


                {total!==0 &&                                           // si hay elementos en el carrito calculo el total y dibujo el botón de completar venta
                <>
                    <hr></hr>
                    <h2>Total compra: {list.map(item => item.cantidad * item.precio).reduce((prev, curr) => prev + curr, 0)} $</h2>

                </>}

                {usuario.name=="" &&  total!==0 &&                                         
                    <>
                        <LoginButton></LoginButton>
                    </>
                }

                {usuario.name!="" &&  total!==0 &&                                       
                    <>
                    Sus datos son:
                    <br></br>
                    {usuario.name} {usuario.phone} {usuario.email}
                        <OrderButton></OrderButton>
                    </>
                }

                <ResultadoCompra></ResultadoCompra>

            </div>
        )

}

export default Cart

