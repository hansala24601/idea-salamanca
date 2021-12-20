import React, { Component } from 'react'
import ItemListPintar from './ItemListPintar';

export class ItemListContainer extends Component {


    // lista donde se haría la llamada a BBDD para recuperar los productos de la tienda
     productosTienda =[
        {id: '001', producto: 'Soy un disco', descCorta: 'Un disco y tal muy antiguo', descripcion: "es un disco muy bonito", precio: 10, stock: 1, initial:1},
        {id: '002', producto: 'Otro disco', descCorta: 'otro disco, más viejo aun', descripcion: "parece que va a estar bien y no tanto", precio: 10, stock: 2, initial:1},
        {id: '003', producto: 'Camiseta', descCorta: '¿qué será?', descripcion: "especial para perros", precio: 12, stock: 3, initial:1},
        {id: '004', producto: 'Jarrón', descCorta: 'un jarrón de los Rolling Stone', descripcion: "es un jarrón que da satisfaction", precio: 10, stock: 5, initial:1},
        {id: '005', producto: 'Hard punk Regueton', descCorta: 'otro disco', descripcion: "aléjate de esto", precio: 100, stock: 10, initial:1}
    
      ];
      
    // mensaje de bienvenida por defecto
    greeting='Hard random pop\n(Random stuff for random people)';
    
    render() {
        return (
            <div>

                <div className="greetings">{this.greeting}</div>
                <hr/>

                {this.productosTienda.map(pt => <ItemListPintar producto={pt.producto} descCorta={pt.descCorta} descripcion={pt.descripcion} precio={pt.precio} 
                stock={pt.stock} initial={pt.initial}  />)}
                
            </div>
        )
    }
}

export default ItemListContainer
