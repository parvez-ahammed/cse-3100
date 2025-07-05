import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-content">
          {/* Brand section */}
          <div className="footer-section">
            <h3 className="footer-brand">Rick & Morty Explorer</h3>
            <p className="footer-description">
              Explore the infinite multiverse and discover your favorite characters
              from the greatest sci-fi animated series of all time.
            </p>
            <div className="footer-social">
              {/* GitHub icon */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
                </svg>
              </a>

              {/* API link */}
              <a
                href="https://rickandmortyapi.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rick and Morty API"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-section">
            <h4 className="footer-title">Features</h4>
            <ul className="footer-links">
              <li><span className="footer-link">Character Search</span></li>
              <li><span className="footer-link">Episode Details</span></li>
              <li><span className="footer-link">Dark Mode</span></li>
              <li><span className="footer-link">Responsive Design</span></li>
            </ul>
          </div>

          {/* Developer info */}
          <div className="footer-section">
            <h4 className="footer-title">Developer</h4>
            <p className="footer-text">Md. Rubayet Islam</p>
            <p className="footer-text">CSE Student at AUST</p>
            <p className="footer-text">3rd Year, 1st Semester</p>
            <p className="footer-text">ID: 20220204069</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Rick & Morty Explorer. Built with ❤️ using React.
            </p>
            <p className="footer-api-credit">
              Data provided by{' '}
              <a
                href="https://rickandmortyapi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-api-link"
              >
                The Rick and Morty API
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
