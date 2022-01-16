import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';
import ItemList from './ItemList';


import {getDocs, getFirestore, collection, query, orderBy, where} from "firebase/firestore"




    const ItemDetailContainer = () => {

        const {id} = useParams();

        const [items, setItems] = useState([])

        const [loading, setLoading] = useState([false])

        // carga a los x segundos
        const getItem = async () =>{

            let resultados = [];

            const db = getFirestore();

            

            let q = query(
                collection(db, 'carrito'),
                orderBy("id", "asc")
            );


            if(id!= undefined)
            {

                q = query(
                    collection(db, 'carrito'),
                    //orderBy("id", "asc")
                    //, 
                    where ("categoryID", '==', id)
                    );

                    console.log("*********** Buscamos categoria: "+id);
            }
            
            
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                  console.log(doc.id, " => ", doc.data());
            
                    const datos= doc.data();
            
            
                    resultados.push(
                        {
                            id: datos.id, 
                            title: datos.title,  
                            descripcion: datos.description, 
                            price: datos.price, 
                            stock: datos.stock,
                            pictureUrl: datos.image
                        })
            
                });


/*
            const querySnapshot = await getDocs(collection(db, 'carrito'));

            querySnapshot.forEach((doc) => {

                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);

                const datos= doc.data();

                resultados.push(
                {
                    id: datos.id, 
                    title: datos.title,  
                    descripcion: datos.description, 
                    price: datos.price, 
                    stock: datos.stock,
                    pictureUrl: datos.image
                })
            });

*/








                        // guardamos lo recibido
                        setItems(resultados);

                        setLoading(false);


        }

        

    useEffect(() => {

        // si hay una ruta de categoria definida muestro cual es
        if (id!= null) console.log("llamada a categoria id: "+id);

        setLoading(true);

        getItem();


/*
        // hacemos un wait para simular el tiempo hasta la respuesta de la API
       const timer = setTimeout(() => {

        
            getItem();
        }, 2000);
        return () => clearTimeout(timer);
        */

    }, [id])


    const greeting='Hard random pop\n(Random stuff for random people)';

    return (
        <div>

                <div className="greetings">{greeting}</div>
                <hr/>





               {loading ? <Spinner></Spinner> : <ItemList items={items} /> }
        </div>
    )
}

export default ItemDetailContainer

