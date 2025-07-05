import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  const fetchCharacters = async () => {
    const query = new URLSearchParams({ name, status, page });

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?${query}`);
      const data = await res.json();
      if (data.results) {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } else {
        setCharacters([]);
        setTotalPages(1);
      }
    } catch (err) {
      setCharacters([]);
      setTotalPages(1);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [name, status, page]);

  const handleSearchChange = (e) => {
    setSearchParams({ name: e.target.value, status, page: 1 });
  };

  const handleStatusChange = (e) => {
    setSearchParams({ name, status: e.target.value, page: 1 });
  };

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ name, status, page: newPage });
    }
  };

  return (
    <div className="min-h-screen bg-cyan-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Search by name..."
            value={name}
            onChange={handleSearchChange}
            className="border-2 border-cyan-400 p-2 rounded w-full sm:w-auto placeholder-cyan-700 text-cyan-800"
          />
          <select
            value={status}
            onChange={handleStatusChange}
            className="border-2 border-cyan-400 p-2 rounded w-full sm:w-auto text-cyan-800"
          >
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <button
            onClick={() => setSearchParams({ name, status, page: 1 })}
            className="bg-cyan-200 text-cyan-800 border border-cyan-600 px-4 py-2 rounded hover:bg-cyan-300"
          >
            Search
          </button>
          <button
            onClick={() => setSearchParams({})}
            className="bg-red-200 text-red-800 border border-red-500 px-4 py-2 rounded hover:bg-red-300"
          >
            Reset
          </button>
        </div>

        {/* Character Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.length > 0 ? (
            characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No results found</p>
          )}
        </div>

        {/* Pagination with page numbers */}
        <div className="flex justify-center mt-8 space-x-2 flex-wrap">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page <= 1}
            className="bg-cyan-800 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
            <button
              key={pg}
              onClick={() => goToPage(pg)}
              className={`px-4 py-2 rounded ${
                pg === page
                  ? "bg-black text-white"
                  : "bg-cyan-200 text-cyan-800 hover:bg-cyan-300"
              }`}
            >
              {pg}
            </button>
          ))}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages}
            className="bg-cyan-800 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
