import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure App.jsx exists in the same folder
import axios from 'axios'

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);