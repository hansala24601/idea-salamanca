import React, { useState } from 'react'
import { writeBatch, doc, updateDoc, query, where, getDocs, addDoc, collection, getFirestore } from "firebase/firestore";

import { useContext}  from 'react'
import {CarritoContexto} from './CartContext';

import Spinner from '../Spinner';


const OrderButton = () => {


    const [comprando, setComprando] = useState(false)


    const db = getFirestore();

    // recuperamos variables y funciones del contexto
    const {list, usuario, compraRegistro, clearList} = useContext(CarritoContexto)


    // la ID de la operacíon de compra que nos devuelve la base de datos
    let idCompraRealizada="";



    const buyHandler = async () => {
        

        console.log("OrderButton - enviando datos del pedido al servidor");

        // marcamos que empezamos la operación de compra
        setComprando(true);




        // por cada elemento en el carrito actualizamos stock en base de datos
        for ( let i=0; i<list.length; i++){

            // busco el producto por su ID
            const q = query(
                collection(db, 'productos'),
                where ('id', '==', list[i].id));
    
                const querySnapshot = await getDocs(q);

                let respStock;
                
                querySnapshot.forEach((doc) => {
                  console.log(doc.id, " => ", doc.data());
            
                    const datos= doc.data();
            
                    console.log(datos.id+ " stock: "+datos.stock+" pedido: "+list[i].cantidad)

                    // ajusto el stock
                    respStock=datos.stock;

                });

                const batch = writeBatch(db);

                //actualizo el producto con el nuevo stock (restando lo que agrego)
                const producto = doc(db, "productos", list[i].id);
                batch.update(producto, {stock: respStock-list[0].cantidad});
        
                await batch.commit();

        }






        let totalCompra= list.map(item => item.cantidad * item.precio).reduce((prev, curr) => prev + curr, 0);

        const d = new Date();
        let day = d.getUTCDate();
        let month = d.getMonth()+1;
        let year = d.getUTCFullYear();
        let hour = d.getHours();
        let minutes = d.getUTCMinutes();
        let seconds = d.getUTCSeconds();

        let fecha = day+"/"+month+"/"+year+" "+hour+":"+minutes+":"+seconds;

        console.log(usuario);

        // generamos un objeto con los valores del pedido
        const order = {
            buyer: usuario,
            items: list,
            fecha: fecha,
            total: totalCompra
        };

        // añadimos el pedido a base de datos
        const {id} = await addDoc(collection(db, "orders-store"), order);

        // marcamos que acabamos la operación de compra
        setComprando(false);

        // limpiamos el carrito
        clearList();

        console.log('order Id', id);

        // devolvemos el ID de la operación
        compraRegistro(id);
    }



    // componente que dibuja un  círculo de carga o el botón de terminar compra mientras realizamos la compra (mientras se guarda en base de datos)
    return (
        <div>



            {comprando ? <Spinner></Spinner>  : 

                <button className='button-4' onClick={buyHandler}>Terminar compra</button>
            }



        </div>
    )
}

export default OrderButton