import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      style={{
        padding: "0.4rem 0.8rem",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#333" : "#ddd",
        color: theme === "light" ? "#fff" : "#222",
        fontWeight: "600",
        marginLeft: "1rem",
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
