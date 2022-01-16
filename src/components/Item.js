// mostrará los detalles
// se usará más adelante

import React from 'react'

import { Link } from 'react-router-dom';


const Item = (props) => {
    return (

        <div className='item'>


            <Link to={{pathname: '/item/'+props.id }}>


                <h4>{props.title}</h4>
                <p>{props.price} $$$</p>

                <img height={100} width={100} src={props.pictureUrl} alt="un dibujo"/>

            </Link>
        </div>
    )
}

export default Item
