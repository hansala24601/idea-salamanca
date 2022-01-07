import React, {useContext} from 'react'
import {ThemeContext} from './login-context';

const LoginButton = () => {

    const styles = useContext(ThemeContext);

    return (
        <div>
            <button style={{
                background: styles.background,
                color: styles.foreground
            }}
            >Iniciar Sesión</button>
        </div>
    )
}

export default LoginButton
