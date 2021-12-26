import React, { useEffect , useState} from 'react'
import ItemDetail from './ItemDetail';


    const ItemDetailContainer = () => {

        const [detalles, setDetalles] = useState([])

        // carga a los x segundos
        const getItem = () =>{


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

                    setDetalles(resultados);

                })

        }

    useEffect(() => {
        
        // hacemos un wait para simular el tiempo hasta la respuesta de la API
       const timer = setTimeout(() => {
            getItem();
        }, 2000);
        return () => clearTimeout(timer);

    }, [])


    return (
        <div>

            <ItemDetail producto={detalles.producto} descCorta={detalles.descCorta} descripcion={detalles.descripcion} 
                precio={detalles.precio} initial={1} stock={detalles.stock} imagen={detalles.imagen} />
        </div>
    )
}

export default ItemDetailContainer

