import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './pages/Landing';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/css/style.css';
import './styles/js/app.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
