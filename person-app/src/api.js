import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const login = async (username, password) => {
    try {
        const response = await axios.get(`${API_URL}/persons/login/${username}/${password}`);
        return response.data;
    } catch (error) {
        console.error('Error logging in', error);
        throw error;
    }
};

export const createPerson = async (person) => {
    try {
        const response = await axios.post(`${API_URL}/persons/create`, person);
        return response.data;
    } catch (error) {
        console.error('Error creating person', error);
        throw error;
    }
};

export const getAllTasks = async () => {
    try {
        const response = await axios.get(`${API_URL}/tasks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks', error);
        throw error;
    }
};

export const addTask = async (task) => {
    try {
        const response = await axios.post(`${API_URL}/tasks/add`, task);
        return response.data;
    } catch (error) {
        console.error('Error adding task', error);
        throw error;
    }
};

export const updateTask = async (task) => {
    try {
        const response = await axios.put(`${API_URL}/tasks/update`, task);
        return response.data;
    } catch (error) {
        console.error('Error updating task', error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/tasks/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task', error);
        throw error;
    }
};
