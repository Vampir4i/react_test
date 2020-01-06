import React from 'react';
import style from './../App.module.css';


const RegistrationPage = (props) => {
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            props.submitHandler();
        }} className={style.container}>
            <div className={style.dwsInput}>
                <input type="text" value={props.login} name='login' onChange={props.inputHandler} placeholder='Login' />
            </div>

            <div className={style.dwsInput}>
                <input type="password" value={props.password} name='password' onChange={props.inputHandler} placeholder='Password' />
            </div>

            <div className={style.dwsInput}>
                <input type="text" value={props.email} name='email' onChange={props.inputHandler} placeholder='Email' />
            </div>

            <input className={style.dwsSubmit} type="submit" value='Войти' />
        </form>
    );
}

export default RegistrationPage;