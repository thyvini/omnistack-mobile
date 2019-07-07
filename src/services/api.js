import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistackbackendthyago.herokuapp.com"
});

export default api;