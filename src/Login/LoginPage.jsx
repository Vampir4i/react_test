import React from 'react';
import style from './LoginPage.module.css';
import { NavLink } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.submitHandler();
        }}>
            <div>
                <label>
                    Логин:
                <input type="text" value={props.login} name='login' onChange={props.inputHandler} />
                </label>
            </div>

            <div>
                <label>
                    Пароль:
                <input type="password" value={props.password} name='password' onChange={props.inputHandler} />
                </label>
            </div>
            <input type="submit" value='Войти' />
            <div>
                <NavLink to='/registration'>Регистрация</NavLink>
            </div>
        </form>
    );
}

export default LoginPage;