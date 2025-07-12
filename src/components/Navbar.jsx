import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <span className="mode-toggle" onClick={toggleMode} title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
        {darkMode ? '🌙' : '☀️'}
      </span>
    </nav>
  );
}
