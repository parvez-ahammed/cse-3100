import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r bg-gray-950 hadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Title (left side) */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Rick & Morty Explorer
            </h1>
          </div>

          {/* Navigation Links (right side) */}
          <nav className="ml-auto flex space-x-1">
            <Link
              to="/"
              className={`px-5 py-3 rounded text-base font-semibold transition-all duration-200 ${
                isActive("/")
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-indigo-100 hover:bg-gray-500 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-5 py-3 rounded text-base font-semibold transition-all duration-200 ${
                isActive("/about")
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-indigo-100 hover:bg-gray-500 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-3 rounded text-base font-semibold transition-all duration-200 ${
                isActive("/contact")
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-indigo-100 hover:bg-gray-500 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}