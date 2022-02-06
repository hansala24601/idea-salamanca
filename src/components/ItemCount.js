import React from 'react'
import { useState } from 'react'


//
function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad]= useState(initial);

    // función que añade uno a la cantidad salvo que se rebase el máximo
    function sumar()
    {
        if(cantidad<stock)
            setCantidad(cantidad+1);
    }

    // función que quita uno a la cantidad salvo que se llegue a 1 (no tiene sentido agregar menos de 1)
    function restar()
    {
        if(cantidad>1)
            setCantidad(cantidad-1)
    }

    // dibujamos la cantidad a agregar junto a los botones de quitar 1 y añadir 1, y el botón de agregar la cantidad marcada
    return (
        <div>
            <p>Stock actual: {stock}</p>  

             <div>
                <button className='button-4' onClick={() => restar()}>
                    -
                </button>

                <span className='button-recuento'>
                {cantidad}
                </span>
                <button className='button-4' onClick={() => sumar()}>
                    +
                </button>

                <button className='button-4' onClick={() => onAdd(cantidad)}>
                    Agregar
                </button>

            </div>
        </div>
    )
}

export default ItemCount

