import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <h3 onClick={() => navigate("/")}>Rick & Morty Explorer</h3>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </>
  );
}
