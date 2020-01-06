import React from 'react';
import style from './../App.module.css';

const WorkerForm = (props) => {
    return (
        <form onSubmit={(e)=>{
                e.preventDefault();
                props.submitHandler();
            }}  className={style.containerWorker}>
            <div className={style.dwsInput}>
                <input type="text" value={props.WI.firstName} name='firstName' onChange={props.changeInput} placeholder='First name' />
            </div>

            <div className={style.dwsInput}>
                <input type="text" value={props.WI.lastName} name='lastName' onChange={props.changeInput} placeholder='Second name' />
            </div>

            <div className={style.dwsInput}>
                <input type="text" value={props.WI.age} name='age' onChange={props.changeInput} placeholder='Age' />
            </div>

            <div className={style.dwsInput}>
                { /*Изменить на select*/ }
                <input type="text" value={props.WI.gender} name='gender' onChange={props.changeInput} placeholder='Gender' />
            </div>

            <div className={style.dwsInput}>
                { /*Изменить на textarea*/ }
                <input type="text" value={props.WI.info} name='info' onChange={props.changeInput} placeholder='Information' />
            </div>

            <div className={style.dwsInput}>
                <input type="text" value={props.WI.data} name='data' onChange={props.changeInput} placeholder='Date' />
            </div>

            <div className={style.dwsInput}>
                <input type="text" value={props.WI.salary} name='salary' onChange={props.changeInput} placeholder='Salary' />
            </div>

            <div className={style.dwsInput}>
                <input type="text" value={props.WI.position} name='position' onChange={props.changeInput} placeholder='Position' />
            </div>

            <input type="submit" value="Отправить" className={style.dwsSubmit} />
        </form>
    );
}

export default WorkerForm;