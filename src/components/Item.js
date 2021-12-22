// mostrará los detalles
// se usará más adelante

import React from 'react'

const Item = (props) => {
    return (

        <div className='item'>
            <h3>{props.id}</h3>
            <h4>{props.title}</h4>
            <p>{props.price} $$$</p>

            <img height={100} width={100} src={props.pictureUrl} alt="un dibujo"/>

        </div>
    )
}

export default Item
