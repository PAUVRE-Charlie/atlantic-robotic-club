/*
  This file is the first one to be executed when the website is launched.
  It is the root of the whole website.
*/

/* Packages */
import React from 'react';
import ReactDOM from 'react-dom';

/* Styles */
import './styles/css/index.css';

/* Components */
import App from './App';

/* To mesure performance */
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
