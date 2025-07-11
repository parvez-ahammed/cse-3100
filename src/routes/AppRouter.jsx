// src/routes/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CharacterDetail from "../pages/CharacterDetail";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // ✅ Import

export default function AppRouter() {
  return (
    <div className="app-container" style={{ paddingTop: "100px" }}>
      <Navbar /> {/* ✅ Fixed Navbar at the top */}
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
