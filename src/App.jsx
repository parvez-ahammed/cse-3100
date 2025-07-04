// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";

export default function App() {
  return (
    <BrowserRouter>
      <header className="bg-dark text-white py-3 shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4 mb-0">Rick & Morty Explorer</h1>
          <nav className="d-flex justify-content-center align-items-center" style={{ gap: "2rem" }}>
            <Link to="/" className="text-white fw-bold text-decoration-none">
              Home
            </Link>
            <Link to="/about" className="text-white fw-bold text-decoration-none">
              About
            </Link>
            <Link to="/contact" className="text-white fw-bold text-decoration-none">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
