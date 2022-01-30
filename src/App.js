//import logo from './logo.svg';
import './App.css';                                                         // importamos el archivo css con los estilos
import NavBar from './components/NavBar';                                   // importamos la barra de navegación superior
import NavLogin from './components/NavLogin';                               // importamos la barra de navegación de login
import MiFooter from './components/MiFooter';                               // importamos el footer de la página


import { BrowserRouter, Routes, Route  } from 'react-router-dom';           // importamos los comandos necesarios para poder enrutar 

import Contacto from './components/Contacto';                               // importamos el elemento con la página de "contacto" para poder enrutarla desde la principal
import Nosotros from './components/Nosotros';                               // importamos el elemento con la página de "sobre nosotros" para poder enrutarla desde la principal
import LoginContainer from './components/login/LoginContainer';             // importamos el elemento con la página de login para poder enrutarla desde la principal
import Cart from './components/Cart';                                       // importamos el elemento con la página del carrito para poder enrutarla desde la principal


import {CarritoContextoProvider} from './components/CartContext';           // importamos el contexto para poder usarlo en app.js desde todos sus hijos


/* importamos el contenedor con la lista de items para poder enrutarla, 
puesto que con la ruta /category/:id deberíamos poder ir directos a (mostrar) la lista de elementos de esa categoría  */
import ItemListContainer from './components/ItemListContainer';             


/* importamos el contenedor con el detalle de un producto para poder enrutarla, 
puesto que con la ruta /item/:id deberíamos poder ir directos al detalle del producto en cuestión  */
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {


  return (
      


      <div className="App">

        <CarritoContextoProvider>

          <BrowserRouter className="container">

              <NavLogin />

              <NavBar/>

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
              
              
              <br/><br/><br/>
            
              <MiFooter/>

            </BrowserRouter>

          

        </CarritoContextoProvider>

      </div>

  );
}

export default App;

