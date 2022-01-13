//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NavLogin from './components/NavLogin';
import MiFooter from './components/MiFooter';


import ItemListContainer from './components/ItemListContainer';

import ItemDetailContainer from './components/ItemDetailContainer';

import Cart from './components/Cart';

import Contacto from './components/Contacto';

import Nosotros from './components/Nosotros';


import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import LoginContainer from './components/login/LoginContainer';


import {CarritoContextoProvider} from './components/CartContext';




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

        <CarritoContextoProvider>

          <BrowserRouter className="container">

              <NavLogin />

              <NavBar numCarro={carrito.reduce((a,v) =>  a = a + v.cantidad , 0 )} carro={carrito}/>



              <Routes>

                <Route path="/" element={<ItemListContainer/>}></Route>

                <Route path="/category/:id" element={<ItemListContainer/>}></Route>

                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>

                <Route path="/contacto" element={<Contacto/>}></Route>

                <Route path="/nosotros" element={<Nosotros/>}></Route>
                

                <Route path="/carrito/" element={<Cart/>}></Route>

                <Route path="/cart/" element={<Cart/>}></Route>


                <Route path="/pago/" element={<Cart/>}></Route>



                <Route path="/login/" element={<LoginContainer/>}></Route>

              </Routes>
              
              
              <br/><br/><br/><br/><br/><br/><br/>
            
              <MiFooter/>

            </BrowserRouter>

          

        </CarritoContextoProvider>

      </div>

  );
}

export default App;

