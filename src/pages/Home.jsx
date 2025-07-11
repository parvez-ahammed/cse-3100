import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]); // raw API data (20 per apiPage)
  const [totalResults, setTotalResults] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [uiPage, setUiPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [apiPage, setApiPage] = useState(Math.ceil(uiPage / 2) || 1);
  const [maxPage, setMaxPage] = useState(1);
  const [searchTrigger, setSearchTrigger] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const query = new URLSearchParams();
        if (name) query.set("name", name);
        if (status) query.set("status", status);
        query.set("page", apiPage);

        const url = `https://rickandmortyapi.com/api/character/?${query.toString()}`;
        const res = await fetch(url);
        const data = await res.json();

        setCharacters(data.results || []);
        setTotalResults(data.info?.count || 0);
        setMaxPage(Math.ceil((data.info?.count || 0) / 10)); // 10 per UI page
        setSearchParams({ name, status, page: uiPage });
      } catch (error) {
        console.error("Error fetching data:", error);
        setCharacters([]);
        setMaxPage(1);
      }
      setSearchTrigger(false);
    };

    fetchCharacters();
  }, [searchTrigger, apiPage, name, status, uiPage, setSearchParams]);

  // Determine which 10 characters to show
  const startIndex = ((uiPage - 1) % 2) * 10;
  const visibleCharacters = characters.slice(startIndex, startIndex + 10);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 pb-8">
      <h1 className="my-6 text-3xl font-bold">Rick & Morty Explorer</h1>

      {/* Search & filter */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 mb-6 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search (by name)..."
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
          className="px-4 py-2 min-w-24 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          onClick={() => {
            setUiPage(1);
            setApiPage(1);
            setSearchTrigger(true);
          }}
        >
          Search
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mt-4">
        {visibleCharacters.length > 0 ? (
          visibleCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No results found
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          disabled={uiPage <= 1}
          onClick={() => {
            const newPage = uiPage - 1;
            setUiPage(newPage);
            if ((newPage - 1) % 2 === 0) setApiPage((prev) => prev - 1); // new UI page needs previous apiPage
            setSearchTrigger(true);
          }}
          className={`px-4 py-2 rounded-xl font-medium ${
            uiPage <= 1
              ? "bg-gray-300"
              : "bg-gray-600 text-white hover:bg-gray-800"
          }`}
        >
          Prev
        </button>
        <span className="text-gray-700 my-auto font-semibold">
          Page {uiPage} of {maxPage}
        </span>
        <button
          disabled={uiPage >= maxPage}
          onClick={() => {
            const newPage = uiPage + 1;
            setUiPage(newPage);
            if ((newPage - 1) % 2 === 0) setApiPage((prev) => prev + 1); // need next apiPage
            setSearchTrigger(true);
          }}
          className={`px-4 py-2 rounded-xl font-medium ${
            uiPage >= maxPage
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
