import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggleButton;
