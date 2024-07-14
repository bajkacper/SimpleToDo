import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ username, onLogout }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    return (
        <nav>
            <ul>
                {location.pathname === '/' && <li><Link to="/">Home</Link></li>}
                {username && <li><Link to="/tasks">Tasks</Link></li>}
                {username && <li><button onClick={handleLogout}>Log Out</button></li>}
            </ul>
        </nav>
    );
};

export default Navbar;
