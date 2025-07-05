import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import './index.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/character/:id" element={<CharacterDetail />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <p>&copy; 2024 Rick & Morty Explorer. Built with React & Rick and Morty API</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;