import axios from 'axios';
import { error } from 'console';


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 5000
})

// Request Interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized
            console.error('Unauthorized. Redirecting to login.');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;