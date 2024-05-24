import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7006/api',
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request Config:', config);
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;