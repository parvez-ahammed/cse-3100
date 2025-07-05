// Import necessary modules from React Router for SPA navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import page components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";
// Import the navigation bar component
import Navbar from "./components/Navbar";

// Main App component that sets up routing for the application
import { useState, useEffect } from "react";

// Main App component that sets up routing for the application
export default function App() {
  // State for theme mode, default to system preference or light
  const [mode, setMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Update body class and localStorage when mode changes
  useEffect(() => {
    document.body.classList.toggle('dark-mode', mode === 'dark');
    localStorage.setItem('theme', mode);
  }, [mode]);

  // Toggle dark/light mode
  const toggleMode = () => setMode(m => (m === 'light' ? 'dark' : 'light'));

  return (
    // BrowserRouter enables client-side routing
    <BrowserRouter>
      {/* Navbar is shown on all pages, pass mode and toggle */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* App theme wrapper for extra styling if needed */}
      <div className={mode === 'dark' ? 'app-dark' : 'app-light'}>
        {/* Define routes for each page */}
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          {/* About page route */}
          <Route path="/about" element={<About />} />
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
          {/* Character detail page route with dynamic id */}
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

