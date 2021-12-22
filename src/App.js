//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NavLogin from './components/NavLogin';
import MiFooter from './components/MiFooter';
import ItemListContainer from './components/ItemListContainer';


//import { useState } from 'react'
//import ItemDetailContainer from './components/ItemDetailContainer';


function App() {


  // tocaría recuperar el carrito (esto solo cambia el valor del número del carrito del navbar)
  const carrito =[
    {producto: 'disco', cantidad: 1},
    {producto: 'disco2', cantidad: 1},
    {producto: 'disco3', cantidad: 2}

  ];

  // para hacer la llamada a recuperar los elementos del carrito
  //  {carrito.map(c=> <Cart producto={c.producto} cantidad={c.cantidad} />)}



  return (
      
      <div className="App">

          <NavLogin />

          <NavBar numCarro={carrito.reduce((a,v) =>  a = a + v.cantidad , 0 )} carro={carrito}/>

          <div class="container" id="principal">

              <ItemListContainer />

          </div>

          




          <br/><br/><br/><br/><br/><br/><br/>
          
          <MiFooter/>

      </div>

    
  );
}

export default App;
