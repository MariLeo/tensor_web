import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Cookies from 'js-cookie';
import './css/bootstrap.min.css';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
