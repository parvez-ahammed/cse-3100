import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#3F4651] p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/*logo*/}
          <p className="text-[#C0BCB5] text-lg font-bold">
            Rick & Morty Explorer
          </p>
        </div>
        <button
          className="sm:hidden text-[#C0BCB5] text-2xl focuse:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/*for mobile*/}
          &#9776;
        </button>
        {/*for desktop navigation*/}
        <ul className="hidden sm:flex space-x-6 text-[#C0BCB5] font-bold text-lg">
          <li>
            <Link
              to="/"
              className="block hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/*For Mobile Menue*/}
      {isOpen && (
        <div className="sm:hidden mt-4">
          <ul className="space-y-4 text-[#C0BCB5] font-bold text-lg">
            <li>
              <Link
                to="/"
                className="block hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-white"
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
