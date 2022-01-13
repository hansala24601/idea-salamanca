import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

import {useState, useEffect} from 'react'

import {CarritoContexto} from './CartContext';
import { useContext}  from 'react'


// indica como se pinta cada producto en la tienda
const ItemDetail = (props) => {


    const {list, addElem, isInCarrito} = useContext(CarritoContexto)




    const [added, setAdded] = useState(false)


    const onAdd = (cantidad) => {

        setAdded(true)
        console.log("tenemos que añadir... "+cantidad);

        let meto=props.producto;
        addElem({producto: props.producto, cantidad: cantidad, precio: props.precio });




        // si ya existe en el carrito uno asi
        /*
        if(cosasCarrito.find(e => e.producto === props.producto))
        {
            console.log("hay uno ya, añadimos la cantidad");

            const resultado =cosasCarrito.find(e => e.producto === props.producto);
            resultado.cantidad=resultado.cantidad+cantidad;

            cosasCarrito.splice(props.producto, 1);
            cosasCarrito.push(resultado);


        }
        else
        {
            console.log("aun no hay con ese nombre, hay que añadirlo");

            cosasCarrito.push({producto: props.producto, cantidad: cantidad, precio: props.precio });
        }
        */
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


