import React  from 'react'

// indica como se pinta cada producto del carrito
const CartPintar = (props) => {


    function borrarElemento() {

    
    }
    


    return (
        <div>
            {props.producto} : {props.cantidad} x {props.precio} = {props.cantidad * props.precio}
            <button onClick={borrarElemento}>Borrar</button> 
        </div>
    )
}

export default CartPintar