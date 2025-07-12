import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // 🆕 Add custom styling

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar-container">
      <div className="nav-left">
        <Link to="/" className="brand">Rick & Morty Explorer</Link>
      </div>
      <div className="nav-right">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
