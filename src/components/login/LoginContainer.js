import React, {useEffect, useState} from 'react'
import LoginForm from './LoginForm'
import {ThemeContext, themes} from './login-context';

const LoginContainer = () => {

    const [theme, setTheme] = useState(themes.dark)


    const onChangeHandler = (e) => {

        setTheme(themes[e.target.value]);
    };

    useEffect(() => {

        console.log("Cambiado el theme a... ", theme);

    }, [theme])

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h3>Ingresa tus datos</h3>
                <LoginForm></LoginForm>
                <select onChange={onChangeHandler}>
                    <option value='dark'>Dark</option>
                    <option value='light'>Light</option>
                    <option value='christmas'>Christmas</option>
                </select>
            </div>
        </ThemeContext.Provider>
    )
}

export default LoginContainer
