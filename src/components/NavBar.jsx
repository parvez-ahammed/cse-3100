import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand Logo/Title */}
        <Link className="navbar-brand" to="/">
          Rick & Morty Explorer
        </Link>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/join" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                Join
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
