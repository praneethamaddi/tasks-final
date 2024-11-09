import React, { useState } from 'react';
import './Login.css'; // Correct path
import axios from 'axios'
import { backendURL } from '../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${backendURL}/api/v1/auth/signin`, {
          email,
          password
        }
      )
      console.log(response.data.message);
      alert(response.data.message)
    } catch(e){
      console.log(e)
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
