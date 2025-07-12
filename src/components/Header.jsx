import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg mb-4 navbar-${theme}`}
         style={{ backgroundColor: theme === 'dark' ? '#212529' : '#f8f9fa' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: theme === 'dark' ? '#fff' : 'inherit' }}>
          Rick & Morty Explorer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}>
                Contact
              </Link>
            </li>
          </ul>
          <button 
            onClick={toggleTheme}
            className={`btn btn-outline-${theme === 'dark' ? 'light' : 'dark'}`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}