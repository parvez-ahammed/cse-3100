import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Mail, Info } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={handleLogoClick}
            className="text-white text-xl font-bold hover:text-green-200 transition-colors cursor-pointer"
          >
            Rick & Morty Explorer
          </button>

          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-white bg-opacity-20 text-white"
                  : "text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Home size={16} />
              <span>Home</span>
            </Link>

            <Link
              to="/about"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-white bg-opacity-20 text-white"
                  : "text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Info size={16} />
              <span>About</span>
            </Link>

            <Link
              to="/contact"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "bg-white bg-opacity-20 text-white"
                  : "text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Mail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
