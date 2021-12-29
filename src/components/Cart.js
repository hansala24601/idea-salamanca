
import React, { Component } from 'react'
import CartPintar from './CartPintar';

export class Cart extends Component {

    // lista donde se guarda el carrito
    carrito =[
        {producto: 'disco', cantidad: 1},
        {producto: 'disco2', cantidad: 3},
        {producto: 'disco3', cantidad: 1},
    
      ];

      numeroElemCarrito()
      {
          return this.carrito.length;
      }

    
    render() {
        return (
            <div>

                <h2>En el carrito hay...</h2>
                {this.carrito.map(pt => <CartPintar producto={pt.producto} cantidad={pt.cantidad} />)}
                
            </div>
        )
    }


}

export default Cart

