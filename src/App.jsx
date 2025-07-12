import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";

export default function App() {
  const location = useLocation();
  const current = location.pathname;

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#121212" : "#ffffff";
    document.body.style.color = theme === "dark" ? "#eeeeee" : "#111111";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isActive = (path) =>
    current === path
      ? theme === "dark"
        ? "#00ff9f"
        : "#00776f"
      : theme === "dark"
      ? "#aaaaaa"
      : "#333333";

  return (
    <div style={{ minHeight: "100vh" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
          background: theme === "dark" ? "#1f1f1f" : "#f4f4f4",
          borderBottom: "1px solid #ccc",
        }}
      >
        <div style={{ display: "flex", gap: "24px" }}>
          <Link to="/" style={{ color: isActive("/"), textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/about"
            style={{ color: isActive("/about"), textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{ color: isActive("/contact"), textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
        
        <h1 style={{ textAlign: "center", color: theme === "dark" ? "#00ff9f" : "#00776f" }}>
        Rick & Morty Explorer
      </h1>

        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 14px",
            backgroundColor: theme === "dark" ? "#333333" : "#e0e0e0",
            color: theme === "dark" ? "#ffffff" : "#000000",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/character/:id" element={<CharacterDetail theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
      </Routes>
    </div>
  );
}
