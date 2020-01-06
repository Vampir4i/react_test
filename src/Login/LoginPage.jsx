import React from 'react';
import style from './../App.module.css';
import { NavLink } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.submitHandler();
        }} className={style.container}>
            <div className={style.dwsInput}>
                <input type="text" value={props.login} name='login' onChange={props.inputHandler} placeholder="Login" />
            </div>
            <div className={style.dwsInput}>
                <input type="password" value={props.password} name='password' onChange={props.inputHandler} placeholder="Password"/>
            </div>
            <input className={style.dwsSubmit} type="submit" value='Войти' />
            <div>
                <NavLink to='/registration'>Регистрация</NavLink>
            </div>
        </form>
    );
}

export default LoginPage;