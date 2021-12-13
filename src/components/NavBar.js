import React from 'react'
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const NavBar = (props) => {
    return (
        <div className="navBar">
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Hard random pop</a>
                    </div>
                    <ul class="nav navbar-nav">

                        <li class="active"><a class="active" href="#"><i class="fa fa-fw fa-home"></i> Inicio</a></li>
                        <li><a href="#"><i class="fa fa-fw fa-search" title="si no sabes qué regalar a tu cuñao regala cualquier cosa"></i> Busqueda random</a></li>
                        <li><a href="#"><i class="fa fa-gift"></i> Regala cosas que parecen caras</a></li>
                        <li><a href="#"><i class="fa fa-user-circle"></i> Sobre nosotros</a></li>
                        <li><a href="#"><i class="fa fa-truck"></i> Envíos</a></li>
                        <li><a href="#"><i class="fa fa-fw fa-envelope"></i> Contacta</a></li>

                        <li><CartWidget numCarro={props.numCarro} carro={props.carro} /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
