// Import Link for navigation and useLocation to highlight active link
import { Link, useLocation } from "react-router-dom";
// Import CSS module
import styles from "./Navbar.module.css";

// Navbar component for site-wide navigation
// Now accepts mode and toggleMode props for dark/light mode
export default function Navbar({ mode = 'light', toggleMode }) {
  // Get current location to highlight the active nav link
  const location = useLocation();
  return (
    <nav className={`${styles.navbar} ${mode === 'dark' ? styles.darkNavbar : ''}`}>
      <div className={styles.container}>
        {/* App brand/title with icon */}
        <Link to="/" className={styles.brand}>
          <span className={styles.brandIcon}>🧪</span>
          Rick & Morty Explorer
        </Link>
        
        {/* Navigation links */}
        <div className={styles.navLinks}>
          {/* Home navigation link */}
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === "/" ? styles.activeLink : ""}`}
          >
            Home
          </Link>
          
          {/* About navigation link */}
          <Link
            to="/about"
            className={`${styles.navLink} ${location.pathname === "/about" ? styles.activeLink : ""}`}
          >
            About Us
          </Link>
          
          {/* Contact navigation link */}
          <Link
            to="/contact"
            className={`${styles.navLink} ${location.pathname === "/contact" ? styles.activeLink : ""}`}
          >
            Contact
          </Link>
        </div>
        
        {/* Dark/Light mode toggle button */}
        <button
          className={styles.themeToggle}
          onClick={toggleMode}
          aria-label="Toggle dark/light mode"
        >
          <span className={styles.themeIcon}>{mode === 'dark' ? '🌙' : '☀️'}</span>
          {mode === 'dark' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}
