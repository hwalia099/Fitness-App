import axios from 'axios';

// Replace with your backend API URL
const API_URL = 'http://localhost:9000';

export const getUserInfo = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUserProfile = async (userId, profileData) => {
    try {
        const response = await axios.put(`${API_URL}/userprofile/${userId}`, profileData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const adduserProfile = async (userId, profileData) => {
    try {
        const response = await axios.post(`${API_URL}/userprofile/${userId}`, profileData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Add other user-related functions if needed
