import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border border-gray-300 rounded-t-2xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-gray-900 text-lg">
            Rick &amp; Morty Explorer
          </span>
        </div>

        <div className="space-x-6 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="/About" className="hover:text-black">
            About Us
          </a>
          <a href="/Contact" className="hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
