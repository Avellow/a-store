import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // СТРИКТ МОД отключен в связи с ошибкой библиотеки core-components (метод findDOMNode запрещен)
    // необходимо выяснить, как исправить
    /*<React.StrictMode>*/
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    /*</React.StrictMode>*/
);
