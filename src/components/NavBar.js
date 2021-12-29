import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Home from './Home';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const NavBar = (props) => {
    return (
        <div className="navBar">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">

                        <Link to="/" className='navbar-brand'>Hard random pop</Link>

                    </div>

                    <ul class="nav navbar-nav">

                        <Link to="/category/random" className='navbar-brand'>
                            <i class="fa fa-fw fa-search"></i>  Cosas random  
                        </Link>
                        
                        <Link to="/category/absurdos" className='navbar-brand'>
                            <i class="fa fa-gift"></i> Regalos absurdos
                        </Link>

                        <Link to="/contacto" className='navbar-brand'>
                            <i class="fa fa-fw fa-envelope"></i> Contacta
                        </Link>

                        <Link to="/nosotros" className='navbar-brand'>
                            <i class="fa fa-user-circle"></i> Sobre nosotros
                        </Link>

                        <Link to="/carrito/" className='navbar-brand'>
                            <CartWidget numCarro={props.numCarro} carro={props.carro} />
                        </Link>
                        
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar;


//<li><Link to="/" >Home</Link></li>

//<a class="navbar-brand" href="https://www.google.com/">Hard random pop</a>


/*

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<ItemListContainer/>} />

                <Route path="/category/:id" element={<ItemListContainer/>}></Route>

                <Route path="/item:id" element={<ItemDetailContainer/>}></Route>

            </Routes>

          </BrowserRouter> 

          */