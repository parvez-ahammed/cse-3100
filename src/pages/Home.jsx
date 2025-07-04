import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1> 
      <h2 className="mb-4">Explore the Multiverses of Rick & Morty</h2>
      <div className="row">
        {characters.map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
    </main>
  );
}
