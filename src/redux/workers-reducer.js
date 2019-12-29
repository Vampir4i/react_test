import { API } from "../api/api";

const ADD_WORKER = 'ADD_WORKER';
const DELETE_WORKER = 'DELETE_WORKER';
const UPDATE_WORKER = 'UPDATE_WORKER';
const GET_WORKERS = 'GET_WORKERS';
const SET_FETCHING = 'SET_FETCHING';

let initialState = {
    workers: [],
    isFetching: false,
    //Добавить пагинацию
    //Добавить disable кнопок
}

export const workersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_WORKERS:
            return {
                ...state,
                workers: [...action.workers]
            }
        case ADD_WORKER:
            return {
                ...state,
                workers: [...state.workers, action.worker]
            }
        case UPDATE_WORKER:
            return {
                ...state,
                workers: state.workers.map(worker => {
                    if(worker.id === action.worker.id)
                        return {...action.worker};
                    return worker;
                })
            }
        case DELETE_WORKER:
            return {
                ...state,
                workers: state.workers.filter(worker => worker.id !== action.worker.id)
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setFetching = (isFetching) => {
    return {type: SET_FETCHING, isFetching};
}

export const addWorker = (worker) => {
    //Проследить за обьектов worker, возможно нужна копия обьекта
    return {type: ADD_WORKER, worker};
}

export const updateWorker = (worker) => {
    return {type: UPDATE_WORKER, worker};
}

export const deleteWorker = (worker) => {
    //Возможно передавать только id
    return {type: DELETE_WORKER, worker};
}

export const getWorkers = (workers) => {
    return {type: GET_WORKERS, workers};
}

export const getWorkersServer = () => {
    return (dispatch) => {
        dispatch(setFetching(true));
        API.getWorkers().then(data => {
            //Дописать условие на корректное выполнение запроса
            dispatch(setFetching(false));
            dispatch(getWorkers(data));
        })
    }
}

export const updateWorkerServer = (id, firstName, lastName, age, gender, info, data, salary, position) => {
    //Переписать сервер на прием обьекта работника
    return (dispatch) => {
        dispatch(setFetching(true));
        API.updateWorker(id, firstName, lastName, age, gender, info, data, salary, position).then(data => {
            dispatch(setFetching(false));
            dispatch(updateWorker(data));
        })
    }
}

export const deleteWorkerServer = (id) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        API.deleteWorker(id).then(data => {
            dispatch(setFetching(false));
            dispatch(deleteWorker(data));
        })
    }
}

export const addWorkerServer = (firstName, lastName, age, gender, info, data, salary, position) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        API.addWorker(firstName, lastName, age, gender, info, data, salary, position).then(data => {
            dispatch(setFetching(false));
            dispatch(addWorker(data));
        })
    }
}