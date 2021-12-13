import React, { Component } from 'react'
import ItemListPintar from './ItemListPintar';

export class ItemListContainer extends Component {


    // lista donde se haría la llamada a BBDD para recuperar los productos de la tienda
     productosTienda =[
        {id: '001', producto: 'Soy un disco', descCorta: 'Un disco y tal muy antiguo', descripcion: "es un disco muy bonito", precio: 10},
        {id: '002', producto: 'Otro disco', descCorta: 'otro disco, más viejo aun', descripcion: "parece que va a estar bien y no tanto", precio: 10},
        {id: '003', producto: 'Camiseta', descCorta: '¿qué será?', descripcion: "especial para perros", precio: 12},
        {id: '004', producto: 'Jarrón', descCorta: 'un jarrón de los Rolling Stone', descripcion: "es un jarrón que da satisfaction", precio: 10},
        {id: '005', producto: 'Hard punk Regueton', descCorta: 'otro disco', descripcion: "aléjate de esto", precio: 100}
    
      ];
      
    // mensaje de bienvenida por defecto
    greeting='Hard random pop - Random stuff for random people';
    
    render() {
        return (
            <div>

                {this.greeting}
                <hr/>

                {this.productosTienda.map(pt => <ItemListPintar producto={pt.producto} descCorta={pt.descCorta} descripcion={pt.descripcion} precio={pt.precio} />)}
                
            </div>
        )
    }
}

export default ItemListContainer
