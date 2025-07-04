import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b mb-6 shadow-sm relative z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-800">
          Rick & Morty Explorer
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="hidden md:flex md:space-x-4">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-2 text-gray-700 ${
                  isActive ? "font-semibold text-blue-600" : ""
                } hover:text-black`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Sidebar */}
      {menuOpen && (
        <>
          
          <div
            className="fixed inset-0 backdrop-blur-sm z-30"
            onClick={() => setMenuOpen(false)}
          ></div>

          
          <nav className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col p-4 space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded ${
                      isActive
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
