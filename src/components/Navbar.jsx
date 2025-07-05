import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-green-700 px-8 py-4 mb-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-2xl font-bold text-white">
          Rick & Morty Explorer
        </Link>
      </div>
      <div className="hidden md:flex space-x-6 text-white font-medium">
        <Link to="/" className="hover:text-gray-200"> 
                  Home
        </Link>
        <Link to="/about" className="hover:text-gray-200">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-200">
          Contact
        </Link>
      </div>
      <button
        className="md:hidden flex flex-col space-y-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-5 h-0.5 bg-white"></span>       
        <span className="w-5 h-0.5 bg-white"></span>
        <span className="w-5 h-0.5 bg-white"></span>
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-green-700 flex flex-col space-y-4 p-4 border-t border-green-800">
          <Link to="/" className="text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}