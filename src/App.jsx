import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/navbar";
import CharacterDetail from "./pages/CharacterDetail"; 

export default function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </main>
    </Router>
  );
}