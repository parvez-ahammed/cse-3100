import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ mode = 'light', toggleMode }) {
  const location = useLocation();
  
  return (
    <nav className={`${styles.navbar} ${mode === 'dark' ? styles.darkNavbar : ''}`}>
      <div className={styles.container}>
        {/* Brand with animated portal icon */}
        <Link to="/" className={styles.brand}>
          <div className={styles.portalIcon}>
            <span className={styles.portalInner}>🧪</span>
          </div>
          <span className={styles.brandText}>Rick & Morty Explorer</span>
        </Link>
        
        {/* Navigation links with hover effects */}
        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === "/" ? styles.activeLink : ""}`}
          >
            <span className={styles.navLinkText}>Home</span>
          </Link>
          
          <Link
            to="/about"
            className={`${styles.navLink} ${location.pathname === "/about" ? styles.activeLink : ""}`}
          >
            <span className={styles.navLinkText}>About Us</span>
          </Link>
          
          <Link
            to="/contact"
            className={`${styles.navLink} ${location.pathname === "/contact" ? styles.activeLink : ""}`}
          >
            <span className={styles.navLinkText}>Contact</span>
          </Link>
        </div>
        
        {/* Improved theme toggle button */}
        <button
          className={styles.themeToggle}
          onClick={toggleMode}
          aria-label="Toggle dark/light mode"
        >
          <div className={styles.toggleTrack}>
            <div className={`${styles.toggleThumb} ${mode === 'dark' ? styles.toggleThumbDark : ''}`}>
              <span className={styles.themeIcon}>{mode === 'dark' ? '🌙' : '☀️'}</span>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}
