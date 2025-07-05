import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'; // Assuming you have a CSS file for styling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    // Persist dark mode in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <Link to="/" className="navbar-title">
            Rick & Morty Explorer
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-bar"></span>
          <span className="navbar-bar"></span>
          <span className="navbar-bar"></span>
        </button>
        <button
          className="dark-toggle"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
      {isOpen && (
        <div className="navbar-mobile">
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}