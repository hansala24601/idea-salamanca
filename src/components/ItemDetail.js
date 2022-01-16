import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

import {useState, useEffect} from 'react'

import {CarritoContexto} from './CartContext';
import { useContext}  from 'react'


// indica como se pinta cada producto en la tienda
const ItemDetail = (props) => {


    //const {list, total, addElem, isInCarrito} = useContext(CarritoContexto)

    const { addElem} = useContext(CarritoContexto)


    const [added, setAdded] = useState(false)


    const onAdd = (cantidad) => {

        setAdded(true)
        console.log("tenemos que añadir... "+cantidad);

        addElem({producto: props.producto, cantidad: cantidad, precio: props.precio });

    }

    useEffect(()=>{
        
        if (!added)
        {
            console.log("no ha sido añadido aun");

            
            //let itemsGuardados = JSON.parse(localStorage.getItem('carrito')) || [];
            //console.log("lo guardado es... "+itemsGuardados);

        } 
        else 
        {
            console.log("ha sido añadido");

            //localStorage.setItem("carrito", JSON.stringify(cosasCarrito));
        }

    }, [added])





    return (
        <div className="itemsLista">
            <h3>{props.producto}</h3>

            <p>Descripción: {props.descripcion}</p>
            <p>Precio: {props.precio} $$$</p>
            <img height={100} width={100} src={props.imagen} alt="un dibujo"/>
            <br/>


            {!added && 
                <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd}></ItemCount>   
            }
            {added &&
                <>
                    <Link to="/">
                        <button >Seguir comprando</button>  
                    </Link>
                    <Link to="/cart">
                        <button >Terminar compra</button>  
                    </Link>
                 </>
            }
            
        </div>
    )
}

export default ItemDetail


