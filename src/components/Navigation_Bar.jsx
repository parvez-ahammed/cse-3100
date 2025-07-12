import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation_Bar.css";

export default function Navigation_Bar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav-container">
      <div className="nav-brand">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          Rick & Morty Explorer
        </NavLink>

        <button className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
