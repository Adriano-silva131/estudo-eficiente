import axiosConfig from './axiosConfig.js';

export const loginAPI = async (credentials) => {
    await axiosConfig.get('/sanctum/csrf-cookie');
    const {data} = await axiosConfig.post('/login', credentials);
    return data;
}

export const  fetchUserAPI = async () => {
    try {
        const { data } = await axiosConfig.get("/api/user");
        return data;
    } catch (err) {
        const status = err?.response?.status;
        if (status === 401) return null;
        throw err;
    }
};
export const logoutAPI = () => axiosConfig.post('/logout');