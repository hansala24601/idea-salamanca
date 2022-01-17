import React from 'react'
import { Link } from 'react-router-dom';

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
