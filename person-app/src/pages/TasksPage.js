import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import { getTasks } from '../api';

const TasksPage = ({ username }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasks = await getTasks(username);
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };
        fetchTasks();
    }, [username]);

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>Tasks for {username}</h1>
            <TaskList username={username} tasks={tasks} setTasks={setTasks} />
            <AddTaskForm username={username} onTaskAdded={handleTaskAdded} />
        </div>
    );
};

export default TasksPage;
