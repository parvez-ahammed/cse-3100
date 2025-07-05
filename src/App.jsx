import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";
import { ThemeProvider } from "./context/ThemeContext"; // Import the provider
import ThemeToggleButton from "./components/ThemeToggleButton"; // Import the button

function App() {
  return (
    <ThemeProvider>
      {" "}
      {/* Wrap the entire app with the ThemeProvider */}
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
              <ThemeToggleButton /> {/* Add the toggle button here */}
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
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
