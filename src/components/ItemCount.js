import React from 'react'
import { useState, useEffect } from 'react'

function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad]= useState(initial);

    useEffect(() => {
        if(cantidad>stock) {setCantidad(stock)}
        if(cantidad<0) {setCantidad(0)}

        console.log("cantidad "+cantidad);

    }, [cantidad])



    function llamadaCallback(canti)
    {console.log("llamada al callback con "+canti);}
    

    return (
        <div>
            <p>Stock actual: {stock}</p>  

             <div>
                <button onClick={() => setCantidad(cantidad-1)}>
                    -
                </button>

                {cantidad}

                <button onClick={() => setCantidad(cantidad+1)}>
                    +
                </button>

                <button onClick={() => llamadaCallback(cantidad)}>
                    Agregar
                </button>

            </div>
        </div>
    )
}

export default ItemCount
