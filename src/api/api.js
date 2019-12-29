import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/'
});


export const API = {
    getWorkers() {
        return instance.get('workers').then(response => response.data);
    },
    addWorker(firstName, lastName, age, gender, info, data, salary, position) {
        let params = { firstName, lastName, age, gender, info, data, salary, position };
        return instance.post('workers', params).then(response => response.data);
    },
    deleteWorker(id) {
        return instance.delete(`workers/${id}`).then(response => response.data);
    },
    updateWorker(id, firstName, lastName, age, gender, info, data, salary, position) {
        let params = { id, firstName, lastName, age, gender, info, data, salary, position };
        return instance.put('workers', params).then(response => response.data);
    },
    loginUser(login, password) {
        return instance.post('login', { login, password }).then(response => response.data);
    },
    registerUser(login, password, email) {
        return instance.post('register', { login, password, email }).then(response => response.data);
    }
}