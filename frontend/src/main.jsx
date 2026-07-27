// Import StrictMode from React
// StrictMode is a development tool that helps identify potential problems
// in the application. It does not affect the production build.
import { StrictMode } from 'react'

// Import createRoot from React DOM
// createRoot() is used to create the root of the React application
// and attach it to the HTML page.
import { createRoot } from 'react-dom/client'

// Import the global CSS file for the entire application
import './index.css'

// Import the main App component (root component of the application)
import App from './App.jsx'

// Import Bootstrap CSS
// This provides ready-made responsive styles and UI components
// like buttons, tables, forms, navbar, etc.
import 'bootstrap/dist/css/bootstrap.min.css';


/*
 * Entry Point of the React Application
 * ------------------------------------
 * This file is the starting point of the React application.
 *
 * Responsibilities:
 * 1. Creates the root React DOM.
 * 2. Connects React with the HTML page.
 * 3. Renders the main App component.
 * 4. Wraps the application inside StrictMode for development checks.
 */

// Find the HTML element with id="root"
// (This element is present inside public/index.html or index.html)
//
// createRoot() tells React where the application should be rendered.
createRoot(document.getElementById('root')).render(

  // StrictMode enables additional checks and warnings during development.
  // It helps developers find bugs early.
  // Note: It is only active in development mode.
  <StrictMode>

    {/* Render the main App component.
        App is the parent component that contains the entire application. */}
    <App />

  </StrictMode>,
)