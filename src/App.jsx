// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // 1. Import the Navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";

export default function App() {
  return (
    <BrowserRouter>
      {/* 2. Place Navbar here, outside of Routes, to show it on every page */}
      <Navbar /> 
      
      {/* Wrap page content in a main tag for semantic clarity */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}