import { useEffect, useRef, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [visible, setVisible] = useState(3);
  const visiblevalue = useRef(3)
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  const showCharacter = characters.slice(0, visiblevalue.current).filter(char =>
    char.name.toLowerCase().includes(search.toLowerCase())
  )
    ;

  return (
    <main className="container mx-auto flex flex-col items-center p-6">
      <h1 className="my-4 text-2xl font-bold">Rick & Morty Explorer</h1>
      <input
        type="text"
        placeholder="Search characters..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setVisible(3);
        }}
        className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {showCharacter.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      {showCharacter.length > 0 && showCharacter.length < characters.filter(char =>
        char.name.toLowerCase().includes(search.toLowerCase())
      ).length && (
          <button
            onClick={() => {
              visiblevalue.current += 3
              setVisible(visiblevalue.current)
            }}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Load More
          </button>
        )}


      {showCharacter.length === 0 && (
        <p className="mt-6 text-gray-500">No characters found.</p>
      )}
    </main>
  );
}
