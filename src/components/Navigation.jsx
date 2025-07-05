import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-brand">
                    <img src="/src/assets/react.svg" alt="Rick & Morty" className="nav-logo" />
                    <span className="nav-title">Rick & Morty Explorer</span>
                </Link>

                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link
                        to="/"
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="nav-icon">🏠</span>
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="nav-icon">ℹ️</span>
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="nav-icon">📧</span>
                        Contact
                    </Link>
                </div>

                <div className="nav-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;