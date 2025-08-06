import axiosConfig from './axiosConfig.js';

export const loginAPI = async (credentials) => {
    await axiosConfig.get('/sanctum/csrf-cookie');
    const {data} = await axiosConfig.post('/login', credentials);
    return data;
}

export const fetchUserAPI = () => axiosConfig.get('/api/user').then(r => r.data);
export const logoutAPI = () => axiosConfig.post('/logout');