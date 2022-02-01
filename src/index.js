import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/base.scss';
import App from './App';
import swDev from './swDev';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// swDev();