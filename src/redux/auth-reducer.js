import { API } from '../api/api';

const SET_LOGIN = 'SET_LOGIN';

let initialState = {
    _id: '',
    login: '',
    email: '',
    password: '',
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
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

export const setLogin = (_id, login, email, password) => {
    return { type: SET_LOGIN, data: { _id, login, email, password } };
}

export const authUser = (login, password,) => {
    return (dispatch) => {
        API.loginUser(login, password).then(data => {
            if(data){
                let { _id, login, email, password } = data;
                dispatch(setLogin(_id, login, email, password));
                //window.location.href='/main';
            }
        });
    }
}

export const sendRegistrationInfo = (login, password, email) => {
    return (dispatch) => {
        //dispatch(setFetching(true));
        API.registerUser(login, password, email).then(data => {
            console.log(data);
            let { _id, login, email, password } = data;
            dispatch(setLogin(_id, login, email, password));
            window.location.href='/main';
            //dispatch(setFetching(false));
        })
    }
}