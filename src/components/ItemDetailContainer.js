import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner';


import {getDocs, getFirestore, collection, query, where} from "firebase/firestore"


    const ItemDetailContainer = () => {

        const {id} = useParams();

        const [detalles, setDetalles] = useState([])

        const [loading, setLoading] = useState([false])


        // carga de forma asincrona (dependemos de la base de datos)
        const getItem =  async () =>{

            console.log("voy a buscar... "+id);     // traza para ver el id del producto que buscamos

            let resultados={};

            const db = getFirestore();

            // buscamos el elemento que tenga nuestra ID
            const q = query(
                collection(db, 'productos'),
                where ('id', '==', id));


            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                
                console.log(doc.id, " => ", doc.data());

                const datos= doc.data();

                // colocamos los datos recuperados en nuestra variable con los resultados
                resultados = {
                    id: datos.id, 
                    producto: datos.title, 
                    descripcion: datos.description, 
                    precio: datos.price, 
                    stock: datos.stock, 
                    initial:1,
                    imagen: datos.image
                };

            });




/*
        getDocs(q).then((snapshot) => {

            if(snapshot.size === 0) console.log("no devuelve nada");

            console.log(JSON.stringify(snapshot.docs.data))
        }


)

*/
/*


            // llamamos a la api para recibir los detalles
            const URL= 'https://rickandmortyapi.com/api/character/';
            fetch (URL)
                .then(res => res.json())
                .then( data => {

                    //console.log("recibiendo datos "+data.results);

                    //setDetalles(data.results)
                    
                    let resultados = {id: '001', producto: 'Soy un disco', descCorta: 'Un disco y tal muy antiguo', descripcion: "es un disco muy bonito", 
                    precio: 10, stock: 5, initial:1,
                    imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Disco_de_Vinilo.jpg/1024px-Disco_de_Vinilo.jpg"};

                })
*/



                setDetalles(resultados);

                // consideramos el proceso de lectura de base de datos como acabado
                setLoading(false);

        }

        

    useEffect(() => {
        
        console.log("llamada con el id de producto: "+id);

        // marcamos el momento en que consideramos como que empezamos la operación de recuperar datos
        setLoading(true);

        // llamamos a la función que llama a la base de datos
        getItem();

    }, [id])


    // mientras carga muestra un efecto de css y en cuanto ha recuperado los datos del elemento lo muestra
    return (
        <div>

            {loading ? <Spinner></Spinner>  : 

                <ItemDetail producto={detalles.producto} descripcion={detalles.descripcion} 
                    precio={detalles.precio} initial={1} stock={detalles.stock} imagen={detalles.imagen} id={detalles.id} />}
        </div>
    )
}

export default ItemDetailContainer

