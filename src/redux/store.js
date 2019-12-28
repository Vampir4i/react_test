import {applyMiddleware, createStore, combineReducers} from 'redux';
import {loginReducer} from './login-reducer';
import {registerReducer} from './register-reducer';
import {workersReducer} from './workers-reducer';
import thunkMiddleware from 'redux-thunk';;

let reducers = combineReducers({
    loginPage: loginReducer,
    registerPage: registerReducer,
    workersPage: workersReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));