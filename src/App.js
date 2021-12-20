import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NavLogin from './components/NavLogin';
import MiFooter from './components/MiFooter';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

import { useState } from 'react'


function App() {


  // tocaría recuperar el carrito de la sesión anterior, por ahora usamos lo siguiente
  const carrito =[
    {producto: 'disco', cantidad: 1},
    {producto: 'disco2', cantidad: 1},
    {producto: 'disco3', cantidad: 2},

  ];

  // para hacer la llamada a recuperar los elementos del carrito
  //        {carrito.map(c=> <Cart producto={c.producto} cantidad={c.cantidad} />)}


  const [titulo, setTitulo]= useState("titulo ini");

  return (
      
      <div className="App">

          <NavLogin />

          <NavBar numCarro={carrito.reduce((a,v) =>  a = a + v.cantidad , 0 )} carro={carrito}/>


          <p>Cantidad <ItemCount stock={5} initial={1} /></p>


          <div class="container" id="principal">

              <ItemListContainer />

          </div>


          




<br/><br/><br/><br/><br/><br/><br/>
          
          <MiFooter/>

      </div>

    
  );
}

export default App;
