import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner';


    const ItemDetailContainer = () => {

        const {id} = useParams();

        const [detalles, setDetalles] = useState([])

        const [loading, setLoading] = useState([false])


        // carga a los x segundos
        const getItem = () =>{

            console.log("voy a buscar... "+id);


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




                    if(id==='001')
                        resultados = {id: '001', producto: 'Soy un disco', descCorta: 'Un disco y tal muy antiguo', descripcion: "es un disco muy bonito", 
                        precio: 10, stock: 5, initial:1,
                        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Disco_de_Vinilo.jpg/1024px-Disco_de_Vinilo.jpg"};
                    else
                    if(id==='002')
                        resultados = {id: '001', producto: 'Otro disco', descCorta: 'Un disco y tal muy antiguo', descripcion: "parece que va a estar bien y no tanto", 
                        precio: 5, stock: 100, initial:1,
                        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Disco_de_Vinilo.jpg/1024px-Disco_de_Vinilo.jpg"};
                    else
                    if(id==='003')
                        resultados = {id: '001', producto: 'Camiseta random', descCorta: 'una camiseta', descripcion: "especial para perros", 
                        precio: 12, stock: 3, initial:1,
                        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Disco_de_Vinilo.jpg/1024px-Disco_de_Vinilo.jpg"};
                    else
                    if(id==='004')
                        resultados = {id: '001', producto: 'Jarrón', descCorta: 'Jarrón de los Rolling', descripcion: "es un jarrón que da satisfaction", 
                        precio: 25, stock: 1, initial:1,
                        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Disco_de_Vinilo.jpg/1024px-Disco_de_Vinilo.jpg"};
                    else
                        resultados = {id: '005', producto: 'Hard punk Regueton', descCorta: "lo que parece", descripcion: "aléjate de esto", 
                        precio: 2, stock: 12, initial:1,
                        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Disco_de_Vinilo.jpg/1024px-Disco_de_Vinilo.jpg"};
                        



                    
                    setDetalles(resultados);

                    setLoading(false);

                })

        }

        

    useEffect(() => {
        
        console.log("llamada con el id de producto: "+id);

        setLoading(true);

        // hacemos un wait para simular el tiempo hasta la respuesta de la API
       const timer = setTimeout(() => {
            getItem();
        }, 2000);
        return () => clearTimeout(timer);

    }, [id])


    return (
        <div>


            {loading ? <Spinner></Spinner>  : 

                <ItemDetail producto={detalles.producto} descCorta={detalles.descCorta} descripcion={detalles.descripcion} 
                    precio={detalles.precio} initial={1} stock={detalles.stock} imagen={detalles.imagen} />}
        </div>
    )
}

export default ItemDetailContainer

