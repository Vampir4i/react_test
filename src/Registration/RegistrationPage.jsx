import React from 'react';
import style from './RegistrationPage.module.css';


const RegistrationPage = (props) => {
    return(
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

            <div>
                <label>
                    Электронный адрес:
                <input type="text" value={props.email} name='email' onChange={props.inputHandler} />
                </label>
            </div>

            <input type="submit" value='Войти' />
        </form>
    );
}

export default RegistrationPage;