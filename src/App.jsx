
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CharacterDetail from './pages/CharacterDetail';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto px-6 py-10 bg-gray-900/10 backdrop-blur-sm min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
