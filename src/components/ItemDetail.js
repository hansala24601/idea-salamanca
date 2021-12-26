import React from 'react'
import ItemCount from './ItemCount'

// indica como se pinta cada producto en la tienda
const ItemDetail = (props) => {
    return (
        <div className="itemsLista">
            <h3>{props.producto}</h3>
            <p>{props.descCorta}</p>
            <p>Descripción: {props.descripcion}</p>
            <p>Precio: {props.precio} $$$</p>
            
            <p><ItemCount stock={props.stock} initial={props.initial} /></p>

            <img height={100} width={100} src={props.imagen} alt="un dibujo"/>
            
        </div>
    )
}

export default ItemDetail
