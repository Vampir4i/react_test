import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/'
});


export const API = {
    getWorkers(currentPage = 1, pageSize = 5) {
        return instance.get(`workers?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    addWorker(worker) {
        return instance.post('workers', {...worker}).then(response => response.data);
    },
    deleteWorker(id) {
        return instance.delete(`workers/${id}`).then(response => response.data);
    },
    updateWorker(worker) {
        return instance.put('workers', {...worker}).then(response => response.data);
    },
    loginUser(login, password) {
        return instance.post('login', { login, password }).then(response => response.data);
    },
    registerUser(login, password, email) {
        return instance.post('register', { login, password, email }).then(response => response.data);
    }
}