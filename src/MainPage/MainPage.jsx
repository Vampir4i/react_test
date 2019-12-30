import React from 'react';
import style from './MainPage.module.css';
import WorkerForm from './WorkerForm';
import WorkerItem from './WorkerItem';

const MainPage = (props) => {
    return(
        <div>
            <WorkerForm WI={props.WI} changeInput={props.changeInput} submitHandler={props.submitHandler} />
            {props.workers.map(worker=><WorkerItem worker={worker} selectWorker={props.selectWorker} 
                deleteWorker={props.deleteWorker} />)}
        </div>
    );
} 

export default MainPage;