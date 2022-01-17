import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner';


import {getDocs, getFirestore, collection, query, where} from "firebase/firestore"


    const ItemDetailContainer = () => {

        const {id} = useParams();

        const [detalles, setDetalles] = useState([])

        const [loading, setLoading] = useState([false])


        // carga a los x segundos
        const getItem =  async () =>{

            console.log("voy a buscar... "+id);

            let resultados={};

            const db = getFirestore();


            const q = query(
                collection(db, 'carrito'),
                where ('id', '==', id));


            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                
                console.log(doc.id, " => ", doc.data());

                const datos= doc.data();


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

                setLoading(false);

        }

        

    useEffect(() => {
        
        console.log("llamada con el id de producto: "+id);

        setLoading(true);
        getItem();

    }, [id])


    return (
        <div>

            {loading ? <Spinner></Spinner>  : 

                <ItemDetail producto={detalles.producto} descripcion={detalles.descripcion} 
                    precio={detalles.precio} initial={1} stock={detalles.stock} imagen={detalles.imagen} />}
        </div>
    )
}

export default ItemDetailContainer

