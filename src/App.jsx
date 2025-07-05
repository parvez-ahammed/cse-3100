import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetails from "./pages/CharacterDetails";

export default function App() {
  // State for theme (light or dark)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Sync theme with localStorage and apply to body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <div className="theme-container">
        <nav className="nav">
          <Link to="/" className="nav-brand">
            Rick & Morty Explorer
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            {/* Night mode toggle button */}
            <button onClick={toggleTheme} className="btn btn-outline-primary">
              {theme === "light" ? "🌙 Dark" : "☀ Light"}
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}