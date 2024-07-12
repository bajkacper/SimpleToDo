import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
    return (
        <div>
            <h1>Task and Person Management</h1>
            <LoginForm />
            <RegisterForm />
            <TaskList />
            <AddTaskForm />
        </div>
    );
};

export default App;
