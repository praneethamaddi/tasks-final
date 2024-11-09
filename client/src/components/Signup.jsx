import React, { useState } from 'react';
import './Signup.css'; // Correct path
import axios from 'axios'
import { backendURL } from '../config';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${backendURL}/api/v1/auth/signup`, {
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
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
