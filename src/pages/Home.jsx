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
    <main className="min-h-screen flex flex-col items-center justify-start p-2 pb-8">
      {/* <h1 className="my-8 text-3xl font-bold">Rick & Morty Explorer</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {characters.map((char) => (
          <div key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
    </main>
  );
}
