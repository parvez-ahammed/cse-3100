import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";
import FilterStatus from "../components/FilterStatus";
import { useLocation } from "react-router-dom";
import Search from "../components/Search";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [searchTrigger, setSearchTrigger] = useState(false);
  useEffect(() => {
    const fetchCharacters = async () => {
      //const res = await fetch("https://rickandmortyapi.com/api/character");
      const ask = new URLSearchParams();
      if (name) ask.set("name", name);
      if (status) ask.set("status", status);
      const url = `https://rickandmortyapi.com/api/character?${ask.toString()}`;
      const res = await fetch(url);
      const data = await res.json();
      // setCharacters(data.results);
      setCharacters(data.results || []);
      setSearchParams(ask);
      setSearchTrigger(false);
    };
    fetchCharacters();
  }, [searchTrigger, setSearchParams]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 pb-10 text-bold bg-green-100">
      <div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-green md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Rick & Morty</span> Characters</h1>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 mb-4">
          <div className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
            <Search
              value={name}
              onChange={(v) => {setName(v); setSearchTrigger(true);}}
            />
          </div>
          <div className="border rounded-xl px-3 py-2  focus:outline-none focus:ring-2 focus:ring-black">
            <FilterStatus
              value={status}
              onChange={(v) => {setStatus(v); setSearchTrigger(true);}}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
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
