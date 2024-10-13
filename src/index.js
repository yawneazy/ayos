import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './index.css'; // Import your CSS file
import App from './App'; // Import your root component
import reportWebVitals from './reportWebVitals'; // Optional, for measuring performance

// function detectOS() {
//   if (navigator.userAgent.indexOf('Windows') !== -1) {
//     document.body.classList.add('windows'); 
//   }
// }

// detectOS();
// Create a root and render the root component into the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Start measuring performance in your app
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
