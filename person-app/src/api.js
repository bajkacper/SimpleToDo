import axios from 'axios';

const API_URL = 'http://localhost:8080/persons';
const TASK_API_URL = 'http://localhost:8080/tasks';

export const login = async (username, password) => {
    try {
        const response = await axios.get(`${API_URL}/login/${username}/${password}`);
        return response.data;
    } catch (error) {
        console.error('Error logging in', error);
        throw error;
    }
};

export const createPerson = async (person) => {
    try {
        const response = await axios.post(`${API_URL}/create`, person);
        return response.data;
    } catch (error) {
        console.error('Error creating person', error);
        throw error;
    }
};

export const getTasks = async (username) => {
    try {
        const response = await axios.get(`${TASK_API_URL}/username/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks', error);
        throw error;
    }
};

export const addTask = async (task) => {
    try {
        const response = await axios.post(`${TASK_API_URL}/add`, task);
        return response.data;
    } catch (error) {
        console.error('Error adding task', error);
        throw error;
    }
};

export const updateTask = async (task) => {
    try {
        const response = await axios.put(`${TASK_API_URL}/update`, task);
        return response.data;
    } catch (error) {
        console.error('Error updating task', error);
        throw error;
    }
};

export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${TASK_API_URL}/delete/${taskId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task', error);
        throw error;
    }
};
