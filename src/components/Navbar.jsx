import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();

  const linkStyle = (path) =>
    `nav-link${location.pathname === path ? " active fw-bold" : ""}`;

  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-3 d-flex justify-content-between">
      <div className="navbar-nav">
        <Link className={linkStyle("/")} to="/">Home</Link>
        <Link className={linkStyle("/about")} to="/about">About Us</Link>
        <Link className={linkStyle("/contact")} to="/contact">Contact</Link>
      </div>

      <button onClick={toggleTheme} className="btn btn-outline-dark">
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
