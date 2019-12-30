import { API } from '../api/api';

const SET_LOGIN = 'SET_LOGIN';

let initialState = {
    userId: '',
    login: '',
    email: '',
    isAuth: true
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setLogin = (userId, login, email) => {
    return { type: SET_LOGIN, data: { userId, login, email } };
}

export const authUser = (login, password) => {
    return (dispatch) => {
        API.loginUser(login, password).then( data => {
            let {userId, login, email} = data;
            dispatch(setLogin(userId, login, email));
        });
    }
} 