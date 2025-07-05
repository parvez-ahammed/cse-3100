
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import CharacterDetailsPage from "../pages/CharacterDetail";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
