import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">Rick & Morty Explorer</Link>
      <div className="ms-auto d-flex">
        <Link className="nav-link" to="/about">About Us</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
