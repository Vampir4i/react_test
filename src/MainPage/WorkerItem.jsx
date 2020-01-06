import React from 'react';
import style from './MainPage.module.css';

const WorkerItem = (props) => {
    return(
        <tr>
            <td>{props.worker.firstName}</td>
            <td>{props.worker.lastName}</td>
            <td>{props.worker.age}</td>
            <td>{props.worker.info}</td>
            <td>{props.worker.gender}</td>
            <td>{props.worker.position}</td>
            <td>{props.worker.salary}</td>
            <td><button onClick={()=>props.selectWorker(props.worker)} >Update</button></td>
            <td><button onClick={()=>props.deleteWorker(props.worker._id)} >Delete</button></td>
        </tr>
    );
}
export default WorkerItem

{/* {`${props.worker._id} ${props.worker.firstName} ${props.worker.lastName} ${props.worker.age} ${props.worker.info}`} */}
{/* <button onClick={()=>props.selectWorker(props.worker)} >Update</button>
<button onClick={()=>props.deleteWorker(props.worker._id)} >Delete</button> */}