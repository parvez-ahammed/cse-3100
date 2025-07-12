import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo/h_logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFFCFB] p-1 shadow-lg">
      <nav className="flex justify-between items-center px-4">
        <div className="flex items-center px-4 space-x-8">
          {/* <p className="text-[#004030] text-lg font-bold">
            Rick & Morty Explorer
          </p>*/}

          <img src={logo} alt="Logo" className="h-20 w-23" />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-[#004030] text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-[#004030] font-semibold text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-[#4A9782]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#4A9782]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#4A9782]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4">
          <ul className="space-y-4 text-[#004030] font-semibold text-lg">
            <li>
              <Link
                to="/"
                className="block hover:text-[#4A9782]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-[#4A9782]"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-[#4A9782]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
