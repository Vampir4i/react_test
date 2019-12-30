import React from 'react';
import style from './MainPage.module.css';

const WorkerItem = (props) => {
    return(
        <div>
            {`${props.worker._id} ${props.worker.firstName} ${props.worker.lastName} ${props.worker.age} ${props.worker.info}`}
            <button onClick={()=>props.selectWorker(props.worker)} >Update</button>
            <button onClick={()=>props.deleteWorker(props.worker._id)} >Delete</button>
        </div>
    );
}

export default WorkerItem