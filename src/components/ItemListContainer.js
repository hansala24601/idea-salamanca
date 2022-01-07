import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


    const ItemDetailContainer = () => {

        const {id} = useParams();

        const [items, setItems] = useState([])

        const [loading, setLoading] = useState([false])

        // carga a los x segundos
        const getItem = () =>{

           


            // llamamos a la api para recibir los detalles
            const URL= 'https://rickandmortyapi.com/api/character/';
            fetch (URL)
                .then(res => res.json())
                .then( data => {

                    

                    //console.log("recibiendo datos "+data.results);

                    //setDetalles(data.results)

                    let resultados = [];

                    if (id==="random")       // simulamos una consulta de los valores random
                    {
    
                        resultados = [

                            {id: '003', title: 'Camiseta random',  descripcion: "especial para perros", price: 12, 
                                pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"}
                            ]
                    }
                    else
                    if (id==="absurdos")         // simulamos una consulta de los valores absurdos
                    {
    
                        resultados = [
                            {id: '005', title: 'Hard punk Regueton',  descripcion: "aléjate de esto", price: 100, 
                                pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"}
                            ]
                    }
                    else                        // simulamos una consulta de todos los valores
                    {
    
                        resultados = [
                            {id: '001', title: 'Soy un disco',  descripcion: "es un disco muy bonito", price: 10, 
                                pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"},
                            {id: '002', title: 'Otro disco',  descripcion: "parece que va a estar bien y no tanto", price: 10,  
                                pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"},
                            {id: '003', title: 'Camiseta random',  descripcion: "especial para perros", price: 12, 
                                pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"},
                            {id: '004', title: 'Jarrón',  descripcion: "es un jarrón que da satisfaction", price: 10,  
                                pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"},
                            {id: '005', title: 'Hard punk Regueton',  descripcion: "aléjate de esto", price: 100, 
                                pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"}
                            ]
                    }

                        // guardamos lo recibido
                        setItems(resultados);

                        setLoading(false);
    

                })

        }

        

    useEffect(() => {

        // si hay una ruta de categoria definida muestro cual es
        if (id!= null) console.log("llamada a categoria id: "+id);

        setLoading(true);

        // hacemos un wait para simular el tiempo hasta la respuesta de la API
       const timer = setTimeout(() => {

        
            getItem();
        }, 2000);
        return () => clearTimeout(timer);

    }, [id])


    const greeting='Hard random pop\n(Random stuff for random people)';

    return (
        <div>

                <div className="greetings">{greeting}</div>
                <hr/>


               {loading ? "cargando..." : <ItemList items={items} /> }
        </div>
    )
}

export default ItemDetailContainer

