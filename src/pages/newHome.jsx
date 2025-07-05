import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import BottomNavBar from "../components/BottomNavBar";
import DarkModeToggle from "../components/DarkModeToggle";

import { FaChevronRight } from "react-icons/fa";
import "./carousel.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [centerIdx, setCenterIdx] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  if (characters.length === 0) {
    return <p style={{textAlign: 'center', marginTop: 40}}>Loading...</p>;
  }

  // Carousel logic
  const leftIdx = (centerIdx - 1 + characters.length) % characters.length;
  const rightIdx = (centerIdx + 1) % characters.length;
  const centerChar = characters[centerIdx];
  const leftChar = characters[leftIdx];
  const rightChar = characters[rightIdx];

  return (
    <>
      <DarkModeToggle />
      <main className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '70vh', justifyContent: 'center'}}>
        <h1 className="my-4" style={{fontWeight: 800, letterSpacing: 1, marginBottom: 32}}>Rick & Morty Explorer</h1>
        <div className="carousel-container" style={{width: 420, maxWidth: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, margin: '0 auto'}}>
          {/* Left image */}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 110}}>
            <img
              src={leftChar.image}
              alt={leftChar.name}
              className="carousel-img left"
              onClick={() => setCenterIdx(leftIdx)}
              draggable={false}
            />
          </div>
          {/* Center image */}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 210}}>
            <img
              src={centerChar.image}
              alt={centerChar.name}
              className="carousel-img center"
              draggable={false}
              style={{background: '#f3f4f6'}}
            />
            <div className="carousel-info">
              <div className="name">{centerChar.name}</div>
              <div className="meta">
                <span style={{marginRight: 12}}><b>Status:</b> {centerChar.status}</span><br/>
                <span><b>Species:</b> {centerChar.species}</span>
              </div>
            </div>
          </div>
          {/* Right image + next icon */}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 110}}>
            <img
              src={rightChar.image}
              alt={rightChar.name}
              className="carousel-img right"
              onClick={() => setCenterIdx(rightIdx)}
              draggable={false}
            />
            <button className="carousel-next-btn" style={{marginTop: 18}} onClick={() => setCenterIdx(rightIdx)}>
              <FaChevronRight size={24} color="#fff" />
            </button>
          </div>
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}