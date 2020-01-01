import {applyMiddleware, createStore, combineReducers} from 'redux';
import {authReducer} from './auth-reducer';
//import {registerReducer} from './register-reducer';
import {workersReducer} from './workers-reducer';
import thunkMiddleware from 'redux-thunk';;

let reducers = combineReducers({
    auth: authReducer,
    //registerPage: registerReducer,
    workersPage: workersReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;