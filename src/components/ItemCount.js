import React from 'react'
import { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad]= useState(initial);


    function sumar()
    {
        if(cantidad<stock)
            setCantidad(cantidad+1);
    }

    function restar()
    {
        if(cantidad>1)
            setCantidad(cantidad-1)
    }


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

