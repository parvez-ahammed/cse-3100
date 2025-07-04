import { Link } from "react-router-dom";
import React from "react"; // Added import for React

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <div to='/' className='navbar-logo-link'>
          Rick & Morty Explorer
        </div>
      </div>
      <ul className='navbar-links'>
        <li>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='nav-link'>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/contact' className='nav-link'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
