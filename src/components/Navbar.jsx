// src/components/Navbar.jsx

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="app-header">
      {/* App Title linked to the Home page */}
      <Link to="/" className="app-title">
        Rick & Morty Explorer
      </Link>

      {/* Navigation links on the right */}
      <nav className="nav-links">
        <Link to="/about" className="btn btn-primary btn-3d">
          About Us
        </Link>
        <Link to="/contact" className="btn btn-primary btn-3d">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}