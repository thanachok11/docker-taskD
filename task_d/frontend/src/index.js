// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // Add if you have any global styles

// Render the React app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
