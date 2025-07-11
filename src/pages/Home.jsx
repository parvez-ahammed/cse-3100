import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [searchTrigger, setSearchTrigger] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const query = new URLSearchParams();
        if (name) query.set("name", name);
        if (status) query.set("status", status);
        const url = `https://rickandmortyapi.com/api/character/?${query.toString()}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.results) {
          setCharacters(data.results);
        } else {
          setCharacters([]);
        }
        setSearchParams(query);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
        setCharacters([]);
      }
      setSearchTrigger(false);
    };

    fetchCharacters();
  }, [searchTrigger, name, status, setSearchParams]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 pb-8">
      <h1 className="my-6 text-3xl font-bold">Rick & Morty Explorer</h1>

      {/* Search & filter */}
      <div className="flex flex-col sm:flex-row gap-4 my-4 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search by name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-xl px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button
          className="px-4 py-2 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          onClick={() => setSearchTrigger(true)}
        >
          Search
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mt-4">
        {characters.length > 0 ? (
          characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No results found
          </p>
        )}
      </div>
    </main>
  );
}
