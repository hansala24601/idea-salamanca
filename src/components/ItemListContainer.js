import React, { Component } from 'react'
import ItemList from './ItemList';
import ItemListPintar from './ItemListPintar';



export class ItemListContainer extends Component {

    constructor()
    {
        super();
        this.state = {
            productosTienda: [],
            productosDetalle:[]
          };
    }


    productosDetalle=[];


    // llama a bbdd a buscar los datos de la tienda 
    promesa = new Promise((resolve, reject) => {

        const timer = setTimeout(() => {

            // lista donde se haría la llamada a BBDD para recuperar los productos de la tienda

        this.setState({ productosTienda: 
                [
                    {id: '001', producto: 'Soy un disco', descCorta: 'Un disco y tal muy antiguo', descripcion: "es un disco muy bonito", precio: 10, stock: 1, initial:1},
                    {id: '002', producto: 'Otro disco', descCorta: 'otro disco, más viejo aun', descripcion: "parece que va a estar bien y no tanto", precio: 10, stock: 2, initial:1},
                    {id: '003', producto: 'Camiseta', descCorta: '¿qué será?', descripcion: "especial para perros", precio: 12, stock: 3, initial:1},
                    {id: '004', producto: 'Jarrón', descCorta: 'un jarrón de los Rolling Stone', descripcion: "es un jarrón que da satisfaction", precio: 10, stock: 5, initial:1},
                    {id: '005', producto: 'Hard punk Regueton', descCorta: 'otro disco', descripcion: "aléjate de esto", precio: 100, stock: 10, initial:1}

                ]
        });

        this.setState({ productosDetalle:  //{props.id}{props.title}{props.price}{props.pictureUrl}
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
                <ItemList item={this.state.productosDetalle} />

                <h3>ItemListPintar (llamada desde ItemListContainer):</h3>
                {this.state.productosTienda.map(pt => 
                    <ItemListPintar producto={pt.producto} descCorta={pt.descCorta} descripcion={pt.descripcion} precio={pt.precio} 
                        stock={pt.stock} initial={pt.initial}  />)}

            </div>
        )
    }
}

export default ItemListContainer

