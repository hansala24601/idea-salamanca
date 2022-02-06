import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


import {CarritoContexto} from './CartContext';
import { useContext}  from 'react'


const NavBar = (props) => {


    const {total} = useContext(CarritoContexto)

    // la barra de navegación con el brand de la marca, enlaces a categorías...
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
                            <CartWidget />
                        </Link>


                        
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default NavBar;
