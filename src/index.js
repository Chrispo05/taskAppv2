import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//auth0 para el estado y manejo del login, además de las ventanas de login y create
import {Auth0Provider} from "@auth0/auth0-react"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-09svg-od.us.auth0.com' clientId='RD2ai8ZDfpzVQaO3MUDim85aBawp7cPy' redirectUri={window.location.origin}>

         <App />
    </Auth0Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
