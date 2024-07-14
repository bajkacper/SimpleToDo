import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const HomePage = ({ onLogin }) => {
    return (
        <div>
            <h1>Welcome to the Task Manager</h1>
            <LoginForm onLogin={onLogin} />
            <RegisterForm />
        </div>
    );
};

export default HomePage;
