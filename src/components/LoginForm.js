import React from 'react'
import LoginButton from './LoginButton'



const LoginForm = () => {
    return (
        <div>
            Nombre: <input></input>
            <br></br>
            Email: <input></input>
            <br></br>
            Repetir email: <input></input>
            <br></br>

            <LoginButton></LoginButton>

        </div>
    )
}

export default LoginForm