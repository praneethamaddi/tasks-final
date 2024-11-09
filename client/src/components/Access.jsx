import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Access.css';
import axios from 'axios';
import { backendURL } from '../config';

const Access = ({ setIsAuthenticated }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                // Login logic
                const response = await axios.post(`${backendURL}/api/v1/auth/signin`, {
                    email,
                    password
                });
                alert(response.data.message);
                if (response.status === 200) {
                    setIsAuthenticated(true);
                    navigate('/dashboard');
                    localStorage.setItem("userId", response.data.user._id)
                }
            } else {
                // Signup logic
                const response = await axios.post(`${backendURL}/api/v1/auth/signup`, {
                    email,
                    password
                });
                alert(response.data.message);
                if (response.status === 201) {
                    setIsLogin(true); // Switch to login mode after successful signup
                    localStorage.setItem("userId", response.data.user._id)
                }
            }
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 200 range
                alert(error.response.data.message || 'An error occurred');
            } else if (error.request) {
                // Request was made but no response was received
                alert('No response from server');
            } else {
                // Something happened in setting up the request
                alert('Error: ' + error.message);
            }
        }
    };

    return (
        <div className="access-container">
            <div className="card">
                <h1>{isLogin ? 'Login' : 'Signup'}</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
                </form>
                <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Switch to Signup' : 'Switch to Login'}
                </button>
            </div>
        </div>
    );
};

export default Access;
