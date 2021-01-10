import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/All.css';
import './styles/Index.css';
import PageRouter from './routes/PageRouter';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <PageRouter />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);