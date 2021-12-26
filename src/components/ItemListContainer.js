import React, { Component } from 'react'
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import ItemDetailContainer from './ItemDetailContainer';



export class ItemListContainer extends Component {

    constructor()
    {
        super();
        this.state = {
            productosTienda: []
          };
    }


   // productosDetalle=[];


    // llama a bbdd a buscar los datos de la tienda 
    promesa = new Promise((resolve, reject) => {

        const timer = setTimeout(() => {

            // lista donde se haría la llamada a BBDD para recuperar los productos de la tienda

            this.setState({ productosTienda:  //{props.id}{props.title}{props.price}{props.pictureUrl}
            [
                {id: '001', title: 'Soy un disco',  descripcion: "es un disco muy bonito", price: 10, pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"},
                {id: '002', title: 'Otro disco',  descripcion: "parece que va a estar bien y no tanto", price: 10,  pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"},
                {id: '003', title: 'Camiseta',  descripcion: "especial para perros", price: 12, pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"},
                {id: '004', title: 'Jarrón',  descripcion: "es un jarrón que da satisfaction", price: 10,  pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"},
                {id: '005', title: 'Hard punk Regueton',  descripcion: "aléjate de esto", price: 100, pictureUrl:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"}
                ]
            });


        }, 3000);

        return () => clearTimeout(timer);

    }).then(res => {console.log(res)}); 

      
    // mensaje de bienvenida por defecto
    greeting='Hard random pop\n(Random stuff for random people)';
    
    render() {
        return (
            <div>
                <div className="greetings">{this.greeting}</div>
                <hr/>

                <h3>ItemList (llamada desde ItemListContainer):</h3>
                <ItemList item={this.state.productosTienda} />

                <h3>llamada desde ItemDetailContainer:</h3>
                    <ItemDetailContainer/>

            </div>
        )
    }
}

export default ItemListContainer

