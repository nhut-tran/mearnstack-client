import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CountryContextProvider from "./context/CountryContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>

  </React.StrictMode>
);


