import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

import {useState, useEffect} from 'react'


// indica como se pinta cada producto en la tienda
const ItemDetail = (props) => {


    const [added, setAdded] = useState(false)


    const onAdd = (cantidad) => {
        setAdded(true)
        console.log("tenemos que añadir... "+cantidad);
    }

    useEffect(()=>{
        
        if (!added) console.log("no ha sido añadido aun");
        else console.log("ha sido añadido");

    }, [added])





    return (
        <div className="itemsLista">
            <h3>{props.producto}</h3>
            <p>{props.descCorta}</p>
            <p>Descripción: {props.descripcion}</p>
            <p>Precio: {props.precio} $$$</p>
            <img height={100} width={100} src={props.imagen} alt="un dibujo"/>
            <br/>


            {!added && 
                <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd}></ItemCount>   
            }
            {added &&
                <Link to="/cart">
                <button >Terminar compra</button>  
                </Link>
            }
            
            {/* <p><ItemCount stock={props.stock} initial={props.initial} /></p> */}

           
            
        </div>
    )
}

export default ItemDetail


