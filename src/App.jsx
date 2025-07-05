import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <span>∮</span> Rick & Morty Explorer
          </Link>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <div className="app-container">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
            </Routes>
          </main>
        </div>

        {/* The footer element has been removed from here */}
      </div>
    </BrowserRouter>
  );
}

export default App;
