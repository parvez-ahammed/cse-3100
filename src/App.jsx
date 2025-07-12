import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetails from "./pages/CharacterDetails";

export default function App() {
  return (
    <BrowserRouter>
      {/* Nav Bar */}
      <nav style={{ padding: "1rem", background: "#f0f0f0ff", textAlign: "center" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
