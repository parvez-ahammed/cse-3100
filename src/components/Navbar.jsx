import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-blue-600 to-emerald-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl md:text-3xl font-bold tracking-wide transition-transform duration-300 hover:scale-125 hover:text-lime-300 hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] transform-gpu"
        >
          🧪 Rick & Morty App
        </NavLink>


        {/* Navigation Links */}
        <div className="space-x-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition duration-300 ${isActive
                ? "bg-white text-indigo-700 shadow"
                : "hover:bg-lime-300 hover:text-indigo-900 hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition duration-300 ${isActive
                ? "bg-white text-blue-700 shadow"
                : "hover:bg-pink-300 hover:text-blue-900 hover:drop-shadow-[0_0_8px_rgba(249,168,212,0.8)]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition duration-300 ${isActive
                ? "bg-white text-emerald-700 shadow"
                : "hover:bg-emerald-300 hover:text-emerald-900 hover:drop-shadow-[0_0_8px_rgba(110,231,183,0.8)]"
              }`
            }
          >
            Contact
          </NavLink>

        </div>
      </div>
    </nav>
  );
}
