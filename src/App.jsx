import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage to persist theme choice
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <BrowserRouter>
       <nav style={{ padding: "1rem", background: "#eee", display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
       </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}