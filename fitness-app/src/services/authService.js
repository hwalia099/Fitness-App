import api from '../utils/api';

export const signup = async (userData) => {
    try {
        const response = await api.post('/auth/signup', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createProfile = async (userProfile) => {
    try {
        const response = await api.post('/userprofile', userProfile);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

