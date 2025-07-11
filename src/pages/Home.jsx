import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/header";

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
      <div className="m-0 p-0">
        <Header />
      </div>
      <div className="m-20 p-5">
        <h1 className="text-2xl font-semibold text-gray-800 my-4">
          Characters:
        </h1>
        <div className="row pr-20">
          {characters.map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
