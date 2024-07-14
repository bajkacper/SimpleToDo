import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

const TasksPage = ({ username }) => {
    const [tasks, setTasks] = useState([]);

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>Tasks for {username}</h1>
            <TaskList username={username} tasks={tasks} />
            <AddTaskForm username={username} onTaskAdded={handleTaskAdded} />
        </div>
    );
};

export default TasksPage;
