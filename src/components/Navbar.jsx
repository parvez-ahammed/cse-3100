import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    
<div className="bg-gray-900 w-full">
  <div className="flex items-center justify-between py-4 mb-5 border-b border-b-gray-400 px-0">
    
    {/* Logo & Title: Flush to left */}
    <Link to="/" className="flex items-center gap-2 cursor-pointer px-2 ml-4 rounded">
      <img className="w-24" src={assets.logo} alt="Logo" />
      <span
        className="font-semibold text-xl cursor-pointer select-none"
        style={{
          WebkitTextStroke: "1px #098d3b",
          color: "#87cfd1",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Rick and Morty Explorer
      </span>
    </Link>

    {/* Nav Links centered within container */}
    <div className="hidden md:flex items-center">
      <ul className="flex items-center gap-6 font-medium pr-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-gray-300 hover:text-primary"
          }
        >
          {({ isActive }) => (
            <li className="py-1 cursor-pointer flex flex-col items-center">
              Home
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 mt-1 ${
                  isActive ? "block" : "hidden"
                }`}
              />
            </li>
          )}
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-gray-300 hover:text-primary"
          }
        >
          {({ isActive }) => (
            <li className="py-1 cursor-pointer flex flex-col items-center">
              About
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 mt-1 ${
                  isActive ? "block" : "hidden"
                }`}
              />
            </li>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-gray-300 hover:text-primary"
          }
        >
          {({ isActive }) => (
            <li className="py-1 cursor-pointer flex flex-col items-center">
              Contact
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 mt-1 ${
                  isActive ? "block" : "hidden"
                }`}
              />
            </li>
          )}
        </NavLink>
      </ul>
    </div>
  </div>
</div>




  );
};

export default Navbar;
