import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [searchTrigger, setSearchTrigger] = useState(false);
  const query = useQuery();
  const searchName = query.get("search") || "";
  useEffect(() => {
    if (searchName && searchName !== name) {
      setName(searchName);
      setSearchTrigger(true);
    }
    if (!searchName && name) {
      setName("");
      setSearchTrigger(true);
    }
    // eslint-disable-next-line
  }, [searchName]);

  useEffect(() => {
    const fetchCharacters = async () => {
      //const res = await fetch("https://rickandmortyapi.com/api/character");
      const ask = new URLSearchParams();
      if (name) ask.set("name", name);
      console.log("name", name);
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
        <div className="flex items-center justify-end mb-4">
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
            onClick={() => setSearchTrigger(true)}
            className="ml-4 px-4 py-2 bg-black text-white rounded-xl"
          >
            Filter
          </button>
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
