import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";
import Navbar from "./components/Navbar"; // Import the Navbar component

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Render the Navbar here, outside of Routes so it's on all pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/character/:id' element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
