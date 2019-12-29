import {API} from './../api/api';

const SET_FETCHING = 'SET_FETCHING';

let initialState = {
    isFetching: false
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type){
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

export const sendRegistrationInfo = (login, password, email) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        API.registerUser(login, password, email).then(data => {
            console.log(data);
            dispatch(setFetching(false));
        })
    }
}