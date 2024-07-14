import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const HomePage = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = (username) => {
        onLogin(username);
        navigate('/tasks');
    };

    return (
        <div>
            <h1>Welcome to the Task Manager</h1>
            <LoginForm onLogin={handleLogin} />
            <RegisterForm />
        </div>
    );
};

export default HomePage;
