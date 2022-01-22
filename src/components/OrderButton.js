import React, { useState } from 'react'
import { writeBatch, doc, updateDoc, query, where, getDocs, addDoc, collection, getFirestore } from "firebase/firestore";

import { useContext}  from 'react'
import {CarritoContexto} from './CartContext';

import Spinner from '../Spinner';


const OrderButton = () => {


    const [comprando, setComprando] = useState(false)


    const db = getFirestore();

    const {list, usuario, compraRegistro, clearList} = useContext(CarritoContexto)




    

    let idCompraRealizada="";

    const buyHandler = async () => {
        

        console.log("OrderButton - enviando datos del pedido al servidor");

        setComprando(true);





        for ( let i=0; i<list.length; i++){

            
            const q = query(
                collection(db, 'productos'),
                where ('id', '==', list[i].id));
    
    
                const querySnapshot = await getDocs(q);

                let respStock;
                
                querySnapshot.forEach((doc) => {
                  console.log(doc.id, " => ", doc.data());
            
                    const datos= doc.data();
            
                    console.log(datos.id+ " stock: "+datos.stock+" pedido: "+list[i].cantidad)

                    if(datos.stock>list[i].cantidad)
                    console.log("es suficiente");

                    respStock=datos.stock;

                });

                const batch = writeBatch(db);

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


        const order = {
            buyer: usuario,
            items: list,
            fecha: fecha,
            total: totalCompra
        };

        const {id} = await addDoc(collection(db, "orders-store"), order);


        setComprando(false);

        clearList();

        console.log('order Id', id);

        compraRegistro(id);
    }





    /*
    const updateHandler = async () => {
        const lastOrder = doc(db, "orders-store", lastId);

        // Set the "capital" field of the city 'DC'
        await updateDoc(lastOrder, {
            total: 30
        });
    }


    const updatePricesHandler = async () => {
        const batch = writeBatch(db);

        const doc1 = doc(db, "orders-store", "5qb7uTfWT4ehOg5gaV2G");
        batch.update(doc1, {total: 70});

        const doc2 = doc(db, "orders-store", "D6IoYsmjjLjJkn5YbdRb");
        batch.update(doc2, {total: 75});

        const doc3 = doc(db, "orders-store", "Df6Mf3DMs6HGCoSNUCiP");
        batch.update(doc3, {total: 65});

        const doc4 = doc(db, "orders-store", "hvENOSOjkHb1lEE5sPgo");
        batch.delete(doc4);

        await batch.commit();
    }
*/



    return (
        <div>



            {comprando ? <Spinner></Spinner>  : 

                <button className='button-4' onClick={buyHandler}>Terminar compra</button>
            }



        </div>
    )
}

export default OrderButton