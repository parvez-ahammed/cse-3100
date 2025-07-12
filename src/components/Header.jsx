import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <h2>Rick & Morty Explorer</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
