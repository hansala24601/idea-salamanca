import React from 'react'

// indica como se pinta cada producto en la tienda
const ItemListPintar = (props) => {
    return (
        <div className="itemsLista">
            <h3>{props.producto}</h3>
            <p>{props.descCorta}</p>
            <p>Descripción: {props.descripcion}</p>
            <p>Precio: {props.precio} $$$</p>
            
        </div>
    )
}

export default ItemListPintar
