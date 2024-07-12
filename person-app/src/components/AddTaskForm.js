import React, { useState } from 'react';
import { addTask } from '../api';

const AddTaskForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { name, description, deadline, username, completed: false };
        try {
            await addTask(task);
            alert('Task added successfully');
        } catch (error) {
            alert('An error occurred while adding the task');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Task</h2>
            <input
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
