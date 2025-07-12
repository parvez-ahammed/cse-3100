import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        padding: "0.5rem 1rem",
        cursor: "pointer",
        zIndex: 1000,
      }}
      aria-label="Toggle dark/light mode"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: "1rem" }}>
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
