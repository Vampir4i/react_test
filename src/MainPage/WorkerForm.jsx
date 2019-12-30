import React from 'react';
import style from './MainPage.module.css';

const WorkerForm = (props) => {
    return (
        <form onSubmit={(e)=>{
                e.preventDefault();
                props.submitHandler();
            }}>
            <div>
                <label>
                    Имя:
                <input type="text" value={props.WI.firstName} name='firstName' onChange={props.changeInput} />
                </label>
            </div>

            <div>
                <label>
                    Фамилия:
                <input type="text" value={props.WI.lastName} name='lastName' onChange={props.changeInput} />
                </label>
            </div>

            <div>
                <label>
                    Возраст:
                <input type="text" value={props.WI.age} name='age' onChange={props.changeInput} />
                </label>
            </div>

            <div>
                <label>
                    Пол:
                { /*Изменить на select*/ }
                    <input type="text" value={props.WI.gender} name='gender' onChange={props.changeInput} />
                </label>
            </div>

            <div>
                <label>
                    Информация:
                { /*Изменить на textarea*/ }
                    <input type="text" value={props.WI.info} name='info' onChange={props.changeInput} />
                </label>
            </div>

            <div>
                <label>
                    Дата:
                <input type="text" value={props.WI.data} name='data' onChange={props.changeInput} />
                </label>
            </div>

            <div>
                <label>
                    Зарплата:
                <input type="text" value={props.WI.salary} name='salary' onChange={props.changeInput} />
                </label>
            </div>

            <div>
                <label>
                    Должность:
                <input type="text" value={props.WI.position} name='position' onChange={props.changeInput} />
                </label>
            </div>

            <input type="submit" value="Отправить" />
        </form>
    );
}

export default WorkerForm;