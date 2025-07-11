// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/mortylogo.png";

export default function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme to document body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      <div className="navbar-center">
        <Link to="/">
          <img src={logo} alt="Rick & Morty Logo" className="navbar-logo" />
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
        <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About Us</Link>
        <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact Us</Link>
      </div>
    </nav>
  );
}
