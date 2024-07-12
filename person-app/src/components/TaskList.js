import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from '../api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasks = await getAllTasks();
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };
        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name} - {task.description} - {task.deadline} - {task.completed ? 'Completed' : 'Not Completed'}
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
