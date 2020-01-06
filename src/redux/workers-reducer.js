import { API } from "../api/api";

const ADD_WORKER = 'ADD_WORKER';
const DELETE_WORKER = 'DELETE_WORKER';
const UPDATE_WORKER = 'UPDATE_WORKER';
const GET_WORKERS = 'GET_WORKERS';
const SET_FETCHING = 'SET_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_WORKERS_COUNT = 'SET_TOTAL_WORKERS_COUNT';
const SET_SORTED_FIELD = 'SET_SORTED_FIELD';

let initialState = {
    workers: [],
    isFetching: false,
    pageSize: 5,
    totalWorkersCount: 0,
    currentPage: 1,
    sortedField: 'firstName'
    //Добавить disable кнопок
}

export const workersReducer = (state = initialState, action) => {
    switch (action.type) {
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
                    if (worker._id === action.worker._id)
                        return { ...action.worker };
                    return worker;
                })
            }
        case DELETE_WORKER:
            return {
                ...state,
                workers: state.workers.filter(worker => worker._id !== action.worker._id)
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_WORKERS_COUNT: {
            return { ...state, totalWorkersCount: action.count }
        }
        case SET_SORTED_FIELD: {
            return { ...state, sortedField: action.field }
        }
        default:
            return state;
    }
}

export const setFetching = (isFetching) => ({ type: SET_FETCHING, isFetching })

export const addWorker = (worker) => ({ type: ADD_WORKER, worker })

export const updateWorker = (worker) => ({ type: UPDATE_WORKER, worker })

export const deleteWorker = (worker) => ({ type: DELETE_WORKER, worker })

export const getWorkers = (workers) => ({ type: GET_WORKERS, workers })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setSortedField = (field) => ({ type: SET_SORTED_FIELD, field })

export const setTotalUsersCount = (totalUsersCount) =>
    ({ type: SET_TOTAL_WORKERS_COUNT, count: totalUsersCount })

const helperFunction = (dispatch, page, pageSize) => {
    API.getWorkers(page, pageSize).then(data => {
        //Дописать условие на корректное выполнение запроса
        dispatch(getWorkers(data.workers));
        dispatch(setTotalUsersCount(data.countWorkers));
    })
}

export const getWorkersServer = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(page));
        helperFunction(dispatch, page, pageSize);
    }
}

export const updateWorkerServer = (worker) => {
    return (dispatch) => {
        API.updateWorker(worker).then(data => {
            dispatch(updateWorker(data));
        })
    }
}

export const deleteWorkerServer = (id, page, pageSize) => {
    return (dispatch) => {
        API.deleteWorker(id).then(data => {
            dispatch(setCurrentPage(page));
            helperFunction(dispatch, page, pageSize)
        })
    }
}

export const addWorkerServer = (worker, page, pageSize) => {
    return (dispatch) => {
        API.addWorker(worker).then(data => {
            helperFunction(dispatch, page, pageSize);
        })
    }
}