// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses =
  "font-medium text-[#4cb5c3] px-3 py-1 relative rounded-md border  transition duration-300 " +
  "hover:text-[#02afc5] hover:bg-white/30 hover:backdrop-blur-sm";

const mobileLinkClasses =
  "font-medium text-[#4cb5c3] py-2 border-b rounded-md transition duration-300 " +
  "hover:text-[#02afc5] hover:bg-white/30 hover:backdrop-blur-sm";


  return (
    <nav className="bg-lime-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with subtle shadow */}
        <Link
          to="/"
          className="text-3xl font-extrabold glow-animation"
          style={{
            fontFamily: "'Get Schwifty', sans-serif",
            color: '#02afc5',
            WebkitTextStroke: '0.01px black',
            letterSpacing: '1px',
          }}
        >
          Rick and Morty Explorer
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={linkClasses}>
            Home
          </Link>
          <Link to="/about" className={linkClasses}>
            About
          </Link>
          <Link to="/contact" className={linkClasses}>
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#4cb5c3] hover:text-[#02afc5] focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="h-8 w-8" /> : <FaBars className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={mobileLinkClasses}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
