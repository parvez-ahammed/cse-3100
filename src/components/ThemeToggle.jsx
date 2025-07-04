import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        padding: "8px 16px",
        borderRadius: "6px",
        border: "none",
        background: dark ? "#444" : "#eee",
        color: dark ? "#fff" : "#222",
        cursor: "pointer",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
      }}
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle theme"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}