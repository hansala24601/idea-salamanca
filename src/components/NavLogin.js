import React from 'react'
import { Link } from 'react-router-dom';

const NavLogin = () => {
    return (
        <div className="navLogin">
            

            <a href="https://www.google.com/"><i class="fa fa-building-o"></i> Empresa</a>


            <Link to="/login" className='navbar-brand'>
                            <i class="fa fa-sign-in"></i>  Login  
            </Link>

        </div>
    )
}

export default NavLogin
