import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold">Rick & Morty Explorer</span>
      </div>

      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-gray-900 font-bold">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-900 font-bold">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-gray-900 font-bold">
          Contact
        </Link>
      </div>

      <button
        className="md:hidden flex flex-col space-y-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-5 h-0.5 bg-gray-700"></span>
        <span className="w-5 h-0.5 bg-gray-700"></span>
        <span className="w-5 h-0.5 bg-gray-700"></span>
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white flex flex-col space-y-4 p-4 border-t">
          <a href="#" className="hover:text-gray-900">
            Home
          </a>
          <a href="#" className="hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="hover:text-gray-900">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
