// prueba realizada con la API de Rick&Morty

/*

import React, { useEffect , useState} from 'react'


    const ItemDetailContainerRM = () => {

        const [detalles, setDetalles] = useState([])

        // carga a los x segundos
        const getItem = () =>{

        // llamada a API  de Rick & Morty
            const URL= 'https://rickandmortyapi.com/api/character/';

            
            fetch (URL)
                .then(res => res.json())
                .then( data => {

                    console.log("recibiendo datos "+data.results);

                    setDetalles(data.results)
                })

        }

    useEffect(() => {
        
        // hacemos un wait para simular el tiempo hasta la respuesta de la API
       const timer = setTimeout(() => {
            getItem();
        }, 5000);
        return () => clearTimeout(timer);

    }, [])


    // en vez del strong poner el itemdetail

        return (
            <div>

                 Detalles de Rick & Morty:
                {detalles.map(c => 
                    <strong>{c.name} {c.origin.name}</strong>    
                )} 
            </div>
        )
    }

export default ItemDetailContainerRM

*/