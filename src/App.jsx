import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "10px", background: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
