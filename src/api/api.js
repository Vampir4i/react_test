import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/'
});


export const API = {
    getWorkers() {
        return instance.get('users').then(response => response.data);
    },
    addWorker(firstName, lastName, age, gender, info, data, salary, position) {
        let params = { firstName, lastName, age, gender, info, data, salary, position };
        return instance.post('users', params).then(response => response.data);
    },
    deleteWorker(id) {
        return instance.delete(`users/${id}`).then(response => response.data);
    },
    updateWorker(firstName, lastName, age, gender, info, data, salary, position) {
        let params = { firstName, lastName, age, gender, info, data, salary, position };
        return instance.put('users', params).then(response => response.data);
    },
    loginUser(login, password) {
        return instance.post('login', { login, password }).then(response => response.data);
    },
    registerUser(login, password, email) {
        return instance.post('register', { login, password, email }).then(response => response.data);
    }
}