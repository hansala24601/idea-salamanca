import React from 'react'

import ItemCount from './ItemCount'

import { Link } from 'react-router-dom';

import {useState, useEffect} from 'react'


import {CarritoContexto} from './CartContext';                                      // importamos las funciones para usar el contexto y el manejador de contexto customizado que hemos creado
import { useContext}  from 'react'


// indica como se pinta cada producto en la tienda. "props" son los parámetros que nos envía el padre (quien lo llama o le utiliza)
const ItemDetail = (props) => {


    //const {list, total, addElem, isInCarrito} = useContext(CarritoContexto)

    const { addElem} = useContext(CarritoContexto)                                          // importamos la función del contexto que sirve para añadir elementos al carrito


    const [added, setAdded] = useState(false)


    const onAdd = (cantidad) => {

        setAdded(true)
        console.log("tenemos que añadir... "+cantidad);

        addElem({producto: props.producto, cantidad: cantidad, precio: props.precio, id: props.id });           // llamamos a la función del contexto que añade elementos al carrito

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
            <h3>{props.producto} (ref. {props.id})</h3>

            <p>{props.descripcion}</p>
            <p>Precio: {props.precio} $$$</p>
            <img height={100} width={100} src={props.imagen} alt="un dibujo"/>
            <br/> <br/>


            {!added && 
                <ItemCount stock={props.stock} initial={props.initial} onAdd={onAdd}></ItemCount>   
            }
            {added &&
                <>
                    <Link to="/">
                        <button className='button-4'>Seguir comprando</button>  
                    </Link>
                    <Link to="/cart">
                        <button className='button-4'>Terminar compra</button>  
                    </Link>
                 </>
            }
            
        </div>
    )
}

export default ItemDetail


