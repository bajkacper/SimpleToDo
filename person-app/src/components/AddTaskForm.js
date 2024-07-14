import React, { useState } from 'react';
import { addTask } from '../api';

const AddTaskForm = ({ username, onTaskAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { name, description, deadline, isCompleted: false, username };
        try {
            const newTask = await addTask(task);
            onTaskAdded(newTask);
            setName('');
            setDescription('');
            setDeadline('');
        } catch (error) {
            console.error('Error adding task', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <h2>Add Task</h2>
            <label>
                Name:
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Deadline:
                <input
                    type="datetime-local"
                    placeholder="Deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
