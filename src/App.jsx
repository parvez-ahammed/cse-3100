import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/Theme";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  // Developer signature - display in console
  React.useEffect(() => {
    console.log(`
    🚀 Rick & Morty Explorer
    
    Developer: Md. Rubayet Islam
    University: Ahsanullah University of Science and Technology
    Department: Computer Science & Engineering (CSE)
    Semester: 3rd Year, 1st Semester
    Student ID: 20220204069
    
    Built with ❤️ using React, Vite, and the Rick & Morty API
    `);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
