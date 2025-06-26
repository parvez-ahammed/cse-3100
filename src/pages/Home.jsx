import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [searchTrigger, setSearchTrigger] = useState(false);
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = new URLSearchParams();
      if (name) query.set("name", name);
      if (status) query.set("status", status);
      query.set("page", parseInt((page + 1) / 2));
      let qStr = query.toString();

      const url = `https://rickandmortyapi.com/api/character/?${qStr}`;
      const res = await fetch(url);
      const data = await res.json();

      var slicedData = [];

      if (page % 2 !== 0) {
        slicedData = data.results?.slice(0, 10) || [];
      } else {
        slicedData = data.results?.slice(10, 20) || [];
      }

      setCharacters(slicedData);
      setMaxPage(data.info?.pages * 2 - 1 || 1);
      query.set("page", page);
      setSearchParams(query);
      setSearchTrigger(false);
    };
    fetchCharacters();
  }, [searchTrigger, page, setSearchParams]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-2 pb-4">
      <div className="flex flex-col min-w-2xs sm:min-w-xl min-h-12 sm:flex-row gap-4 mt-4 mb-6">
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
            setPage(1);
            setSearchTrigger(true);
          }}
        >
          Search
        </button>
      </div>
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
      <div className="flex justify-center mt-6 space-x-4">
        <button
          disabled={page <= 1}
          onClick={() => {
            setPage((prev) => prev - 1);
            setSearchTrigger(true);
          }}
          className={`px-4 py-2 rounded-xl font-medium ${
            page <= 1
              ? "bg-gray-300"
              : "bg-gray-600 text-white hover:bg-gray-800"
          }`}
        >
          Prev
        </button>
        <span className="text-gray-700 my-auto font-semibold">
          Page {page} of {maxPage}
        </span>
        <button
          disabled={page >= maxPage}
          onClick={() => {
            setPage((prev) => prev + 1);
            setSearchTrigger(true);
          }}
          className={`px-4 py-2 rounded-xl font-medium ${
            page >= maxPage
              ? "bg-gray-300"
              : "bg-gray-600 text-white hover:bg-gray-800"
          }`}
        >
          Next
        </button>
      </div>
    </main>
  );
}
