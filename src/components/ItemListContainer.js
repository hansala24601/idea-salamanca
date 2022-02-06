import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';
import ItemList from './ItemList';

// importamos las funciones necesarias para tratar con base de datos
import {getDocs, getFirestore, collection, query, orderBy, where} from "firebase/firestore"




    const ItemDetailContainer = () => {

        const {id} = useParams();

        const [items, setItems] = useState([])

        const [loading, setLoading] = useState([false])


        // función que llama a base de datos
        const getItem = async () =>{

            let resultados = [];

            const db = getFirestore();

            // si no recibimos una categoría recuperamos todos los productos por ID ascendente
            let q = query(
                collection(db, 'productos'),
                orderBy("id", "asc")
            );

            // si recibimos una categoría hacemos una query especial
            if(id!= undefined)
            {
                // montamos la query (buscando los elementos que tengan una determinada categoría)
                q = query(
                    collection(db, 'productos'),
                    //orderBy("id", "asc")
                    //, 
                    where ("categoryID", '==', id)
                    );

                    console.log("*********** Buscamos categoria: "+id);
            }
            
                // llamamos a la base de datos con la query
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                  console.log(doc.id, " => ", doc.data());
            
                    const datos= doc.data();
            
                    // da formato a los datos de cada item recuperados y los guarda en un array
                    resultados.push(
                        {
                            id: datos.id, 
                            title: datos.title,  
                            description: datos.description, 
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

        // marco que estoy comenzando el proceso de carga
        setLoading(true);

        // llamo a la función que se encarga de llamar a la base de datos a recuperar los elementos de dicha categoría (ID)
        getItem();


/*
        // hacemos un wait para simular el tiempo hasta la respuesta de la API
       const timer = setTimeout(() => {

        
            getItem();
        }, 2000);
        return () => clearTimeout(timer);
        */

    }, [id])


    // mensaje de bienvenida
    const greeting='Hard random pop\n(Random stuff for random people)';

    // componente que dibuja el mensaje de bienvenida, un círculo de carga en css mientras no haya datos y luego dibuja la lista de elementos recuperados 
    return (
        <div>

                <div className="greetings">{greeting}</div>
                <hr/>

               {loading ? <Spinner></Spinner> : <ItemList items={items} /> }
        </div>
    )
}

export default ItemDetailContainer

