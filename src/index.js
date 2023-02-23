import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// react router for navigation without reloading the page
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
  <App />
</BrowserRouter>
);
