import React from 'react'

const NavBar = () => {
    return (
        <div className="navBar">
            
            <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Inicio</a> 
            <a href="#"><i class="fa fa-fw fa-search" title="si no sabes qué regalar a tu cuñao regalá cualquier cosa"></i> Busqueda random</a> 

            <a href="#"><i class="fa fa-gift"></i> Regalá cosas que parecen caras</a> 

            <a href="#"><i class="fa fa-user-circle"></i> Sobre nosotros</a> 

            <a href="#"><i class="fa fa-truck"></i> Envíos</a> 

            <a href="#"><i class="fa fa-fw fa-envelope"></i> Contacta</a> 

        </div>
    )
}

export default NavBar;
