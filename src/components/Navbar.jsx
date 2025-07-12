import React from "react";
import { Link, NavLink } from "react-router-dom";
import RnMLogo from "../assets/RnM.png";

const Navbar = () => {
  const linkClass =
    "font-orbitron text-gray-400 text-[1.1rem] px-3 py-1 rounded transition duration-300 hover:text-cyan-300";
  const activeClass = "text-cyan-400 drop-shadow-[0_0_10px_#00ffd5]";

  return (
    <nav className="backdrop-blur-md bg-black/40 shadow-[0_0_10px_rgba(0,255,204,0.3)] flex flex-wrap justify-between items-center px-8 py-3 gap-4">
      {/* Logo */}
      <div className="font-orbitron font-bold text-[1.6rem]">
        <Link to="/"></Link>
        <img
          src={RnMLogo}
          alt="Rick & Morty Logo"
          className="h-10 w-auto drop-shadow-[0_0_4px_#00ffd5]
"
        />
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 flex-wrap">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
