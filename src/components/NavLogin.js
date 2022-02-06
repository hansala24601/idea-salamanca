import React from 'react'
import { Link } from 'react-router-dom';

// barra de login (un enlace al login)
const NavLogin = () => {
    return (
        <div className="navLogin">
            
            <Link to="/login" className='navbar-brand'>
                            <i class="fa fa-sign-in"></i>  Login  
            </Link>

        </div>
    )
}

export default NavLogin
