// src/routes/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CharacterDetail from "../pages/CharacterDetail";
import Footer from "../components/Footer";

export default function AppRouter() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
