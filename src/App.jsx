import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CharacterPage from "./Pages/CharacterPage"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-1 pt-25">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/**/}<Route path="/character" element={<CharacterPage/>} />
          </Routes>
        </main>
      <div className="text-center text-white">
        <h1>Created By  
        <a href="https://www.linkedin.com/in/md-asifuzzaman-shanto-241b13280/"> MD. ASIFUZZAMAN SHANTO</a>
      </h1></div>
      </div>
    </BrowserRouter>
  );
}
