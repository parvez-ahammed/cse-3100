import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    
      <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}