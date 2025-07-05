import { useState } from "react";
import { Link} from "react-router-dom";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-green-200">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm  ms-2">Rick & Morty Explorer</Link>
      </div>
      
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-gray-900 font-bold">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-900 font-bold">
          About us
        </Link>
        <Link to="/contact" className="hover:text-gray-900 font-bold">
          Contact
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col space-y-1.5"
      >
        <span className="w-5 h-0.5 bg-gray-700"></span>
        <span className="w-5 h-0.5 bg-gray-700"></span>
        <span className="w-5 h-0.5 bg-gray-700"></span>
      </button>

      {isOpen == true && (
        <div className="md:hidden absolute flex flex-col top-16 left-0 w-full bg-green-200 space-y-6 p-5 border border-black rounded-lg">
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
      )}
    </nav>
  );
}