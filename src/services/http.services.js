import axios from 'axios';
let Token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`;
axios.defaults.baseURL = `http://192.168.1.172:5001/api/`;
const getAPI = async (url) => {
    return axios.get(url);
}
const postAPI = async (url, body) => {
    return axios.post(url, body);
}
const putAPI = async (url, body) => {
    return axios.put(url, body);
}
const patchAPI = async (url, body) => {
    return axios.patch(url, body);
}
const deleteAPI = async (url) => {
    return axios.delete(url);
}

const Http = {
    getAPI,
    postAPI,
    putAPI,
    patchAPI,
    deleteAPI
}

export default Http;