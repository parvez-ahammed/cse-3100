import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate(); // hook for routing

  const handleHome = () => {
    navigate("/");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header
      className={`${
        isDark ? "bg-black border-green-400" : "bg-white border-blue-400"
      } border-b-2 p-4`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={handleHome}>
          <div
            className={`w-10 h-10 ${
              isDark ? "bg-green-400" : "bg-blue-400"
            } rounded-full flex items-center justify-center mr-3`}
          >
            <span
              className={`${
                isDark ? "text-black" : "text-white"
              } font-bold text-sm`}
            >
              R&M
            </span>
          </div>
          <h1
            className={`${
              isDark ? "text-green-400" : "text-blue-600"
            } text-xl font-bold`}
          >
            RICK & MORTY
          </h1>
        </div>

        {/* Navigation and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Navigation */}
          <nav className="flex space-x-4">
            <button
              onClick={handleAbout}
              className={`${
                isDark
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-purple-500 hover:bg-purple-600"
              } text-white px-4 py-2 rounded font-semibold`}
            >
              About Us
            </button>
            <button
              onClick={handleContact}
              className={`${
                isDark
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-red-500 hover:bg-red-600"
              } text-white px-4 py-2 rounded font-semibold`}
            >
              Contact
            </button>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`${
              isDark
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-gray-800 hover:bg-gray-900"
            } text-white px-3 py-2 rounded font-semibold`}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
