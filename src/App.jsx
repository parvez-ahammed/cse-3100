import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";
import Navbar from "./components/Navbar"; // ✅ Import Navbar

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* ✅ Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
