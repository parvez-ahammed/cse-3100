import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./DarkModeToggle.css";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className="darkmode-toggle-btn"
      onClick={() => setDark((d) => !d)}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
