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
      const query = new URLSearchParams();
      if (name) query.set("name", name);
      if (status) query.set("status", status);
      let qStr = query.toString();

      const url = `https://rickandmortyapi.com/api/character/?${qStr}`;
      const res = await fetch(url);
      const data = await res.json();

      setCharacters(data.results || []);
      console.log(data.results?.length);
      setSearchParams(query);
      setSearchTrigger(false);
    };
    fetchCharacters();
  }, [searchTrigger, setSearchParams]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-2 pb-8">
      {/* <form
        onSubmit={() => {
          setSearchTrigger(true);
        }}
        className="input"
      > */}
      <div className="flex flex-col min-w-2xs sm:min-w-xl min-h-12 sm:flex-row gap-4 my-4">
        <input
          type="text"
          placeholder="Search (by name)..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-xl sm:min-w-96 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
          className="p-2 min-w-28 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          onClick={() => {
            setSearchTrigger(true);
          }}
        >
          Search
        </button>
      </div>
      {/* </form> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-500 py-auto">
            No results found
          </p>
        )}
      </div>
    </main>
  );
}
