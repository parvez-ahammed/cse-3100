import { BrowserRouter, Routes, Route } from "react-router-dom";import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-vh-100 d-flex flex-column">
          <Navbar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
            </Routes>
          </div>
          <footer className="bg-dark text-light py-3 mt-auto">
            <div className="container text-center">
              <small>
                © 2025 Rick & Morty Explorer | Built with React & Bootstrap |
                Data from{" "}
                <a
                  href="https://rickandmortyapi.com/"
                  className="text-info"
                >
                  Rick and Morty API
                </a>
              </small>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
