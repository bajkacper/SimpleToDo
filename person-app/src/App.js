import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';

const App = () => {
    const [username, setUsername] = useState(null);

    const handleLogin = (username) => {
        setUsername(username);
    };

    const handleLogout = () => {
        setUsername(null);
    };

    return (
        <Router>
            <Navbar username={username} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<HomePage onLogin={handleLogin} />} />
                {username && <Route path="/tasks" element={<TasksPage username={username} />} />}
            </Routes>
        </Router>
    );
};

export default App;
