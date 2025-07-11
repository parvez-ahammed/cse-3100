import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-10">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-extrabold text-gray-900">
          Rick & Morty Explorer
        </span>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-gray-900">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-900">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-gray-900">
          Contact
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col space-y-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
        <span className="w-6 h-0.5 bg-gray-700"></span>
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-900 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-900 font-medium"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-900 font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
