import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";
import Footer from "./components/Footer"; // ✅ Add this line

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container"> {/* ✅ Add wrapper for sticky layout */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
        <Footer /> {/* ✅ Add footer below routes, outside <Routes> */}
      </div>
    </BrowserRouter>
  );
}
