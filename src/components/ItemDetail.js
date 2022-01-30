import React from 'react'

import ItemCount from './ItemCount'                                 // importamos el contador de incremento

import { Link } from 'react-router-dom';                            // importamos la funcion "Link" para poder enrutar desde los botones de "Seguir comprando" y "Terminar compra"

import {useState, useEffect} from 'react'                           // importamos las funciones para poder definir estados


import { useContext}  from 'react'                                  // importamos las funciones para usar el contexto y 
import {CarritoContexto} from './CartContext';                      // importamos el manejador de contexto customizado que hemos creado



// indica como se pinta cada producto en la tienda. "props" son los parámetros que nos envía el padre (quien lo llama o le utiliza)
const ItemDetail = (props) => {


    //const {list, total, addElem, isInCarrito} = useContext(CarritoContexto)

    const { addElem} = useContext(CarritoContexto)                                          // importamos la función del contexto que sirve para añadir elementos al carrito


    const [added, setAdded] = useState(false)                                               // creamos una variable de estado sobre si se ha añadido un elemento (eso haría refrescar el elemento)


    const onAdd = (cantidad) => {

        setAdded(true)
        console.log("tenemos que añadir... "+cantidad);

        addElem({producto: props.producto, cantidad: cantidad, precio: props.precio, id: props.id });           // llamamos a la función del contexto que añade elementos al carrito

    }

    useEffect(()=>{                                                                             // si se detecta un cambio en el estado "added"
        
        if (!added)
        {
            console.log("no ha sido añadido aun");

            //let itemsGuardados = JSON.parse(localStorage.getItem('carrito')) || [];              // podríamos guardarlo en el navegador
            //console.log("lo guardado es... "+itemsGuardados);

        } 
        else 
        {
            console.log("ha sido añadido");

            //localStorage.setItem("carrito", JSON.stringify(cosasCarrito));
        }

    }, [added])



    /*
    * Mostramos los datos del detalle del producto, pero en cuanto se añada alguno saldrán los botones de "Seguir comprando" y "Terminar compra"
    */


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


