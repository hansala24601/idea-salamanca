


import {useState, createContext} from 'react'

export const CarritoContexto = createContext({
    list: []
})

export function CarritoContextoProvider(props) {

    const [carrito, setCarrito] = useState([])

    const addToCarrito = (id) => {
      setCarrito( (prevCarrito) => {
            return prevCarrito.concat(id)
        })
    }

    const removeFromCarrito = (id) => {
      setCarrito(prevCarrito => {
            return prevCarrito.filter(e => e !== id);
        });
    }

    const isInCarrito = (id) => {
        return carrito.some( e => e === id )
    }

    function clearList() {
        setCarrito([])
    }

    const context = {
        list: carrito,
        total: carrito.length,
        addElem: addToCarrito,
        removeElem: removeFromCarrito,
        isInCarrito: isInCarrito,
        clearList: clearList
    }

    return (
        <CarritoContexto.Provider value={context}>
            {props.children}
        </CarritoContexto.Provider>
    )
}



/*
import React from 'react'
import { useState } from 'react/cjs/react.development';



  export const carritoCosas =[


  ];


  //carritoCosas.splice('disco', 1);
  //carritoCosas.push({producto: 'disco6', cantidad: 5});



const CartContext = () => {

    return (
        <div>
            
        </div>
    )
}

export default CartContext

export const CarritoContexto = React.createContext(carritoCosas);
*/




