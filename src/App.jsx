import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <nav className="navbar navbar-expand navbar-light bg-light px-3 mb-4">
        <Link to="/" className="navbar-brand fw-bold">Rick & Morty</Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      {/* Route-based page rendering */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
