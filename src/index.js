import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Renderiza el componente principal (App) en el div con id 'root' en index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
