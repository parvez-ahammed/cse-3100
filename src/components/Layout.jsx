import { Outlet, Link, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* 
        This is a standard Bootstrap navbar.
        - `navbar-expand-lg`: The navbar will be horizontal on large screens and stack vertically on smaller screens.
        - `navbar-light bg-white`: Sets a light theme with a white background.
        - `py-3 border-bottom`: Adds vertical padding and a bottom border for separation.
      */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom">
        <div className="container d-flex justify-content-between">
          {/* Left Side: Brand/Logo */}
          <Link className="navbar-brand fw-bold" to="/">
            <span role="img" aria-label="alien" className="me-2">👽</span>
            Rick & Morty Explorer
          </Link>

          {/* Right Side: Navigation Links */}
          {/* `ms-auto` is the key Bootstrap class that pushes the links to the right */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* 
                We use NavLink instead of Link here. It's a special version that
                knows whether it is "active" and can be styled differently.
              */}
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content area where pages will be rendered */}
      <main>
        <Outlet />
      </main>
    </>
  );
} 