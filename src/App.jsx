import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
