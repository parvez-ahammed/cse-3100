import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CharacterDetailsPage from '../pages/CharacterDetailsPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterDetailsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
