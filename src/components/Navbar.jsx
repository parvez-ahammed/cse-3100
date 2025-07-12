import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-10">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-extrabold text-blue-900">
          Rick & Morty Explorer
        </span>
      </div>
      <div className="hidden md:flex space-x-6 text-blue-900 font-medium">
        <Link to="/" className="hover:text-blue-700">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-700">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-blue-700">
          Contact
        </Link>
      </div>
      <button
        className="md:hidden flex flex-col space-y-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-blue-900"></span>
        <span className="w-6 h-0.5 bg-blue-900"></span>
        <span className="w-6 h-0.5 bg-blue-900"></span>
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-700 text-blue-900 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-700 text-blue-900 font-medium"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-700 text-blue-900 font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
