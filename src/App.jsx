import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetails from "./pages/CharacterDetails";

export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ Header/Navbar */}
      <header className="bg-white border-bottom py-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <h4 className="mb-0 fw-bold text-success">Rick & Morty Explorer</h4>
          <nav className="d-flex gap-4">
            <NavLink to="/" className="text-decoration-none text-dark" end>
              Home
            </NavLink>
            <NavLink to="/about" className="text-decoration-none text-dark">
              About Us
            </NavLink>
            <NavLink to="/contact" className="text-decoration-none text-dark">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
