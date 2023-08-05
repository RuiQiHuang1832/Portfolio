import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import './global.css';


const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />)

