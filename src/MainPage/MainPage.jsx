import React from 'react';
import style from './MainPage.module.css';
import WorkerForm from './WorkerForm';
import WorkerItem from './WorkerItem';

const MainPage = (props) => {
    let pagesCount = Math.ceil(props.totalWorkersCount / props.pageSize);

    let pagesList = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesList.push(i);
    }

    return(
        <div>
            <WorkerForm WI={props.WI} changeInput={props.changeInput} submitHandler={props.submitHandler} />
            {pagesList.map((i) => {
                return <span onClick={() => props.onPageChange(i)}
                    className={props.currentPage == i && style.selectedPage} >{i + ' '}</span>
            })}
            {props.workers.map(worker=><WorkerItem worker={worker} selectWorker={props.selectWorker} 
                deleteWorker={props.deleteWorker} />)}
        </div>
    );
} 

export default MainPage;