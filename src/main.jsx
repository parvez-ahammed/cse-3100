// Entry point for the React application
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import global styles
import "./index.css";
// Import the root App component
import App from "./App.jsx";

// Create a React root and render the App wrapped in StrictMode
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
